define("6ff2150d-f5a7-4af8-a69a-ecf112dc2a90_0.1.0", ["tslib","@ms/uifabric-styling-bundle"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE_fglE__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "GvAj");
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

/***/ "2R51":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/fonts/DefaultFontStyles.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: DefaultFontStyles, registerDefaultFontFaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFontStyles", function() { return DefaultFontStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerDefaultFontFaces", function() { return registerDefaultFontFaces; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "7Xpn");
/* harmony import */ var _FluentFonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FluentFonts */ "myQz");
/* harmony import */ var _createFontStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createFontStyles */ "Qt/S");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_3__);




// Default urls.
var DefaultBaseUrl = 'https://static2.sharepointonline.com/files/fabric/assets';
// Standard font styling.
var DefaultFontStyles = Object(_createFontStyles__WEBPACK_IMPORTED_MODULE_2__["createFontStyles"])(Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_3__["getLanguage"])('sessionStorage'));
function _registerFontFace(fontFamily, url, fontWeight, localFontName) {
    fontFamily = "'" + fontFamily + "'";
    var localFontSrc = localFontName !== undefined ? "local('" + localFontName + "')," : '';
    Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["fontFace"])({
        fontFamily: fontFamily,
        src: localFontSrc + ("url('" + url + ".woff2') format('woff2'),") + ("url('" + url + ".woff') format('woff')"),
        fontWeight: fontWeight,
        fontStyle: 'normal',
        fontDisplay: 'swap',
    });
}
function _registerFontFaceSet(baseUrl, fontFamily, cdnFolder, cdnFontName, localFontName) {
    if (cdnFontName === void 0) { cdnFontName = 'segoeui'; }
    var urlBase = baseUrl + "/" + cdnFolder + "/" + cdnFontName;
    _registerFontFace(fontFamily, urlBase + '-light', _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].light, localFontName && localFontName + ' Light');
    _registerFontFace(fontFamily, urlBase + '-semilight', _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semilight, localFontName && localFontName + ' SemiLight');
    _registerFontFace(fontFamily, urlBase + '-regular', _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].regular, localFontName);
    _registerFontFace(fontFamily, urlBase + '-semibold', _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semibold, localFontName && localFontName + ' SemiBold');
    _registerFontFace(fontFamily, urlBase + '-bold', _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].bold, localFontName && localFontName + ' Bold');
}
function registerDefaultFontFaces(baseUrl) {
    if (baseUrl) {
        var fontUrl = baseUrl + "/fonts";
        // Produce @font-face definitions for all supported web fonts.
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Thai, 'leelawadeeui-thai', 'leelawadeeui');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Arabic, 'segoeui-arabic');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Cyrillic, 'segoeui-cyrillic');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].EastEuropean, 'segoeui-easteuropean');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Greek, 'segoeui-greek');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Hebrew, 'segoeui-hebrew');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Vietnamese, 'segoeui-vietnamese');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].WestEuropean, 'segoeui-westeuropean', 'segoeui', 'Segoe UI');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontFamilies"].Selawik, 'selawik', 'selawik');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Armenian, 'segoeui-armenian');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Georgian, 'segoeui-georgian');
        // Leelawadee UI (Thai) does not have a 'light' weight, so we override
        // the font-face generated above to use the 'semilight' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-semilight", _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].light);
        // Leelawadee UI (Thai) does not have a 'semibold' weight, so we override
        // the font-face generated above to use the 'bold' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-bold", _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semibold);
    }
}
/**
 * Reads the fontBaseUrl from window.FabricConfig.fontBaseUrl or falls back to a default.
 */
function _getFontBaseUrl() {
    var _a, _b, _c;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var fabricConfig = (_a = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_3__["getWindow"])()) === null || _a === void 0 ? void 0 : _a.FabricConfig;
    return _c = (_b = fabricConfig) === null || _b === void 0 ? void 0 : _b.fontBaseUrl, (_c !== null && _c !== void 0 ? _c : DefaultBaseUrl);
}
/**
 * Register the font faces.
 */
registerDefaultFontFaces(_getFontBaseUrl());
//# sourceMappingURL=DefaultFontStyles.js.map

/***/ }),

/***/ "7Xpn":
/*!**************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/merge-styles@7.19.1/node_modules/@uifabric/merge-styles/lib/index.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_uifabric_styling_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/uifabric-styling-bundle */ "fglE");
/* harmony import */ var _ms_uifabric_styling_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_uifabric_styling_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_uifabric_styling_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_uifabric_styling_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @uifabric/merge-styles/./lib/index.js


/***/ }),

/***/ "AtTn":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/utilities/makeSemanticColors.js ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: makeSemanticColors, getSemanticColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSemanticColors", function() { return makeSemanticColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSemanticColors", function() { return getSemanticColors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

/** Generates all the semantic slot colors based on the theme so far
 * We'll use these as fallbacks for semantic slots that the passed in theme did not define.
 * The caller must still mix in the customized semantic slots at the end.
 */
function makeSemanticColors(p, e, s, isInverted, depComments) {
    if (depComments === void 0) { depComments = false; }
    var semanticColors = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ primaryButtonBorder: 'transparent', errorText: !isInverted ? '#a4262c' : '#F1707B', messageText: !isInverted ? '#323130' : '#F3F2F1', messageLink: !isInverted ? '#005A9E' : '#6CB8F6', messageLinkHovered: !isInverted ? '#004578' : '#82C7FF', infoIcon: !isInverted ? '#605e5c' : '#C8C6C4', errorIcon: !isInverted ? '#A80000' : '#F1707B', blockingIcon: !isInverted ? '#FDE7E9' : '#442726', warningIcon: !isInverted ? '#797775' : '#C8C6C4', severeWarningIcon: !isInverted ? '#D83B01' : '#FCE100', successIcon: !isInverted ? '#107C10' : '#92C353', infoBackground: !isInverted ? '#f3f2f1' : '#323130', errorBackground: !isInverted ? '#FDE7E9' : '#442726', blockingBackground: !isInverted ? '#FDE7E9' : '#442726', warningBackground: !isInverted ? '#FFF4CE' : '#433519', severeWarningBackground: !isInverted ? '#FED9CC' : '#4F2A0F', successBackground: !isInverted ? '#DFF6DD' : '#393D1B', 
        // deprecated
        warningHighlight: !isInverted ? '#ffb900' : '#fff100', successText: !isInverted ? '#107C10' : '#92c353' }, s);
    var fullSemanticColors = getSemanticColors(p, e, semanticColors, isInverted);
    return _fixDeprecatedSlots(fullSemanticColors, depComments);
}
/**
 * Map partial platte and effects to partial semantic colors.
 */
function getSemanticColors(p, e, s, isInverted, depComments) {
    if (depComments === void 0) { depComments = false; }
    var _a, _b, _c;
    var result = {};
    // map palette
    var _d = p || {}, white = _d.white, black = _d.black, themePrimary = _d.themePrimary, themeDark = _d.themeDark, themeDarker = _d.themeDarker, themeDarkAlt = _d.themeDarkAlt, themeLighter = _d.themeLighter, neutralLight = _d.neutralLight, neutralLighter = _d.neutralLighter, neutralDark = _d.neutralDark, neutralQuaternary = _d.neutralQuaternary, neutralQuaternaryAlt = _d.neutralQuaternaryAlt, neutralPrimary = _d.neutralPrimary, neutralSecondary = _d.neutralSecondary, neutralSecondaryAlt = _d.neutralSecondaryAlt, neutralTertiary = _d.neutralTertiary, neutralTertiaryAlt = _d.neutralTertiaryAlt, neutralLighterAlt = _d.neutralLighterAlt, accent = _d.accent;
    if (white) {
        result.bodyBackground = white;
        result.bodyFrameBackground = white;
        result.accentButtonText = white;
        result.buttonBackground = white;
        result.primaryButtonText = white;
        result.primaryButtonTextHovered = white;
        result.primaryButtonTextPressed = white;
        result.inputBackground = white;
        result.inputForegroundChecked = white;
        result.listBackground = white;
        result.menuBackground = white;
        result.cardStandoutBackground = white;
    }
    if (black) {
        result.bodyTextChecked = black;
        result.buttonTextCheckedHovered = black;
    }
    if (themePrimary) {
        result.link = themePrimary;
        result.primaryButtonBackground = themePrimary;
        result.inputBackgroundChecked = themePrimary;
        result.inputIcon = themePrimary;
        result.inputFocusBorderAlt = themePrimary;
        result.menuIcon = themePrimary;
        result.menuHeader = themePrimary;
        result.accentButtonBackground = themePrimary;
    }
    if (themeDark) {
        result.primaryButtonBackgroundPressed = themeDark;
        result.inputBackgroundCheckedHovered = themeDark;
        result.inputIconHovered = themeDark;
    }
    if (themeDarker) {
        result.linkHovered = themeDarker;
    }
    if (themeDarkAlt) {
        result.primaryButtonBackgroundHovered = themeDarkAlt;
    }
    if (themeLighter) {
        result.inputPlaceholderBackgroundChecked = themeLighter;
    }
    if (neutralLight) {
        result.bodyBackgroundChecked = neutralLight;
        result.bodyFrameDivider = neutralLight;
        result.bodyDivider = neutralLight;
        result.variantBorder = neutralLight;
        result.buttonBackgroundCheckedHovered = neutralLight;
        result.buttonBackgroundPressed = neutralLight;
        result.listItemBackgroundChecked = neutralLight;
        result.listHeaderBackgroundPressed = neutralLight;
        result.menuItemBackgroundPressed = neutralLight;
        // eslint-disable-next-line deprecation/deprecation
        result.menuItemBackgroundChecked = neutralLight;
    }
    if (neutralLighter) {
        result.bodyBackgroundHovered = neutralLighter;
        result.buttonBackgroundHovered = neutralLighter;
        result.buttonBackgroundDisabled = neutralLighter;
        result.buttonBorderDisabled = neutralLighter;
        result.primaryButtonBackgroundDisabled = neutralLighter;
        result.disabledBackground = neutralLighter;
        result.listItemBackgroundHovered = neutralLighter;
        result.listHeaderBackgroundHovered = neutralLighter;
        result.menuItemBackgroundHovered = neutralLighter;
    }
    if (neutralQuaternary) {
        result.primaryButtonTextDisabled = neutralQuaternary;
        result.disabledSubtext = neutralQuaternary;
    }
    if (neutralQuaternaryAlt) {
        result.listItemBackgroundCheckedHovered = neutralQuaternaryAlt;
    }
    if (neutralTertiary) {
        result.disabledBodyText = neutralTertiary;
        result.variantBorderHovered = ((_a = s) === null || _a === void 0 ? void 0 : _a.variantBorderHovered) || neutralTertiary;
        result.buttonTextDisabled = neutralTertiary;
        result.inputIconDisabled = neutralTertiary;
        result.disabledText = neutralTertiary;
    }
    if (neutralPrimary) {
        result.bodyText = neutralPrimary;
        result.actionLink = neutralPrimary;
        result.buttonText = neutralPrimary;
        result.inputBorderHovered = neutralPrimary;
        result.inputText = neutralPrimary;
        result.listText = neutralPrimary;
        result.menuItemText = neutralPrimary;
    }
    if (neutralLighterAlt) {
        result.bodyStandoutBackground = neutralLighterAlt;
        result.defaultStateBackground = neutralLighterAlt;
    }
    if (neutralDark) {
        result.actionLinkHovered = neutralDark;
        result.buttonTextHovered = neutralDark;
        result.buttonTextChecked = neutralDark;
        result.buttonTextPressed = neutralDark;
        result.inputTextHovered = neutralDark;
        result.menuItemTextHovered = neutralDark;
    }
    if (neutralSecondary) {
        result.bodySubtext = neutralSecondary;
        result.focusBorder = neutralSecondary;
        result.inputBorder = neutralSecondary;
        result.smallInputBorder = neutralSecondary;
        result.inputPlaceholderText = neutralSecondary;
    }
    if (neutralSecondaryAlt) {
        result.buttonBorder = neutralSecondaryAlt;
    }
    if (neutralTertiaryAlt) {
        result.disabledBodySubtext = neutralTertiaryAlt;
        result.disabledBorder = neutralTertiaryAlt;
        result.buttonBackgroundChecked = neutralTertiaryAlt;
        result.menuDivider = neutralTertiaryAlt;
    }
    if (accent) {
        result.accentButtonBackground = accent;
    }
    // map effects
    if ((_b = e) === null || _b === void 0 ? void 0 : _b.elevation4) {
        result.cardShadow = e.elevation4;
    }
    if (!isInverted && ((_c = e) === null || _c === void 0 ? void 0 : _c.elevation8)) {
        result.cardShadowHovered = e.elevation8;
    }
    else if (result.variantBorderHovered) {
        result.cardShadowHovered = '0 0 1px ' + result.variantBorderHovered;
    }
    result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), s);
    return result;
}
function _fixDeprecatedSlots(s, depComments) {
    // Add @deprecated tag as comment if enabled
    var dep = '';
    if (depComments === true) {
        dep = ' /* @deprecated */';
    }
    /* eslint-disable deprecation/deprecation */
    s.listTextColor = s.listText + dep;
    s.menuItemBackgroundChecked += dep;
    s.warningHighlight += dep;
    s.warningText = s.messageText + dep;
    s.successText += dep;
    /* eslint-enable deprecation/deprecation */
    return s;
}
//# sourceMappingURL=makeSemanticColors.js.map

/***/ }),

/***/ "Edr4":
/*!*******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/variants@7.2.32_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/variants/lib/utilities.js ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: addVariants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVariants", function() { return addVariants; });
/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variants */ "kP+s");

/**
 * Add all variants to provided theme as elements of the theme's scheme property.
 * Any existing schemes will be overwritten.
 *
 * @export
 * @param {ITheme} theme Theme for which variants will be added.
 */
function addVariants(theme) {
    theme.schemes = {
        strong: Object(_variants__WEBPACK_IMPORTED_MODULE_0__["getStrongVariant"])(theme),
        soft: Object(_variants__WEBPACK_IMPORTED_MODULE_0__["getSoftVariant"])(theme),
        neutral: Object(_variants__WEBPACK_IMPORTED_MODULE_0__["getNeutralVariant"])(theme),
    };
}
//# sourceMappingURL=utilities.js.map

/***/ }),

/***/ "Eyzw":
/*!************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/set-version@7.0.23/node_modules/@uifabric/set-version/lib/index.js ***!
  \************************************************************************************************************************************/
/*! exports provided: setVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setVersion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setVersion */ "guqf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setVersion", function() { return _setVersion__WEBPACK_IMPORTED_MODULE_0__["setVersion"]; });



Object(_setVersion__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@uifabric/set-version', '6.0.0');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "GvAj":
/*!***************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/variants@7.2.32_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/variants/lib/index.js ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: addVariants, getVariant, getNeutralVariant, getSoftVariant, getStrongVariant, VariantThemeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "Edr4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addVariants", function() { return _utilities__WEBPACK_IMPORTED_MODULE_0__["addVariants"]; });

/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variants */ "kP+s");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVariant", function() { return _variants__WEBPACK_IMPORTED_MODULE_1__["getVariant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNeutralVariant", function() { return _variants__WEBPACK_IMPORTED_MODULE_1__["getNeutralVariant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSoftVariant", function() { return _variants__WEBPACK_IMPORTED_MODULE_1__["getSoftVariant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStrongVariant", function() { return _variants__WEBPACK_IMPORTED_MODULE_1__["getStrongVariant"]; });

/* harmony import */ var _variantThemeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variantThemeType */ "eZAW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VariantThemeType", function() { return _variantThemeType__WEBPACK_IMPORTED_MODULE_2__["VariantThemeType"]; });

/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./version */ "Mt9G");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "Hc29":
/*!***************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/colors/index.js ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: CommunicationColors, NeutralColors, SharedColors, DefaultPalette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FluentColors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FluentColors */ "xm5H");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommunicationColors", function() { return _FluentColors__WEBPACK_IMPORTED_MODULE_0__["CommunicationColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NeutralColors", function() { return _FluentColors__WEBPACK_IMPORTED_MODULE_0__["NeutralColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedColors", function() { return _FluentColors__WEBPACK_IMPORTED_MODULE_0__["SharedColors"]; });

/* harmony import */ var _DefaultPalette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultPalette */ "eA0L");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultPalette", function() { return _DefaultPalette__WEBPACK_IMPORTED_MODULE_1__["DefaultPalette"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "Hijz":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/effects/FluentDepths.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: Depths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Depths", function() { return Depths; });
var Depths;
(function (Depths) {
    Depths.depth0 = '0 0 0 0 transparent';
    Depths.depth4 = '0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth8 = '0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth16 = '0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth64 = '0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18)';
})(Depths || (Depths = {}));
//# sourceMappingURL=FluentDepths.js.map

/***/ }),

/***/ "Jfjl":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/motion/AnimationStyles.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: AnimationVariables, AnimationStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationVariables", function() { return AnimationVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationStyles", function() { return AnimationStyles; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "7Xpn");

/* Register the keyframes */
var EASING_FUNCTION_1 = 'cubic-bezier(.1,.9,.2,1)';
var EASING_FUNCTION_2 = 'cubic-bezier(.1,.25,.75,.9)';
var DURATION_1 = '0.167s';
var DURATION_2 = '0.267s';
var DURATION_3 = '0.367s';
var DURATION_4 = '0.467s';
var FADE_IN = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { opacity: 0 },
    to: { opacity: 1 },
});
var FADE_OUT = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { opacity: 1 },
    to: { opacity: 0, visibility: 'hidden' },
});
var SLIDE_RIGHT_IN10 = _createSlideInX(-10);
var SLIDE_RIGHT_IN20 = _createSlideInX(-20);
var SLIDE_RIGHT_IN40 = _createSlideInX(-40);
var SLIDE_RIGHT_IN400 = _createSlideInX(-400);
var SLIDE_LEFT_IN10 = _createSlideInX(10);
var SLIDE_LEFT_IN20 = _createSlideInX(20);
var SLIDE_LEFT_IN40 = _createSlideInX(40);
var SLIDE_LEFT_IN400 = _createSlideInX(400);
var SLIDE_UP_IN10 = _createSlideInY(10);
var SLIDE_UP_IN20 = _createSlideInY(20);
var SLIDE_DOWN_IN10 = _createSlideInY(-10);
var SLIDE_DOWN_IN20 = _createSlideInY(-20);
var SLIDE_RIGHT_OUT10 = _createSlideOutX(10);
var SLIDE_RIGHT_OUT20 = _createSlideOutX(20);
var SLIDE_RIGHT_OUT40 = _createSlideOutX(40);
var SLIDE_RIGHT_OUT400 = _createSlideOutX(400);
var SLIDE_LEFT_OUT10 = _createSlideOutX(-10);
var SLIDE_LEFT_OUT20 = _createSlideOutX(-20);
var SLIDE_LEFT_OUT40 = _createSlideOutX(-40);
var SLIDE_LEFT_OUT400 = _createSlideOutX(-400);
var SLIDE_UP_OUT10 = _createSlideOutY(-10);
var SLIDE_UP_OUT20 = _createSlideOutY(-20);
var SLIDE_DOWN_OUT10 = _createSlideOutY(10);
var SLIDE_DOWN_OUT20 = _createSlideOutY(20);
var SCALE_UP100 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(.98,.98,1)' },
    to: { transform: 'scale3d(1,1,1)' },
});
var SCALE_DOWN98 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(.98,.98,1)' },
});
var SCALE_DOWN100 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(1.03,1.03,1)' },
    to: { transform: 'scale3d(1,1,1)' },
});
var SCALE_UP103 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(1.03,1.03,1)' },
});
var ROTATE90 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(90deg)' },
});
var ROTATE_N90 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(-90deg)' },
});
/**
 * Exporting raw duraction values and easing functions to be used in custom animations
 */
var AnimationVariables = {
    easeFunction1: EASING_FUNCTION_1,
    easeFunction2: EASING_FUNCTION_2,
    durationValue1: DURATION_1,
    durationValue2: DURATION_2,
    durationValue3: DURATION_3,
    durationValue4: DURATION_4,
};
/**
 * All Fabric standard animations, exposed as json objects referencing predefined
 * keyframes. These objects can be mixed in with other class definitions.
 */
var AnimationStyles = {
    slideRightIn10: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideRightIn20: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightIn40: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideRightIn400: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn10: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn20: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn40: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn400: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideUpIn10: _createAnimation(FADE_IN + "," + SLIDE_UP_IN10, DURATION_3, EASING_FUNCTION_1),
    slideUpIn20: _createAnimation(FADE_IN + "," + SLIDE_UP_IN20, DURATION_3, EASING_FUNCTION_1),
    slideDownIn10: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN10, DURATION_3, EASING_FUNCTION_1),
    slideDownIn20: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut10: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideRightOut20: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut40: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideRightOut400: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut10: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut20: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut40: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut400: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideUpOut10: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideUpOut20: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideDownOut10: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideDownOut20: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT20, DURATION_3, EASING_FUNCTION_1),
    scaleUpIn100: _createAnimation(FADE_IN + "," + SCALE_UP100, DURATION_3, EASING_FUNCTION_1),
    scaleDownIn100: _createAnimation(FADE_IN + "," + SCALE_DOWN100, DURATION_3, EASING_FUNCTION_1),
    scaleUpOut103: _createAnimation(FADE_OUT + "," + SCALE_UP103, DURATION_1, EASING_FUNCTION_2),
    scaleDownOut98: _createAnimation(FADE_OUT + "," + SCALE_DOWN98, DURATION_1, EASING_FUNCTION_2),
    fadeIn100: _createAnimation(FADE_IN, DURATION_1, EASING_FUNCTION_2),
    fadeIn200: _createAnimation(FADE_IN, DURATION_2, EASING_FUNCTION_2),
    fadeIn400: _createAnimation(FADE_IN, DURATION_3, EASING_FUNCTION_2),
    fadeIn500: _createAnimation(FADE_IN, DURATION_4, EASING_FUNCTION_2),
    fadeOut100: _createAnimation(FADE_OUT, DURATION_1, EASING_FUNCTION_2),
    fadeOut200: _createAnimation(FADE_OUT, DURATION_2, EASING_FUNCTION_2),
    fadeOut400: _createAnimation(FADE_OUT, DURATION_3, EASING_FUNCTION_2),
    fadeOut500: _createAnimation(FADE_OUT, DURATION_4, EASING_FUNCTION_2),
    rotate90deg: _createAnimation(ROTATE90, '0.1s', EASING_FUNCTION_2),
    rotateN90deg: _createAnimation(ROTATE_N90, '0.1s', EASING_FUNCTION_2),
};
function _createAnimation(animationName, animationDuration, animationTimingFunction) {
    return {
        animationName: animationName,
        animationDuration: animationDuration,
        animationTimingFunction: animationTimingFunction,
        animationFillMode: 'both',
    };
}
function _createSlideInX(fromX) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        from: { transform: "translate3d(" + fromX + "px,0,0)", pointerEvents: 'none' },
        to: { transform: "translate3d(0,0,0)", pointerEvents: 'auto' },
    });
}
function _createSlideInY(fromY) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        from: { transform: "translate3d(0," + fromY + "px,0)", pointerEvents: 'none' },
        to: { transform: "translate3d(0,0,0)", pointerEvents: 'auto' },
    });
}
function _createSlideOutX(toX) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(" + toX + "px,0,0)" },
    });
}
function _createSlideOutY(toY) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(0," + toY + "px,0)" },
    });
}
//# sourceMappingURL=AnimationStyles.js.map

/***/ }),

/***/ "KVvR":
/*!**************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/mergeThemes.js ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: mergeThemes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeThemes", function() { return mergeThemes; });
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/makeSemanticColors */ "AtTn");


/**
 * Merge a partial/full theme into a full theme and returns a merged full theme.
 */
function mergeThemes(theme, partialTheme) {
    if (partialTheme === void 0) { partialTheme = {}; }
    var _a, _b, _c, _d;
    var mergedTheme = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, theme, partialTheme, {
        semanticColors: Object(_utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_1__["getSemanticColors"])(partialTheme.palette, partialTheme.effects, partialTheme.semanticColors, partialTheme.isInverted === undefined ? theme.isInverted : partialTheme.isInverted),
    });
    if (((_a = partialTheme.palette) === null || _a === void 0 ? void 0 : _a.themePrimary) && !((_b = partialTheme.palette) === null || _b === void 0 ? void 0 : _b.accent)) {
        mergedTheme.palette.accent = partialTheme.palette.themePrimary;
    }
    if (partialTheme.defaultFontStyle) {
        for (var _i = 0, _e = Object.keys(mergedTheme.fonts); _i < _e.length; _i++) {
            var fontStyle = _e[_i];
            mergedTheme.fonts[fontStyle] = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["merge"])(mergedTheme.fonts[fontStyle], partialTheme.defaultFontStyle, (_d = (_c = partialTheme) === null || _c === void 0 ? void 0 : _c.fonts) === null || _d === void 0 ? void 0 : _d[fontStyle]);
        }
    }
    if (partialTheme.stylesheets) {
        mergedTheme.stylesheets = (theme.stylesheets || []).concat(partialTheme.stylesheets);
    }
    return mergedTheme;
}
//# sourceMappingURL=mergeThemes.js.map

/***/ }),

/***/ "Mt9G":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/variants@7.2.32_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/variants/lib/version.js ***!
  \*****************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/set-version */ "Eyzw");
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.

Object(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@uifabric/variants', '7.2.31');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "P2cQ":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/index.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @uifabric/utilities/./lib/index.js
var pkg = __webpack_require__(/*! @ms/uifabric-styling-bundle */ "fglE");
module.exports = pkg._Utilities;

/***/ }),

/***/ "Qt/S":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/fonts/createFontStyles.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: createFontStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFontStyles", function() { return createFontStyles; });
/* harmony import */ var _FluentFonts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FluentFonts */ "myQz");

// Fallback fonts, if specified system or web fonts are unavailable.
var FontFamilyFallbacks = "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif";
// By default, we favor system fonts for the default.
// All localized fonts use a web font and never use the system font.
var defaultFontFamily = "'Segoe UI', '" + _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontNames"].WestEuropean + "'";
// Mapping of language prefix to to font family.
var LanguageToFontMap = {
    ar: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Arabic,
    bg: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Cyrillic,
    cs: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    el: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Greek,
    et: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    he: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Hebrew,
    hi: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Hindi,
    hr: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    hu: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    ja: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Japanese,
    kk: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    ko: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Korean,
    lt: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    lv: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    pl: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    ru: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Cyrillic,
    sk: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    'sr-latn': _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    th: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Thai,
    tr: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    uk: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Cyrillic,
    vi: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Vietnamese,
    'zh-hans': _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].ChineseSimplified,
    'zh-hant': _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].ChineseTraditional,
    hy: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Armenian,
    ka: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Georgian,
};
function _fontFamilyWithFallbacks(fontFamily) {
    return fontFamily + ", " + FontFamilyFallbacks;
}
/**
 * If there is a localized font for this language, return that.
 * Returns undefined if there is no localized font for that language.
 */
function _getLocalizedFontFamily(language) {
    for (var lang in LanguageToFontMap) {
        if (LanguageToFontMap.hasOwnProperty(lang) && language && lang.indexOf(language) === 0) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return LanguageToFontMap[lang];
        }
    }
    return defaultFontFamily;
}
function _createFont(size, weight, fontFamily) {
    return {
        fontFamily: fontFamily,
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        fontSize: size,
        fontWeight: weight,
    };
}
function createFontStyles(localeCode) {
    var localizedFont = _getLocalizedFontFamily(localeCode);
    var fontFamilyWithFallback = _fontFamilyWithFallbacks(localizedFont);
    var fontStyles = {
        tiny: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].mini, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular, fontFamilyWithFallback),
        xSmall: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].xSmall, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular, fontFamilyWithFallback),
        small: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].small, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular, fontFamilyWithFallback),
        smallPlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].smallPlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular, fontFamilyWithFallback),
        medium: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].medium, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular, fontFamilyWithFallback),
        mediumPlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].mediumPlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular, fontFamilyWithFallback),
        large: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].large, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular, fontFamilyWithFallback),
        xLarge: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].xLarge, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold, fontFamilyWithFallback),
        xLargePlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].xLargePlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold, fontFamilyWithFallback),
        xxLarge: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].xxLarge, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold, fontFamilyWithFallback),
        xxLargePlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].xxLargePlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold, fontFamilyWithFallback),
        superLarge: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].superLarge, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold, fontFamilyWithFallback),
        mega: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].mega, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold, fontFamilyWithFallback),
    };
    return fontStyles;
}
//# sourceMappingURL=createFontStyles.js.map

/***/ }),

/***/ "T0TP":
/*!****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/effects/index.js ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: DefaultEffects, Depths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DefaultEffects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultEffects */ "Y12E");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultEffects", function() { return _DefaultEffects__WEBPACK_IMPORTED_MODULE_0__["DefaultEffects"]; });

/* harmony import */ var _FluentDepths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FluentDepths */ "Hijz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Depths", function() { return _FluentDepths__WEBPACK_IMPORTED_MODULE_1__["Depths"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "TE9+":
/*!**************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/FluentTheme.js ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: FluentTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FluentTheme", function() { return FluentTheme; });
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTheme */ "y4VG");

var FluentTheme = Object(_createTheme__WEBPACK_IMPORTED_MODULE_0__["createTheme"])({});
//# sourceMappingURL=FluentTheme.js.map

/***/ }),

/***/ "Y12E":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/effects/DefaultEffects.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: DefaultEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultEffects", function() { return DefaultEffects; });
/* harmony import */ var _FluentDepths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FluentDepths */ "Hijz");

var DefaultEffects = {
    elevation4: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__["Depths"].depth4,
    elevation8: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__["Depths"].depth8,
    elevation16: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__["Depths"].depth16,
    elevation64: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__["Depths"].depth64,
    roundedCorner2: '2px',
    roundedCorner4: '4px',
    roundedCorner6: '6px',
};
//# sourceMappingURL=DefaultEffects.js.map

/***/ }),

/***/ "eA0L":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/colors/DefaultPalette.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: DefaultPalette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPalette", function() { return DefaultPalette; });
// When adding or removing a color, make sure you keep this consistent with IColorClassNames
// by adding the color variants.
var DefaultPalette = {
    themeDarker: '#004578',
    themeDark: '#005a9e',
    themeDarkAlt: '#106ebe',
    themePrimary: '#0078d4',
    themeSecondary: '#2b88d8',
    themeTertiary: '#71afe5',
    themeLight: '#c7e0f4',
    themeLighter: '#deecf9',
    themeLighterAlt: '#eff6fc',
    black: '#000000',
    blackTranslucent40: 'rgba(0,0,0,.4)',
    neutralDark: '#201f1e',
    neutralPrimary: '#323130',
    neutralPrimaryAlt: '#3b3a39',
    neutralSecondary: '#605e5c',
    neutralSecondaryAlt: '#8a8886',
    neutralTertiary: '#a19f9d',
    neutralTertiaryAlt: '#c8c6c4',
    neutralQuaternary: '#d2d0ce',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralLight: '#edebe9',
    neutralLighter: '#f3f2f1',
    neutralLighterAlt: '#faf9f8',
    accent: '#0078d4',
    white: '#ffffff',
    whiteTranslucent40: 'rgba(255,255,255,.4)',
    yellowDark: '#d29200',
    yellow: '#ffb900',
    yellowLight: '#fff100',
    orange: '#d83b01',
    orangeLight: '#ea4300',
    orangeLighter: '#ff8c00',
    redDark: '#a4262c',
    red: '#e81123',
    magentaDark: '#5c005c',
    magenta: '#b4009e',
    magentaLight: '#e3008c',
    purpleDark: '#32145a',
    purple: '#5c2d91',
    purpleLight: '#b4a0ff',
    blueDark: '#002050',
    blueMid: '#00188f',
    blue: '#0078d4',
    blueLight: '#00bcf2',
    tealDark: '#004b50',
    teal: '#008272',
    tealLight: '#00b294',
    greenDark: '#004b1c',
    green: '#107c10',
    greenLight: '#bad80a',
};
//# sourceMappingURL=DefaultPalette.js.map

/***/ }),

/***/ "eZAW":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/variants@7.2.32_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/variants/lib/variantThemeType.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: VariantThemeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantThemeType", function() { return VariantThemeType; });
/**
 * Variant theme types values
 *
 * @public
 */
var VariantThemeType = {
    /*
     * No variant.
     */
    None: 0,
    /*
     * A variant where the background is a soft version of the background color. Most other colors remain unchanged.
     */
    Neutral: 1,
    /*
     * A variant where the background is a soft version of the primary color. Most other colors remain unchanged.
     */
    Soft: 2,
    /*
     * A variant where the background is a strong version of the primary color. All colors change.
     * The background becomes shades of the primary color.
     * The foreground/text becomes shades of the background color.
     * The primary color becomes shades of the background.
     */
    Strong: 3,
};
//# sourceMappingURL=variantThemeType.js.map

/***/ }),

/***/ "fglE":
/*!**********************************************!*\
  !*** external "@ms/uifabric-styling-bundle" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fglE__;

/***/ }),

/***/ "g1LM":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/spacing/DefaultSpacing.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: DefaultSpacing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSpacing", function() { return DefaultSpacing; });
var DefaultSpacing = {
    s2: '4px',
    s1: '8px',
    m: '16px',
    l1: '20px',
    l2: '32px',
};
//# sourceMappingURL=DefaultSpacing.js.map

/***/ }),

/***/ "guqf":
/*!*****************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/set-version@7.0.23/node_modules/@uifabric/set-version/lib/setVersion.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: setVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVersion", function() { return setVersion; });
// A packages cache that makes sure that we don't inject the same packageName twice in the same bundle -
// this cache is local to the module closure inside this bundle
var packagesCache = {};
// Cache access to window to avoid IE11 memory leak.
var _win = undefined;
try {
    _win = window;
}
catch (e) {
    /* no-op */
}
function setVersion(packageName, packageVersion) {
    if (typeof _win !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var packages = (_win.__packages__ = _win.__packages__ || {});
        // We allow either the global packages or local packages caches to invalidate so testing can
        // just clear the global to set this state
        if (!packages[packageName] || !packagesCache[packageName]) {
            packagesCache[packageName] = packageVersion;
            var versions = (packages[packageName] = packages[packageName] || []);
            versions.push(packageVersion);
        }
    }
}
//# sourceMappingURL=setVersion.js.map

/***/ }),

/***/ "hTVl":
/*!**************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/fonts/index.js ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: LocalizedFontNames, LocalizedFontFamilies, FontSizes, FontWeights, IconFontSizes, createFontStyles, DefaultFontStyles, registerDefaultFontFaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FluentFonts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FluentFonts */ "myQz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontNames", function() { return _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontFamilies", function() { return _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizes", function() { return _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontWeights", function() { return _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconFontSizes", function() { return _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["IconFontSizes"]; });

/* harmony import */ var _createFontStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createFontStyles */ "Qt/S");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFontStyles", function() { return _createFontStyles__WEBPACK_IMPORTED_MODULE_1__["createFontStyles"]; });

/* harmony import */ var _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultFontStyles */ "2R51");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFontStyles", function() { return _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_2__["DefaultFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerDefaultFontFaces", function() { return _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_2__["registerDefaultFontFaces"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "kP+s":
/*!******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/variants@7.2.32_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/variants/lib/variants.js ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: getVariant, getNeutralVariant, getSoftVariant, getStrongVariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVariant", function() { return getVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNeutralVariant", function() { return getNeutralVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSoftVariant", function() { return getSoftVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStrongVariant", function() { return getStrongVariant; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/theme */ "pi7T");
/* harmony import */ var _variantThemeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variantThemeType */ "eZAW");



function makeThemeFromPartials(originalTheme, partialPalette, partialSemantic) {
    // Create variant palette
    var variantTheme = Object(_fluentui_theme__WEBPACK_IMPORTED_MODULE_1__["createTheme"])({ palette: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, originalTheme.palette), partialPalette) });
    // Change semantic colors to use updated variant palette values
    variantTheme.semanticColors = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, variantTheme.semanticColors), partialSemantic);
    // Fill in the rest of the theme
    variantTheme = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, originalTheme), { palette: variantTheme.palette, semanticColors: variantTheme.semanticColors });
    return variantTheme;
}
/**
 * Returns the specified variant theme for the given theme.
 * Do not generate a variant from a variant, the results will be ugly.
 *
 * @export
 * @param {IPartialTheme} theme the theme to build a variant for
 * @param {VariantThemeType} variant the variant type designation
 * @returns {ITheme} the variant theme
 */
function getVariant(theme, variant) {
    switch (variant) {
        case _variantThemeType__WEBPACK_IMPORTED_MODULE_2__["VariantThemeType"].Neutral:
            return getNeutralVariant(theme);
        case _variantThemeType__WEBPACK_IMPORTED_MODULE_2__["VariantThemeType"].Soft:
            return getSoftVariant(theme);
        case _variantThemeType__WEBPACK_IMPORTED_MODULE_2__["VariantThemeType"].Strong:
            return getStrongVariant(theme);
        default:
            return Object(_fluentui_theme__WEBPACK_IMPORTED_MODULE_1__["createTheme"])(theme);
    }
}
/**
 * A variant where the background is a soft shade of the neutral color. Most other colors remain unchanged.
 *
 * @export
 * @param {IPartialTheme} theme the theme to build a variant for
 * @returns {ITheme} the variant theme
 */
function getNeutralVariant(theme) {
    var fullTheme = Object(_fluentui_theme__WEBPACK_IMPORTED_MODULE_1__["createTheme"])(theme);
    var p = fullTheme.palette;
    // commented lines are unchanged, but left in for tracking purposes
    // in a neutral variant, most colors remain unchanged
    var partialPalette = {
        // theme - shifts a shade stronger to account for contrast against stronger background
        // themeDarker: '#004578', // can't go darker, stays the same
        themeDark: p.themeDarker,
        themeDarkAlt: p.themeDark,
        themePrimary: p.themeDarkAlt,
        themeSecondary: p.themePrimary,
        themeTertiary: p.themeSecondary,
        themeLight: p.themeTertiary,
        themeLighter: p.themeLight,
        themeLighterAlt: p.themeLighterAlt,
        // foregrounds
        // black: '#000000',
        // neutralDark: '#212121',
        // neutralPrimary: '#333333',
        // neutralPrimaryAlt: '#3c3c3c',
        // neutralSecondary: '#666666',
        // neutralTertiary: '#a6a6a6',
        // backgrounds - background is still the same scale, just squish it a bit
        // neutralTertiaryAlt: '#c8c8c8',
        neutralQuaternary: p.neutralTertiaryAlt,
        neutralQuaternaryAlt: p.neutralQuaternary,
        neutralLight: p.neutralQuaternaryAlt,
        neutralLighter: p.neutralLight,
        neutralLighterAlt: p.neutralLight,
        white: p.neutralLighter,
    };
    var partialSemantic = {
        bodyBackground: p.neutralLighter,
        bodyStandoutBackground: p.neutralLight,
        bodyFrameBackground: !fullTheme.isInverted ? p.neutralLight : p.neutralLighter,
        bodyFrameDivider: !fullTheme.isInverted ? p.neutralLight : p.neutralQuaternaryAlt,
        bodyText: p.neutralPrimary,
        bodySubtext: p.neutralSecondary,
        bodyDivider: p.neutralQuaternaryAlt,
        focusBorder: p.neutralSecondary,
        variantBorder: p.neutralLight,
        variantBorderHovered: p.neutralTertiary,
        defaultStateBackground: p.neutralLight,
        actionLink: p.neutralPrimary,
        actionLinkHovered: p.neutralDark,
        link: p.themeDarkAlt,
        linkHovered: p.themeDarker,
        disabledBackground: !fullTheme.isInverted ? p.neutralLight : p.neutralLighter,
        disabledText: p.neutralTertiary,
        disabledBodyText: p.neutralTertiary,
        disabledBodySubtext: p.neutralTertiaryAlt,
        inputBorder: p.neutralTertiary,
        inputBorderHovered: p.neutralPrimary,
        inputBackground: p.white,
        inputFocusBorderAlt: p.themePrimary,
        inputText: p.neutralPrimary,
        inputTextHovered: p.neutralDark,
        inputPlaceholderText: p.neutralSecondary,
        buttonBackground: p.neutralQuaternaryAlt,
        buttonBackgroundHovered: p.neutralQuaternary,
        buttonBackgroundPressed: !fullTheme.isInverted ? p.neutralTertiary : p.neutralTertiaryAlt,
        buttonBackgroundDisabled: p.neutralLight,
        buttonBorder: p.neutralSecondaryAlt,
        buttonText: p.neutralPrimary,
        buttonTextHovered: p.neutralDark,
        buttonTextPressed: p.neutralDark,
        buttonTextDisabled: !fullTheme.isInverted ? p.neutralTertiary : p.neutralTertiaryAlt,
        buttonBorderDisabled: p.neutralLighter,
        primaryButtonBackground: p.themePrimary,
        primaryButtonBackgroundHovered: p.themeDarkAlt,
        primaryButtonBackgroundPressed: p.themeDark,
        primaryButtonBorder: 'transparent',
        primaryButtonText: p.white,
        primaryButtonTextHovered: p.white,
        primaryButtonTextPressed: p.white,
        accentButtonBackground: p.accent,
        accentButtonText: p.white,
        menuBackground: p.white,
        menuDivider: p.neutralTertiaryAlt,
        menuItemBackgroundHovered: p.neutralLighter,
        menuItemBackgroundPressed: p.neutralLight,
        menuItemText: p.neutralPrimary,
        menuItemTextHovered: !fullTheme.isInverted ? p.neutralDark : p.neutralPrimary,
    };
    return makeThemeFromPartials(fullTheme, partialPalette, partialSemantic);
}
/**
 * A variant where the background is a soft version of the primary color. Most other colors remain unchanged.
 *
 * @export
 * @param {IPartialTheme} theme the theme to build a variant for
 * @returns {ITheme} the variant theme
 */
function getSoftVariant(theme) {
    var fullTheme = Object(_fluentui_theme__WEBPACK_IMPORTED_MODULE_1__["createTheme"])(theme);
    var p = fullTheme.palette;
    // commented lines are unchanged, but left in for tracking purposes
    // in a soft variant, most colors remain unchanged
    var partialPalette = {
        // theme - shifts a shade stronger to account for contrast against stronger background
        // themeDarker: '#004578', // can't go darker, stays the same
        themeDark: p.themeDarker,
        themeDarkAlt: p.themeDark,
        themePrimary: p.themeDarkAlt,
        themeSecondary: p.themePrimary,
        themeTertiary: p.themeSecondary,
        themeLight: p.themeTertiary,
        themeLighter: p.themeLight,
        themeLighterAlt: p.themeLighter,
        // foregrounds
        // black: '#000000',
        // neutralDark: '#212121',
        // neutralPrimary: '#333333',
        // neutralPrimaryAlt: '#3c3c3c',
        // neutralSecondary: '#666666',
        // neutralTertiary: '#a6a6a6',
        // backgrounds - page background starts at themeLighterAlt or themeLight, depending on inverted theme or not,
        // then gets steps stronger from there
        neutralTertiaryAlt: !fullTheme.isInverted ? p.themeDarkAlt : p.themeDarker,
        neutralQuaternary: !fullTheme.isInverted ? p.themePrimary : p.themeDark,
        neutralQuaternaryAlt: !fullTheme.isInverted ? p.themeSecondary : p.themeDarkAlt,
        neutralLight: !fullTheme.isInverted ? p.themeTertiary : p.themePrimary,
        neutralLighter: !fullTheme.isInverted ? p.themeLight : p.themeSecondary,
        neutralLighterAlt: !fullTheme.isInverted ? p.themeLighter : p.themeTertiary,
        white: !fullTheme.isInverted ? p.themeLighterAlt : p.themeLight,
    };
    var partialSemantic = {
        bodyBackground: !fullTheme.isInverted ? p.themeLighterAlt : p.themeLight,
        bodyStandoutBackground: !fullTheme.isInverted ? p.themeLighter : p.themeTertiary,
        bodyFrameBackground: !fullTheme.isInverted ? p.themeLighter : p.themeLight,
        bodyFrameDivider: !fullTheme.isInverted ? p.themeLighter : p.neutralQuaternary,
        bodyText: p.neutralPrimary,
        bodySubtext: p.neutralSecondary,
        bodyDivider: p.neutralQuaternaryAlt,
        inputBorder: p.neutralTertiary,
        // inputBorderHovered: p.neutralPrimary,
        inputBackground: p.white,
        // inputBackgroundChecked: p.themePrimary,
        // inputBackgroundCheckedHovered: p.themeDarkAlt,
        inputForegroundChecked: p.themeLighter,
        // inputFocusBorderAlt: p.themePrimary,
        inputText: p.neutralPrimary,
        inputTextHovered: p.neutralDark,
        inputPlaceholderText: p.neutralSecondary,
        focusBorder: p.neutralSecondary,
        variantBorder: p.neutralLight,
        variantBorderHovered: p.neutralTertiary,
        defaultStateBackground: p.neutralLight,
        actionLink: p.neutralPrimary,
        actionLinkHovered: p.neutralDark,
        link: p.themeDarkAlt,
        linkHovered: p.themeDarker,
        disabledBackground: p.neutralLight,
        disabledText: p.neutralTertiary,
        disabledBodyText: p.neutralTertiary,
        disabledBodySubtext: p.neutralTertiaryAlt,
        buttonBackground: p.neutralQuaternaryAlt,
        buttonBackgroundHovered: p.neutralQuaternary,
        buttonBackgroundPressed: !fullTheme.isInverted ? p.neutralTertiary : p.neutralTertiaryAlt,
        buttonBackgroundDisabled: p.neutralLight,
        buttonBorder: 'transparent',
        buttonText: p.neutralPrimary,
        buttonTextHovered: p.neutralDark,
        buttonTextPressed: p.neutralDark,
        buttonTextDisabled: !fullTheme.isInverted ? p.neutralTertiary : p.neutralTertiaryAlt,
        buttonBorderDisabled: 'transparent',
        primaryButtonBackground: p.themePrimary,
        primaryButtonBackgroundHovered: p.themeDarkAlt,
        primaryButtonBackgroundPressed: p.themeDark,
        primaryButtonBorder: 'transparent',
        primaryButtonText: p.white,
        primaryButtonTextHovered: p.white,
        primaryButtonTextPressed: p.white,
        accentButtonBackground: p.accent,
        accentButtonText: p.white,
        menuBackground: p.white,
        menuDivider: p.neutralTertiaryAlt,
        menuItemBackgroundHovered: p.neutralLighter,
        menuItemBackgroundPressed: p.neutralLight,
        menuItemText: p.neutralPrimary,
        menuItemTextHovered: !fullTheme.isInverted ? p.neutralDark : p.neutralPrimary,
    };
    return makeThemeFromPartials(fullTheme, partialPalette, partialSemantic);
}
/**
 * A variant where the background is a strong version of the primary color. All colors change.
 * The background becomes shades of the primary color.
 * The foreground/text becomes shades of the background color.
 * The primary color becomes shades of the background.
 *
 * @export
 * @param {IPartialTheme} theme the theme to build a variant for
 * @returns {ITheme} the variant theme
 */
function getStrongVariant(theme) {
    var fullTheme = Object(_fluentui_theme__WEBPACK_IMPORTED_MODULE_1__["createTheme"])(theme);
    var p = fullTheme.palette;
    // dirty algorithm:
    // in a tricolor theme, foreground doesn't get used?
    // theme colors -> background shades
    // foregrounds -> background shades
    // backgrounds -> theme colors
    var partialPalette = {
        // theme
        themeDarker: p.white,
        themeDark: p.neutralLighterAlt,
        themeDarkAlt: p.neutralLighterAlt,
        themePrimary: p.white,
        themeSecondary: p.neutralLighter,
        themeTertiary: p.neutralLight,
        themeLight: p.neutralQuaternaryAlt,
        themeLighter: p.neutralQuaternary,
        themeLighterAlt: p.neutralTertiaryAlt,
        // foregrounds
        black: p.neutralLighterAlt,
        neutralDark: p.neutralLighter,
        neutralPrimary: p.white,
        neutralPrimaryAlt: p.neutralLight,
        neutralSecondary: p.neutralQuaternaryAlt,
        neutralTertiary: p.neutralQuaternary,
        // backgrounds
        neutralTertiaryAlt: p.themeLighterAlt,
        neutralQuaternary: p.themeLighterAlt,
        neutralQuaternaryAlt: p.themeLighter,
        neutralLight: p.themeLight,
        neutralLighter: p.themeTertiary,
        neutralLighterAlt: p.themeSecondary,
        white: p.themePrimary,
    };
    var partialSemantic = {
        bodyBackground: p.themePrimary,
        bodyStandoutBackground: p.themeDarkAlt,
        bodyFrameBackground: !fullTheme.isInverted ? p.themeDarkAlt : p.themePrimary,
        bodyFrameDivider: !fullTheme.isInverted ? p.themeDarkAlt : p.themeTertiary,
        bodyText: p.white,
        bodySubtext: p.white,
        bodyDivider: p.themeTertiary,
        inputBorder: p.themeDarkAlt,
        inputBorderHovered: p.themeDarker,
        inputBackground: p.white,
        inputBackgroundChecked: p.white,
        inputBackgroundCheckedHovered: p.themePrimary,
        inputForegroundChecked: p.themeDark,
        inputFocusBorderAlt: p.themeTertiary,
        inputText: p.neutralPrimary,
        inputTextHovered: p.neutralDark,
        inputPlaceholderText: p.neutralSecondary,
        focusBorder: p.white,
        variantBorder: p.themeDarkAlt,
        variantBorderHovered: p.themeDarker,
        defaultStateBackground: p.neutralLighterAlt,
        actionLink: p.white,
        actionLinkHovered: p.white,
        link: p.white,
        linkHovered: p.white,
        disabledBackground: p.themeDarkAlt,
        disabledText: p.themeTertiary,
        disabledBodyText: p.neutralQuaternary,
        disabledBodySubtext: p.neutralTertiaryAlt,
        buttonBackground: p.themePrimary,
        buttonBackgroundHovered: p.themeDarkAlt,
        buttonBackgroundPressed: p.themeDark,
        buttonBackgroundDisabled: !fullTheme.isInverted ? p.themeLighter : p.themeLight,
        buttonBorder: p.white,
        buttonText: p.white,
        buttonTextHovered: p.white,
        buttonTextPressed: p.white,
        buttonTextDisabled: p.themeTertiary,
        buttonBorderDisabled: 'transparent',
        primaryButtonBackground: p.white,
        primaryButtonBackgroundHovered: !fullTheme.isInverted ? p.themeLighter : p.themeLight,
        primaryButtonBackgroundPressed: !fullTheme.isInverted ? p.themeLight : p.themeTertiary,
        primaryButtonBorder: 'transparent',
        primaryButtonText: !fullTheme.isInverted ? p.themePrimary : p.neutralPrimary,
        primaryButtonTextHovered: !fullTheme.isInverted ? p.themeDark : p.neutralDark,
        primaryButtonTextPressed: !fullTheme.isInverted ? p.themeDark : p.neutralDark,
        accentButtonBackground: p.white,
        accentButtonText: !fullTheme.isInverted ? p.themePrimary : p.neutralPrimary,
        menuBackground: p.themePrimary,
        menuDivider: p.neutralTertiaryAlt,
        menuItemBackgroundHovered: p.themeTertiary,
        menuItemBackgroundPressed: p.themeLight,
        menuItemText: p.neutralPrimary,
        menuItemTextHovered: !fullTheme.isInverted ? p.neutralLighter : p.white,
    };
    // Strong variant is unique here, we've redefined the entire palette and are
    // effectively inverting the theme. Thus, do not mix in the original theme's value
    // for the palette and semanticColors, since they will not work well "inverted",
    // instead, use the new palette and then generate semanticColors from scratch.
    // Create variant palette
    var variantTheme = Object(_fluentui_theme__WEBPACK_IMPORTED_MODULE_1__["createTheme"])({ palette: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fullTheme.palette), partialPalette) });
    // Change semantic colors to use updated variant palette values
    variantTheme.semanticColors = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, variantTheme.semanticColors), partialSemantic);
    // Fill in the rest of the theme
    variantTheme = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fullTheme), { palette: variantTheme.palette, semanticColors: variantTheme.semanticColors, isInverted: !fullTheme.isInverted });
    return variantTheme;
}
//# sourceMappingURL=variants.js.map

/***/ }),

/***/ "myQz":
/*!********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/fonts/FluentFonts.js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: LocalizedFontNames, LocalizedFontFamilies, FontSizes, FontWeights, IconFontSizes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontNames", function() { return LocalizedFontNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontFamilies", function() { return LocalizedFontFamilies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontSizes", function() { return FontSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontWeights", function() { return FontWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconFontSizes", function() { return IconFontSizes; });
// Font face names to be registered.
var LocalizedFontNames;
(function (LocalizedFontNames) {
    LocalizedFontNames.Arabic = 'Segoe UI Web (Arabic)';
    LocalizedFontNames.Cyrillic = 'Segoe UI Web (Cyrillic)';
    LocalizedFontNames.EastEuropean = 'Segoe UI Web (East European)';
    LocalizedFontNames.Greek = 'Segoe UI Web (Greek)';
    LocalizedFontNames.Hebrew = 'Segoe UI Web (Hebrew)';
    LocalizedFontNames.Thai = 'Leelawadee UI Web';
    LocalizedFontNames.Vietnamese = 'Segoe UI Web (Vietnamese)';
    LocalizedFontNames.WestEuropean = 'Segoe UI Web (West European)';
    LocalizedFontNames.Selawik = 'Selawik Web';
    LocalizedFontNames.Armenian = 'Segoe UI Web (Armenian)';
    LocalizedFontNames.Georgian = 'Segoe UI Web (Georgian)';
})(LocalizedFontNames || (LocalizedFontNames = {}));
// Font families with fallbacks, for the general regions.
var LocalizedFontFamilies;
(function (LocalizedFontFamilies) {
    LocalizedFontFamilies.Arabic = "'" + LocalizedFontNames.Arabic + "'";
    LocalizedFontFamilies.ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun";
    LocalizedFontFamilies.ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu";
    LocalizedFontFamilies.Cyrillic = "'" + LocalizedFontNames.Cyrillic + "'";
    LocalizedFontFamilies.EastEuropean = "'" + LocalizedFontNames.EastEuropean + "'";
    LocalizedFontFamilies.Greek = "'" + LocalizedFontNames.Greek + "'";
    LocalizedFontFamilies.Hebrew = "'" + LocalizedFontNames.Hebrew + "'";
    LocalizedFontFamilies.Hindi = "'Nirmala UI'";
    LocalizedFontFamilies.Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka";
    LocalizedFontFamilies.Korean = "'Malgun Gothic', Gulim";
    LocalizedFontFamilies.Selawik = "'" + LocalizedFontNames.Selawik + "'";
    LocalizedFontFamilies.Thai = "'Leelawadee UI Web', 'Kmer UI'";
    LocalizedFontFamilies.Vietnamese = "'" + LocalizedFontNames.Vietnamese + "'";
    LocalizedFontFamilies.WestEuropean = "'" + LocalizedFontNames.WestEuropean + "'";
    LocalizedFontFamilies.Armenian = "'" + LocalizedFontNames.Armenian + "'";
    LocalizedFontFamilies.Georgian = "'" + LocalizedFontNames.Georgian + "'";
})(LocalizedFontFamilies || (LocalizedFontFamilies = {}));
// Standard font sizes.
var FontSizes;
(function (FontSizes) {
    FontSizes.size10 = '10px';
    FontSizes.size12 = '12px';
    FontSizes.size14 = '14px';
    FontSizes.size16 = '16px';
    FontSizes.size18 = '18px';
    FontSizes.size20 = '20px';
    FontSizes.size24 = '24px';
    FontSizes.size28 = '28px';
    FontSizes.size32 = '32px';
    FontSizes.size42 = '42px';
    FontSizes.size68 = '68px';
    FontSizes.mini = '10px';
    FontSizes.xSmall = '10px';
    FontSizes.small = '12px';
    FontSizes.smallPlus = '12px';
    FontSizes.medium = '14px';
    FontSizes.mediumPlus = '16px';
    FontSizes.icon = '16px';
    FontSizes.large = '18px';
    FontSizes.xLarge = '20px';
    FontSizes.xLargePlus = '24px';
    FontSizes.xxLarge = '28px';
    FontSizes.xxLargePlus = '32px';
    FontSizes.superLarge = '42px';
    FontSizes.mega = '68px';
})(FontSizes || (FontSizes = {}));
// Standard font weights.
var FontWeights;
(function (FontWeights) {
    FontWeights.light = 100;
    FontWeights.semilight = 300;
    FontWeights.regular = 400;
    FontWeights.semibold = 600;
    FontWeights.bold = 700;
})(FontWeights || (FontWeights = {}));
// Standard Icon Sizes.
var IconFontSizes;
(function (IconFontSizes) {
    IconFontSizes.xSmall = '10px';
    IconFontSizes.small = '12px';
    IconFontSizes.medium = '16px';
    IconFontSizes.large = '20px';
})(IconFontSizes || (IconFontSizes = {}));
//# sourceMappingURL=FluentFonts.js.map

/***/ }),

/***/ "pD7+":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/motion/FluentMotion.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: MotionDurations, MotionTimings, MotionAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionDurations", function() { return MotionDurations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionTimings", function() { return MotionTimings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionAnimations", function() { return MotionAnimations; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "7Xpn");

var fadeInAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { opacity: 0 },
    to: { opacity: 1 },
});
var fadeOutAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { opacity: 1 },
    to: { opacity: 0 },
});
var scaleDownInAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(1.15, 1.15, 1)' },
    to: { transform: 'scale3d(1, 1, 1)' },
});
var scaleDownOutAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(1, 1, 1)' },
    to: { transform: 'scale3d(0.9, 0.9, 1)' },
});
var slideLeftOutAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'translate3d(0, 0, 0)' },
    to: { transform: 'translate3d(-48px, 0, 0)' },
});
var slideRightOutAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'translate3d(0, 0, 0)' },
    to: { transform: 'translate3d(48px, 0, 0)' },
});
var slideLeftInAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'translate3d(48px, 0, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' },
});
var slideRightInAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'translate3d(-48px, 0, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' },
});
var slideUpOutAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'translate3d(0, 0, 0)' },
    to: { transform: 'translate3d(0, -48px, 0)' },
});
var slideDownOutAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'translate3d(0, 0, 0)' },
    to: { transform: 'translate3d(0, 48px, 0)' },
});
var slideUpInAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'translate3d(0, 48px, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' },
});
var slideDownInAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'translate3d(0, -48px, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' },
});
var MotionDurations;
(function (MotionDurations) {
    MotionDurations.duration1 = '100ms';
    MotionDurations.duration2 = '200ms';
    MotionDurations.duration3 = '300ms';
    MotionDurations.duration4 = '400ms';
})(MotionDurations || (MotionDurations = {}));
var MotionTimings;
(function (MotionTimings) {
    MotionTimings.accelerate = 'cubic-bezier(0.9, 0.1, 1, 0.2)';
    MotionTimings.decelerate = 'cubic-bezier(0.1, 0.9, 0.2, 1)';
    MotionTimings.linear = 'cubic-bezier(0, 0, 1, 1)';
    MotionTimings.standard = 'cubic-bezier(0.8, 0, 0.2, 1)';
})(MotionTimings || (MotionTimings = {}));
function _createAnimation(animationName, animationDuration, animationTimingFunction) {
    return animationName + " " + animationDuration + " " + animationTimingFunction;
}
var MotionAnimations;
(function (MotionAnimations) {
    MotionAnimations.fadeIn = _createAnimation(fadeInAnimationName, MotionDurations.duration1, MotionTimings.linear);
    MotionAnimations.fadeOut = _createAnimation(fadeOutAnimationName, MotionDurations.duration1, MotionTimings.linear);
    MotionAnimations.scaleDownIn = _createAnimation(scaleDownInAnimationName, MotionDurations.duration3, MotionTimings.decelerate);
    MotionAnimations.scaleDownOut = _createAnimation(scaleDownOutAnimationName, MotionDurations.duration3, MotionTimings.decelerate);
    MotionAnimations.slideLeftOut = _createAnimation(slideLeftOutAnimationName, MotionDurations.duration1, MotionTimings.accelerate);
    MotionAnimations.slideRightOut = _createAnimation(slideRightOutAnimationName, MotionDurations.duration1, MotionTimings.accelerate);
    MotionAnimations.slideLeftIn = _createAnimation(slideLeftInAnimationName, MotionDurations.duration1, MotionTimings.decelerate);
    MotionAnimations.slideRightIn = _createAnimation(slideRightInAnimationName, MotionDurations.duration1, MotionTimings.decelerate);
    MotionAnimations.slideUpOut = _createAnimation(slideUpOutAnimationName, MotionDurations.duration1, MotionTimings.accelerate);
    MotionAnimations.slideDownOut = _createAnimation(slideDownOutAnimationName, MotionDurations.duration1, MotionTimings.accelerate);
    MotionAnimations.slideUpIn = _createAnimation(slideUpInAnimationName, MotionDurations.duration1, MotionTimings.decelerate);
    MotionAnimations.slideDownIn = _createAnimation(slideDownInAnimationName, MotionDurations.duration1, MotionTimings.decelerate);
})(MotionAnimations || (MotionAnimations = {}));
//# sourceMappingURL=FluentMotion.js.map

/***/ }),

/***/ "pi7T":
/*!********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/index.js ***!
  \********************************************************************************************************************************************************/
/*! exports provided: mergeThemes, CommunicationColors, NeutralColors, SharedColors, DefaultPalette, DefaultEffects, Depths, DefaultSpacing, MotionDurations, MotionTimings, MotionAnimations, AnimationVariables, AnimationStyles, LocalizedFontNames, LocalizedFontFamilies, FontSizes, FontWeights, IconFontSizes, createFontStyles, DefaultFontStyles, registerDefaultFontFaces, createTheme, FluentTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mergeThemes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeThemes */ "KVvR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeThemes", function() { return _mergeThemes__WEBPACK_IMPORTED_MODULE_0__["mergeThemes"]; });

/* harmony import */ var _colors_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors/index */ "Hc29");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommunicationColors", function() { return _colors_index__WEBPACK_IMPORTED_MODULE_1__["CommunicationColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NeutralColors", function() { return _colors_index__WEBPACK_IMPORTED_MODULE_1__["NeutralColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedColors", function() { return _colors_index__WEBPACK_IMPORTED_MODULE_1__["SharedColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultPalette", function() { return _colors_index__WEBPACK_IMPORTED_MODULE_1__["DefaultPalette"]; });

/* harmony import */ var _effects_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effects/index */ "T0TP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultEffects", function() { return _effects_index__WEBPACK_IMPORTED_MODULE_2__["DefaultEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Depths", function() { return _effects_index__WEBPACK_IMPORTED_MODULE_2__["Depths"]; });

/* harmony import */ var _spacing_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spacing/index */ "ypqo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultSpacing", function() { return _spacing_index__WEBPACK_IMPORTED_MODULE_3__["DefaultSpacing"]; });

/* harmony import */ var _motion_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./motion/index */ "xcst");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionDurations", function() { return _motion_index__WEBPACK_IMPORTED_MODULE_4__["MotionDurations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionTimings", function() { return _motion_index__WEBPACK_IMPORTED_MODULE_4__["MotionTimings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionAnimations", function() { return _motion_index__WEBPACK_IMPORTED_MODULE_4__["MotionAnimations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationVariables", function() { return _motion_index__WEBPACK_IMPORTED_MODULE_4__["AnimationVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationStyles", function() { return _motion_index__WEBPACK_IMPORTED_MODULE_4__["AnimationStyles"]; });

/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fonts/index */ "hTVl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontNames", function() { return _fonts_index__WEBPACK_IMPORTED_MODULE_5__["LocalizedFontNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontFamilies", function() { return _fonts_index__WEBPACK_IMPORTED_MODULE_5__["LocalizedFontFamilies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizes", function() { return _fonts_index__WEBPACK_IMPORTED_MODULE_5__["FontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontWeights", function() { return _fonts_index__WEBPACK_IMPORTED_MODULE_5__["FontWeights"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconFontSizes", function() { return _fonts_index__WEBPACK_IMPORTED_MODULE_5__["IconFontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFontStyles", function() { return _fonts_index__WEBPACK_IMPORTED_MODULE_5__["createFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFontStyles", function() { return _fonts_index__WEBPACK_IMPORTED_MODULE_5__["DefaultFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerDefaultFontFaces", function() { return _fonts_index__WEBPACK_IMPORTED_MODULE_5__["registerDefaultFontFaces"]; });

/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createTheme */ "y4VG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTheme", function() { return _createTheme__WEBPACK_IMPORTED_MODULE_6__["createTheme"]; });

/* harmony import */ var _FluentTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FluentTheme */ "TE9+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FluentTheme", function() { return _FluentTheme__WEBPACK_IMPORTED_MODULE_7__["FluentTheme"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "xcst":
/*!***************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/motion/index.js ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: MotionDurations, MotionTimings, MotionAnimations, AnimationVariables, AnimationStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FluentMotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FluentMotion */ "pD7+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionDurations", function() { return _FluentMotion__WEBPACK_IMPORTED_MODULE_0__["MotionDurations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionTimings", function() { return _FluentMotion__WEBPACK_IMPORTED_MODULE_0__["MotionTimings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionAnimations", function() { return _FluentMotion__WEBPACK_IMPORTED_MODULE_0__["MotionAnimations"]; });

/* harmony import */ var _AnimationStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationStyles */ "Jfjl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationVariables", function() { return _AnimationStyles__WEBPACK_IMPORTED_MODULE_1__["AnimationVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationStyles", function() { return _AnimationStyles__WEBPACK_IMPORTED_MODULE_1__["AnimationStyles"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "xm5H":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/colors/FluentColors.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: CommunicationColors, NeutralColors, SharedColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationColors", function() { return CommunicationColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeutralColors", function() { return NeutralColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedColors", function() { return SharedColors; });
var CommunicationColors;
(function (CommunicationColors) {
    CommunicationColors.shade30 = '#004578';
    CommunicationColors.shade20 = '#005a9e';
    CommunicationColors.shade10 = '#106ebe';
    CommunicationColors.primary = '#0078d4';
    CommunicationColors.tint10 = '#2b88d8';
    CommunicationColors.tint20 = '#c7e0f4';
    CommunicationColors.tint30 = '#deecf9';
    CommunicationColors.tint40 = '#eff6fc';
})(CommunicationColors || (CommunicationColors = {}));
var NeutralColors;
(function (NeutralColors) {
    NeutralColors.black = '#000000';
    NeutralColors.gray220 = '#11100f';
    NeutralColors.gray210 = '#161514';
    NeutralColors.gray200 = '#1b1a19';
    NeutralColors.gray190 = '#201f1e';
    NeutralColors.gray180 = '#252423';
    NeutralColors.gray170 = '#292827';
    NeutralColors.gray160 = '#323130';
    NeutralColors.gray150 = '#3b3a39';
    NeutralColors.gray140 = '#484644';
    NeutralColors.gray130 = '#605e5c';
    NeutralColors.gray120 = '#797775';
    NeutralColors.gray110 = '#8a8886';
    NeutralColors.gray100 = '#979593';
    NeutralColors.gray90 = '#a19f9d';
    NeutralColors.gray80 = '#b3b0ad';
    NeutralColors.gray70 = '#bebbb8';
    NeutralColors.gray60 = '#c8c6c4';
    NeutralColors.gray50 = '#d2d0ce';
    NeutralColors.gray40 = '#e1dfdd';
    NeutralColors.gray30 = '#edebe9';
    NeutralColors.gray20 = '#f3f2f1';
    NeutralColors.gray10 = '#faf9f8';
    NeutralColors.white = '#ffffff';
})(NeutralColors || (NeutralColors = {}));
var SharedColors;
(function (SharedColors) {
    SharedColors.pinkRed10 = '#750b1c';
    SharedColors.red20 = '#a4262c';
    SharedColors.red10 = '#d13438';
    SharedColors.redOrange20 = '#603d30';
    SharedColors.redOrange10 = '#da3b01';
    SharedColors.orange30 = '#8e562e';
    SharedColors.orange20 = '#ca5010';
    SharedColors.orange10 = '#ffaa44';
    SharedColors.yellow10 = '#fce100';
    SharedColors.orangeYellow20 = '#986f0b';
    SharedColors.orangeYellow10 = '#c19c00';
    SharedColors.yellowGreen10 = '#8cbd18';
    SharedColors.green20 = '#0b6a0b';
    SharedColors.green10 = '#498205';
    SharedColors.greenCyan10 = '#00ad56';
    SharedColors.cyan40 = '#005e50';
    SharedColors.cyan30 = '#005b70';
    SharedColors.cyan20 = '#038387';
    SharedColors.cyan10 = '#00b7c3';
    SharedColors.cyanBlue20 = '#004e8c';
    SharedColors.cyanBlue10 = '#0078d4';
    SharedColors.blue10 = '#4f6bed';
    SharedColors.blueMagenta40 = '#373277';
    SharedColors.blueMagenta30 = '#5c2e91';
    SharedColors.blueMagenta20 = '#8764b8';
    SharedColors.blueMagenta10 = '#8378de';
    SharedColors.magenta20 = '#881798';
    SharedColors.magenta10 = '#c239b3';
    SharedColors.magentaPink20 = '#9b0062';
    SharedColors.magentaPink10 = '#e3008c';
    SharedColors.gray40 = '#393939';
    SharedColors.gray30 = '#7a7574';
    SharedColors.gray20 = '#69797e';
    SharedColors.gray10 = '#a0aeb2';
})(SharedColors || (SharedColors = {}));
//# sourceMappingURL=FluentColors.js.map

/***/ }),

/***/ "y4VG":
/*!**************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/createTheme.js ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: createTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTheme", function() { return createTheme; });
/* harmony import */ var _colors_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors/index */ "Hc29");
/* harmony import */ var _effects_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects/index */ "T0TP");
/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts/index */ "hTVl");
/* harmony import */ var _mergeThemes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mergeThemes */ "KVvR");
/* harmony import */ var _spacing_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spacing/index */ "ypqo");
/* harmony import */ var _utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/makeSemanticColors */ "AtTn");






/**
 * Creates a custom theme definition.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function createTheme(theme, depComments) {
    if (theme === void 0) { theme = {}; }
    if (depComments === void 0) { depComments = false; }
    var isInverted = !!theme.isInverted;
    var baseTheme = {
        palette: _colors_index__WEBPACK_IMPORTED_MODULE_0__["DefaultPalette"],
        effects: _effects_index__WEBPACK_IMPORTED_MODULE_1__["DefaultEffects"],
        fonts: _fonts_index__WEBPACK_IMPORTED_MODULE_2__["DefaultFontStyles"],
        spacing: _spacing_index__WEBPACK_IMPORTED_MODULE_4__["DefaultSpacing"],
        isInverted: isInverted,
        disableGlobalClassNames: false,
        semanticColors: Object(_utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_5__["makeSemanticColors"])(_colors_index__WEBPACK_IMPORTED_MODULE_0__["DefaultPalette"], _effects_index__WEBPACK_IMPORTED_MODULE_1__["DefaultEffects"], undefined, isInverted, depComments),
        rtl: undefined,
    };
    return Object(_mergeThemes__WEBPACK_IMPORTED_MODULE_3__["mergeThemes"])(baseTheme, theme);
}
//# sourceMappingURL=createTheme.js.map

/***/ }),

/***/ "ypqo":
/*!****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/spacing/index.js ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: DefaultSpacing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DefaultSpacing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultSpacing */ "g1LM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultSpacing", function() { return _DefaultSpacing__WEBPACK_IMPORTED_MODULE_0__["DefaultSpacing"]; });


//# sourceMappingURL=index.js.map

/***/ })

/******/ })});;
//# sourceMappingURL=uifabric-variants-bundle_none.js.map