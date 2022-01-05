(window["webpackJsonp_914330ee_2df2_4f6e_a858_30c23a812408_1_15_53"] = window["webpackJsonp_914330ee_2df2_4f6e_a858_30c23a812408_1_15_53"] || []).push([["live-persona-card-loader"],{

/***/ "MXe6":
/*!**************************************************!*\
  !*** ../sp-component-utilities/lib/SPUtility.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loc/Strings.resx */ "xvBm");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "xvBm", 1);
/**
 * @file SPUtility.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */


var SPUtility = /** @class */ (function () {
    function SPUtility() {
    }
    /**
     * Utility method to construct user photo URL for specific size.
     * UserPhoto mapping is auto added into the Alternative URL map when private CDN is enabled.
     * @param email email address. It will be Decoded to ensure we use uniform URL for the user photo.
     * When email is missing, it will automatically lead to default doughboy image url.
     * @param size Parameter may have value S, L, M. If none or other is provided, S will be used by default.
     */
    SPUtility.getUserPhotoUrl = function (email, size) {
        return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["SPAlternativeUrls"].getUserPhotoUrl(decodeURIComponent(email), size);
    };
    SPUtility.getWebPathOfFile = function (path) {
        if (path.indexOf('?') > 0) {
            if (path.search(new RegExp('\\?(w|W)(e|E)(b|B)=1')) > 0 ||
                path.search(new RegExp('\\&(w|W)(e|E)(b|B)=1')) > 0) {
                return path;
            }
            return path + '&web=1';
        }
        return path + '?web=1';
    };
    /**
     * Takes in a page version number and checks to see if the version represents a minor version
     */
    SPUtility.isPageOnMinorVersion = function (version) {
        var versionParts = version.split('.');
        if (versionParts.length !== 2) {
            throw new Error('Incorrect Version Format');
        }
        return !_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["StringHelper"].doesStringStartWith(versionParts[1], '0');
    };
    SPUtility.getNarratorFriendlyDurationText = function (duration) {
        var narratorFriendlyDurationText = '';
        var durationUnitValues = duration.split(':');
        if (durationUnitValues.length === 3) {
            var hoursText = SPUtility.getTimeText(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_1__["HourMessage"], durationUnitValues[0]);
            var minutesText = SPUtility.getTimeText(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_1__["MinuteMessage"], durationUnitValues[1]);
            var secondsText = SPUtility.getTimeText(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_1__["SecondMessage"], durationUnitValues[2]);
            narratorFriendlyDurationText = hoursText + " " + minutesText + " " + secondsText;
        }
        else {
            var minutesText = SPUtility.getTimeText(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_1__["MinuteMessage"], durationUnitValues[0]);
            var secondsText = SPUtility.getTimeText(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_1__["SecondMessage"], durationUnitValues[1]);
            narratorFriendlyDurationText = minutesText + " " + secondsText;
        }
        return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["StringHelper"].format(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_1__["DurationText"], narratorFriendlyDurationText);
    };
    SPUtility.getTimeText = function (template, time) {
        return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["StringHelper"].getLocalizedCountValue(template, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_1__["CountStringIntervals"], parseInt(time, 10)).replace('{0}', time);
    };
    return SPUtility;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPUtility);


/***/ }),

/***/ "oCe/":
/*!************************************************************!*\
  !*** ../sp-live-persona-card/lib/LivePersonaCardLoader.js ***!
  \************************************************************/
/*! exports provided: bootstrap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_shared_react_lib_components_LivePersonaCardAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-shared-react/lib/components/LivePersonaCardAdapter */ "8w9x");
/* harmony import */ var _ms_sp_component_utilities_lib_SPUtility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-component-utilities/lib/SPUtility */ "MXe6");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__);
/**
 * @file LivePersonaCardLoader.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */




function getPageContext(serviceScope) {
    return new Promise(function (resolve) {
        serviceScope.whenFinished(function () { return resolve(serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__["PageContext"].serviceKey)); });
    });
}
/**
 * Wrapper/Connector for the LivePersonaCard, responsible for boot loading the LPC if not already done.
 */
// tslint:disable-next-line:export-name
function bootstrap(serviceScope, clientType) {
    return getPageContext(serviceScope).then(function (pageContext) {
        /**
         * odsp-shared-react added 'client type' in refresh auth token API. Hence we can leverage it to remove
         * duplicate realization of same functionality to better maintain in the future while still keep tracking
         * usage and reliability of LivePersonaCard in sp-client.
         */
        var monitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"]('WebPartShared.LivePersonaCard');
        return _ms_odsp_shared_react_lib_components_LivePersonaCardAdapter__WEBPACK_IMPORTED_MODULE_1__["LivePersonaCardAdapter"].ensureInitializeLPC({
            pageContext: pageContext.legacyPageContext,
            clientType: clientType,
            onSuccess: function () { return monitor.writeSuccess({ initialized: false }); },
            onFailure: function (error) { return monitor.writeUnexpectedFailure('InitializeFailure', new Error(error)); },
            dataCallBacks: {
                getAndPrefetchPersonaImageUri: getAndPrefetchPersonaImageUri
            }
        })
            .then(function () {
            // If monitor isn't called neither by onSuccess nor onFailure, it's already initialized by other LPC consumers.
            monitor.writeSuccess({ initialized: true });
        })
            .catch(function (error) {
            if (typeof error === 'string' || error instanceof String) {
                // odsp-common and LPC might throw out plain text error
                error = new Error(error.toString());
            }
            // tslint:disable-next-line:no-any
            if (window.LivePersonaCardHoverTargetV2) {
                monitor.writeExpectedFailure('FailureAfterInitialize', error);
                return Promise.resolve();
            }
            else {
                monitor.writeUnexpectedFailure('LPCAdapterFailure', error);
                throw error;
            }
        });
    });
}
function getAndPrefetchPersonaImageUri(personaId, callback) {
    var accountName = (personaId.Smtp || personaId.Upn || '').toLowerCase();
    var imageUrl = Boolean(accountName)
        ? _ms_sp_component_utilities_lib_SPUtility__WEBPACK_IMPORTED_MODULE_2__["default"].getUserPhotoUrl(accountName, 3 /* Large */)
        : '';
    callback(imageUrl);
}
// tslint:disable-next-line:export-name
/* harmony default export */ __webpack_exports__["default"] = ({ bootstrap: bootstrap });


/***/ }),

/***/ "xvBm":
/*!******************************************************!*\
  !*** ../sp-component-utilities/lib/loc/Strings.resx ***!
  \******************************************************/
/*! exports provided: HourMessage, MinuteMessage, SecondMessage, CountStringIntervals, DurationText, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"HourMessage\":\"[!!--##{0} ĥōũŕś||{0} ĥōũŕ||{0} ĥōũŕś##--!!]\",\"MinuteMessage\":\"[!!--##{0} mĩńũţēś||{0} mĩńũţē||{0} mĩńũţēś##--!!]\",\"SecondMessage\":\"[!!--##{0} śēćōńďś||{0} śēćōńď||{0} śēćōńďś##--!!]\",\"CountStringIntervals\":\"[!!--##0||1||2-##--!!]\",\"DurationText\":\"[!!--##Ďũŕàţĩōń {0}##--!!]\"}");

/***/ })

}]);
//# sourceMappingURL=chunk.live-persona-card-loader_[locale].js.map