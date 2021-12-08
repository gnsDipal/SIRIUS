define("3fbad3f4-a628-41b0-8694-2054c09edccd_1.0.3", ["tslib","@ms/sp-telemetry","@microsoft/sp-loader","@microsoft/office-ui-fabric-react-bundle","@microsoft/sp-lodash-subset","@ms/sp-webpart-shared","@microsoft/sp-core-library","@microsoft/sp-page-context","react","@ms/sp-component-utilities","@microsoft/load-themed-styles","@microsoft/sp-diagnostics","@microsoft/sp-http","@ms/odsp-utilities-bundle"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE__2q6Q__, __WEBPACK_EXTERNAL_MODULE_I6O9__, __WEBPACK_EXTERNAL_MODULE_KL1q__, __WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_U4ag__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_X_PM__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_hiL___, __WEBPACK_EXTERNAL_MODULE_jOlS__, __WEBPACK_EXTERNAL_MODULE_ut3N__, __WEBPACK_EXTERNAL_MODULE_vlQI__, __WEBPACK_EXTERNAL_MODULE_y88i__) { return /******/ (function(modules) { // webpackBootstrap
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

/***/ "/bDD":
/*!********************************************!*\
  !*** ./lib/HtmlValidator/HtmlValidator.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file HTMLValidator.ts
 */
var HtmlValidator = /** @class */ (function () {
    function HtmlValidator() {
    }
    HtmlValidator.prototype.validate = function (vanillaHtml) {
        var _this = this;
        return this._internalValidate(vanillaHtml)
            .then(function (validateResult) {
            if (!validateResult.isValid && _this._successorValidator) {
                return _this._successorValidator._internalValidate(vanillaHtml);
            }
            return validateResult;
        })
            .catch(function (result) { return result; });
    };
    HtmlValidator.prototype.setSuccessorValidator = function (successorValidator) {
        this._successorValidator = successorValidator;
    };
    return HtmlValidator;
}());
/* harmony default export */ __webpack_exports__["default"] = (HtmlValidator);


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

/***/ "3THY":
/*!**************************!*\
  !*** ./lib/HTMLEmbed.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _EmbeddableService_IEmbeddableService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EmbeddableService/IEmbeddableService */ "pQyg");
/* harmony import */ var _HtmlGenerator_HtmlGeneratorFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HtmlGenerator/HtmlGeneratorFactory */ "s9io");
/* harmony import */ var _HTMLEmbed_Props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HTMLEmbed.Props */ "eVr9");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loc/Strings.resx */ "mGD9");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "mGD9", 1);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file HTMLEmbed.tsx
 */









/**
 * A client side webpart to embed some code on a page.
 */
var HTMLEmbed = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HTMLEmbed, _super);
    function HTMLEmbed(props) {
        var _this = _super.call(this, props) || this;
        _this._createHtmlEmbedDivRef = function (element) {
            _this._htmlEmbedDivDom = element;
            if (_this._shouldFocus && !_this.state.isValidating) {
                _this.focus();
                _this._shouldFocus = false;
            }
        };
        _this.state = {
            isValidating: true,
            errorMessage: ''
        };
        _this._setBoundingRectFromProps();
        _this._operationId = 0;
        if (_this.props.embeddableService) {
            _this.props.embedDataSource.embedDataProvider.embeddableService = _this.props.embeddableService;
        }
        _this._shouldFocus = false;
        _this._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_LogSource"].create('HTMLEmbed');
        return _this;
    }
    HTMLEmbed._isSameEmbedDataSource = function (embedDataSource, nextEmbedDataSource) {
        if (embedDataSource.type === _HTMLEmbed_Props__WEBPACK_IMPORTED_MODULE_7__["EmbedDataSourceType"].DataProvider &&
            nextEmbedDataSource.type === _HTMLEmbed_Props__WEBPACK_IMPORTED_MODULE_7__["EmbedDataSourceType"].DataProvider) {
            return (Object(_EmbeddableService_IEmbeddableService__WEBPACK_IMPORTED_MODULE_5__["getEmbedServiceClassName"])(embedDataSource.embedDataProvider.embeddableService) ===
                Object(_EmbeddableService_IEmbeddableService__WEBPACK_IMPORTED_MODULE_5__["getEmbedServiceClassName"])(nextEmbedDataSource.embedDataProvider.embeddableService));
        }
        else if (embedDataSource.type !== nextEmbedDataSource.type) {
            return false;
        }
        else {
            return _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["isEqual"](embedDataSource.embedServiceResult, nextEmbedDataSource.embedServiceResult);
        }
    };
    HTMLEmbed.prototype.getErrorMessage = function () {
        return this.state.errorMessage;
    };
    HTMLEmbed.prototype.getMetadata = function () {
        return this._urlMetadata;
    };
    HTMLEmbed.prototype.UNSAFE_componentWillMount = function () {
        if (this._boundingRect) {
            this._startValidation(this.props);
        }
    };
    HTMLEmbed.prototype.componentDidMount = function () {
        if (this._boundingRect) {
            return;
        }
        var currentBoundingRect = this._getCurrentBoundingRect();
        if (!currentBoundingRect) {
            return;
        }
        if (currentBoundingRect.width <= 0 && currentBoundingRect.height <= 0) {
            return this._setErrorMessageAndNotify(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["HTMLEmbedBoundingRectZero"]);
        }
        this._boundingRect = currentBoundingRect;
        this._startValidation(this.props);
    };
    HTMLEmbed.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (this._boundingRect &&
            (!HTMLEmbed._isSameEmbedDataSource(this.props.embedDataSource, nextProps.embedDataSource) ||
                this.props.embedCode.embedCode !== nextProps.embedCode.embedCode)) {
            this._startValidation(nextProps);
        }
        if (this.props.isNarrowContainer !== nextProps.isNarrowContainer && this._htmlGenerator) {
            this._htmlGenerator.setMobileMode(nextProps.isNarrowContainer);
        }
        if (this.props.variantTheme !== nextProps.variantTheme && this._htmlGenerator) {
            this._htmlGenerator.setVariantTheme(nextProps.variantTheme);
        }
        if (this.props.altText !== nextProps.altText && this._htmlGenerator) {
            this._htmlGenerator.setAltText(nextProps.altText);
        }
        if (this._htmlGenerator &&
            this.props.boundingRect &&
            nextProps.boundingRect &&
            (this.props.boundingRect.height !== nextProps.boundingRect.height ||
                this.props.boundingRect.width !== nextProps.boundingRect.width)) {
            this._htmlGenerator.setContainerRect(nextProps.boundingRect);
            this._setBoundingRectFromProps(nextProps);
        }
    };
    HTMLEmbed.prototype.componentDidUpdate = function () {
        if (this._boundingRect) {
            return;
        }
        var currentBoundingRect = this._getCurrentBoundingRect();
        if (!currentBoundingRect || (currentBoundingRect.width <= 0 && currentBoundingRect.height <= 0)) {
            return;
        }
        if (currentBoundingRect.width !== this._boundingRect.width) {
            this._boundingRect = currentBoundingRect;
            this._startValidation(this.props);
        }
    };
    /**
     * Main entry point, called by the ClientSideWebPart Manager. Loads the webpart's DOM manipulation.
     * @return {JSX.Element} The filled in react element.
     */
    HTMLEmbed.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._createHtmlEmbedDivRef }, this.state.isValidating
            ? this._renderLoadingIndicator()
            : this.state.errorMessage || !this._htmlGenerator
                ? this._renderError()
                : this._htmlGenerator.createHtmlElement()));
    };
    HTMLEmbed.prototype.focus = function () {
        if (this._htmlGenerator) {
            if (this.state.isValidating) {
                // When doing validation _htmlGenerator hasn't preview content yet, so we shouldn't set focus on it.
                // So we cache the focus requirement first, when done validation, we will set focus on the _htmlGenerator.
                this._shouldFocus = true;
            }
            else {
                this._htmlGenerator.focus();
            }
        }
    };
    HTMLEmbed.prototype._validate = function (htmlGeneratorProps, nextProps) {
        var _this = this;
        // Change Thunmbnail to use media service generated one.
        if (htmlGeneratorProps.metadata) {
            var currentWebAbsoluteUrl = this._getWebUrlFromPreviewUrl(htmlGeneratorProps.metadata.Thumbnail);
            if (currentWebAbsoluteUrl &&
                htmlGeneratorProps.metadata.ListId &&
                htmlGeneratorProps.metadata.SiteId &&
                htmlGeneratorProps.metadata.UniqueId &&
                htmlGeneratorProps.metadata.WebId) {
                var currentBoundingRect = this._getCurrentBoundingRect();
                var request = {
                    absoluteUrl: currentWebAbsoluteUrl,
                    siteId: htmlGeneratorProps.metadata.SiteId,
                    webId: htmlGeneratorProps.metadata.WebId,
                    listId: htmlGeneratorProps.metadata.ListId,
                    uniqueId: htmlGeneratorProps.metadata.UniqueId,
                    width: currentBoundingRect ? currentBoundingRect.width : undefined,
                    fileType: (htmlGeneratorProps.metadata.Thumbnail &&
                        _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["ExtensionHelper"].getExtension(htmlGeneratorProps.metadata.Thumbnail)) ||
                        'jpg',
                    callerId: 'htmlEmbed'
                };
                htmlGeneratorProps.metadata.Thumbnail = _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["ThumbnailUrlGenerator"].getThumbnailUrl(request);
            }
        }
        try {
            if (htmlGeneratorProps.metadata.Thumbnail &&
                htmlGeneratorProps.metadata.Thumbnail.toLowerCase().indexOf('/getpreview.ashx') > -1) {
                // VSO:#384426 searchParams is mispelled in TypeScript 2.2.2. Casting URL to any as a workaround.
                // tslint:disable-next-line:no-any
                var thumbnailUrl = new URL(htmlGeneratorProps.metadata.Thumbnail);
                if (thumbnailUrl.searchParams.has(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["PreviewHelper"].GUID_FILE) &&
                    thumbnailUrl.searchParams.has(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["PreviewHelper"].GUID_WEB) &&
                    thumbnailUrl.searchParams.has(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["PreviewHelper"].GUID_SITE)) {
                    // The thumbnail URL for the site page will always be the same getpreview.ashx and caused issue.
                    // The issue is when user updated the image in the site page and didn't refresh the page,
                    // HTML embed won't download the thumbnail image again since the thumbnail URL is not changed.
                    // Here We add a random query string to the thumbnail URL to force the thumbnail image to download.
                    thumbnailUrl.searchParams.set('v', Date.now());
                    htmlGeneratorProps.metadata.Thumbnail = thumbnailUrl.href;
                }
            }
        }
        catch (e) {
            // Thumbnail URL may be invalid and we will skip to manipulate it.
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logError(this._logSource, e);
        }
        this._htmlGenerator = _HtmlGenerator_HtmlGeneratorFactory__WEBPACK_IMPORTED_MODULE_6__["default"].createHtmlGenerator(htmlGeneratorProps);
        this._htmlGenerator.setSuccessorValidator(nextProps.htmlValidator);
        var operationId = ++this._operationId;
        this._htmlGenerator.validate(this._htmlGenerator.getFilteredVanillaHtml()).then(function (validateResult) {
            if (operationId === _this._operationId) {
                if (nextProps.embedDataSource.type === _HTMLEmbed_Props__WEBPACK_IMPORTED_MODULE_7__["EmbedDataSourceType"].DataProvider &&
                    _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["get"](nextProps.embedDataSource, 'embedDataProvider.onEmbedResultChanged')) {
                    nextProps.embedDataSource.embedDataProvider.onEmbedResultChanged({
                        Type: htmlGeneratorProps.type,
                        Html: htmlGeneratorProps.vanillaHtml,
                        ResponseCode: _EmbeddableService_IEmbeddableService__WEBPACK_IMPORTED_MODULE_5__["EmbedServiceResponseCode"].OK,
                        ErrorMessage: '',
                        EmbedMetadata: htmlGeneratorProps.metadata
                    });
                }
                return _this._setErrorMessageAndNotify(validateResult.isValid ? '' : validateResult.errorMessage);
            }
        }, function (error) {
            if (operationId === _this._operationId) {
                return _this._setErrorMessageAndNotify(error.errorMessage || error.toString());
            }
        });
    };
    HTMLEmbed.prototype._startValidation = function (nextProps) {
        var _this = this;
        this.setState({
            isValidating: true,
            errorMessage: ''
        });
        // VanillaHtml: means embedCode is a raw html code which could be rendered and don't need call EmbeddableService
        if (nextProps.embedCode.embedCodeType === _HTMLEmbed_Props__WEBPACK_IMPORTED_MODULE_7__["EmbedCodeType"].VanillaHtml) {
            this._validate({
                vanillaHtml: nextProps.embedCode.embedCode,
                htmlEmbedRect: this._boundingRect,
                type: "unknown" /* unknown */,
                shouldScale: nextProps.shouldScale,
                embedCodeShownType: nextProps.embedCode.embedCodeShownType,
                className: nextProps.className,
                isNarrowContainer: nextProps.isNarrowContainer,
                qosPrefixName: nextProps.qosPrefixName,
                variantTheme: this.props.variantTheme,
                altText: this.props.altText
            }, nextProps);
        }
        else if (nextProps.embedDataSource.type === _HTMLEmbed_Props__WEBPACK_IMPORTED_MODULE_7__["EmbedDataSourceType"].RawDataSource) {
            this._validate({
                vanillaHtml: nextProps.embedDataSource.embedServiceResult.Html,
                originalUrl: nextProps.embedCode.embedCode,
                htmlEmbedRect: this._boundingRect,
                type: nextProps.embedDataSource.embedServiceResult.Type,
                metadata: nextProps.embedDataSource.embedServiceResult.EmbedMetadata,
                shouldScale: nextProps.shouldScale,
                embedCodeShownType: nextProps.embedCode.embedCodeShownType,
                className: nextProps.className,
                isNarrowContainer: nextProps.isNarrowContainer,
                variantTheme: this.props.variantTheme,
                altText: this.props.altText
            }, nextProps);
        }
        else {
            // Other Type needs call EmbeddableService to get raw html code
            var embeddableService = nextProps.embedDataSource.embedDataProvider.embeddableService;
            if (!embeddableService) {
                return this._setErrorMessageAndNotify(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["NotSettingEmbedableService"]);
            }
            var operationId_1 = ++this._operationId;
            embeddableService
                .getEmbeddableHtmlCode()
                .then(function (embeddableHtmlResult) {
                if (_this._operationId !== operationId_1) {
                    return;
                }
                _this._urlMetadata = embeddableHtmlResult.EmbedMetadata;
                _this._validate({
                    vanillaHtml: embeddableHtmlResult.Html,
                    originalUrl: nextProps.embedCode.embedCode,
                    htmlEmbedRect: _this._boundingRect,
                    type: embeddableHtmlResult.Type,
                    metadata: embeddableHtmlResult.EmbedMetadata,
                    shouldScale: nextProps.shouldScale,
                    embedCodeShownType: nextProps.embedCode.embedCodeShownType,
                    className: nextProps.className,
                    isNarrowContainer: nextProps.isNarrowContainer,
                    qosPrefixName: nextProps.qosPrefixName,
                    titleMetaDataOverride: nextProps.titleMetaDataOverride,
                    variantTheme: _this.props.variantTheme,
                    altText: _this.props.altText
                }, nextProps);
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logError(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_LogSource"].create('HtmlEmbed'), error, 'GetEmbeddableHtmlCode');
            });
        }
    };
    HTMLEmbed.prototype._renderLoadingIndicator = function () {
        if (!this.props.renderLoadingIndicator) {
            return undefined;
        }
        return this.props.renderLoadingIndicator();
    };
    HTMLEmbed.prototype._renderError = function () {
        if (!this.props.renderError) {
            return undefined;
        }
        return this.props.renderError(this.state.errorMessage);
    };
    HTMLEmbed.prototype._setErrorMessageAndNotify = function (errorMessage) {
        this.setState({
            isValidating: false,
            errorMessage: errorMessage
        });
        // After done all validation logic, we can notify the outside 'render result'.
        if (this.props.onNotifyRenderResult) {
            this.props.onNotifyRenderResult(errorMessage);
        }
    };
    HTMLEmbed.prototype._getCurrentBoundingRect = function () {
        if (this._boundingRect) {
            return this._boundingRect;
        }
        if (!this._htmlEmbedDivDom) {
            return undefined;
        }
        var htmlEmbedDivDom = this._htmlEmbedDivDom;
        var boundingRect = htmlEmbedDivDom.getBoundingClientRect();
        var width = Math.ceil(boundingRect.width);
        var height = Math.ceil(boundingRect.height);
        return { width: width, height: height };
    };
    HTMLEmbed.prototype._setBoundingRectFromProps = function (nextProps) {
        var props = nextProps ? nextProps : this.props;
        if (props.boundingRect && (props.boundingRect.width > 0 || props.boundingRect.height > 0)) {
            this._boundingRect = props.boundingRect;
        }
    };
    HTMLEmbed.prototype._getWebUrlFromPreviewUrl = function (thumbnail) {
        if (!thumbnail) {
            return undefined;
        }
        var getPreviewThumbnailReg = /\/_layouts\/15\/getpreview.ashx\?.*/i;
        if (getPreviewThumbnailReg.test(thumbnail)) {
            return thumbnail.substr(0, getPreviewThumbnailReg.exec(thumbnail).index);
        }
    };
    HTMLEmbed.defaultProps = {
        embedCode: undefined,
        embedDataSource: {
            type: _HTMLEmbed_Props__WEBPACK_IMPORTED_MODULE_7__["EmbedDataSourceType"].DataProvider,
            embedDataProvider: {
                embeddableService: undefined,
                onEmbedResultChanged: undefined
            }
        }
    };
    HTMLEmbed.validateDone = 'validateDone';
    return HTMLEmbed;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (HTMLEmbed);


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

/***/ "5hre":
/*!********************************************!*\
  !*** ./lib/HtmlGenerator/HtmlGenerator.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HtmlValidator_HtmlValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HtmlValidator/HtmlValidator */ "/bDD");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file HtmlGenerator.ts
 */


var HtmlGenerator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HtmlGenerator, _super);
    function HtmlGenerator(htmlGeneratorProps) {
        var _this = _super.call(this) || this;
        _this._htmlGeneratorProps = htmlGeneratorProps;
        return _this;
    }
    HtmlGenerator.prototype.getMaxWidthStyle = function () {
        return { maxWidth: this.getWidth() };
    };
    HtmlGenerator.prototype.getPaddingBottomStyle = function () {
        var width = this.getWidth();
        var height = this.getHeight();
        var ratio = width ? height / width : 0;
        return { paddingBottom: ratio * 100 + '%' };
    };
    HtmlGenerator.prototype.setMobileMode = function (isNarrowContainer) {
        this._htmlGeneratorProps.isNarrowContainer = isNarrowContainer;
    };
    HtmlGenerator.prototype.setVariantTheme = function (variantTheme) {
        this._htmlGeneratorProps.variantTheme = variantTheme;
    };
    HtmlGenerator.prototype.setAltText = function (altText) {
        this._htmlGeneratorProps.altText = altText;
    };
    HtmlGenerator.prototype.setContainerRect = function (rect) {
        this._htmlGeneratorProps.htmlEmbedRect = rect;
    };
    return HtmlGenerator;
}(_HtmlValidator_HtmlValidator__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (HtmlGenerator);


/***/ }),

/***/ "CyA3":
/*!**************************************************!*\
  !*** ./lib/HtmlGenerator/HtmlGeneratorHelper.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var HtmlGeneratorHelper = /** @class */ (function () {
    function HtmlGeneratorHelper() {
    }
    HtmlGeneratorHelper.createHTMLElement = function (htmlGeneratorProps, tagName, safeAttributes) {
        var htmlElement = HtmlGeneratorHelper._createSafeHTMLElement(htmlGeneratorProps.vanillaHtml, tagName, safeAttributes);
        if (htmlElement) {
            htmlElement.setAttribute('tabindex', '-1');
            HtmlGeneratorHelper.moveRectFromStyle2Attribute(htmlElement);
            var scaledRect = HtmlGeneratorHelper.getScaledDomRect(htmlElement, htmlGeneratorProps.htmlEmbedRect, htmlGeneratorProps.shouldScale);
            if (scaledRect && scaledRect.width) {
                htmlElement.setAttribute('width', scaledRect.width.toString());
            }
            if (scaledRect && scaledRect.height) {
                htmlElement.setAttribute('height', scaledRect.height.toString());
            }
        }
        return htmlElement;
    };
    HtmlGeneratorHelper.createElementByTagName = function (htmlStr, tagName) {
        var divElement = document.createElement('div');
        divElement.innerHTML = htmlStr;
        return divElement.getElementsByTagName(tagName)[0];
    };
    HtmlGeneratorHelper.getScaledDomRect = function (originalHTMLElement, totalRect, shouldScale) {
        if (!originalHTMLElement) {
            return undefined;
        }
        var originalRect = {
            width: parseInt(originalHTMLElement.getAttribute('width'), 10),
            height: parseInt(originalHTMLElement.getAttribute('height'), 10)
        };
        if (originalRect.width <= 0 ||
            originalRect.height <= 0 ||
            isNaN(originalRect.width) ||
            isNaN(originalRect.height)) {
            return undefined;
        }
        // For avoid null check of totalRect
        if (!totalRect || totalRect.width <= 0 || totalRect.height <= 0) {
            totalRect = originalRect;
        }
        var width = originalHTMLElement.getAttribute('width').indexOf('%') === -1
            ? originalRect.width
            : totalRect.width * (originalRect.width / 100);
        var height = originalHTMLElement.getAttribute('height').indexOf('%') === -1
            ? originalRect.height
            : totalRect.height * (originalRect.height / 100);
        return {
            width: Math.ceil(!shouldScale ? width : totalRect.width),
            height: Math.ceil(!shouldScale ? height : totalRect.width * (height / width))
        };
    };
    HtmlGeneratorHelper.moveRectFromStyle2Attribute = function (htmlElement) {
        HtmlGeneratorHelper._moveStylePropertyToAttribute(htmlElement, 'width');
        HtmlGeneratorHelper._moveStylePropertyToAttribute(htmlElement, 'height');
    };
    HtmlGeneratorHelper.scaleZeroRectByRatio = function (htmlEmbedRect, widthHeightScaleRatio) {
        var htmlEmbedRectScaled = htmlEmbedRect;
        if (!htmlEmbedRect || (htmlEmbedRect.width <= 0 && htmlEmbedRect.height <= 0)) {
            return htmlEmbedRectScaled;
        }
        if (htmlEmbedRect.width <= 0) {
            htmlEmbedRectScaled.width = htmlEmbedRect.height * widthHeightScaleRatio;
        }
        if (htmlEmbedRect.height <= 0) {
            htmlEmbedRectScaled.height = htmlEmbedRect.width / widthHeightScaleRatio;
        }
        return htmlEmbedRectScaled;
    };
    HtmlGeneratorHelper.getHostnameFromUrl = function (url) {
        var hostname = '';
        if (url) {
            var regExpResult = /^\s*(http:\/\/|\/\/|https:\/\/)[^\/]+/i.exec(url);
            if (regExpResult && regExpResult.length) {
                hostname = regExpResult[0].replace(/^\s*(http:\/\/|\/\/|https:\/\/)/i, '');
            }
        }
        return hostname;
    };
    HtmlGeneratorHelper._createSafeHTMLElement = function (embedHtmlCode, tagName, safeAttributes) {
        var tmpHtmlElement = HtmlGeneratorHelper.createElementByTagName(embedHtmlCode, tagName);
        if (!tmpHtmlElement) {
            return tmpHtmlElement;
        }
        var shouldDeletedAttributes = [];
        var _loop_1 = function (i) {
            var attribute = tmpHtmlElement.attributes[i];
            var isbelongsToSafeAttribute = false;
            safeAttributes.forEach(function (attributeName) {
                if (attribute.name === attributeName.toLowerCase()) {
                    isbelongsToSafeAttribute = true;
                }
            });
            if (!isbelongsToSafeAttribute) {
                shouldDeletedAttributes.push(attribute.name);
            }
        };
        for (var i = 0; i < tmpHtmlElement.attributes.length; i++) {
            _loop_1(i);
        }
        shouldDeletedAttributes.map(function (attributeName) {
            tmpHtmlElement.removeAttribute(attributeName);
        });
        tmpHtmlElement.innerHTML = '';
        return tmpHtmlElement;
    };
    HtmlGeneratorHelper._moveStylePropertyToAttribute = function (htmlElement, attributeName) {
        if (htmlElement.style && htmlElement.style[attributeName]) {
            var styleValue = htmlElement.style[attributeName];
            htmlElement.setAttribute(attributeName, /em$/i.test(styleValue) ? HtmlGeneratorHelper._convertEmToPx(styleValue) : styleValue);
            htmlElement.style.removeProperty(attributeName);
        }
    };
    HtmlGeneratorHelper._getEmPxScaleRate = function () {
        var emPxScaleDefaultRate = 16;
        var fontSize = parseInt(window.getComputedStyle(document.body, undefined).getPropertyValue('font-size'), 10);
        if (!fontSize) {
            return emPxScaleDefaultRate;
        }
        return fontSize;
    };
    HtmlGeneratorHelper._convertEmToPx = function (styleValue) {
        return (parseInt(styleValue, 10) * HtmlGeneratorHelper._getEmPxScaleRate()).toString();
    };
    return HtmlGeneratorHelper;
}());
/* harmony default export */ __webpack_exports__["default"] = (HtmlGeneratorHelper);


/***/ }),

/***/ "HwzI":
/*!***********************************************************!*\
  !*** ./lib/EmbeddableService/EmbeddableServiceFactory.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SPEmbeddableService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SPEmbeddableService */ "K2OD");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file EmbeddableServiceFactory.ts
 */

var START_MOCK_URL = 'https://MockStartURL';
var EmbeddableServiceFactory = /** @class */ (function () {
    function EmbeddableServiceFactory() {
    }
    EmbeddableServiceFactory.createEmbeddableService = function (url, qosPrefix, serviceScope) {
        var embeddableService;
        if (( true) && url.indexOf(START_MOCK_URL) === 0) {
            var mockEmbeddableService = __webpack_require__(/*! ./MockEmbeddableService */ "WbYC");
            return new mockEmbeddableService.default(url);
        }
        embeddableService = new _SPEmbeddableService__WEBPACK_IMPORTED_MODULE_0__["default"](url, serviceScope);
        if (qosPrefix) {
            embeddableService.setQosPrefixStr(qosPrefix);
        }
        return embeddableService;
    };
    return EmbeddableServiceFactory;
}());
/* harmony default export */ __webpack_exports__["default"] = (EmbeddableServiceFactory);


/***/ }),

/***/ "I6O9":
/*!***************************************!*\
  !*** external "@microsoft/sp-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_I6O9__;

/***/ }),

/***/ "K2OD":
/*!******************************************************!*\
  !*** ./lib/EmbeddableService/SPEmbeddableService.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _EmbeddableService_IEmbeddableService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../EmbeddableService/IEmbeddableService */ "pQyg");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file SPEmbeddableService.ts
 */






var MAX_RETRY_TIMES_FOR_NETWORK_ERROR = 3;
var SPEmbeddableService = /** @class */ (function () {
    function SPEmbeddableService(url, serviceScope) {
        var _this = this;
        this._url = url;
        serviceScope.whenFinished(function () {
            _this._httpClient = serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].serviceKey);
            _this._pageContext = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__["PageContext"].serviceKey);
            _this._qosPrefix = 'SPEmbeddableService';
        });
    }
    SPEmbeddableService.prototype.setQosPrefixStr = function (qosPrefix) {
        this._qosPrefix = qosPrefix;
    };
    SPEmbeddableService.prototype.getEmbeddableHtmlCode = function (request) {
        var getOEmbedIframeMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"](this._qosPrefix + '.GetOEmbedIframeHtml');
        // Adding interval to avoid consequent retries of a single request causing throttle.
        // Make interval random to avoid the retries from multiple requests causing throttle.
        var intervalInMillisecond = (1 + 4 * Math.random()) * 1000;
        return this._getEmbeddableHtmlCodeImpl(MAX_RETRY_TIMES_FOR_NETWORK_ERROR, intervalInMillisecond, getOEmbedIframeMonitor, request);
    };
    SPEmbeddableService.prototype._getEmbeddableHtmlCodeImpl = function (retryMaxTimes, interval, getOEmbedIframeMonitor, request) {
        var _this = this;
        var _a;
        var baseUrl =  false
            ? undefined // use EDOG SOX as test service
            : this._pageContext.web.absoluteUrl;
        var requestUri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["Uri"](_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["Uri"].concatenate(baseUrl, '_api/SP.Publishing.EmbedService/EmbedData'));
        // Use UriEncoding.encodeRestUriStringToken to encode query param
        // to avoid single quote inside query value break SharePoint REST API query parse logic.
        requestUri.setQueryParameter('url', _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["StringHelper"].format('%27{0}%27', _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["UriEncoding"].encodeRestUriStringToken(this._url)));
        requestUri.setQueryParameter('version', '1');
        if ((_a = request) === null || _a === void 0 ? void 0 : _a.isBannerImageUrl) {
            requestUri.setQueryParameter('bannerImageUrl', 'true');
        }
        var spResponse;
        var headers = new Headers();
        headers.append('client-type', this._qosPrefix);
        return this._httpClient
            .get(requestUri.toString(), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, { headers: headers })
            .then(function (response) {
            spResponse = response;
            return _this._checkStatus(response);
        })
            .then(function (response) { return response.json(); })
            .then(function (embedServiceResult) {
            getOEmbedIframeMonitor.writeSuccess();
            return Promise.resolve({
                Type: embedServiceResult.Type,
                Html: embedServiceResult.Html,
                ResponseCode: embedServiceResult.ResponseCode,
                EmbedServiceResponseCode: embedServiceResult.EmbedServiceResponseCode,
                ErrorMessage: embedServiceResult.ErrorMessage,
                EmbedMetadata: {
                    CreatorName: embedServiceResult.CreatorName,
                    DatePublishedAt: embedServiceResult.DatePublishedAt,
                    Description: embedServiceResult.Description,
                    PublisherName: embedServiceResult.PublisherName,
                    Thumbnail: embedServiceResult.ThumbnailUrl,
                    Title: embedServiceResult.Title,
                    VideoId: embedServiceResult.VideoId,
                    SiteId: embedServiceResult.SiteId,
                    WebId: embedServiceResult.WebId,
                    ListId: embedServiceResult.ListId,
                    UniqueId: embedServiceResult.UniqueId,
                    Url: embedServiceResult.Url
                }
            });
        })
            .catch(function (error) {
            var correlationId;
            if (spResponse) {
                correlationId = spResponse.correlationId ? spResponse.correlationId.toString() : '';
            }
            if (--retryMaxTimes <= 0) {
                if (spResponse && spResponse.status === 403) {
                    getOEmbedIframeMonitor.writeExpectedFailure('AuthError', error, {
                        correlationId: correlationId
                    });
                }
                else {
                    getOEmbedIframeMonitor.writeUnexpectedFailure('GetOEmbedIframeHtmlFail', error, {
                        correlationId: correlationId
                    });
                }
                return Promise.resolve({
                    Type: "unknown" /* unknown */,
                    Html: '',
                    ResponseCode: _EmbeddableService_IEmbeddableService__WEBPACK_IMPORTED_MODULE_5__["EmbedServiceResponseCode"].GetEmbedCodeError,
                    ErrorMessage: error.message
                });
            }
            if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].parse('22f0ca4a-8954-4846-b06f-dda11a5e288a'), '6/6/2019', 'Embeddable service retry interval')) {
                return _this._getEmbeddableHtmlCodeImpl(retryMaxTimes, interval * 2, getOEmbedIframeMonitor);
            }
            else {
                // tslint:disable-next-line:no-string-based-set-timeout
                return new Promise(function (resolve) { return setTimeout(resolve, interval); }).then(function () {
                    return _this._getEmbeddableHtmlCodeImpl(retryMaxTimes, interval * 2, getOEmbedIframeMonitor);
                });
            }
        });
    };
    SPEmbeddableService.prototype._checkStatus = function (response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        }
        else {
            return Promise.reject(new Error(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["StringHelper"].format('details: {0} | responseCode: {1}', JSON.stringify(response), response.status)));
        }
    };
    return SPEmbeddableService;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPEmbeddableService);


/***/ }),

/***/ "KL1q":
/*!***********************************************************!*\
  !*** external "@microsoft/office-ui-fabric-react-bundle" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_KL1q__;

/***/ }),

/***/ "LoNQ":
/*!*************************************************************!*\
  !*** ./lib/EmbeddableService/O365VideoEmbeddableService.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _IEmbeddableService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IEmbeddableService */ "pQyg");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loc/Strings.resx */ "mGD9");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../loc/Strings.resx */ "mGD9", 1);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file O365VideoEmbeddableService.ts
 */





var O365VideoEmbeddableService = /** @class */ (function () {
    function O365VideoEmbeddableService(url, serviceScope) {
        var _this = this;
        this._url = url;
        serviceScope.whenFinished(function () {
            _this._httpClient = serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["SPHttpClient"].serviceKey);
        });
        this._qosPrefix = 'O365VideoEmbeddableService';
    }
    O365VideoEmbeddableService.prototype.setQosPrefixStr = function (qosPrefix) {
        this._qosPrefix = qosPrefix;
    };
    O365VideoEmbeddableService.prototype.getEmbeddableHtmlCode = function () {
        var getVideoMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"](this._qosPrefix + '.GetVideoEmbedCode');
        var requestUrl = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__["Uri"].concatenate(location.origin, '/portals/hub/_api/VideoService/GetVideoByURL?$Select=DefaultEmbedCode,ID,ChannelID,ThumbnailUrl');
        return this._httpClient
            .post(requestUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["SPHttpClient"].configurations.v1, {
            credentials: 'include',
            body: JSON.stringify({ videoFileRelativeUrl: this._url })
        })
            .then(this._checkStatus)
            .then(function (response) {
            return response.json();
        })
            .then(function (result) {
            getVideoMonitor.writeSuccess();
            return Promise.resolve({
                Html: result.DefaultEmbedCode,
                Type: "video" /* video */,
                ErrorMessage: '',
                EmbedMetadata: {
                    Thumbnail: result.ThumbnailUrl
                },
                ResponseCode: _IEmbeddableService__WEBPACK_IMPORTED_MODULE_3__["EmbedServiceResponseCode"].OK
            });
        })
            .catch(function (error) {
            getVideoMonitor.writeUnexpectedFailure('GetEmbedCode');
            return Promise.resolve({
                Html: '',
                Type: "video" /* video */,
                ErrorMessage: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_4__["InvalidVideoURL"],
                ResponseCode: _IEmbeddableService__WEBPACK_IMPORTED_MODULE_3__["EmbedServiceResponseCode"].GetEmbedCodeError
            });
        });
    };
    O365VideoEmbeddableService.prototype._checkStatus = function (response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        }
        else {
            return Promise.reject(new Error(JSON.stringify(response)));
        }
    };
    return O365VideoEmbeddableService;
}());
/* harmony default export */ __webpack_exports__["default"] = (O365VideoEmbeddableService);


/***/ }),

/***/ "Pk8u":
/*!**********************************************!*\
  !*** external "@microsoft/sp-lodash-subset" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Pk8u__;

/***/ }),

/***/ "R56C":
/*!*****************************************************************!*\
  !*** ./lib/HtmlGenerator/stylesInJs/BingPreviewStyle.styles.js ***!
  \*****************************************************************/
/*! exports provided: getClassNames, getStyles, BingPreviewStyleStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassNames", function() { return getClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BingPreviewStyleStyles", function() { return BingPreviewStyleStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_webpart_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-webpart-shared */ "U4ag");
/* harmony import */ var _ms_sp_webpart_shared__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_webpart_shared__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */



var getClassNames = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["classNamesFunction"])();
var getStyles = function (props) {
    var sectionTheme = props.variantTheme;
    return {
        title: {
            color: sectionTheme && sectionTheme.semanticColors.actionLink,
            selectors: {
                '&:focus': { color: sectionTheme && sectionTheme.semanticColors.actionLinkHovered },
                '&:hover': { color: sectionTheme && sectionTheme.semanticColors.actionLinkHovered }
            }
        },
        subTitle: {
            color: sectionTheme && sectionTheme.semanticColors.bodySubtext
        },
        description: {
            color: sectionTheme && sectionTheme.semanticColors.bodySubtext
        },
        dividerBorder: {
            borderTop: sectionTheme && "1px solid " + sectionTheme.semanticColors.bodyDivider,
            borderBottom: sectionTheme && "1px solid " + sectionTheme.semanticColors.bodyDivider
        }
    };
};
var BingPreviewStyleStyles = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BingPreviewStyleStyles, _super);
    function BingPreviewStyleStyles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BingPreviewStyleStyles.prototype.getStyles = function (props) {
        return getStyles(props);
    };
    return BingPreviewStyleStyles;
}(_ms_sp_webpart_shared__WEBPACK_IMPORTED_MODULE_2__["BaseEmphasisComponentStyles"]));



/***/ }),

/***/ "U4ag":
/*!****************************************!*\
  !*** external "@ms/sp-webpart-shared" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_U4ag__;

/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "VbJu":
/*!**************************************************************!*\
  !*** ./lib/videoIframeUtilities/O365VideoIframeUtilities.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file VideoIframeUtilities.ts
 */

var O365VideoIframeUtilities = /** @class */ (function () {
    function O365VideoIframeUtilities() {
    }
    O365VideoIframeUtilities.getChidVidFromVideoUrl = function (videoSource) {
        var result = {};
        if (videoSource !== '') {
            var chidStart = O365VideoIframeUtilities.getIDStartIndexFromVideoUrl(O365VideoIframeUtilities.chidKey, videoSource) +
                O365VideoIframeUtilities.chidKey.length +
                1;
            var vidStart = O365VideoIframeUtilities.getIDStartIndexFromVideoUrl(O365VideoIframeUtilities.vidKey, videoSource) +
                O365VideoIframeUtilities.vidKey.length +
                1;
            result[O365VideoIframeUtilities.chidKey] = videoSource.substring(chidStart, chidStart + O365VideoIframeUtilities._sizeOfGuid);
            result[O365VideoIframeUtilities.vidKey] = videoSource.substring(vidStart, vidStart + O365VideoIframeUtilities._sizeOfGuid);
        }
        return result;
    };
    O365VideoIframeUtilities.generateVideoUrlForIframeCodeRest = function (videoSource) {
        var videoUri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"](videoSource);
        var videoHostname = videoUri.getHost();
        if (videoHostname && videoHostname !== location.hostname) {
            // This is not-same Geo or tenant URL, so just return origin user input.
            return videoSource;
        }
        var idMap = O365VideoIframeUtilities.getChidVidFromVideoUrl(videoSource);
        return ('PointPublishing.aspx?chid=' +
            idMap[O365VideoIframeUtilities.chidKey] +
            '&vid=' +
            idMap[O365VideoIframeUtilities.vidKey]);
    };
    O365VideoIframeUtilities.getIDStartIndexFromVideoUrl = function (id, videoUrl) {
        var idExp = new RegExp(id + '=', 'i');
        var result = idExp.exec(videoUrl);
        if (result) {
            return result.index;
        }
        return -1;
    };
    O365VideoIframeUtilities.chidKey = 'chid';
    O365VideoIframeUtilities.vidKey = 'vid';
    O365VideoIframeUtilities._sizeOfGuid = 36;
    return O365VideoIframeUtilities;
}());
/* harmony default export */ __webpack_exports__["default"] = (O365VideoIframeUtilities);


/***/ }),

/***/ "WbYC":
/*!********************************************************!*\
  !*** ./lib/EmbeddableService/MockEmbeddableService.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmbeddableService_IEmbeddableService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EmbeddableService/IEmbeddableService */ "pQyg");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file MockEmbeddableService.ts
 */

var MockEmbeddableService = /** @class */ (function () {
    function MockEmbeddableService(url) {
        this._url = url;
    }
    MockEmbeddableService.prototype.getEmbeddableHtmlCode = function () {
        if (this._url.indexOf(MockEmbeddableService.errorFlagStr) !== -1) {
            return Promise.resolve({
                Html: '',
                Type: "video" /* video */,
                ErrorMessage: MockEmbeddableService.errorMessage,
                ResponseCode: _EmbeddableService_IEmbeddableService__WEBPACK_IMPORTED_MODULE_0__["EmbedServiceResponseCode"].GetEmbedCodeError
            });
        }
        return Promise.resolve({
            Html: '<iframe src="https://xxxshowInfo=false" width=500 height=300></iframe>',
            Type: "video" /* video */,
            ErrorMessage: '',
            ResponseCode: _EmbeddableService_IEmbeddableService__WEBPACK_IMPORTED_MODULE_0__["EmbedServiceResponseCode"].OK,
            EmbedMetadata: {
                Thumbnail: ''
            }
        });
    };
    MockEmbeddableService.errorFlagStr = 'makeGetEmbeddablehtmlcodeReturnError';
    MockEmbeddableService.errorMessage = 'MockEmbeddableServiceError';
    return MockEmbeddableService;
}());
/* harmony default export */ __webpack_exports__["default"] = (MockEmbeddableService);


/***/ }),

/***/ "X+PM":
/*!*********************************************!*\
  !*** external "@microsoft/sp-page-context" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_X_PM__;

/***/ }),

/***/ "ZZYF":
/*!***********************************************************!*\
  !*** ./lib/HtmlGenerator/BingPreviewStyle.module.scss.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./BingPreviewStyle.module.css */ "cpeb");
var styles = {
    bingPreview: 'f_b_87677f78',
    thumbnailLink: 'g_b_87677f78',
    thumbnailContainer: 'h_b_87677f78',
    metadata: 'i_b_87677f78',
    titleContainer: 'j_b_87677f78',
    metadataTitle: 'k_b_87677f78',
    fixPreviewTitle: 'l_b_87677f78',
    fluent: 'm_b_87677f78',
    truncate: 'n_b_87677f78',
    metadataSubtitle: 'o_b_87677f78',
    metadataDescription: 'p_b_87677f78',
    isNarrowContainer: 'q_b_87677f78'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "Zc0l":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/HtmlGenerator/BingPreviewStyle.module.css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".f_b_87677f78{display:-ms-flexbox;display:flex;width:100%;margin:8px 0;padding:20px 0}.g_b_87677f78{display:block}[dir=ltr] .g_b_87677f78{margin-right:20px}[dir=rtl] .g_b_87677f78{margin-left:20px}.h_b_87677f78{outline:0}.i_b_87677f78{min-width:1px}[dir=ltr] .i_b_87677f78{padding-right:30px}[dir=rtl] .i_b_87677f78{padding-left:30px}.j_b_87677f78{display:inline-block;width:100%;word-wrap:break-word}[dir=ltr] .j_b_87677f78{margin-right:20px}[dir=rtl] .j_b_87677f78{margin-left:20px}.k_b_87677f78:not(.l_b_87677f78){line-height:17px}.k_b_87677f78.l_b_87677f78{line-height:1.35em}.k_b_87677f78:not(.m_b_87677f78){font-size:17px;font-weight:300}.k_b_87677f78.m_b_87677f78{font-size:\"[theme:mediumPlusFontSize, default: 16px]\";font-weight:\"[theme:mediumPlusFontWeight, default: 400]\";font-weight:600}.k_b_87677f78.n_b_87677f78:not(.l_b_87677f78){max-height:34px}.k_b_87677f78.n_b_87677f78.l_b_87677f78,.k_b_87677f78.n_b_87677f78:not(.l_b_87677f78){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;box-sizing:content-box;overflow:hidden}.k_b_87677f78.n_b_87677f78.l_b_87677f78{max-height:2.7em}.o_b_87677f78{margin:5px 0 10px}.o_b_87677f78:not(.m_b_87677f78){font-size:12px;font-weight:400}.o_b_87677f78.m_b_87677f78{font-size:\"[theme:smallFontSize, default: 12px]\";font-weight:\"[theme:smallFontWeight, default: 400]\"}.p_b_87677f78{word-wrap:break-word}.p_b_87677f78:not(.m_b_87677f78){font-size:13px;font-weight:400}.p_b_87677f78.m_b_87677f78{font-size:\"[theme:mediumFontSize, default: 14px]\";font-weight:\"[theme:mediumFontWeight, default: 400]\"}.q_b_87677f78.f_b_87677f78{display:block}.q_b_87677f78 .i_b_87677f78{padding:10px 0 0}[dir=ltr] .q_b_87677f78 .g_b_87677f78,[dir=ltr] .q_b_87677f78 .j_b_87677f78{margin-right:0}[dir=rtl] .q_b_87677f78 .g_b_87677f78,[dir=rtl] .q_b_87677f78 .j_b_87677f78{margin-left:0}", ""]);


/***/ }),

/***/ "aGjg":
/*!********************************************************!*\
  !*** ./lib/HtmlGenerator/BingPreviewStyleGenerator.js ***!
  \********************************************************/
/*! exports provided: BingPreviewLayout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BingPreviewLayout", function() { return BingPreviewLayout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/Flights */ "w4+A");
/* harmony import */ var _stylesInJs_BingPreviewStyle_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stylesInJs/BingPreviewStyle.styles */ "R56C");
/* harmony import */ var _HtmlGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HtmlGenerator */ "5hre");
/* harmony import */ var _HtmlGeneratorHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HtmlGeneratorHelper */ "CyA3");
/* harmony import */ var _BingPreviewStyle_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BingPreviewStyle.module.scss */ "ZZYF");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../loc/Strings.resx */ "mGD9");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../loc/Strings.resx */ "mGD9", 1);
/* harmony import */ var _HtmlGeneratorKillSwitches__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./HtmlGeneratorKillSwitches */ "gNRT");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file ImageGenerator.tsx
 */
















var BingPreviewLayout = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BingPreviewLayout, _super);
    function BingPreviewLayout(props) {
        var _this = _super.call(this, props) || this;
        _this._createTitleLinkRef = function (element) {
            _this._titleLink = element;
        };
        _this._createThumbnailRef = function (element) {
            _this._thumbnailLink = element;
        };
        /* tslint:disable-next-line:no-null-keyword */
        _this._lessText = null;
        _this.state = { isValidUrl: true, isLessTextLoaded: false };
        _this._loadLessText();
        return _this;
    }
    BingPreviewLayout.prototype.render = function () {
        var _a;
        var emphasisClassNames = Object(_common_Flights__WEBPACK_IMPORTED_MODULE_8__["isDeprecateEmphasisClassFlightEnabled"])()
            ? Object(_stylesInJs_BingPreviewStyle_styles__WEBPACK_IMPORTED_MODULE_9__["getClassNames"])(_stylesInJs_BingPreviewStyle_styles__WEBPACK_IMPORTED_MODULE_9__["getStyles"], {
                variantTheme: this.props.variantTheme
            })
            : new _stylesInJs_BingPreviewStyle_styles__WEBPACK_IMPORTED_MODULE_9__["BingPreviewStyleStyles"]().getClassNames({
                variantTheme: this.props.variantTheme
            });
        var bingPreviewContainerClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(this.props.className, _BingPreviewStyle_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].bingPreview, emphasisClassNames.dividerBorder, (_a = {}, _a[_BingPreviewStyle_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].isNarrowContainer] = this.props.isNarrowContainer, _a));
        var isFluentEnabled = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPFlight"].isEnabled(1248) &&
            !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Guid"].parse('3ec632bc-a93c-4f10-bb68-aa7fc31a4488'), '8/19/2019', 'SOX_FluentForLinkPreviewWebPart');
        var metaDataTitle = this.props.titleMetaDataOverride
            ? this.props.titleMetaDataOverride
            : this.props.metadata.Title;
        var metaDataTitleClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_BingPreviewStyle_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].metadataTitle, !_HtmlGeneratorKillSwitches__WEBPACK_IMPORTED_MODULE_14__["HtmlGeneratorKillSwitches"].fixBingPreviewTitleCutKillSwitch.isActivated() && _BingPreviewStyle_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].fixPreviewTitle, emphasisClassNames.title, isFluentEnabled && _BingPreviewStyle_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].fluent, BingPreviewLayout._shouldUseCssClamp && _BingPreviewStyle_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].truncate);
        var metaDataTitleElement = BingPreviewLayout._shouldUseCssClamp ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { title: metaDataTitle, className: metaDataTitleClassName, "data-automation-id": 'metadataTitle' }, metaDataTitle)) : (!!this._lessText && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](this._lessText, { text: metaDataTitle, className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_BingPreviewStyle_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].metadataTitle, emphasisClassNames.title, isFluentEnabled && _BingPreviewStyle_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].fluent), autoShowTitle: true, lines: 2, omission: '' })));
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Fabric"], { className: bingPreviewContainerClassName },
            this._renderThumbnail(),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _BingPreviewStyle_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].metadata },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Link"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ className: _BingPreviewStyle_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].titleContainer }, { href: this.props.originalUrl, target: '_blank' } /* VSO:391730 Remove this workaround */, { componentRef: this._createTitleLinkRef }), metaDataTitleElement),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_BingPreviewStyle_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].metadataSubtitle, emphasisClassNames.subTitle, isFluentEnabled && _BingPreviewStyle_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].fluent) }, this._getHostname()),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_BingPreviewStyle_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].metadataDescription, emphasisClassNames.description, isFluentEnabled && _BingPreviewStyle_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].fluent), title: this.props.metadata.Description }, this.props.metadata.Description))));
    };
    /**
     * Focus on the bing preview generator link.
     * If the thumbnail is available, focus on it;
     * Otherwise, if the preview title is available, focus on it;
     * Otherwise, it is no-op.
     */
    BingPreviewLayout.prototype.focus = function () {
        if (this._thumbnailLink) {
            this._thumbnailLink.focus();
            return;
        }
        if (this._titleLink) {
            this._titleLink.focus();
        }
    };
    BingPreviewLayout.prototype._getHostname = function () {
        var hostname = '';
        if (this.props.originalUrl) {
            var regExpResult = /^\s*(http:\/\/|\/\/|https:\/\/)[^\/]+/i.exec(this.props.originalUrl);
            if (regExpResult && regExpResult.length) {
                hostname = regExpResult[0].replace(/^\s*(http:\/\/|\/\/|https:\/\/)/i, '');
            }
        }
        return hostname;
    };
    BingPreviewLayout.prototype._renderThumbnail = function () {
        if (this.props.metadata.Thumbnail && this.state.isValidUrl) {
            var monitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__["_QosMonitor"]('BingPreviewStyleThumbnailLoad');
            var width = this.props.isNarrowContainer
                ? this.props.htmlEmbedRect.width
                : BingPreviewLayout._defaultThumbnailWidth;
            var height = this.props.isNarrowContainer
                ? this.props.htmlEmbedRect.width * BingPreviewLayout._defaultThumbnailHeightWidthRatio
                : BingPreviewLayout._defaultThumbnailHeight;
            var thumbnailUrl = _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["ThumbnailUrlGenerator"].updateThumbnailWidth(this.props.metadata.Thumbnail, width);
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: _BingPreviewStyle_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].thumbnailLink, href: this.props.originalUrl, target: '_blank', ref: this._createThumbnailRef },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Image"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ className: _BingPreviewStyle_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].thumbnailContainer, alt: this.props.altText || '' }, { width: width, height: height, src: thumbnailUrl }, { imageFit: _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["ImageFit"].cover, title: this.props.metadata.Title, onLoad: this._handleThumbnailLoadSuccess(monitor), onError: this._handleThumbnailLoadError(monitor) }))));
        }
        else {
            return undefined;
        }
    };
    BingPreviewLayout.prototype._handleThumbnailLoadSuccess = function (monitor) {
        var _this = this;
        return function () {
            _this.setState({ isValidUrl: true });
            monitor.writeSuccess();
        };
    };
    BingPreviewLayout.prototype._handleThumbnailLoadError = function (monitor) {
        var _this = this;
        return function () {
            _this.setState({ isValidUrl: false });
            // VSO#351987 sp-html-embed need to bundle strings while dynamic loading
            var errorMessage = _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_13___namespace ? _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_13__["ThumbnailLoadError"] : 'ThumbnailLoadError';
            monitor.writeUnexpectedFailure('ThumbnailLoadError', new Error(errorMessage));
        };
    };
    BingPreviewLayout.prototype._loadLessText = function () {
        var _this = this;
        if (!this.state.isLessTextLoaded) {
            _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_5__["SPComponentLoader"].loadComponentById(BingPreviewLayout._spWebpartSharedComponentId)
                .then(function (module) {
                _this._lessText = module.LessText;
                _this.setState({ isLessTextLoaded: true });
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logError(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_LogSource"].create('HtmlEmbed'), error, 'LoadWebpartSharedComponent');
            });
        }
    };
    // 0.5625(default ratio of thumbnail) = 135(default thumbnail height) / 240(default thumbnail width)
    BingPreviewLayout._defaultThumbnailHeightWidthRatio = 0.5625;
    BingPreviewLayout._defaultThumbnailHeight = 135;
    BingPreviewLayout._defaultThumbnailWidth = 240;
    BingPreviewLayout._spWebpartSharedComponentId = '914330ee-2df2-4f6e-a858-30c23a812408';
    BingPreviewLayout._shouldUseCssClamp = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_BrowserDetection"].getBrowserInformation().browser !== _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_Browser"].IE;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["autobind"]
    ], BingPreviewLayout.prototype, "focus", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["autobind"]
    ], BingPreviewLayout.prototype, "_handleThumbnailLoadSuccess", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["autobind"]
    ], BingPreviewLayout.prototype, "_handleThumbnailLoadError", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["autobind"]
    ], BingPreviewLayout.prototype, "_loadLessText", null);
    return BingPreviewLayout;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var BingPreviewStyleGenerator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BingPreviewStyleGenerator, _super);
    function BingPreviewStyleGenerator(htmlGeneratorProps) {
        var _this = _super.call(this, htmlGeneratorProps) || this;
        _this._createBingPreviewLayoutRef = function (element) {
            _this._bingPreviewStyleComponent = element;
            if (_this._shouldFocus && element) {
                element.focus();
                _this._shouldFocus = false;
            }
        };
        _this._htmlGeneratorProps.htmlEmbedRect = _HtmlGeneratorHelper__WEBPACK_IMPORTED_MODULE_11__["default"].scaleZeroRectByRatio(_this._htmlGeneratorProps.htmlEmbedRect, BingPreviewStyleGenerator._defaultWidthHeightScale);
        _this._shouldFocus = false;
        return _this;
    }
    BingPreviewStyleGenerator.prototype.createHtmlElement = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](BingPreviewLayout, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._htmlGeneratorProps, { ref: this._createBingPreviewLayoutRef }));
    };
    BingPreviewStyleGenerator.prototype.getFilteredVanillaHtml = function () {
        return '';
    };
    BingPreviewStyleGenerator.prototype.focus = function () {
        if (this._bingPreviewStyleComponent) {
            this._bingPreviewStyleComponent.focus();
        }
        else {
            this._shouldFocus = true;
        }
    };
    BingPreviewStyleGenerator.prototype._internalValidate = function (vanillaHtml) {
        var hasMetadata = Boolean(this._htmlGeneratorProps.metadata);
        var hasTitle = Boolean(hasMetadata && this._htmlGeneratorProps.metadata.Title);
        var hasDescription = Boolean(hasMetadata && this._htmlGeneratorProps.metadata.Description);
        var hasThumbnail = Boolean(hasMetadata && this._htmlGeneratorProps.metadata.Thumbnail);
        var isValid = Boolean(hasTitle || hasDescription || hasThumbnail);
        var extraData = {
            hasTitle: hasTitle,
            hasDescription: hasDescription,
            hasThumbnail: hasThumbnail,
            userInputHostname: _HtmlGeneratorHelper__WEBPACK_IMPORTED_MODULE_11__["default"].getHostnameFromUrl(this._htmlGeneratorProps.originalUrl),
            currentHostname: window.location.host
        };
        var qosPrefixName = this._htmlGeneratorProps.qosPrefixName || 'HTMLEmbed';
        var monitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__["_QosMonitor"](qosPrefixName + '.BingPreviewStyle.ValidationResult');
        if (!isValid) {
            monitor.writeExpectedFailure('EmptyMetadata', /* ex */ undefined, extraData);
        }
        else if (!hasTitle && hasDescription && hasThumbnail) {
            monitor.writeExpectedFailure('MissTitle', /* ex */ undefined, extraData);
        }
        else if (hasTitle && !hasDescription && hasThumbnail) {
            monitor.writeExpectedFailure('MissDescription', /* ex */ undefined, extraData);
        }
        else if (hasTitle && hasDescription && !hasThumbnail) {
            monitor.writeExpectedFailure('MissThumbnail', /* ex */ undefined, extraData);
        }
        else if (hasTitle && !hasDescription && !hasThumbnail) {
            monitor.writeExpectedFailure('OnlyHasTitle', /* ex */ undefined, extraData);
        }
        else if (!hasTitle && hasDescription && !hasThumbnail) {
            monitor.writeExpectedFailure('OnlyHasDescription', /* ex */ undefined, extraData);
        }
        else if (!hasTitle && !hasDescription && hasThumbnail) {
            monitor.writeExpectedFailure('OnlyHasThumbnail', /* ex */ undefined, extraData);
        }
        else {
            monitor.writeSuccess();
        }
        // VSO#351987 sp-html-embed need to bundle strings while dynamic loading
        var errorMessage = _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_13___namespace ? _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_13__["UnsupportedEmbedUrl"] : 'UnsupportedEmbedUrl';
        return Promise.resolve({ isValid: isValid, errorMessage: isValid ? '' : errorMessage });
    };
    BingPreviewStyleGenerator.prototype.getWidth = function () {
        return this._htmlGeneratorProps.htmlEmbedRect.width;
    };
    BingPreviewStyleGenerator.prototype.getHeight = function () {
        return this._htmlGeneratorProps.htmlEmbedRect.height;
    };
    BingPreviewStyleGenerator._defaultWidthHeightScale = 2.8;
    return BingPreviewStyleGenerator;
}(_HtmlGenerator__WEBPACK_IMPORTED_MODULE_10__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (BingPreviewStyleGenerator);


/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "cpeb":
/*!*******************************************************!*\
  !*** ./lib/HtmlGenerator/BingPreviewStyle.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./BingPreviewStyle.module.css */ "Zc0l");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "d8G6":
/*!********************************************!*\
  !*** ./lib/style/HTMLEmbed.module.scss.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./HTMLEmbed.module.css */ "qC0m");
var styles = {
    HTMLEmbed: 'a_a_87677f78',
    embedCode: 'b_a_87677f78',
    iframeStyles: 'c_a_87677f78',
    blackBackGround: 'e_a_87677f78'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "eVr9":
/*!********************************!*\
  !*** ./lib/HTMLEmbed.Props.js ***!
  \********************************/
/*! exports provided: EmbedCodeType, EmbedCodeShownType, EmbedDataSourceType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbedCodeType", function() { return EmbedCodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbedCodeShownType", function() { return EmbedCodeShownType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbedDataSourceType", function() { return EmbedDataSourceType; });
var EmbedCodeType;
(function (EmbedCodeType) {
    EmbedCodeType[EmbedCodeType["Url"] = 0] = "Url";
    EmbedCodeType[EmbedCodeType["VanillaHtml"] = 1] = "VanillaHtml";
})(EmbedCodeType || (EmbedCodeType = {}));
var EmbedCodeShownType;
(function (EmbedCodeShownType) {
    EmbedCodeShownType[EmbedCodeShownType["BingPreviewStyle"] = 0] = "BingPreviewStyle";
    EmbedCodeShownType[EmbedCodeShownType["ContentStyle"] = 1] = "ContentStyle";
})(EmbedCodeShownType || (EmbedCodeShownType = {}));
var EmbedDataSourceType;
(function (EmbedDataSourceType) {
    EmbedDataSourceType[EmbedDataSourceType["RawDataSource"] = 1] = "RawDataSource";
    EmbedDataSourceType[EmbedDataSourceType["DataProvider"] = 2] = "DataProvider";
})(EmbedDataSourceType || (EmbedDataSourceType = {}));


/***/ }),

/***/ "gNRT":
/*!********************************************************!*\
  !*** ./lib/HtmlGenerator/HtmlGeneratorKillSwitches.js ***!
  \********************************************************/
/*! exports provided: HtmlGeneratorKillSwitches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlGeneratorKillSwitches", function() { return HtmlGeneratorKillSwitches; });
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file HtmlGeneratorKillSwitches.ts
 */

var HtmlGeneratorKillSwitches = /** @class */ (function () {
    function HtmlGeneratorKillSwitches() {
    }
    HtmlGeneratorKillSwitches.fixBingPreviewTitleCutKillSwitch = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('4a027fda-0956-48bb-b935-17977024fa31' /* '07/16/2020', 'SOX_FixBingPreviewTitleCut' */);
    return HtmlGeneratorKillSwitches;
}());



/***/ }),

/***/ "hiL/":
/*!*********************************************!*\
  !*** external "@ms/sp-component-utilities" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_hiL___;

/***/ }),

/***/ "iGrj":
/*!**********************************************!*\
  !*** ./lib/HtmlGenerator/IframeGenerator.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HtmlGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HtmlGenerator */ "5hre");
/* harmony import */ var _HtmlGeneratorHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HtmlGeneratorHelper */ "CyA3");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loc/Strings.resx */ "mGD9");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../loc/Strings.resx */ "mGD9", 1);
/* harmony import */ var _style_HTMLEmbed_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/HTMLEmbed.module.scss */ "d8G6");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file IframeGenerator.ts
 */







var IframeGenerator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(IframeGenerator, _super);
    function IframeGenerator(htmlGeneratorProps) {
        var _this = _super.call(this, htmlGeneratorProps) || this;
        _this._createBorderRef = function (element) {
            _this._borderDiv = element;
        };
        _this._handleKeyDown = _this._handleKeyDown.bind(_this);
        if (htmlGeneratorProps.vanillaHtml) {
            _this._htmlGeneratorProps.htmlEmbedRect = _HtmlGeneratorHelper__WEBPACK_IMPORTED_MODULE_4__["default"].scaleZeroRectByRatio(_this._htmlGeneratorProps.htmlEmbedRect, IframeGenerator._defaultWidthHeightScale);
            _this._htmlElement = _HtmlGeneratorHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createHTMLElement(htmlGeneratorProps, IframeGenerator._tagName, IframeGenerator._safeAttributes);
            if (_this._htmlElement && !_this._htmlElement.getAttribute('allowfullscreen')) {
                _this._htmlElement.setAttribute('allowfullscreen', '');
            }
            // [SOX! VSO: 271882]
            // Comment the following out until Bing solve auto play issue.
            // If Bing VideoId is available, use Bing video API to construct IFRAME source.
            // if (this._htmlElement && this._htmlGeneratorProps.metadata && this._htmlGeneratorProps.metadata.VideoId) {
            //   this._htmlElement.setAttribute('src',
            //     IframeGenerator._bingVideoSRCTemplate + this._htmlGeneratorProps.metadata.VideoId);
            // }
        }
        return _this;
    }
    IframeGenerator.prototype.createHtmlElement = function () {
        var iframeClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_style_HTMLEmbed_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].HTMLEmbed, this._htmlGeneratorProps.className);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: iframeClassName, style: this.getMaxWidthStyle() },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: 'row', className: _style_HTMLEmbed_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].embedCode, "data-automation-id": 'embedCode', tabIndex: 0, style: this.getPaddingBottomStyle(), onKeyDown: this._handleKeyDown, "aria-label": _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_5__["HTMLEmbedWebPartAriaLabel"], ref: this._createBorderRef },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { dangerouslySetInnerHTML: { __html: this.getFilteredVanillaHtml() } }))));
    };
    IframeGenerator.prototype.getFilteredVanillaHtml = function () {
        if (!this._htmlElement) {
            return '';
        }
        return this._htmlElement.outerHTML;
    };
    IframeGenerator.prototype.focus = function () {
        if (this._borderDiv) {
            this._borderDiv.focus();
        }
    };
    IframeGenerator.prototype._internalValidate = function (vanillaHtml) {
        var iframeElement = _HtmlGeneratorHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createElementByTagName(vanillaHtml, IframeGenerator._tagName);
        if (!iframeElement) {
            return Promise.reject({ isValid: false, errorMessage: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_5__["UseIframeTag"] });
        }
        var isValidSrc = IframeGenerator._srcProtocolRegExp.test(iframeElement.getAttribute('src'));
        var isValidWidth = parseInt(iframeElement.getAttribute('width'), 10) &&
            IframeGenerator._widthAndHeightRegExp.test(iframeElement.getAttribute('width'));
        var isValidHeight = parseInt(iframeElement.getAttribute('height'), 10) &&
            IframeGenerator._widthAndHeightRegExp.test(iframeElement.getAttribute('height'));
        if (isValidSrc && isValidWidth && isValidHeight) {
            return Promise.resolve({ isValid: true, errorMessage: '' });
        }
        return Promise.reject({ isValid: false, errorMessage: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_5__["IllegalRenderErrorMessage"] });
    };
    IframeGenerator.prototype.getWidth = function () {
        return parseInt(this._htmlElement.getAttribute('width'), 10);
    };
    IframeGenerator.prototype.getHeight = function () {
        return parseInt(this._htmlElement.getAttribute('height'), 10);
    };
    IframeGenerator.prototype._handleKeyDown = function (event) {
        if (event.keyCode === _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter || event.keyCode === _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].down) {
            event.preventDefault();
            var embedElement = event.target.firstChild.firstChild;
            if (embedElement instanceof HTMLElement) {
                embedElement.focus();
            }
        }
    };
    IframeGenerator._defaultWidthHeightScale = 1.5;
    IframeGenerator._tagName = 'iframe';
    IframeGenerator._srcProtocolRegExp = /^http:\/\/|^\/\/|^https:\/\//i;
    IframeGenerator._widthAndHeightRegExp = /^[0-9]+/i;
    IframeGenerator._safeAttributes = [
        'align',
        'frameborder',
        'height',
        'longdesc',
        'marginheight',
        'marginwidth',
        'name',
        'scrolling',
        'src',
        'srcdoc',
        'width',
        'allowfullscreen',
        'class',
        'style'
    ];
    return IframeGenerator;
}(_HtmlGenerator__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (IframeGenerator);


/***/ }),

/***/ "jOlS":
/*!************************************************!*\
  !*** external "@microsoft/load-themed-styles" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jOlS__;

/***/ }),

/***/ "l9CO":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/style/HTMLEmbed.module.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".a_a_87677f78{margin:0 auto}.a_a_87677f78 .b_a_87677f78 iframe{position:absolute;top:0;left:0;right:0;width:100%;height:100%}.a_a_87677f78 .b_a_87677f78 iframe,.a_a_87677f78 .c_a_87677f78{border:none;display:block;margin:0 auto}.a_a_87677f78 [contentEditable=true]:empty:before{content:attr(placeholder);color:\"[theme:neutralSecondaryAlt, default: #8a8886]\";display:block}.b_a_87677f78{border:none;display:block;position:relative;height:0;overflow:hidden}.e_a_87677f78{background-color:\"[theme:black, default: #000000]\"}", ""]);


/***/ }),

/***/ "mGD9":
/*!******************************!*\
  !*** ./lib/loc/Strings.resx ***!
  \******************************/
/*! exports provided: ContentEmbedTitle, VideoEmbedTitle, ContentEmbedCode, ContentEmbedLabel, VideoEmbedVideoLabel, VideoEmbedURL, VideoEmbedShowInfo, InvalidVideoURL, UseIframeTag, IllegalRenderErrorMessage, SrcCheckWaitingTips, HTMLEmbedWebPartAriaLabel, IllegalSrc, BasicGroupName, DisplayGroupName, SourceCheckFormatError, EmptyPlaceholderContentEmbedWebPartIconLabel, EmptyPlaceholderContentEmbedWebPartDescription, EmptyPlaceholderEmbededVideoWebPartIconLabel, EmptyPlaceholderEmbededVideoWebPartDescription, OpenPropertyPaneButtonLabel, AddVideoButtonLabel, AddEmbedCodeButtonLabel, CaptionPlaceholder, UseHTTPS, DisableEmbed, LearnMore, HintTextForEmbedScreenReader, HintTextForEmbed, HintTextForVideoScreenReader, AccessibleHintTextTemplate, HintTextForVideo, EmbedSuccessPrompt, VideoEmbedSuccessPrompt, UnsupportedEmbedUrl, TextAreaHint, VideoChannelUrlName, OnlyChannelUrlError, FitToWidth, NotSettingEmbedableService, HTMLEmbedBoundingRectZero, ThumbnailLoadError, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ContentEmbedTitle\":\"[!!--##Ēmƀēď##--!!]\",\"VideoEmbedTitle\":\"[!!--##Ōƒƒĩćē 365 Vĩďēō##--!!]\",\"ContentEmbedCode\":\"[!!--##ŴēƀŚĩţē àďďŕēśś ōŕ ēmƀēď ćōďē##--!!]\",\"ContentEmbedLabel\":\"[!!--##Ŷōũ ćàń ďĩśƥĺàŷ ćōńţēńţ ƒŕōm śōmē ŵēƀśĩţēś śĩmƥĺŷ ƀŷ ƥàśţĩńĝ ţĥē àďďŕēśś ƀēĺōŵ. Ĩƒ ţĥàţ ďōēśń\\u0027ţ ŵōŕķ, ŷōũ\\u0027ĺĺ ńēēď ţō ƥàśţē ţĥē ēmƀēď ćōďē ĩńśţēàď.##--!!]\",\"VideoEmbedVideoLabel\":\"[!!--##Ďĩśƥĺàŷ àń Ōƒƒĩćē 365 vĩďēō ōń ŷōũŕ ƥàĝē. Ƒĩńď ţĥē vĩďēō ŷōũ ŵàńţ ōń ţĥē Ōƒƒĩćē 365 vĩďēō ƥōŕţàĺ, àńď ţĥēń ƥàśţē ĩţś ŵēƀ àďďŕēśś ƀēĺōŵ.##--!!]\",\"VideoEmbedURL\":\"[!!--##Vĩďēō àďďŕēśś##--!!]\",\"VideoEmbedShowInfo\":\"[!!--##Śĥōŵ ţĩţĺē àńď vĩďēō ĩńƒō##--!!]\",\"InvalidVideoURL\":\"[!!--##Ţĥĩś àďďŕēśś ďōēśń\\u0027ţ śēēm ţō ƀē àń Ōƒƒĩćē 365 vĩďēō. Ćĥēćķ ţĥē àďďŕēśś àńď ţŕŷ àĝàĩń.##--!!]\",\"UseIframeTag\":\"[!!--##Ţĥĩś ēmƀēď ćōďē ďōēśń\\u0027ţ śēēm ţō ŵōŕķ. Ŵē ōńĺŷ śũƥƥōŕţ ĩƒŕàmē ƀàśēď ēmƀēďś.##--!!]\",\"IllegalRenderErrorMessage\":\"[!!--##Ŵē ćàń\\u0027ţ śĥōŵ ţĥĩś ēmƀēďďēď ćōńţēńţ ƀēćàũśē ţĥē ćōďē śēēmś ţō ƀē ĩńćōmƥĺēţē. Màķē śũŕē ţĥàţ ţĥē ēmƀēď ćōďē ĩńćĺũďēś ŵĩďţĥ, ĥēĩĝĥţ àńď à vàĺĩď àďďŕēśś ƒōŕ ţĥē śŕć àţţŕĩƀũţē.##--!!]\",\"SrcCheckWaitingTips\":\"[!!--##Vēŕĩƒŷĩńĝ ţĥē Ōƒƒĩćē 365 vĩďēō...##--!!]\",\"HTMLEmbedWebPartAriaLabel\":\"[!!--##Ƥŕēśś ēńţēŕ ōŕ ţĥē Ďōŵń àŕŕōŵ ķēŷ ţō ēńţēŕ ţĥē ēmƀēďďēď ćōńţēńţ.##--!!]\",\"IllegalSrc\":\"[!!--##Ēmƀēďďĩńĝ ćōńţēńţ ƒŕōm ţĥĩś ŵēƀśĩţē ĩśń\\u0027ţ àĺĺōŵēď. Ţĥĩś ĩś à śēţţĩńĝ ŷōũŕ àďmĩń ćàń ćĥàńĝē.##--!!]\",\"BasicGroupName\":\"[!!--##ßàśĩć##--!!]\",\"DisplayGroupName\":\"[!!--##Ďĩśƥĺàŷ##--!!]\",\"SourceCheckFormatError\":\"[!!--##Ŵē ćàń\\u0027ţ vēŕĩƒŷ ţĥĩś Ōƒƒĩćē 365 vĩďēō ƒĩĺē.##--!!]\",\"EmptyPlaceholderContentEmbedWebPartIconLabel\":\"[!!--##Ēmƀēď##--!!]\",\"EmptyPlaceholderContentEmbedWebPartDescription\":\"[!!--##Ēńŕĩćĥ ŷōũŕ ƥàĝē ƀŷ ďĩśƥĺàŷĩńĝ ćōńţēńţ ƒŕōm ōţĥēŕ ŵēƀśĩţēś. Ƒōŕ ēxàmƥĺē, ŷōũ ćàń ēmƀēď à ŶōũŢũƀē vĩďēō, ōŕ śĥōŵ ßĩńĝ Màƥś ƒōŕ ƥēōƥĺē ţō ĝēţ ďĩŕēćţĩōńś. ##--!!]\",\"EmptyPlaceholderEmbededVideoWebPartIconLabel\":\"[!!--##Ōƒƒĩćē 365 Vĩďēō##--!!]\",\"EmptyPlaceholderEmbededVideoWebPartDescription\":\"[!!--##Ďĩśƥĺàŷ à vĩďēō ƒŕōm ŷōũŕ ōŕĝàńĩźàţĩōń\\u0027ś Ōƒƒĩćē 365 Vĩďēō ćĥàńńēĺś, śō ƥēōƥĺē ćàń ŵàţćĥ ĩţ ďĩŕēćţĺŷ ōń ŷōũŕ ƥàĝē.##--!!]\",\"OpenPropertyPaneButtonLabel\":\"[!!--##Àďď ēmƀēď ćōďē##--!!]\",\"AddVideoButtonLabel\":\"[!!--##Àďď vĩďēō##--!!]\",\"AddEmbedCodeButtonLabel\":\"[!!--##Àďď ēmƀēď ćōďē##--!!]\",\"CaptionPlaceholder\":\"[!!--##Àďď à ćàƥţĩōń##--!!]\",\"UseHTTPS\":\"[!!--##Ŵē ōńĺŷ śũƥƥōŕţ ēmƀēďďĩńĝ ćōńţēńţ ƒŕōm śēćũŕē ŵēƀśĩţēś (ţĥēĩŕ àďďŕēśśēś śţàŕţ ŵĩţĥ ĥţţƥś.) Ĩƒ ĩţ\\u0027ś ĩmƥōŕţàńţ ţō ēmƀēď ćōńţēńţ ƒŕōm ũńśēćũŕēď ŵēƀśĩţēś, ƥĺēàśē śēńď ũś ƒēēďƀàćķ.##--!!]\",\"DisableEmbed\":\"[!!--##Ţĥē ōŵńēŕ ōƒ ţĥĩś ćōńţēńţ ďōēśń\\u0027ţ àĺĺōŵ ēmƀēďďĩńĝ.##--!!]\",\"LearnMore\":\"[!!--##Ĺēàŕń Mōŕē##--!!]\",\"HintTextForEmbedScreenReader\":\"[!!--##Ƥàśţē ēĩţĥēŕ ŵēƀśĩţē àďďŕēśś ōŕ ēmƀēď ćōďē ĥēŕē##--!!]\",\"HintTextForEmbed\":\"[!!--##ĥţţƥś://ŵŵŵ.ŷōũţũƀē.ćōm/ŵàţćĥ?v=...\\nōŕ\\n<ĩƒŕàmē ŵĩďţĥ=\\u0022853\\u0022 ĥēĩĝĥţ=\\u0022480\\u0022...##--!!]\",\"HintTextForVideoScreenReader\":\"[!!--##Ƥàśţē Ōƒƒĩćē 365 vĩďēō àďďŕēśś ĥēŕē##--!!]\",\"AccessibleHintTextTemplate\":\"[!!--##{0} {1}.##--!!]\",\"HintTextForVideo\":\"[!!--##ĥţţƥś://ćōńţōśō.śĥàŕēƥōĩńţ.ćōm/ƥōŕţàĺś/ĥũƀ/...##--!!]\",\"EmbedSuccessPrompt\":\"[!!--##Ēmƀēďďēď ţĥē ćōńţēńţ śũććēśśƒũĺĺŷ##--!!]\",\"VideoEmbedSuccessPrompt\":\"[!!--##Ēmƀēďďēď ţĥē vĩďēō śũććēśśƒũĺĺŷ##--!!]\",\"UnsupportedEmbedUrl\":\"[!!--##Ţĥĩś ŵēƀśĩţē ďōēśń\\u0027ţ śũƥƥōŕţ ēmƀēďďĩńĝ ũśĩńĝ Ĵũśţ ţĥē àďďŕēśś. Ţŕŷ ƥàśţĩńĝ ţĥē ēmƀēď ćōďē ĩńśţēàď. Ĩƒ ĩţ\\u0027ś ĩmƥōŕţàńţ ţō ēmƀēď ƒŕōm ţĥĩś śĩţē ũśĩńĝ Ĵũśţ ţĥē àďďŕēśś, ƥĺēàśē śēńď ũś ƒēēďƀàćķ.##--!!]\",\"TextAreaHint\":\"[!!--##Ţĥĩś ĩś à mũĺţĩĺĩńē ţēxţ ƀōx.##--!!]\",\"VideoChannelUrlName\":\"[!!--##Ĝō ţō ŷōũŕ ōŕĝàńĩźàţĩōń\\u0027ś vĩďēō ƥōŕţàĺ##--!!]\",\"OnlyChannelUrlError\":\"[!!--##Ţĥĩś śēēmś ĺĩķē ţĥē ŵēƀ àďďŕēśś ƒōŕ à vĩďēō ćĥàńńēĺ, ŵĥĩćĥ ćàń ćōńţàĩń śēvēŕàĺ vĩďēōś. Ćĺĩćķ ōń ţĥē vĩďēō ŷōũ ŵàńţ ţō ďĩśƥĺàŷ ƒŕōm ţĥàţ ćĥàńńēĺ àńď ƥàśţē ţĥàţ àďďŕēśś ĩńśţēàď.##--!!]\",\"FitToWidth\":\"[!!--##Ŕēśĩźē ţō ƒĩţ ţĥē ƥàĝē##--!!]\",\"NotSettingEmbedableService\":\"[!!--##Ĥàvē ńōţ śēţ ēmƀēďàƀĺēŚēŕvĩćē##--!!]\",\"HTMLEmbedBoundingRectZero\":\"[!!--##ßōũńďĩńĝ Źōńē ōƒ ĤŢMĹĒmƀēď ĩś 0##--!!]\",\"ThumbnailLoadError\":\"[!!--##Ƒàĩĺ ţō àććēśś ĩmàĝē śōũŕćē ƒŕōm ţĥũmƀńàĩĺ ŨŔĹ##--!!]\"}");

/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: EmbedCodeType, EmbedCodeShownType, EmbedDataSourceType, HTMLEmbed, EmbeddableServiceFactory, EmbedServiceResponseCode, getEmbedServiceClassName, HtmlValidator, SPEmbeddableService, O365VideoEmbeddableService, O365VideoIframeUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HTMLEmbed_Props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLEmbed.Props */ "eVr9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbedCodeType", function() { return _HTMLEmbed_Props__WEBPACK_IMPORTED_MODULE_0__["EmbedCodeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbedCodeShownType", function() { return _HTMLEmbed_Props__WEBPACK_IMPORTED_MODULE_0__["EmbedCodeShownType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbedDataSourceType", function() { return _HTMLEmbed_Props__WEBPACK_IMPORTED_MODULE_0__["EmbedDataSourceType"]; });

/* harmony import */ var _HTMLEmbed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HTMLEmbed */ "3THY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLEmbed", function() { return _HTMLEmbed__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _EmbeddableService_EmbeddableServiceFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmbeddableService/EmbeddableServiceFactory */ "HwzI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableServiceFactory", function() { return _EmbeddableService_EmbeddableServiceFactory__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _EmbeddableService_IEmbeddableService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EmbeddableService/IEmbeddableService */ "pQyg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbedServiceResponseCode", function() { return _EmbeddableService_IEmbeddableService__WEBPACK_IMPORTED_MODULE_3__["EmbedServiceResponseCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEmbedServiceClassName", function() { return _EmbeddableService_IEmbeddableService__WEBPACK_IMPORTED_MODULE_3__["getEmbedServiceClassName"]; });

/* harmony import */ var _HtmlValidator_HtmlValidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HtmlValidator/HtmlValidator */ "/bDD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HtmlValidator", function() { return _HtmlValidator_HtmlValidator__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _EmbeddableService_SPEmbeddableService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EmbeddableService/SPEmbeddableService */ "K2OD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPEmbeddableService", function() { return _EmbeddableService_SPEmbeddableService__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _EmbeddableService_O365VideoEmbeddableService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EmbeddableService/O365VideoEmbeddableService */ "LoNQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "O365VideoEmbeddableService", function() { return _EmbeddableService_O365VideoEmbeddableService__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _videoIframeUtilities_O365VideoIframeUtilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./videoIframeUtilities/O365VideoIframeUtilities */ "VbJu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "O365VideoIframeUtilities", function() { return _videoIframeUtilities_O365VideoIframeUtilities__WEBPACK_IMPORTED_MODULE_7__["default"]; });











/***/ }),

/***/ "pQyg":
/*!*****************************************************!*\
  !*** ./lib/EmbeddableService/IEmbeddableService.js ***!
  \*****************************************************/
/*! exports provided: EmbedServiceResponseCode, getEmbedServiceClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbedServiceResponseCode", function() { return EmbedServiceResponseCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmbedServiceClassName", function() { return getEmbedServiceClassName; });
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file IEmbeddableService.ts
 */
// tslint:disable-next-line:typedef variable-name
var EmbedServiceResponseCode = {
    OK: 0,
    EmbedServiceInternalError: 1,
    NoSupportedEmbedService: 2,
    GetEmbedCodeError: 3,
    SharePointPageNoPermission: 4,
    NotAllowEmbed: 5
};
function getEmbedServiceClassName(embedService) {
    return embedService ? embedService.constructor.toString().match(/\w+/g)[1] : '';
}


/***/ }),

/***/ "qC0m":
/*!****************************************!*\
  !*** ./lib/style/HTMLEmbed.module.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./HTMLEmbed.module.css */ "l9CO");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "s9io":
/*!***************************************************!*\
  !*** ./lib/HtmlGenerator/HtmlGeneratorFactory.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IframeGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IframeGenerator */ "iGrj");
/* harmony import */ var _ImageGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageGenerator */ "yWV3");
/* harmony import */ var _BingPreviewStyleGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BingPreviewStyleGenerator */ "aGjg");
/* harmony import */ var _HTMLEmbed_Props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HTMLEmbed.Props */ "eVr9");




var HtmlGeneratorFactory = /** @class */ (function () {
    function HtmlGeneratorFactory() {
    }
    HtmlGeneratorFactory.createHtmlGenerator = function (htmlGeneratorProps) {
        if (htmlGeneratorProps.embedCodeShownType === _HTMLEmbed_Props__WEBPACK_IMPORTED_MODULE_3__["EmbedCodeShownType"].BingPreviewStyle) {
            return new _BingPreviewStyleGenerator__WEBPACK_IMPORTED_MODULE_2__["default"](htmlGeneratorProps);
        }
        if (!htmlGeneratorProps.type) {
            return HtmlGeneratorFactory.createHtmlGeneratorWithoutType(htmlGeneratorProps);
        }
        switch (htmlGeneratorProps.type) {
            case "photo" /* photo */:
                return new _ImageGenerator__WEBPACK_IMPORTED_MODULE_1__["default"](htmlGeneratorProps);
            default:
                return new _IframeGenerator__WEBPACK_IMPORTED_MODULE_0__["default"](htmlGeneratorProps);
        }
    };
    HtmlGeneratorFactory.createHtmlGeneratorWithoutType = function (htmlGeneratorProps) {
        return new _IframeGenerator__WEBPACK_IMPORTED_MODULE_0__["default"](htmlGeneratorProps);
    };
    return HtmlGeneratorFactory;
}());
/* harmony default export */ __webpack_exports__["default"] = (HtmlGeneratorFactory);


/***/ }),

/***/ "ut3N":
/*!********************************************!*\
  !*** external "@microsoft/sp-diagnostics" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ut3N__;

/***/ }),

/***/ "vlQI":
/*!*************************************!*\
  !*** external "@microsoft/sp-http" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vlQI__;

/***/ }),

/***/ "w4+A":
/*!*******************************!*\
  !*** ./lib/common/Flights.js ***!
  \*******************************/
/*! exports provided: isDeprecateEmphasisClassFlightEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDeprecateEmphasisClassFlightEnabled", function() { return isDeprecateEmphasisClassFlightEnabled; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */

// tslint:disable-next-line: export-name
function isDeprecateEmphasisClassFlightEnabled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(276 /* SOXDeprecateEmphasisClass */);
}


/***/ }),

/***/ "y88i":
/*!********************************************!*\
  !*** external "@ms/odsp-utilities-bundle" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_y88i__;

/***/ }),

/***/ "yWV3":
/*!*********************************************!*\
  !*** ./lib/HtmlGenerator/ImageGenerator.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HtmlGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HtmlGenerator */ "5hre");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loc/Strings.resx */ "mGD9");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../loc/Strings.resx */ "mGD9", 1);
/* harmony import */ var _HtmlGeneratorHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HtmlGeneratorHelper */ "CyA3");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file ImageGenerator.tsx
 */






var ImageGenerator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ImageGenerator, _super);
    function ImageGenerator(htmlGeneratorProps) {
        var _this = _super.call(this, htmlGeneratorProps) || this;
        _this._createThumbnailRef = function (element) {
            _this._thumbnailLink = element;
        };
        _this._htmlGeneratorProps.htmlEmbedRect = _HtmlGeneratorHelper__WEBPACK_IMPORTED_MODULE_5__["default"].scaleZeroRectByRatio(_this._htmlGeneratorProps.htmlEmbedRect, ImageGenerator._defaultWidthHeightScale);
        return _this;
    }
    ImageGenerator.prototype.createHtmlElement = function () {
        var width = this.getWidth();
        var thumbnailUrl = _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["ThumbnailUrlGenerator"].updateThumbnailWidth(this._htmlGeneratorProps.metadata.Thumbnail, width);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: thumbnailUrl, target: '_blank', ref: this._createThumbnailRef },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: thumbnailUrl, width: width, height: this.getHeight(), alt: '', role: 'presentation' })));
    };
    ImageGenerator.prototype.getFilteredVanillaHtml = function () {
        return '';
    };
    ImageGenerator.prototype.focus = function () {
        if (this._thumbnailLink) {
            this._thumbnailLink.focus();
        }
    };
    ImageGenerator.prototype._internalValidate = function (vanillaHtml) {
        if (this._htmlGeneratorProps.metadata && this._htmlGeneratorProps.metadata.Thumbnail) {
            return Promise.resolve({ isValid: true, errorMessage: '' });
        }
        return Promise.resolve({ isValid: false, errorMessage: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_4__["IllegalRenderErrorMessage"] });
    };
    ImageGenerator.prototype.getWidth = function () {
        if (this._htmlGeneratorProps.shouldScale && this._htmlGeneratorProps.htmlEmbedRect.width) {
            return this._htmlGeneratorProps.htmlEmbedRect.width;
        }
        // !!!For now, just hard code the width since no one use it.
        return 500;
    };
    ImageGenerator.prototype.getHeight = function () {
        if (this._htmlGeneratorProps.shouldScale && this._htmlGeneratorProps.htmlEmbedRect.height) {
            return this._htmlGeneratorProps.htmlEmbedRect.height;
        }
        // !!!For now, just hard code the height since no one use it.
        return 500;
    };
    ImageGenerator._defaultWidthHeightScale = 1.5;
    return ImageGenerator;
}(_HtmlGenerator__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ImageGenerator);


/***/ })

/******/ })});;
//# sourceMappingURL=sp-html-embed_[locale].js.map