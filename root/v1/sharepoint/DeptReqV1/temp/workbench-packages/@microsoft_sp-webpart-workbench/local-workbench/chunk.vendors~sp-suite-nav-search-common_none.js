(window["webpackJsonpf8a8ad94_4cf3_4a19_a76b_1cec9da00219_0_1_0"] = window["webpackJsonpf8a8ad94_4cf3_4a19_a76b_1cec9da00219_0_1_0"] || []).push([["vendors~sp-suite-nav-search-common"],{

/***/ "2mDI":
/*!******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/state.js ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: BUILD_VERSION, init, thr, puid, cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thr", function() { return thr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "puid", function() { return puid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "d/hp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BUILD_VERSION", function() { return _version__WEBPACK_IMPORTED_MODULE_0__["BUILD_VERSION"]; });



var state;
/**
 * Initializes the prefetch library with the specified state.
 *
 * @param initialState The initial state of the prefetch library.
 */
function init(initialState) {
    (state && thr("Can not set initial state more than once.")) ||
        (initialState.cache.participants.push(_version__WEBPACK_IMPORTED_MODULE_0__["BUILD_VERSION"]),
            (state = initialState));
}
/**
 * Throws an error with the specified message.
 *
 * @param msg The error message.
 */
function thr(msg) {
    throw new Error(msg);
}
var puid = getter("puid");
var cache = getter("cache");
function getter(prop) {
    return function () {
        return (state && state[prop]) || thr("Trying to get " + prop + " before it is set.");
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLENBQUM7QUFFekIsSUFBSSxLQUF1QyxDQUFDO0FBRTVDOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsSUFBSSxDQUFDLFlBQWtDO0lBQ3JELENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQ3pELENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNwRCxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLEdBQUcsQ0FBQyxHQUFXO0lBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkIsQ0FBQztBQUVELE1BQU0sQ0FBQyxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkMsTUFBTSxDQUFDLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUVyQyxTQUFTLE1BQU0sQ0FDYixJQUFPO0lBRVAsT0FBTztRQUNMLE9BQUEsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLG1CQUFpQixJQUFJLHVCQUFvQixDQUFDO0lBQXhFLENBQXdFLENBQUM7QUFDN0UsQ0FBQyJ9

/***/ }),

/***/ "4QhR":
/*!*************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/fbjs@0.1.0-alpha.7/node_modules/fbjs/lib/invariant.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function (condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

/***/ }),

/***/ "4o6J":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/ecsUtils.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: ecsSearchConfigurationUrl, extractEcsProperties, transformEcsResponseText, pluginAndGroupMapping, convertSettingsWithKeyToArray, applyEcsOverrides, mergeDeep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ecsSearchConfigurationUrl", function() { return ecsSearchConfigurationUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractEcsProperties", function() { return extractEcsProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformEcsResponseText", function() { return transformEcsResponseText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluginAndGroupMapping", function() { return pluginAndGroupMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertSettingsWithKeyToArray", function() { return convertSettingsWithKeyToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyEcsOverrides", function() { return applyEcsOverrides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony import */ var _1js_search_dispatcher_lib_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @1js/search-dispatcher/lib/dispatcher */ "9coA");
/* harmony import */ var _browserUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browserUtils */ "8wLM");
/* harmony import */ var _createSafeToLogError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createSafeToLogError */ "nt8F");
/* harmony import */ var _extractRelevantEcsConfigIds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extractRelevantEcsConfigIds */ "uZKL");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var ecsSearchConfigurationUrl = function (clientWorkLoad, userId, tenantId, ring) {
    return "https://ecs.office.com/config/v1/LokiService/1.0.0.0?" +
        "agents=MicrosoftSearch" +
        "&ecsserviceinformation=true" +
        ("&ClientWorkload=" + clientWorkLoad) +
        ("&id=" + userId) +
        ("&TenantID=" + tenantId) +
        ("&ring=" + ring);
};
function extractEcsProperties(responseText) {
    var ecsProperties = {};
    if (responseText) {
        var searchConfig_1 = JSON.parse(responseText);
        if (searchConfig_1.ecsConfigIds && searchConfig_1.ecsEtag) {
            ecsProperties.ecsConfigIds = Object(_extractRelevantEcsConfigIds__WEBPACK_IMPORTED_MODULE_3__["getEcsIds"])(searchConfig_1.ecsConfigIds) || "";
            // Strip out unwanted quotation marks
            ecsProperties.ecsEtag = searchConfig_1.ecsEtag.replace(/"/g, "");
            // Log relevant ECS settings (which start with "searchux.")
            var relevantEcsSettings_1 = {};
            var expectedMatch_1 = "searchux.";
            var matchLength_1 = expectedMatch_1.length;
            searchConfig_1.ecsSettings &&
                Object.keys(searchConfig_1.ecsSettings)
                    .filter(function (key) {
                    return typeof searchConfig_1.ecsSettings[key] === "boolean" &&
                        key.substr(0, matchLength_1) === expectedMatch_1;
                })
                    .forEach(function (key) {
                    return (relevantEcsSettings_1[key.substr(matchLength_1)] =
                        searchConfig_1.ecsSettings[key]);
                });
            ecsProperties.ecsSettings = JSON.stringify(relevantEcsSettings_1);
        }
    }
    return ecsProperties;
}
/* Transforms the ECS config to the same format as the Loki SearchConfiguration */
function transformEcsResponseText(responseText) {
    var _a, _b;
    if (!responseText) {
        return "";
    }
    try {
        var response = JSON.parse(responseText);
        var ecsSettings = applyEcsOverrides("ecsSbOverrides", "wipeSbEcsConfig", response === null || response === void 0 ? void 0 : response.MicrosoftSearch);
        var newEcsSettings = pluginAndGroupMapping(ecsSettings);
        var ecsEtag = (_a = response === null || response === void 0 ? void 0 : response.Headers) === null || _a === void 0 ? void 0 : _a.ETag;
        var ecsConfigIds = [(_b = response === null || response === void 0 ? void 0 : response.ConfigIDs) === null || _b === void 0 ? void 0 : _b.MicrosoftSearch];
        return JSON.stringify({
            ecsSettings: newEcsSettings,
            ecsConfigIds: ecsConfigIds,
            ecsEtag: ecsEtag,
        });
    }
    catch (e) {
        Object(_createSafeToLogError__WEBPACK_IMPORTED_MODULE_2__["throwSafeToLogError"])("Failed to parse ECS config");
    }
}
// tslint:disable-next-line:typedef
function pluginAndGroupMapping(ecsSettings) {
    // If mapping to the old schema is not required, return the settings directly
    if (!ecsSettings["searchux.useNewEcsSchema"]) {
        return ecsSettings;
    }
    var plugins = convertContainerPluginSettings(ecsSettings);
    var groups = convertGroupSettings(ecsSettings);
    return __assign(__assign(__assign({}, ecsSettings), { searchBoxPluginConfiguration: { plugins: plugins } }), {
        searchBoxSuggestionProviderConfiguration: {
            groups: groups,
            streamPolicy: ecsSettings["searchux.suggestionGroupStreamPolicy"],
        },
    });
}
/**
 * Converts all setting values using the provided mapper into an sorted array.
 * @param settings is a set of key-value-pairs.
 * @param subKey is a subset of the key to extract values for.
 * @param mapper is a function that maps the key-value-pairs to the desired output.
 * @return an array of the mapped key-value-pairs.
 */
function convertSettingsWithKeyToArray(settings, subKey, mapper) {
    return Object.keys(settings)
        .filter(function (key) { return key.indexOf(subKey) > -1 && settings[key]; })
        .sort(function (firstKey, secondKey) {
        return getPosition(settings[firstKey]) - getPosition(settings[secondKey]);
    })
        .map(function (key) {
        try {
            return mapper(key, settings[key]);
        }
        catch (e) {
            Object(_1js_search_dispatcher_lib_dispatcher__WEBPACK_IMPORTED_MODULE_0__["getDispatcher"])().dispatch({
                name: "generic_error",
                nameDetail: "ecsUtils.convertSettingsWithKeyToArray",
                eventType: "ERROR",
                detail: "Mapper failed on key: " + key,
            });
        }
    })
        .filter(function (setting) { return setting; });
}
/**
 * @param settings is the provider group setting.
 * @return an array of suggestion providers.
 */
function convertProviderSettings(settings) {
    return convertSettingsWithKeyToArray(settings, "providers.", function (key) { return "searchux.suggestionProvider.provider." + key.split(".")[1]; });
}
/**
 * @param settings is the setting retrieved from ECS.
 * @return an array of plugin ids.
 */
function convertContainerPluginSettings(settings) {
    return convertSettingsWithKeyToArray(settings, "searchBoxPluginConfiguration.", function (key) { return ({
        id: "searchux.searchBoxPlugin." + key.split(".")[1],
    }); });
}
/**
 * @param settings is the setting retrieved from ECS.
 * @return an array of suggestion providers.
 */
function convertGroupSettings(settings) {
    return convertSettingsWithKeyToArray(settings, "suggestionProviderGroups.", function (key, group) { return ({
        id: key.split(".")[1],
        optimalCount: group.optimalCount,
        maxCount: group.maxCount,
        component: group.component,
        ariaLabel: group.ariaLabel,
        heading: group.heading,
        providers: convertProviderSettings(group),
    }); });
}
function applyEcsOverrides(overridesKey, wipeKey, ecsSettings) {
    var willOverrideConfig = Object(_browserUtils__WEBPACK_IMPORTED_MODULE_1__["getQueryStringValue"])(wipeKey);
    if (willOverrideConfig && willOverrideConfig.toLowerCase() === "true") {
        ecsSettings = {};
    }
    var ecsOverrides = decodeURIComponent(Object(_browserUtils__WEBPACK_IMPORTED_MODULE_1__["getQueryStringValue"])(overridesKey));
    return !ecsOverrides
        ? ecsSettings
        : mergeDeep(ecsSettings, JSON.parse(ecsOverrides));
}
/**
 * Extracts the position from the given object or defaults to
 * Number.MAX_VALUE if it's not defined.
 * @param settingWithPosition is an object that might contain the position property.
 * @return the position from the object or the default.
 */
function getPosition(settingWithPosition) {
    return settingWithPosition.position === undefined ||
        settingWithPosition.position === null
        ? Number.MAX_VALUE
        : settingWithPosition.position;
}
function isObject(item) {
    return item !== null && typeof item === "object" && !Array.isArray(item);
}
function mergeDeep(target, source) {
    if (!isObject(target)) {
        return target;
    }
    var output = __assign({}, target);
    if (isObject(source)) {
        Object.keys(source).forEach(function (key) {
            if (isObject(source[key])) {
                if (key in target) {
                    output[key] = mergeDeep(target[key], source[key]);
                }
                else {
                    output[key] = source[key];
                }
            }
            else {
                output[key] = source[key];
            }
        });
    }
    return output;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNzVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZWNzVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFNdEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBZ0IxRCxNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBRyxVQUN2QyxjQUFzQixFQUN0QixNQUFjLEVBQ2QsUUFBZ0IsRUFDaEIsSUFBWTtJQUVaLE9BQUEsdURBQXVEO1FBQ3ZELHdCQUF3QjtRQUN4Qiw2QkFBNkI7U0FDN0IscUJBQW1CLGNBQWdCLENBQUE7U0FDbkMsU0FBTyxNQUFRLENBQUE7U0FDZixlQUFhLFFBQVUsQ0FBQTtTQUN2QixXQUFTLElBQU0sQ0FBQTtBQU5mLENBTWUsQ0FBQztBQUVsQixNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLFlBQXFCO0lBRXJCLElBQU0sYUFBYSxHQUE4QixFQUFFLENBQUM7SUFFcEQsSUFBSSxZQUFZLEVBQUU7UUFDaEIsSUFBTSxjQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5QyxJQUFJLGNBQVksQ0FBQyxZQUFZLElBQUksY0FBWSxDQUFDLE9BQU8sRUFBRTtZQUNyRCxhQUFhLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxjQUFZLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3hFLHFDQUFxQztZQUNyQyxhQUFhLENBQUMsT0FBTyxHQUFHLGNBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUUvRCwyREFBMkQ7WUFDM0QsSUFBTSxx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

/***/ }),

/***/ "5huL":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/fetchServiceData.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: fetchSpHomePrefetch, fetchSpHomeNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSpHomePrefetch", function() { return fetchSpHomePrefetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSpHomeNews", function() { return fetchSpHomeNews; });
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "y+O/");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetcher */ "AK9X");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


/* tslint:disable:no-any */
var createServiceDataFetcherFactory = function (serviceDataFunction) { return function (id) {
    return Object(_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"])(serviceDataFunction, {
        monitorName: id,
        cacheId: id,
        cacheVersion: "0",
        cacheItemLifetime: 1000 * 60 * 30,
        // We do not have a parameter that we can use at this point so using
        // zero key for now since we only have one type of request as well.
        cacheKeyExtractor: function () { return ({}); },
    });
}; };
function fetchSpHomeServiceData(_a) {
    var clientId = _a.clientId, token = _a.token, fetcher = _a.fetcher, requestDataProvider = _a.requestDataProvider;
    var _b = requestDataProvider(), endpoint = _b.endpoint, context = _b.context, microserviceFlights = _b.microserviceFlights;
    var requestOptions = {
        url: endpoint,
        method: "GET",
        headers: __assign(__assign({ Accept: "application/json;odata=verbose", "SPHome-ClientType": clientId, "SPHome-ApiContext": JSON.stringify(context) }, (token ? { Authorization: "Bearer " + token } : {})), (microserviceFlights && {
            "SPHome-MicroserviceFlights": microserviceFlights.join(";"),
        })),
    };
    return fetcher
        ? fetcher(endpoint, requestOptions)
            .then(function (response) { return response.json(); })
            .then(function (responseData) { return ({
            responseText: JSON.stringify(responseData),
        }); })
        : Object(_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])(requestOptions);
}
var createSpHomeServiceDataFetcher = createServiceDataFetcherFactory(fetchSpHomeServiceData);
var fetchSpHomePrefetch = createSpHomeServiceDataFetcher("sphome-rawsprefetch");
var fetchSpHomeNews = createSpHomeServiceDataFetcher("sphome-rawnews");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hTZXJ2aWNlRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9mZXRjaFNlcnZpY2VEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyxLQUFLLE1BQU0sU0FBUyxDQUFDO0FBQzVCLE9BQU8sT0FBMkMsTUFBTSxXQUFXLENBQUM7QUFHcEUsMkJBQTJCO0FBQzNCLElBQU0sK0JBQStCLEdBQUcsVUFDdEMsbUJBRTRCLElBQ3pCLE9BQUEsVUFBQyxFQUFVO0lBQ2QsT0FBTyxPQUFPLENBQUMsbUJBQW1CLEVBQUU7UUFDbEMsV0FBVyxFQUFFLEVBQUU7UUFDZixPQUFPLEVBQUUsRUFBRTtRQUNYLFlBQVksRUFBRSxHQUFHO1FBQ2pCLGlCQUFpQixFQUFFLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRTtRQUVqQyxvRUFBb0U7UUFDcEUsbUVBQW1FO1FBQ25FLGlCQUFpQixFQUFFLGNBQU0sT0FBQSxDQUFDLEVBQUUsQ0FBQyxFQUFKLENBQUk7S0FDOUIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxFQVhJLENBV0osQ0FBQztBQUVGLFNBQVMsc0JBQXNCLENBQUMsRUFLQztRQUovQixRQUFRLGNBQUEsRUFDUixLQUFLLFdBQUEsRUFDTCxPQUFPLGFBQUEsRUFDUCxtQkFBbUIseUJBQUE7SUFFYixJQUFBLEtBQTZDLG1CQUFtQixFQUFFLEVBQWhFLFFBQVEsY0FBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLG1CQUFtQix5QkFBMEIsQ0FBQztJQUN6RSxJQUFNLGNBQWMsR0FBRztRQUNyQixHQUFHLEVBQUUsUUFBUTtRQUNiLE1BQU0sRUFBRSxLQUFLO1FBQ2IsT0FBTyxzQkFDTCxNQUFNLEVBQUUsZ0NBQWdDLEVBQ3hDLG1CQUFtQixFQUFFLFFBQVEsRUFDN0IsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFDekMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLFlBQVUsS0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUNuRCxDQUFDLG1CQUFtQixJQUFJO1lBQ3pCLDRCQUE0QixFQUFFLG1CQUFtQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDNUQsQ0FBQyxDQUNIO0tBQ08sQ0FBQztJQUVYLE9BQU8sT0FBTztRQUNaLENBQUMsQ0FBRSxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQzthQUMvQixJQUFJLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ25DLElBQUksQ0FBQyxVQUFDLFlBQVksSUFBSyxPQUFBLENBQUM7WUFDdkIsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO1NBQzNDLENBQUMsRUFGc0IsQ0FFdEIsQ0FBNkI7UUFDbkMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBMkJELElBQU0sOEJBQThCLEdBQUcsK0JBQStCLENBQ3BFLHNCQUFzQixDQUN2QixDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsOEJBQThCLENBQy9ELHFCQUFxQixDQUN0QixDQUFDO0FBQ0YsTUFBTSxDQUFDLElBQU0sZUFBZSxHQUFHLDhCQUE4QixDQUFDLGdCQUFnQixDQUFDLENBQUMifQ==

/***/ }),

/***/ "7VFy":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/fetchPersonalRankingContext.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "y+O/");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetcher */ "AK9X");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"])(function fetchPersonalRankingContext(_a) {
    var endpoint = _a.endpoint, clientId = _a.clientId, token = _a.token;
    return Object(_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: endpoint + "?querytext='*'&ClientType='" + clientId + "'" +
            "&Properties='ClientFunction:PersonalRelevanceContext,FetchPersonalRelevanceContext:true'" +
            "&EnableQueryRules=false&ProcessBestBets=false&BypassResultTypes=true" +
            "&ProcessPersonalFavorites=false&SourceId='8413cd39-2156-4e00-b54d-11efd9abdb89'" +
            "&suxrid=ms-oil-datasource-spopersonalcontext",
        method: "GET",
        headers: __assign({ Accept: "application/json;odata=verbose" }, (token ? { Authorization: "Bearer " + token } : {})),
        timeoutMs: 7000,
    });
}, {
    monitorName: "prefetchPersonalRelevance",
    cacheId: "prctx",
    cacheVersion: "0",
    cacheItemLifetime: 1000 * 60 * 60 * 24,
    cacheKeyExtractor: function () { return ""; },
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hQZXJzb25hbFJhbmtpbmdDb250ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2ZldGNoUGVyc29uYWxSYW5raW5nQ29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLFNBQVMsQ0FBQztBQUM1QixPQUFPLE9BQTJDLE1BQU0sV0FBVyxDQUFDO0FBR3BFLGVBQWUsT0FBTyxDQUNwQixTQUFTLDJCQUEyQixDQUFDLEVBSUM7UUFIcEMsUUFBUSxjQUFBLEVBQ1IsUUFBUSxjQUFBLEVBQ1IsS0FBSyxXQUFBO0lBRUwsT0FBTyxLQUFLLENBQUM7UUFDWCxHQUFHLEVBQ0UsUUFBUSxtQ0FBOEIsUUFBUSxNQUFHO1lBQ3BELDBGQUEwRjtZQUMxRixzRUFBc0U7WUFDdEUsaUZBQWlGO1lBQ2pGLDhDQUE4QztRQUVoRCxNQUFNLEVBQUUsS0FBSztRQUNiLE9BQU8sYUFDTCxNQUFNLEVBQUUsZ0NBQWdDLElBQ3JDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxZQUFVLEtBQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FDdkQ7UUFDRCxTQUFTLEVBQUUsSUFBSTtLQUNoQixDQUFDLENBQUM7QUFDTCxDQUFDLEVBRUQ7SUFDRSxXQUFXLEVBQUUsMkJBQTJCO0lBQ3hDLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLFlBQVksRUFBRSxHQUFHO0lBQ2pCLGlCQUFpQixFQUFFLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7SUFDdEMsaUJBQWlCLEVBQUUsY0FBTSxPQUFBLEVBQUUsRUFBRixDQUFFO0NBQzVCLENBQ0YsQ0FBQyJ9

/***/ }),

/***/ "8a+c":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/withMonitor.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withMonitor; });
/* harmony import */ var _headerUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headerUtils */ "rpso");
/* harmony import */ var _withBasicMonitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withBasicMonitor */ "lKsu");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var defaultMonitorType = "prefetch_request";
function withMonitor(_a, promiseFactory) {
    var monitorName = _a.monitorName, _b = _a.monitorType, monitorType = _b === void 0 ? defaultMonitorType : _b, additionalSuccessPropsExtractor = _a.additionalSuccessPropsExtractor, additionalFailurePropsExtractor = _a.additionalFailurePropsExtractor;
    return Object(_withBasicMonitor__WEBPACK_IMPORTED_MODULE_1__["default"])({
        monitorName: monitorName,
        monitorType: monitorType,
        successPropExtractor: function (_a) {
            var xhr = _a.xhr, tokenAttemptCount = _a.tokenAttemptCount, tokenFetchDuration = _a.tokenFetchDuration, cacheItemResolved = _a.cacheItemResolved, cacheItemType = _a.cacheItemType;
            return __assign(__assign(__assign(__assign({}, getResponseHeaders(xhr)), (tokenAttemptCount
                ? {
                    tokenAttemptCount: tokenAttemptCount,
                    tokenFetchDuration: Math.round(tokenFetchDuration),
                }
                : {})), { cacheItemResolved: cacheItemResolved,
                cacheItemType: cacheItemType }), additionalSuccessPropsExtractor === null || additionalSuccessPropsExtractor === void 0 ? void 0 : additionalSuccessPropsExtractor(xhr));
        },
        failurePropExtractor: function (error) {
            var _a;
            var errorProps = __assign(__assign(__assign({}, additionalFailurePropsExtractor === null || additionalFailurePropsExtractor === void 0 ? void 0 : additionalFailurePropsExtractor(error)), getResponseHeaders(error)), { errorCode: (_a = error.status) === null || _a === void 0 ? void 0 : _a.toString() });
            return errorProps;
        },
    }, function (options) {
        return typeof options === "undefined"
            ? Promise.reject("undefined options")
            : promiseFactory(options);
    });
}
function getResponseHeaders(xhr) {
    if (!xhr || !xhr.getAllResponseHeaders) {
        return {};
    }
    var xhrHeaders = Object(_headerUtils__WEBPACK_IMPORTED_MODULE_0__["getNamedHeadersFromXhr"])(xhr, [
        _headerUtils__WEBPACK_IMPORTED_MODULE_0__["spRequestDurationHeader"],
        _headerUtils__WEBPACK_IMPORTED_MODULE_0__["spClientServiceRequestDurationHeader"],
        _headerUtils__WEBPACK_IMPORTED_MODULE_0__["sharePointCorrelationHeader"],
    ]);
    // Map the request duration header back to the existing logged name
    // 'sprequestduration'.
    var headers = {};
    headers[_headerUtils__WEBPACK_IMPORTED_MODULE_0__["sharePointCorrelationHeader"]] =
        xhrHeaders[_headerUtils__WEBPACK_IMPORTED_MODULE_0__["sharePointCorrelationHeader"]];
    headers[_headerUtils__WEBPACK_IMPORTED_MODULE_0__["spRequestDurationHeader"]] =
        xhrHeaders[_headerUtils__WEBPACK_IMPORTED_MODULE_0__["spRequestDurationHeader"]] ||
            xhrHeaders[_headerUtils__WEBPACK_IMPORTED_MODULE_0__["spClientServiceRequestDurationHeader"]] ||
            undefined;
    return headers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aE1vbml0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvd2l0aE1vbml0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLDJCQUEyQixFQUMzQixvQ0FBb0MsRUFDcEMsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sZ0JBQWdCLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsSUFBTSxrQkFBa0IsR0FBZ0Isa0JBQWtCLENBQUM7QUFFM0QsTUFBTSxDQUFDLE9BQU8sVUFBVSxXQUFXLENBQ2pDLEVBS2tCLEVBQ2xCLGNBQTBDO1FBTHhDLFdBQVcsaUJBQUEsRUFDWCxtQkFBZ0MsRUFBaEMsV0FBVyxtQkFBRyxrQkFBa0IsS0FBQSxFQUNoQywrQkFBK0IscUNBQUEsRUFDL0IsK0JBQStCLHFDQUFBO0lBSWpDLE9BQU8sZ0JBQWdCLENBQ3JCO1FBQ0UsV0FBVyxhQUFBO1FBQ1gsV0FBVyxhQUFBO1FBQ1gsb0JBQW9CLEVBQXBCLFVBQXFCLEVBTXBCO2dCQUxDLEdBQUcsU0FBQSxFQUNILGlCQUFpQix1QkFBQSxFQUNqQixrQkFBa0Isd0JBQUEsRUFDbEIsaUJBQWlCLHVCQUFBLEVBQ2pCLGFBQWEsbUJBQUE7WUFFYiwrQ0FDSyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsR0FDdkIsQ0FBQyxpQkFBaUI7Z0JBQ25CLENBQUMsQ0FBQztvQkFDRSxpQkFBaUIsbUJBQUE7b0JBQ2pCLGtCQUFrQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7aUJBQ25EO2dCQUNILENBQUMsQ0FBQyxFQUFFLENBQUMsS0FDUCxpQkFBaUIsbUJBQUE7Z0JBQ2pCLGFBQWEsZUFBQSxLQUNWLCtCQUErQixhQUEvQiwrQkFBK0IsdUJBQS9CLCtCQUErQixDQUFHLEdBQUcsR0FDeEM7UUFDSixDQUFDO1FBRUQsb0JBQW9CLEVBQXBCLFVBQ0UsS0FBdUM7O1lBRXZDLElBQU0sVUFBVSxrQ0FDWCwrQkFBK0IsYUFBL0IsK0JBQStCLHVCQUEvQiwrQkFBK0IsQ0FBRyxLQUFLLElBQ3ZDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxLQUM1QixTQUFTLFFBQUUsS0FBSyxDQUFDLE1BQU0sMENBQUUsUUFBUSxLQUNsQyxDQUFDO1lBRUYsT0FBTyxVQUFVLENBQUM7UUFDcEIsQ0FBQztLQUNGLEVBRUQsVUFBQyxPQUFPO1FBQ04sT0FBQSxPQUFPLE9BQU8sS0FBSyxXQUFXO1lBQzVCLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1lBQ3JDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO0lBRjNCLENBRTJCLENBQzlCLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxrQkFBa0IsQ0FDekIsR0FBMEI7SUFFMUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRTtRQUN0QyxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQsSUFBTSxVQUFVLEdBQThCLHNCQUFzQixDQUFDLEdBQUcsRUFBRTtRQUN4RSx1QkFBdUI7UUFDdkIsb0NBQW9DO1FBQ3BDLDJCQUEyQjtLQUM1QixDQUFDLENBQUM7SUFFSCxtRUFBbUU7SUFDbkUsdUJBQXVCO0lBQ3ZCLElBQU0sT0FBTyxHQUEwQyxFQUFFLENBQUM7SUFDMUQsT0FBTyxDQUFDLDJCQUEyQixDQUFDO1FBQ2xDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQzFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQztRQUM5QixVQUFVLENBQUMsdUJBQXVCLENBQUM7WUFDbkMsVUFBVSxDQUFDLG9DQUFvQyxDQUFDO1lBQ2hELFNBQVMsQ0FBQztJQUVaLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMifQ==

/***/ }),

/***/ "8wLM":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/browserUtils.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: getQueryStringValue, constructUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryStringValue", function() { return getQueryStringValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructUrl", function() { return constructUrl; });
/**
 * Function that extracts query parameter value for the passed in key
 * @param key query param key whose value needs to be extracted
 */
function getQueryStringValue(key) {
    var urlPartToCheck = (window && window.location && window.location.search) ||
        window.location.hash ||
        "";
    return decodeURIComponent(urlPartToCheck.replace(new RegExp("^(?:.*[&\\?]" +
        encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") +
        "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
/**
 * Function that appends query parameters with the base url
 * @param baseUrl Base url to the server
 * @param queryParams Object containing query parameters to be appended
 */
function constructUrl(baseUrl, queryParams) {
    var url = baseUrl;
    var paramKeys = Object.keys(queryParams);
    if (paramKeys.length) {
        url += "?";
        url += paramKeys
            .map(function (key) {
            return encodeURIComponent(key) + "=" + encodeURIComponent(queryParams[key]);
        })
            .join("&");
    }
    return url;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlclV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Jyb3dzZXJVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsR0FBVztJQUM3QyxJQUFNLGNBQWMsR0FDbEIsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUNyRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUk7UUFDcEIsRUFBRSxDQUFDO0lBQ0wsT0FBTyxrQkFBa0IsQ0FDdkIsY0FBYyxDQUFDLE9BQU8sQ0FDcEIsSUFBSSxNQUFNLENBQ1IsY0FBYztRQUNaLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDO1FBQ3BELHNCQUFzQixFQUN4QixHQUFHLENBQ0osRUFDRCxJQUFJLENBQ0wsQ0FDRixDQUFDO0FBQ0osQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsWUFBWSxDQUMxQixPQUFlLEVBQ2YsV0FBc0M7SUFFdEMsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDO0lBQ2xCLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO1FBQ3BCLEdBQUcsSUFBSSxHQUFHLENBQUM7UUFDWCxHQUFHLElBQUksU0FBUzthQUNiLEdBQUcsQ0FDRixVQUFDLEdBQVc7WUFDVixPQUFBLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFBcEUsQ0FBb0UsQ0FDdkU7YUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDZDtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyJ9

/***/ }),

/***/ "9coA":
/*!********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-dispatcher@0.0.31_react@16.9.0/node_modules/@1js/search-dispatcher/lib/dispatcher.js ***!
  \********************************************************************************************************************************************************/
/*! exports provided: setDispatcher, getDispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDispatcher", function() { return setDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDispatcher", function() { return getDispatcher; });
function noop() {
    return "";
}
function now() {
    try {
        return Math.round(performance.now());
    }
    catch (_a) {
        return 0;
    }
}
var dummy = {
    register: noop,
    unregister: noop,
    dispatch: noop,
};
var instance = dummy;
var contract = [
    "register",
    "unregister",
    "dispatch",
];
function setDispatcher(dispatcher) {
    if (!dispatcher) {
        throw new Error("Dispatcher argument must be a dispatcher instance.");
    }
    if (!contract.every(function (method) { return typeof dispatcher[method] === "function"; })) {
        throw new Error("Dispatcher argument must implement dispatcher interface.");
    }
    instance = {
        register: dispatcher.register.bind(dispatcher),
        unregister: dispatcher.unregister.bind(dispatcher),
        dispatch: function (event) {
            // Only set the dispatch time on the log event if it doesn't already have one.
            // Depending on how we implement buffering of log events, we might end
            // up dispatching the same log event twice. In that case, we are more
            // interested in the original dispatch time.
            //
            // Note that the LogEvent type is typed with readonly members to discourage
            // mutation of log events, but here we are willing to mutate it in-place.
            var dispatchTime = event.dispatchTime;
            event.dispatchTime =
                typeof dispatchTime === "number" ? dispatchTime : now();
            dispatcher.dispatch(event);
        },
    };
}
function getDispatcher() {
    return instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLFNBQVMsSUFBSTtJQUNYLE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQztBQUVELFNBQVMsR0FBRztJQUNWLElBQUk7UUFDRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7S0FDdEM7SUFBQyxXQUFNO1FBQ04sT0FBTyxDQUFDLENBQUM7S0FDVjtBQUNILENBQUM7QUFFRCxJQUFNLEtBQUssR0FBMEI7SUFDbkMsUUFBUSxFQUFFLElBQUk7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFDRixJQUFJLFFBQVEsR0FBMEIsS0FBSyxDQUFDO0FBRTVDLElBQU0sUUFBUSxHQUErQztJQUMzRCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7Q0FDWCxDQUFDO0FBRUYsTUFBTSxVQUFVLGFBQWEsQ0FBQyxVQUFpQztJQUM3RCxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO0tBQ3ZFO0lBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxVQUFVLEVBQXhDLENBQXdDLENBQUMsRUFBRTtRQUN6RSxNQUFNLElBQUksS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7S0FDN0U7SUFFRCxRQUFRLEdBQUc7UUFDVCxRQUFRLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzlDLFVBQVUsRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbEQsUUFBUSxFQUFFLFVBQUMsS0FBSztZQUNkLDhFQUE4RTtZQUM5RSxzRUFBc0U7WUFDdEUscUVBQXFFO1lBQ3JFLDRDQUE0QztZQUM1QyxFQUFFO1lBQ0YsMkVBQTJFO1lBQzNFLHlFQUF5RTtZQUN6RSxJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ3ZDLEtBQWtDLENBQUMsWUFBWTtnQkFDOUMsT0FBTyxZQUFZLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzFELFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLGFBQWE7SUFDM0IsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyJ9

/***/ }),

/***/ "A1LU":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/withCache.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withCache; });
/* harmony import */ var _promiseCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promiseCache */ "yqov");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "2mDI");


function withCache(promiseFactory) {
    return function withCacheOptions(cacheOptions) {
        return function cachedPromise(options) {
            var cacheKey = cacheOptions.cacheKeyExtractor(options) || {};
            var forceRefresh = cacheOptions.forceRefresh && cacheOptions.forceRefresh();
            return ((!forceRefresh &&
                Object(_promiseCache__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(cacheOptions.cacheId, cacheOptions.cacheVersion, Object(_state__WEBPACK_IMPORTED_MODULE_1__["puid"])(), cacheKey)) ||
                Object(_promiseCache__WEBPACK_IMPORTED_MODULE_0__["savePromise"])(cacheOptions, Object(_state__WEBPACK_IMPORTED_MODULE_1__["puid"])(), promiseFactory(options), cacheKey));
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aENhY2hlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3dpdGhDYWNoZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFL0IsTUFBTSxDQUFDLE9BQU8sVUFBVSxTQUFTLENBQy9CLGNBQTBDO0lBSTFDLE9BQU8sU0FBUyxnQkFBZ0IsQ0FDOUIsWUFBOEI7UUFFOUIsT0FBTyxTQUFTLGFBQWEsQ0FBQyxPQUFVO1lBQ3RDLElBQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDL0QsSUFBTSxZQUFZLEdBQ2hCLFlBQVksQ0FBQyxZQUFZLElBQUksWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRTNELE9BQU8sQ0FDTCxDQUFDLENBQUMsWUFBWTtnQkFDWixVQUFVLENBQ1IsWUFBWSxDQUFDLE9BQU8sRUFDcEIsWUFBWSxDQUFDLFlBQVksRUFDekIsSUFBSSxFQUFFLEVBQ04sUUFBUSxDQUNULENBQUM7Z0JBQ0osV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQ3JFLENBQUM7UUFDSixDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDIn0=

/***/ }),

/***/ "A2xF":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/withToken.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withToken; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function withToken(promiseFactory) {
    return function (options) {
        var startTime = performance.now();
        return callWithAttempt(0, startTime, options, promiseFactory).catch(function (xhr) {
            return isAuthFailure(xhr)
                ? callWithAttempt(1, startTime, options, promiseFactory).catch(function (xhr) {
                    return failWithDetails(xhr, 2, performance.now() - startTime);
                })
                : Promise.reject(xhr);
        });
    };
}
function isAuthFailure(xhr) {
    return xhr ? xhr.status === 401 || xhr.status === 0 : false;
}
function callWithAttempt(attempt, startTime, options, promiseFactory) {
    if (!options.token && !options.tokenProvider) {
        return Promise.reject(new Error("Token or token provider must be specified."));
    }
    var tokenFetchDuration = -1;
    return options.token
        ? promiseFactory(__assign(__assign({}, options), { token: options.token })).then(function (xhr) { return ({
            tokenAttemptCount: 0,
            tokenFetchDuration: 0,
            xhr: xhr,
        }); })
        : options
            .tokenProvider({ attempt: attempt })
            .then(function (token) { return ((tokenFetchDuration = performance.now() - startTime),
            promiseFactory(__assign(__assign({}, options), { token: token }))); })
            .then(function (xhr) { return ({
            tokenAttemptCount: attempt + 1,
            tokenFetchDuration: tokenFetchDuration,
            xhr: xhr,
        }); });
}
function failWithDetails(xhr, tokenAttemptCount, tokenFetchDuration) {
    if (isAuthFailure(xhr)) {
        var error = xhr;
        error.tokenAttemptCount = tokenAttemptCount;
        error.tokenFetchDuration = tokenFetchDuration;
        throw error;
    }
    throw xhr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aFRva2VuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3dpdGhUb2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE1BQU0sQ0FBQyxPQUFPLFVBQVUsU0FBUyxDQUMvQixjQUFpQztJQUlqQyxPQUFPLFVBQ0wsT0FBK0I7UUFFL0IsSUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLE9BQU8sZUFBZSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDdEUsT0FBQSxhQUFhLENBQUMsR0FBRyxDQUFDO2dCQUNoQixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7b0JBQy9ELE9BQUEsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLFNBQVMsQ0FBQztnQkFBdEQsQ0FBc0QsQ0FDdkQ7Z0JBQ0gsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBSnZCLENBSXVCLENBQ2pCLENBQUM7SUFDWCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsR0FBbUI7SUFDeEMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDOUQsQ0FBQztBQUlELFNBQVMsZUFBZSxDQUN0QixPQUFlLEVBQ2YsU0FBaUIsRUFDakIsT0FBK0IsRUFDL0IsY0FBaUM7SUFFakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO1FBQzVDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FDbkIsSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FDeEQsQ0FBQztLQUNIO0lBQ0QsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QixPQUFPLE9BQU8sQ0FBQyxLQUFLO1FBQ2xCLENBQUMsQ0FBQyxjQUFjLHVCQUFPLE9BQWUsS0FBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssSUFBRyxDQUFDLElBQUksQ0FDaEUsVUFBQyxHQUFHLElBQUssT0FBQSxDQUFDO1lBQ1IsaUJBQWlCLEVBQUUsQ0FBQztZQUNwQixrQkFBa0IsRUFBRSxDQUFDO1lBQ3JCLEdBQUcsS0FBQTtTQUNKLENBQUMsRUFKTyxDQUlQLENBQ0g7UUFDSCxDQUFDLENBQUMsT0FBTzthQUNKLGFBQWEsQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUM7YUFDMUIsSUFBSSxDQUNILFVBQUMsS0FBSyxJQUFLLE9BQUEsQ0FDVCxDQUFDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUM7WUFDcEQsY0FBYyx1QkFBTyxPQUFlLEtBQUUsS0FBSyxPQUFBLElBQUcsQ0FDL0MsRUFIVSxDQUdWLENBQ0Y7YUFFQSxJQUFJLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxDQUFDO1lBQ2QsaUJBQWlCLEVBQUUsT0FBTyxHQUFHLENBQUM7WUFDOUIsa0JBQWtCLG9CQUFBO1lBQ2xCLEdBQUcsS0FBQTtTQUNKLENBQUMsRUFKYSxDQUliLENBQUMsQ0FBQztBQUNaLENBQUM7QUFFRCxTQUFTLGVBQWUsQ0FDdEIsR0FBbUIsRUFDbkIsaUJBQXlCLEVBQ3pCLGtCQUEwQjtJQUUxQixJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUN0QixJQUFNLEtBQUssR0FHUCxHQUFHLENBQUM7UUFDUixLQUFLLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDNUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQzlDLE1BQU0sS0FBSyxDQUFDO0tBQ2I7SUFFRCxNQUFNLEdBQUcsQ0FBQztBQUNaLENBQUMifQ==

/***/ }),

/***/ "AK9X":
/*!********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/fetcher.js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fetcher; });
/* harmony import */ var _withCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withCache */ "A1LU");
/* harmony import */ var _withMonitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withMonitor */ "8a+c");
/* harmony import */ var _withToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withToken */ "A2xF");



function fetcher(fetch, options) {
    return Object(_withMonitor__WEBPACK_IMPORTED_MODULE_1__["default"])(options, Object(_withCache__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_withToken__WEBPACK_IMPORTED_MODULE_2__["default"])(fetch))(options));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9mZXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBLE9BQU8sU0FBUyxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLFdBQVcsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxTQUFTLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE1BQU0sQ0FBQyxPQUFPLFVBQVUsT0FBTyxDQUM3QixLQUE4QyxFQUM5QyxPQUEyQztJQUkzQyxPQUFPLFdBQVcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDcEUsQ0FBQyJ9

/***/ }),

/***/ "Bsmq":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/fetchFileShareConnectorSettings.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: cacheId, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheId", function() { return cacheId; });
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "y+O/");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetcher */ "AK9X");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var allPropertiesToQuery = ["AllVerticalContent", "FilesVerticalContent"];
var cacheId = "fileshareconnectorsettings";
/* harmony default export */ __webpack_exports__["default"] = (Object(_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"])(function fetchFileShareConnectorSettings(_a) {
    var endpoint = _a.endpoint, token = _a.token;
    return Object(_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: endpoint + "/_api/web/AllProperties?$select=" + allPropertiesToQuery.join(","),
        method: "GET",
        headers: __assign({ Accept: "application/json;odata=verbose" }, (token ? { Authorization: "Bearer " + token } : {})),
        timeoutMs: 5000,
    });
}, {
    monitorName: "prefetchFileShareConnectorsInfo",
    cacheId: cacheId,
    cacheVersion: "0",
    cacheItemLifetime: 1000 * 60 * 60 * 6,
    cacheKeyExtractor: function (options) { return ({ endpoint: options.endpoint }); },
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hGaWxlU2hhcmVDb25uZWN0b3JTZXR0aW5ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9mZXRjaEZpbGVTaGFyZUNvbm5lY3RvclNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLE1BQU0sU0FBUyxDQUFDO0FBQzVCLE9BQU8sT0FBMkMsTUFBTSxXQUFXLENBQUM7QUFHcEUsSUFBTSxvQkFBb0IsR0FBRyxDQUFDLG9CQUFvQixFQUFFLHNCQUFzQixDQUFDLENBQUM7QUFFNUUsTUFBTSxDQUFDLElBQU0sT0FBTyxHQUFXLDRCQUE0QixDQUFDO0FBRTVELGVBQWUsT0FBTyxDQUNwQixTQUFTLCtCQUErQixDQUFDLEVBR1A7UUFGaEMsUUFBUSxjQUFBLEVBQ1IsS0FBSyxXQUFBO0lBRUwsT0FBTyxLQUFLLENBQUM7UUFDWCxHQUFHLEVBQUssUUFBUSx3Q0FBbUMsb0JBQW9CLENBQUMsSUFBSSxDQUMxRSxHQUFHLENBQ0Y7UUFDSCxNQUFNLEVBQUUsS0FBSztRQUNiLE9BQU8sYUFDTCxNQUFNLEVBQUUsZ0NBQWdDLElBQ3JDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxZQUFVLEtBQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FDdkQ7UUFDRCxTQUFTLEVBQUUsSUFBSTtLQUNoQixDQUFDLENBQUM7QUFDTCxDQUFDLEVBQ0Q7SUFDRSxXQUFXLEVBQUUsaUNBQWlDO0lBQzlDLE9BQU8sU0FBQTtJQUNQLFlBQVksRUFBRSxHQUFHO0lBQ2pCLGlCQUFpQixFQUFFLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDckMsaUJBQWlCLEVBQUUsVUFBQyxPQUFPLElBQUssT0FBQSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFoQyxDQUFnQztDQUNqRSxDQUNGLENBQUMifQ==

/***/ }),

/***/ "FC2o":
/*!************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/loki-domain@0.1.5_react-native@0.63.4+react@16.9.0/node_modules/@1js/loki-domain/lib/LokiUrl.js ***!
  \************************************************************************************************************************************************************/
/*! exports provided: LokiUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LokiUrl", function() { return LokiUrl; });
var LokiUrl;
(function (LokiUrl) {
    LokiUrl["TopLevel"] = "https://loki.delve.office.com";
    LokiUrl["Blackforest"] = "https://loki.delve.office.de";
    LokiUrl["GccModerate"] = "https://gcc.loki.delve.office.com";
    LokiUrl["GccHigh"] = "https://gcchigh.loki.office365.us";
    LokiUrl["DOD"] = "https://dod.loki.office365.us";
    LokiUrl["Gallatin"] = "https://loki.office365.cn";
    LokiUrl["Dogfood"] = "https://df.loki.delve.office.com";
    LokiUrl["LegacyDogfood"] = "https://sfdf.loki.delve.office.com";
    LokiUrl["MSIT"] = "https://msit.loki.delve.office.com";
    LokiUrl["LegacyMSIT"] = "https://sfmsit.loki.delve.office.com";
    LokiUrl["AG08"] = "https://loki.officenet.eaglex.ic.gov";
    LokiUrl["AG09"] = "https://loki.officenet.microsoft.scloud";
})(LokiUrl || (LokiUrl = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9raVVybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9Mb2tpVXJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBTixJQUFZLE9BYVg7QUFiRCxXQUFZLE9BQU87SUFDakIscURBQTBDLENBQUE7SUFDMUMsdURBQTRDLENBQUE7SUFDNUMsNERBQWlELENBQUE7SUFDakQsd0RBQTZDLENBQUE7SUFDN0MsZ0RBQXFDLENBQUE7SUFDckMsaURBQXNDLENBQUE7SUFDdEMsdURBQTRDLENBQUE7SUFDNUMsK0RBQW9ELENBQUE7SUFDcEQsc0RBQTJDLENBQUE7SUFDM0MsOERBQW1ELENBQUE7SUFDbkQsd0RBQTZDLENBQUE7SUFDN0MsMkRBQWdELENBQUE7QUFDbEQsQ0FBQyxFQWJXLE9BQU8sS0FBUCxPQUFPLFFBYWxCIn0=

/***/ }),

/***/ "HDXk":
/*!********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/withPeriodicRefresh.js ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: withPeriodicRefresh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPeriodicRefresh", function() { return withPeriodicRefresh; });
/* harmony import */ var _withRefresh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withRefresh */ "NwN6");

var defaultRefreshInterval = 5 * 60 * 1000; // 5 minutes
function withPeriodicRefresh(apiName, tokenProvider, refreshIntervalMs) {
    // initialize to an invalid token
    var lastUserInvocation;
    var periodicRefreshId;
    var invocationCounter = 0;
    var refreshTokenProvider = Object(_withRefresh__WEBPACK_IMPORTED_MODULE_0__["withRefresh"])(apiName, tokenProvider);
    return function (tokenProviderSpec) {
        invocationCounter++;
        // If this is the first time this provider fetches a token, register a
        // periodic job to refresh the token at the specified interval
        if (!periodicRefreshId) {
            periodicRefreshId = window.setInterval(function () {
                invocationCounter++;
                var logProperties = {
                    invokedByPeriodicRefresh: true,
                    invocationCounter: invocationCounter,
                };
                refreshTokenProvider({ attempt: 0 }, logProperties, false);
                // Stop periodic refresh after one day if user have not interacted
                // with search session in that period.
                var oneDayInMs = 24 * 60 * 60 * 1000;
                if (Date.now() - lastUserInvocation > oneDayInMs) {
                    window.clearInterval(periodicRefreshId);
                    periodicRefreshId = undefined;
                }
            }, refreshIntervalMs || defaultRefreshInterval);
        }
        lastUserInvocation = Date.now();
        var logProperties = {
            invokedByPeriodicRefresh: false,
            invocationCounter: invocationCounter,
        };
        return refreshTokenProvider(tokenProviderSpec, logProperties, true);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aFBlcmlvZGljUmVmcmVzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy93aXRoUGVyaW9kaWNSZWZyZXNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUMsSUFBTSxzQkFBc0IsR0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLFlBQVk7QUFFbEUsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxPQUFlLEVBQ2YsYUFBNEIsRUFDNUIsaUJBQTBCO0lBRTFCLGlDQUFpQztJQUNqQyxJQUFJLGtCQUEwQixDQUFDO0lBQy9CLElBQUksaUJBQXFDLENBQUM7SUFDMUMsSUFBSSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFFMUIsSUFBTSxvQkFBb0IsR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRWpFLE9BQU8sVUFBQyxpQkFBcUM7UUFDM0MsaUJBQWlCLEVBQUUsQ0FBQztRQUNwQixzRUFBc0U7UUFDdEUsOERBQThEO1FBQzlELElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN0QixpQkFBaUIsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO2dCQUNyQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUNwQixJQUFNLGFBQWEsR0FBRztvQkFDcEIsd0JBQXdCLEVBQUUsSUFBSTtvQkFDOUIsaUJBQWlCLG1CQUFBO2lCQUNsQixDQUFDO2dCQUVGLG9CQUFvQixDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFFM0Qsa0VBQWtFO2dCQUNsRSxzQ0FBc0M7Z0JBQ3RDLElBQU0sVUFBVSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztnQkFDdkMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsa0JBQWtCLEdBQUcsVUFBVSxFQUFFO29CQUNoRCxNQUFNLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQ3hDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztpQkFDL0I7WUFDSCxDQUFDLEVBQUUsaUJBQWlCLElBQUksc0JBQXNCLENBQUMsQ0FBQztTQUNqRDtRQUVELGtCQUFrQixHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoQyxJQUFNLGFBQWEsR0FBRztZQUNwQix3QkFBd0IsRUFBRSxLQUFLO1lBQy9CLGlCQUFpQixtQkFBQTtTQUNsQixDQUFDO1FBQ0YsT0FBTyxvQkFBb0IsQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQyxDQUFDO0FBQ0osQ0FBQyJ9

/***/ }),

/***/ "JttP":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/storageCache.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: getCache, getStorage, saveValue, assertPuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCache", function() { return getCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return getStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveValue", function() { return saveValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertPuid", function() { return assertPuid; });
/* harmony import */ var _1js_search_dispatcher_lib_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @1js/search-dispatcher/lib/dispatcher */ "9coA");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "2mDI");


var errorName = "StorageCache";
var storageReadErrorEventEmitted = false;
var storageWriteErrorEventEmitted = false;
var invalidPuidErrorEventEmitted = false;
function getCache(cacheId, cacheVersion, puid) {
    assertPuid(puid);
    var cache;
    var storage = getStorage();
    try {
        var item = storage.getItem(cacheId);
        if (!item) {
            return null;
        }
        cache = JSON.parse(item);
    }
    catch (_a) {
        !storageReadErrorEventEmitted &&
            Object(_1js_search_dispatcher_lib_dispatcher__WEBPACK_IMPORTED_MODULE_0__["getDispatcher"])().dispatch({
                eventType: "ERROR",
                name: errorName,
                detail: "Failed to read from storage.",
            });
        storageReadErrorEventEmitted = true;
        return null;
    }
    if (!cache) {
        return null;
    }
    if (cache.cacheVersion !== cacheVersion) {
        storage.removeItem(cacheId);
        return null;
    }
    if (!cache.puid || cache.puid !== puid) {
        storage.removeItem(cacheId);
        invalidPuidErrorEventEmitted = true;
        !invalidPuidErrorEventEmitted &&
            Object(_1js_search_dispatcher_lib_dispatcher__WEBPACK_IMPORTED_MODULE_0__["getDispatcher"])().dispatch({
                eventType: "ERROR",
                name: errorName,
                detail: "Invalid puid detected.",
            });
        return null;
    }
    return cache;
}
var storage;
var getStorage = function getStorage() {
    return (storage ||
        (storage = {
            getItem: function (key) {
                return sessionStorage.getItem(createKey(key));
            },
            removeItem: function (key) {
                return sessionStorage.removeItem(createKey(key));
            },
            setItem: function (key, value) {
                return sessionStorage.setItem(createKey(key), value);
            },
        }));
};
function createKey(postFix) {
    return "mssearchux-cache-" + postFix;
}
function saveValue(cacheId, cacheVersion, puid, serializedKey, value, expiryTime, status) {
    assertPuid(puid);
    var cache = getCache(cacheId, cacheVersion, puid) || {
        cacheCreationTime: Date.now(),
        cacheVersion: cacheVersion,
        puid: puid,
        cacheItems: {},
    };
    cache.cacheItems[serializedKey] = { value: value, expiryTime: expiryTime, status: status };
    try {
        getStorage().setItem(cacheId, JSON.stringify(cache));
    }
    catch (_a) {
        !storageWriteErrorEventEmitted &&
            Object(_1js_search_dispatcher_lib_dispatcher__WEBPACK_IMPORTED_MODULE_0__["getDispatcher"])().dispatch({
                eventType: "ERROR",
                name: errorName,
                nameDetail: cacheId,
                detail: "Failed to write to session storage.",
            });
        storageWriteErrorEventEmitted = true;
    }
}
function assertPuid(puid) {
    !puid && Object(_state__WEBPACK_IMPORTED_MODULE_1__["thr"])("Puid not set.");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZUNhY2hlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3N0b3JhZ2VDYWNoZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUU5QixJQUFNLFNBQVMsR0FBRyxjQUFjLENBQUM7QUFDakMsSUFBSSw0QkFBNEIsR0FBRyxLQUFLLENBQUM7QUFDekMsSUFBSSw2QkFBNkIsR0FBRyxLQUFLLENBQUM7QUFDMUMsSUFBSSw0QkFBNEIsR0FBRyxLQUFLLENBQUM7QUFFekMsTUFBTSxVQUFVLFFBQVEsQ0FDdEIsT0FBZSxFQUNmLFlBQW9CLEVBQ3BCLElBQVk7SUFFWixVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsSUFBSSxLQUFvQixDQUFDO0lBQ3pCLElBQU0sT0FBTyxHQUFpQixVQUFVLEVBQUUsQ0FBQztJQUMzQyxJQUFJO1FBQ0YsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFCO0lBQUMsV0FBTTtRQUNOLENBQUMsNEJBQTRCO1lBQzNCLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDdkIsU0FBUyxFQUFFLE9BQU87Z0JBQ2xCLElBQUksRUFBRSxTQUFTO2dCQUNmLE1BQU0sRUFBRSw4QkFBOEI7YUFDdkMsQ0FBQyxDQUFDO1FBRUwsNEJBQTRCLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQUksS0FBSyxDQUFDLFlBQVksS0FBSyxZQUFZLEVBQUU7UUFDdkMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7UUFDdEMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1Qiw0QkFBNEIsR0FBRyxJQUFJLENBQUM7UUFDcEMsQ0FBQyw0QkFBNEI7WUFDM0IsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUN2QixTQUFTLEVBQUUsT0FBTztnQkFDbEIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsTUFBTSxFQUFFLHdCQUF3QjthQUNqQyxDQUFDLENBQUM7UUFFTCxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBZUQsSUFBSSxPQUFxQixDQUFDO0FBRTFCLE1BQU0sQ0FBQyxJQUFNLFVBQVUsR0FBRyxTQUFTLFVBQVU7SUFDM0MsT0FBTyxDQUNMLE9BQU87UUFDUCxDQUFDLE9BQU8sR0FBRztZQUNULE9BQU8sRUFBUCxVQUFRLEdBQVc7Z0JBQ2pCLE9BQU8sY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDO1lBRUQsVUFBVSxFQUFWLFVBQVcsR0FBVztnQkFDcEIsT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ25ELENBQUM7WUFFRCxPQUFPLEVBQVAsVUFBUSxHQUFXLEVBQUUsS0FBYTtnQkFDaEMsT0FBTyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN2RCxDQUFDO1NBQ0YsQ0FBQyxDQUNILENBQUM7QUFDSixDQUFDLENBQUM7QUFJRixTQUFTLFNBQVMsQ0FBQyxPQUFlO0lBQ2hDLE9BQU8sc0JBQW9CLE9BQVMsQ0FBQztBQUN2QyxDQUFDO0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FDdkIsT0FBZSxFQUNmLFlBQW9CLEVBQ3BCLElBQVksRUFDWixhQUFxQixFQUNyQixLQUFhLEVBQ2IsVUFBa0IsRUFDbEIsTUFBYztJQUVkLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQixJQUFNLEtBQUssR0FBa0IsUUFBUSxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFDcEUsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUM3QixZQUFZLGNBQUE7UUFDWixJQUFJLE1BQUE7UUFDSixVQUFVLEVBQUUsRUFBRTtLQUNmLENBQUM7SUFFRixLQUFLLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxPQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQztJQUNoRSxJQUFJO1FBQ0YsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDdEQ7SUFBQyxXQUFNO1FBQ04sQ0FBQyw2QkFBNkI7WUFDNUIsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUN2QixTQUFTLEVBQUUsT0FBTztnQkFDbEIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLE1BQU0sRUFBRSxxQ0FBcUM7YUFDOUMsQ0FBQyxDQUFDO1FBRUwsNkJBQTZCLEdBQUcsSUFBSSxDQUFDO0tBQ3RDO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsSUFBWTtJQUNyQyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDaEMsQ0FBQyJ9

/***/ }),

/***/ "MNJ+":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/reuseSubstrateIframeProxy.js ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reuseSubstrateIframeProxy; });
function reuseSubstrateIframeProxy() {
    var w = window;
    return (w.mssearchux && w.mssearchux.reuseIframe) || false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2VTdWJzdHJhdGVJZnJhbWVQcm94eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXVzZVN1YnN0cmF0ZUlmcmFtZVByb3h5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLFVBQVUseUJBQXlCO0lBQy9DLElBQU0sQ0FBQyxHQUF1RCxNQUFhLENBQUM7SUFDNUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUM7QUFDN0QsQ0FBQyJ9

/***/ }),

/***/ "MUOz":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/fetchSharePointDigest.js ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "y+O/");
/* harmony import */ var _withCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withCache */ "A1LU");
/* harmony import */ var _withMonitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withMonitor */ "8a+c");



/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var endpoint = _a.endpoint, forceDigestRefresh = _a.forceDigestRefresh;
    return Object(_withMonitor__WEBPACK_IMPORTED_MODULE_2__["default"])({
        monitorName: "prefetchSharepointDigest",
    }, Object(_withCache__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_a) {
        var endpoint = _a.endpoint;
        return Object(_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])({
            url: endpoint + "/_api/contextinfo",
            method: "POST",
            headers: {
                Accept: "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            timeoutMs: 5000,
        }).then(function (xhr) {
            return {
                xhr: xhr,
                tokenAttemptCount: -1,
                tokenFetchDuration: -1,
            };
        });
    })({
        cacheId: "pspd",
        cacheVersion: "0",
        // 30 min timeout value gotten from
        // sts/stsom/Administration/SPCanary.cs
        // Subtract 10 seconds to keep digest current
        cacheItemLifetime: 30 * 60 * 1000 - 10000,
        cacheKeyExtractor: function (options) { return ({
            url: options.endpoint + "/_api/contextinfo",
        }); },
        forceRefresh: forceDigestRefresh,
    }))({ endpoint: endpoint, forceDigestRefresh: forceDigestRefresh });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hTaGFyZVBvaW50RGlnZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2ZldGNoU2hhcmVQb2ludERpZ2VzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxTQUFTLENBQUM7QUFDNUIsT0FBTyxTQUFTLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sV0FBVyxNQUFNLGVBQWUsQ0FBQztBQUV4QyxnQkFBZSxVQUFDLEVBR2dCO1FBRjlCLFFBQVEsY0FBQSxFQUNSLGtCQUFrQix3QkFBQTtJQUVsQixPQUFBLFdBQVcsQ0FDVDtRQUNFLFdBQVcsRUFBRSwwQkFBMEI7S0FDeEMsRUFDRCxTQUFTLENBQUMsVUFBQyxFQUEyQztZQUF6QyxRQUFRLGNBQUE7UUFDbkIsT0FBQSxLQUFLLENBQUM7WUFDSixHQUFHLEVBQUssUUFBUSxzQkFBbUI7WUFDbkMsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsTUFBTSxFQUFFLGdDQUFnQztnQkFDeEMsY0FBYyxFQUFFLGdDQUFnQzthQUNqRDtZQUNELFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO1lBQ1YsT0FBTztnQkFDTCxHQUFHLEtBQUE7Z0JBQ0gsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQixrQkFBa0IsRUFBRSxDQUFDLENBQUM7YUFDdkIsQ0FBQztRQUNKLENBQUMsQ0FBQztJQWRGLENBY0UsQ0FDSCxDQUFDO1FBQ0EsT0FBTyxFQUFFLE1BQU07UUFDZixZQUFZLEVBQUUsR0FBRztRQUNqQixtQ0FBbUM7UUFDbkMsdUNBQXVDO1FBQ3ZDLDZDQUE2QztRQUM3QyxpQkFBaUIsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxLQUFLO1FBQ3pDLGlCQUFpQixFQUFFLFVBQUMsT0FBc0MsSUFBSyxPQUFBLENBQUM7WUFDOUQsR0FBRyxFQUFLLE9BQU8sQ0FBQyxRQUFRLHNCQUFtQjtTQUM1QyxDQUFDLEVBRjZELENBRTdEO1FBQ0YsWUFBWSxFQUFFLGtCQUFrQjtLQUNqQyxDQUFDLENBQ0gsQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLGtCQUFrQixvQkFBQSxFQUFFLENBQUM7QUFoQ25DLENBZ0NtQyxFQUFDIn0=

/***/ }),

/***/ "MXs4":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/lokiUtils.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: resolveLokiUrl, resolveLokiSearchConfigurationUrl, createHeader, getLokiVerticalsApiUrl, getClientType, getVerticalQueryParams, getVerticalAddHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveLokiUrl", function() { return resolveLokiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveLokiSearchConfigurationUrl", function() { return resolveLokiSearchConfigurationUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHeader", function() { return createHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLokiVerticalsApiUrl", function() { return getLokiVerticalsApiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientType", function() { return getClientType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVerticalQueryParams", function() { return getVerticalQueryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVerticalAddHeader", function() { return getVerticalAddHeader; });
/* harmony import */ var _1js_loki_domain_lib_getLokiDomainFromComplianceEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @1js/loki-domain/lib/getLokiDomainFromComplianceEnvironment */ "Mkor");
/* harmony import */ var _1js_search_types_lib_lokiUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @1js/search-types/lib/lokiUtils */ "ru7D");
/* harmony import */ var _browserUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browserUtils */ "8wLM");
/* harmony import */ var _lokiTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lokiTypes */ "kNi3");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state */ "2mDI");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





var clientTypeHeader = "X-ClientType";
function removeSlashesFromEnd(str) {
    return typeof str === "string" ? str.replace(/\/+$/, "") : str;
}
var lokiSearchConfigurationUrl = function (hostUrl) {
    return removeSlashesFromEnd(hostUrl) + "/api/v1/search/configuration";
};
var getLokiUrl = function (environment, lokiUrlTemplate) {
    var lokiDomain = Object(_1js_loki_domain_lib_getLokiDomainFromComplianceEnvironment__WEBPACK_IMPORTED_MODULE_0__["getLokiDomainFromComplianceEnvironment"])(environment);
    if (lokiDomain === environment) {
        // Could not resolve environment, default to top-level domain
        lokiDomain = Object(_1js_loki_domain_lib_getLokiDomainFromComplianceEnvironment__WEBPACK_IMPORTED_MODULE_0__["getLokiDomainFromComplianceEnvironment"])("Prod");
    }
    return lokiUrlTemplate(lokiDomain);
};
/** Function to resolve loki url template to absolute url based on environment and culture */
function resolveLokiUrl(environment, culture, lokiUrlTemplate) {
    if (culture === void 0) { culture = ""; }
    var resolvedUrl = getLokiUrl(environment, lokiUrlTemplate);
    return "" + resolvedUrl + (culture ? "/" + culture : "");
}
function resolveLokiSearchConfigurationUrl(environment, culture) {
    if (culture === void 0) { culture = ""; }
    return resolveLokiUrl(environment, culture, lokiSearchConfigurationUrl);
}
function createHeader(clientType, additionalHeaders, token) {
    var _a;
    return __assign(__assign(__assign({}, additionalHeaders), (_a = { "X-MSSearchVersion": _state__WEBPACK_IMPORTED_MODULE_4__["BUILD_VERSION"], "X-ClientFeature": "Search" }, _a[clientTypeHeader] = clientType, _a)), (token ? { Authorization: "Bearer " + token } : {}));
}
/** Function to figure out absolute loki url to fetch custom verticals */
function getLokiVerticalsApiUrl(lokiBaseUrl) {
    return (removeSlashesFromEnd(lokiBaseUrl) || "") + "/api/v1/search/configuration/verticals";
}
// Backwards compatibility
var getClientType = function (appId, defaultValue) { return Object(_1js_search_types_lib_lokiUtils__WEBPACK_IMPORTED_MODULE_1__["getLokiClientType"])(appId) || defaultValue; };
function getVerticalQueryParams(siteId, previewDisabledVerticals) {
    if (previewDisabledVerticals === void 0) { previewDisabledVerticals = false; }
    // Object to track query params to be sent in url
    var queryParams = {};
    // Adding siteCollectionId information in query param if scope id present
    siteId && (queryParams["siteCollectionId"] = siteId.toUpperCase());
    // Adding flag to fetch disabled verticals as well for admin to preview
    previewDisabledVerticals && (queryParams["verticalState"] = "all");
    // Adding ecsOverrides for flight overriding
    if (Object(_browserUtils__WEBPACK_IMPORTED_MODULE_2__["getQueryStringValue"])("ecsOverrides")) {
        queryParams["ecsOverrides"] = Object(_browserUtils__WEBPACK_IMPORTED_MODULE_2__["getQueryStringValue"])("ecsOverrides");
    }
    return queryParams;
}
function getVerticalAddHeader() {
    var _a;
    /** Flag used to bust loki cache for custom verticals */
    return Object(_browserUtils__WEBPACK_IMPORTED_MODULE_2__["getQueryStringValue"])("cacheClear") === "true"
        ? (_a = {}, _a[_lokiTypes__WEBPACK_IMPORTED_MODULE_3__["ConfigAddHeaders"].VerticalsCacheClear] = "uncached", _a) : {};
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9raVV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xva2lVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBRXJILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBYyxNQUFNLGFBQWEsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRXhDLElBQU0sZ0JBQWdCLEdBQVcsY0FBYyxDQUFDO0FBRWhELFNBQVMsb0JBQW9CLENBQUMsR0FBWTtJQUN4QyxPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUNqRSxDQUFDO0FBRUQsSUFBTSwwQkFBMEIsR0FBRyxVQUFDLE9BQWU7SUFDakQsT0FBVSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsaUNBQThCLENBQUM7QUFDeEUsQ0FBQyxDQUFDO0FBRUYsSUFBTSxVQUFVLEdBQUcsVUFDakIsV0FBNEIsRUFDNUIsZUFBNEM7SUFFNUMsSUFBSSxVQUFVLEdBQVcsc0NBQXNDLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFN0UsSUFBSSxVQUFVLEtBQUssV0FBVyxFQUFFO1FBQzlCLDZEQUE2RDtRQUM3RCxVQUFVLEdBQUcsc0NBQXNDLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDN0Q7SUFFRCxPQUFPLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUM7QUFFRiw2RkFBNkY7QUFDN0YsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsV0FBNEIsRUFDNUIsT0FBb0IsRUFDcEIsZUFBNEM7SUFENUMsd0JBQUEsRUFBQSxZQUFvQjtJQUdwQixJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzdELE9BQU8sS0FBRyxXQUFXLElBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFJLE9BQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFFLENBQUM7QUFDekQsQ0FBQztBQUVELE1BQU0sVUFBVSxpQ0FBaUMsQ0FDL0MsV0FBNEIsRUFDNUIsT0FBb0I7SUFBcEIsd0JBQUEsRUFBQSxZQUFvQjtJQUVwQixPQUFPLGNBQWMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixDQUFDLENBQUM7QUFDMUUsQ0FBQztBQUVELE1BQU0sVUFBVSxZQUFZLENBQzFCLFVBQWtCLEVBQ2xCLGlCQUFzQyxFQUN0QyxLQUFjOztJQUVkLHNDQUNLLGlCQUFpQixXQUNwQixtQkFBbUIsRUFBRSxhQUFhLEVBQ2xDLGlCQUFpQixFQUFFLFFBQVEsT0FDMUIsZ0JBQWdCLElBQUcsVUFBVSxRQUMzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsWUFBVSxLQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ3REO0FBQ0osQ0FBQztBQUVELHlFQUF5RTtBQUN6RSxNQUFNLFVBQVUsc0JBQXNCLENBQUMsV0FBbUI7SUFDeEQsT0FBTyxDQUNMLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsNENBQ0QsQ0FBQztBQUMzQyxDQUFDO0FBRUQsMEJBQTBCO0FBQzFCLE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBRyxVQUMzQixLQUFhLEVBQ2IsWUFBcUIsSUFDRSxPQUFBLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLFlBQVksRUFBeEMsQ0FBd0MsQ0FBQztBQUVsRSxNQUFNLFVBQVUsc0JBQXNCLENBQ3BDLE1BQWMsRUFDZCx3QkFBeUM7SUFBekMseUNBQUEsRUFBQSxnQ0FBeUM7SUFFekMsaURBQWlEO0lBQ2pELElBQU0sV0FBVyxHQUF1QixFQUFFLENBQUM7SUFFM0MseUVBQXlFO0lBQ3pFLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLHVFQUF1RTtJQUN2RSx3QkFBd0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNuRSw0Q0FBNEM7SUFDNUMsSUFBSSxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUN2QyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDbkU7SUFDRCxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDO0FBRUQsTUFBTSxVQUFVLG9CQUFvQjs7SUFDbEMsd0RBQXdEO0lBQ3hELE9BQU8sbUJBQW1CLENBQUMsWUFBWSxDQUFDLEtBQUssTUFBTTtRQUNqRCxDQUFDLFdBQUcsR0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsSUFBRyxVQUFVLE1BQ3RELENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDVCxDQUFDIn0=

/***/ }),

/***/ "Mkor":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/loki-domain@0.1.5_react-native@0.63.4+react@16.9.0/node_modules/@1js/loki-domain/lib/getLokiDomainFromComplianceEnvironment.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: getLokiDomainFromComplianceEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLokiDomainFromComplianceEnvironment", function() { return getLokiDomainFromComplianceEnvironment; });
/* harmony import */ var _1js_functional_lib_functional__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @1js/functional/lib/functional */ "QNTK");
/* harmony import */ var _LokiUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LokiUrl */ "FC2o");


function getLokiDomainFromComplianceEnvironment(complianceEnvironment) {
    switch (complianceEnvironment) {
        case "Df":
            return _LokiUrl__WEBPACK_IMPORTED_MODULE_1__["LokiUrl"].Dogfood;
        case "Msit":
            return _LokiUrl__WEBPACK_IMPORTED_MODULE_1__["LokiUrl"].MSIT;
        case "Blackforest":
            return _LokiUrl__WEBPACK_IMPORTED_MODULE_1__["LokiUrl"].Blackforest;
        case "GccModerate":
            return _LokiUrl__WEBPACK_IMPORTED_MODULE_1__["LokiUrl"].GccModerate;
        case "GccHigh":
            return _LokiUrl__WEBPACK_IMPORTED_MODULE_1__["LokiUrl"].GccHigh;
        case "DoD":
            return _LokiUrl__WEBPACK_IMPORTED_MODULE_1__["LokiUrl"].DOD;
        case "Gallatin":
            return _LokiUrl__WEBPACK_IMPORTED_MODULE_1__["LokiUrl"].Gallatin;
        case "Prod":
            return _LokiUrl__WEBPACK_IMPORTED_MODULE_1__["LokiUrl"].TopLevel;
        case "AG08":
            return _LokiUrl__WEBPACK_IMPORTED_MODULE_1__["LokiUrl"].AG08;
        case "AG09":
            return _LokiUrl__WEBPACK_IMPORTED_MODULE_1__["LokiUrl"].AG09;
        case "Unknown":
            // This is the ultimate solution when we are not able to figure out from which environment we
            // are making the call and we don't want to default to top level domain. For example Win32.
            throw new Error("'Unknown' is not an expected environment type in Loki");
        default:
            return Object(_1js_functional_lib_functional__WEBPACK_IMPORTED_MODULE_0__["neverGuard"])(complianceEnvironment);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TG9raURvbWFpbkZyb21Db21wbGlhbmNlRW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZ2V0TG9raURvbWFpbkZyb21Db21wbGlhbmNlRW52aXJvbm1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTVELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFcEMsTUFBTSxVQUFVLHNDQUFzQyxDQUNwRCxxQkFBc0M7SUFFdEMsUUFBUSxxQkFBcUIsRUFBRTtRQUM3QixLQUFLLElBQUk7WUFDUCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDekIsS0FBSyxNQUFNO1lBQ1QsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3RCLEtBQUssYUFBYTtZQUNoQixPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDN0IsS0FBSyxhQUFhO1lBQ2hCLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUM3QixLQUFLLFNBQVM7WUFDWixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDekIsS0FBSyxLQUFLO1lBQ1IsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3JCLEtBQUssVUFBVTtZQUNiLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUMxQixLQUFLLE1BQU07WUFDVCxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDMUIsS0FBSyxNQUFNO1lBQ1QsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3RCLEtBQUssTUFBTTtZQUNULE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQztRQUN0QixLQUFLLFNBQVM7WUFDWiw2RkFBNkY7WUFDN0YsMkZBQTJGO1lBQzNGLE1BQU0sSUFBSSxLQUFLLENBQUMsdURBQXVELENBQUMsQ0FBQztRQUMzRTtZQUNFLE9BQU8sVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7S0FDNUM7QUFDSCxDQUFDIn0=

/***/ }),

/***/ "MnpI":
/*!************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/fetchSitesFromSubstrate.js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetcher */ "AK9X");
/* harmony import */ var _generateGuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateGuid */ "3/VP");
/* harmony import */ var _statusOk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statusOk */ "i1d3");
/* harmony import */ var _substrateIframeProxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./substrateIframeProxy */ "NXYV");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




/* harmony default export */ __webpack_exports__["default"] = (Object(_fetcher__WEBPACK_IMPORTED_MODULE_0__["default"])(function fetchSitesFromSubstrate(_a) {
    var token = _a.token, prefix = _a.prefix;
    return Object(_substrateIframeProxy__WEBPACK_IMPORTED_MODULE_3__["substrateIframeProxy"])().then(function (postMessage) {
        return postMessage({
            action: "queryv2",
            token: token,
            prefix: prefix,
            cvid: Object(_generateGuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        }).then(function (responseMessage) {
            if (!Object(_statusOk__WEBPACK_IMPORTED_MODULE_2__["default"])(responseMessage.statusCode)) {
                throw { status: responseMessage.statusCode };
            }
            var request = {
                status: responseMessage.statusCode,
                responseText: responseMessage.qfResponse,
            };
            return request;
        });
    });
}, {
    monitorName: "fetchSitesFromSubstrate",
    cacheId: "fetchSitesFromSubstrate",
    cacheVersion: "0",
    cacheItemLifetime: 1000 * 60 * 60 * 3,
    cacheKeyExtractor: function (_a) {
        var token = _a.token, rest = __rest(_a, ["token"]);
        return (__assign({}, rest));
    },
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hTaXRlc0Zyb21TdWJzdHJhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZmV0Y2hTaXRlc0Zyb21TdWJzdHJhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sT0FBMEIsTUFBTSxXQUFXLENBQUM7QUFDbkQsT0FBTyxZQUFZLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxRQUFRLE1BQU0sWUFBWSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTlELGVBQWUsT0FBTyxDQUNwQixTQUFTLHVCQUF1QixDQUFDLEVBR0M7UUFGaEMsS0FBSyxXQUFBLEVBQ0wsTUFBTSxZQUFBO0lBRU4sT0FBTyxvQkFBb0IsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLFdBQVc7UUFDN0MsT0FBQSxXQUFXLENBQUM7WUFDVixNQUFNLEVBQUUsU0FBUztZQUNqQixLQUFLLE9BQUE7WUFDTCxNQUFNLFFBQUE7WUFDTixJQUFJLEVBQUUsWUFBWSxFQUFFO1NBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxlQUFlO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN6QyxNQUFNLEVBQUUsTUFBTSxFQUFFLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUM5QztZQUVELElBQU0sT0FBTyxHQUE0QjtnQkFDdkMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxVQUFVO2dCQUNsQyxZQUFZLEVBQUUsZUFBZSxDQUFDLFVBQVU7YUFDekMsQ0FBQztZQUVGLE9BQU8sT0FBeUIsQ0FBQztRQUNuQyxDQUFDLENBQUM7SUFoQkYsQ0FnQkUsQ0FDSCxDQUFDO0FBQ0osQ0FBQyxFQUNEO0lBQ0UsV0FBVyxFQUFFLHlCQUF5QjtJQUN0QyxPQUFPLEVBQUUseUJBQXlCO0lBQ2xDLFlBQVksRUFBRSxHQUFHO0lBQ2pCLGlCQUFpQixFQUFFLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDckMsaUJBQWlCLEVBQUUsVUFBQyxFQUFrQjtRQUFoQixJQUFBLEtBQUssV0FBQSxFQUFLLElBQUksY0FBaEIsU0FBa0IsQ0FBRjtRQUFPLE9BQUEsY0FBTSxJQUFJLEVBQUcsQ0FBQTtLQUFBO0NBQ3pELENBQ0YsQ0FBQyJ9

/***/ }),

/***/ "NXYV":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/substrateIframeProxy.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: substrateIframeProxy, getIframeProxy, sendSubstrateRequest, parseDiagnostics, parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "substrateIframeProxy", function() { return substrateIframeProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIframeProxy", function() { return getIframeProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendSubstrateRequest", function() { return sendSubstrateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDiagnostics", function() { return parseDiagnostics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return parser; });
/* harmony import */ var _createSafeToLogError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createSafeToLogError */ "nt8F");
/* harmony import */ var _generateGuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateGuid */ "3/VP");
/* harmony import */ var _iFrameProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iFrameProxy */ "gfxd");
/* harmony import */ var _reuseSubstrateIframeProxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reuseSubstrateIframeProxy */ "MNJ+");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




var originUrl = "https://substrate.office.com";
var sourceUrl = originUrl + "/search/api/v2/resources";
var _iframeProxy;
var proxyLoaded = undefined;
var postMessageReady = false;
function substrateIframeProxy() {
    if (proxyLoaded === undefined) {
        proxyLoaded = getModuleProxy().ready;
    }
    return proxyLoaded.then(function () {
        postMessageReady = true;
        return postMessage;
    });
}
var reuseId = "ms-searchux-3s-proxy";
function getModuleProxy() {
    if (_iframeProxy) {
        return _iframeProxy;
    }
    return getIframeProxy(Object(_reuseSubstrateIframeProxy__WEBPACK_IMPORTED_MODULE_3__["default"])(), sourceUrl, originUrl);
}
function getIframeProxy(reuse, sourceUrl, originUrl) {
    if (reuse) {
        // try getting an existing iframe
        var iframe = document.getElementById(reuseId);
        var validExistingIframe = getValidExistingIframeOrNull(iframe, sourceUrl);
        if (validExistingIframe) {
            _iframeProxy = validExistingIframe;
        }
        else if (!iframe) {
            // Create a new reusable iframe proxy
            // In this case, we want to reuse the iframe, but no iframe was returned (we are creating the first one)
            _iframeProxy = createIframeProxy(true, sourceUrl, originUrl);
        }
        else {
            // We found an iframe, but it did not have the correct source url (ie the API version is different in bundle A vs bundle B)
            // We dont want to create an identical with the same id, so we should default back to an anonymous iframe
            _iframeProxy = createIframeProxy(false, sourceUrl, originUrl);
        }
    }
    else {
        _iframeProxy = createIframeProxy(false, sourceUrl, originUrl);
    }
    return _iframeProxy;
}
function getValidExistingIframeOrNull(iframe, sourceUrl) {
    // Check that the source url is the same - else its not usable
    // Check that the ready promise is available on the iframe
    if (iframe &&
        iframe.src === sourceUrl &&
        iframe.ready &&
        iframe.postMessage) {
        return {
            postMessage: iframe.postMessage,
            iframe: iframe,
            ready: iframe.ready,
            initialize: function () { return iframe; },
        };
    }
    return null;
}
function createIframeProxy(reuse, sourceUrl, originUrl) {
    // create iframe and add required functionality
    var proxy = Object(_iFrameProxy__WEBPACK_IMPORTED_MODULE_2__["default"])(sourceUrl, originUrl);
    var iframe = proxy.initialize();
    var readyPromise = Object(_iFrameProxy__WEBPACK_IMPORTED_MODULE_2__["asyncVerifiedIframeMessageEvent"])(iframe.contentWindow, originUrl, function (msg) { return msg.data; }, function (data) { return data === "loaded"; });
    if (reuse) {
        iframe.id = reuseId;
        iframe.postMessage = proxy.postMessage;
        iframe.ready = readyPromise;
    }
    var extendedProxy = __assign(__assign({}, proxy), { ready: readyPromise });
    return extendedProxy;
}
var sendSubstrateRequest = function (substrateRequestArguments) {
    return postMessageReady
        ? postMessage(substrateRequestArguments)
        : substrateIframeProxy().then(function (postMessage) {
            return postMessage(substrateRequestArguments);
        });
};
function postMessage(substrateRequestArguments) {
    var requestId = Object(_generateGuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
    var action = substrateRequestArguments.action, token = substrateRequestArguments.token, prefix = substrateRequestArguments.prefix, cvid = substrateRequestArguments.cvid, additionalInfo = substrateRequestArguments.additionalInfo, headers = substrateRequestArguments.headers;
    return getModuleProxy().postMessage(JSON.stringify({
        requestId: requestId,
        action: action,
        token: token,
        prefix: prefix,
        cvid: cvid,
        additionalInfo: additionalInfo,
        headers: headers,
    }), parser, function (data) { return data.requestId === requestId; });
}
function parseDiagnostics(diagnostics) {
    // Need to exclude name property from logs. This property contains the query text for suggestions!
    var _a = JSON.parse(diagnostics)[0], name = _a.name, parsedDiagnostics = __rest(_a, ["name"]);
    return parsedDiagnostics;
}
function parser(message) {
    try {
        return JSON.parse(message.data);
    }
    catch (e) {
        return Object(_createSafeToLogError__WEBPACK_IMPORTED_MODULE_0__["throwSafeToLogError"])("Failed to parse substrate API JSON response.");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic3RyYXRlSWZyYW1lUHJveHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc3Vic3RyYXRlSWZyYW1lUHJveHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sWUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sV0FBVyxFQUFFLEVBQ2xCLCtCQUErQixHQUVoQyxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLHlCQUF5QixNQUFNLDZCQUE2QixDQUFDO0FBWXBFLElBQU0sU0FBUyxHQUFXLDhCQUE4QixDQUFDO0FBQ3pELElBQU0sU0FBUyxHQUFXLFNBQVMsR0FBRywwQkFBMEIsQ0FBQztBQVNqRSxJQUFJLFlBQStDLENBQUM7QUFDcEQsSUFBSSxXQUFXLEdBQStDLFNBQVMsQ0FBQztBQUN4RSxJQUFJLGdCQUFnQixHQUFZLEtBQUssQ0FBQztBQUN0QyxNQUFNLFVBQVUsb0JBQW9CO0lBS2xDLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtRQUM3QixXQUFXLEdBQUcsY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDO0tBQ3RDO0lBRUQsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3RCLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxJQUFNLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQztBQUV2QyxTQUFTLGNBQWM7SUFDckIsSUFBSSxZQUFZLEVBQUU7UUFDaEIsT0FBTyxZQUFZLENBQUM7S0FDckI7SUFDRCxPQUFPLGNBQWMsQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUMzRSxDQUFDO0FBQ0QsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsS0FBYyxFQUNkLFNB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

/***/ }),

/***/ "Nc4t":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/fetchHubSites.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: cacheId, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheId", function() { return cacheId; });
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "y+O/");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetcher */ "AK9X");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var cacheId = "spohubsitesinfo";
/* harmony default export */ __webpack_exports__["default"] = (Object(_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"])(function fetchHubSites(_a) {
    var clientId = _a.clientId, endpoint = _a.endpoint, token = _a.token;
    return Object(_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: endpoint + "/_api/search/query?querytext='IsHubSite=1%20contentclass:STS_Site'" +
            ("&selectproperties='DepartmentId,Title'&rowlimit=1000&ClientType='" + clientId + "'") +
            "&Properties='ClientFunction:SpoHubSitesInfo,FetchSpoHubSitesInfo:true,EnableDynamicGroups:true'" +
            "&EnableQueryRules=false&ProcessBestBets=false&BypassResultTypes=true" +
            "&ProcessPersonalFavorites=false&SourceId='8413cd39-2156-4e00-b54d-11efd9abdb89'" +
            "&suxrid=spohubsitesinfo",
        method: "GET",
        headers: __assign({ Accept: "application/json;odata=verbose" }, (token ? { Authorization: "Bearer " + token } : {})),
        timeoutMs: 5000,
    });
}, {
    monitorName: "prefetchSpoHubSitesInfo",
    cacheId: cacheId,
    cacheVersion: "0",
    cacheItemLifetime: 1000 * 60 * 60 * 24,
    cacheKeyExtractor: function (options) { return ({ endpoint: options.endpoint }); },
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hIdWJTaXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9mZXRjaEh1YlNpdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLE1BQU0sU0FBUyxDQUFDO0FBQzVCLE9BQU8sT0FBMkMsTUFBTSxXQUFXLENBQUM7QUFHcEUsTUFBTSxDQUFDLElBQU0sT0FBTyxHQUFXLGlCQUFpQixDQUFDO0FBRWpELGVBQWUsT0FBTyxDQUNwQixTQUFTLGFBQWEsQ0FBQyxFQUlJO1FBSHpCLFFBQVEsY0FBQSxFQUNSLFFBQVEsY0FBQSxFQUNSLEtBQUssV0FBQTtJQUVMLE9BQU8sS0FBSyxDQUFDO1FBQ1gsR0FBRyxFQUNFLFFBQVEsdUVBQW9FO2FBQy9FLHNFQUFvRSxRQUFRLE1BQUcsQ0FBQTtZQUMvRSxpR0FBaUc7WUFDakcsc0VBQXNFO1lBQ3RFLGlGQUFpRjtZQUNqRix5QkFBeUI7UUFDM0IsTUFBTSxFQUFFLEtBQUs7UUFDYixPQUFPLGFBQ0wsTUFBTSxFQUFFLGdDQUFnQyxJQUNyQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsWUFBVSxLQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQ3ZEO1FBQ0QsU0FBUyxFQUFFLElBQUk7S0FDaEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxFQUVEO0lBQ0UsV0FBVyxFQUFFLHlCQUF5QjtJQUN0QyxPQUFPLFNBQUE7SUFDUCxZQUFZLEVBQUUsR0FBRztJQUNqQixpQkFBaUIsRUFBRSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQ3RDLGlCQUFpQixFQUFFLFVBQUMsT0FBTyxJQUFLLE9BQUEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBaEMsQ0FBZ0M7Q0FDakUsQ0FDRixDQUFDIn0=

/***/ }),

/***/ "NwN6":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/withRefresh.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: withRefresh, startQos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRefresh", function() { return withRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startQos", function() { return startQos; });
/* harmony import */ var _1js_search_dispatcher_lib_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @1js/search-dispatcher/lib/dispatcher */ "9coA");
/* harmony import */ var _tokenDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenDetail */ "ppzf");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


function withRefresh(apiName, tokenProvider) {
    // initialize to an invalid token
    var latestAuthTokenDetails = null;
    var isRefreshActive = false;
    var refreshedTokenPromise;
    var getRefreshedToken = function () {
        if (!isRefreshActive) {
            // if there isn't already an active refresh request, create one
            isRefreshActive = true;
            refreshedTokenPromise = tokenProvider({ attempt: 1 })
                .then(function (token) {
                latestAuthTokenDetails = Object(_tokenDetail__WEBPACK_IMPORTED_MODULE_1__["toTokenDetail"])(token);
                isRefreshActive = false;
                return token;
            })
                .catch(function (error) {
                isRefreshActive = false;
                throw error;
            });
        }
        return refreshedTokenPromise;
    };
    return function (tokenProviderSpec, logProperties, shouldLog) {
        if (shouldLog === void 0) { shouldLog = true; }
        var stopQos = shouldLog
            ? startQos(apiName + "_withRefresh")
            : startQosNoop();
        if (!tokenProvider) {
            stopQos("FAILURE", __assign({ cacheItemResolved: false, tokenProviderNull: true }, logProperties));
            return Promise.reject("token provider is null");
        }
        if (!latestAuthTokenDetails ||
            !Object(_tokenDetail__WEBPACK_IMPORTED_MODULE_1__["isValid"])(latestAuthTokenDetails) ||
            tokenProviderSpec.attempt > 0) {
            // if the token we have is invalid, we need to fetch a new one.
            // likewise if this is a second attempt, whatever is cached must not work
            return getRefreshedToken()
                .then(function (token) {
                stopQos("SUCCESS", __assign({ cacheItemResolved: false, expires: latestAuthTokenDetails &&
                        new Date(latestAuthTokenDetails.expEpoch), didRefresh: true }, logProperties));
                return token;
            })
                .catch(function (error) {
                stopQos("FAILURE", __assign({ cacheItemResolved: false, tokenProviderNull: false }, logProperties));
                throw error.reason || error;
            });
        }
        var shouldBackgroundRefreshToken = Object(_tokenDetail__WEBPACK_IMPORTED_MODULE_1__["isApproachingExpiration"])(latestAuthTokenDetails);
        if (shouldBackgroundRefreshToken) {
            // the token will be expiring soon so begin a new background fetch,
            // but we will still return the value we have
            getRefreshedToken();
        }
        stopQos("SUCCESS", __assign({ cacheItemResolved: true, expires: latestAuthTokenDetails && new Date(latestAuthTokenDetails.expEpoch), backgroundRefresh: shouldBackgroundRefreshToken }, logProperties));
        return Promise.resolve(latestAuthTokenDetails.token);
    };
}
function startQosNoop() {
    return function () {
        return;
    };
}
/**
 * Dispatches a QOSSTART event, returning a function which will dispatch a
 * corresponding QOSSTOP event.
 */
function startQos(nameDetail) {
    var eventName = "generic_qos";
    var startTime = performance.now();
    var d = Object(_1js_search_dispatcher_lib_dispatcher__WEBPACK_IMPORTED_MODULE_0__["getDispatcher"])();
    d.dispatch({
        name: eventName,
        nameDetail: nameDetail,
        timestamp: startTime,
        eventType: "QOSSTART",
    });
    return function (result, properties, error) {
        var endTime = performance.now();
        d.dispatch({
            name: eventName,
            nameDetail: nameDetail,
            startTimestamp: startTime,
            totalTime: endTime - startTime,
            eventType: "QOSSTOP",
            result: result,
            properties: { customLogProps: JSON.stringify(properties) },
            error: error,
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aFJlZnJlc2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvd2l0aFJlZnJlc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFPdEUsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixPQUFPLEVBRVAsYUFBYSxHQUNkLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE1BQU0sVUFBVSxXQUFXLENBQ3pCLE9BQWUsRUFDZixhQUE0QjtJQU01QixpQ0FBaUM7SUFDakMsSUFBSSxzQkFBc0IsR0FBeUIsSUFBSSxDQUFDO0lBQ3hELElBQUksZUFBZSxHQUFZLEtBQUssQ0FBQztJQUNyQyxJQUFJLHFCQUFzQyxDQUFDO0lBRTNDLElBQU0saUJBQWlCLEdBQUc7UUFDeEIsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNwQiwrREFBK0Q7WUFDL0QsZUFBZSxHQUFHLElBQUksQ0FBQztZQUV2QixxQkFBcUIsR0FBRyxhQUFhLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2xELElBQUksQ0FBQyxVQUFDLEtBQUs7Z0JBQ1Ysc0JBQXNCLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QyxlQUFlLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixPQUFPLEtBQUssQ0FBQztZQUNmLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO2dCQUNYLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLE1BQU0sS0FBSyxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0lBRUYsT0FBTyxVQUNMLGlCQUFxQyxFQUNyQyxhQUE2QixFQUM3QixTQUF5QjtRQUF6QiwwQkFBQSxFQUFBLGdCQUF5QjtRQUV6QixJQUFNLE9BQU8sR0FBRyxTQUFTO1lBQ3ZCLENBQUMsQ0FB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

/***/ }),

/***/ "PoOG":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/fetchBingConsumer.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "y+O/");
/* harmony import */ var _withCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withCache */ "A1LU");
/* harmony import */ var _withMonitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withMonitor */ "8a+c");



/* harmony default export */ __webpack_exports__["default"] = (function (options) {
    return Object(_withMonitor__WEBPACK_IMPORTED_MODULE_2__["default"])({
        monitorName: "bing-consumer-prefetch",
    }, Object(_withCache__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_a) {
        var url = _a.url;
        return Object(_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])({
            url: url,
            method: "GET",
            withCredentials: true,
        }).then(function (xhr) {
            return {
                xhr: xhr,
                tokenAttemptCount: -1,
                tokenFetchDuration: -1,
            };
        });
    })({
        cacheId: "bing-consumer-prefetch",
        cacheVersion: "0",
        // 30 min timeout value
        cacheItemLifetime: 30 * 60 * 1000,
        cacheKeyExtractor: function (options) { return ({
            query: options.searchText,
        }); },
    }))(options);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hCaW5nQ29uc3VtZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZmV0Y2hCaW5nQ29uc3VtZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sU0FBUyxDQUFDO0FBRTVCLE9BQU8sU0FBUyxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLFdBQVcsTUFBTSxlQUFlLENBQUM7QUFPeEMsZ0JBQWUsVUFBQyxPQUFrQztJQUNoRCxPQUFPLFdBQVcsQ0FDaEI7UUFDRSxXQUFXLEVBQUUsd0JBQXdCO0tBQ3RDLEVBQ0QsU0FBUyxDQUFDLFVBQUMsRUFBa0M7WUFBaEMsR0FBRyxTQUFBO1FBQ2QsT0FBQSxLQUFLLENBQUM7WUFDSixHQUFHLEtBQUE7WUFDSCxNQUFNLEVBQUUsS0FBSztZQUNiLGVBQWUsRUFBRSxJQUFJO1NBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO1lBQ1YsT0FBTztnQkFDTCxHQUFHLEtBQUE7Z0JBQ0gsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQixrQkFBa0IsRUFBRSxDQUFDLENBQUM7YUFDdkIsQ0FBQztRQUNKLENBQUMsQ0FBQztJQVZGLENBVUUsQ0FDSCxDQUFDO1FBQ0EsT0FBTyxFQUFFLHdCQUF3QjtRQUNqQyxZQUFZLEVBQUUsR0FBRztRQUNqQix1QkFBdUI7UUFDdkIsaUJBQWlCLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJO1FBQ2pDLGlCQUFpQixFQUFFLFVBQUMsT0FBa0MsSUFBSyxPQUFBLENBQUM7WUFDMUQsS0FBSyxFQUFFLE9BQU8sQ0FBQyxVQUFVO1NBQzFCLENBQUMsRUFGeUQsQ0FFekQ7S0FDSCxDQUFDLENBQ0gsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUMsRUFBQyJ9

/***/ }),

/***/ "QNTK":
/*!****************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/functional@0.0.3/node_modules/@1js/functional/lib/functional.js ***!
  \****************************************************************************************************************************/
/*! exports provided: defaultToEmptyArray, omitEmpty, omitNull, updateWith, neverGuard, neverGuardDefault, hasOwnProperty, cacheLatest, undefinedToNull, createArrayAndFillWith, identity, areEqualNumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultToEmptyArray", function() { return defaultToEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omitEmpty", function() { return omitEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omitNull", function() { return omitNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWith", function() { return updateWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "neverGuard", function() { return neverGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "neverGuardDefault", function() { return neverGuardDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwnProperty", function() { return hasOwnProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheLatest", function() { return cacheLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undefinedToNull", function() { return undefinedToNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArrayAndFillWith", function() { return createArrayAndFillWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areEqualNumbers", function() { return areEqualNumbers; });
var emptyArray = [];
/**
 * Defaults an array | undefined | null value to an empty array, and always
 * uses the same empty array, so that the object identity is preserved.
 */
function defaultToEmptyArray(array) {
    return array ? array : emptyArray;
}
/**
 * Returns copy of the given object with all null, undefined, empty string and empty array values removed.
 *
 * The return type isn't totally correct, since it claims that we _can_ return keys with undefined values. It would be neat if we could
 * apply Partial only to the falsyable values, but at least we preserve a defensive version of the incoming type, so that you can't
 * accidentally pass the output to something expecting something completely different.
 */
function omitEmpty(o) {
    return pickBy(o, function (val) {
        return val !== undefined &&
            val !== null &&
            val !== "" &&
            (!(val instanceof Array) || val.length > 0);
    });
}
/**
 * Returns a copy of the given object with all null values removed.
 */
function omitNull(o) {
    return pickBy(o, function (val) { return val !== null; });
}
function pickBy(o, pred) {
    if (o === undefined || o === null) {
        return o;
    }
    var ret = {};
    for (var _i = 0, _a = Object.keys(o); _i < _a.length; _i++) {
        var key = _a[_i];
        if (pred(o[key])) {
            ret[key] = o[key];
        }
    }
    return ret;
}
/*
 * Given a "current" and an "update" object, return a new object with the merged properties of current and update, with precedence given to
 * update. The function ensures that update is an exact subset of current. I.e. update cannot (normally) introduce any keys that don't
 * already exist in current.
 *
 * The exception to this rule occurs if update is _not_ a literal object and contains extra properties _in addition_ to all the properties
 * in current. This is an effect of the type checking system, which tends to be more relaxed about object expressions than literal objects.
 *
 * As an example:
 *
 * Given interface I { a: number, b: number},
 * keyof I is "a" | "b"
 * [key in K]: I[K] is an indexer mapping keys to their respective types in I. This will fail for keys that are not in I, since they cannot
 * be mapped.
 *
 * This signature looks very much like Partial<T> and is indeed almost the same thing. However, since Partial marks all its properties as
 * optional, all of them will have undefined as a valid type. We very much don't want the update object to accidentally set non-nullable
 * properties to undefined, so this means we can't use Partial<T>
 */
function updateWith(current, update) {
    return Object.assign({}, current, update);
}
/**
 * WARNING: To be deprecated!
 *
 * Deprecation notice: this version of neverGuard will return unexpected values
 * in cases where the input that neverGuard is guarding is dynamic. Consider
 * using neverGuardDefault instead.
 *
 * Use this to cause a compile-time error if all possible types for a value
 * haven't been narrowed away when this is called. I.e. calling this enforces a
 * code path that should never be hit.
 */
function neverGuard(n) {
    return n;
}
/**
 * Use this to cause a compile-time error if all possible types for value @_n
 * haven't been narrowed away when this is called. I.e. calling this enforces a
 * code path that should never be hit.
 *
 * Typescript still compiles to Javascript, so runtime type exhaustion is not
 * guaranteed. The @defaultValue should be set to handle such cases.
 *
 * @param _n Value to guard
 * @param defaultValue Default value to return
 */
function neverGuardDefault(_n, defaultValue) {
    return defaultValue;
}
/**
 * Checks if x has an own property named key, and narrows the type of x accordingly.
 */
function hasOwnProperty(x, key) {
    return x.hasOwnProperty(key);
}
function cacheLatest(f) {
    var cache = undefined;
    return function (arg) {
        if (!cache || arg !== cache.arg) {
            var result = f(arg);
            cache = { arg: arg, result: result };
            return result;
        }
        else {
            return cache.result;
        }
    };
}
function undefinedToNull(v) {
    if (v === undefined) {
        return null;
    }
    return v;
}
function createArrayAndFillWith(numberOfItems, filler) {
    // We can use Array.fill here but this is not supported yet by IE
    var values = [];
    for (var index = 0; index < numberOfItems && Number.isFinite(numberOfItems); index += 1) {
        values.push(filler(index));
    }
    return values;
}
function identity(value) {
    return value;
}
function areEqualNumbers(a, b, eps) {
    if (eps === void 0) { eps = 10e-6; }
    return Math.abs(a - b) < eps;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25hbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9mdW5jdGlvbmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQU0sVUFBVSxHQUF1QixFQUFFLENBQUM7QUFFMUM7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxLQUEwQztJQUUxQyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7QUFDcEMsQ0FBQztBQUtEOzs7Ozs7R0FNRztBQUNILE1BQU0sVUFBVSxTQUFTLENBQUksQ0FBSTtJQUMvQixPQUFPLE1BQU0sQ0FDWCxDQUFDLEVBQ0QsVUFBQyxHQUFHO1FBQ0YsT0FBQSxHQUFHLEtBQUssU0FBUztZQUNqQixHQUFHLEtBQUssSUFBSTtZQUNaLEdBQUcsS0FBSyxFQUFFO1lBQ1YsQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBSDNDLENBRzJDLENBQzlDLENBQUM7QUFDSixDQUFDO0FBSUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUFJLENBQWM7SUFDeEMsT0FBTyxNQUFNLENBQUMsQ0FBQyxFQUFFLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxLQUFLLElBQUksRUFBWixDQUFZLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsQ0FBTSxFQUFFLElBQTJCO0lBQ2pELElBQUksQ0FBQyxLQUFLLFNBQVMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ2pDLE9BQU8sQ0FBQyxDQUFDO0tBQ1Y7SUFFRCxJQUFNLEdBQUcsR0FBUSxFQUFFLENBQUM7SUFDcEIsS0FBa0IsVUFBYyxFQUFkLEtBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBZCxjQUFjLEVBQWQsSUFBYyxFQUFFO1FBQTdCLElBQU0sR0FBRyxT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

/***/ }),

/***/ "RlAX":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/Base64Url.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: decode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return decode; });
// Copied from Oslo code and updated with base64url support
// General base64 util based on this repo https://github.com/mathiasbynens/base64
// If you want to modify/change this code, consider this package instead - https://www.npmjs.com/package/atob
// This is just used for browsers <= IE9, for normal browsers use btoa and atob
var TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
/**
 * `decode` is designed to be fully compatible with `atob` as described in the
 * HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob
 */
function decode(input) {
    input = input.trim();
    var length = input.length;
    if (length % 4 === 0) {
        input = input.replace(/==?$/, "");
        length = input.length;
    }
    if (length % 4 === 1 || /[^\-_a-zA-Z0-9]/.test(input)) {
        error("Invalid character: the string to be decoded is not correctly encoded.");
    }
    var bitCounter = 0;
    var bitStorage = 0;
    var buffer;
    var output = "";
    var position = -1;
    while (++position < length) {
        buffer = TABLE.indexOf(input.charAt(position));
        // tslint:disable-next-line:no-bitwise
        bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
        // Unless this is the first of a group of 4 characters…
        // tslint:disable-next-line:no-bitwise
        if (bitCounter++ % 4) {
            // …convert the first 8 bits to a single ASCII character.
            output += String.fromCharCode(
            // tslint:disable-next-line:no-bitwise
            0xff & (bitStorage >> ((-2 * bitCounter) & 6)));
        }
    }
    return output;
}
function error(message) {
    var error = new Error(message);
    error.name = "InvalidCharacterError";
    throw new Error(message);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZTY0VXJsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0Jhc2U2NFVybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyREFBMkQ7QUFDM0QsaUZBQWlGO0FBQ2pGLDZHQUE2RztBQUU3RywrRUFBK0U7QUFDL0UsSUFBTSxLQUFLLEdBQ1Qsa0VBQWtFLENBQUM7QUFFckU7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLE1BQU0sQ0FBQyxLQUFhO0lBQ2xDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsSUFBSSxNQUFNLEdBQVcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUVsQyxJQUFJLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3BCLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNsQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztLQUN2QjtJQUNELElBQUksTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3JELEtBQUssQ0FDSCx1RUFBdUUsQ0FDeEUsQ0FBQztLQUNIO0lBQ0QsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztJQUNuQixJQUFJLE1BQWMsQ0FBQztJQUNuQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDaEIsSUFBSSxRQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDMUIsT0FBTyxFQUFFLFFBQVEsR0FBRyxNQUFNLEVBQUU7UUFDMUIsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRS9DLHNDQUFzQztRQUN0QyxVQUFVLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUVoRSx1REFBdUQ7UUFDdkQsc0NBQXNDO1FBQ3RDLElBQUksVUFBVSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLHlEQUF5RDtZQUN6RCxNQUFNLElBQUksTUFBTSxDQUFDLFlBQVk7WUFDM0Isc0NBQXNDO1lBQ3RDLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDL0MsQ0FBQztTQUNIO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQsU0FBUyxLQUFLLENBQUMsT0FBZTtJQUM1QixJQUFNLEtBQUssR0FBVSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxLQUFLLENBQUMsSUFBSSxHQUFHLHVCQUF1QixDQUFDO0lBQ3JDLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0IsQ0FBQyJ9

/***/ }),

/***/ "SUgy":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/warmupSubstrateSearch.js ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetcher */ "AK9X");
/* harmony import */ var _generateGuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateGuid */ "3/VP");
/* harmony import */ var _statusOk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statusOk */ "i1d3");
/* harmony import */ var _substrateIframeProxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./substrateIframeProxy */ "NXYV");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




var diagnosticsDurationHeader = "Substrate-DiagnosticsDuration";
/* harmony default export */ __webpack_exports__["default"] = (Object(_fetcher__WEBPACK_IMPORTED_MODULE_0__["default"])(function warmupSubstrateSearch(_a) {
    var token = _a.token, queryStringParameters = _a.queryStringParameters, headers = _a.headers, _b = _a.postAction, postAction = _b === void 0 ? "init" : _b;
    var additionalInfoParams = queryStringParameters
        ? __assign({}, queryStringParameters) : {};
    return Object(_substrateIframeProxy__WEBPACK_IMPORTED_MODULE_3__["sendSubstrateRequest"])({
        action: postAction,
        token: token,
        prefix: undefined,
        cvid: Object(_generateGuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        additionalInfo: __assign(__assign({}, additionalInfoParams), { diagnostics: "1" }),
        headers: headers,
    }).then(function (responseMessage) {
        if (!Object(_statusOk__WEBPACK_IMPORTED_MODULE_2__["default"])(responseMessage.statusCode)) {
            throw { status: responseMessage.statusCode };
        }
        // Extract headers
        var responseHeaders = {};
        try {
            responseHeaders = JSON.parse(responseMessage.responseHeaders);
        }
        catch (_a) {
            // Do Nothing
        }
        // Extract network diagnostics
        if (responseMessage.diagnostics) {
            try {
                var diagnostics = Object(_substrateIframeProxy__WEBPACK_IMPORTED_MODULE_3__["parseDiagnostics"])(responseMessage.diagnostics);
                if (diagnostics && diagnostics.duration) {
                    responseHeaders[diagnosticsDurationHeader] =
                        "" + diagnostics.duration;
                }
            }
            catch (_b) {
                // Do nothing
            }
        }
        var request = {
            status: responseMessage.statusCode,
            responseText: responseMessage.qfResponse,
            getResponseHeader: function (headerName) { return responseHeaders[headerName]; },
        };
        return request;
    });
}, {
    monitorName: "warmupSubstrateSearch",
    cacheId: "warmupSubstrateSearch",
    cacheVersion: "0",
    cacheItemLifetime: 5000,
    additionalSuccessPropsExtractor: warmupLogPropExtractor,
    cacheKeyExtractor: function (_a) {
        var token = _a.token, rest = __rest(_a, ["token"]);
        return (__assign({}, rest));
    },
}));
function warmupLogPropExtractor(xhr) {
    if (!xhr.getResponseHeader) {
        return {};
    }
    return {
        properties: JSON.stringify({
            requestId: xhr.getResponseHeader("request-id") || "",
            serverLatency: xhr.getResponseHeader("x-end2endlatencyms") || "",
            diagnosticsDuration: xhr.getResponseHeader(diagnosticsDurationHeader) || "",
        }),
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FybXVwU3Vic3RyYXRlU2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3dhcm11cFN1YnN0cmF0ZVNlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsT0FBTyxPQUFPLE1BQU0sV0FBVyxDQUFDO0FBQ2hDLE9BQU8sWUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sUUFBUSxNQUFNLFlBQVksQ0FBQztBQUNsQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUloRixJQUFNLHlCQUF5QixHQUFHLCtCQUErQixDQUFDO0FBRWxFLGVBQWUsT0FBTyxDQUNwQixTQUFTLHFCQUFxQixDQUFDLEVBS1E7UUFKckMsS0FBSyxXQUFBLEVBQ0wscUJBQXFCLDJCQUFBLEVBQ3JCLE9BQU8sYUFBQSxFQUNQLGtCQUFtQixFQUFuQixVQUFVLG1CQUFHLE1BQU0sS0FBQTtJQUVuQixJQUFNLG9CQUFvQixHQUFHLHFCQUFxQjtRQUNoRCxDQUFDLGNBQU0scUJBQXFCLEVBQzVCLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDUCxPQUFPLG9CQUFvQixDQUFDO1FBQzFCLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLEtBQUssT0FBQTtRQUNMLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLElBQUksRUFBRSxZQUFZLEVBQUU7UUFDcEIsY0FBYyx3QkFBTyxvQkFBb0IsS0FBRSxXQUFXLEVBQUUsR0FBRyxHQUFFO1FBQzdELE9BQU8sU0FBQTtLQUNSLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxlQUFlO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3pDLE1BQU0sRUFBRSxNQUFNLEVBQUUsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQzlDO1FBRUQsa0JBQWtCO1FBQ2xCLElBQUksZUFBZSxHQUE4QixFQUFFLENBQUM7UUFDcEQsSUFBSTtZQUNGLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMvRDtRQUFDLFdBQU07WUFDTixhQUFhO1NBQ2Q7UUFFRCw4QkFBOEI7UUFDOUIsSUFBSSxlQUFlLENBQUMsV0FBVyxFQUFFO1lBQy9CLElBQUk7Z0JBQ0YsSUFBTSxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLFdBQVcsSUFBSSxXQUFXLENBQUMsUUFBUSxFQUFFO29CQUN2QyxlQUFlLENBQUMseUJBQXlCLENBQUM7d0JBQ3hDLEVBQUUsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDO2lCQUM3QjthQUNGO1lBQUMsV0FBTTtnQkFDTixhQUFhO2FBQ2Q7U0FDRjtRQUVELElBQU0sT0FBTyxHQUE0QjtZQUN2QyxNQUFNLEVBQUUsZUFBZSxDQUFDLFVBQVU7WUFDbEMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxVQUFVO1lBQ3hDLGlCQUFpQixFQUFFLFVBQUMsVUFBa0IsSUFBSyxPQUFBLGVBQWUsQ0FBQyxVQUFVLENBQUMsRUFBM0IsQ0FBMkI7U0FDdkUsQ0FBQztRQUVGLE9BQU8sT0FBeUIsQ0FBQztJQUNuQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsRUFDRDtJQUNFLFdBQVcsRUFBRSx1QkFBdUI7SUFDcEMsT0FBTyxFQUFFLHVCQUF1QjtJQUNoQyxZQUFZLEVBQUUsR0FBRztJQUNqQixpQkFBaUIsRUFBRSxJQUFJO0lBQ3ZCLCtCQUErQixFQUFFLHNCQUFzQjtJQUN2RCxpQkFBaUIsRUFBRSxVQUFDLEVBQWtCO1FBQWhCLElBQUEsS0FBSyxXQUFBLEVBQUssSUFBSSxjQUFoQixTQUFrQixDQUFGO1FBQU8sT0FBQSxjQUFNLElBQUksRUFBRyxDQUFBO0tBQUE7Q0FDekQsQ0FDRixDQUFDO0FBRUYsU0FBUyxzQkFBc0IsQ0FDN0IsR0FBMEI7SUFFMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRTtRQUMxQixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQsT0FBTztRQUNMLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3pCLFNBQVMsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRTtZQUNwRCxhQUFhLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRTtZQUNoRSxtQkFBbUIsRUFDakIsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixDQUFDLElBQUksRUFBRTtTQUN6RCxDQUFDO0tBQ0gsQ0FBQztBQUNKLENBQUMifQ==

/***/ }),

/***/ "Sa3D":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/fetchSearchConfiguration.js ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: cacheTime, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheTime", function() { return cacheTime; });
/* harmony import */ var _browserUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browserUtils */ "8wLM");
/* harmony import */ var _ecsUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ecsUtils */ "4o6J");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch */ "y+O/");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetcher */ "AK9X");
/* harmony import */ var _lokiUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lokiUtils */ "MXs4");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





var monitorName = "searchConfiguration";
var cacheTime = 5 * 60 * 1000; // 5 mins
/* harmony default export */ __webpack_exports__["default"] = (Object(_fetcher__WEBPACK_IMPORTED_MODULE_3__["default"])(function fetchSearchConfiguration(_a) {
    var token = _a.token, clientType = _a.clientType, environment = _a.environment, culture = _a.culture, additionalHeaders = _a.additionalHeaders, _b = _a.siteId, siteId = _b === void 0 ? "" : _b;
    var headers = Object(_lokiUtils__WEBPACK_IMPORTED_MODULE_4__["createHeader"])(clientType, __assign(__assign({}, additionalHeaders), Object(_lokiUtils__WEBPACK_IMPORTED_MODULE_4__["getVerticalAddHeader"])()), token);
    return Object(_fetch__WEBPACK_IMPORTED_MODULE_2__["default"])({
        url: Object(_browserUtils__WEBPACK_IMPORTED_MODULE_0__["constructUrl"])(Object(_lokiUtils__WEBPACK_IMPORTED_MODULE_4__["resolveLokiSearchConfigurationUrl"])(environment, culture), Object(_lokiUtils__WEBPACK_IMPORTED_MODULE_4__["getVerticalQueryParams"])(siteId, false)),
        method: "GET",
        headers: headers,
    });
}, {
    monitorName: monitorName,
    cacheId: monitorName,
    cacheVersion: "0",
    cacheItemLifetime: cacheTime,
    cacheKeyExtractor: function (_a) {
        var token = _a.token, rest = __rest(_a, ["token"]);
        /**
         * Search scenarios are distinct for different apps,
         * and configuration fetch needs to be retriggered if this changes.
         */
        var msSearchScenario = rest.additionalHeaders
            ? rest.additionalHeaders["X-MSSearchScenario"] || ""
            : "";
        return __assign(__assign({}, rest), { msSearchScenario: msSearchScenario });
    },
    additionalSuccessPropsExtractor: function (xhr) {
        return __assign(__assign({}, Object(_ecsUtils__WEBPACK_IMPORTED_MODULE_1__["extractEcsProperties"])(xhr.responseText)), { cacheClear: Object(_browserUtils__WEBPACK_IMPORTED_MODULE_0__["getQueryStringValue"])("cacheClear") });
    },
    // Busting cache if window.location contains this query param
    forceRefresh: function () { return Object(_browserUtils__WEBPACK_IMPORTED_MODULE_0__["getQueryStringValue"])("cacheClear") === "true"; },
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hTZWFyY2hDb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2ZldGNoU2VhcmNoQ29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNsRCxPQUFPLEtBQUssTUFBTSxTQUFTLENBQUM7QUFDNUIsT0FBTyxPQUFPLE1BQU0sV0FBVyxDQUFDO0FBRWhDLE9BQU8sRUFDTCxZQUFZLEVBQ1osb0JBQW9CLEVBQ3BCLHNCQUFzQixFQUN0QixpQ0FBaUMsR0FDbEMsTUFBTSxhQUFhLENBQUM7QUFFckIsSUFBTSxXQUFXLEdBQVcscUJBQXFCLENBQUM7QUFDbEQsTUFBTSxDQUFDLElBQU0sU0FBUyxHQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsU0FBUztBQUV6RCxlQUFlLE9BQU8sQ0FDcEIsU0FBUyx3QkFBd0IsQ0FBQyxFQU9DO1FBTmpDLEtBQUssV0FBQSxFQUNMLFVBQVUsZ0JBQUEsRUFDVixXQUFXLGlCQUFBLEVBQ1gsT0FBTyxhQUFBLEVBQ1AsaUJBQWlCLHVCQUFBLEVBQ2pCLGNBQVcsRUFBWCxNQUFNLG1CQUFHLEVBQUUsS0FBQTtJQUVYLElBQU0sT0FBTyxHQUFHLFlBQVksQ0FDMUIsVUFBVSx3QkFDTCxpQkFBaUIsR0FBSyxvQkFBb0IsRUFBRSxHQUNqRCxLQUFLLENBQ04sQ0FBQztJQUNGLE9BQU8sS0FBSyxDQUFDO1FBQ1gsR0FBRyxFQUFFLFlBQVksQ0FDZixpQ0FBaUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQ3ZELHNCQUFzQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FDdEM7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLE9BQU8sU0FBQTtLQUNSLENBQUMsQ0FBQztBQUNMLENBQUMsRUFDRDtJQUNFLFdBQVcsYUFBQTtJQUNYLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLFlBQVksRUFBRSxHQUFHO0lBQ2pCLGlCQUFpQixFQUFFLFNBQVM7SUFDNUIsaUJBQWlCLEVBQUUsVUFBQyxFQUFrQjtRQUFoQixJQUFBLEtBQUssV0FBQSxFQUFLLElBQUksY0FBaEIsU0FBa0IsQ0FBRjtRQUNsQzs7O1dBR0c7UUFDSCxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUI7WUFDN0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUU7WUFDcEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNQLDZCQUFZLElBQUksS0FBRSxnQkFBZ0Isa0JBQUEsSUFBRztJQUN2QyxDQUFDO0lBQ0QsK0JBQStCLEVBQUUsVUFBQyxHQUFHO1FBQ25DLDZCQUNNLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxZQUFZLENBRXZDLEtBQ0YsVUFBVSxFQUFFLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxJQUM3QztJQUNKLENBQUM7SUFDRCw2REFBNkQ7SUFDN0QsWUFBWSxFQUFFLGNBQU0sT0FBQSxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxNQUFNLEVBQTVDLENBQTRDO0NBQ2pFLENBQ0YsQ0FBQyJ9

/***/ }),

/***/ "UN2C":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/warmupMsb.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "y+O/");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetcher */ "AK9X");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


var id = "warmupMsb";
/* harmony default export */ __webpack_exports__["default"] = (Object(_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"])(function warmupMsb(_a) {
    var msbUrl = _a.msbUrl, clientType = _a.clientType, token = _a.token;
    var url = msbUrl + "/work/api/v3/user/init";
    var body = {
        Authentication: token,
        clientContext: {
            clientType: clientType,
        },
    };
    return Object(_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: url,
        method: "POST",
        body: JSON.stringify(body),
    });
}, {
    monitorName: id,
    cacheId: id,
    cacheVersion: "0",
    cacheItemLifetime: 5000,
    cacheKeyExtractor: function (_a) {
        var token = _a.token, rest = __rest(_a, ["token"]);
        return (__assign({}, rest));
    },
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FybXVwTXNiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3dhcm11cE1zYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLE1BQU0sU0FBUyxDQUFDO0FBQzVCLE9BQU8sT0FBTyxNQUFNLFdBQVcsQ0FBQztBQUVoQyxJQUFNLEVBQUUsR0FBRyxXQUFXLENBQUM7QUFDdkIsZUFBZSxPQUFPLENBQ3BCLFNBQVMsU0FBUyxDQUFDLEVBSUM7UUFIbEIsTUFBTSxZQUFBLEVBQ04sVUFBVSxnQkFBQSxFQUNWLEtBQUssV0FBQTtJQUVMLElBQU0sR0FBRyxHQUFNLE1BQU0sMkJBQXdCLENBQUM7SUFDOUMsSUFBTSxJQUFJLEdBQUc7UUFDWCxjQUFjLEVBQUUsS0FBSztRQUNyQixhQUFhLEVBQUU7WUFDYixVQUFVLFlBQUE7U0FDWDtLQUNGLENBQUM7SUFDRixPQUFPLEtBQUssQ0FBQztRQUNYLEdBQUcsS0FBQTtRQUNILE1BQU0sRUFBRSxNQUFNO1FBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO0tBQzNCLENBQUMsQ0FBQztBQUNMLENBQUMsRUFDRDtJQUNFLFdBQVcsRUFBRSxFQUFFO0lBQ2YsT0FBTyxFQUFFLEVBQUU7SUFDWCxZQUFZLEVBQUUsR0FBRztJQUNqQixpQkFBaUIsRUFBRSxJQUFJO0lBQ3ZCLGlCQUFpQixFQUFFLFVBQUMsRUFBa0I7UUFBaEIsSUFBQSxLQUFLLFdBQUEsRUFBSyxJQUFJLGNBQWhCLFNBQWtCLENBQUY7UUFBTyxPQUFBLGNBQU0sSUFBSSxFQUFHLENBQUE7S0FBQTtDQUN6RCxDQUNGLENBQUMifQ==

/***/ }),

/***/ "WNKU":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/fetchSearchCenterUrl.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: fetchRawSearchCenterUrl, default, getSearchCenterRootUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRawSearchCenterUrl", function() { return fetchRawSearchCenterUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchCenterRootUrl", function() { return getSearchCenterRootUrl; });
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "y+O/");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetcher */ "AK9X");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var cacheId = "searchcenterurl";
var cachedResponse;
function fetchRawSearchCenterUrl(_a) {
    var siteRoot = _a.siteRoot, tokenProvider = _a.tokenProvider;
    return fetcherInternal({ siteRoot: siteRoot, tokenProvider: tokenProvider }).then(function (xhrWrapper) {
        // If we're within the cache duration, we return the parsed result
        if (xhrWrapper.cacheItemResolved && cachedResponse) {
            return cachedResponse;
        }
        var responseData = JSON.parse(xhrWrapper.xhr.responseText);
        var searchCenterUrl = (responseData && responseData.d && responseData.d.searchcenterurl) || "";
        // Keep response in memory for subsequent calls within cache duration
        cachedResponse = searchCenterUrl;
        return searchCenterUrl;
    });
}
var fetcherInternal = Object(_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_a) {
    var siteRoot = _a.siteRoot, tokenProvider = _a.tokenProvider;
    return tokenProvider({ attempt: 0 }).then(function (token) {
        return Object(_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])({
            url: siteRoot + "/_api/search/searchcenterurl",
            method: "GET",
            headers: __assign({ Accept: "application/json;odata=verbose" }, (token ? { Authorization: "Bearer " + token } : {})),
            timeoutMs: 5000,
        });
    });
}, {
    monitorName: "fetchSearchCenterUrl",
    cacheId: cacheId,
    cacheVersion: "0",
    cacheItemLifetime: 24 * 60 * 60 * 1000,
    cacheKeyExtractor: function () { return ""; },
});
/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var siteRoot = _a.siteRoot, tokenProvider = _a.tokenProvider;
    return fetchRawSearchCenterUrl({ siteRoot: siteRoot, tokenProvider: tokenProvider }).then(function (value) {
        return getSearchCenterRootUrl(value);
    });
});
function getSearchCenterRootUrl(rawSearchCenterUrl) {
    var searchPath = "/search/";
    var searchPathIdx = rawSearchCenterUrl.lastIndexOf(searchPath);
    if (searchPathIdx < 0) {
        return "";
    }
    return rawSearchCenterUrl
        .substring(0, searchPathIdx + searchPath.length)
        .replace(/\/$/, "");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hTZWFyY2hDZW50ZXJVcmwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZmV0Y2hTZWFyY2hDZW50ZXJVcmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxTQUFTLENBQUM7QUFDNUIsT0FBTyxPQUEwQixNQUFNLFdBQVcsQ0FBQztBQUVuRCxJQUFNLE9BQU8sR0FBVyxpQkFBaUIsQ0FBQztBQUMxQyxJQUFJLGNBQXNCLENBQUM7QUFFM0IsTUFBTSxVQUFVLHVCQUF1QixDQUFDLEVBR1Q7UUFGN0IsUUFBUSxjQUFBLEVBQ1IsYUFBYSxtQkFBQTtJQUViLE9BQU8sZUFBZSxDQUFDLEVBQUUsUUFBUSxVQUFBLEVBQUUsYUFBYSxlQUFBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFVBQVU7UUFDbEUsa0VBQWtFO1FBQ2xFLElBQUksVUFBVSxDQUFDLGlCQUFpQixJQUFJLGNBQWMsRUFBRTtZQUNsRCxPQUFPLGNBQWMsQ0FBQztTQUN2QjtRQUVELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3RCxJQUFNLGVBQWUsR0FDbkIsQ0FBQyxZQUFZLElBQUksWUFBWSxDQUFDLENBQUMsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUUzRSxxRUFBcUU7UUFDckUsY0FBYyxHQUFHLGVBQWUsQ0FBQztRQUNqQyxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFPRCxJQUFNLGVBQWUsR0FBRyxPQUFPLENBQzdCLFVBQUMsRUFBeUQ7UUFBdkQsUUFBUSxjQUFBLEVBQUUsYUFBYSxtQkFBQTtJQUN4QixPQUFPLGFBQWEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUs7UUFDOUMsT0FBQSxLQUFLLENBQUM7WUFDSixHQUFHLEVBQUssUUFBUSxpQ0FBOEI7WUFDOUMsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLGFBQ0wsTUFBTSxFQUFFLGdDQUFnQyxJQUNyQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsWUFBVSxLQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQ3ZEO1lBQ0QsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQztJQVJGLENBUUUsQ0FDSCxDQUFDO0FBQ0osQ0FBQyxFQUNEO0lBQ0UsV0FBVyxFQUFFLHNCQUFzQjtJQUNuQyxPQUFPLFNBQUE7SUFDUCxZQUFZLEVBQUUsR0FBRztJQUNqQixpQkFBaUIsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJO0lBQ3RDLGlCQUFpQixFQUFFLGNBQU0sT0FBQSxFQUFFLEVBQUYsQ0FBRTtDQUM1QixDQUNGLENBQUM7QUFFRixnQkFBZSxVQUFDLEVBR2U7UUFGN0IsUUFBUSxjQUFBLEVBQ1IsYUFBYSxtQkFBQTtJQUViLE9BQU8sdUJBQXVCLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxhQUFhLGVBQUEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBSztRQUNyRSxPQUFBLHNCQUFzQixDQUFDLEtBQUssQ0FBQztJQUE3QixDQUE2QixDQUM5QixDQUFDO0FBQ0osQ0FBQyxFQUFDO0FBRUYsTUFBTSxVQUFVLHNCQUFzQixDQUFDLGtCQUEwQjtJQUMvRCxJQUFNLFVBQVUsR0FBVyxVQUFVLENBQUM7SUFDdEMsSUFBTSxhQUFhLEdBQVcsa0JBQWtCLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pFLElBQUksYUFBYSxHQUFHLENBQUMsRUFBRTtRQUNyQixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQsT0FBTyxrQkFBa0I7U0FDdEIsU0FBUyxDQUFDLENBQUMsRUFBRSxhQUFhLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztTQUMvQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLENBQUMifQ==

/***/ }),

/***/ "YWn9":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/fetchPersonalData.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: cacheId, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheId", function() { return cacheId; });
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "y+O/");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetcher */ "AK9X");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var cacheId = "personalaccountname";
/* harmony default export */ __webpack_exports__["default"] = (Object(_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"])(function fetchPersonalAccountName(_a) {
    var url = _a.url, token = _a.token;
    return Object(_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: url,
        method: "GET",
        headers: __assign({ Accept: "application/json;odata=verbose" }, (token ? { Authorization: "Bearer " + token } : {})),
        timeoutMs: 5000,
    });
}, {
    monitorName: "fetchPersonalAccountName",
    cacheId: cacheId,
    cacheVersion: "0",
    cacheItemLifetime: 24 * 60 * 60 * 1000,
    cacheKeyExtractor: function () { return ""; },
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hQZXJzb25hbERhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZmV0Y2hQZXJzb25hbERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxTQUFTLENBQUM7QUFDNUIsT0FBTyxPQUEwQixNQUFNLFdBQVcsQ0FBQztBQUVuRCxNQUFNLENBQUMsSUFBTSxPQUFPLEdBQVcscUJBQXFCLENBQUM7QUFFckQsZUFBZSxPQUFPLENBQ3BCLFNBQVMsd0JBQXdCLENBQUMsRUFHQztRQUZqQyxHQUFHLFNBQUEsRUFDSCxLQUFLLFdBQUE7SUFFTCxPQUFPLEtBQUssQ0FBQztRQUNYLEdBQUcsS0FBQTtRQUNILE1BQU0sRUFBRSxLQUFLO1FBQ2IsT0FBTyxhQUNMLE1BQU0sRUFBRSxnQ0FBZ0MsSUFDckMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLFlBQVUsS0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUN2RDtRQUNELFNBQVMsRUFBRSxJQUFJO0tBQ2hCLENBQUMsQ0FBQztBQUNMLENBQUMsRUFDRDtJQUNFLFdBQVcsRUFBRSwwQkFBMEI7SUFDdkMsT0FBTyxTQUFBO0lBQ1AsWUFBWSxFQUFFLEdBQUc7SUFDakIsaUJBQWlCLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSTtJQUN0QyxpQkFBaUIsRUFBRSxjQUFNLE9BQUEsRUFBRSxFQUFGLENBQUU7Q0FDNUIsQ0FDRixDQUFDIn0=

/***/ }),

/***/ "bH3N":
/*!********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/fetchSiteActivities.js ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: cacheKeyExtractor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheKeyExtractor", function() { return cacheKeyExtractor; });
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "y+O/");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetcher */ "AK9X");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


function cacheKeyExtractor(sites) {
    return {
        scope: (sites &&
            sites
                .map(function (site) { return site && site.siteId && site.siteId.toLowerCase(); })
                .join(",")) ||
            "",
    };
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"])(function fetchSiteActivities(_a) {
    var clientId = _a.clientId, token = _a.token, requestDataProvider = _a.requestDataProvider, sites = _a.sites;
    var _b = requestDataProvider(), endpoint = _b.endpoint, microserviceFlights = _b.microserviceFlights;
    var requestOptions = {
        url: endpoint,
        method: "POST",
        headers: __assign(__assign({ Accept: "application/json;odata=verbose", "Content-Type": "application/json;odata=verbose", "SPHome-ClientType": clientId }, (token ? { Authorization: "Bearer " + token } : {})), (microserviceFlights && {
            "SPHome-MicroserviceFlights": microserviceFlights.join(";"),
        })),
        body: JSON.stringify(sites.slice(0, 30).map(function (site) { return ({
            IndexId: site.id,
            SiteId: site.siteId,
            WebId: site.webId,
            Type: "SiteReference",
        }); })),
    };
    return Object(_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])(requestOptions);
}, {
    monitorName: "site-activities-rawsprefetch",
    cacheId: "site-activities-rawsprefetch",
    cacheVersion: "0",
    cacheItemLifetime: 1000 * 60 * 30,
    cacheKeyExtractor: function (options) {
        return cacheKeyExtractor(options.sites.slice(0, 30));
    },
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hTaXRlQWN0aXZpdGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9mZXRjaFNpdGVBY3Rpdml0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyxLQUFLLE1BQU0sU0FBUyxDQUFDO0FBQzVCLE9BQU8sT0FBNEIsTUFBTSxXQUFXLENBQUM7QUFJckQsTUFBTSxVQUFVLGlCQUFpQixDQUMvQixLQUFzRDtJQUV0RCxPQUFPO1FBQ0wsS0FBSyxFQUNILENBQUMsS0FBSztZQUNKLEtBQUs7aUJBQ0YsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBaEQsQ0FBZ0QsQ0FBQztpQkFDL0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsRUFBRTtLQUNMLENBQUM7QUFDSixDQUFDO0FBRUQsZUFBZSxPQUFPLENBQ3BCLFNBQVMsbUJBQW1CLENBQUMsRUFLWTtRQUp2QyxRQUFRLGNBQUEsRUFDUixLQUFLLFdBQUEsRUFDTCxtQkFBbUIseUJBQUEsRUFDbkIsS0FBSyxXQUFBO0lBRUMsSUFBQSxLQUFvQyxtQkFBbUIsRUFBRSxFQUF2RCxRQUFRLGNBQUEsRUFBRSxtQkFBbUIseUJBQTBCLENBQUM7SUFDaEUsSUFBTSxjQUFjLEdBQUc7UUFDckIsR0FBRyxFQUFFLFFBQVE7UUFDYixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sc0JBQ0wsTUFBTSxFQUFFLGdDQUFnQyxFQUN4QyxjQUFjLEVBQUUsZ0NBQWdDLEVBQ2hELG1CQUFtQixFQUFFLFFBQVEsSUFDMUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLFlBQVUsS0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUNuRCxDQUFDLG1CQUFtQixJQUFJO1lBQ3pCLDRCQUE0QixFQUFFLG1CQUFtQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDNUQsQ0FBQyxDQUNIO1FBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQ2xCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLENBQUM7WUFDaEMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsSUFBSSxFQUFFLGVBQWU7U0FDdEIsQ0FBQyxFQUwrQixDQUsvQixDQUFDLENBQ0o7S0FDTyxDQUFDO0lBRVgsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxFQUNEO0lBQ0UsV0FBVyxFQUFFLDhCQUE4QjtJQUMzQyxPQUFPLEVBQUUsOEJBQThCO0lBQ3ZDLFlBQVksRUFBRSxHQUFHO0lBQ2pCLGlCQUFpQixFQUFFLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRTtJQUNqQyxpQkFBaUIsRUFBRSxVQUFDLE9BQU87UUFDekIsT0FBQSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFBN0MsQ0FBNkM7Q0FDaEQsQ0FDRixDQUFDIn0=

/***/ }),

/***/ "bwCB":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/fetchAcquireToken.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "y+O/");
/* harmony import */ var _withCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withCache */ "A1LU");
/* harmony import */ var _withMonitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withMonitor */ "8a+c");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var approvedResources = [
    "https://substrate.office.com",
    "https://loki.delve.office.com",
    "https://www.bing.com",
    "https://outlook.office365.com/search",
];
/* harmony default export */ __webpack_exports__["default"] = (Object(_withMonitor__WEBPACK_IMPORTED_MODULE_2__["default"])({
    monitorName: "prefetchAcquireToken",
    additionalSuccessPropsExtractor: function (xhr) {
        var responseText = xhr && xhr.responseText && JSON.parse(xhr.responseText);
        return __assign({}, (responseText && {
            resource: isApprovedResourceUrl(responseText.resource)
                ? responseText.resource
                : "",
            expires_on: responseText.expires_on,
        }));
    },
    additionalFailurePropsExtractor: function (xhr) {
        var _a;
        return ((_a = xhr === null || xhr === void 0 ? void 0 : xhr.requestLogData) === null || _a === void 0 ? void 0 : _a.resource) ? {
            resource: xhr.requestLogData.resource,
        }
            : {};
    },
}, Object(_withCache__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_a) {
    var digest = _a.digest, portalUrl = _a.portalUrl, resourceUrl = _a.resourceUrl, useSTI = _a.useSTI;
    var body = {
        resource: resourceUrl,
    };
    if (useSTI) {
        body["tokenType"] = "STI";
    }
    return Object(_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])(__assign({ url: portalUrl + "/_api/SP.OAuth.Token/Acquire", method: "POST", headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Odata-Version": "4.0",
            Accept: "application/json;odata.metadata=minimal",
            "X-RequestDigest": digest,
        }, body: JSON.stringify(body), timeoutMs: 7000 }, (isApprovedResourceUrl(resourceUrl) && {
        requestLogData: { resource: resourceUrl },
    }))).then(function (xhr) {
        return {
            xhr: xhr,
            tokenAttemptCount: -1,
            tokenFetchDuration: -1,
            cacheItemType: null,
        };
    });
})({
    cacheId: "psst",
    cacheVersion: "0",
    cacheItemLifetime: 1000 * 60 * 5,
    cacheKeyExtractor: function (options) { return ({ resource: options.resourceUrl }); },
})));
var isApprovedResourceUrl = function (url) {
    return approvedResources.indexOf(url) !== -1;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hBY3F1aXJlVG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZmV0Y2hBY3F1aXJlVG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLEtBQUssTUFBTSxTQUFTLENBQUM7QUFDNUIsT0FBTyxTQUFTLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sV0FBVyxNQUFNLGVBQWUsQ0FBQztBQUV4QyxJQUFNLGlCQUFpQixHQUFHO0lBQ3hCLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0Isc0JBQXNCO0lBQ3RCLHNDQUFzQztDQUN2QyxDQUFDO0FBRUYsZUFBZSxXQUFXLENBQ3hCO0lBQ0UsV0FBVyxFQUFFLHNCQUFzQjtJQUNuQywrQkFBK0IsRUFBRSxVQUFDLEdBQUc7UUFDbkMsSUFBTSxZQUFZLEdBQ2hCLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFELG9CQUNLLENBQUMsWUFBWSxJQUFJO1lBQ2xCLFFBQVEsRUFBRSxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwRCxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVE7Z0JBQ3ZCLENBQUMsQ0FBQyxFQUFFO1lBQ04sVUFBVSxFQUFFLFlBQVksQ0FBQyxVQUFVO1NBQ3BDLENBQUMsRUFDRjtJQUNKLENBQUM7SUFDRCwrQkFBK0IsRUFBRSxVQUMvQixHQUFxQzs7UUFFckMsT0FBTyxPQUFBLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxjQUFjLDBDQUFFLFFBQVEsRUFDbEMsQ0FBQyxDQUFDO1lBQ0UsUUFBUSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUTtTQUN0QztZQUNILENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDO0NBQ0YsRUFDRCxTQUFTLENBQ1AsVUFBQyxFQUFxRTtRQUFuRSxNQUFNLFlBQUEsRUFBRSxTQUFTLGVBQUEsRUFBRSxXQUFXLGlCQUFBLEVBQUUsTUFBTSxZQUFBO0lBQ3ZDLElBQU0sSUFBSSxHQUE2QztRQUNyRCxRQUFRLEVBQUUsV0FBVztLQUN0QixDQUFDO0lBQ0YsSUFBSSxNQUFNLEVBQUU7UUFDVixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDO0tBQzNCO0lBQ0QsT0FBTyxLQUFLLFlBQ1YsR0FBRyxFQUFLLFNBQVMsaUNBQThCLEVBQy9DLE1BQU0sRUFBRSxNQUFNLEVBQ2QsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGlDQUFpQztZQUNqRCxlQUFlLEVBQUUsS0FBSztZQUN0QixNQUFNLEVBQUUseUNBQXlDO1lBQ2pELGlCQUFpQixFQUFFLE1BQU07U0FDMUIsRUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDMUIsU0FBUyxFQUFFLElBQUksSUFDWixDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxJQUFJO1FBQ3hDLGNBQWMsRUFBRSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUU7S0FDMUMsQ0FBQyxFQUNGLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztRQUNWLE9BQU87WUFDTCxHQUFHLEtBQUE7WUFDSCxpQkFBaUIsRUFBRSxDQUFDLENBQUM7WUFDckIsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1lBQ3RCLGFBQWEsRUFBRSxJQUFJO1NBQ3BCLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FDRixDQUFDO0lBQ0EsT0FBTyxFQUFFLE1BQU07SUFDZixZQUFZLEVBQUUsR0FBRztJQUNqQixpQkFBaUIsRUFBRSxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDaEMsaUJBQWlCLEVBQUUsVUFBQyxPQUFPLElBQUssT0FBQSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFuQyxDQUFtQztDQUNwRSxDQUFDLENBQ0gsQ0FBQztBQUVGLElBQU0scUJBQXFCLEdBQUcsVUFBQyxHQUFXO0lBQ3hDLE9BQUEsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUFyQyxDQUFxQyxDQUFDIn0=

/***/ }),

/***/ "c+lw":
/*!************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/fetchSharePointDigestv2.js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "y+O/");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetcher */ "AK9X");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var name = "fetchSharepointDigest";
var hasOverrideDigestBeenUsed = false;
/* harmony default export */ __webpack_exports__["default"] = (Object(_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"])(function fetchSharePointDigest(_a) {
    var endpoint = _a.endpoint, token = _a.token, overrideDigest = _a.overrideDigest;
    if (overrideDigest && !hasOverrideDigestBeenUsed) {
        hasOverrideDigestBeenUsed = true;
        return new Promise(function (resolve) {
            // tslint:disable-next-line:no-object-literal-type-assertion
            var digestResponse = {
                responseText: JSON.stringify({
                    d: {
                        GetContextWebInformation: { FormDigestValue: overrideDigest },
                    },
                }),
            };
            resolve(digestResponse);
        });
    }
    else {
        return Object(_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])({
            url: endpoint + "/_api/contextinfo",
            method: "POST",
            headers: __assign({ Accept: "application/json;odata=verbose", "Content-Type": "application/json;odata=verbose" }, (token ? { Authorization: "Bearer " + token } : {})),
            timeoutMs: 5000,
        });
    }
}, {
    monitorName: name,
    cacheId: name,
    cacheVersion: "0",
    // 30 min timeout value gotten from
    // sts/stsom/Administration/SPCanary.cs
    // Subtract 10 seconds to keep digest current
    cacheItemLifetime: 30 * 60 * 1000 - 10000,
    cacheKeyExtractor: function (options) { return ({
        url: options.endpoint,
    }); },
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hTaGFyZVBvaW50RGlnZXN0djIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZmV0Y2hTaGFyZVBvaW50RGlnZXN0djIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxTQUFTLENBQUM7QUFDNUIsT0FBTyxPQUEwQixNQUFNLFdBQVcsQ0FBQztBQUVuRCxJQUFNLElBQUksR0FBVyx1QkFBdUIsQ0FBQztBQUM3QyxJQUFJLHlCQUF5QixHQUFZLEtBQUssQ0FBQztBQUUvQyxlQUFlLE9BQU8sQ0FDcEIsU0FBUyxxQkFBcUIsQ0FBQyxFQUlHO1FBSGhDLFFBQVEsY0FBQSxFQUNSLEtBQUssV0FBQSxFQUNMLGNBQWMsb0JBQUE7SUFFZCxJQUFJLGNBQWMsSUFBSSxDQUFDLHlCQUF5QixFQUFFO1FBQ2hELHlCQUF5QixHQUFHLElBQUksQ0FBQztRQUNqQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTztZQUN6Qiw0REFBNEQ7WUFDNUQsSUFBTSxjQUFjLEdBQW1CO2dCQUNyQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDM0IsQ0FBQyxFQUFFO3dCQUNELHdCQUF3QixFQUFFLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRTtxQkFDOUQ7aUJBQ0YsQ0FBQzthQUNlLENBQUM7WUFDcEIsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0tBQ0o7U0FBTTtRQUNMLE9BQU8sS0FBSyxDQUFDO1lBQ1gsR0FBRyxFQUFLLFFBQVEsc0JBQW1CO1lBQ25DLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxhQUNMLE1BQU0sRUFBRSxnQ0FBZ0MsRUFDeEMsY0FBYyxFQUFFLGdDQUFnQyxJQUM3QyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsWUFBVSxLQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQ3ZEO1lBQ0QsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLEVBQ0Q7SUFDRSxXQUFXLEVBQUUsSUFBSTtJQUNqQixPQUFPLEVBQUUsSUFBSTtJQUNiLFlBQVksRUFBRSxHQUFHO0lBQ2pCLG1DQUFtQztJQUNuQyx1Q0FBdUM7SUFDdkMsNkNBQTZDO0lBQzdDLGlCQUFpQixFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLEtBQUs7SUFDekMsaUJBQWlCLEVBQUUsVUFBQyxPQUF3QyxJQUFLLE9BQUEsQ0FBQztRQUNoRSxHQUFHLEVBQUUsT0FBTyxDQUFDLFFBQVE7S0FDdEIsQ0FBQyxFQUYrRCxDQUUvRDtDQUNILENBQ0YsQ0FBQyJ9

/***/ }),

/***/ "d/hp":
/*!********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/version.js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: BUILD_VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUILD_VERSION", function() { return BUILD_VERSION; });
var BUILD_VERSION = "1.20210116.2.0";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyJ9

/***/ }),

/***/ "f0Wj":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/withImportMonitor.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withImportMonitor; });
/* harmony import */ var _withBasicMonitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withBasicMonitor */ "lKsu");

function withImportMonitor(webpackChunkName, importPromiseFactory) {
    return Object(_withBasicMonitor__WEBPACK_IMPORTED_MODULE_0__["default"])({
        monitorType: "chunk_load",
        monitorName: webpackChunkName + "_chunk_load",
        monitorOnce: true,
    }, importPromiseFactory);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aEltcG9ydE1vbml0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvd2l0aEltcG9ydE1vbml0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxnQkFBZ0IsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxNQUFNLENBQUMsT0FBTyxVQUFVLGlCQUFpQixDQUN2QyxnQkFBd0IsRUFDeEIsb0JBQXNDO0lBRXRDLE9BQU8sZ0JBQWdCLENBQ3JCO1FBQ0UsV0FBVyxFQUFFLFlBQVk7UUFDekIsV0FBVyxFQUFLLGdCQUFnQixnQkFBYTtRQUM3QyxXQUFXLEVBQUUsSUFBSTtLQUNsQixFQUNELG9CQUFvQixDQUNyQixDQUFDO0FBQ0osQ0FBQyJ9

/***/ }),

/***/ "ffYn":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/fetchSiteNewsSuggestions.js ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: createQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQuery", function() { return createQuery; });
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "y+O/");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetcher */ "AK9X");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


function createQuery(useMultiGeo, clientId, site) {
    return (site.sitePath + "/_api/search/query?QueryText='*'" + queryTemplate(site) +
        "&HitHighlightedProperties='Title'&StartRow=0&RowLimit=100" +
        ("&Properties='ClientFunction:News,EnableMultiGeoSearch:" + (useMultiGeo ? "true" : "false") + "'") +
        "&sortlist='LastModifiedTime:descending'" +
        // This would normally come from a propmap, but we dont have access to it here.
        "&SelectProperties='ContentClass,ContentTypeId,DefaultEncodingURL,DocId,EditorOWSUSER,FileExtension,GeoLocationSource,LastModifiedTime,ModifiedBy,Path,SPWebUrl,SecondaryFileExtension,ServerRedirectedUrl,SiteId,Title,UniqueId,WebId'" +
        ("&ClientType='" + clientId + "'&EnableQueryRules=false"));
}
function queryTemplate(site) {
    var departmentId = site.departmentId, isHubSite = site.isHubSite;
    var scopeFunc = isHubSite && departmentId ? departmentScope : siteScope;
    return ("&QueryTemplate='({searchterms}) ContentTypeId:0x0101009D1CB255DA76424F860D91F20E6C4118*" +
        (" AND PromotedState:2 AND " + scopeFunc(site) + "'"));
}
function siteScope(_a) {
    var sitePath = _a.sitePath;
    return "Path:\"" + sitePath + "\"";
}
function departmentScope(_a) {
    var departmentId = _a.departmentId;
    return "(DepartmentId:" + departmentId + " OR DepartmentId:" + departmentId.replace(/[{}]/g, "") + ")";
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"])(function fetchSiteNewsSuggestions(_a) {
    var clientId = _a.clientId, site = _a.site, token = _a.token;
    return Object(_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: createQuery(true, clientId, site),
        method: "GET",
        headers: __assign({ Accept: "application/json;odata=verbose", "Content-Type": "application/json;odata=verbose" }, (token ? { Authorization: "Bearer " + token } : {})),
    });
}, {
    monitorName: "sitenews-rawPrefetch",
    cacheId: "sitenews-rawPrefetch",
    cacheVersion: "0",
    cacheItemLifetime: 1000 * 60 * 15,
    cacheKeyExtractor: function (_a) {
        var site = _a.site;
        return ({ sitePath: site.sitePath });
    },
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hTaXRlTmV3c1N1Z2dlc3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2ZldGNoU2l0ZU5ld3NTdWdnZXN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLE9BQU8sS0FBSyxNQUFNLFNBQVMsQ0FBQztBQUM1QixPQUFPLE9BQU8sTUFBTSxXQUFXLENBQUM7QUFFaEMsTUFBTSxVQUFVLFdBQVcsQ0FDekIsV0FBb0IsRUFDcEIsUUFBZ0IsRUFDaEIsSUFBVztJQUVYLE9BQU8sQ0FDRixJQUFJLENBQUMsUUFBUSx3Q0FBbUMsYUFBYSxDQUFDLElBQUksQ0FBRztRQUN4RSwyREFBMkQ7U0FDM0QsNERBQ0UsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sT0FDN0IsQ0FBQTtRQUNILHlDQUF5QztRQUN6QywrRUFBK0U7UUFDL0Usd09BQXdPO1NBQ3hPLGtCQUFnQixRQUFRLDZCQUEwQixDQUFBLENBQ25ELENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsSUFBVztJQUN4QixJQUFBLFlBQVksR0FBZ0IsSUFBSSxhQUFwQixFQUFFLFNBQVMsR0FBSyxJQUFJLFVBQVQsQ0FBVTtJQUV6QyxJQUFNLFNBQVMsR0FBRyxTQUFTLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUUxRSxPQUFPLENBQ0wseUZBQXlGO1NBQ3pGLDhCQUE0QixTQUFTLENBQUMsSUFBSSxDQUFDLE1BQUcsQ0FBQSxDQUMvQyxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLEVBQW1CO1FBQWpCLFFBQVEsY0FBQTtJQUMzQixPQUFPLFlBQVMsUUFBUSxPQUFHLENBQUM7QUFDOUIsQ0FBQztBQUVELFNBQVMsZUFBZSxDQUFDLEVBQXVCO1FBQXJCLFlBQVksa0JBQUE7SUFDckMsT0FBTyxtQkFBaUIsWUFBWSx5QkFBb0IsWUFBWSxDQUFDLE9BQU8sQ0FDMUUsT0FBTyxFQUNQLEVBQUUsQ0FDSCxNQUFHLENBQUM7QUFDUCxDQUFDO0FBRUQsZUFBZSxPQUFPLENBQ3BCLFNBQVMsd0JBQXdCLENBQUMsRUFJVjtRQUh0QixRQUFRLGNBQUEsRUFDUixJQUFJLFVBQUEsRUFDSixLQUFLLFdBQUE7SUFFTCxPQUFPLEtBQUssQ0FBQztRQUNYLEdBQUcsRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUM7UUFDdEMsTUFBTSxFQUFFLEtBQUs7UUFDYixPQUFPLGFBQ0wsTUFBTSxFQUFFLGdDQUFnQyxFQUN4QyxjQUFjLEVBQUUsZ0NBQWdDLElBQzdDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxZQUFVLEtBQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FDdkQ7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDLEVBQ0Q7SUFDRSxXQUFXLEVBQUUsc0JBQXNCO0lBQ25DLE9BQU8sRUFBRSxzQkFBc0I7SUFDL0IsWUFBWSxFQUFFLEdBQUc7SUFDakIsaUJBQWlCLEVBQUUsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQ2pDLGlCQUFpQixFQUFFLFVBQUMsRUFBUTtZQUFOLElBQUksVUFBQTtRQUFPLE9BQUEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFBN0IsQ0FBNkI7Q0FDL0QsQ0FDRixDQUFDIn0=

/***/ }),

/***/ "ffzo":
/*!******************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/flux@2.1.1/node_modules/flux/lib/Dispatcher.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Dispatcher
 * 
 * @preventMunge
 */



exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "4QhR");

var _prefix = 'ID_';

/**
 * Dispatcher is used to broadcast payloads to registered callbacks. This is
 * different from generic pub-sub systems in two ways:
 *
 *   1) Callbacks are not subscribed to particular events. Every payload is
 *      dispatched to every registered callback.
 *   2) Callbacks can be deferred in whole or part until other callbacks have
 *      been executed.
 *
 * For example, consider this hypothetical flight destination form, which
 * selects a default city when a country is selected:
 *
 *   var flightDispatcher = new Dispatcher();
 *
 *   // Keeps track of which country is selected
 *   var CountryStore = {country: null};
 *
 *   // Keeps track of which city is selected
 *   var CityStore = {city: null};
 *
 *   // Keeps track of the base flight price of the selected city
 *   var FlightPriceStore = {price: null}
 *
 * When a user changes the selected city, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'city-update',
 *     selectedCity: 'paris'
 *   });
 *
 * This payload is digested by `CityStore`:
 *
 *   flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'city-update') {
 *       CityStore.city = payload.selectedCity;
 *     }
 *   });
 *
 * When the user selects a country, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'country-update',
 *     selectedCountry: 'australia'
 *   });
 *
 * This payload is digested by both stores:
 *
 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       CountryStore.country = payload.selectedCountry;
 *     }
 *   });
 *
 * When the callback to update `CountryStore` is registered, we save a reference
 * to the returned token. Using this token with `waitFor()`, we can guarantee
 * that `CountryStore` is updated before the callback that updates `CityStore`
 * needs to query its data.
 *
 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       // `CountryStore.country` may not be updated.
 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
 *       // `CountryStore.country` is now guaranteed to be updated.
 *
 *       // Select the default city for the new country
 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
 *     }
 *   });
 *
 * The usage of `waitFor()` can be chained, for example:
 *
 *   FlightPriceStore.dispatchToken =
 *     flightDispatcher.register(function(payload) {
 *       switch (payload.actionType) {
 *         case 'country-update':
 *         case 'city-update':
 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
 *           FlightPriceStore.price =
 *             getFlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *     }
 *   });
 *
 * The `country-update` payload will be guaranteed to invoke the stores'
 * registered callbacks in order: `CountryStore`, `CityStore`, then
 * `FlightPriceStore`.
 */

var Dispatcher = (function () {
  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    this._callbacks = {};
    this._isDispatching = false;
    this._isHandled = {};
    this._isPending = {};
    this._lastID = 1;
  }

  /**
   * Registers a callback to be invoked with every dispatched payload. Returns
   * a token that can be used with `waitFor()`.
   */

  Dispatcher.prototype.register = function register(callback) {
    var id = _prefix + this._lastID++;
    this._callbacks[id] = callback;
    return id;
  };

  /**
   * Removes a callback based on its token.
   */

  Dispatcher.prototype.unregister = function unregister(id) {
    !this._callbacks[id] ?  true ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : undefined : undefined;
    delete this._callbacks[id];
  };

  /**
   * Waits for the callbacks specified to be invoked before continuing execution
   * of the current callback. This method should only be used by a callback in
   * response to a dispatched payload.
   */

  Dispatcher.prototype.waitFor = function waitFor(ids) {
    !this._isDispatching ?  true ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : undefined : undefined;
    for (var ii = 0; ii < ids.length; ii++) {
      var id = ids[ii];
      if (this._isPending[id]) {
        !this._isHandled[id] ?  true ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : undefined : undefined;
        continue;
      }
      !this._callbacks[id] ?  true ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : undefined : undefined;
      this._invokeCallback(id);
    }
  };

  /**
   * Dispatches a payload to all registered callbacks.
   */

  Dispatcher.prototype.dispatch = function dispatch(payload) {
    !!this._isDispatching ?  true ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : undefined : undefined;
    this._startDispatching(payload);
    try {
      for (var id in this._callbacks) {
        if (this._isPending[id]) {
          continue;
        }
        this._invokeCallback(id);
      }
    } finally {
      this._stopDispatching();
    }
  };

  /**
   * Is this Dispatcher currently dispatching.
   */

  Dispatcher.prototype.isDispatching = function isDispatching() {
    return this._isDispatching;
  };

  /**
   * Call the callback stored with the given id. Also do some internal
   * bookkeeping.
   *
   * @internal
   */

  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
    this._isPending[id] = true;
    this._callbacks[id](this._pendingPayload);
    this._isHandled[id] = true;
  };

  /**
   * Set up bookkeeping needed when dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
    for (var id in this._callbacks) {
      this._isPending[id] = false;
      this._isHandled[id] = false;
    }
    this._pendingPayload = payload;
    this._isDispatching = true;
  };

  /**
   * Clear bookkeeping used for dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
    delete this._pendingPayload;
    this._isDispatching = false;
  };

  return Dispatcher;
})();

module.exports = Dispatcher;

/***/ }),

/***/ "gfxd":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/iFrameProxy.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default, createIframe, asyncVerifiedIframeMessageEvent, listenToMessage, unlistenToMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return iframeProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIframe", function() { return createIframe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncVerifiedIframeMessageEvent", function() { return asyncVerifiedIframeMessageEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenToMessage", function() { return listenToMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlistenToMessage", function() { return unlistenToMessage; });
/* harmony import */ var _createSafeToLogError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createSafeToLogError */ "nt8F");

/** Creates a new iframe proxy. */
function iframeProxy(source, origin) {
    var iframe = createIframe(), asyncMessageEvent = function (parser, predicate) {
        return asyncVerifiedIframeMessageEvent(iframe.contentWindow, origin, parser, predicate);
    }, postMessage = function (message, parser, predicate) {
        var promise = asyncMessageEvent(parser, predicate);
        iframe.contentWindow && iframe.contentWindow.postMessage(message, source);
        return promise;
    }, initialize = function () {
        if (!document.body.contains(iframe)) {
            iframe.src = source;
            iframe.style.display = "none";
            document.body.appendChild(iframe);
        }
        return iframe;
    };
    return { iframe: iframe, initialize: initialize, postMessage: postMessage };
}
var createIframe = function () { return document.createElement("iframe"); };
var asyncVerifiedIframeMessageEvent = 
/**
 * Waits for a specific message event from the specified HTML iframe which
 * is determined by the specified message event predicate.
 *
 * @param contentWindow The window object that belongs to the HTML iframe.
 * @param origin The origin that produces messages to listen for.
 * @param predicate Determines if the specified message is the correct one.
 */
function asyncVerifiedIframeMessageEvent(contentWindow, origin, parser, predicate) {
    return new Promise(function (resolve, reject) {
        return listenToMessage(function listener(message) {
            var isFromExpectedTransmitter = message.source === contentWindow && message.origin === origin;
            if (isFromExpectedTransmitter) {
                var data = void 0, verified = false;
                try {
                    data = parser(message);
                }
                catch (e) {
                    unlistenToMessage(listener);
                    reject(Object(_createSafeToLogError__WEBPACK_IMPORTED_MODULE_0__["default"])("Iframe message parser failure.", e));
                    return;
                }
                try {
                    verified = predicate(data, message);
                }
                catch (e) {
                    unlistenToMessage(listener);
                    reject(Object(_createSafeToLogError__WEBPACK_IMPORTED_MODULE_0__["default"])("Iframe message predicate failure.", e));
                    return;
                }
                verified && (unlistenToMessage(listener), resolve(data));
            }
        });
    });
};
var listenToMessage = function (listener) {
    return addEventListener("message", listener, false);
};
var unlistenToMessage = function (listener) {
    return removeEventListener("message", listener, false);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaUZyYW1lUHJveHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaUZyYW1lUHJveHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxvQkFBb0IsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxrQ0FBa0M7QUFDbEMsTUFBTSxDQUFDLE9BQU8sVUFBVSxXQUFXLENBQ2pDLE1BQWMsRUFDZCxNQUFjO0lBRWQsSUFBTSxNQUFNLEdBQUcsWUFBWSxFQUFFLEVBQzNCLGlCQUFpQixHQUFHLFVBQ2xCLE1BQThCLEVBQzlCLFNBQW9DO1FBRXBDLE9BQUEsK0JBQStCLENBQzdCLE1BQU0sQ0FBQyxhQUFhLEVBQ3BCLE1BQU0sRUFDTixNQUFNLEVBQ04sU0FBUyxDQUNWO0lBTEQsQ0FLQyxFQUNILFdBQVcsR0FBRyxVQUNaLE9BQWUsRUFDZixNQUE4QixFQUM5QixTQUFvQztRQUVwQyxJQUFNLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLGFBQWEsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDMUUsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQyxFQUNELFVBQVUsR0FBRztRQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNuQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztZQUNwQixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDOUIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDLENBQUM7SUFFSixPQUFPLEVBQUUsTUFBTSxRQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsV0FBVyxhQUFBLEVBQUUsQ0FBQztBQUM3QyxDQUFDO0FBRUQsTUFBTSxDQUFDLElBQU0sWUFBWSxHQUFHLGNBQU0sT0FBQSxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO0FBc0NuRSxNQUFNLENBQUMsSUFBTSwrQkFBK0I7QUFDMUM7Ozs7Ozs7R0FPRztBQUNILFNBQVMsK0JBQStCLENBQ3RDLGFBQTRCLEVBQzVCLE1BQWMsRUFDZCxNQUE4QixFQUM5QixTQUFvQztJQUVwQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsT0FBQSxlQUFlLENBQUMsU0FBUyxRQUFRLENBQUMsT0FBcUI7WUFDckQsSUFBTSx5QkFBeUIsR0FDN0IsT0FBTyxDQUFDLE1BQU0sS0FBSyxhQUFhLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUM7WUFFaEUsSUFBSSx5QkFBeUIsRUFBRTtnQkFDN0IsSUFBSSxJQUFJLFNBQUcsRUFDVCxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixJQUFJO29CQUNGLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3hCO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNWLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM1QixNQUFNLENBQUMsb0JBQW9CLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEUsT0FBTztpQkFDUjtnQkFFRCxJQUFJO29CQUNGLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUNyQztnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDNUIsTUFBTSxDQUNKLG9CQUFvQixDQUFDLG1DQUFtQyxFQUFFLENBQUMsQ0FBQyxDQUM3RCxDQUFDO29CQUNGLE9BQU87aUJBQ1I7Z0JBRUQsUUFBUSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDMUQ7UUFDSCxDQUFDLENBQUM7SUEzQkYsQ0EyQkUsQ0FDSCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUosTUFBTSxDQUFDLElBQU0sZUFBZSxHQUFHLFVBQUMsUUFBOEI7SUFDNUQsT0FBQSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQztBQUE1QyxDQUE0QyxDQUFDO0FBRS9DLE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHLFVBQUMsUUFBOEI7SUFDOUQsT0FBQSxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQztBQUEvQyxDQUErQyxDQUFDIn0=

/***/ }),

/***/ "i1d3":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/statusOk.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return statusOk; });
function statusOk(status) {
    return (status >= 200 && status <= 300) || status === 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzT2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc3RhdHVzT2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE9BQU8sVUFBVSxRQUFRLENBQUMsTUFBYztJQUM3QyxPQUFPLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxNQUFNLElBQUksR0FBRyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsQ0FBQztBQUMxRCxDQUFDIn0=

/***/ }),

/***/ "iuLP":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/fetchCustomVerticals.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browserUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browserUtils */ "8wLM");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch */ "y+O/");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetcher */ "AK9X");
/* harmony import */ var _lokiUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lokiUtils */ "MXs4");




var monitorName = "customVerticals";
/* harmony default export */ __webpack_exports__["default"] = (Object(_fetcher__WEBPACK_IMPORTED_MODULE_2__["default"])(function fetchCustomVerticals(_a) {
    var lokiUrl = _a.lokiUrl, token = _a.token, clientType = _a.clientType, scope = _a.scope, previewDisabledVerticals = _a.previewDisabledVerticals;
    var headers = Object(_lokiUtils__WEBPACK_IMPORTED_MODULE_3__["createHeader"])(clientType, Object(_lokiUtils__WEBPACK_IMPORTED_MODULE_3__["getVerticalAddHeader"])(), token);
    var siteId = scope && scope.siteId ? scope.siteId : "";
    return Object(_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: Object(_browserUtils__WEBPACK_IMPORTED_MODULE_0__["constructUrl"])(Object(_lokiUtils__WEBPACK_IMPORTED_MODULE_3__["getLokiVerticalsApiUrl"])(lokiUrl), Object(_lokiUtils__WEBPACK_IMPORTED_MODULE_3__["getVerticalQueryParams"])(siteId, previewDisabledVerticals)),
        method: "GET",
        headers: headers,
    });
}, {
    monitorName: monitorName,
    cacheId: monitorName,
    cacheVersion: "0",
    cacheItemLifetime: 5 * 60 * 1000,
    cacheKeyExtractor: function (params) { return ({
        url: params.lokiUrl,
        showDisabled: params.previewDisabledVerticals,
        clientType: params.clientType,
        scope: (params.scope &&
            params.scope.siteId &&
            params.scope.siteId.toUpperCase()) ||
            null,
    }); },
    additionalSuccessPropsExtractor: function () { return ({
        cacheClear: Object(_browserUtils__WEBPACK_IMPORTED_MODULE_0__["getQueryStringValue"])("cacheClear"),
    }); },
    // Busting cache if window.location contains this query param
    forceRefresh: function () { return Object(_browserUtils__WEBPACK_IMPORTED_MODULE_0__["getQueryStringValue"])("cacheClear") === "true"; },
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hDdXN0b21WZXJ0aWNhbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZmV0Y2hDdXN0b21WZXJ0aWNhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sS0FBSyxNQUFNLFNBQVMsQ0FBQztBQUM1QixPQUFPLE9BQU8sTUFBTSxXQUFXLENBQUM7QUFFaEMsT0FBTyxFQUNMLFlBQVksRUFDWixzQkFBc0IsRUFDdEIsb0JBQW9CLEVBQ3BCLHNCQUFzQixHQUN2QixNQUFNLGFBQWEsQ0FBQztBQUVyQixJQUFNLFdBQVcsR0FBVyxpQkFBaUIsQ0FBQztBQUU5QyxlQUFlLE9BQU8sQ0FDcEIsU0FBUyxvQkFBb0IsQ0FBQyxFQU1DO1FBTDdCLE9BQU8sYUFBQSxFQUNQLEtBQUssV0FBQSxFQUNMLFVBQVUsZ0JBQUEsRUFDVixLQUFLLFdBQUEsRUFDTCx3QkFBd0IsOEJBQUE7SUFFeEIsSUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hFLElBQU0sTUFBTSxHQUFXLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFakUsT0FBTyxLQUFLLENBQUM7UUFDWCxHQUFHLEVBQUUsWUFBWSxDQUNmLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxFQUMvQixzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsd0JBQXdCLENBQUMsQ0FDekQ7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLE9BQU8sU0FBQTtLQUNSLENBQUMsQ0FBQztBQUNMLENBQUMsRUFDRDtJQUNFLFdBQVcsYUFBQTtJQUNYLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLFlBQVksRUFBRSxHQUFHO0lBQ2pCLGlCQUFpQixFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSTtJQUNoQyxpQkFBaUIsRUFBRSxVQUFDLE1BQW9DLElBQUssT0FBQSxDQUFDO1FBQzVELEdBQUcsRUFBRSxNQUFNLENBQUMsT0FBTztRQUNuQixZQUFZLEVBQUUsTUFBTSxDQUFDLHdCQUF3QjtRQUM3QyxVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVU7UUFDN0IsS0FBSyxFQUNILENBQUMsTUFBTSxDQUFDLEtBQUs7WUFDWCxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEMsSUFBSTtLQUNQLENBQUMsRUFUMkQsQ0FTM0Q7SUFDRiwrQkFBK0IsRUFBRSxjQUFNLE9BQUEsQ0FBQztRQUN0QyxVQUFVLEVBQUUsbUJBQW1CLENBQUMsWUFBWSxDQUFDO0tBQzlDLENBQUMsRUFGcUMsQ0FFckM7SUFDRiw2REFBNkQ7SUFDN0QsWUFBWSxFQUFFLGNBQU0sT0FBQSxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxNQUFNLEVBQTVDLENBQTRDO0NBQ2pFLENBQ0YsQ0FBQyJ9

/***/ }),

/***/ "iyEA":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/serializeKey.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return serializeKey; });
function serializeKey(key) {
    if (!isObject(key)) {
        throw new Error("Key argument must be an object.");
    }
    var propKeys = Object.keys(key).sort();
    var numPropKeys = propKeys.length;
    var keyParts = [];
    for (var i = 0; i < numPropKeys; i++) {
        var propKey = propKeys[i];
        var val = key[propKey];
        if (val !== undefined && !isObject(val) && !isFunc(val)) {
            keyParts.push(propKey + ":" + val);
        }
    }
    return keyParts.join(",");
}
function isObject(x) {
    return typeof x === "object" && x !== null;
}
function isFunc(func) {
    return typeof func === "function";
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXplS2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcmlhbGl6ZUtleS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsT0FBTyxVQUFVLFlBQVksQ0FBQyxHQUFhO0lBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0tBQ3BEO0lBQ0QsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QyxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3BDLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFNLEdBQUcsR0FBYSxHQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0MsSUFBSSxHQUFHLEtBQUssU0FBUyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNwQztLQUNGO0lBQ0QsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFFRCxTQUFTLFFBQVEsQ0FBQyxDQUFVO0lBQzFCLE9BQU8sT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUM7QUFDN0MsQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFDLElBQWE7SUFDM0IsT0FBTyxPQUFPLElBQUksS0FBSyxVQUFVLENBQUM7QUFDcEMsQ0FBQyJ9

/***/ }),

/***/ "jUkL":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/fetchConfigFromEcsWithCacheAndMonitor.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ecsUtils */ "4o6J");
/* harmony import */ var _fetchSearchConfigurationFromEcs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchSearchConfigurationFromEcs */ "xyBP");
/* harmony import */ var _withBasicMonitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withBasicMonitor */ "lKsu");
/* harmony import */ var _withCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withCache */ "A1LU");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




var monitorName = "searchConfigurationFromEcs";
var fetchConfigFromEcsWithCacheAndMonitor = Object(_withBasicMonitor__WEBPACK_IMPORTED_MODULE_2__["default"])({
    monitorName: monitorName,
    monitorType: "prefetch_request",
    successPropExtractor: function (res) {
        return Object(_ecsUtils__WEBPACK_IMPORTED_MODULE_0__["extractEcsProperties"])(Object(_ecsUtils__WEBPACK_IMPORTED_MODULE_0__["transformEcsResponseText"])(res === null || res === void 0 ? void 0 : res.xhr.responseText));
    },
    failurePropExtractor: function (res) { return ({ errorCode: (res === null || res === void 0 ? void 0 : res.status) || -1 }); },
}, Object(_withCache__WEBPACK_IMPORTED_MODULE_3__["default"])(function (options) {
    return Object(_fetchSearchConfigurationFromEcs__WEBPACK_IMPORTED_MODULE_1__["default"])(options).then(function (xhr) { return ({ xhr: xhr }); });
})({
    cacheId: monitorName,
    cacheVersion: "0",
    cacheItemLifetime: 5 * 60 * 1000,
    cacheKeyExtractor: function (_a) {
        var options = __rest(_a, []);
        return options;
    },
}));
/* harmony default export */ __webpack_exports__["default"] = (fetchConfigFromEcsWithCacheAndMonitor);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hDb25maWdGcm9tRWNzV2l0aENhY2hlQW5kTW9uaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9mZXRjaENvbmZpZ0Zyb21FY3NXaXRoQ2FjaGVBbmRNb25pdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUNMLG9CQUFvQixFQUVwQix3QkFBd0IsR0FDekIsTUFBTSxZQUFZLENBQUM7QUFDcEIsT0FBTywrQkFBK0IsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLGdCQUFnQixNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sU0FBUyxNQUFNLGFBQWEsQ0FBQztBQUVwQyxJQUFNLFdBQVcsR0FBVyw0QkFBNEIsQ0FBQztBQUN6RCxJQUFNLHFDQUFxQyxHQUFHLGdCQUFnQixDQUM1RDtJQUNFLFdBQVcsYUFBQTtJQUNYLFdBQVcsRUFBRSxrQkFBa0I7SUFDL0Isb0JBQW9CLEVBQUUsVUFBQyxHQUFHO1FBQ3hCLE9BQUEsb0JBQW9CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUFyRSxDQUFxRTtJQUN2RSxvQkFBb0IsRUFBRSxVQUFDLEdBQUcsSUFBSyxPQUFBLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQSxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsTUFBTSxLQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBbEMsQ0FBa0M7Q0FDbEUsRUFDRCxTQUFTLENBQUMsVUFBQyxPQUFpRDtJQUMxRCxPQUFPLCtCQUErQixDQUNwQyxPQUFPLENBQ1IsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFtQixJQUFLLE9BQUEsQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsRUFBVCxDQUFTLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNELE9BQU8sRUFBRSxXQUFXO0lBQ3BCLFlBQVksRUFBRSxHQUFHO0lBQ2pCLGlCQUFpQixFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSTtJQUNoQyxpQkFBaUIsRUFBRSxVQUFDLEVBQWM7WUFBVCxPQUFPLGNBQVosRUFBYyxDQUFGO1FBQU8sT0FBQSxPQUFPLENBQUE7S0FBQTtDQUMvQyxDQUFDLENBQ0gsQ0FBQztBQUVGLGVBQWUscUNBQXFDLENBQUMifQ==

/***/ }),

/***/ "kNi3":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/lokiTypes.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: ConfigAddHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigAddHeaders", function() { return ConfigAddHeaders; });
var ConfigAddHeaders;
(function (ConfigAddHeaders) {
    ConfigAddHeaders["SearchComponent"] = "X-MSSearchComponent";
    ConfigAddHeaders["SearchScenario"] = "X-MSSearchScenario";
    ConfigAddHeaders["VerticalsCacheClear"] = "X-Cache-Mode";
})(ConfigAddHeaders || (ConfigAddHeaders = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9raVR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xva2lUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QkEsTUFBTSxDQUFOLElBQVksZ0JBSVg7QUFKRCxXQUFZLGdCQUFnQjtJQUMxQiwyREFBdUMsQ0FBQTtJQUN2Qyx5REFBcUMsQ0FBQTtJQUNyQyx3REFBb0MsQ0FBQTtBQUN0QyxDQUFDLEVBSlcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQUkzQiJ9

/***/ }),

/***/ "kfK7":
/*!*********************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/flux@2.1.1/node_modules/flux/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports.Dispatcher = __webpack_require__(/*! ./lib/Dispatcher */ "ffzo");


/***/ }),

/***/ "lKsu":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/withBasicMonitor.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withBasicMonitor; });
/* harmony import */ var _1js_search_dispatcher_lib_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @1js/search-dispatcher/lib/dispatcher */ "9coA");

function withBasicMonitor(_a, promiseFactory) {
    var monitorType = _a.monitorType, monitorName = _a.monitorName, monitorOnce = _a.monitorOnce, successPropExtractor = _a.successPropExtractor, failurePropExtractor = _a.failurePropExtractor;
    var invoked = false;
    return function monitor(options) {
        if (monitorOnce && invoked) {
            return promiseFactory(options);
        }
        invoked = true;
        var timestamp = Math.round(performance.now());
        var dispatcher = Object(_1js_search_dispatcher_lib_dispatcher__WEBPACK_IMPORTED_MODULE_0__["getDispatcher"])();
        dispatcher.dispatch({
            eventType: "QOSSTART",
            name: monitorType,
            nameDetail: monitorName,
            timestamp: timestamp,
        });
        function stopEvent(result, properties) {
            dispatcher.dispatch({
                eventType: "QOSSTOP",
                name: monitorType,
                result: result,
                nameDetail: monitorName,
                startTimestamp: timestamp,
                totalTime: Math.round(performance.now()) - timestamp,
                properties: properties,
            });
        }
        var res;
        try {
            res = promiseFactory(options);
        }
        catch (e) {
            stopEvent("FAILURE", { promiseFactoryFailed: true });
            return Promise.reject(e);
        }
        return res.then(function (response) { return (stopEvent("SUCCESS", tryExtract(response, successPropExtractor, {
            successExtractorFailed: true,
        })),
            response); }, function (error) { return (stopEvent("FAILURE", tryExtract(error, failurePropExtractor, {
            failureExtractorFailed: true,
        })),
            Promise.reject(error)); });
    };
}
var tryExtract = function (res, extractor, defaultRes) {
    try {
        return (extractor || defaultExtractor)(res);
    }
    catch (_a) {
        return defaultRes;
    }
};
var defaultExtractor = function () { return ({}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aEJhc2ljTW9uaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy93aXRoQmFzaWNNb25pdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxhQUFhLEdBRWQsTUFBTSx1Q0FBdUMsQ0FBQztBQU0vQyxNQUFNLENBQUMsT0FBTyxVQUFVLGdCQUFnQixDQUN0QyxFQU0wQixFQUMxQixjQUEyQztRQU56QyxXQUFXLGlCQUFBLEVBQ1gsV0FBVyxpQkFBQSxFQUNYLFdBQVcsaUJBQUEsRUFDWCxvQkFBb0IsMEJBQUEsRUFDcEIsb0JBQW9CLDBCQUFBO0lBSXRCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztJQUNwQixPQUFPLFNBQVMsT0FBTyxDQUFDLE9BQVc7UUFDakMsSUFBSSxXQUFXLElBQUksT0FBTyxFQUFFO1lBQzFCLE9BQU8sY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNmLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDaEQsSUFBTSxVQUFVLEdBQTBCLGFBQWEsRUFBRSxDQUFDO1FBQzFELFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbEIsU0FBUyxFQUFFLFVBQVU7WUFDckIsSUFBSSxFQUFFLFdBQVc7WUFDakIsVUFBVSxFQUFFLFdBQVc7WUFDdkIsU0FBUyxXQUFBO1NBQ1YsQ0FBQyxDQUFDO1FBRUgsU0FBUyxTQUFTLENBQUMsTUFBc0IsRUFBRSxVQUFlO1lBQ3hELFVBQVUsQ0FBQyxRQUFRLENBQUM7Z0JBQ2xCLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixJQUFJLEVBQUUsV0FBVztnQkFDakIsTUFBTSxRQUFBO2dCQUNOLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixjQUFjLEVBQUUsU0FBUztnQkFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsU0FBUztnQkFDcEQsVUFBVSxZQUFBO2FBQ1gsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELElBQUksR0FBMkIsQ0FBQztRQUNoQyxJQUFJO1lBQ0YsR0FBRyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDckQsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFCO1FBRUQsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUNiLFVBQUMsUUFBVyxJQUFLLE9BQUEsQ0FDZixTQUFTLENBQ1AsU0FBUyxFQUNULFVBQVUsQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLEVBQUU7WUFDekMsc0JBQXNCLEVBQUUsSUFBSTtTQUM3QixDQUFDLENBQ0g7WUFDRCxRQUFRLENBQ1QsRUFSZ0IsQ0FRaEIsRUFFRCxVQUFDLEtBQVUsSUFBSyxPQUFBLENBQ2QsU0FBUyxDQUNQLFNBQVMsRUFDVCxVQUFVLENBQUMsS0FBSyxFQUFFLG9CQUFvQixFQUFFO1lBQ3RDLHNCQUFzQixFQUFFLElBQUk7U0FDN0IsQ0FBQyxDQUNIO1lBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FDdEIsRUFSZSxDQVFmLENBQ0YsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxJQUFNLFVBQVUsR0FBRyxVQUNqQixHQUFPLEVBQ1AsU0FBeUMsRUFDekMsVUFBYztJQUVkLElBQUk7UUFDRixPQUFPLENBQUMsU0FBUyxJQUFJLGdCQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDN0M7SUFBQyxXQUFNO1FBQ04sT0FBTyxVQUFVLENBQUM7S0FDbkI7QUFDSCxDQUFDLENBQUM7QUFFRixJQUFNLGdCQUFnQixHQUFHLGNBQU0sT0FBQSxDQUFDLEVBQUUsQ0FBQyxFQUFKLENBQUksQ0FBQyJ9

/***/ }),

/***/ "n9ji":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/fetchParsedCustomVerticals.js ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: getSearchConfigScope, getSearchConfigPromise, getSearchConfigPromiseEntity, createSearchConfigPromiseEntity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchConfigScope", function() { return getSearchConfigScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchConfigPromise", function() { return getSearchConfigPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchConfigPromiseEntity", function() { return getSearchConfigPromiseEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSearchConfigPromiseEntity", function() { return createSearchConfigPromiseEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fetchParsedCustomVerticals; });
/* harmony import */ var _createSafeToLogError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createSafeToLogError */ "nt8F");
/* harmony import */ var _fetchCustomVerticals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchCustomVerticals */ "iuLP");
/* harmony import */ var _fetchSearchConfiguration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchSearchConfiguration */ "Sa3D");
/* harmony import */ var _lokiUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lokiUtils */ "MXs4");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var searchConfigEntity;
function getSearchConfigScope() {
    return ((searchConfigEntity &&
        searchConfigEntity.option &&
        searchConfigEntity.option.siteId) ||
        "");
}
function getSearchConfigPromise() {
    if (!searchConfigEntity) {
        createSearchConfigPromiseEntity();
    }
    var promiseObj = searchConfigEntity
        ? searchConfigEntity.promiseObj
        : Promise.resolve([]);
    return promiseObj;
}
function getSearchConfigPromiseEntity() {
    if (!searchConfigEntity) {
        createSearchConfigPromiseEntity();
    }
    return searchConfigEntity;
}
function createSearchConfigPromiseEntity(option) {
    if (!searchConfigEntity ||
        !searchConfigEntity.isPending ||
        searchConfigEntity.isRejected) {
        searchConfigEntity = {};
        //Creating a new promise object which will be resolved after the search config call is successful
        var searchConfigPromise = new Promise(function (resolve, reject) {
            searchConfigEntity["promiseResolver"] = function (verticals) {
                searchConfigEntity.isPending = false;
                resolve(verticals);
            };
            searchConfigEntity["promiseRejector"] = function () {
                searchConfigEntity.isRejected = true;
                searchConfigEntity.isPending = false;
                reject();
            };
        });
        searchConfigEntity["promiseObj"] = searchConfigPromise;
        searchConfigEntity.isRejected = false;
        searchConfigPromise.catch(function () {
            // Adding a default catch to avoid the console log. There is catch handler in custom wrapper.
        });
    }
    searchConfigEntity.isPending = true;
    if (option) {
        searchConfigEntity.option = option;
    }
}
function fetchParsedCustomVerticals(customVerticalOptions) {
    var _a, _b, _c;
    var siteId = getSearchConfigScope();
    if (searchConfigEntity &&
        ((!customVerticalOptions.scope && !siteId) ||
            ((_b = (_a = customVerticalOptions.scope) === null || _a === void 0 ? void 0 : _a.siteId) === null || _b === void 0 ? void 0 : _b.toUpperCase()) ===
                siteId.toUpperCase()) &&
        !searchConfigEntity.isRejected) {
        // tslint:disable-next-line: no-non-null-assertion
        var options = searchConfigEntity.option;
        createSearchConfigPromiseEntity(options);
        Object(_fetchSearchConfiguration__WEBPACK_IMPORTED_MODULE_2__["default"])(options)
            .then(function (_a) {
            var _b, _c;
            var xhr = _a.xhr;
            if (xhr.responseText) {
                var verticals = JSON.parse(xhr.responseText).verticalConfig;
                (_b = searchConfigEntity.promiseResolver) === null || _b === void 0 ? void 0 : _b.call(searchConfigEntity, verticals);
            }
            else {
                (_c = searchConfigEntity.promiseRejector) === null || _c === void 0 ? void 0 : _c.call(searchConfigEntity);
            }
        })
            .catch(function (error) {
            var _a;
            console.error(error);
            (_a = searchConfigEntity.promiseRejector) === null || _a === void 0 ? void 0 : _a.call(searchConfigEntity, error);
            Object(_createSafeToLogError__WEBPACK_IMPORTED_MODULE_0__["throwSafeToLogError"])("CUSTOM_VERTICAL_FETCH_FAILED");
        });
        return searchConfigEntity.promiseObj;
    }
    var lokiUrl = customVerticalOptions.lokiUrl;
    var environment = (_c = searchConfigEntity === null || searchConfigEntity === void 0 ? void 0 : searchConfigEntity.option) === null || _c === void 0 ? void 0 : _c.environment;
    //We want to call the same end point as the search config since flights needs to be in sync
    //So the user is either accessing the df env but not in df mail box -> Config -> df, Vertical may be  MSIT. So always call df for Vertical
    //Is df mail box user is  using msit environment -> Config -> MSIT, Vertical  may  be calling df. Call msit for Vertical
    if (
    //So the user is either accessing the df env  -> Config -> df, Vertical MAY be  MSIT. So always call df for Vertical
    environment === "Df" ||
        //Is df  mail box user is  using msit environment - > Config - > MSIT, Vertical  may  be calling df. Call msit for Vertical
        (environment === "Msit" && (lokiUrl === null || lokiUrl === void 0 ? void 0 : lokiUrl.toLowerCase().indexOf("df")) !== -1)) {
        lokiUrl = Object(_lokiUtils__WEBPACK_IMPORTED_MODULE_3__["resolveLokiUrl"])(environment, 
        // tslint:disable-next-line: no-non-null-assertion
        searchConfigEntity.option.culture, function (url) { return url; });
    }
    return Object(_fetchCustomVerticals__WEBPACK_IMPORTED_MODULE_1__["default"])(__assign(__assign({}, customVerticalOptions), { lokiUrl: lokiUrl }))
        .then(function (_a) {
        var xhr = _a.xhr;
        return (xhr.responseText ? JSON.parse(xhr.responseText) : []);
    })
        .catch(function (error) {
        console.error(error);
        Object(_createSafeToLogError__WEBPACK_IMPORTED_MODULE_0__["throwSafeToLogError"])("CUSTOM_VERTICAL_FETCH_FAILED");
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hQYXJzZWRDdXN0b21WZXJ0aWNhbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZmV0Y2hQYXJzZWRDdXN0b21WZXJ0aWNhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLG9CQUFvQixNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sd0JBQXdCLE1BQU0sNEJBQTRCLENBQUM7QUFLbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVU3QyxJQUFJLGtCQUFzQyxDQUFDO0FBRTNDLE1BQU0sVUFBVSxvQkFBb0I7SUFDbEMsT0FBTyxDQUNMLENBQUMsa0JBQWtCO1FBQ2pCLGtCQUFrQixDQUFDLE1BQU07UUFDekIsa0JBQWtCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxFQUFFLENBQ0gsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsc0JBQXNCO0lBR3BDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtRQUN2QiwrQkFBK0IsRUFBRSxDQUFDO0tBQ25DO0lBQ0QsSUFBTSxVQUFVLEdBRVosa0JBQWtCO1FBQ3BCLENBQUMsQ0FBRSxrQkFBa0IsQ0FBQyxVQUVsQjtRQUNKLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFtQyxFQUFFLENBQUMsQ0FBQztJQUMxRCxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDO0FBRUQsTUFBTSxVQUFVLDRCQUE0QjtJQUMxQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7UUFDdkIsK0JBQStCLEVBQUUsQ0FBQztLQUNuQztJQUNELE9BQU8sa0JBQWtCLENBQUM7QUFDNUIsQ0FBQztBQUVELE1BQU0sVUFBVSwrQkFBK0IsQ0FDN0MsTUFBOEQ7SUFFOUQsSUFDRSxDQUFDLGtCQUFrQjtRQUNuQixDQUFDLGtCQUFrQixDQUFDLFNBQVM7UUFDN0Is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

/***/ }),

/***/ "nt8F":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/createSafeToLogError.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default, throwSafeToLogError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSafeToLogError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwSafeToLogError", function() { return throwSafeToLogError; });
/**
 * Creates a safe to log error. Note that the any specified inner error will
 * only be considered if it is a safe to log error. Then the error messages
 * will be concatenated to improve error resolution.
 *
 * @param message A message that must be hardcoded to an understandable error
 * message that can be safely logged and that will improve error resolution.
 * @param innerError An inner error that will be considered if it is safe to
 * log.
 */
function createSafeToLogError(message, innerError, logProperties) {
    var error;
    if (innerError && innerError.safeToLog) {
        error = new Error(message + " " + innerError.message);
        error.innerError = innerError;
    }
    else {
        error = new Error(message);
    }
    error.safeToLog = true;
    error.logProperties = logProperties;
    Object.freeze(error);
    return error;
}
function throwSafeToLogError(message, innerError, logProperties) {
    throw createSafeToLogError(message, innerError, logProperties);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2FmZVRvTG9nRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY3JlYXRlU2FmZVRvTG9nRXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxDQUFDLE9BQU8sVUFBVSxvQkFBb0IsQ0FDMUMsT0FBZSxFQUNmLFVBQW9DLEVBQ3BDLGFBQStDO0lBRS9DLElBQUksS0FBVSxDQUFDO0lBRWYsSUFBSSxVQUFVLElBQUssVUFBOEIsQ0FBQyxTQUFTLEVBQUU7UUFDM0QsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFJLE9BQU8sU0FBSSxVQUFVLENBQUMsT0FBUyxDQUFvQixDQUFDO1FBQ3pFLEtBQUssQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0tBQy9CO1NBQU07UUFDTCxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDNUI7SUFFRCxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN2QixLQUFLLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELE1BQU0sVUFBVSxtQkFBbUIsQ0FDakMsT0FBZSxFQUNmLFVBQTRCLEVBQzVCLGFBQStDO0lBRS9DLE1BQU0sb0JBQW9CLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNqRSxDQUFDIn0=

/***/ }),

/***/ "ppzf":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/tokenDetail.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: toTokenDetail, isApproachingExpiration, isValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTokenDetail", function() { return toTokenDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isApproachingExpiration", function() { return isApproachingExpiration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValid", function() { return isValid; });
/* harmony import */ var _Base64Url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base64Url */ "RlAX");

function toTokenDetail(token) {
    var expEpoch = Number.MAX_VALUE;
    var userPuid;
    var tokenizedJwtToken = token && token.split(".");
    if (tokenizedJwtToken && tokenizedJwtToken.length === 3) {
        var payload = JSON.parse(Object(_Base64Url__WEBPACK_IMPORTED_MODULE_0__["decode"])(tokenizedJwtToken[1]));
        if (payload && payload.exp) {
            expEpoch = payload.exp * 1000;
        }
        if (payload && payload.puid) {
            userPuid = payload.puid;
        }
    }
    return { token: token, expEpoch: expEpoch, userPuid: userPuid };
}
function isApproachingExpiration(tokenDetails) {
    if (!isValid(tokenDetails)) {
        return false;
    }
    var TOKEN_LIFETIME_APPROACHING_EXPIRATION_BUFFER = 4 * 60 * 1000; /* 4m */
    return (Date.now() >
        tokenDetails.expEpoch - TOKEN_LIFETIME_APPROACHING_EXPIRATION_BUFFER);
}
function isValid(tokenDetails) {
    var TOKEN_LIFETIME_BUFFER = 2 * 60 * 1000; /* 2m */
    // Deem token invalid if token does not exist,
    // it has expired or if it is very close to expiring
    if (!tokenDetails) {
        return false;
    }
    var isNearlyExpired = tokenDetails.expEpoch - Date.now() < TOKEN_LIFETIME_BUFFER;
    return !isNearlyExpired;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5EZXRhaWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdG9rZW5EZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVFyQyxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQWE7SUFDekMsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNoQyxJQUFJLFFBQVEsQ0FBQztJQUNiLElBQU0saUJBQWlCLEdBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEQsSUFBSSxpQkFBaUIsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3ZELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQzFCLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztTQUMvQjtRQUVELElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDM0IsUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDekI7S0FDRjtJQUNELE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDO0FBQ3ZDLENBQUM7QUFFRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsWUFBMkI7SUFDakUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUMxQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBTSw0Q0FBNEMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLFFBQVE7SUFDNUUsT0FBTyxDQUNMLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDVixZQUFZLENBQUMsUUFBUSxHQUFHLDRDQUE0QyxDQUNyRSxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsWUFBMkI7SUFDakQsSUFBTSxxQkFBcUIsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLFFBQVE7SUFFckQsOENBQThDO0lBQzlDLG9EQUFvRDtJQUNwRCxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ2pCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFNLGVBQWUsR0FDbkIsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcscUJBQXFCLENBQUM7SUFDN0QsT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUMxQixDQUFDIn0=

/***/ }),

/***/ "rpso":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/headerUtils.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: spRequestDurationHeader, spClientServiceRequestDurationHeader, sharePointCorrelationHeader, getNamedHeadersFromXhr, getRequestDurationFromXhr, getRequestDurationFromHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spRequestDurationHeader", function() { return spRequestDurationHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spClientServiceRequestDurationHeader", function() { return spClientServiceRequestDurationHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharePointCorrelationHeader", function() { return sharePointCorrelationHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNamedHeadersFromXhr", function() { return getNamedHeadersFromXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequestDurationFromXhr", function() { return getRequestDurationFromXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequestDurationFromHeaders", function() { return getRequestDurationFromHeaders; });
var spRequestDurationHeader = "sprequestduration";
var spClientServiceRequestDurationHeader = "spclientservicerequestduration";
var sharePointCorrelationHeader = "sprequestguid";
function getNamedHeadersFromXhr(xhr, headers) {
    var matchedHeaders = {};
    if (xhr.getAllResponseHeaders) {
        var responseHeaders_1 = xhr.getAllResponseHeaders();
        headers.forEach(function (header) {
            if (xhr.getResponseHeader && responseHeaders_1.indexOf(header) !== -1) {
                matchedHeaders[header] = xhr.getResponseHeader(header) || "";
            }
        });
    }
    return matchedHeaders;
}
function getRequestDurationFromXhr(xhr) {
    var headers = getNamedHeadersFromXhr(xhr, [
        spRequestDurationHeader,
        spClientServiceRequestDurationHeader,
    ]);
    return (headers[spRequestDurationHeader] ||
        headers[spClientServiceRequestDurationHeader] ||
        undefined);
}
function getRequestDurationFromHeaders(headers) {
    return (headers[spRequestDurationHeader] ||
        headers[spClientServiceRequestDurationHeader] ||
        "");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaGVhZGVyVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxDQUFDLElBQU0sdUJBQXVCLEdBQUcsbUJBQW1CLENBQUM7QUFDM0QsTUFBTSxDQUFDLElBQU0sb0NBQW9DLEdBQy9DLGdDQUFnQyxDQUFDO0FBQ25DLE1BQU0sQ0FBQyxJQUFNLDJCQUEyQixHQUFHLGVBQWUsQ0FBQztBQUUzRCxNQUFNLFVBQVUsc0JBQXNCLENBQ3BDLEdBQTRCLEVBQzVCLE9BQWlCO0lBRWpCLElBQU0sY0FBYyxHQUEyQixFQUFFLENBQUM7SUFDbEQsSUFBSSxHQUFHLENBQUMscUJBQXFCLEVBQUU7UUFDN0IsSUFBTSxpQkFBZSxHQUFHLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ3JCLElBQUksR0FBRyxDQUFDLGlCQUFpQixJQUFJLGlCQUFlLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNuRSxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUM5RDtRQUNILENBQUMsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxPQUFPLGNBQWMsQ0FBQztBQUN4QixDQUFDO0FBRUQsTUFBTSxVQUFVLHlCQUF5QixDQUN2QyxHQUE0QjtJQUU1QixJQUFNLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUU7UUFDMUMsdUJBQXVCO1FBQ3ZCLG9DQUFvQztLQUNyQyxDQUFDLENBQUM7SUFDSCxPQUFPLENBQ0wsT0FBTyxDQUFDLHVCQUF1QixDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQztRQUM3QyxTQUFTLENBQ1YsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsNkJBQTZCLENBQUMsT0FFN0M7SUFDQyxPQUFPLENBQ0wsT0FBTyxDQUFDLHVCQUF1QixDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQztRQUM3QyxFQUFFLENBQ0gsQ0FBQztBQUNKLENBQUMifQ==

/***/ }),

/***/ "ru7D":
/*!********************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-types@1.1.0_react@16.9.0/node_modules/@1js/search-types/lib/lokiUtils.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: getLokiClientType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLokiClientType", function() { return getLokiClientType; });
/**
 * Maps a search app ID to the corresponding Loki client ID.
 *
 * @param hostAppId The search host app ID.
 */
function getLokiClientType(hostAppId) {
    switch (hostAppId) {
        case "SPHomeWeb":
            return "SPHome";
        case "TeamSiteSearch":
        case "CommSiteSearch":
        case "HubSiteSearch":
        case "MSW":
            return "ODSP";
        case "officehome":
        case "officehomemsa":
        case "officehomeuwp":
            return "OfficeDotCom";
        case "DelveWeb":
            return "DelveWeb";
        case "TeamsSearch":
        case "Teams.RoomsNearby":
        case "teams":
            return "MicrosoftTeams";
        case "BingForBusinessWeb":
        case "msb.ux.webserp":
        case "msb.ux.workserp":
            return "Bing";
        case "Owa.react":
        case "Outlook.ios":
        case "Outlook.android":
        case "OutlookOPX":
            return "OwaMail";
        default:
            return undefined;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9raVV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xva2lVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUMvQixTQUFpQjtJQUVqQixRQUFRLFNBQVMsRUFBRTtRQUNqQixLQUFLLFdBQVc7WUFDZCxPQUFPLFFBQVEsQ0FBQztRQUNsQixLQUFLLGdCQUFnQixDQUFDO1FBQ3RCLEtBQUssZ0JBQWdCLENBQUM7UUFDdEIsS0FBSyxlQUFlLENBQUM7UUFDckIsS0FBSyxLQUFLO1lBQ1IsT0FBTyxNQUFNLENBQUM7UUFDaEIsS0FBSyxZQUFZLENBQUM7UUFDbEIsS0FBSyxlQUFlLENBQUM7UUFDckIsS0FBSyxlQUFlO1lBQ2xCLE9BQU8sY0FBYyxDQUFDO1FBQ3hCLEtBQUssVUFBVTtZQUNiLE9BQU8sVUFBVSxDQUFDO1FBQ3BCLEtBQUssYUFBYSxDQUFDO1FBQ25CLEtBQUssbUJBQW1CLENBQUM7UUFDekIsS0FBSyxPQUFPO1lBQ1YsT0FBTyxnQkFBZ0IsQ0FBQztRQUMxQixLQUFLLG9CQUFvQixDQUFDO1FBQzFCLEtBQUssZ0JBQWdCLENBQUM7UUFDdEIsS0FBSyxpQkFBaUI7WUFDcEIsT0FBTyxNQUFNLENBQUM7UUFDaEIsS0FBSyxXQUFXLENBQUM7UUFDakIsS0FBSyxhQUFhLENBQUM7UUFDbkIsS0FBSyxpQkFBaUIsQ0FBQztRQUN2QixLQUFLLFlBQVk7WUFDZixPQUFPLFNBQVMsQ0FBQztRQUNuQjtZQUNFLE9BQU8sU0FBUyxDQUFDO0tBQ3BCO0FBQ0gsQ0FBQyJ9

/***/ }),

/***/ "uZKL":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/extractRelevantEcsConfigIds.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: getEcsIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEcsIds", function() { return getEcsIds; });
/** This function strips out irrelevant ECS config ids returned from the
 *  search configuration call. All SearchUX related ECS configs will
 *  receive a default configuration containing "31828"
 *
 *  TODO: https://msfast.visualstudio.com/FAST/_workitems/edit/282095
 *
 *  Product Backlog Item 282095: [ECS] Investigate if we can strip out
 *  irrelevant ECS config IDS on the Loki side when calling the search
 *  configuration endpoint. */
function getEcsIds(ecsConfigIds) {
    return ecsConfigIds
        ? ecsConfigIds.filter(function (ids) { return ids.indexOf("31828") > -1; }).join() ||
            ecsConfigIds.join()
        : undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0cmFjdFJlbGV2YW50RWNzQ29uZmlnSWRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2V4dHJhY3RSZWxldmFudEVjc0NvbmZpZ0lkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OEJBUThCO0FBQzlCLE1BQU0sVUFBVSxTQUFTLENBQUMsWUFBc0I7SUFDOUMsT0FBTyxZQUFZO1FBQ2pCLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBVyxJQUFLLE9BQUEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDLElBQUksRUFBRTtZQUNwRSxZQUFZLENBQUMsSUFBSSxFQUFFO1FBQ3ZCLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDaEIsQ0FBQyJ9

/***/ }),

/***/ "wpxI":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/fetchAndParseSearchConfiguration.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fetchAndParseSearchConfiguration; });
/* harmony import */ var _browserUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browserUtils */ "8wLM");
/* harmony import */ var _ecsUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ecsUtils */ "4o6J");
/* harmony import */ var _fetchParsedCustomVerticals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchParsedCustomVerticals */ "n9ji");
/* harmony import */ var _fetchSearchConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchSearchConfiguration */ "Sa3D");
/* harmony import */ var _lokiTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lokiTypes */ "kNi3");





function fetchAndParseSearchConfiguration(options) {
    var _a, _b;
    if (Object(_browserUtils__WEBPACK_IMPORTED_MODULE_0__["getQueryStringValue"])("sid")) {
        options.siteId = Object(_browserUtils__WEBPACK_IMPORTED_MODULE_0__["getQueryStringValue"])("sid"); //deep link scenario.
    }
    if (options.siteId) {
        options.siteId = options.siteId.toUpperCase();
    }
    var searchComponent = (_b = (_a = options.additionalHeaders) === null || _a === void 0 ? void 0 : _a[_lokiTypes__WEBPACK_IMPORTED_MODULE_4__["ConfigAddHeaders"].SearchComponent]) === null || _b === void 0 ? void 0 : _b.toLowerCase();
    /*Creating a promise object so that if a call to fetch verticals is made it
        can wait till this request is completed. The present caching won't solve the case as
        its from two different end points(search/configuration and search/configuration/verticals).
        Also the reading of the results needs to be done in a package outside search-prefetch.*/
    if (searchComponent === "serp") {
        Object(_fetchParsedCustomVerticals__WEBPACK_IMPORTED_MODULE_2__["createSearchConfigPromiseEntity"])(options);
    }
    return Object(_fetchSearchConfiguration__WEBPACK_IMPORTED_MODULE_3__["default"])(options)
        .then(function (_a) {
        var xhr = _a.xhr;
        var searchConfiguration = JSON.parse(xhr.responseText);
        var ecsSettings = searchConfiguration === null || searchConfiguration === void 0 ? void 0 : searchConfiguration.ecsSettings;
        searchConfiguration.ecsSettings = Object(_ecsUtils__WEBPACK_IMPORTED_MODULE_1__["applyEcsOverrides"])("ecsOverrides", "wipeEcsConfig", ecsSettings);
        var eachObj = Object(_fetchParsedCustomVerticals__WEBPACK_IMPORTED_MODULE_2__["getSearchConfigPromiseEntity"])();
        if (searchComponent === "serp") {
            if (searchConfiguration.verticalConfig) {
                if (eachObj === null || eachObj === void 0 ? void 0 : eachObj.promiseResolver) {
                    eachObj.promiseResolver(searchConfiguration.verticalConfig);
                }
            }
            else {
                if (eachObj === null || eachObj === void 0 ? void 0 : eachObj.promiseRejector) {
                    eachObj.promiseRejector();
                }
            }
        }
        return searchConfiguration;
    })
        .catch(function () {
        var _a;
        var rejector = (_a = Object(_fetchParsedCustomVerticals__WEBPACK_IMPORTED_MODULE_2__["getSearchConfigPromiseEntity"])()) === null || _a === void 0 ? void 0 : _a.promiseRejector;
        rejector && rejector();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hBbmRQYXJzZVNlYXJjaENvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZmV0Y2hBbmRQYXJzZVNlYXJjaENvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQy9DLE9BQU8sRUFDTCwrQkFBK0IsRUFDL0IsNEJBQTRCLEdBQzdCLE1BQU0sOEJBQThCLENBQUM7QUFDdEMsT0FBTyx3QkFBd0IsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsZ0JBQWdCLEdBRWpCLE1BQU0sYUFBYSxDQUFDO0FBRXJCLE1BQU0sQ0FBQyxPQUFPLFVBQVUsZ0NBQWdDLENBQ3RELE9BQThEOztJQUU5RCxJQUFJLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzlCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7S0FDbkU7SUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7UUFDbEIsT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQy9DO0lBQ0QsSUFBTSxlQUFlLGVBQUcsT0FBTyxDQUFDLGlCQUFpQiwwQ0FDL0MsZ0JBQWdCLENBQUMsZUFBZSwyQ0FDL0IsV0FBVyxFQUFFLENBQUM7SUFDakI7OztnR0FHNEY7SUFDNUYsSUFBSSxlQUFlLEtBQUssTUFBTSxFQUFFO1FBQzlCLCtCQUErQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzFDO0lBQ0QsT0FBTyx3QkFBd0IsQ0FBQyxPQUFPLENBQUM7U0FDckMsSUFBSSxDQUFDLFVBQUMsRUFBTztZQUFMLEdBQUcsU0FBQTtRQUNWLElBQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekQsSUFBTSxXQUFXLEdBQUcsbUJBQW1CLGFBQW5CLG1CQUFtQix1QkFBbkIsbUJBQW1CLENBQUUsV0FBVyxDQUFDO1FBQ3JELG1CQUFtQixDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FDakQsY0FBYyxFQUNkLGVBQWUsRUFDZixXQUFXLENBQ1osQ0FBQztRQUNGLElBQU0sT0FBTyxHQUFHLDRCQUE0QixFQUFFLENBQUM7UUFDL0MsSUFBSSxlQUFlLEtBQUssTUFBTSxFQUFFO1lBQzlCLElBQUksbUJBQW1CLENBQUMsY0FBYyxFQUFFO2dCQUN0QyxJQUFJLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxlQUFlLEVBQUU7b0JBQzVCLE9BQU8sQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLENBQUM7aUJBQzdEO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsZUFBZSxFQUFFO29CQUM1QixPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7aUJBQzNCO2FBQ0Y7U0FDRjtRQUNELE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDOztRQUNMLElBQU0sUUFBUSxTQUFHLDRCQUE0QixFQUFFLDBDQUFFLGVBQWUsQ0FBQztRQUNqRSxRQUFRLElBQUksUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDIn0=

/***/ }),

/***/ "xyBP":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/fetchSearchConfigurationFromEcs.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ecsUtils */ "4o6J");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch */ "y+O/");


function fetchSearchConfigurationFromEcs(options) {
    if (!options) {
        throw new Error("missing options for ECS call");
    }
    var clientWorkload = options.clientWorkload, userId = options.userId, tenantId = options.tenantId, ring = options.ring;
    return Object(_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: Object(_ecsUtils__WEBPACK_IMPORTED_MODULE_0__["ecsSearchConfigurationUrl"])(clientWorkload, userId, tenantId, ring),
        method: "GET",
    });
}
/* harmony default export */ __webpack_exports__["default"] = (fetchSearchConfigurationFromEcs);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hTZWFyY2hDb25maWd1cmF0aW9uRnJvbUVjcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9mZXRjaFNlYXJjaENvbmZpZ3VyYXRpb25Gcm9tRWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx5QkFBeUIsR0FFMUIsTUFBTSxZQUFZLENBQUM7QUFDcEIsT0FBTyxLQUFLLE1BQU0sU0FBUyxDQUFDO0FBRTVCLFNBQVMsK0JBQStCLENBQ3RDLE9BQWlEO0lBRWpELElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWixNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7S0FDakQ7SUFDTyxJQUFBLGNBQWMsR0FBNkIsT0FBTyxlQUFwQyxFQUFFLE1BQU0sR0FBcUIsT0FBTyxPQUE1QixFQUFFLFFBQVEsR0FBVyxPQUFPLFNBQWxCLEVBQUUsSUFBSSxHQUFLLE9BQU8sS0FBWixDQUFhO0lBQzNELE9BQU8sS0FBSyxDQUFDO1FBQ1gsR0FBRyxFQUFFLHlCQUF5QixDQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQztRQUN0RSxNQUFNLEVBQUUsS0FBSztLQUNkLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxlQUFlLCtCQUErQixDQUFDIn0=

/***/ }),

/***/ "y+O/":
/*!******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/fetch.js ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fetch; });
/* harmony import */ var _statusOk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statusOk */ "i1d3");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function fetch(options) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        // Decorate XHR with requestLogData if provided
        // This is used to capture logging data that is otherwise lost in the response
        xhr.requestLogData = __assign({}, options.requestLogData);
        xhr.open(options.method, options.url, true);
        if (options.timeoutMs) {
            xhr.timeout = options.timeoutMs;
        }
        if (options.withCredentials) {
            xhr.withCredentials = options.withCredentials;
        }
        var headers = options.headers || {};
        Object.keys(headers).map(function (key) {
            xhr.setRequestHeader(key, headers[key]);
        });
        xhr.onload = function () {
            if (xhr.readyState === 4) {
                if (Object(_statusOk__WEBPACK_IMPORTED_MODULE_0__["default"])(xhr.status)) {
                    resolve(xhr);
                }
                else {
                    reject(xhr);
                }
            }
        };
        xhr.onerror = function () {
            reject(xhr);
        };
        xhr.ontimeout = function () {
            reject(xhr);
        };
        var body = options.body || null;
        xhr.send(body);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZmV0Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLFFBQVEsTUFBTSxZQUFZLENBQUM7QUFZbEMsTUFBTSxDQUFDLE9BQU8sVUFBVSxLQUFLLENBQUMsT0FBc0I7SUFDbEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLElBQU0sR0FBRyxHQUFxQyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBRW5FLCtDQUErQztRQUMvQyw4RUFBOEU7UUFDOUUsR0FBRyxDQUFDLGNBQWMsZ0JBQVEsT0FBTyxDQUFDLGNBQWMsQ0FBRSxDQUFDO1FBQ25ELEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTVDLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUNyQixHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7U0FDakM7UUFFRCxJQUFJLE9BQU8sQ0FBQyxlQUFlLEVBQUU7WUFDM0IsR0FBRyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDO1NBQy9DO1FBRUQsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHO1lBQzNCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsTUFBTSxHQUFHO1lBQ1gsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2Q7cUJBQU07b0JBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNiO2FBQ0Y7UUFDSCxDQUFDLENBQUM7UUFFRixHQUFHLENBQUMsT0FBTyxHQUFHO1lBQ1osTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDO1FBRUYsR0FBRyxDQUFDLFNBQVMsR0FBRztZQUNkLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLENBQUMsQ0FBQztRQUVGLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIn0=

/***/ }),

/***/ "yqov":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/promiseCache.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: getPromise, getOrCreateCache, getCache, setCache, getPromotedStorageCacheItems, savePromise, setCacheItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPromise", function() { return getPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateCache", function() { return getOrCreateCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCache", function() { return getCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCache", function() { return setCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPromotedStorageCacheItems", function() { return getPromotedStorageCacheItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePromise", function() { return savePromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCacheItem", function() { return setCacheItem; });
/* harmony import */ var _serializeKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serializeKey */ "iyEA");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "2mDI");
/* harmony import */ var _storageCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageCache */ "JttP");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



/**
 * Gets a Promise from the cache, potentially loading data from storage.
 *
 * @param cacheId A unique identifier for the cache.
 * @param cacheVersion The version of the cache.
 * @param puid The user id.
 * @param cacheItemKey A unique identifier for the cache item.
 */
function getPromise(cacheId, cacheVersion, puid, cacheItemKey) {
    if (cacheItemKey === void 0) { cacheItemKey = {}; }
    var serializedKey = Object(_serializeKey__WEBPACK_IMPORTED_MODULE_0__["default"])(cacheItemKey);
    var item = getOrCreateCache(cacheId, cacheVersion, puid).cacheItems[serializedKey];
    if (item) {
        if (Date.now() < item.expiryTime) {
            return item.value.then(function (v) { return (__assign(__assign({}, v), { cacheItemType: item.cacheItemType, cacheItemResolved: item.cacheItemResolved, expiryTime: item.expiryTime })); });
        }
        else {
            removePromise(cacheId, serializedKey);
        }
    }
    return null;
}
var getOrCreateCache = function getOrCreateCache(cacheId, cacheVersion, puid) {
    Object(_storageCache__WEBPACK_IMPORTED_MODULE_2__["assertPuid"])(puid);
    var cache = getCache(cacheId);
    if (cache && cache.puid !== puid) {
        cache = null;
    }
    return (cache ||
        setCache(cacheId, {
            puid: puid,
            cacheItems: getPromotedStorageCacheItems(cacheId, cacheVersion, puid) || {},
        }));
};
var getCache = function getCache(cacheId) {
    return Object(_state__WEBPACK_IMPORTED_MODULE_1__["cache"])().caches[cacheId];
};
var setCache = function setCache(cacheId, newCache) {
    return (Object(_state__WEBPACK_IMPORTED_MODULE_1__["cache"])().caches[cacheId] = newCache);
};
function getPromotedStorageCacheItems(cacheId, cacheVersion, puid) {
    var storageCache = Object(_storageCache__WEBPACK_IMPORTED_MODULE_2__["getCache"])(cacheId, cacheVersion, puid);
    if (!storageCache) {
        return null;
    }
    var cacheItems = storageCache.cacheItems;
    var emptyCache = {};
    return Object.keys(cacheItems).reduce(function (cache, cacheItemKey) { return ((cache[cacheItemKey] = {
        value: Promise.resolve({
            xhr: {
                responseText: cacheItems[cacheItemKey].value,
                status: cacheItems[cacheItemKey].status || 0,
            },
        }),
        expiryTime: cacheItems[cacheItemKey].expiryTime,
        cacheItemType: "storage",
        cacheItemResolved: true,
    }),
        cache); }, emptyCache);
}
function removePromise(id, serializedKey) {
    if (!Object(_state__WEBPACK_IMPORTED_MODULE_1__["cache"])().caches[id]) {
        return null;
    }
    return (Object(_state__WEBPACK_IMPORTED_MODULE_1__["cache"])().caches[id].cacheItems[serializedKey] = null);
}
/**
 * Adds a Promise into an in-memory cache. The value produced by the Promise
 * is propagated into storage. The Promise is removed from the cache if it
 * rejects. After the given refresh interval has elapsed, the Promise and
 * storage cache items are invalidated.
 *
 * @param cacheId A unique identifier for the cache type, upon which versioning
 * is enforced.
 * @param cacheVersion The version of the cache type. If a cache access is
 * performed on the id with a different version, the cache entries for that
 * type are invalidated
 * @param cacheItemLifeTime Represents the number of milliseconds since the
 * save was initiated to when the cache entry should be invalidated.
 * @param cacheItemValue The Promise to cache.
 * @param cacheItemKey A unique identifier for the cache item, only one item is
 * cached for a given id + key pair.
 */
function savePromise(_a, puid, cacheItemValue, cacheItemKey) {
    var cacheId = _a.cacheId, cacheVersion = _a.cacheVersion, cacheItemLifetime = _a.cacheItemLifetime;
    if (cacheItemKey === void 0) { cacheItemKey = {}; }
    Object(_storageCache__WEBPACK_IMPORTED_MODULE_2__["assertPuid"])(puid);
    var serializedKey = Object(_serializeKey__WEBPACK_IMPORTED_MODULE_0__["default"])(cacheItemKey);
    var cacheItems = getOrCreateCache(cacheId, cacheVersion, puid).cacheItems;
    var cacheItem = setCacheItem(cacheItems, serializedKey, {
        value: cacheItemValue,
        expiryTime: Date.now() + cacheItemLifetime,
        cacheItemType: "memory",
        cacheItemResolved: false,
    });
    return cacheItemValue.then(function (wrappedXhr) { return (setCacheItem(cacheItems, serializedKey, __assign(__assign({}, cacheItem), { cacheItemResolved: true })),
        Object(_storageCache__WEBPACK_IMPORTED_MODULE_2__["saveValue"])(cacheId, cacheVersion, puid, serializedKey, wrappedXhr.xhr.responseText, cacheItem.expiryTime, wrappedXhr.xhr.status), __assign(__assign({}, wrappedXhr), { cacheItemResolved: false, cacheItemType: null, expiryTime: cacheItem.expiryTime })); }, function (e) {
        removePromise(cacheId, serializedKey); // Don't cache a rejected promise.
        throw e;
    });
}
var setCacheItem = function setCacheItem(cacheItems, serializedKey, cacheItem) {
    return (cacheItems[serializedKey] = cacheItem);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbWlzZUNhY2hlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Byb21pc2VDYWNoZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sWUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDaEMsT0FBTyxFQUNMLFVBQVUsRUFDVixRQUFRLElBQUksZUFBZSxFQUMzQixTQUFTLEdBQ1YsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4Qjs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxVQUFVLFVBQVUsQ0FDeEIsT0FBZSxFQUNmLFlBQW9CLEVBQ3BCLElBQVksRUFDWixZQUEyQjtJQUEzQiw2QkFBQSxFQUFBLGlCQUEyQjtJQUUzQixJQUFNLGFBQWEsR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakQsSUFBTSxJQUFJLEdBQUcsZ0JBQWdCLENBQUksT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQ3RFLGFBQWEsQ0FDZCxDQUFDO0lBRUYsSUFBSSxJQUFJLEVBQUU7UUFDUixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2hDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSx1QkFDekIsQ0FBQyxLQUNKLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUNqQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQ3pDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxJQUMzQixFQUw0QixDQUs1QixDQUFDLENBQUM7U0FDTDthQUFNO1lBQ0wsYUFBYSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztTQUN2QztLQUNGO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsTUFBTSxDQUFDLElBQU0s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

/***/ }),

/***/ "z9oY":
/*!******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/index.js ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: createAsyncTokenProvider, fetch, fetchAcquireToken, fetchAndParseSearchConfiguration, fetchCustomVerticals, fetcher, fetchBingConsumer, fetchFileShareConnectorSettings, fetchHubSites, fetchPersonalData, fetchPersonalRankingContext, fetchSearchCenterUrl, fetchRawSearchCenterUrl, fetchSearchConfiguration, fetchParsedCustomVerticals, fetchSearchConfigurationFromEcs, fetchConfigFromEcsWithCacheAndMonitor, fetchSpHomeNews, fetchSpHomePrefetch, fetchSiteNewsSuggestions, fetchSiteActivities, siteActivitiesCacheKeyExtractor, fetchSharePointDigest, fetchSharePointDigestV2, fetchSitesFromSubstrate, generateGuid, cache, init, puid, statusOk, substrateIframeProxy, toTokenDetail, warmupMsb, warmupSubstrateSearch, withBasicMonitor, withMonitor, withImportMonitor, withPeriodicRefresh, withRefresh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createAsyncTokenProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAsyncTokenProvider */ "5B2h");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAsyncTokenProvider", function() { return _createAsyncTokenProvider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch */ "y+O/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return _fetch__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _fetchAcquireToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchAcquireToken */ "bwCB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchAcquireToken", function() { return _fetchAcquireToken__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _fetchAndParseSearchConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchAndParseSearchConfiguration */ "wpxI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchAndParseSearchConfiguration", function() { return _fetchAndParseSearchConfiguration__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _fetchCustomVerticals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetchCustomVerticals */ "iuLP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchCustomVerticals", function() { return _fetchCustomVerticals__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetcher */ "AK9X");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetcher", function() { return _fetcher__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _fetchBingConsumer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fetchBingConsumer */ "PoOG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchBingConsumer", function() { return _fetchBingConsumer__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _fetchFileShareConnectorSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fetchFileShareConnectorSettings */ "Bsmq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchFileShareConnectorSettings", function() { return _fetchFileShareConnectorSettings__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _fetchHubSites__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fetchHubSites */ "Nc4t");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchHubSites", function() { return _fetchHubSites__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _fetchPersonalData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetchPersonalData */ "YWn9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchPersonalData", function() { return _fetchPersonalData__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _fetchPersonalRankingContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fetchPersonalRankingContext */ "7VFy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchPersonalRankingContext", function() { return _fetchPersonalRankingContext__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _fetchSearchCenterUrl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fetchSearchCenterUrl */ "WNKU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSearchCenterUrl", function() { return _fetchSearchCenterUrl__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchRawSearchCenterUrl", function() { return _fetchSearchCenterUrl__WEBPACK_IMPORTED_MODULE_11__["fetchRawSearchCenterUrl"]; });

/* harmony import */ var _fetchSearchConfiguration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fetchSearchConfiguration */ "Sa3D");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSearchConfiguration", function() { return _fetchSearchConfiguration__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _fetchParsedCustomVerticals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fetchParsedCustomVerticals */ "n9ji");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchParsedCustomVerticals", function() { return _fetchParsedCustomVerticals__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _fetchSearchConfigurationFromEcs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fetchSearchConfigurationFromEcs */ "xyBP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSearchConfigurationFromEcs", function() { return _fetchSearchConfigurationFromEcs__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _fetchConfigFromEcsWithCacheAndMonitor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fetchConfigFromEcsWithCacheAndMonitor */ "jUkL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchConfigFromEcsWithCacheAndMonitor", function() { return _fetchConfigFromEcsWithCacheAndMonitor__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _fetchServiceData__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fetchServiceData */ "5huL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSpHomeNews", function() { return _fetchServiceData__WEBPACK_IMPORTED_MODULE_16__["fetchSpHomeNews"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSpHomePrefetch", function() { return _fetchServiceData__WEBPACK_IMPORTED_MODULE_16__["fetchSpHomePrefetch"]; });

/* harmony import */ var _fetchSiteNewsSuggestions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fetchSiteNewsSuggestions */ "ffYn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSiteNewsSuggestions", function() { return _fetchSiteNewsSuggestions__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _fetchSiteActivities__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fetchSiteActivities */ "bH3N");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSiteActivities", function() { return _fetchSiteActivities__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "siteActivitiesCacheKeyExtractor", function() { return _fetchSiteActivities__WEBPACK_IMPORTED_MODULE_18__["cacheKeyExtractor"]; });

/* harmony import */ var _fetchSharePointDigest__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./fetchSharePointDigest */ "MUOz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSharePointDigest", function() { return _fetchSharePointDigest__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _fetchSharePointDigestv2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./fetchSharePointDigestv2 */ "c+lw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSharePointDigestV2", function() { return _fetchSharePointDigestv2__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _fetchSitesFromSubstrate__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./fetchSitesFromSubstrate */ "MnpI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSitesFromSubstrate", function() { return _fetchSitesFromSubstrate__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _generateGuid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./generateGuid */ "3/VP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateGuid", function() { return _generateGuid__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./state */ "2mDI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return _state__WEBPACK_IMPORTED_MODULE_23__["cache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _state__WEBPACK_IMPORTED_MODULE_23__["init"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "puid", function() { return _state__WEBPACK_IMPORTED_MODULE_23__["puid"]; });

/* harmony import */ var _statusOk__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./statusOk */ "i1d3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "statusOk", function() { return _statusOk__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _substrateIframeProxy__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./substrateIframeProxy */ "NXYV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "substrateIframeProxy", function() { return _substrateIframeProxy__WEBPACK_IMPORTED_MODULE_25__["substrateIframeProxy"]; });

/* harmony import */ var _tokenDetail__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tokenDetail */ "ppzf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toTokenDetail", function() { return _tokenDetail__WEBPACK_IMPORTED_MODULE_26__["toTokenDetail"]; });

/* harmony import */ var _warmupMsb__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./warmupMsb */ "UN2C");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warmupMsb", function() { return _warmupMsb__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _warmupSubstrateSearch__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./warmupSubstrateSearch */ "SUgy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warmupSubstrateSearch", function() { return _warmupSubstrateSearch__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _withBasicMonitor__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./withBasicMonitor */ "lKsu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withBasicMonitor", function() { return _withBasicMonitor__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _withMonitor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./withMonitor */ "8a+c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMonitor", function() { return _withMonitor__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _withImportMonitor__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./withImportMonitor */ "f0Wj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withImportMonitor", function() { return _withImportMonitor__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _withPeriodicRefresh__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./withPeriodicRefresh */ "HDXk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPeriodicRefresh", function() { return _withPeriodicRefresh__WEBPACK_IMPORTED_MODULE_32__["withPeriodicRefresh"]; });

/* harmony import */ var _withRefresh__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./withRefresh */ "NwN6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRefresh", function() { return _withRefresh__WEBPACK_IMPORTED_MODULE_33__["withRefresh"]; });



































//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sSUFBSSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxPQUFPLElBQUksS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLElBQUksaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsT0FBTyxJQUFJLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDakcsT0FBTyxFQUFFLE9BQU8sSUFBSSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pFLE9BQU8sRUFDTCxPQUFPLElBQUksT0FBTyxHQUduQixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUsT0FBTyxJQUFJLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sSUFBSSwrQkFBK0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQy9GLE9BQU8sRUFBRSxPQUFPLElBQUksYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLE9BQU8sSUFBSSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25FLE9BQU8sRUFDTCxPQUFPLElBQUksMkJBQTJCLEdBRXZDLE1BQU0sK0JBQStCLENBQUM7QUFDdkMsT0FBTyxFQUNMLE9BQU8sSUFBSSxvQkFBb0IsRUFDL0IsdUJBQXVCLEdBQ3hCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLE9BQU8sSUFBSSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxPQUFPLElBQUksMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRixPQUFPLEVBQUUsT0FBTyxJQUFJLCtCQUErQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDL0YsT0FBTyxFQUFFLE9BQU8sSUFBSSxxQ0FBcUMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzNHLE9BQU8sRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsT0FBTyxJQUFJLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDakYsT0FBTyxFQUNMLE9BQU8sSUFBSSxtQkFBbUIsRUFDOUIsaUJBQWlCLElBQUksK0JBQStCLEdBQ3JELE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLE9BQU8sSUFBSSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNFLE9BQU8sRUFBRSxPQUFPLElBQUksdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRSxPQUFPLEVBQUUsT0FBTyxJQUFJLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0UsT0FBTyxFQUFFLE9BQU8sSUFBSSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsS0FBSyxFQUFtQixJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzdELE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2pELE9BQU8sRUFBbUIsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxPQUFPLElBQUksU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLElBQUkscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsT0FBTyxJQUFJLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakUsT0FBTyxFQUFFLE9BQU8sSUFBSSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sSUFBSSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUMifQ==

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~sp-suite-nav-search-common_[locale].js.map