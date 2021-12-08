define("a7f8537f-f742-423f-ad20-ed8feaaf0805_0.1.0", ["tslib","@ms/sp-telemetry","@microsoft/office-ui-fabric-react-bundle","@microsoft/sp-core-library","@microsoft/sp-page-context","react","react-dom","@microsoft/load-themed-styles"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE__2q6Q__, __WEBPACK_EXTERNAL_MODULE_KL1q__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_X_PM__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_faye__, __WEBPACK_EXTERNAL_MODULE_jOlS__) { return /******/ (function(modules) { // webpackBootstrap
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

/***/ "2q6Q":
/*!***********************************!*\
  !*** external "@ms/sp-telemetry" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2q6Q__;

/***/ }),

/***/ "56LG":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Icon.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/./lib/Icon.js
var pkg = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
module.exports = pkg.workaround_Icon;

/***/ }),

/***/ "5ADk":
/*!***********************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "5CVZ":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/CommandBar.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/CommandBar.js


/***/ }),

/***/ "Et2q":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/SearchBox.js ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: SearchBox, SearchBoxBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_SearchBox_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/SearchBox/index */ "kMLv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBox", function() { return _components_SearchBox_index__WEBPACK_IMPORTED_MODULE_0__["SearchBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBoxBase", function() { return _components_SearchBox_index__WEBPACK_IMPORTED_MODULE_0__["SearchBoxBase"]; });


//# sourceMappingURL=SearchBox.js.map

/***/ }),

/***/ "HttU":
/*!******************************************!*\
  !*** ./lib/FlightViewer/FlightViewer.js ***!
  \******************************************/
/*! exports provided: FlightViewer, renderFlightViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightViewer", function() { return FlightViewer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderFlightViewer", function() { return renderFlightViewer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_CommandBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/CommandBar */ "5CVZ");
/* harmony import */ var office_ui_fabric_react_lib_SearchBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/SearchBox */ "Et2q");
/* harmony import */ var office_ui_fabric_react_lib_Callout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/Callout */ "ioxN");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FlightViewer.module.scss */ "u44x");








var SP_CLIENT_SEARCH_URL_TEMPLATE = 'https://onedrive.visualstudio.com/SPPPlat/_search?action=contents&text={0}%20(ext%3Ats%20OR%20ext%3Atsx)&type=code&lp=code-Project&filters=ProjectFilters%7BSPPPlat%7DRepositoryFilters%7Bsp-client%7D&pageSize=25';
var GLOBAL_SEARCH_URL_TEMPLATE = 'https://onedrive.visualstudio.com/_search?text={0}&type=code&pageSize=25&action=contents';
var FOR_SEARCH_URL_TEMPLATE = 'https://spoflights.azurewebsites.net/Flight/Search?term={0}';
function _getExperimentVariantString(variant) {
    switch (variant) {
        case -1:
            return 'Disabled';
        case 0:
            return 'Control';
        default:
            return "Treatment " + variant;
    }
}
function _commandBarItems(context) {
    return context.diffs
        ? [_backButton(context), _searchBox(context), _vsoLinks(context)]
        : [_searchBox(context), _vsoLinks(context)];
}
function _commandBarFarItems(context) {
    return context.diffs ? [] : [_compareCommand(context)];
}
function _backButton(context) {
    return {
        key: 'back',
        name: 'back',
        text: 'Back',
        onClick: function () { return _handleClickBackButton(context); },
        iconProps: { iconName: 'NavigateBack' }
    };
}
function _searchBox(context) {
    return {
        key: 'searchBox',
        name: 'searchBox',
        onRender: function () { return _renderSearchBox(context); }
    };
}
function _vsoLinks(context) {
    return {
        key: 'vsoLink',
        name: 'vsoLink',
        onRender: function () { return _renderVsoLinks(context.searchValue); }
    };
}
function _compareCommand(context) {
    return {
        key: 'compare',
        name: 'compare',
        onRender: function () { return _renderCompareCommand(context); }
    };
}
function _renderSearchBox(context) {
    var handleSearchChanged = function (newValue) {
        var guid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__["Guid"].tryParse(newValue);
        if (guid) {
            context.setSearchValue({
                type: "KillSwitch" /* KillSwitch */,
                value: guid.toString()
            });
            return;
        }
        var expFeatureId = Number(newValue);
        if (expFeatureId) {
            context.setSearchValue({
                type: expFeatureId > 90000 ? "Experiment" /* Experiment */ : "Flight" /* Flight */,
                value: expFeatureId
            });
        }
        else {
            context.setSearchValue(undefined);
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_SearchBox__WEBPACK_IMPORTED_MODULE_3__["SearchBox"], { placeholder: 'Flight/Experiment/KillSwitch ID', onChanged: handleSearchChanged, className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].searchBox }));
}
function _renderVsoLinks(searchValue) {
    return (searchValue && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["Link"], { href: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__["Text"].format(SP_CLIENT_SEARCH_URL_TEMPLATE, searchValue.value), target: '_blank', "data-interception": 'off', className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].vsoLink }, "Search TypeScript files in sp-client"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["Link"], { href: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__["Text"].format(GLOBAL_SEARCH_URL_TEMPLATE, searchValue.value), target: '_blank', "data-interception": 'off', className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].vsoLink }, "Search globally"),
        (searchValue.type === "Flight" /* Flight */ || searchValue.type === "Experiment" /* Experiment */) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["Link"], { href: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__["Text"].format(FOR_SEARCH_URL_TEMPLATE, searchValue.value), target: '_blank', "data-interception": 'off', className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].vsoLink }, "Search in FlightOnRails")))));
}
function _renderCompareCommand(context) {
    var copiedToClipboard = context.copiedToClipboard, compareRef = context.compareRef, showCompareCallout = context.showCompareCallout, myTextareaRef = context.myTextareaRef, theOtherTextareaRef = context.theOtherTextareaRef, props = context.props, setCopiedToClipboard = context.setCopiedToClipboard, setDiffs = context.setDiffs, setShowCompareCallout = context.setShowCompareCallout;
    var handleClickCompareButton = function () { return context.setShowCompareCallout(true); };
    var handleCompareCalloutDismiss = function () {
        context.setShowCompareCallout(false);
        context.setCopiedToClipboard(false);
    };
    var handleClickCopyButton = function () {
        if (myTextareaRef.current) {
            myTextareaRef.current.select();
            document.execCommand('copy');
            setCopiedToClipboard(true);
        }
    };
    var handleClickTellTheDifferencesButton = function () {
        if (theOtherTextareaRef.current) {
            var theOtherFullString = theOtherTextareaRef.current.value;
            var results = props.onCompare(theOtherFullString);
            setDiffs(results);
            setShowCompareCallout(false);
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { ref: compareRef, className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].compareButtonWrapper },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["PrimaryButton"], { text: 'Compare', iconProps: { iconName: 'SearchAndApps' }, className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].compareButton, onClick: handleClickCompareButton }),
        showCompareCallout && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_Callout__WEBPACK_IMPORTED_MODULE_4__["Callout"], { target: compareRef, directionalHint: office_ui_fabric_react_lib_Callout__WEBPACK_IMPORTED_MODULE_4__["DirectionalHint"].bottomRightEdge, onDismiss: handleCompareCalloutDismiss },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].compareCalloutContent },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", { readOnly: true, className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].textarea, ref: myTextareaRef }, props.fullString),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["DefaultButton"], { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].copyButton, iconProps: { iconName: 'Copy' }, text: copiedToClipboard
                        ? 'Copied! Now go to the flight inspector on the other client where you want to compare the status and paste the string into the second textarea like below'
                        : 'Copy the string above to clipboard', onClick: handleClickCopyButton }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].textarea, placeholder: 'Copy the string obtained from another client here.', ref: theOtherTextareaRef }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["PrimaryButton"], { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].diffButton, text: 'Tell the differences', iconProps: { iconName: 'Compare' }, onClick: handleClickTellTheDifferencesButton }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["DefaultButton"], { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].cancelButton, text: 'Cancel', onClick: handleCompareCalloutDismiss }))))));
}
function _handleClickBackButton(context) {
    context.setDiffs(undefined);
}
function _diffView(context) {
    var diffs = context.diffs;
    if (!diffs) {
        return undefined;
    }
    var myFlights = diffs.flightDiffs.filter(function (diff) { return diff[1]; });
    var theOtherFlights = diffs.flightDiffs.filter(function (diff) { return diff[2]; });
    var myKillSwitches = diffs.killSwitchDiffs.filter(function (diff) { return diff[1]; });
    var theOtherKillSwitches = diffs.killSwitchDiffs.filter(function (diff) { return diff[2]; });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].content },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].myCell }, "status/variant of current page"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].theOtherCell }, "status/variant of the other page"),
        myFlights.length ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null,
                myFlights.length,
                " Flight(s) only enabled for me:"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].flexBox }, diffs.flightDiffs
                .filter(function (diff) { return diff[1]; })
                .map(function (diff) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["css"])(_FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].myCell, _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].flexItem) }, diff[0])); })))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "There are no flights that are only enabled for me.")),
        theOtherFlights.length ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null,
                theOtherFlights.length,
                " Flight(s) only enabled for the other client:"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].flexBox }, diffs.flightDiffs
                .filter(function (diff) { return diff[2]; })
                .map(function (diff) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].theOtherCell }, diff[0])); })))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "There are no flights that are only enabled for the other client.")),
        diffs.experimentDiffs.length ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null,
                diffs.experimentDiffs.length,
                " different experiment(s) (without perf quarantine)"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].flexBox }, diffs.experimentDiffs.map(function (diff) {
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["css"])(_FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].flexItem, _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].expItem) },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, diff[0]),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].myCell }, _getExperimentVariantString(diff[1])),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].theOtherCell }, _getExperimentVariantString(diff[2]))));
            })))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "There are no differences on the experiments.")),
        diffs.quarantineDiff[0] !== diffs.quarantineDiff[1] ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null,
                "The current client is ",
                diffs.quarantineDiff[0] ? '' : 'NOT ',
                "in perf quarantine. The other client is ",
                diffs.quarantineDiff[1] ? '' : 'NOT ',
                " in perf quarantine."),
            diffs.experimentDiffsWithQuarantine.length ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                    "For performance experiments, checkout the differences below. Note: This tool does not know which flight is perf experiment and which one is not. If the experiment is checked via SPPerfExperiment.getVariantAndTrackExperiment API then it is a perf experiment. Otherwise it is a regular experiment for which you should NOT check in the list below.",
                    ' '),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].flexBox }, diffs.experimentDiffsWithQuarantine.map(function (diff) {
                    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["css"])(_FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].flexItem, _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].expItem) },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, diff[0]),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].myCell }, _getExperimentVariantString(diff[1])),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].theOtherCell }, _getExperimentVariantString(diff[2]))));
                })))) : (false))) : diffs.quarantineDiff[0] === false ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Both two clients are NOT in perf quarantine.")) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Both two clients are in perf quarantine.")),
        myKillSwitches.length ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null,
                myKillSwitches.length,
                " kill switches only activated for me:"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].flexBox }, diffs.killSwitchDiffs
                .filter(function (diff) { return diff[1]; })
                .map(function (diff) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["css"])(_FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].myCell, _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].flexItem) }, diff[0])); })))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "There are no kill switches that are only activated for me.")),
        theOtherKillSwitches.length ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null,
                theOtherKillSwitches.length,
                " kill switches only activated for the other client:"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].flexBox }, diffs.killSwitchDiffs
                .filter(function (diff) { return diff[2]; })
                .map(function (diff) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["css"])(_FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].theOtherCell, _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].flexItem) }, diff[0])); })))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "There are no kill switches that are only activated for the other client."))));
}
function _fullListView(context) {
    var searchValue = context.searchValue, props = context.props, searchTargetRef = context.searchTargetRef;
    var flightElements = props.enabledFlights.map(function (flight) {
        var isSelected = Boolean(searchValue && searchValue.type === "Flight" /* Flight */ && searchValue.value === flight);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["css"])(_FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].flexItem, _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].cell, isSelected ? _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].selected : undefined), ref: isSelected ? searchTargetRef : undefined, tabIndex: isSelected ? -1 : undefined }, flight));
    });
    var experimentElements = props.enabledExperiments.map(function (experiment) {
        var isSelected = Boolean(searchValue && searchValue.type === "Experiment" /* Experiment */ && searchValue.value === experiment[0]);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["css"])(_FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].flexItem, _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].cell, isSelected ? _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].selected : undefined), ref: isSelected ? searchTargetRef : undefined, tabIndex: isSelected ? -1 : undefined }, "[" + experiment[0] + ", " + experiment[1] + "]"));
    });
    var killSwitchElements = props.activatedKillSwitches.map(function (guid) {
        var isSelected = Boolean(searchValue && searchValue.type === "KillSwitch" /* KillSwitch */ && searchValue.value === guid);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["css"])(_FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].flexItem, _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].cell, isSelected ? _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].selected : undefined), ref: isSelected ? searchTargetRef : undefined, tabIndex: isSelected ? -1 : undefined }, guid));
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].content },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "These flights are enabled for you: "),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].flexBox }, flightElements),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "These experiments are enabled for you:"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].flexBox }, experimentElements),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "These kill switches are activated for you:"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].flexBox }, killSwitchElements)));
}
/**
 * @internal
 */
function FlightViewer(props) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](undefined), searchValue = _a[0], setSearchValue = _a[1];
    var _b = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), showCompareCallout = _b[0], setShowCompareCallout = _b[1];
    var _c = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), copiedToClipboard = _c[0], setCopiedToClipboard = _c[1];
    var _d = react__WEBPACK_IMPORTED_MODULE_0__["useState"](undefined), diffs = _d[0], setDiffs = _d[1];
    // tslint:disable:no-null-keyword
    var compareRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    var myTextareaRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    var theOtherTextareaRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    var searchTargetRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    // tslint:enable:no-null-keyword
    var context = {
        searchValue: searchValue,
        setSearchValue: setSearchValue,
        showCompareCallout: showCompareCallout,
        setShowCompareCallout: setShowCompareCallout,
        copiedToClipboard: copiedToClipboard,
        setCopiedToClipboard: setCopiedToClipboard,
        diffs: diffs,
        setDiffs: setDiffs,
        compareRef: compareRef,
        myTextareaRef: myTextareaRef,
        theOtherTextareaRef: theOtherTextareaRef,
        props: props,
        searchTargetRef: searchTargetRef
    };
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (searchTargetRef.current) {
            searchTargetRef.current.scrollIntoView();
        }
    }, [searchTargetRef.current]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: props.limitMaxSize ? _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].limitMaxSize : undefined },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _FlightViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].commandBarWrapper },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_CommandBar__WEBPACK_IMPORTED_MODULE_2__["CommandBar"], { items: _commandBarItems(context), farItems: _commandBarFarItems(context) })),
        diffs ? _diffView(context) : _fullListView(context)));
}
/**
 * @internal
 * The dedicated render method to avoid issues when FlightViewer being directly rendered
 * in sp-loader during debug session.
 * @param domElement - The DOM element where to render the FlightViewer
 * @param props - The props of the FlightViewer component.
 */
function renderFlightViewer(domElement, props) {
    react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FlightViewer, props), domElement);
}


/***/ }),

/***/ "ILup":
/*!**********************************!*\
  !*** ./lib/SPFlightInspector.js ***!
  \**********************************/
/*! exports provided: SPFlightInspector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPFlightInspector", function() { return SPFlightInspector; });
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ExperimentUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExperimentUtilities */ "v1cY");




/**
 * Theoretically, client flights are [1, 2000] union [60000, 89999] and experiments are 90000+.
 * In practice, only a subset of these ranges are allowed to be provisioned by GridManager with definitions here
 * https://onedrive.visualstudio.com/SPIN/_git/GridMgr?path=%2Fsrc%2Fgrid%2Fgridmgr%2FGridMgrLib%2FGridConstants.cs&version=GBmaster&line=6877&lineEnd=6884&lineStartColumn=1&lineEndColumn=69&lineStyle=plain
 * An ICM is filed to the flighting team if the number of available flights is running out,
 * and they can update the upper bound.
 *
 * Note that although the lowest range of client flights 1-1051 is not defined in the link above.
 * They are coming from the time before automatic feature reservation was available.
 * Those are still valid flight numbers and there is some adhoc logic that attempts to
 * recycle those into the automatic reservation pool when they are retired.
 * See https://onedrive.visualstudio.com/SPIN/_git/GridMgr?path=%2Fsrc%2Fgrid%2Fgridmgr%2Fgridmgrsvc%2FData%2FFlightDefinition.cs&version=GBmaster&line=1857&lineEnd=1857&lineStartColumn=22&lineEndColumn=43&lineStyle=plain
 */
var CLIENT_FLIGHT_LOWER_BOUND = 1;
var CLIENT_FLIGHT_UPPER_BOUND = 2000; // Max might change some time.
var CLIENT_FLIGHT_LOWER_BOUND_SET_2 = 60000;
var CLIENT_FLIGHT_UPPER_BOUND_SET_2 = 70000; // Max might change some time.
var MIN_EXPERIMENT_ID = 90000;
var MAX_EXPERIMENT_ID = 91000; // Max might change some time.
/**
 * Example exported class
 * @alpha
 */
var SPFlightInspector = /** @class */ (function () {
    function SPFlightInspector(serviceScope) {
        this._inspected = false;
        this._flightsEnabled = [];
        this._experimentsVariants = [];
        this._activatedKillSwitches = [];
        this._pageContext = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__["PageContext"].serviceKey);
    }
    SPFlightInspector.getInstance = function (serviceScope) {
        if (!SPFlightInspector._instance) {
            SPFlightInspector._instance = new SPFlightInspector(serviceScope);
        }
        return SPFlightInspector._instance;
    };
    SPFlightInspector.prototype.getEnabledFlights = function () {
        this._ensureDataInspected();
        return this._flightsEnabled;
    };
    SPFlightInspector.prototype.getExperimentVariants = function () {
        this._ensureDataInspected();
        return this._experimentsVariants;
    };
    SPFlightInspector.prototype.getActivatedKillSwitches = function () {
        this._ensureDataInspected();
        return this._activatedKillSwitches;
    };
    SPFlightInspector.prototype.getFullString = function () {
        this._ensureDataInspected();
        return JSON.stringify({
            flights: this._flightsEnabled,
            experiments: this._experimentsVariants,
            killSwitches: this._activatedKillSwitches,
            isPerfQuarantine: _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_SPPerfExperiment"].isInQuarantine
        });
    };
    SPFlightInspector.prototype.compare = function (stringFromOtherClient) {
        var _a, _b, _c, _d;
        this._ensureDataInspected();
        var _e = JSON.parse(stringFromOtherClient), theOtherFlights = _e.flights, theOtherExperiments = _e.experiments, theOtherKillSwitches = _e.killSwitches, isTheOtherPerfQuarantine = _e.isPerfQuarantine;
        var results = {
            flightDiffs: [],
            experimentDiffs: [],
            experimentDiffsWithQuarantine: [],
            killSwitchDiffs: [],
            quarantineDiff: [_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_SPPerfExperiment"].isInQuarantine, isTheOtherPerfQuarantine]
        };
        // Compare flights
        for (var _i = 0, theOtherFlights_1 = theOtherFlights; _i < theOtherFlights_1.length; _i++) {
            var flight = theOtherFlights_1[_i];
            if (this._flightsEnabled.indexOf(flight) === -1) {
                results.flightDiffs.push([flight, false, true]);
            }
        }
        for (var _f = 0, _g = this._flightsEnabled; _f < _g.length; _f++) {
            var flight = _g[_f];
            if (theOtherFlights.indexOf(flight) === -1) {
                results.flightDiffs.push([flight, true, false]);
            }
        }
        var _loop_1 = function (experiment) {
            var myVariant = (_a = this_1._experimentsVariants.filter(function (exp) { return exp[0] === experiment[0]; })[0]) === null || _a === void 0 ? void 0 : _a[1];
            if (myVariant === undefined) {
                myVariant = 0;
            }
            if (experiment[1] !== myVariant) {
                results.experimentDiffs.push([experiment[0], myVariant, experiment[1]]);
            }
        };
        var this_1 = this;
        // Compare experiments regardless of quarantine
        for (var _h = 0, theOtherExperiments_1 = theOtherExperiments; _h < theOtherExperiments_1.length; _h++) {
            var experiment = theOtherExperiments_1[_h];
            _loop_1(experiment);
        }
        var _loop_2 = function (experiment) {
            var theOtherVariant = (_b = theOtherExperiments.filter(function (exp) { return exp[0] === experiment[0]; })[0]) === null || _b === void 0 ? void 0 : _b[1];
            if (theOtherVariant === undefined) {
                theOtherVariant = 0;
            }
            if (experiment[1] !== theOtherVariant) {
                results.experimentDiffs.push([experiment[0], experiment[1], theOtherVariant]);
            }
        };
        for (var _j = 0, _k = this._experimentsVariants; _j < _k.length; _j++) {
            var experiment = _k[_j];
            _loop_2(experiment);
        }
        results.experimentDiffs = this._deduplicateExperimentDiffs(results.experimentDiffs);
        var _loop_3 = function (experiment) {
            var myVariant = (_c = this_2._experimentsVariants.filter(function (exp) { return exp[0] === experiment[0]; })[0]) === null || _c === void 0 ? void 0 : _c[1];
            if (myVariant === undefined || _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_SPPerfExperiment"].isInQuarantine) {
                myVariant = 0;
            }
            var theOtherVariant = isTheOtherPerfQuarantine ? 0 : experiment[1];
            if (theOtherVariant !== myVariant) {
                results.experimentDiffsWithQuarantine.push([experiment[0], myVariant, theOtherVariant]);
            }
        };
        var this_2 = this;
        // Compare experiments based on quarantine
        for (var _l = 0, theOtherExperiments_2 = theOtherExperiments; _l < theOtherExperiments_2.length; _l++) {
            var experiment = theOtherExperiments_2[_l];
            _loop_3(experiment);
        }
        var _loop_4 = function (experiment) {
            var theOtherVariant = (_d = theOtherExperiments.filter(function (exp) { return exp[0] === experiment[0]; })[0]) === null || _d === void 0 ? void 0 : _d[1];
            if (theOtherVariant === undefined || isTheOtherPerfQuarantine) {
                theOtherVariant = 0;
            }
            var myVariant = _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_SPPerfExperiment"].isInQuarantine ? 0 : experiment[1];
            if (myVariant !== theOtherVariant) {
                results.experimentDiffsWithQuarantine.push([experiment[0], myVariant, theOtherVariant]);
            }
        };
        for (var _m = 0, _o = this._experimentsVariants; _m < _o.length; _m++) {
            var experiment = _o[_m];
            _loop_4(experiment);
        }
        results.experimentDiffsWithQuarantine = this._deduplicateExperimentDiffs(results.experimentDiffsWithQuarantine);
        // Compare kill switches
        for (var _p = 0, theOtherKillSwitches_1 = theOtherKillSwitches; _p < theOtherKillSwitches_1.length; _p++) {
            var guid = theOtherKillSwitches_1[_p];
            if (this._activatedKillSwitches.indexOf(guid) === -1) {
                results.killSwitchDiffs.push([guid, false, true]);
            }
        }
        for (var _q = 0, _r = this._activatedKillSwitches; _q < _r.length; _q++) {
            var guid = _r[_q];
            if (theOtherKillSwitches.indexOf(guid) === -1) {
                results.killSwitchDiffs.push([guid, true, false]);
            }
        }
        return results;
    };
    SPFlightInspector.prototype._deduplicateExperimentDiffs = function (diffs) {
        return diffs
            .sort(function (diffA, diffB) { return diffA[0] - diffB[1]; })
            .filter(function (diff, index, diffsArray) { return index === 0 || diff[0] !== diffsArray[index - 1][0]; });
    };
    SPFlightInspector.prototype._ensureDataInspected = function () {
        if (!this._inspected) {
            this._inspected = true;
            this._inspectFlights();
            this._inspectExperiments();
            this._inspectKillSwitches();
        }
    };
    SPFlightInspector.prototype._inspectFlights = function () {
        // There is not cost in telemetry to check flight using _SPFlight.
        // So invoking the flight check for every possible flight id.
        for (var i = CLIENT_FLIGHT_LOWER_BOUND; i <= CLIENT_FLIGHT_UPPER_BOUND; i++) {
            if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(i)) {
                this._flightsEnabled.push(i);
            }
        }
        for (var i = CLIENT_FLIGHT_LOWER_BOUND_SET_2; i <= CLIENT_FLIGHT_UPPER_BOUND_SET_2; i++) {
            if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(i)) {
                this._flightsEnabled.push(i);
            }
        }
    };
    SPFlightInspector.prototype._inspectExperiments = function () {
        for (var i = MIN_EXPERIMENT_ID; i <= MAX_EXPERIMENT_ID; i++) {
            var variant = this._getVariant(i);
            if (variant >= 0) {
                this._experimentsVariants.push([i, variant]);
            }
        }
    };
    SPFlightInspector.prototype._inspectKillSwitches = function () {
        for (var _i = 0, _a = Object.keys(this._pageContext.legacyPageContext.killSwitches); _i < _a.length; _i++) {
            var killSwitchGuid = _a[_i];
            var normalizedKillSwitchGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].tryParse(killSwitchGuid);
            if (normalizedKillSwitchGuid) {
                this._activatedKillSwitches.push(normalizedKillSwitchGuid.toString());
            }
        }
    };
    SPFlightInspector.prototype._getVariant = function (experimentId) {
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPExperiment"].experimentOverrides && _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPExperiment"].experimentOverrides.has(experimentId)) {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPExperiment"].experimentOverrides.get(experimentId);
        }
        var _a = this._pageContext.legacyPageContext, experimentData = _a.experimentData, experimentDataLookup = _a.experimentDataLookup;
        if (!experimentData || !experimentDataLookup) {
            return 0;
        }
        var adjustedId = experimentId - MIN_EXPERIMENT_ID;
        var controlCode = Object(_ExperimentUtilities__WEBPACK_IMPORTED_MODULE_3__["decodeAt"])(experimentData, adjustedId);
        if (controlCode === 0) {
            // experiment does not exist or is turned off
            return -1;
        }
        else if (controlCode >= 1 && controlCode <= 4) {
            return controlCode - 1;
        }
        else if (controlCode === 5) {
            // assigned a variant 4+
            return Object(_ExperimentUtilities__WEBPACK_IMPORTED_MODULE_3__["lookup"])(experimentDataLookup, adjustedId);
        }
        else {
            // experiment is in AA testing;
            return 0;
        }
    };
    return SPFlightInspector;
}());



/***/ }),

/***/ "KL1q":
/*!***********************************************************!*\
  !*** external "@microsoft/office-ui-fabric-react-bundle" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_KL1q__;

/***/ }),

/***/ "LERl":
/*!***********************************!*\
  !*** ./lib/FlightViewer/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FlightViewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlightViewer */ "HttU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlightViewer", function() { return _FlightViewer__WEBPACK_IMPORTED_MODULE_0__["FlightViewer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderFlightViewer", function() { return _FlightViewer__WEBPACK_IMPORTED_MODULE_0__["renderFlightViewer"]; });

/* harmony import */ var _FlightViewer_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlightViewer.types */ "WO10");
/* harmony import */ var _FlightViewer_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FlightViewer_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FlightViewer_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","FlightViewer","renderFlightViewer"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FlightViewer_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "Ldz5":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/SearchBox/SearchBox.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: SearchBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBox", function() { return SearchBox; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _SearchBox_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBox.base */ "gS4/");
/* harmony import */ var _SearchBox_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBox.styles */ "ZdOb");



var SearchBox = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_SearchBox_base__WEBPACK_IMPORTED_MODULE_1__["SearchBoxBase"], _SearchBox_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'SearchBox' });
//# sourceMappingURL=SearchBox.js.map

/***/ }),

/***/ "PL71":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Styling.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Styling.js


/***/ }),

/***/ "T9Qe":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/FlightViewer/FlightViewer.module.css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".a_a_32ecaa5e{max-height:800px;max-width:1200px}.b_a_32ecaa5e{margin:20px}.c_a_32ecaa5e{color:\"[theme:successText, default: #107C10]\";background-color:\"[theme:successBackground, default: #DFF6DD]\"}.e_a_32ecaa5e{line-height:30px;padding:5px}.f_a_32ecaa5e{height:calc(100% - 2px);margin:1px 0;width:250px}.g_a_32ecaa5e,.h_a_32ecaa5e{height:100%}.i_a_32ecaa5e{margin:0 0 20px}.j_a_32ecaa5e{max-width:100%;width:100vw}.k_a_32ecaa5e{margin:20px;padding:5px;box-sizing:border-box;width:calc(100% - 40px);height:200px}.l_a_32ecaa5e{margin:0 20px}.m_a_32ecaa5e{border-bottom:1px solid;border-color:\"[theme:neutraltertiaryalt, default: #c8c6c4]\"}.m_a_32ecaa5e .ms-CommandBar{padding:0}.n_a_32ecaa5e{margin:0 20px 20px}[dir=ltr] .o_a_32ecaa5e{margin-right:5px}[dir=rtl] .o_a_32ecaa5e{margin-left:5px}.p_a_32ecaa5e{background-color:\"[theme:blue, default: #0078d4]\"}.p_a_32ecaa5e,.q_a_32ecaa5e{color:\"[theme:white, default: #ffffff]\";padding:5px;margin:1px;display:inline-block}.q_a_32ecaa5e{background-color:\"[theme:redDark, default: #a4262c]\"}.r_a_32ecaa5e{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;max-height:200px}.s_a_32ecaa5e{-ms-flex:0 0 auto;flex:0 0 auto}.t_a_32ecaa5e{padding:5px;display:inline-block}", ""]);


/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "WO10":
/*!************************************************!*\
  !*** ./lib/FlightViewer/FlightViewer.types.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "X+PM":
/*!*********************************************!*\
  !*** external "@microsoft/sp-page-context" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_X_PM__;

/***/ }),

/***/ "ZdOb":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/SearchBox/SearchBox.styles.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");


var GlobalClassNames = {
    root: 'ms-SearchBox',
    iconContainer: 'ms-SearchBox-iconContainer',
    icon: 'ms-SearchBox-icon',
    clearButton: 'ms-SearchBox-clearButton',
    field: 'ms-SearchBox-field',
};
function getStyles(props) {
    var _a, _b, _c, _d;
    var theme = props.theme, underlined = props.underlined, disabled = props.disabled, hasFocus = props.hasFocus, className = props.className, hasInput = props.hasInput, disableAnimation = props.disableAnimation;
    var palette = theme.palette, fonts = theme.fonts, semanticColors = theme.semanticColors, effects = theme.effects;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    // placeholder style constants
    var placeholderStyles = {
        color: semanticColors.inputPlaceholderText,
        opacity: 1,
    };
    var inputIconAlt = palette.neutralSecondary;
    var inputIconAltHovered = palette.neutralPrimary;
    var inputBorderDisabled = palette.neutralLighter;
    var inputBackgroundHovered = palette.neutralLighter;
    var inputBackgroundDisabled = palette.neutralLighter;
    return {
        root: [
            classNames.root,
            fonts.medium,
            _Styling__WEBPACK_IMPORTED_MODULE_0__["normalize"],
            {
                color: semanticColors.inputText,
                backgroundColor: semanticColors.inputBackground,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                alignItems: 'stretch',
                // The 1px top and bottom padding ensure the input field does not overlap the border
                padding: '1px 0 1px 4px',
                borderRadius: effects.roundedCorner2,
                border: "1px solid " + semanticColors.inputBorder,
                height: 32,
                selectors: (_a = {},
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        borderColor: 'WindowText',
                    },
                    _a[':hover'] = {
                        borderColor: semanticColors.inputBorderHovered,
                        selectors: (_b = {},
                            _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                                borderColor: 'Highlight',
                            },
                            _b),
                    },
                    _a[":hover ." + classNames.iconContainer] = {
                        color: semanticColors.inputIconHovered,
                    },
                    _a),
            },
            !hasFocus &&
                hasInput && {
                selectors: (_c = {},
                    _c[":hover ." + classNames.iconContainer] = {
                        width: 4,
                    },
                    _c[":hover ." + classNames.icon] = {
                        opacity: 0,
                    },
                    _c),
            },
            hasFocus && [
                'is-active',
                {
                    position: 'relative',
                },
                Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getInputFocusStyle"])(semanticColors.inputFocusBorderAlt, underlined ? 0 : effects.roundedCorner2, underlined ? 'borderBottom' : 'border'),
            ],
            disabled && [
                'is-disabled',
                {
                    borderColor: inputBorderDisabled,
                    backgroundColor: inputBackgroundDisabled,
                    pointerEvents: 'none',
                    cursor: 'default',
                    selectors: (_d = {},
                        _d[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                            borderColor: 'GrayText',
                        },
                        _d),
                },
            ],
            underlined && [
                'is-underlined',
                {
                    borderWidth: '0 0 1px 0',
                    borderRadius: 0,
                    // Underlined SearchBox has a larger padding left to vertically align with the waffle in product
                    padding: '1px 0 1px 8px',
                },
            ],
            underlined &&
                disabled && {
                backgroundColor: 'transparent',
            },
            hasInput && 'can-clear',
            className,
        ],
        iconContainer: [
            classNames.iconContainer,
            {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: 16,
                width: 32,
                textAlign: 'center',
                color: semanticColors.inputIcon,
                cursor: 'text',
            },
            hasFocus && {
                width: 4,
            },
            disabled && {
                color: semanticColors.inputIconDisabled,
            },
            !disableAnimation && {
                transition: "width " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue1,
            },
        ],
        icon: [
            classNames.icon,
            {
                opacity: 1,
            },
            hasFocus && {
                opacity: 0,
            },
            !disableAnimation && {
                transition: "opacity " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue1 + " 0s",
            },
        ],
        clearButton: [
            classNames.clearButton,
            {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                cursor: 'pointer',
                flexBasis: '32px',
                flexShrink: 0,
                padding: 0,
                margin: '-1px 0px',
                selectors: {
                    '&:hover .ms-Button': {
                        backgroundColor: inputBackgroundHovered,
                    },
                    '&:hover .ms-Button-icon': {
                        color: inputIconAltHovered,
                    },
                    '.ms-Button': {
                        borderRadius: Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getRTL"])(theme) ? '1px 0 0 1px' : '0 1px 1px 0',
                    },
                    '.ms-Button-icon': {
                        color: inputIconAlt,
                    },
                },
            },
        ],
        field: [
            classNames.field,
            _Styling__WEBPACK_IMPORTED_MODULE_0__["normalize"],
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getPlaceholderStyles"])(placeholderStyles),
            {
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                fontWeight: 'inherit',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                color: semanticColors.inputText,
                flex: '1 1 0px',
                // The default implicit value of 'auto' prevents the input from shrinking. Setting min-width to
                // 0px allows the input element to shrink to fit the container.
                minWidth: '0px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                // This padding forces the text placement to round up.
                paddingBottom: 0.5,
                // This removes the IE specific clear button in the input since we implimented our own
                selectors: {
                    '::-ms-clear': {
                        display: 'none',
                    },
                },
            },
            disabled && {
                color: semanticColors.disabledText,
            },
        ],
    };
}
//# sourceMappingURL=SearchBox.styles.js.map

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "epn0":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Button.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Button.js


/***/ }),

/***/ "faye":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_faye__;

/***/ }),

/***/ "gS4/":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/SearchBox/SearchBox.base.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: SearchBoxBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxBase", function() { return SearchBoxBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Button */ "epn0");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Icon */ "56LG");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Icon__WEBPACK_IMPORTED_MODULE_4__);





var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var COMPONENT_NAME = 'SearchBox';
var SearchBoxBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SearchBoxBase, _super);
    function SearchBoxBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._inputElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onClickFocus = function () {
            var inputElement = _this._inputElement.current;
            if (inputElement) {
                _this.focus();
                inputElement.selectionStart = inputElement.selectionEnd = 0;
            }
        };
        _this._onFocusCapture = function (ev) {
            _this.setState({
                hasFocus: true,
            });
            if (_this.props.onFocus) {
                _this.props.onFocus(ev);
            }
        };
        _this._onClearClick = function (ev) {
            var clearButtonProps = _this.props.clearButtonProps;
            if (clearButtonProps && clearButtonProps.onClick) {
                clearButtonProps.onClick(ev);
            }
            if (!ev.defaultPrevented) {
                _this._onClear(ev);
            }
        };
        _this._onKeyDown = function (ev) {
            switch (ev.which) {
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].escape:
                    _this.props.onEscape && _this.props.onEscape(ev);
                    // Only call onClear if the search box has a value to clear. Otherwise, allow the Esc key
                    // to propagate from the empty search box to a parent element such as a dialog, etc.
                    if (_this.state.value && !ev.defaultPrevented) {
                        _this._onClear(ev);
                    }
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter:
                    if (_this.props.onSearch) {
                        _this.props.onSearch(_this.state.value);
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                    break;
                default:
                    _this.props.onKeyDown && _this.props.onKeyDown(ev);
                    if (ev.defaultPrevented) {
                        ev.stopPropagation();
                    }
                    break;
            }
        };
        _this._onBlur = function (ev) {
            _this.setState({
                hasFocus: false,
            });
            if (_this.props.onBlur) {
                _this.props.onBlur(ev);
            }
        };
        _this._onInputChange = function (ev) {
            var value = ev.target.value;
            if (value === _this._latestValue) {
                return;
            }
            _this._latestValue = value;
            _this.setState({ value: value });
            _this._callOnChange(ev, value);
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnDeprecations"])(COMPONENT_NAME, props, {
            labelText: 'placeholder',
            defaultValue: 'value',
        });
        _this._latestValue = props.value || '';
        _this._fallbackId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])(COMPONENT_NAME);
        _this.state = {
            value: _this._latestValue,
            hasFocus: false,
        };
        return _this;
    }
    SearchBoxBase.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
        if (newProps.value !== undefined) {
            this._latestValue = newProps.value;
            // If the user passes in null, substitute an empty string
            // (passing null is not allowed per typings, but users might do it anyway)
            this.setState({
                value: newProps.value || '',
            });
        }
    };
    SearchBoxBase.prototype.render = function () {
        var _a = this.props, ariaLabel = _a.ariaLabel, placeholder = _a.placeholder, className = _a.className, disabled = _a.disabled, underlined = _a.underlined, styles = _a.styles, 
        // eslint-disable-next-line deprecation/deprecation
        labelText = _a.labelText, theme = _a.theme, clearButtonProps = _a.clearButtonProps, disableAnimation = _a.disableAnimation, iconProps = _a.iconProps, role = _a.role, _b = _a.id, id = _b === void 0 ? this._fallbackId : _b;
        var _c = this.state, value = _c.value, hasFocus = _c.hasFocus;
        var placeholderValue = placeholder !== undefined ? placeholder : labelText;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            underlined: underlined,
            hasFocus: hasFocus,
            disabled: disabled,
            hasInput: value.length > 0,
            disableAnimation: disableAnimation,
        });
        var nativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["inputProperties"], [
            'className',
            'placeholder',
            'onFocus',
            'onBlur',
            'value',
            'role',
        ]);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: role, ref: this._rootElement, className: classNames.root, onFocusCapture: this._onFocusCapture },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.iconContainer, onClick: this._onClickFocus, "aria-hidden": true },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ iconName: "Search" }, iconProps, { className: classNames.icon }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, nativeProps, { id: id, className: classNames.field, placeholder: placeholderValue, onChange: this._onInputChange, onInput: this._onInputChange, onBlur: this._onBlur, onKeyDown: this._onKeyDown, value: value, disabled: disabled, role: "searchbox", "aria-label": ariaLabel, ref: this._inputElement })),
            value.length > 0 && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.clearButton },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_3__["IconButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ onBlur: this._onBlur, styles: { root: { height: 'auto' }, icon: { fontSize: '12px' } }, iconProps: { iconName: 'Clear' } }, clearButtonProps, { onClick: this._onClearClick }))))));
    };
    /**
     * Sets focus to the search box input field
     */
    SearchBoxBase.prototype.focus = function () {
        if (this._inputElement.current) {
            this._inputElement.current.focus();
        }
    };
    /**
     * Returns whether or not the SearchBox has focus
     */
    SearchBoxBase.prototype.hasFocus = function () {
        return !!this.state.hasFocus;
    };
    SearchBoxBase.prototype._onClear = function (ev) {
        this.props.onClear && this.props.onClear(ev);
        if (!ev.defaultPrevented) {
            this._latestValue = '';
            this.setState({
                value: '',
            });
            this._callOnChange(undefined, '');
            ev.stopPropagation();
            ev.preventDefault();
            this.focus();
        }
    };
    SearchBoxBase.prototype._callOnChange = function (ev, newValue) {
        // eslint-disable-next-line deprecation/deprecation
        var _a = this.props, onChange = _a.onChange, onChanged = _a.onChanged;
        // Call @deprecated method.
        if (onChanged) {
            onChanged(newValue);
        }
        if (onChange) {
            onChange(ev, newValue);
        }
    };
    SearchBoxBase.defaultProps = {
        disableAnimation: false,
        clearButtonProps: { ariaLabel: 'Clear text' },
    };
    return SearchBoxBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=SearchBox.base.js.map

/***/ }),

/***/ "ioxN":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Callout.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Callout.js


/***/ }),

/***/ "jOlS":
/*!************************************************!*\
  !*** external "@microsoft/load-themed-styles" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jOlS__;

/***/ }),

/***/ "kMLv":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/SearchBox/index.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: SearchBox, SearchBoxBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBox */ "Ldz5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBox", function() { return _SearchBox__WEBPACK_IMPORTED_MODULE_0__["SearchBox"]; });

/* harmony import */ var _SearchBox_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBox.base */ "gS4/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBoxBase", function() { return _SearchBox_base__WEBPACK_IMPORTED_MODULE_1__["SearchBoxBase"]; });



//# sourceMappingURL=index.js.map

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

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: _SPFlightInspector, _FlightViewer, _renderFlightViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SPFlightInspector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SPFlightInspector */ "ILup");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_SPFlightInspector", function() { return _SPFlightInspector__WEBPACK_IMPORTED_MODULE_0__["SPFlightInspector"]; });

/* harmony import */ var _FlightViewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlightViewer */ "LERl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_FlightViewer", function() { return _FlightViewer__WEBPACK_IMPORTED_MODULE_1__["FlightViewer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_renderFlightViewer", function() { return _FlightViewer__WEBPACK_IMPORTED_MODULE_1__["renderFlightViewer"]; });

/**
 * [YOUR SUMMARY GOES HERE.]
 *
 * @remarks
 * If you are using API Extractor for this library, the documentation in this comment
 * will be used for the entire package.
 *
 * @packagedocumentation
 */
// tslint:disable-next-line:export-name




/***/ }),

/***/ "u44x":
/*!******************************************************!*\
  !*** ./lib/FlightViewer/FlightViewer.module.scss.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./FlightViewer.module.css */ "x9vM");
var styles = {
    limitMaxSize: 'a_a_32ecaa5e',
    content: 'b_a_32ecaa5e',
    selected: 'c_a_32ecaa5e',
    vsoLink: 'e_a_32ecaa5e',
    searchBox: 'f_a_32ecaa5e',
    compareButtonWrapper: 'g_a_32ecaa5e',
    compareButton: 'h_a_32ecaa5e',
    cancelButton: 'i_a_32ecaa5e',
    compareCalloutContent: 'j_a_32ecaa5e',
    textarea: 'k_a_32ecaa5e',
    copyButton: 'l_a_32ecaa5e',
    commandBarWrapper: 'm_a_32ecaa5e',
    diffButton: 'n_a_32ecaa5e',
    expItem: 'o_a_32ecaa5e',
    myCell: 'p_a_32ecaa5e',
    theOtherCell: 'q_a_32ecaa5e',
    flexBox: 'r_a_32ecaa5e',
    flexItem: 's_a_32ecaa5e',
    cell: 't_a_32ecaa5e'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "v1cY":
/*!************************************!*\
  !*** ./lib/ExperimentUtilities.js ***!
  \************************************/
/*! exports provided: decodeAt, lookup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeAt", function() { return decodeAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookup", function() { return lookup; });
/**
 * Converts a single character in a base64-encoded (RFC 4648) message to the corresponding 6-bit integer value.
 * @param b64char - The single character to decode.
 * @returns The RFC 4648 integer interpretation of the given character, in the range [0,63].
 */
function ctoi(b64char) {
    var i = b64char.charCodeAt(0);
    if (i >= 65 && i <= 90) {
        return i - 65; // 'A'-'Z'
    }
    else if (i >= 97 && i <= 122) {
        return i - 71; // 'a'-'z'
    }
    else if (i >= 48 && i <= 57) {
        return i + 4; // '0'-'9'
    }
    else if (i === 43) {
        return 62; // '+'
    }
    else {
        return 63; // '/'
    }
}
/**
 * Finds the control code for the experiment at the given index, which specifies what should be displayed and what should be logged.
 * The data contract matches the encoding done on the server side in SPExperimentManager.cs.
 * @param b64 - The base64-encoded (RFC 4648) string containing bit-stuffed experiment data that was generated on the server.
 * @param index - The ordinal index of the experiment. This is equivalent to the experiment id minus the minimum experiment id.
 * @returns The four-bit control code (a number 0-15) for the given experiment. The semantics of this control code are defined
 * in the constructor.
 */
function decodeAt(b64, index) {
    /* Each b64 character represents 6 bits of information, whereas each control code contains 4 bits. Therefore, a b64 string with
     * n characters will contain 6n bits of information, which is used to represent (6n)/4 control codes. */
    var maxIndex = Math.floor((b64.length * 3) / 2) - 1;
    // experiments beyond maxIndex do not exist or are not turned on, so they are not sent to the client by design.
    if (index > maxIndex) {
        return 0;
    }
    // get the index of the first b64 character that contains information on the given experiment.
    var ilow = Math.floor((index / 3) * 2);
    /* Since each b64 character represents 6 bits of information, the 4-bit control code may be contained in the most or least
     * significant 4 out of 6 bits of a single character, or be split between two different characters. */
    // tslint:disable:no-bitwise
    switch (index % 3) {
        case 0:
            // leftmost 4 out of 6 bits
            return ctoi(b64[ilow]) >> 2;
        case 1:
            // rightmost 2 bits from first char; leftmost 2 bits from second char
            return ((ctoi(b64[ilow]) & 3) << 2) | (ctoi(b64[ilow + 1]) >> 4);
        case 2:
            // rightmost 4 out of 6 bits
            return ctoi(b64[ilow]) & 15;
    }
    // tslint:enable:no-bitwise
    return 0; // unreachable
}
/**
 * Looks up the variant value for the given experiment. If a variant value can not be encoded in the four-bit control sequence
 * (i.e. if it is 4 or greater), it will be stored in the lookup table instead. Each index of the lookup table corresponds to
 * a variant value, and the string at a specific index contains all the experiment ids that have been assigned that variant.
 * @param expDataLookup - The lookup table generated and encoded on the server.
 * @param adjId - The ordinal index of the experiment. This is equivalent to the experiment id minus the minimum experiment id.
 * @returns The assigned variant value for the given experiment.
 */
function lookup(expDataLookup, adjId) {
    // convert the adjusted experiment id to a three-digit base36 representation, then search for this value in the lookup table.
    var encodedId = adjId.toString(36);
    encodedId = Array(4 - encodedId.length).join('0') + encodedId; // workaround for padStart
    for (var arrayIndex = 0; arrayIndex < expDataLookup.length; arrayIndex++) {
        for (var stringIndex = 0; stringIndex < expDataLookup[arrayIndex].length - 2; stringIndex += 3) {
            if (expDataLookup[arrayIndex].substring(stringIndex, stringIndex + 3) === encodedId) {
                // an array index of 0 corresponds to a variant value of 4, 1 corresponds to 5, etc.
                return arrayIndex + 4;
            }
        }
    }
    return 0; // should be unreachable, but would likely be detected by SRM alerting if it was somehow executed
}


/***/ }),

/***/ "x9vM":
/*!**************************************************!*\
  !*** ./lib/FlightViewer/FlightViewer.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./FlightViewer.module.css */ "T9Qe");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ })

/******/ })});;
//# sourceMappingURL=sp-flight-inspector_none.js.map