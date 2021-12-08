define("8494e7d7-6b99-47b2-a741-59873e42f16f_11.10.1", ["tslib","@ms/sp-telemetry","@microsoft/sp-image-helper","@microsoft/sp-loader","@microsoft/office-ui-fabric-react-bundle","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/sp-page-context","@ms/i18n-utilities","react","@microsoft/load-themed-styles","@microsoft/sp-diagnostics","@ms/odsp-utilities-bundle"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE__2q6Q__, __WEBPACK_EXTERNAL_MODULE__8dK2__, __WEBPACK_EXTERNAL_MODULE_I6O9__, __WEBPACK_EXTERNAL_MODULE_KL1q__, __WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_X_PM__, __WEBPACK_EXTERNAL_MODULE_Ycni__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_jOlS__, __WEBPACK_EXTERNAL_MODULE_ut3N__, __WEBPACK_EXTERNAL_MODULE_y88i__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// Returns a list of SPFx components used in a given chunk but not used in the runtime chunk
/******/ 	function getAsyncSpfxComponents(chunkId) {
/******/ 		var component_0 = { // @microsoft/sp-http
/******/ 			i: "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
/******/ 			v: "1.12.1",
/******/ 			m: "vlQI"
/******/ 		};
/******/ 		var component_1 = { // react-dom
/******/ 			i: "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
/******/ 			v: "16.9.0",
/******/ 			m: "faye"
/******/ 		};
/******/ 		var component_2 = { // @ms/uifabric-styling-bundle
/******/ 			i: "17ce0976-e69a-4355-be84-89b69a74717d",
/******/ 			v: "0.1.0",
/******/ 			m: "fglE"
/******/ 		};
/******/ 		var component_3 = { // @ms/sp-a11y
/******/ 			i: "05ed6956-59ad-4aa6-9e4e-b832c96ae87b",
/******/ 			v: "0.7.17",
/******/ 			m: "ytfe"
/******/ 		};
/******/ 		var component_4 = { // @ms/odsp-core-bundle
/******/ 			i: "2e09fb9b-13bb-48f2-859f-97d6fff71176",
/******/ 			v: "1.1.13",
/******/ 			m: "K9kD"
/******/ 		};
/******/
/******/ 		return {"sp-remote-web-file-getter": [component_0],"vendors~dialog-utility": [component_1, component_2],"dialog-utility": [component_1, component_3],"vendors~sp-component-utilities-peoplepick~2558cf98": [component_4],"sp-component-utilities-peoplepicker-datasource": [component_0],"vendors~data-sync-nucleus": [component_2, component_4]}[chunkId] || [];
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"sp-component-utilities": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({"sp-i18n-utilities":"sp-i18n-utilities","sp-remote-web-file-getter":"sp-remote-web-file-getter","vendors~dialog-utility":"vendors~dialog-utility","dialog-utility":"dialog-utility","vendors~sp-component-utilities-edit":"vendors~sp-component-utilities-edit","vendors~sp-component-utilities-peoplepick~2558cf98":"vendors~sp-component-utilities-peoplepick~2558cf98","sp-component-utilities-peoplepicker-datasource":"sp-component-utilities-peoplepicker-datasource","vendors~data-sync-nucleus":"vendors~data-sync-nucleus"}[chunkId]||chunkId) + "_" + (["qps-ploc","none"])[{"0":1,"dialog-utility":0,"sp-i18n-utilities":1,"sp-remote-web-file-getter":1,"vendors~dialog-utility":1,"vendors~sp-component-utilities-edit":1,"vendors~sp-component-utilities-peoplepick~2558cf98":1,"sp-component-utilities-peoplepicker-datasource":1,"vendors~data-sync-nucleus":1}[chunkId]] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/ 		// SPFx Component async loading
/******/
/******/ 		var chunkAsyncComponents = getAsyncSpfxComponents(chunkId);
/******/ 		for (var i = 0; i < chunkAsyncComponents.length; i++) {
/******/ 			// Has the component already been loaded into the modules object?
/******/ 			if (!modules[chunkAsyncComponents[i].m]) {
/******/ 				(function (chunkComponent){
/******/ 					promises.push(spfxLoader.SPComponentLoader.loadComponentById(
/******/ 						chunkComponent.i,
/******/ 						chunkComponent.v
/******/ 					).then(function (component) {
/******/ 						modules[chunkComponent.m] = function(module) {
/******/ 							module.exports = component;
/******/ 						};
/******/ 					}));
/******/ 				})(chunkAsyncComponents[i]);
/******/ 			}
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	var spfxLoader = __webpack_require__("I6O9");
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp_8494e7d7_6b99_47b2_a741_59873e42f16f_11_10_1"] = window["webpackJsonp_8494e7d7_6b99_47b2_a741_59873e42f16f_11_10_1"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Set the webpack public path
/******/ 	(function () {
/******/ 	  var scripts = document.getElementsByTagName('script');
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : /sp-component-utilities_qps-ploc\.js/i;
/******/ 	  var publicPath;
/******/
/******/ 	  if (scripts && scripts.length) {
/******/ 	    for (var i = 0; i < scripts.length; i++) {
/******/ 	      if (!scripts[i]) continue;
/******/ 	      var path = scripts[i].getAttribute('src');
/******/ 	      if (path && path.match(regex)) {
/******/ 	        publicPath = path.substring(0, path.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/
/******/ 	  if (!publicPath) {
/******/ 	    for (var global in window.__setWebpackPublicPathLoaderSrcRegistry__) {
/******/ 	      if (global && global.match(regex)) {
/******/ 	        publicPath = global.substring(0, global.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	  __webpack_require__.p = publicPath;
/******/ 	})();
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "mwqp");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+5yf":
/*!*******************************************!*\
  !*** ./lib/layouts/DefaultImageHelper.js ***!
  \*******************************************/
/*! exports provided: DefaultImageHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultImageHelper", function() { return DefaultImageHelper; });
/* harmony import */ var _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-image-helper */ "8dK2");
/* harmony import */ var _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */

var DEFAULT_IMAGE1_JPG = __webpack_require__(/*! ../assets/defaultImage1.jpg */ "N8z2");
var DEFAULT_IMAGE2_JPG = __webpack_require__(/*! ../assets/defaultImage2.jpg */ "IiD6");
var DEFAULT_IMAGE3_JPG = __webpack_require__(/*! ../assets/defaultImage3.jpg */ "hjoG");
var DEFAULT_IMAGE4_JPG = __webpack_require__(/*! ../assets/defaultImage4.jpg */ "P0ji");
var DEFAULT_IMAGE5_JPG = __webpack_require__(/*! ../assets/defaultImage5.jpg */ "ERKq");
var DEFAULT_PORTFOLIO1_PNG = __webpack_require__(/*! ../assets/portfolioDefaultImage1.png */ "Jw2e");
var DEFAULT_PORTFOLIO2_PNG = __webpack_require__(/*! ../assets/portfolioDefaultImage2.png */ "bMgq");
var DEFAULT_PORTFOLIO3_PNG = __webpack_require__(/*! ../assets/portfolioDefaultImage3.png */ "DeWO");
var DEFAULT_IMAGE1_PNG = __webpack_require__(/*! ../assets/reportDefaultImage1.png */ "ZzUU");
var DEFAULT_IMAGE2_PNG = __webpack_require__(/*! ../assets/reportDefaultImage2.png */ "DXzA");
var DEFAULT_IMAGE3_PNG = __webpack_require__(/*! ../assets/reportDefaultImage3.png */ "rszi");
var DEFAULT_IMAGE4_PNG = __webpack_require__(/*! ../assets/reportDefaultImage4.png */ "CQB5");
var DEFAULT_IMAGE5_PNG = __webpack_require__(/*! ../assets/reportDefaultImage5.png */ "RCxI");
var DEFAULT_IMAGE1_JPG_SM = DEFAULT_IMAGE1_JPG;
var DEFAULT_IMAGE2_JPG_SM = DEFAULT_IMAGE2_JPG;
var DEFAULT_IMAGE3_JPG_SM = DEFAULT_IMAGE3_JPG;
var DEFAULT_IMAGE4_JPG_SM = DEFAULT_IMAGE4_JPG;
var DEFAULT_IMAGE5_JPG_SM = DEFAULT_IMAGE5_JPG;
var DEFAULT_PORTFOLIO1_PNG_SM = __webpack_require__(/*! ../assets/portfolioDefaultImage1sm.png */ "wsap");
var DEFAULT_PORTFOLIO2_PNG_SM = __webpack_require__(/*! ../assets/portfolioDefaultImage2sm.png */ "YEwp");
var DEFAULT_PORTFOLIO3_PNG_SM = __webpack_require__(/*! ../assets/portfolioDefaultImage3sm.png */ "UY3P");
var DEFAULT_IMAGE1_PNG_SM = __webpack_require__(/*! ../assets/reportDefaultImage1sm.png */ "uRS8");
var DEFAULT_IMAGE2_PNG_SM = DEFAULT_IMAGE2_PNG;
var DEFAULT_IMAGE3_PNG_SM = __webpack_require__(/*! ../assets/reportDefaultImage3sm.png */ "JEku");
var DEFAULT_IMAGE4_PNG_SM = __webpack_require__(/*! ../assets/reportDefaultImage4sm.png */ "2qYO");
var DEFAULT_IMAGE5_PNG_SM = __webpack_require__(/*! ../assets/reportDefaultImage5sm.png */ "lMrs");
var DEFAULT_NEWS_CAROUSEL1 = __webpack_require__(/*! @ms/odsp-media/dist/media/images/news/carousel/newsCarousel1.png */ "uYc5");
var DEFAULT_NEWS_CAROUSEL2 = __webpack_require__(/*! @ms/odsp-media/dist/media/images/news/carousel/newsCarousel2.png */ "HaTg");
var DEFAULT_NEWS_CAROUSEL3 = __webpack_require__(/*! @ms/odsp-media/dist/media/images/news/carousel/newsCarousel3.png */ "fZrL");
var DEFAULT_NEWS_CAROUSEL1_SM = __webpack_require__(/*! @ms/odsp-media/dist/media/images/news/carousel/newsCarousel1sm.png */ "76bb");
var DEFAULT_NEWS_CAROUSEL2_SM = __webpack_require__(/*! @ms/odsp-media/dist/media/images/news/carousel/newsCarousel2sm.png */ "GX8U");
var DEFAULT_NEWS_CAROUSEL3_SM = __webpack_require__(/*! @ms/odsp-media/dist/media/images/news/carousel/newsCarousel3sm.png */ "vpCX");
var DefaultImageHelper = /** @class */ (function () {
    function DefaultImageHelper() {
    }
    /**
     * Returns default image url if path is pointing to it
     * According to width, it will use different sets of images
     * Note: width parameter is scaled window.devicePixelRatio times
     */
    DefaultImageHelper.getDefaultImage = function (resourcePath, width) {
        if (!resourcePath) {
            return undefined;
        }
        if (DefaultImageHelper.defaultImageUrlMap.hasOwnProperty(resourcePath.path)) {
            if (_microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_PreviewUtility"].scaleByPixelRatio(width) <= DefaultImageHelper.widthForSmallImage) {
                return DefaultImageHelper.defaultSmallImageUrlMap[resourcePath.path];
            }
            else {
                return DefaultImageHelper.defaultImageUrlMap[resourcePath.path];
            }
        }
        else {
            var serverRelativePath = resourcePath.path;
            if (resourcePath.path) {
                serverRelativePath = serverRelativePath.toUpperCase();
                var indexOfLayouts = serverRelativePath.indexOf('/_LAYOUTS/IMAGES/');
                if (indexOfLayouts > -1) {
                    serverRelativePath = serverRelativePath.substr(indexOfLayouts);
                    if (DefaultImageHelper.defaultImageUrlMap.hasOwnProperty(serverRelativePath)) {
                        return DefaultImageHelper.defaultImageUrlMap[serverRelativePath];
                    }
                }
            }
            // If request already is already stock Default Asset URL, just return it.
            if (resourcePath.authority) {
                var defaultImage1Path = new _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_SPResourcePath"](DefaultImageHelper.defaultImageUrlMap[DefaultImageHelper.REPORTSITEDEFAULTIMAGE1]);
                if (defaultImage1Path.authority && defaultImage1Path.authority === resourcePath.authority) {
                    return resourcePath.value;
                }
            }
        }
        return undefined;
    };
    /**
     * Get default image based on the index for Hero web part
     * Note: width parameter is scaled window.devicePixelRatio times
     */
    DefaultImageHelper.getDefaultImageById = function (id, width) {
        var small = width !== undefined &&
            _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_PreviewUtility"].scaleByPixelRatio(width) <= DefaultImageHelper.widthForSmallImage;
        switch (id) {
            case 0:
                return small ? DEFAULT_IMAGE1_JPG_SM : DEFAULT_IMAGE1_JPG;
            case 1:
                return small ? DEFAULT_IMAGE2_JPG_SM : DEFAULT_IMAGE2_JPG;
            case 2:
                return small ? DEFAULT_IMAGE3_JPG_SM : DEFAULT_IMAGE3_JPG;
            case 3:
                return small ? DEFAULT_IMAGE4_JPG_SM : DEFAULT_IMAGE4_JPG;
            case 4:
                return small ? DEFAULT_IMAGE5_JPG_SM : DEFAULT_IMAGE5_JPG;
            case 5:
                return small ? DEFAULT_PORTFOLIO1_PNG_SM : DEFAULT_PORTFOLIO1_PNG;
            case 6:
                return small ? DEFAULT_PORTFOLIO2_PNG_SM : DEFAULT_PORTFOLIO2_PNG;
            case 7:
                return small ? DEFAULT_PORTFOLIO3_PNG_SM : DEFAULT_PORTFOLIO3_PNG;
            default:
                return undefined;
        }
    };
    /**
     * Get stock images for the news carousel web part
     * @param id index for the image to get
     * @param width pixel width of the web part
     */
    DefaultImageHelper.getDefaultNewsCarouselImageById = function (id, width) {
        var small = width !== undefined &&
            _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_PreviewUtility"].scaleByPixelRatio(width) <= DefaultImageHelper.widthForSmallImage;
        switch (id) {
            case 0:
                return small ? DEFAULT_NEWS_CAROUSEL1_SM : DEFAULT_NEWS_CAROUSEL1;
            case 1:
                return small ? DEFAULT_NEWS_CAROUSEL2_SM : DEFAULT_NEWS_CAROUSEL2;
            case 2:
                return small ? DEFAULT_NEWS_CAROUSEL3_SM : DEFAULT_NEWS_CAROUSEL3;
            default:
                return undefined;
        }
    };
    /**
     * Returns true if given path represents stock image.
     * Stock image path are virtual, actual Image URL is determinsed at runtime.
     * e.g. /_LAYOUTS/IMAGES/REPORTSITEDEFAULTIMAGE1.PNG
     * @param originalImagePath - Path of the origianal Image URL to check if it is default layout image.
     */
    // tslint:disable-next-line: member-ordering
    DefaultImageHelper.isStockImage = function (originalImagePath) {
        if (originalImagePath) {
            if (originalImagePath instanceof _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_SPResourcePath"]) {
                return !!DefaultImageHelper.getDefaultImage(originalImagePath);
            }
            else {
                return !!DefaultImageHelper.getDefaultImage(new _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_SPResourcePath"](originalImagePath));
            }
        }
        return false;
    };
    DefaultImageHelper.REPORTSITEDEFAULTIMAGE1 = '/_LAYOUTS/IMAGES/REPORTSITEDEFAULTIMAGE1.PNG';
    /* tslint:disable:max-line-length */
    DefaultImageHelper.defaultImageUrlMap = {
        '/_LAYOUTS/IMAGES/REPORTSITEDEFAULTIMAGE1.PNG': DEFAULT_IMAGE1_PNG,
        '/_LAYOUTS/IMAGES/REPORTSITEDEFAULTIMAGE2.PNG': DEFAULT_IMAGE2_PNG,
        '/_LAYOUTS/IMAGES/REPORTSITEDEFAULTIMAGE3.PNG': DEFAULT_IMAGE3_PNG,
        '/_LAYOUTS/IMAGES/REPORTSITEDEFAULTIMAGE4.PNG': DEFAULT_IMAGE4_PNG,
        '/_LAYOUTS/IMAGES/REPORTSITEDEFAULTIMAGE5.PNG': DEFAULT_IMAGE5_PNG,
        '/_LAYOUTS/IMAGES/PORTFOLIOSITEDEFAULTIMAGE1.PNG': DEFAULT_PORTFOLIO1_PNG,
        '/_LAYOUTS/IMAGES/PORTFOLIOSITEDEFAULTIMAGE2.PNG': DEFAULT_PORTFOLIO2_PNG,
        '/_LAYOUTS/IMAGES/PORTFOLIOSITEDEFAULTIMAGE3.PNG': DEFAULT_PORTFOLIO3_PNG,
        '/_LAYOUTS/IMAGES/PORTFOLIOIMAGEGALLERYCHAIRS.PNG': __webpack_require__(/*! ../assets/portfolioImageGalleryChairs.png */ "JIqX"),
        '/_LAYOUTS/IMAGES/PORTFOLIOIMAGEGALLERYCUSHIONS.PNG': __webpack_require__(/*! ../assets/portfolioImageGalleryCushions.png */ "L9FC"),
        '/_LAYOUTS/IMAGES/PORTFOLIOIMAGEGALLERYHANDRAIL.PNG': __webpack_require__(/*! ../assets/portfolioImageGalleryHandrail.png */ "1OwT"),
        '/_LAYOUTS/IMAGES/PORTFOLIOIMAGEGALLERYLAMPS.PNG': __webpack_require__(/*! ../assets/portfolioImageGalleryLamps.png */ "j+LK"),
        '/_LAYOUTS/IMAGES/PORTFOLIOIMAGEGALLERYLOUNGE.PNG': __webpack_require__(/*! ../assets/portfolioImageGalleryLounge.png */ "3adW"),
        '/_LAYOUTS/IMAGES/PORTFOLIOIMAGEGALLERYPENDANT.PNG': __webpack_require__(/*! ../assets/portfolioImageGalleryPendant.png */ "Egrv"),
        '/_LAYOUTS/IMAGES/PORTFOLIOIMAGEGALLERYWALL.PNG': __webpack_require__(/*! ../assets/portfolioImageGalleryWall.png */ "QZvf"),
        '/_LAYOUTS/IMAGES/PORTFOLIOIMAGEGALLERYWOOD.PNG': __webpack_require__(/*! ../assets/portfolioImageGalleryWood.png */ "98T/"),
        '/_LAYOUTS/IMAGES/VISUALTEMPLATETITLEIMAGE.JPG': __webpack_require__(/*! @ms/odsp-media/dist/media/images/pageTemplates/visualTemplateTitleImage.jpg */ "Zayf"),
        '/_LAYOUTS/IMAGES/VISUALTEMPLATEIMAGE1.JPG': __webpack_require__(/*! @ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImage1.jpg */ "mKki"),
        '/_LAYOUTS/IMAGES/VISUALTEMPLATEIMAGE2.JPG': __webpack_require__(/*! @ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImage2.jpg */ "LsuO"),
        '/_LAYOUTS/IMAGES/VISUALTEMPLATEIMAGE7.JPG': __webpack_require__(/*! @ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImage7.jpg */ "RQq+"),
        '/_LAYOUTS/IMAGES/VISUALTEMPLATEIMAGE8.JPG': __webpack_require__(/*! @ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImage8.jpg */ "7VWT"),
        '/_LAYOUTS/IMAGES/VISUALTEMPLATEIMAGE9.JPG': __webpack_require__(/*! @ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImage9.jpg */ "Fdlo"),
        '/_LAYOUTS/IMAGES/VISUALTEMPLATEIMAGE10.JPG': __webpack_require__(/*! @ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImage10.jpg */ "LbuF"),
        '/_LAYOUTS/IMAGES/VISUALTEMPLATEIMAGE11.JPG': __webpack_require__(/*! @ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImage11.jpg */ "9Mf3"),
        '/_LAYOUTS/IMAGES/VISUALTEMPLATEIMAGETILE.JPG': __webpack_require__(/*! @ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImageTile.jpg */ "I4GV"),
        '/_LAYOUTS/IMAGES/SLEEKTEMPLATEIMAGETILE.JPG': __webpack_require__(/*! @ms/odsp-media/dist/media/images/pageTemplates/sleekTemplateImageTile.jpg */ "sJ/D")
    };
    DefaultImageHelper.defaultSmallImageUrlMap = {
        '/_LAYOUTS/IMAGES/REPORTSITEDEFAULTIMAGE1.PNG': DEFAULT_IMAGE1_PNG_SM,
        '/_LAYOUTS/IMAGES/REPORTSITEDEFAULTIMAGE2.PNG': DEFAULT_IMAGE2_PNG_SM,
        '/_LAYOUTS/IMAGES/REPORTSITEDEFAULTIMAGE3.PNG': DEFAULT_IMAGE3_PNG_SM,
        '/_LAYOUTS/IMAGES/REPORTSITEDEFAULTIMAGE4.PNG': DEFAULT_IMAGE4_PNG_SM,
        '/_LAYOUTS/IMAGES/REPORTSITEDEFAULTIMAGE5.PNG': DEFAULT_IMAGE5_PNG_SM,
        '/_LAYOUTS/IMAGES/PORTFOLIOSITEDEFAULTIMAGE1.PNG': DEFAULT_PORTFOLIO1_PNG_SM,
        '/_LAYOUTS/IMAGES/PORTFOLIOSITEDEFAULTIMAGE2.PNG': DEFAULT_PORTFOLIO2_PNG_SM,
        '/_LAYOUTS/IMAGES/PORTFOLIOSITEDEFAULTIMAGE3.PNG': DEFAULT_PORTFOLIO3_PNG_SM,
        '/_LAYOUTS/IMAGES/PORTFOLIOIMAGEGALLERYCHAIRS.PNG': __webpack_require__(/*! ../assets/portfolioImageGalleryChairsSm.png */ "o5ir"),
        '/_LAYOUTS/IMAGES/PORTFOLIOIMAGEGALLERYCUSHIONS.PNG': __webpack_require__(/*! ../assets/portfolioImageGalleryCushionsSm.png */ "a9vk"),
        '/_LAYOUTS/IMAGES/PORTFOLIOIMAGEGALLERYHANDRAIL.PNG': __webpack_require__(/*! ../assets/portfolioImageGalleryHandrailSm.png */ "nKow"),
        '/_LAYOUTS/IMAGES/PORTFOLIOIMAGEGALLERYLAMPS.PNG': __webpack_require__(/*! ../assets/portfolioImageGalleryLampsSm.png */ "VibQ"),
        '/_LAYOUTS/IMAGES/PORTFOLIOIMAGEGALLERYLOUNGE.PNG': __webpack_require__(/*! ../assets/portfolioImageGalleryLoungeSm.png */ "R+rM"),
        '/_LAYOUTS/IMAGES/PORTFOLIOIMAGEGALLERYPENDANT.PNG': __webpack_require__(/*! ../assets/portfolioImageGalleryPendantSm.png */ "lsgA"),
        '/_LAYOUTS/IMAGES/PORTFOLIOIMAGEGALLERYWALL.PNG': __webpack_require__(/*! ../assets/portfolioImageGalleryWallSm.png */ "MGNV"),
        '/_LAYOUTS/IMAGES/PORTFOLIOIMAGEGALLERYWOOD.PNG': __webpack_require__(/*! ../assets/portfolioImageGalleryWoodSm.png */ "TUkU"),
        '/_LAYOUTS/IMAGES/VISUALTEMPLATEIMAGE1.JPG': __webpack_require__(/*! @ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImage1.jpg */ "mKki"),
        '/_LAYOUTS/IMAGES/VISUALTEMPLATEIMAGE2.JPG': __webpack_require__(/*! @ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImage2.jpg */ "LsuO"),
        '/_LAYOUTS/IMAGES/VISUALTEMPLATEIMAGE7.JPG': __webpack_require__(/*! @ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImage7.jpg */ "RQq+"),
        '/_LAYOUTS/IMAGES/VISUALTEMPLATEIMAGE8.JPG': __webpack_require__(/*! @ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImage8.jpg */ "7VWT"),
        '/_LAYOUTS/IMAGES/VISUALTEMPLATEIMAGE9.JPG': __webpack_require__(/*! @ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImage9.jpg */ "Fdlo"),
        '/_LAYOUTS/IMAGES/VISUALTEMPLATEIMAGE10.JPG': __webpack_require__(/*! @ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImage10.jpg */ "LbuF"),
        '/_LAYOUTS/IMAGES/VISUALTEMPLATEIMAGE11.JPG': __webpack_require__(/*! @ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImage11.jpg */ "9Mf3"),
        '/_LAYOUTS/IMAGES/SLEEKTEMPLATEIMAGETILE.JPG': __webpack_require__(/*! @ms/odsp-media/dist/media/images/pageTemplates/sleekTemplateImageTile.jpg */ "sJ/D")
    };
    /* tslint:enable:max-line-length */
    DefaultImageHelper.widthForSmallImage = 450;
    return DefaultImageHelper;
}());



/***/ }),

/***/ "+ERe":
/*!**************************************!*\
  !*** ./lib/layouts/PreviewHelper.js ***!
  \**************************************/
/*! exports provided: PreviewHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewHelper", function() { return PreviewHelper; });
/* harmony import */ var _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-image-helper */ "8dK2");
/* harmony import */ var _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file utility functions to determine whether file type supports preview.
 * and return the preview image url based on the file url
 *
 * @deprecated Please find this class and method in the new microsoft/sp-image-helper package.
 */

var PreviewHelper = /** @class */ (function () {
    function PreviewHelper() {
    }
    /**
     * Returns true if the filetype is supported for preview.
     *
     * @deprecated Please find this class and method in the new microsoft/sp-image-helper package.
     */
    PreviewHelper.hasThumbnailOrFileTypeSupportsPreview = function (fileType, thumbnail) {
        return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_PreviewHelper"].hasThumbnailOrFileTypeSupportsPreview(fileType, thumbnail);
    };
    /**
     * Returns preview image URL for supported file extentions using getPreview.aspx service
     * Note: width parameter is scaled window.devicePixelRatio times to handle high DPI for example
     *
     * @deprecated Please find this class and method in the new microsoft/sp-image-helper package.
     */
    PreviewHelper.getPreviewImageUrl = function (fileType, thumbnail, baseUrl, path, siteId, webId, uniqueId, width, isBannerImageUrl, callerId, originalWidth, originalHeight) {
        return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_PreviewHelper"].getPreviewImageUrl(fileType, thumbnail, baseUrl, path, siteId, webId, uniqueId, width, isBannerImageUrl, callerId, originalWidth, originalHeight);
    };
    PreviewHelper.GUID_SITE = 'guidSite';
    PreviewHelper.GUID_WEB = 'guidWeb';
    PreviewHelper.GUID_FILE = 'guidFile';
    return PreviewHelper;
}());



/***/ }),

/***/ "+ORw":
/*!************************************!*\
  !*** ./lib/common/KillSwitches.js ***!
  \************************************/
/*! exports provided: KillSwitches, isUseMockTopicDataKSActivated, isUseCortexTopicExperiencesCapabilityKSActivated, isLogCortexDisabledFlagGetFalseOnceKSActivated, skipLogEngagementForCortexDisabledKSActivated, removeCortexDisabledFlagforManagementAPIsKSActivated, isUseMockForCortexTABTestKSActivated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KillSwitches", function() { return KillSwitches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUseMockTopicDataKSActivated", function() { return isUseMockTopicDataKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUseCortexTopicExperiencesCapabilityKSActivated", function() { return isUseCortexTopicExperiencesCapabilityKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLogCortexDisabledFlagGetFalseOnceKSActivated", function() { return isLogCortexDisabledFlagGetFalseOnceKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipLogEngagementForCortexDisabledKSActivated", function() { return skipLogEngagementForCortexDisabledKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCortexDisabledFlagforManagementAPIsKSActivated", function() { return removeCortexDisabledFlagforManagementAPIsKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUseMockForCortexTABTestKSActivated", function() { return isUseMockForCortexTABTestKSActivated; });
/* harmony import */ var _performance_KillSwitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../performance/KillSwitch */ "k0Dt");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);


var KillSwitches = /** @class */ (function () {
    function KillSwitches() {
    }
    KillSwitches.newYoutubeUrlRegexKS = new _performance_KillSwitch__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('93326c3b-13a0-4ea5-9979-87eddec6d21a');
    KillSwitches.urlUtilityRefactor = new _performance_KillSwitch__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('77727f04-2ebb-4f7a-b916-692003f4dec7' /* '10/01/2019', 'Refactor URL utilities' */);
    return KillSwitches;
}());

function isUseMockTopicDataKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('b27c283f-9033-4ffd-b8f3-fa2d0df94179' /* '05/12/2020',
    'Add flag for mocking Topic Data APIs' */);
}
function isUseCortexTopicExperiencesCapabilityKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('ca79b9bc-75c7-408c-a782-3d77c04d41e9' /* '09/11/2020',
    'Cortex enabled check comming from Page Context' */);
}
function isLogCortexDisabledFlagGetFalseOnceKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('03fe1e3a-35a4-4d30-9d7d-eba1b4537dbb' /* '10/08/2020',
    'CortexDisabledFlag.Get.False gets logged only once per session instead of once per call' */);
}
function skipLogEngagementForCortexDisabledKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('e857fd57-8c06-424c-ab9c-ad26d18e5e3f' /* '12/02/2020',
    'Skips engagement logging for CortexDisabledFlag.Get.False' */);
}
function removeCortexDisabledFlagforManagementAPIsKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('9243c796-7671-4ca8-9aab-3c6252d8379b'
    /* '10/22/2020', 'Management API's should not disable cortex because they have a smaller set of authorized users.' */
    );
}
function isUseMockForCortexTABTestKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('fa29b3db-0910-4ee3-8f75-cd116fabcc43'
    /* '1/12/20221', 'Control if use mock data for TAB test' */
    );
}


/***/ }),

/***/ "+eAv":
/*!******************************************************************!*\
  !*** ./lib/fileTypeIcons/renderers/FileTypeIcons.module.scss.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./FileTypeIcons.module.css */ "YFf/");
var styles = {
    fileIcon: 'a_a_acd50736'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "17wl":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17wl__;

/***/ }),

/***/ "1OwT":
/*!******************************************************!*\
  !*** ./lib/assets/portfolioImageGalleryHandrail.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioImageGalleryHandrail_180cfb3e5546b592bbae46e48177fc02.png";

/***/ }),

/***/ "1PiT":
/*!****************************************!*\
  !*** ./lib/smartRace/loc/Strings.resx ***!
  \****************************************/
/*! exports provided: ErrorNoMorePromises, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ErrorNoMorePromises\":\"[!!--##Ńō mōŕē ƥŕōmĩśēś ţō ĥàńďĺē ĩń Śmàŕţ Ŕàćē.##--!!]\"}");

/***/ }),

/***/ "1r8z":
/*!**************************!*\
  !*** ./lib/SPUtility.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loc/Strings.resx */ "mGD9");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "mGD9", 1);
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

/***/ "2q6Q":
/*!***********************************!*\
  !*** external "@ms/sp-telemetry" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2q6Q__;

/***/ }),

/***/ "2qYO":
/*!**********************************************!*\
  !*** ./lib/assets/reportDefaultImage4sm.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "reportDefaultImage4sm_9db9fb2df847a36ad3afdf7c12a379f5.png";

/***/ }),

/***/ "3adW":
/*!****************************************************!*\
  !*** ./lib/assets/portfolioImageGalleryLounge.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioImageGalleryLounge_50d1492e4405d4163adeb0d1e1be664d.png";

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

/***/ "5I0j":
/*!***************************************************!*\
  !*** ./lib/pageService/SPModerationStatusType.js ***!
  \***************************************************/
/*! exports provided: SPModerationStatusType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPModerationStatusType", function() { return SPModerationStatusType; });
// tslint:disable-next-line:typedef variable-name
var SPModerationStatusType = {
    Approved: 0,
    Denied: 1,
    Pending: 2,
    Draft: 3,
    Scheduled: 4
};


/***/ }),

/***/ "76bb":
/*!**************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/news/carousel/newsCarousel1sm.png ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "newsCarousel1sm_18fd59a172858435a3a0fa05bd32dd74.png";

/***/ }),

/***/ "7VWT":
/*!*******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImage8.jpg ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "visualTemplateImage8_31ac4b01e16273a1c7ab48a7bb5b391e.jpg";

/***/ }),

/***/ "7d+0":
/*!***************************************!*\
  !*** ./lib/topics/TopicEventNames.js ***!
  \***************************************/
/*! exports provided: UPDATE_TOPIC_TITLE_SUB_HEADER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TOPIC_TITLE_SUB_HEADER", function() { return UPDATE_TOPIC_TITLE_SUB_HEADER; });
// tslint:disable-next-line:export-name
var UPDATE_TOPIC_TITLE_SUB_HEADER = 'CSIKM.TopicTitleRegion.UpdateSubHeader';


/***/ }),

/***/ "8dK2":
/*!*********************************************!*\
  !*** external "@microsoft/sp-image-helper" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8dK2__;

/***/ }),

/***/ "8sSu":
/*!****************************************************!*\
  !*** ./lib/topics/dataService/TopicDataService.js ***!
  \****************************************************/
/*! exports provided: TopicDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicDataService", function() { return TopicDataService; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @copyright (c) Microsoft Corporation. All rights reserved.
 */


var SERVICE_NAME = 'sp-topic-shared:topicDataService';
/**
 * Topic data service that stores shared data across knowledge Management web parts
 * @internal
 */
var TopicDataService = /** @class */ (function () {
    function TopicDataService() {
        this._addedAlternateNames = new Set();
    }
    Object.defineProperty(TopicDataService.prototype, "currentTopicEntity", {
        get: function () {
            return this._currentTopicEntity;
        },
        set: function (topicEntity) {
            if (topicEntity) {
                this._currentTopicEntity = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(topicEntity);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TopicDataService.prototype, "addedAlternateNames", {
        get: function () {
            return this._addedAlternateNames;
        },
        set: function (names) {
            this._addedAlternateNames = new Set(names);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TopicDataService.prototype, "topicPageConditions", {
        get: function () {
            return this._topicPageConditions;
        },
        set: function (conditions) {
            this._topicPageConditions = conditions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TopicDataService.prototype, "currentPageUniqueId", {
        get: function () {
            return this._uniqueId;
        },
        set: function (uniqueId) {
            this._uniqueId = uniqueId;
        },
        enumerable: true,
        configurable: true
    });
    TopicDataService.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create(SERVICE_NAME, TopicDataService);
    return TopicDataService;
}());



/***/ }),

/***/ "98T/":
/*!**************************************************!*\
  !*** ./lib/assets/portfolioImageGalleryWood.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioImageGalleryWood_a11f7902d25eb53a224cf8deec3b450b.png";

/***/ }),

/***/ "9Mf3":
/*!********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImage11.jpg ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "visualTemplateImage11_458f6bd95a911dafdd65ff6b77d4844f.jpg";

/***/ }),

/***/ "AKK3":
/*!****************************************!*\
  !*** ./lib/imaging/ImageSourceType.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// tslint:disable-next-line:typedef variable-name
var ImageSourceType = {
    uploadFailure: -1,
    none: 0,
    // deprecated: dataString: 1,
    sharepointURI: 2,
    // deprecated: hexValue: 3,
    default: 4,
    // Link to Stock Image hosted by cdn.hubblecontent.osi.office.net
    HubbleStockURI: 5
};
/* harmony default export */ __webpack_exports__["default"] = (ImageSourceType);


/***/ }),

/***/ "BdkO":
/*!*****************************!*\
  !*** ./lib/SPFREUtility.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);


var SPFREUtility = /** @class */ (function () {
    function SPFREUtility() {
    }
    SPFREUtility.dismissFRECallout = function (dataTag) {
        if (this._isFRERunning) {
            document.dispatchEvent(new CustomEvent(SPFREUtility.DISMISS_FRE_CALLOUT_EVENT, {
                detail: {
                    dataTag: dataTag
                }
            }));
        }
    };
    SPFREUtility.clearAllFRECallout = function () {
        if (this._isFRERunning) {
            document.dispatchEvent(new CustomEvent(SPFREUtility.DISMISS_FRE_CALLOUT_EVENT));
        }
    };
    Object.defineProperty(SPFREUtility, "_isFRERunning", {
        /**
         * Check if whether the event dispatch is needed.
         * Returns true if sessionStorage is present or unavailable
         */
        get: function () {
            if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1787 /* FRESequence */)) {
                try {
                    return Boolean(window.sessionStorage.getItem(SPFREUtility.FIRST_RUN_KEY));
                }
                catch (error) {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(SPFREUtility._logSource, error, 'SPFREUtility.sessionStorage');
                    // Dispatch the event anyway in case of session storage failure if FRE flight is on
                    // FRE event handler will be no-op if timer is not actually started
                    return true;
                }
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    SPFREUtility.DISMISS_FRE_CALLOUT_EVENT = 'DismissFRECallout';
    SPFREUtility.FIRST_RUN_KEY = 'FirstRunInProgress';
    SPFREUtility._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('UrlUtility');
    return SPFREUtility;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPFREUtility);


/***/ }),

/***/ "ByVl":
/*!************************************************!*\
  !*** ./lib/extensionHelper/ExtensionHelper.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SPResourcePath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SPResourcePath */ "OLPK");
/* harmony import */ var _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-image-helper */ "8dK2");
/* harmony import */ var _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file ExtensionHelper.ts
 */



var ExtensionHelper = /** @class */ (function () {
    function ExtensionHelper() {
    }
    /**
     * Extracts the filename extension based on file path (supports url).
     * @param {Uri | SPResourcePath} path Uri or SPResourcePath of the object.
     * @returns {string | undefined} Lowercase extension or undefined if input doesn't have one.
     */
    ExtensionHelper.getExtension = function (path) {
        if (!path) {
            return undefined;
        }
        var filePath;
        if (path instanceof _SPResourcePath__WEBPACK_IMPORTED_MODULE_1__["SPResourcePath"]) {
            return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_PreviewUtility"].getFileExtension(new _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_SPResourcePath"](path.value));
        }
        else if (typeof path === 'string') {
            filePath = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"](path).getPath(true /*trim trailing slash*/);
        }
        else {
            filePath = path.getPath(true /*trim trailing slash*/);
        }
        var extensionStart = filePath.lastIndexOf('.');
        if (extensionStart > -1) {
            return filePath.substr(extensionStart + 1).toLowerCase();
        }
        return undefined;
    };
    /**
     * Joins extensions in set to form a comma-separated string list.
     * Can be used for local device file filtering etc.
     * @param {Set<string>} set Collection of extensions without starting dot
     * @returns {string} Comma-separated string like '.pptx,.docx' or undefined if empty set.
     */
    ExtensionHelper.joinExtensionString = function (set) {
        if (!set || set.size < 1) {
            return undefined;
        }
        var array = [];
        set.forEach(function (ext) {
            array.push(ext);
        });
        // ie. '.pptx,.docx'
        return "." + array.join(',.');
    };
    return ExtensionHelper;
}());
/* harmony default export */ __webpack_exports__["default"] = (ExtensionHelper);


/***/ }),

/***/ "CQB5":
/*!********************************************!*\
  !*** ./lib/assets/reportDefaultImage4.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "reportDefaultImage4_f0eb038bb481da67950b7b3b3dae3435.png";

/***/ }),

/***/ "Co3T":
/*!**********************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/sp-resource-path@0.7.2/node_modules/@ms/sp-resource-path/lib-esm/SPResourcePath.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: SPResourcePathFormat, SPResourcePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPResourcePathFormat", function() { return SPResourcePathFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPResourcePath", function() { return SPResourcePath; });
/**
 * @public
 */
var SPResourcePathFormat;
(function (SPResourcePathFormat) {
    SPResourcePathFormat[SPResourcePathFormat["absolute"] = 0] = "absolute";
    SPResourcePathFormat[SPResourcePathFormat["relative"] = 1] = "relative";
    SPResourcePathFormat[SPResourcePathFormat["serverRelative"] = 2] = "serverRelative";
})(SPResourcePathFormat || (SPResourcePathFormat = {}));
/**
 * Simplified implementation of a URI parser which does not attempt decoding of segments,
 * handling of query strings, or separation of the fragment. Intended for use on SharePoint
 * Resource Paths or other URL-like entities which may not actually conform to the URL
 * specification, but may be used for simple transformations of URLs.
 *
 * This class makes several assumptions about the format of input URLs:
 * - Absolute URLs begin with '<scheme>://<host>'
 * - Relative URLs being with '/'
 * - URLs never have a trailing '/'
 *
 * @public
 */
var SPResourcePath = /** @class */ (function () {
    /**
     * Creates an instance of SPResourcePath.
     *
     * @param value - A string representing a well-formed, decoded SharePoint resource path.
     */
    function SPResourcePath(value) {
        if (value === void 0) { value = ''; }
        var rootDelimeter = '//';
        var indexOfRootDelimeter = value.indexOf(rootDelimeter);
        var indexOfPathDelimeter = value.indexOf('/');
        // The root delimeter is the first instance of '//', unless preceded by a lone '/'
        var endIndexOfRootDelimeter = indexOfRootDelimeter > -1 && indexOfRootDelimeter <= indexOfPathDelimeter ?
            indexOfRootDelimeter + rootDelimeter.length :
            -1;
        var authority = getAuthority(value, endIndexOfRootDelimeter);
        var domain = authority && authority.slice(endIndexOfRootDelimeter);
        // By definition, everything after the authority is the path
        var path = value.slice(authority.length);
        var format = authority ?
            SPResourcePathFormat.absolute :
            path[0] === '/' ?
                SPResourcePathFormat.serverRelative :
                SPResourcePathFormat.relative;
        var segments = path.split('/');
        this.authority = authority;
        this.domain = domain;
        this.format = format;
        this.path = path;
        this.segments = segments;
        this.value = value;
    }
    return SPResourcePath;
}());

function getAuthority(value, endIndexOfRootDelimeter) {
    if (endIndexOfRootDelimeter > -1) {
        var indexOfNextSegment = value.indexOf('/', endIndexOfRootDelimeter);
        if (indexOfNextSegment > -1) {
            return value.slice(0, indexOfNextSegment);
        }
        else {
            return value;
        }
    }
    else {
        return '';
    }
}
//# sourceMappingURL=SPResourcePath.js.map

/***/ }),

/***/ "Cy4Q":
/*!******************************!*\
  !*** ./lib/imaging/index.js ***!
  \******************************/
/*! exports provided: ImageSourceType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageSourceType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageSourceType */ "AKK3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageSourceType", function() { return _ImageSourceType__WEBPACK_IMPORTED_MODULE_0__["default"]; });

 // tslint:disable-line:export-name


/***/ }),

/***/ "DHEo":
/*!*************************************!*\
  !*** ./lib/caching/ICacheResult.js ***!
  \*************************************/
/*! exports provided: CacheResponseType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheResponseType", function() { return CacheResponseType; });
/**
 * @file ICacheResult.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
/**
 * Represents the type of response that can be returned
 * from MySiteCache: Cache or Server Data
 */
// tslint:disable-next-line:typedef variable-name
var CacheResponseType = {
    CachedData: 0,
    ServerData: 1
};


/***/ }),

/***/ "DXzA":
/*!********************************************!*\
  !*** ./lib/assets/reportDefaultImage2.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "reportDefaultImage2_7103f03ef61b6890cb9d2ce981a18325.png";

/***/ }),

/***/ "DeWO":
/*!***********************************************!*\
  !*** ./lib/assets/portfolioDefaultImage3.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioDefaultImage3_1374a83400de32f5b05589a37ba2aefa.png";

/***/ }),

/***/ "ERKq":
/*!**************************************!*\
  !*** ./lib/assets/defaultImage5.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "defaultImage5_54c10b05976d1cd6f3f2e2a05e41b97a.jpg";

/***/ }),

/***/ "Egrv":
/*!*****************************************************!*\
  !*** ./lib/assets/portfolioImageGalleryPendant.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioImageGalleryPendant_b6e43b3f96d98c29d0300cec19b0a553.png";

/***/ }),

/***/ "F2IJ":
/*!************************************************************************!*\
  !*** ./lib/fileTypeIcons/renderers/FileTypeIconDetailsListRenderer.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FileTypeIconsLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FileTypeIconsLoader */ "aEnU");
/* harmony import */ var _FileTypeIcons_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FileTypeIcons.module.scss */ "+eAv");
/* harmony import */ var _Strings_resx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Strings.resx */ "y6r/");
var _Strings_resx__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Strings.resx */ "y6r/", 1);
/**
 * @file FileTypeIconDetailsListRenderer.tsx
 *
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */







var FileTypeIconDetailsListRenderer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FileTypeIconDetailsListRenderer, _super);
    function FileTypeIconDetailsListRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileTypeIconDetailsListRenderer.prototype.componentDidMount = function () {
        var _this = this;
        this._icons = null; // tslint:disable-line:no-null-keyword
        _FileTypeIconsLoader__WEBPACK_IMPORTED_MODULE_4__["default"].loadIconsModule()
            .then(function (icons) {
            _this._icons = icons;
            _this.forceUpdate();
        })
            .catch(function (error) { return _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(FileTypeIconDetailsListRenderer._logSource, error); });
    };
    FileTypeIconDetailsListRenderer.prototype.render = function () {
        if (!this._icons) {
            return false;
        }
        var _a = this.props, extension = _a.extension, _b = _a.sizeInPixels, sizeInPixels = _b === void 0 ? 16 : _b;
        var iconSrc = this._icons.getIconUrl(extension, sizeInPixels);
        var altText = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__["StringHelper"].format(_Strings_resx__WEBPACK_IMPORTED_MODULE_6__["FileTypeIconAlternateText"], extension);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _FileTypeIcons_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].fileIcon },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { alt: altText, src: iconSrc, width: sizeInPixels, height: sizeInPixels })));
    };
    FileTypeIconDetailsListRenderer._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create('FileTypeIconDetailsListRenderer');
    return FileTypeIconDetailsListRenderer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (FileTypeIconDetailsListRenderer);


/***/ }),

/***/ "FX2h":
/*!****************************************************!*\
  !*** ./lib/statusablePromise/StatusablePromise.js ***!
  \****************************************************/
/*! exports provided: StatusablePromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusablePromise", function() { return StatusablePromise; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @file StatusablePromise.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */

var StatusablePromise = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StatusablePromise, _super);
    function StatusablePromise(
    // tslint:disable-next-line:no-any
    executor) {
        var _this = _super.call(this, executor) || this;
        return StatusablePromise.generateStatusablePromise(new Promise(executor));
    }
    StatusablePromise.generateStatusablePromise = function (originalPromise) {
        // If provided promise has been enriched already
        if (!!originalPromise.isFulfilled) {
            return originalPromise;
        }
        var enhancedPromise;
        enhancedPromise = originalPromise.then(function (data) {
            enhancedPromise.isFulfilled = true;
            enhancedPromise.isPending = false;
            return data;
        }, function (e) {
            enhancedPromise.isRejected = true;
            enhancedPromise.isPending = false;
            throw e;
        });
        enhancedPromise.isFulfilled = false;
        enhancedPromise.isRejected = false;
        enhancedPromise.isPending = true;
        return enhancedPromise;
    };
    return StatusablePromise;
}(Promise));



/***/ }),

/***/ "Fdlo":
/*!*******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImage9.jpg ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "visualTemplateImage9_567524b28cce48792d37bad4a16732d2.jpg";

/***/ }),

/***/ "GX8U":
/*!**************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/news/carousel/newsCarousel2sm.png ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "newsCarousel2sm_f1b85f2aa10810312802f358baa62f1b.png";

/***/ }),

/***/ "GyUw":
/*!*********************************************!*\
  !*** ./lib/pageService/PageServiceError.js ***!
  \*********************************************/
/*! exports provided: PageServiceErrorCode, PageServiceError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageServiceErrorCode", function() { return PageServiceErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageServiceError", function() { return PageServiceError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Page service error code
 */
// tslint:disable-next-line:typedef variable-name
var PageServiceErrorCode = {
    ServiceNotInitialized: 1,
    FailedToFetchClientForm: 2,
    FailedToSaveClientForm: 3
};
/**
 * Page service error with specific error code
 */
var PageServiceError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PageServiceError, _super);
    function PageServiceError(code, error, message) {
        var _this = _super.call(this, "Page Service error with code: " + code + ". " + (error ? error.message : '') + (!!message ? message : '')) || this;
        // Note: the prototype must also be set on any classes which extend this one
        _this.__proto__ = PageServiceError.prototype; // tslint:disable-line:no-any
        _this._code = code;
        _this.stack = error && error.stack;
        return _this;
    }
    Object.defineProperty(PageServiceError.prototype, "code", {
        /**
         * get page service error code
         */
        get: function () {
            return this._code;
        },
        enumerable: true,
        configurable: true
    });
    return PageServiceError;
}(Error));



/***/ }),

/***/ "H3mH":
/*!**********************************************!*\
  !*** ./lib/fileTypeIcons/FileTypeIconMap.js ***!
  \**********************************************/
/*! exports provided: DEFAULT_ICON_COLOR, DOCX_ICON_COLOR, ODP_ICON_COLOR, ICON_EXT_MAP, EXTENSIONS_TO_FILENAME_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ICON_COLOR", function() { return DEFAULT_ICON_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCX_ICON_COLOR", function() { return DOCX_ICON_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ODP_ICON_COLOR", function() { return ODP_ICON_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_EXT_MAP", function() { return ICON_EXT_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTENSIONS_TO_FILENAME_MAP", function() { return EXTENSIONS_TO_FILENAME_MAP; });
/* harmony import */ var _uifabric_file_type_icons_lib_FileTypeIconMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/file-type-icons/lib/FileTypeIconMap */ "ntSI");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file Map from various file extensions to icon image url and icon color.
 * @todo 185513: [CSWP] How do webpart developers consume shared image assets
 */

var ACCBD_ICON_COLOR = '#A23739';
var CSV_ICON_COLOR = '#207347';
var DEFAULT_ICON_COLOR = '#C8C8C8';
var DOCX_ICON_COLOR = '#2B579A';
var FOLDER_ICON_COLOR = '#094AB2';
var HTML_ICON_COLOR = '#0078d4';
var SHARE_POINT_ICON_COLOR = '#038387';
var ODP_ICON_COLOR = '#D04727';
var ONE_ICON_COLOR = '#803A7A';
var PDF_ICON_COLOR = '#D76244';
var PUB_ICON_COLOR = '#077568';
var VECTOR_ICON_COLOR = '#3A56A0';
var XPS_ICON_COLOR = '#0EB5ED';
var XSN_ICON_COLOR = '#6A3889';
var ICONS = [
    {
        // accdb
        color: ACCBD_ICON_COLOR,
        extensions: ['accdb', 'mdb']
    },
    {
        // archive
        color: FOLDER_ICON_COLOR,
        extensions: [
            '7z',
            'ace',
            'arc',
            'arj',
            'dmg',
            'gz',
            'iso',
            'lzh',
            'pkg',
            'rar',
            'sit',
            'tgz',
            'tar',
            'rar',
            'z'
        ]
    },
    {
        // aspx
        color: SHARE_POINT_ICON_COLOR,
        extensions: ['aspx']
    },
    {
        // audio
        color: DEFAULT_ICON_COLOR,
        /* tslint:disable:max-line-length */
        extensions: [
            'aif',
            'aiff',
            'aac',
            'amr',
            'au',
            'awb',
            'dct',
            'dss',
            'dvf',
            'flac',
            'gsm',
            'm4a',
            'm4p',
            'mid',
            'mmf',
            'mp3',
            'ogg',
            'oga',
            'ra',
            'rm',
            'wav',
            'wma',
            'wv'
        ]
    },
    {
        // code
        color: DEFAULT_ICON_COLOR,
        extensions: [
            'asp',
            'bat',
            'c',
            'coffee',
            'config',
            'cpp',
            'cs',
            'cshtml',
            'css',
            'dat',
            'fsx',
            'h',
            'inf',
            'ini',
            'java',
            'js',
            'json',
            'less',
            'log',
            'manifest',
            'master',
            'nfo',
            'php',
            'prefs',
            'preferences',
            'ps',
            'ps1',
            'pss',
            'py',
            'rb',
            'rdf',
            'reg',
            'ruby',
            'sql',
            'svn-base',
            'vmg',
            'webpart',
            'wsp',
            'vb'
        ]
    },
    {
        // csv
        color: CSV_ICON_COLOR,
        extensions: ['csv']
    },
    {
        // docx
        color: DOCX_ICON_COLOR,
        extensions: ['doc', 'docm', 'docx']
    },
    {
        // dotx
        color: DOCX_ICON_COLOR,
        extensions: ['dot', 'dotm', 'dotx']
    },
    {
        // email
        color: DEFAULT_ICON_COLOR,
        extensions: ['eml', 'msg', 'ost', 'pst']
    },
    {
        // exe
        color: DEFAULT_ICON_COLOR,
        extensions: ['application', 'appref-ms', 'apk', 'app', 'appx', 'exe', 'ipa', 'msi', 'xap']
    },
    {
        // font
        color: DEFAULT_ICON_COLOR,
        extensions: ['ttf', 'otf', 'woff']
    },
    {
        // html
        color: HTML_ICON_COLOR,
        extensions: ['htm', 'html', 'mht']
    },
    {
        // link
        color: HTML_ICON_COLOR,
        extensions: ['lnk', 'link', 'url', 'website', 'webloc']
    },
    {
        // model
        color: DEFAULT_ICON_COLOR,
        extensions: [
            '3mf',
            '3ds',
            'blend',
            'cool',
            'dae',
            'df',
            'dwfx',
            'dwg',
            'dxf',
            'fbx',
            'gltf',
            'glb',
            'layout',
            'obj',
            'off',
            'max',
            'ply',
            'skp',
            'stp',
            'stl',
            't',
            'thl',
            'x'
        ]
    },
    {
        // mpp
        color: CSV_ICON_COLOR,
        extensions: ['mpp']
    },
    {
        // mpt
        color: CSV_ICON_COLOR,
        extensions: ['mpt']
    },
    {
        // odp
        color: CSV_ICON_COLOR,
        extensions: ['ods']
    },
    {
        // odt
        color: DOCX_ICON_COLOR,
        extensions: ['odt']
    },
    {
        // one
        color: ONE_ICON_COLOR,
        extensions: ['one', 'onepkg', 'ms-one-stub', 'onetoc', 'onetoc2']
    },
    {
        // pdf
        color: PDF_ICON_COLOR,
        extensions: ['pdf']
    },
    {
        // photo
        color: DEFAULT_ICON_COLOR,
        extensions: [
            'arw',
            'bmp',
            'cr2',
            'crw',
            'dcr',
            'dds',
            'dib',
            'dng',
            'erf',
            'gif',
            'ico',
            'jfi',
            'jfif',
            'jif',
            'jpe',
            'jpeg',
            'jpg',
            'kdc',
            'mrw',
            'nef',
            'orf',
            'pct',
            'pict',
            'png',
            'pns',
            'psd',
            'raw',
            'tga',
            'tif',
            'tiff',
            'wdp'
        ]
    },
    {
        // potx
        color: ODP_ICON_COLOR,
        extensions: ['pot', 'potm', 'potx']
    },
    {
        // ppsx
        color: ODP_ICON_COLOR,
        extensions: ['pps', 'ppsm', 'ppsx']
    },
    {
        // pptx
        color: ODP_ICON_COLOR,
        extensions: ['ppt', 'pptm', 'pptx']
    },
    {
        // pub
        color: PUB_ICON_COLOR,
        extensions: ['pub']
    },
    {
        // rtf
        color: DEFAULT_ICON_COLOR,
        extensions: ['epub', 'rtf', 'wri']
    },
    {
        // sysfile
        color: DEFAULT_ICON_COLOR,
        extensions: [
            'bak',
            'bin',
            'cab',
            'cache',
            'cat',
            'cer',
            'class',
            'dat',
            'db',
            'dbg',
            'dl_',
            'dll',
            'ithmb',
            'jar',
            'kb',
            'kdc',
            'ldt',
            'lrprev',
            'obj',
            'ppa',
            'ppam',
            'pdb',
            'rom',
            'thm',
            'thmx',
            'vsl',
            'xla',
            'xlam',
            'xll'
        ]
    },
    {
        // txt
        color: DEFAULT_ICON_COLOR,
        extensions: ['log', 'md', 'readme', 'text', 'txt']
    },
    {
        // vector
        color: VECTOR_ICON_COLOR,
        extensions: ['ai', 'dgn', 'pd', 'emf', 'eps', 'indd', 'indt', 'ps', 'svg', 'svgz', 'wmf']
    },
    {
        // video
        color: DEFAULT_ICON_COLOR,
        extensions: [
            '3gp',
            'asf',
            'avi',
            'dvr-ms',
            'flv',
            'm1v',
            'm4v',
            'mkv',
            'mod',
            'mov',
            'mm4p',
            'mp2',
            'mp2v',
            'mp4',
            'mpa',
            'mpe',
            'mpeg',
            'mpg',
            'mpv',
            'mpv2',
            'mts',
            'ogg',
            'qt',
            'swf',
            'ts',
            'vob',
            'webm',
            'wlmp',
            'wm',
            'wmv',
            'wmx'
        ]
        /* tslint:enable:max-line-length */
    },
    {
        // vsdx
        color: VECTOR_ICON_COLOR,
        extensions: ['vsd', 'vsdm', 'vsdx', 'vdw']
    },
    {
        // vssx
        color: DEFAULT_ICON_COLOR,
        extensions: ['vss', 'vssm', 'vssx']
    },
    {
        // vstx
        color: VECTOR_ICON_COLOR,
        extensions: ['vst', 'vstm', 'vstx']
    },
    {
        // xlsx
        color: CSV_ICON_COLOR,
        extensions: ['xls', 'xlsb', 'xlsm', 'xlsx']
    },
    {
        // xltx
        color: DEFAULT_ICON_COLOR,
        extensions: ['xlt', 'xltm', 'xltx']
    },
    {
        // xml
        color: DEFAULT_ICON_COLOR,
        extensions: ['xaml', 'xml', 'xsl']
    },
    {
        // xps
        color: XPS_ICON_COLOR,
        extensions: ['oxps', 'xps']
    },
    {
        // xsn
        color: XSN_ICON_COLOR,
        extensions: ['xsn']
    },
    {
        // zip
        color: FOLDER_ICON_COLOR,
        extensions: ['zip']
    }
];
var ICON_EXT_MAP = {};
ICONS.forEach(function (icon) {
    if (icon.extensions) {
        icon.extensions.forEach(function (ext) {
            ICON_EXT_MAP[ext] = icon;
        });
    }
});
var iconTypes = Object.keys(_uifabric_file_type_icons_lib_FileTypeIconMap__WEBPACK_IMPORTED_MODULE_0__["FileTypeIconMap"]);
var EXTENSIONS_TO_FILENAME_MAP = {};
iconTypes.forEach(function (type) {
    var extensions = _uifabric_file_type_icons_lib_FileTypeIconMap__WEBPACK_IMPORTED_MODULE_0__["FileTypeIconMap"][type].extensions || [];
    extensions.forEach(function (extension) {
        EXTENSIONS_TO_FILENAME_MAP[extension] = type;
    });
});


/***/ }),

/***/ "HaTg":
/*!************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/news/carousel/newsCarousel2.png ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "newsCarousel2_b68b932066056adee1d1deac3be94ebf.png";

/***/ }),

/***/ "I4GV":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImageTile.jpg ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "visualTemplateImageTile_dd44c1102298a75b52a1145a4665dd95.jpg";

/***/ }),

/***/ "I6O9":
/*!***************************************!*\
  !*** external "@microsoft/sp-loader" ***!
  \***************************************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_I6O9__;

/***/ }),

/***/ "IiD6":
/*!**************************************!*\
  !*** ./lib/assets/defaultImage2.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "defaultImage2_a78ac777ce17eaf38eac4495ffa4778c.jpg";

/***/ }),

/***/ "IoHU":
/*!*********************************!*\
  !*** ./lib/decorators/index.js ***!
  \*********************************/
/*! exports provided: monitor, UnexpectedFailure, ExpectedFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _monitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitor */ "qMPn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "monitor", function() { return _monitor__WEBPACK_IMPORTED_MODULE_0__["monitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnexpectedFailure", function() { return _monitor__WEBPACK_IMPORTED_MODULE_0__["UnexpectedFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpectedFailure", function() { return _monitor__WEBPACK_IMPORTED_MODULE_0__["ExpectedFailure"]; });




/***/ }),

/***/ "JEku":
/*!**********************************************!*\
  !*** ./lib/assets/reportDefaultImage3sm.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "reportDefaultImage3sm_a62fe976f55223415b14dc8f642d316c.png";

/***/ }),

/***/ "JIqX":
/*!****************************************************!*\
  !*** ./lib/assets/portfolioImageGalleryChairs.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioImageGalleryChairs_617495b0040e88752b70b2bdc4443c91.png";

/***/ }),

/***/ "JW2X":
/*!*******************************************!*\
  !*** ./lib/icsHelper/IcsFileGenerator.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 * IcsFileGenerator to generate and download ics file.
 * @file IcsFileGenerator.ts
 */

var IcsFileGenerator = /** @class */ (function () {
    function IcsFileGenerator() {
    }
    IcsFileGenerator.GenerateIcsFileAsync = function (event) {
        if (!IcsFileGenerator._promise) {
            var monitor_1 = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"]('LoadGenerateIcsFileAsync', true);
            IcsFileGenerator._promise = __webpack_require__.e(/*! import() | sp-i18n-utilities */ "sp-i18n-utilities").then(__webpack_require__.bind(null, /*! ./GenerateIcsFileAsync */ "8iHq"))
                .then(function (module) {
                monitor_1.writeSuccess();
                return module;
            })
                .catch(function (error) {
                monitor_1.writeUnexpectedFailure(undefined, error);
                throw error;
            });
        }
        return IcsFileGenerator._promise.then(function (module) { return module.default(event); });
    };
    return IcsFileGenerator;
}());
/* harmony default export */ __webpack_exports__["default"] = (IcsFileGenerator);


/***/ }),

/***/ "JjRa":
/*!*****************************!*\
  !*** ./lib/loader/index.js ***!
  \*****************************/
/*! exports provided: peoplePickerDataSourceServiceLoader, SortableLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sp_component_utilities_peoplepicker_datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sp-component-utilities-peoplepicker-datasource */ "Q0vE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "peoplePickerDataSourceServiceLoader", function() { return _sp_component_utilities_peoplepicker_datasource__WEBPACK_IMPORTED_MODULE_0__["peoplePickerDataSourceServiceLoader"]; });

/* harmony import */ var _SortableLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SortableLoader */ "tzy4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableLoader", function() { return _SortableLoader__WEBPACK_IMPORTED_MODULE_1__["SortableLoader"]; });





/***/ }),

/***/ "Jw2e":
/*!***********************************************!*\
  !*** ./lib/assets/portfolioDefaultImage1.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioDefaultImage1_832788d3c5f425c025125872a7b5cd1b.png";

/***/ }),

/***/ "KCwX":
/*!**********************************************!*\
  !*** ./lib/layouts/ThumbnailUrlGenerator.js ***!
  \**********************************************/
/*! exports provided: ThumbnailUrlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailUrlGenerator", function() { return ThumbnailUrlGenerator; });
/* harmony import */ var _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-image-helper */ "8dK2");
/* harmony import */ var _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DefaultImageHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultImageHelper */ "+5yf");
/* harmony import */ var _IThumbnailRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IThumbnailRequest */ "pWJW");
/* harmony import */ var _SPResourcePath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SPResourcePath */ "OLPK");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */




/**
 * @deprecated Please find this class and method in the new microsoft/sp-image-helper package.
 */
var ThumbnailUrlGenerator = /** @class */ (function () {
    function ThumbnailUrlGenerator() {
    }
    /**
     * @summary Get thumbnail Url for the given sharepoint resource.
     *
     * @description Ensure you first check file type is supported via
     * isFileTypeSupported or the code will attempt to fallback to spResource.
     *
     * @deprecated Please find this class and method in the new microsoft/sp-image-helper package.
     */
    ThumbnailUrlGenerator.getThumbnailUrl = function (request) {
        return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_ThumbnailUrlGenerator"].getThumbnailUrl(ThumbnailUrlGenerator.convertRequest(request), _DefaultImageHelper__WEBPACK_IMPORTED_MODULE_1__["DefaultImageHelper"].getDefaultImage(new _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_SPResourcePath"](request.spResource), request.width));
    };
    /**
     * Returns true if the file extension is supported for thumbnail
     *
     * @deprecated Please find this class and method in the new microsoft/sp-image-helper package.
     */
    ThumbnailUrlGenerator.isFileTypeSupported = function (fileType) {
        return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_ThumbnailUrlGenerator"].isFileTypeSupported(fileType);
    };
    /**
     * Update width of the thumbnail URL
     * @param thumbnailUrl - Thumbnail URL to be updated
     * @param newWidth  - new width to be applied. Width will be mapped to closest cache breakpoint
     *
     * @deprecated Please find this class and method in the new microsoft/sp-image-helper package.
     */
    ThumbnailUrlGenerator.updateThumbnailWidth = function (thumbnailUrl, newWidth) {
        return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_ThumbnailUrlGenerator"].updateThumbnailWidth(thumbnailUrl, newWidth);
    };
    /**
     * Returns true if given path represents stock image.
     * Stock image path are virtual, actual Image URL is determinsed at runtime.
     * e.g. /_LAYOUTS/IMAGES/REPORTSITEDEFAULTIMAGE1.PNG
     * @param originalImagePath - Path of the origianal Image URL to check if it is default layout image.
     *
     * @deprecated Please find this class and method in the new microsoft/sp-image-helper package.
     */
    // tslint:disable-next-line: member-ordering
    ThumbnailUrlGenerator.isStockImage = function (originalImagePath) {
        return _DefaultImageHelper__WEBPACK_IMPORTED_MODULE_1__["DefaultImageHelper"].isStockImage(originalImagePath instanceof _SPResourcePath__WEBPACK_IMPORTED_MODULE_3__["SPResourcePath"]
            ? new _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_SPResourcePath"](originalImagePath.value)
            : originalImagePath);
    };
    /**
     * Converts given getPreviewUrl to optimal thumbnail service possible
     * @param getPreviewUrl - getPreview.aspx thumbnail Url
     * @param calledId - Identification of the caller
     * @param width - Requested width of the thumbnail
     *
     * @deprecated Please find this class and method in the new microsoft/sp-image-helper package.
     */
    ThumbnailUrlGenerator.fromGetPreview = function (getPreviewUrl, callerId, width) {
        if (width === void 0) { width = 400; }
        return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_ThumbnailUrlGenerator"].fromGetPreview(getPreviewUrl, callerId, width);
    };
    /**
     * @deprecated Please find this class and method in the new microsoft/sp-image-helper package.
     */
    ThumbnailUrlGenerator.isVROOMThumbnailEnabled = function () {
        return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_ThumbnailUrlGenerator"].isVROOMThumbnailEnabled();
    };
    /**
     * @deprecated Please find this class and method in the new microsoft/sp-image-helper package.
     */
    ThumbnailUrlGenerator.convertCropMode = function (cropMode) {
        if (cropMode) {
            switch (cropMode) {
                case _IThumbnailRequest__WEBPACK_IMPORTED_MODULE_2__["CropMode"].Bottom:
                    return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_CropMode"].Bottom;
                case _IThumbnailRequest__WEBPACK_IMPORTED_MODULE_2__["CropMode"].DocHead:
                    return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_CropMode"].DocHead;
                case _IThumbnailRequest__WEBPACK_IMPORTED_MODULE_2__["CropMode"].Fill:
                    return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_CropMode"].Fill;
                case _IThumbnailRequest__WEBPACK_IMPORTED_MODULE_2__["CropMode"].Fit:
                    return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_CropMode"].Fit;
                case _IThumbnailRequest__WEBPACK_IMPORTED_MODULE_2__["CropMode"].Top:
                    return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_CropMode"].Top;
                case _IThumbnailRequest__WEBPACK_IMPORTED_MODULE_2__["CropMode"].Default:
                default:
                    return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_CropMode"].Default;
            }
        }
        return undefined;
    };
    ThumbnailUrlGenerator.convertRequest = function (request) {
        return {
            absoluteUrl: request.absoluteUrl,
            spResource: request.spResource,
            siteId: request.siteId,
            webId: request.webId,
            listId: request.listId,
            uniqueId: request.uniqueId,
            unknwonThumbnailUrl: request.unknwonThumbnailUrl,
            fileType: request.fileType,
            width: request.width,
            height: request.height,
            thumbnail: request.thumbnail,
            originalWidth: request.originalWidth,
            originalHeight: request.originalHeight,
            viewportLeft: request.viewportLeft,
            viewportTop: request.viewportTop,
            viewportWidth: request.viewportWidth,
            viewportHeight: request.viewportHeight,
            callerId: request.callerId,
            cropMode: ThumbnailUrlGenerator.convertCropMode(request.cropMode)
        };
    };
    return ThumbnailUrlGenerator;
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

/***/ "L7MW":
/*!***********************************************!*\
  !*** ./lib/topics/TopicFlightingUtilities.js ***!
  \***********************************************/
/*! exports provided: isCortexEnabled, setCortexDisabledFlag, isIndexedDBEnabledForCortexAPIs, isIndexedDBEnabledForOdspAPIs, isIndexedDBEnabledForSubstrateAPIs, isRunTAB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCortexEnabled", function() { return isCortexEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCortexDisabledFlag", function() { return setCortexDisabledFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIndexedDBEnabledForCortexAPIs", function() { return isIndexedDBEnabledForCortexAPIs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIndexedDBEnabledForOdspAPIs", function() { return isIndexedDBEnabledForOdspAPIs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIndexedDBEnabledForSubstrateAPIs", function() { return isIndexedDBEnabledForSubstrateAPIs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRunTAB", function() { return isRunTAB; });
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/KillSwitches */ "+ORw");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */



var CORTEX_DISABLE_FLAG = 'cortexDisableFlag';
var LAST_CORTEX_DISABLE_FLAG_LOGGED = 'lastCortexDisableFlagLogged';
var DISABLED_FLAG_LOG_PREFIX = 'CSIKM.CortexEnabledFlag';
var DISABLED_FLAG_ACTION_SET = '.Set';
var DISABLED_FLAG_ACTION_GET = '.Get';
var DISABLED_FLAG_STATUS_TRUE = '.True';
var DISABLED_FLAG_STATUS_FALSE = '.False';
var USE_TIERED_CACHING = 1703; /* WEXTieredCaching */
var USE_INDEXED_DB_FOR_ODSP_APIS = 1082; /* IndexedDBForKm enabled Indexed DB for ODSP APIs */
var USE_INDEXED_DB_FOR_SUBSTRATE_APIS = 60083; /* CortexIndexedDBForSubstrateAPIs enabled Indexed DB for Substrate APIs */
var USE_INDEXED_DB_FOR_ODSP_EXPERIMENT = 90041; /* CortexIndexedDBForOdspExperiment */
var USE_INDEXED_DB_FOR_SUBSTRATE_EXPERIMENT = 90059; /* CortexIndexedDBForSubstrateExperiment */
/**
 * Return true if Cortex should be enabled for this user.
 */
/* tslint:disable-next-line:export-name */
function isCortexEnabled(pageContext) {
    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isUseCortexTopicExperiencesCapabilityKSActivated"])()) {
        return (isCortexFlightEnabled() &&
            ((!isCortexDisabledFlagActive() && isCortexLicenseEnabled(pageContext)) || isMock()));
    }
    else {
        return (isCortexFlightEnabled() &&
            ((!isCortexDisabledFlagActive() && isKnowledgeCenterUrlConfigured(pageContext)) || isMock()));
    }
}
/**
 * Add time stamp to session storage disabling Cortex for 24 hrs
 */
/* tslint:disable-next-line:no-any */
function setCortexDisabledFlag(response) {
    var _a, _b, _c;
    if (((_a = response) === null || _a === void 0 ? void 0 : _a.status) === 403) {
        // one hour in milliseconds
        var timeInMilliseconds = 3600000;
        var cortexDisabledFlag = new Date(new Date().getTime() + timeInMilliseconds);
        if ((_b = sessionStorage) === null || _b === void 0 ? void 0 : _b.setItem) {
            sessionStorage.setItem(CORTEX_DISABLE_FLAG, cortexDisabledFlag.toISOString());
            var logTagCortexDisableSetTrue = DISABLED_FLAG_LOG_PREFIX + DISABLED_FLAG_ACTION_SET + DISABLED_FLAG_STATUS_TRUE;
            if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isLogCortexDisabledFlagGetFalseOnceKSActivated"])()) {
                engamentLogOncePerAction(logTagCortexDisableSetTrue);
            }
            else {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent(logTagCortexDisableSetTrue);
            }
            if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isLogCortexDisabledFlagGetFalseOnceKSActivated"])() && ((_c = sessionStorage) === null || _c === void 0 ? void 0 : _c.removeItem)) {
                sessionStorage.removeItem(LAST_CORTEX_DISABLE_FLAG_LOGGED);
            }
        }
    }
}
/**
 * Determines if IndexedDB caching is enabled for Cortex APIs
 *
 * @returns true if dependant flight WEXTieredCaching is enabled,
 * and flights for IndexedDB with ODSP APIs is enabled OR flights for IndexedDB with Substrate APIs is enabled.
 */
function isIndexedDBEnabledForCortexAPIs() {
    return (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(USE_TIERED_CACHING) &&
        (isIndexedDBFlightEnabledForOdspAPIs() || isIndexedDBFlightEnabledForSubstrateAPIs()));
}
/**
 * Determines if IndexedDB caching is enabled specifically for the Cortex ODSP APIs
 *
 * @returns true if CortexIndexedDBForOdspExperiment is on or IndexedDBForKm flight is enabled.
 */
function isIndexedDBEnabledForOdspAPIs() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(USE_TIERED_CACHING) && isIndexedDBFlightEnabledForOdspAPIs();
}
/**
 * Determines if IndexedDB caching is enabled specifically for the Cortex Substrate APIs
 *
 * @returns true if dependant WEXTieredCaching flight is enabled,
 * and IndexedDB flight is enabled for use with Substrate APIs.
 */
function isIndexedDBEnabledForSubstrateAPIs() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(USE_TIERED_CACHING) && isIndexedDBFlightEnabledForSubstrateAPIs();
}
/**
 * Helper function does flight checks for IndexedDB caching with ODSP APIs
 *
 * @returns true if CortexIndexedDBForOdspExperiment is on or IndexedDBForKm flight is enabled.
 */
function isIndexedDBFlightEnabledForOdspAPIs() {
    return (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPExperiment"].getVariantAndLogExposure(USE_INDEXED_DB_FOR_ODSP_EXPERIMENT) === 1 ||
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(USE_INDEXED_DB_FOR_ODSP_APIS));
}
/**
 * Helper function does flight checks for IndexedDB caching with Substrate APIs
 *
 * @returns true if CortexIndexedDBForSubstrateExperiment is on or CortexIndexedDBForSubstrateAPIs flight is enabled.
 */
function isIndexedDBFlightEnabledForSubstrateAPIs() {
    return (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPExperiment"].getVariantAndLogExposure(USE_INDEXED_DB_FOR_SUBSTRATE_EXPERIMENT) === 1 ||
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(USE_INDEXED_DB_FOR_SUBSTRATE_APIS));
}
/**
 * Check if is running TAB test.
 */
function isRunTAB() {
    return !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isUseMockForCortexTABTestKSActivated"])() && window.sessionStorage.getItem('isRunTAB') === 'true';
}
/**
 * Returns true if cache flag is active
 */
function isCortexDisabledFlagActive() {
    var _a, _b, _c;
    if (ignoreCortexDisabledFlag()) {
        return false;
    }
    if ((_a = sessionStorage) === null || _a === void 0 ? void 0 : _a.getItem) {
        var expiration = (_b = sessionStorage.getItem(CORTEX_DISABLE_FLAG), (_b !== null && _b !== void 0 ? _b : ''));
        if (expiration) {
            var expirationDate = new Date(expiration);
            if (!isNaN(expirationDate.getTime()) && expirationDate > new Date()) {
                var logTagCortexDisableGetTrue = DISABLED_FLAG_LOG_PREFIX + DISABLED_FLAG_ACTION_GET + DISABLED_FLAG_STATUS_TRUE;
                if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isLogCortexDisabledFlagGetFalseOnceKSActivated"])()) {
                    engamentLogOncePerAction(logTagCortexDisableGetTrue);
                }
                else {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent(logTagCortexDisableGetTrue);
                }
                return true;
            }
            else {
                if ((_c = sessionStorage) === null || _c === void 0 ? void 0 : _c.removeItem) {
                    sessionStorage.removeItem(CORTEX_DISABLE_FLAG);
                    var logTagCortexDisableSetFalse = DISABLED_FLAG_LOG_PREFIX + DISABLED_FLAG_ACTION_SET + DISABLED_FLAG_STATUS_FALSE;
                    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isLogCortexDisabledFlagGetFalseOnceKSActivated"])()) {
                        engamentLogOncePerAction(logTagCortexDisableSetFalse);
                    }
                    else {
                        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent(logTagCortexDisableSetFalse);
                    }
                }
            }
        }
    }
    var logTagCortexDisableGetFalse = DISABLED_FLAG_LOG_PREFIX + DISABLED_FLAG_ACTION_GET + DISABLED_FLAG_STATUS_FALSE;
    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isLogCortexDisabledFlagGetFalseOnceKSActivated"])()) {
        engamentLogOncePerAction(logTagCortexDisableGetFalse, Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["skipLogEngagementForCortexDisabledKSActivated"])() /* logEngagement */);
    }
    else if (Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["skipLogEngagementForCortexDisabledKSActivated"])()) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent(logTagCortexDisableGetFalse);
    }
    return false;
}
function engamentLogOncePerAction(tag, logEngagement) {
    if (logEngagement === void 0) { logEngagement = true; }
    var _a, _b, _c;
    if ((_a = sessionStorage) === null || _a === void 0 ? void 0 : _a.getItem) {
        var lastEngLogged = (_b = sessionStorage.getItem(LAST_CORTEX_DISABLE_FLAG_LOGGED), (_b !== null && _b !== void 0 ? _b : ''));
        if (lastEngLogged !== tag && ((_c = sessionStorage) === null || _c === void 0 ? void 0 : _c.setItem)) {
            if (logEngagement) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent(tag);
            }
            sessionStorage.setItem(LAST_CORTEX_DISABLE_FLAG_LOGGED, tag);
        }
    }
}
/**
 * Return true if the Knowledge Center url is configured
 */
function isKnowledgeCenterUrlConfigured(pageContext) {
    var _a, _b, _c, _d, _e;
    return (((_b = (_a = pageContext) === null || _a === void 0 ? void 0 : _a.knowledgeHubSiteDetails) === null || _b === void 0 ? void 0 : _b.Url) || // tslint:disable-line:no-any
     ((_e = (_d = (_c = pageContext) === null || _c === void 0 ? void 0 : _c.legacyPageContext) === null || _d === void 0 ? void 0 : _d.knowledgeHubSiteDetails) === null || _e === void 0 ? void 0 : _e.Url) // tslint:disable-line:no-any
    );
}
/**
 * Return true if Cortex License is enabled for this tenant.
 */
function isCortexLicenseEnabled(pageContext) {
    var _a, _b, _c;
    return (((_a = pageContext) === null || _a === void 0 ? void 0 : _a.HasCortexTopicExperiencesCapability) || // tslint:disable-line:no-any
     ((_c = (_b = pageContext) === null || _b === void 0 ? void 0 : _b.legacyPageContext) === null || _c === void 0 ? void 0 : _c.HasCortexTopicExperiencesCapability) // tslint:disable-line:no-any
    );
}
/**
 * Return true if the uber Cortex KM experiences flight is enabled
 */
function isCortexFlightEnabled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1229); /* CortexKMExperiences = 1229 */
}
/**
 * Return true if we are running in debug with mockApi
 */
function isMock() {
    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isUseMockTopicDataKSActivated"])() && _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isDebugFlightEnabled) {
        var queryParams = new URL(window.location.href);
        return queryParams.searchParams.get('useMockTopicData') === 'true';
    }
    else {
        return false;
    }
}
/**
 * Return true if we want to ignore cortexDisableFlag
 */
function ignoreCortexDisabledFlag() {
    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["removeCortexDisabledFlagforManagementAPIsKSActivated"])()) {
        var queryParams = new URL(window.location.href);
        return queryParams.searchParams.get('ignoreCortexDisabledFlag') === 'true';
    }
    else {
        return false;
    }
}


/***/ }),

/***/ "L9FC":
/*!******************************************************!*\
  !*** ./lib/assets/portfolioImageGalleryCushions.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioImageGalleryCushions_305ae16131e9b5f466b5f69979dcddc6.png";

/***/ }),

/***/ "LbuF":
/*!********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImage10.jpg ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "visualTemplateImage10_bf6fbb7366aabf60cd5f5ee9d94dcde9.jpg";

/***/ }),

/***/ "LsuO":
/*!*******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImage2.jpg ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "visualTemplateImage2_870ddf27487a87390d27fe88d023969c.jpg";

/***/ }),

/***/ "MGNV":
/*!****************************************************!*\
  !*** ./lib/assets/portfolioImageGalleryWallSm.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioImageGalleryWallSm_7d460a4fec0c23a97addacc986123456.png";

/***/ }),

/***/ "MWFO":
/*!**********************************!*\
  !*** ./lib/layouts/ImageUtil.js ***!
  \**********************************/
/*! exports provided: scrubUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrubUrl", function() { return scrubUrl; });
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-image-helper */ "8dK2");
/* harmony import */ var _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_1__);


var _EAT_ = '_eat_';
var _OAT_ = '_oat_';
var P4 = 'P4';
// tslint:disable:export-name
/**
 * Scrub any token information from the URL
 * @param provider - Thumbnail service provider
 * @param url  - Url to scrub
 */
function scrubUrl(provider, url) {
    var docid = 'docid';
    var oauthToken = 'oauth_token';
    var scrubbed = 'Scrubbed';
    var tempauth = 'tempauth';
    if (!url) {
        return url;
    }
    if (provider === undefined) {
        provider = _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_1__["_ThumbnailUrlGenerator"].getThumbnailProvider(url);
    }
    try {
        if (provider === _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_1__["_ThumbnailProviderType"].PrivateCDN) {
            var uri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"](url);
            var eat = uri.getQueryParameter(_EAT_);
            if (eat) {
                uri.setQueryParameter(_EAT_, eat.split('_')[0] + "_" + scrubbed);
            }
            var oat = uri.getQueryParameter(_OAT_);
            if (oat) {
                uri.setQueryParameter(_OAT_, oat.split('_')[0] + "_" + scrubbed);
            }
            return uri.toString();
        }
        else if (provider === _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_1__["_ThumbnailProviderType"].AFDPrivateCDN) {
            var uri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"](url);
            var p4 = uri.getQueryParameter(P4);
            if (p4) {
                uri.setQueryParameter(P4, scrubbed);
            }
            var oat = uri.getQueryParameter(_OAT_);
            if (oat) {
                uri.setQueryParameter(_OAT_, oat.split('_')[0] + "_" + scrubbed);
            }
            return uri.toString();
        }
        else if (provider === _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_1__["_ThumbnailProviderType"].MeTA) {
            var uri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"](url);
            if (uri.getQueryParameter(oauthToken)) {
                uri.setQueryParameter(oauthToken, scrubbed);
            }
            var docIdValue = uri.getQueryParameter(docid);
            if (docIdValue) {
                var docIdUri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"](decodeURI(docIdValue));
                if (docIdUri.getQueryParameter(tempauth)) {
                    docIdUri.removeQueryParameter(tempauth);
                    docIdUri.setQueryParameter(tempauth, scrubbed);
                }
                if (docIdUri.getQueryParameter(oauthToken)) {
                    docIdUri.setQueryParameter(oauthToken, scrubbed);
                }
                uri.setQueryParameter(docid, docIdUri.toString());
                return uri.toString();
            }
        }
    }
    catch (error) {
        return url.split('?')[0] + scrubbed;
    }
    return url;
}


/***/ }),

/***/ "N8z2":
/*!**************************************!*\
  !*** ./lib/assets/defaultImage1.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "defaultImage1_3a64abf959a8117e90fc500db8eed7df.jpg";

/***/ }),

/***/ "NCyZ":
/*!****************************************!*\
  !*** ./lib/retryHelper/RetryHelper.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */


var RetryHelper = /** @class */ (function () {
    function RetryHelper() {
    }
    /**
     * This function helps retry action with customized configuration.
     * @param retryTimes Maximum times to try the action
     * @param componentName Component name of the action. It is used for telemetry.
     * @param scenarioName Scenario name of the action. It is used for telemetry.
     * @param action The action to retry.
     */
    RetryHelper.retry = function (retryTimes, componentName, scenarioName, action) {
        var _this = this;
        var logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create(componentName);
        var actionResult = action();
        actionResult
            .then(function (result) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logVerbose(logSource, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format('{0}.{1}.retrySuccess', componentName, scenarioName));
            return result;
        })
            .catch(function (error) {
            var message = retryTimes === 0
                ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format('{0}.{1}.retryFailed on final retry', componentName, scenarioName)
                : _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format('{0}.{1} retry (retryTimes={2}) failed', componentName, scenarioName, retryTimes - 1);
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(logSource, error, message);
            if (retryTimes === 0) {
                throw error;
            }
            actionResult = _this.retry(--retryTimes, componentName, scenarioName, action);
        });
        return actionResult;
    };
    return RetryHelper;
}());
/* harmony default export */ __webpack_exports__["default"] = (RetryHelper);


/***/ }),

/***/ "OLPK":
/*!*******************************!*\
  !*** ./lib/SPResourcePath.js ***!
  \*******************************/
/*! exports provided: SPResourcePath, SPResourcePathFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_sp_resource_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-resource-path */ "wiRv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPResourcePath", function() { return _ms_sp_resource_path__WEBPACK_IMPORTED_MODULE_0__["SPResourcePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPResourcePathFormat", function() { return _ms_sp_resource_path__WEBPACK_IMPORTED_MODULE_0__["SPResourcePathFormat"]; });




/***/ }),

/***/ "OLYq":
/*!*************************************************!*\
  !*** ./lib/pageService/PageServiceEventArgs.js ***!
  \*************************************************/
/*! exports provided: PageServiceEventArgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageServiceEventArgs", function() { return PageServiceEventArgs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
// Copyright (c) Microsoft Corporation. All rights reserved.


var PageServiceEventArgs = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PageServiceEventArgs, _super);
    function PageServiceEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PageServiceEventArgs;
}(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["SPEventArgs"]));



/***/ }),

/***/ "P0ji":
/*!**************************************!*\
  !*** ./lib/assets/defaultImage4.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "defaultImage4_81bc4a8b72b50ed6d2c8ade310fbfd98.jpg";

/***/ }),

/***/ "PdVp":
/*!******************************!*\
  !*** ./lib/layouts/index.js ***!
  \******************************/
/*! exports provided: DefaultImageHelper, ThumbnailUrlGenerator, CropMode, PreviewHelper, PreviewUtility, scrubUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DefaultImageHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultImageHelper */ "+5yf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultImageHelper", function() { return _DefaultImageHelper__WEBPACK_IMPORTED_MODULE_0__["DefaultImageHelper"]; });

/* harmony import */ var _ThumbnailUrlGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThumbnailUrlGenerator */ "KCwX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThumbnailUrlGenerator", function() { return _ThumbnailUrlGenerator__WEBPACK_IMPORTED_MODULE_1__["ThumbnailUrlGenerator"]; });

/* harmony import */ var _IThumbnailRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IThumbnailRequest */ "pWJW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CropMode", function() { return _IThumbnailRequest__WEBPACK_IMPORTED_MODULE_2__["CropMode"]; });

/* harmony import */ var _PreviewHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PreviewHelper */ "+ERe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreviewHelper", function() { return _PreviewHelper__WEBPACK_IMPORTED_MODULE_3__["PreviewHelper"]; });

/* harmony import */ var _PreviewUtility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PreviewUtility */ "yqC6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreviewUtility", function() { return _PreviewUtility__WEBPACK_IMPORTED_MODULE_4__["PreviewUtility"]; });

/* harmony import */ var _ImageUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageUtil */ "MWFO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scrubUrl", function() { return _ImageUtil__WEBPACK_IMPORTED_MODULE_5__["scrubUrl"]; });






// tslint:disable:export-name



/***/ }),

/***/ "Pk8u":
/*!**********************************************!*\
  !*** external "@microsoft/sp-lodash-subset" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Pk8u__;

/***/ }),

/***/ "Q0vE":
/*!**********************************************************************!*\
  !*** ./lib/loader/sp-component-utilities-peoplepicker-datasource.js ***!
  \**********************************************************************/
/*! exports provided: peoplePickerDataSourceServiceLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peoplePickerDataSourceServiceLoader", function() { return peoplePickerDataSourceServiceLoader; });
// tslint:disable-next-line:export-name
function peoplePickerDataSourceServiceLoader(serviceScope) {
    return Promise.all(/*! import() | sp-component-utilities-peoplepicker-datasource */[__webpack_require__.e("vendors~sp-component-utilities-peoplepick~2558cf98"), __webpack_require__.e("sp-component-utilities-peoplepicker-datasource")]).then(__webpack_require__.bind(null, /*! ../chunks/sp-component-utilities-peoplepicker-datasource/PeoplePickerDataSourceService */ "yGly")).then(function (peoplePickerDataSourceServiceModule) { return new peoplePickerDataSourceServiceModule.default(serviceScope); });
}


/***/ }),

/***/ "Q67u":
/*!******************************************!*\
  !*** ./lib/multilingual/Multilingual.js ***!
  \******************************************/
/*! exports provided: Multilingual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multilingual", function() { return Multilingual; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pageService_PageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pageService/PageService */ "j21u");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pageService_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pageService/index */ "Yf54");






var MULTILINGUAL_FLIGHT = 1199; /* Multilingual and Translation settings */
var PREFIX = 'Multilingual';
var LANGUAGE_PREFERENCE_COOKIE = 'siteLangPref';
var SETTINGS_DELIMITER = '.';
var VALUES_DELIMITER = '_';
var COOKIE_VALUE_INDEX = 2;
var SITE_ID_INDEX = 0;
var WEB_ID_INDEX = 1;
var CULTURE_INDEX = 2;
var LANGUAGE_SETTING_PARTS = 3;
var MULTILINGUAL_CATEGORY = 'MultilingualCategory';
var MultilingualCategory;
(function (MultilingualCategory) {
    MultilingualCategory["MultilingualOn"] = "MultilingualOn";
    MultilingualCategory["IsTranslation"] = "IsTranslation";
    MultilingualCategory["HasTranslation"] = "HasTranslation";
})(MultilingualCategory || (MultilingualCategory = {}));
var Multilingual = /** @class */ (function () {
    function Multilingual() {
    }
    Multilingual.isEnabled = function (serviceScope) {
        return Multilingual.isFlightEnabled() && Multilingual._isFeatureEnabled(serviceScope);
    };
    Multilingual.isFlightEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(MULTILINGUAL_FLIGHT);
    };
    Multilingual.getLanguageOverrides = function (serviceScope) {
        var matches = document.cookie.match(Multilingual._matchExpression);
        var result = [];
        Multilingual._ensureServices(serviceScope);
        var preferences = matches && matches.length > COOKIE_VALUE_INDEX && matches[COOKIE_VALUE_INDEX];
        if (preferences) {
            // unpack the language settings to a format easier to process
            var siteLanguageSettings = preferences.split(SETTINGS_DELIMITER);
            siteLanguageSettings.map(function (languageSetting) {
                var parts = languageSetting.split(VALUES_DELIMITER);
                if (parts.length === LANGUAGE_SETTING_PARTS) {
                    result.push({
                        SiteId: parts[SITE_ID_INDEX],
                        WebId: parts[WEB_ID_INDEX],
                        Culture: parts[CULTURE_INDEX]
                    });
                }
            });
        }
        return result;
    };
    /**
     * Get the current language language of the page or the web default.
     * Returns undefined if the multilingual feature is not enabled.
     */
    Multilingual.getPageLanguage = function (serviceScope) {
        var _this = this;
        if (!Multilingual.isEnabled(serviceScope)) {
            return Promise.resolve(undefined);
        }
        var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"](PREFIX + ".GetPageLanguage");
        Multilingual._ensureServices(serviceScope);
        return Multilingual._pageService
            .getPageMultilingualInfo()
            .then(function (multilingualInfo) {
            var translationLanguage = multilingualInfo.translationLanguage, translatedLanguages = multilingualInfo.translatedLanguages, translationSourceItemId = multilingualInfo.translationSourceItemId;
            if (!translationLanguage && (!translatedLanguages || translatedLanguages.length === 0)) {
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4__["_PerformanceLogger"].setPerformanceProperty(MULTILINGUAL_CATEGORY, MultilingualCategory.MultilingualOn);
            }
            else if (translationLanguage) {
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4__["_PerformanceLogger"].setPerformanceProperty(MULTILINGUAL_CATEGORY, MultilingualCategory.IsTranslation);
            }
            else if (translatedLanguages) {
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4__["_PerformanceLogger"].setPerformanceProperty(MULTILINGUAL_CATEGORY, MultilingualCategory.HasTranslation);
            }
            monitor.writeSuccess();
            return {
                LanguageCode: translationLanguage.toLowerCase(),
                SourceItemId: translationSourceItemId
            };
        })
            .catch(function (error) {
            var pageServiceError = error;
            if (pageServiceError && pageServiceError.code === _pageService_index__WEBPACK_IMPORTED_MODULE_5__["PageServiceErrorCode"].ServiceNotInitialized) {
                monitor.writeExpectedFailure('NotInPagesApp');
            }
            else {
                monitor.writeUnexpectedFailure('GetPageLanguageFailure', error);
            }
            // fallback to web site language in case of failure
            return Promise.resolve({
                LanguageCode: _this._defaultLanguageName
            });
        });
    };
    Object.defineProperty(Multilingual, "_defaultLanguageName", {
        get: function () {
            // @todo: VS #789033 - remove fallback to cultureInfo.currentCultureName when languageName is available.
            return (Multilingual._pageContext.web.languageName || Multilingual._pageContext.cultureInfo.currentCultureName).toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    Multilingual._isFeatureEnabled = function (serviceScope) {
        Multilingual._ensureServices(serviceScope);
        var feature = Multilingual._pageContext._featureInfo.get('MultilingualPages');
        return Boolean(feature && feature.enabled);
    };
    Multilingual._ensureServices = function (serviceScope) {
        if (!Multilingual._pageService) {
            serviceScope.whenFinished(function () {
                Multilingual._pageService = serviceScope.consume(_pageService_PageService__WEBPACK_IMPORTED_MODULE_2__["PageService"].serviceKey);
                Multilingual._pageContext = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__["PageContext"].serviceKey);
            });
        }
    };
    Multilingual._matchExpression = new RegExp('(^|;) ?' + LANGUAGE_PREFERENCE_COOKIE + '=([^;]*)(;|$)');
    return Multilingual;
}());



/***/ }),

/***/ "QZvf":
/*!**************************************************!*\
  !*** ./lib/assets/portfolioImageGalleryWall.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioImageGalleryWall_e5b71c353989b7d37a6d628ac28479f9.png";

/***/ }),

/***/ "R+rM":
/*!******************************************************!*\
  !*** ./lib/assets/portfolioImageGalleryLoungeSm.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioImageGalleryLoungeSm_b893002b05f59bd94369e6b69550d5bd.png";

/***/ }),

/***/ "RCxI":
/*!********************************************!*\
  !*** ./lib/assets/reportDefaultImage5.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "reportDefaultImage5_ee2f09776d293cd0e49c078252aba4e7.png";

/***/ }),

/***/ "RQq+":
/*!*******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImage7.jpg ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "visualTemplateImage7_ba5b9de2887e9728f1b8325b5719a37b.jpg";

/***/ }),

/***/ "RiH0":
/*!**********************************!*\
  !*** ./lib/retryHelper/index.js ***!
  \**********************************/
/*! exports provided: RetryHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RetryHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RetryHelper */ "NCyZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RetryHelper", function() { return _RetryHelper__WEBPACK_IMPORTED_MODULE_0__["default"]; });

// tslint:disable:export-name



/***/ }),

/***/ "Ss4T":
/*!*********************************************!*\
  !*** ./lib/toolbarButton/ToolbarButton.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./ToolbarButton.css */ "hcfC");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "TUkU":
/*!****************************************************!*\
  !*** ./lib/assets/portfolioImageGalleryWoodSm.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioImageGalleryWoodSm_c5ee96ed6fd1f2d9d1311ec2e02888c4.png";

/***/ }),

/***/ "TtF3":
/*!****************************************!*\
  !*** ./lib/topics/ITopicInterfaces.js ***!
  \****************************************/
/*! exports provided: ENTITY_STATE, INVALID_TOPIC, NULL_TOPIC_ENTITY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTITY_STATE", function() { return ENTITY_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVALID_TOPIC", function() { return INVALID_TOPIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NULL_TOPIC_ENTITY", function() { return NULL_TOPIC_ENTITY; });
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * This file contains shared interfaces for Cortex Knowledge
 * Management Topics.
 */
/**
 * Use this for equality checks of the state of topics or related entities (e.g. documents/people/sites).
 *
 * @internal
 */
var ENTITY_STATE = {
    Mined: 'Mined',
    Curated: 'Curated',
    CuratedAndMined: 'CuratedAndMined'
};
/**
 * Empty topic
 *
 * @internal
 */
var INVALID_TOPIC = {
    Id: 'InvalidTopicId',
    Name: 'InvalidTopicName'
};
/**
 * A null object used to describe a topic before it's been curated or
 * associated to the AI.
 *
 * @internal
 */
var NULL_TOPIC_ENTITY = {
    Definition: '',
    Id: 'null_topic_id',
    Name: '',
    Score: 0,
    Type: 'Project',
    RelatedDocuments: [],
    RelatedPeople: []
};


/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "UY3P":
/*!*************************************************!*\
  !*** ./lib/assets/portfolioDefaultImage3sm.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioDefaultImage3sm_01b3fbe5d4c09ab226603928bac70160.png";

/***/ }),

/***/ "VTic":
/*!*********************************************!*\
  !*** ./lib/dialog/DeferredDialogUtility.js ***!
  \*********************************************/
/*! exports provided: DeferredDialogUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredDialogUtility", function() { return DeferredDialogUtility; });
function DeferredDialogUtility() {
    return Promise.all(/*! import() | dialog-utility */[__webpack_require__.e("vendors~dialog-utility"), __webpack_require__.e("dialog-utility")]).then(__webpack_require__.bind(null, /*! ./DialogUtility */ "YzAc")).then(function (_a) {
        var DialogUtility = _a.DialogUtility;
        return DialogUtility;
    });
}


/***/ }),

/***/ "VibQ":
/*!*****************************************************!*\
  !*** ./lib/assets/portfolioImageGalleryLampsSm.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioImageGalleryLampsSm_1773f16fd7c9656d525a8b1cb3c55113.png";

/***/ }),

/***/ "WONs":
/*!********************************************!*\
  !*** ./lib/stringFormatUtilities/index.js ***!
  \********************************************/
/*! exports provided: StringFormaterWithNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StringFormaterWithNodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StringFormaterWithNodes */ "uXdC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringFormaterWithNodes", function() { return _StringFormaterWithNodes__WEBPACK_IMPORTED_MODULE_0__["StringFormaterWithNodes"]; });




/***/ }),

/***/ "WUZl":
/*!**************************************************************!*\
  !*** ./lib/limitedLengthTextField/LimitedLengthTextField.js ***!
  \**************************************************************/
/*! exports provided: LimitedLengthTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitedLengthTextField", function() { return LimitedLengthTextField; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _screenReaderAlert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../screenReaderAlert */ "e/jN");




var CHARS_LEFT_READER_DELAY_IN_MILLISECONDS = 1000;
var LimitedLengthTextField = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LimitedLengthTextField, _super);
    function LimitedLengthTextField(props) {
        var _this = _super.call(this, props) || this;
        _this._handleChanged = function (event, value) {
            _this.setState({ value: value }, _this._handleTextStateUpdated);
        };
        _this._readCharactersLeft = function () {
            _screenReaderAlert__WEBPACK_IMPORTED_MODULE_3__["ScreenReaderAlert"].read(_this._charactersLeftMessage, _screenReaderAlert__WEBPACK_IMPORTED_MODULE_3__["ReadingMode"].ReadAfterOtherContent);
        };
        _this.state = {
            value: props.defaultValue
        };
        _this._debouncedCharactersLeft = _this._async.debounce(_this._readCharactersLeft, CHARS_LEFT_READER_DELAY_IN_MILLISECONDS);
        return _this;
    }
    LimitedLengthTextField.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["TextField"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props, { description: this._charactersLeftMessage, onChange: this._handleChanged, value: this.state.value })));
    };
    Object.defineProperty(LimitedLengthTextField.prototype, "value", {
        get: function () {
            return this.state.value;
        },
        enumerable: true,
        configurable: true
    });
    LimitedLengthTextField.prototype._handleTextStateUpdated = function () {
        var _a = this.props, maxLength = _a.maxLength, onChanged = _a.onChanged;
        var text = this.state.value;
        if (onChanged) {
            onChanged(text);
        }
        if (text) {
            if (text.length === maxLength) {
                try {
                    this._debouncedCharactersLeft.cancel();
                }
                catch (ex) {
                    // ignore, not critical
                }
                this._readCharactersLeft();
            }
            else {
                this._debouncedCharactersLeft(text);
            }
        }
    };
    Object.defineProperty(LimitedLengthTextField.prototype, "_charactersLeftMessage", {
        get: function () {
            var textCharactersCount = this.state.value ? this.state.value.length : 0;
            return this.props.getLimitedLengthMessage(this.props.maxLength - textCharactersCount);
        },
        enumerable: true,
        configurable: true
    });
    return LimitedLengthTextField;
}(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "Wg2P":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/screenReaderAlert/ScreenReaderAlert.module.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".b_b_acd50736{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}", ""]);


/***/ }),

/***/ "X+PM":
/*!*********************************************!*\
  !*** external "@microsoft/sp-page-context" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_X_PM__;

/***/ }),

/***/ "YEwp":
/*!*************************************************!*\
  !*** ./lib/assets/portfolioDefaultImage2sm.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioDefaultImage2sm_e09f7d0f631ecfc5bbb0a9d114055477.png";

/***/ }),

/***/ "YFf/":
/*!**************************************************************!*\
  !*** ./lib/fileTypeIcons/renderers/FileTypeIcons.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./FileTypeIcons.module.css */ "xygx");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "Ycni":
/*!*************************************!*\
  !*** external "@ms/i18n-utilities" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Ycni__;

/***/ }),

/***/ "Yf54":
/*!**********************************!*\
  !*** ./lib/pageService/index.js ***!
  \**********************************/
/*! exports provided: PageEventType, PageService, PageSaveStatus, PageServiceError, PageServiceErrorCode, PageServiceEventArgs, SPModerationStatusType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageService */ "j21u");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageEventType", function() { return _PageService__WEBPACK_IMPORTED_MODULE_0__["PageEventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return _PageService__WEBPACK_IMPORTED_MODULE_0__["PageService"]; });

/* harmony import */ var _PageSaveStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageSaveStatus */ "wS2E");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageSaveStatus", function() { return _PageSaveStatus__WEBPACK_IMPORTED_MODULE_1__["PageSaveStatus"]; });

/* harmony import */ var _PageServiceError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageServiceError */ "GyUw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageServiceError", function() { return _PageServiceError__WEBPACK_IMPORTED_MODULE_2__["PageServiceError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageServiceErrorCode", function() { return _PageServiceError__WEBPACK_IMPORTED_MODULE_2__["PageServiceErrorCode"]; });

/* harmony import */ var _PageServiceEventArgs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageServiceEventArgs */ "OLYq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageServiceEventArgs", function() { return _PageServiceEventArgs__WEBPACK_IMPORTED_MODULE_3__["PageServiceEventArgs"]; });

/* harmony import */ var _SPModerationStatusType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SPModerationStatusType */ "5I0j");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPModerationStatusType", function() { return _SPModerationStatusType__WEBPACK_IMPORTED_MODULE_4__["SPModerationStatusType"]; });








/***/ }),

/***/ "Z675":
/*!*****************************!*\
  !*** ./lib/dialog/index.js ***!
  \*****************************/
/*! exports provided: DeferredDialogUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeferredDialogUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeferredDialogUtility */ "VTic");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredDialogUtility", function() { return _DeferredDialogUtility__WEBPACK_IMPORTED_MODULE_0__["DeferredDialogUtility"]; });

 // tslint:disable-line:export-name


/***/ }),

/***/ "Zayf":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/pageTemplates/visualTemplateTitleImage.jpg ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "visualTemplateTitleImage_3a6339a73efa56181ef9eba350f881c3.jpg";

/***/ }),

/***/ "Ze8N":
/*!************************************!*\
  !*** ./lib/fileTypeIcons/Icons.js ***!
  \************************************/
/*! exports provided: DEFAULT_EXTENSION, DEFAULT_SIZE, FOLDER_EXTENSION, LIST_ITEM_EXTENSION, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_EXTENSION", function() { return DEFAULT_EXTENSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SIZE", function() { return DEFAULT_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLDER_EXTENSION", function() { return FOLDER_EXTENSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_ITEM_EXTENSION", function() { return LIST_ITEM_EXTENSION; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FileTypeIconMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileTypeIconMap */ "H3mH");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file utility functions to get file icon image url and file icon color
 * based on the file extension. For icon image url, you can specify the size of the icon.
 * Default icon size is 32. All the supported extension types are defined at FileTypeIconMap.ts
 */


var DEFAULT_EXTENSION = 'genericfile';
var DEFAULT_SIZE = 32;
var FOLDER_EXTENSION = 'folder';
var LIST_ITEM_EXTENSION = 'listItem';
var BASE_URL = 'https://spoprod-a.akamaihd.net/files/fabric/assets/item-types';
var DEFAULT_PIXEL_RATIO_SUFFIX = '';
var DEFAULT_PIXEL_RATIO = 1;
var FLUENT_URL_SEGMENT = '-fluent';
var Icons = /** @class */ (function () {
    function Icons() {
    }
    /**
     * Get file type icon color from the file extension if it is defined in IconExtMap
     * @return icon color string for the file type based on its extension.
     * if the extension is not defined, return default color which is '6B6B6B'.
     */
    Icons.getIconColorFromExtension = function (extension) {
        var icon = _FileTypeIconMap__WEBPACK_IMPORTED_MODULE_1__["ICON_EXT_MAP"][extension] || { color: _FileTypeIconMap__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_ICON_COLOR"] };
        return icon.color;
    };
    /**
     * Get file type icon url that is available at @uifabric/file-type-icons module.
     * @return icon url in the @uifabric/file-type-icons module. The default size is 32 by 32.
     */
    Icons.getIconUrl = function (extension, size) {
        if (size === void 0) { size = DEFAULT_SIZE; }
        var pixelRatioSuffix = DEFAULT_PIXEL_RATIO_SUFFIX;
        var devicePixelRatio = window.devicePixelRatio;
        if (devicePixelRatio > DEFAULT_PIXEL_RATIO && devicePixelRatio <= 1.5) {
            pixelRatioSuffix = '_1.5x';
        }
        else if (devicePixelRatio > 1.5 && devicePixelRatio <= 2) {
            pixelRatioSuffix = '_2x';
        }
        else if (devicePixelRatio > 2 && devicePixelRatio <= 3) {
            pixelRatioSuffix = '_3x';
        }
        else if (devicePixelRatio > 3) {
            pixelRatioSuffix = '_4x';
        }
        var iconName;
        if (extension === FOLDER_EXTENSION) {
            iconName = FOLDER_EXTENSION;
        }
        else if (extension === LIST_ITEM_EXTENSION) {
            iconName = 'splist';
        }
        else {
            iconName = _FileTypeIconMap__WEBPACK_IMPORTED_MODULE_1__["EXTENSIONS_TO_FILENAME_MAP"][extension] || DEFAULT_EXTENSION;
        }
        if (size > DEFAULT_SIZE &&
            devicePixelRatio > DEFAULT_PIXEL_RATIO &&
            // Only apply for integer ratios to avoid non-existent sizes from 1.5 etc.
            devicePixelRatio === Math.floor(devicePixelRatio)) {
            size = Icons._mapToValidIconSize(size / devicePixelRatio);
        }
        var baseUrl = BASE_URL;
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1269 /*UseNewFluentIcons*/)) {
            baseUrl += FLUENT_URL_SEGMENT;
        }
        return baseUrl + "/" + size + pixelRatioSuffix + "/" + iconName + ".png";
    };
    Icons._mapToValidIconSize = function (iconSize) {
        var iconSizeMap = [16, 20, 24, 32, 40, 48, 64, 96, Number.MAX_VALUE];
        var resultArr = iconSizeMap.filter(function (n, idx) {
            return iconSize >= n && idx < iconSizeMap.length - 1 && iconSize < iconSizeMap[idx + 1];
        });
        return resultArr.length === 0 ? 16 : resultArr[0];
    };
    return Icons;
}());
/* harmony default export */ __webpack_exports__["default"] = (Icons);


/***/ }),

/***/ "ZzUU":
/*!********************************************!*\
  !*** ./lib/assets/reportDefaultImage1.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "reportDefaultImage1_9c5a39f9e081c6e44e752f1a2791affc.png";

/***/ }),

/***/ "a9vk":
/*!********************************************************!*\
  !*** ./lib/assets/portfolioImageGalleryCushionsSm.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioImageGalleryCushionsSm_411ebbd9f24473c6637ba6eb5eb604cd.png";

/***/ }),

/***/ "aEnU":
/*!**************************************************!*\
  !*** ./lib/fileTypeIcons/FileTypeIconsLoader.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var FileTypeIconsLoader = /** @class */ (function () {
    function FileTypeIconsLoader() {
    }
    FileTypeIconsLoader.loadIconsModule = function () {
        return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./Icons */ "Ze8N")).then(function (icons) { return icons.default; });
    };
    return FileTypeIconsLoader;
}());
/* harmony default export */ __webpack_exports__["default"] = (FileTypeIconsLoader);


/***/ }),

/***/ "bMgq":
/*!***********************************************!*\
  !*** ./lib/assets/portfolioDefaultImage2.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioDefaultImage2_73f48f661024afc0e17ab6198432fcdc.png";

/***/ }),

/***/ "bz/i":
/*!****************************!*\
  !*** ./lib/SPConstants.js ***!
  \****************************/
/*! exports provided: spConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spConstants", function() { return spConstants; });
/**
 * @file SPConstants.ts
 * @copyright (c) Microsoft Corporation.  All rights reserved.
 */
var visioExtensions = ['vsdx', 'vsdm', 'vsd'];
var documentExtensions = [
    'doc',
    'docx',
    'xls',
    'xlsx',
    'pot',
    'potx',
    'ppt',
    'pptx',
    'one'
].concat(visioExtensions);
var documentExtensionsSet = new Set(documentExtensions);
var imageExtensions = [
    'gif',
    'jpg',
    'jpeg',
    'bmp',
    'dib',
    'tif',
    'tiff',
    'ico',
    'png',
    'jxr',
    'svg'
];
// @DMichon, VSO:418061 re-use InstantViewerHelper.ts from odsp-utilites when it merges
var previewableExtensions = [
    // tslint:disable-next-line:max-line-length
    // https://techcommunity.microsoft.com/t5/OneDrive-for-Business/Announcing-New-File-Viewers-Available-for-OneDrive-For-Business/m-p/60040
    // Documents:
    'csv',
    'doc',
    'docm',
    'docx',
    'dotx',
    'eml',
    'msg',
    'odp',
    'ods',
    'odt',
    'pdf',
    'pot',
    'potm',
    'potx',
    'pps',
    'ppsx',
    'ppt',
    'pptm',
    'pptx',
    'rtf',
    'vsd',
    'vsdx',
    'xls',
    'xlsb',
    'xlsm',
    'xlsx',
    'one',
    // non-browser viewable images:
    'ai',
    'arw',
    'cr2',
    'eps',
    'erf',
    'mrw',
    'nef',
    'orf',
    'psd',
    // Video:
    '3gp',
    'm4v',
    'mov',
    'mp4',
    'wmv',
    // 3D:
    '3mf',
    'fbx',
    'obj',
    'ply',
    'stl',
    // Native:
    'cool',
    'gltf',
    'glb',
    // Medical:
    'dcm',
    'dcm30',
    'dic',
    'dicm',
    'dicom',
    // Text and code:
    'abap',
    'ada',
    'adp',
    'ahk',
    'as',
    'as3',
    'asc',
    'ascx',
    'asm',
    'asp',
    'awk',
    'bash',
    'bash_login',
    'bash_logout',
    'bash_profile',
    'bashrc',
    'bat',
    'bib',
    'bsh',
    'build',
    'builder',
    'c',
    'c++',
    'capfile',
    'cc',
    'cfc',
    'cfm',
    'cfml',
    'cl',
    'clj',
    'cls',
    'cmake',
    'cmd',
    'coffee',
    'cpp',
    'cpt',
    'cpy',
    'cs',
    'cshtml',
    'cson',
    'csproj',
    'css',
    'ctp',
    'cxx',
    'd',
    'ddl',
    'di',
    'dif',
    'diff',
    'disco',
    'dml',
    'dtd',
    'dtml',
    'el',
    'emakefile',
    'erb',
    'erl',
    'f',
    'f90',
    'f95',
    'fs',
    'fsi',
    'fsscript',
    'fsx',
    'gemfile',
    'gemspec',
    'gitconfig',
    'go',
    'groovy',
    'gvy',
    'h',
    'h++',
    'haml',
    'handlebars',
    'hbs',
    'hcp',
    'hh',
    'hpp',
    'hrl',
    'hs',
    'htc',
    'hxx',
    'idl',
    'iim',
    'inc',
    'inf',
    'ini',
    'inl',
    'ipp',
    'irbrc',
    'jade',
    'jav',
    'java',
    'js',
    'jsp',
    'jsx',
    'l',
    'less',
    'lhs',
    'lisp',
    'log',
    'lst',
    'ltx',
    'lua',
    'm',
    'make',
    'markdn',
    'markdown',
    'md',
    'mdown',
    'mkdn',
    'ml',
    'mli',
    'mll',
    'mly',
    'mm',
    'mud',
    'nfo',
    'opml',
    'osascript',
    'out',
    'p',
    'pas',
    'patch',
    'php',
    'php2',
    'php3',
    'php4',
    'php5',
    'phtml',
    'pl',
    'plist',
    'pm',
    'pod',
    'pp',
    'profile',
    'properties',
    'ps1',
    'pt',
    'py',
    'pyw',
    'r',
    'rake',
    'rb',
    'rbx',
    'rc',
    're',
    'readme',
    'reg',
    'rest',
    'resw',
    'resx',
    'rhtml',
    'rjs',
    'rprofile',
    'rpy',
    'rss',
    'rst',
    'rxml',
    's',
    'sass',
    'scala',
    'scm',
    'sconscript',
    'sconstruct',
    'script',
    'scss',
    'sgml',
    'sh',
    'shtml',
    'sml',
    'sql',
    'sty',
    'tcl',
    'tex',
    'text',
    'textile',
    'tld',
    'tli',
    'tmpl',
    'tpl',
    'txt',
    'vb',
    'vi',
    'vim',
    'wsdl',
    'xhtml',
    'xml',
    'xoml',
    'xsd',
    'xsl',
    'xslt',
    'yaml',
    'yaws',
    'yml',
    'zsh'
];
var previewableExtensionsSet = new Set(previewableExtensions);
var spConstants = {
    get documentExtensions() {
        return spConstants.isPreviewableExtensionsEnabled() ? previewableExtensions : documentExtensions;
    },
    get documentExtensionsSet() {
        return spConstants.isPreviewableExtensionsEnabled() ? previewableExtensionsSet : documentExtensionsSet;
    },
    embedPath: '/_layouts/15/embed.aspx',
    filePickerActivityFetchLimit: 250,
    filePickerMaxRowCount: 20,
    genericFile: 'genericFile',
    imageExtensions: imageExtensions,
    imageExtensionsSet: new Set(imageExtensions),
    /** Enabled in SPO other than Gallatin */
    isPreviewableExtensionsEnabled: function () {
        var origin = location.origin ? location.origin.toLowerCase() : undefined;
        if (origin) {
            return origin.indexOf('.cn') !== origin.length - 3;
        }
        return true;
    },
    officeDocumentExtensionsSet: documentExtensionsSet,
    oneDrivePath: '/_layouts/15/onedrive.aspx',
    previewHandlerPath: '/_layouts/15/getpreview.ashx',
    transcriptExtensions: ['vtt'],
    // video file extensions within the support preview file types
    videoExtensions: ['3gp', 'asf', 'avi', 'mod', 'mov', 'mp4', 'mpeg', 'mpg', 'mts', 'ts', 'vob', 'wmv'],
    wacPath: '/_layouts/15/wopiframe.aspx'
};


/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "e/jN":
/*!****************************************!*\
  !*** ./lib/screenReaderAlert/index.js ***!
  \****************************************/
/*! exports provided: ScreenReaderAlert, ReadingMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScreenReaderAlert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScreenReaderAlert */ "etMW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenReaderAlert", function() { return _ScreenReaderAlert__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ScreenReaderAlertProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScreenReaderAlertProps */ "rgtK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReadingMode", function() { return _ScreenReaderAlertProps__WEBPACK_IMPORTED_MODULE_1__["ReadingMode"]; });





/***/ }),

/***/ "ekGN":
/*!*********************************!*\
  !*** ./lib/SPFormatDateTime.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/i18n-utilities */ "Ycni");
/* harmony import */ var _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @file SPFormatDateTime.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */

var SPFormatDateTime = /** @class */ (function () {
    function SPFormatDateTime() {
    }
    SPFormatDateTime.formatTimestampToDisplayDate = function (timestamp, pageContext, options) {
        var pc = pageContext;
        var timezone = pc.user.preferUserTimeZone ? pc.user.timeZoneInfo : pc.web.timeZoneInfo;
        var date = new Date(timestamp);
        var spDateInUTC = new _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_0__["SPDate"]({
            fullYear: date.getUTCFullYear(),
            month: date.getUTCMonth(),
            date: date.getUTCDate(),
            hours: date.getUTCHours(),
            minutes: date.getUTCMinutes(),
            seconds: date.getUTCSeconds(),
            milliseconds: date.getUTCMilliseconds(),
            timezoneOffset: 0
        });
        var spDateInUserTimeZone = spDateInUTC.convertFromUTC(timezone);
        // instead of origin date object, fakeDateToDisplay is an incorrect timestamp on JS Date object
        // because the time respect to user/web timezone is displayed
        var fakeDateToDisplay = new Date(spDateInUserTimeZone.fullYear, spDateInUserTimeZone.month, spDateInUserTimeZone.date, spDateInUserTimeZone.hours, spDateInUserTimeZone.minutes, spDateInUserTimeZone.seconds, spDateInUserTimeZone.milliseconds);
        return _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_0__["LocaleFormat"].formatDate(fakeDateToDisplay, options);
    };
    return SPFormatDateTime;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPFormatDateTime);


/***/ }),

/***/ "ercE":
/*!************************************!*\
  !*** ./lib/smartRace/SmartRace.js ***!
  \************************************/
/*! exports provided: SmartRace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartRace", function() { return SmartRace; });
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loc/Strings.resx */ "1PiT");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "1PiT", 1);
/**
 * @file SmartRace.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */

var SmartRace = /** @class */ (function () {
    function SmartRace() {
    }
    SmartRace.race = function (promiseRaceMap) {
        // If there are no more promises left to race, let's inform the caller
        if (promiseRaceMap.length <= 0) {
            throw new Error(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_0__["ErrorNoMorePromises"]);
        }
        // In order to know which promise is resolved/rejected,
        // let's map each promise in the race to always return
        // IRaceResponse; using its index we'll know who resolved/rejected
        var promisesToRace = [];
        promiseRaceMap.forEach(function (racePromise, key) {
            promisesToRace[key] = racePromise.raceablePromise
                .then(function () {
                return {
                    raceablePromise: racePromise.raceablePromise,
                    raceIndex: key,
                    raceId: racePromise.raceId
                };
            })
                .catch(function () {
                throw {
                    raceResponseAsync: racePromise.raceablePromise,
                    raceIndex: key,
                    raceId: racePromise.raceId
                };
            });
        });
        return Promise.race(promisesToRace)
            .then(function (response) {
            return response;
        })
            .catch(function (error) {
            // Remove the rejected promise from the race
            promiseRaceMap.splice(error.raceIndex, 1);
            return SmartRace.race(promiseRaceMap);
        });
    };
    return SmartRace;
}());



/***/ }),

/***/ "erqz":
/*!******************************************!*\
  !*** ./lib/remoteWebFileGetter/index.js ***!
  \******************************************/
/*! exports provided: RemoteWebFileGetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RemoteWebFileGetter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RemoteWebFileGetter */ "fBMy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoteWebFileGetter", function() { return _RemoteWebFileGetter__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "etMW":
/*!****************************************************!*\
  !*** ./lib/screenReaderAlert/ScreenReaderAlert.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ScreenReaderAlertProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScreenReaderAlertProps */ "rgtK");
/* harmony import */ var _ScreenReaderAlert_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScreenReaderAlert.module.scss */ "twtR");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file Screen Reader Alert component.
 */




/**
 * This is a screen reader alert component for developers to easily add screen reader feature to their web site.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions Live Region in MDN}
 *
 * All functionalities of this component are tested through Narrator in Windows 10.
 *
 * @example - Use as React component to read based on React state.
 *  <ScreenReaderAlert message={ message } />
 * @example - Use static method to read based on any event.
 *  ScreenReaderAlert.read(message)
 */
var ScreenReaderAlert = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ScreenReaderAlert, _super);
    function ScreenReaderAlert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This is an API for developers to read screen reader message.
     * It is typically to be called when there is no React component or DOM element to attach ScreenReaderAlert component.
     *
     * @param message - is the string that will be read by screen reader. Nothing will be done when string is empty.
     * @param readingMode - is how the string will announced categorized by aggressive alert and polite announce.
     *  default value is ReadingMode.ReadAfterOtherContent
     */
    ScreenReaderAlert.read = function (message, readingMode) {
        if (message) {
            var alertText = document.createTextNode(message);
            var alertNode = ScreenReaderAlert.getDedicatedDomNode(readingMode || _ScreenReaderAlertProps__WEBPACK_IMPORTED_MODULE_2__["ReadingMode"].ReadAfterOtherContent);
            alertNode.appendChild(alertText);
        }
    };
    ScreenReaderAlert.getDedicatedDomNode = function (readingMode) {
        if (ScreenReaderAlert._alertNode) {
            document.body.removeChild(ScreenReaderAlert._alertNode);
        }
        var alertNode = document.createElement('div');
        alertNode.setAttribute('data-automation-id', 'screen-reader-alert-static');
        alertNode.classList.add(_ScreenReaderAlert_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].screenReaderAlert);
        switch (readingMode) {
            case _ScreenReaderAlertProps__WEBPACK_IMPORTED_MODULE_2__["ReadingMode"].ReadAfterOtherContent:
                alertNode.setAttribute('aria-live', 'polite');
                break;
            case _ScreenReaderAlertProps__WEBPACK_IMPORTED_MODULE_2__["ReadingMode"].ReadImmediately:
                alertNode.setAttribute('role', 'alert');
                alertNode.setAttribute('aria-live', 'assertive');
                break;
        }
        document.body.appendChild(alertNode);
        ScreenReaderAlert._alertNode = alertNode;
        return ScreenReaderAlert._alertNode;
    };
    ScreenReaderAlert.prototype.componentDidMount = function () {
        ScreenReaderAlert.read(this.props.message, this.props.readingMode);
    };
    ScreenReaderAlert.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.message !== this.props.message || prevProps.indicator !== this.props.indicator) {
            ScreenReaderAlert.read(this.props.message, this.props.readingMode);
        }
    };
    ScreenReaderAlert.prototype.render = function () {
        return false; // Not rendering anything but call `read` method to read the message in React life-cycles.
    };
    return ScreenReaderAlert;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (ScreenReaderAlert);


/***/ }),

/***/ "f+8y":
/*!********************************!*\
  !*** ./lib/md5Hash/Md5Hash.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Md5Hash; });
/**
 * @file Md5Hasher.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
// VSO:315448 to clean up this temporary implementation.
/* tslint:disable:typedef */
/* tslint:disable:no-bitwise */
// https://css-tricks.com/snippets/javascript/javascript-md5/
// this is just here until we can re-add the hash module to SPClient
/**
 * Create an MD5 hash from an input string.
 *
 * @param stringTohash - The string to hash.
 *
 * @returns - A hashed string.
 */
function Md5Hash(stringTohash) {
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    stringTohash = Utf8Encode(stringTohash);
    var x = ConvertToWordArray(stringTohash);
    a = 0x67452301;
    b = 0xefcdab89;
    c = 0x98badcfe;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xd76aa478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xe8c7b756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070db);
        b = FF(b, c, d, a, x[k + 3], S14, 0xc1bdceee);
        a = FF(a, b, c, d, x[k + 4], S11, 0xf57c0faf);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787c62a);
        c = FF(c, d, a, b, x[k + 6], S13, 0xa8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xfd469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098d8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8b44f7af);
        c = FF(c, d, a, b, x[k + 10], S13, 0xffff5bb1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895cd7be);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6b901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xfd987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xa679438e);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49b40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xf61e2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xc040b340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265e5a51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xe9b6c7aa);
        a = GG(a, b, c, d, x[k + 5], S21, 0xd62f105d);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xd8a1e681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xe7d3fbc8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21e1cde6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xc33707d6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xf4d50d87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455a14ed);
        a = GG(a, b, c, d, x[k + 13], S21, 0xa9e3e905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xfcefa3f8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676f02d9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8d2a4c8a);
        a = HH(a, b, c, d, x[k + 5], S31, 0xfffa3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771f681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6d9d6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xfde5380c);
        a = HH(a, b, c, d, x[k + 1], S31, 0xa4beea44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4bdecfa9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xf6bb4b60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xbebfbc70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289b7ec6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xeaa127fa);
        c = HH(c, d, a, b, x[k + 3], S33, 0xd4ef3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881d05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xd9d4d039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xe6db99e5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1fa27cf8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xc4ac5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xf4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432aff97);
        c = II(c, d, a, b, x[k + 14], S43, 0xab9423a7);
        b = II(b, c, d, a, x[k + 5], S44, 0xfc93a039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655b59c3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8f0ccc92);
        c = II(c, d, a, b, x[k + 10], S43, 0xffeff47d);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845dd1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6fa87e4f);
        d = II(d, a, b, c, x[k + 15], S42, 0xfe2ce6e0);
        c = II(c, d, a, b, x[k + 6], S43, 0xa3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4e0811a1);
        a = II(a, b, c, d, x[k + 4], S41, 0xf7537e82);
        d = II(d, a, b, c, x[k + 11], S42, 0xbd3af235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2ad7d2bb);
        b = II(b, c, d, a, x[k + 9], S44, 0xeb86d391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
}
function RotateLeft(lValue, iShiftBits) {
    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
}
function AddUnsigned(lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = lX & 0x80000000;
    lY8 = lY & 0x80000000;
    lX4 = lX & 0x40000000;
    lY4 = lY & 0x40000000;
    lResult = (lX & 0x3fffffff) + (lY & 0x3fffffff);
    if (lX4 & lY4) {
        return lResult ^ 0x80000000 ^ lX8 ^ lY8;
    }
    if (lX4 | lY4) {
        if (lResult & 0x40000000) {
            return lResult ^ 0xc0000000 ^ lX8 ^ lY8;
        }
        else {
            return lResult ^ 0x40000000 ^ lX8 ^ lY8;
        }
    }
    else {
        return lResult ^ lX8 ^ lY8;
    }
}
function F(x, y, z) {
    return (x & y) | (~x & z);
}
function G(x, y, z) {
    return (x & z) | (y & ~z);
}
function H(x, y, z) {
    return x ^ y ^ z;
}
function I(x, y, z) {
    return y ^ (x | ~z);
}
function FF(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
}
function GG(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
}
function HH(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
}
function II(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
}
function ConvertToWordArray(stringTohash) {
    var lWordCount;
    var lMessageLength = stringTohash.length;
    var lNumberOfWordsTemp1 = lMessageLength + 8;
    var lNumberOfWordsTemp2 = (lNumberOfWordsTemp1 - (lNumberOfWordsTemp1 % 64)) / 64;
    var lNumberOfWords = (lNumberOfWordsTemp2 + 1) * 16;
    var lWordArray = Array(lNumberOfWords - 1);
    var lBytePosition = 0;
    var lByteCount = 0;
    while (lByteCount < lMessageLength) {
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (stringTohash.charCodeAt(lByteCount) << lBytePosition);
        lByteCount++;
    }
    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
    lBytePosition = (lByteCount % 4) * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
}
function WordToHex(lValue) {
    var wordToHexValue = '', wordToHexValueTemp = '', lByte, lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
        lByte = (lValue >>> (lCount * 8)) & 255;
        wordToHexValueTemp = '0' + lByte.toString(16);
        wordToHexValue = wordToHexValue + wordToHexValueTemp.substr(wordToHexValueTemp.length - 2, 2);
    }
    return wordToHexValue;
}
function Utf8Encode(stringTohash) {
    stringTohash = stringTohash.replace(/\r\n/g, '\n');
    var utftext = '';
    for (var n = 0; n < stringTohash.length; n++) {
        var c = stringTohash.charCodeAt(n);
        if (c < 128) {
            utftext += String.fromCharCode(c);
        }
        else if (c > 127 && c < 2048) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        }
        else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }
    }
    return utftext;
}


/***/ }),

/***/ "fBMy":
/*!********************************************************!*\
  !*** ./lib/remoteWebFileGetter/RemoteWebFileGetter.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @file RemoteWebFileGetter.ts
 * @Copyright (c) Microsoft Corporation. All rights reserved.
 *
 * @remark For looking up the SharePoint file metadata such as Site and Web IDs
 */
var RemoteWebFileGetter = /** @class */ (function () {
    function RemoteWebFileGetter(serviceScope) {
        var _this = this;
        this._ensureImplementation = function () {
            if (_this._asyncImplementation) {
                return Promise.resolve(_this._asyncImplementation);
            }
            return __webpack_require__.e(/*! import() | sp-remote-web-file-getter */ "sp-remote-web-file-getter").then(__webpack_require__.bind(null, /*! ./RemoteWebFileGetterAsyncImplementation */ "USDd")).then(function (module) {
                _this._asyncImplementation = new module.default(_this._serviceScope);
                return _this._asyncImplementation;
            });
        };
        this._serviceScope = serviceScope;
    }
    RemoteWebFileGetter.prototype.getFileViaVroom = function (absoluteResourcePath, sharepointIds, graphIds, extraFields) {
        return this._ensureImplementation().then(function (impl) {
            return impl.getFileViaVroom(absoluteResourcePath, sharepointIds, graphIds, extraFields);
        });
    };
    RemoteWebFileGetter.prototype.getFileByUrl = function (absolutefileUrl, extraFields) {
        return this._ensureImplementation().then(function (impl) { return impl.getFileByUrl(absolutefileUrl, extraFields); });
    };
    RemoteWebFileGetter.prototype.getImageFileDataByUrl = function (absolutefileUrl, fetchCaption) {
        return this._ensureImplementation().then(function (impl) { return impl.getImageFileDataByUrl(absolutefileUrl, fetchCaption); });
    };
    return RemoteWebFileGetter;
}());
/* harmony default export */ __webpack_exports__["default"] = (RemoteWebFileGetter);


/***/ }),

/***/ "fZrL":
/*!************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/news/carousel/newsCarousel3.png ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "newsCarousel3_36d49389bc80f2f8cc2c5e800e032e70.png";

/***/ }),

/***/ "fnKW":
/*!*****************************!*\
  !*** ./lib/topics/index.js ***!
  \*****************************/
/*! exports provided: ENTITY_STATE, INVALID_TOPIC, NULL_TOPIC_ENTITY, RelationsContainerKey, EntityRelationsService, isCortexEnabled, setCortexDisabledFlag, isIndexedDBEnabledForCortexAPIs, isIndexedDBEnabledForOdspAPIs, isIndexedDBEnabledForSubstrateAPIs, isRunTAB, TopicDataService, UPDATE_TOPIC_TITLE_SUB_HEADER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ITopicInterfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ITopicInterfaces */ "TtF3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ENTITY_STATE", function() { return _ITopicInterfaces__WEBPACK_IMPORTED_MODULE_0__["ENTITY_STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INVALID_TOPIC", function() { return _ITopicInterfaces__WEBPACK_IMPORTED_MODULE_0__["INVALID_TOPIC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NULL_TOPIC_ENTITY", function() { return _ITopicInterfaces__WEBPACK_IMPORTED_MODULE_0__["NULL_TOPIC_ENTITY"]; });

/* harmony import */ var _EntityRelationsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EntityRelationsService */ "xzNW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RelationsContainerKey", function() { return _EntityRelationsService__WEBPACK_IMPORTED_MODULE_1__["RelationsContainerKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityRelationsService", function() { return _EntityRelationsService__WEBPACK_IMPORTED_MODULE_1__["EntityRelationsService"]; });

/* harmony import */ var _TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopicFlightingUtilities */ "L7MW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCortexEnabled", function() { return _TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_2__["isCortexEnabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCortexDisabledFlag", function() { return _TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_2__["setCortexDisabledFlag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIndexedDBEnabledForCortexAPIs", function() { return _TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_2__["isIndexedDBEnabledForCortexAPIs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIndexedDBEnabledForOdspAPIs", function() { return _TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_2__["isIndexedDBEnabledForOdspAPIs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIndexedDBEnabledForSubstrateAPIs", function() { return _TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_2__["isIndexedDBEnabledForSubstrateAPIs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRunTAB", function() { return _TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_2__["isRunTAB"]; });

/* harmony import */ var _dataService_TopicDataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataService/TopicDataService */ "8sSu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicDataService", function() { return _dataService_TopicDataService__WEBPACK_IMPORTED_MODULE_3__["TopicDataService"]; });

/* harmony import */ var _TopicEventNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopicEventNames */ "7d+0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TOPIC_TITLE_SUB_HEADER", function() { return _TopicEventNames__WEBPACK_IMPORTED_MODULE_4__["UPDATE_TOPIC_TITLE_SUB_HEADER"]; });








/***/ }),

/***/ "hcfC":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/toolbarButton/ToolbarButton.css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".ToolbarButton{background-color:\"[theme:neutralPrimary, default: #333333]\";border:1px solid transparent;height:34px;overflow:hidden;padding:0 8px;position:relative;text-align:center;top:0;transition:all .3s;transition-property:background-color,color;min-width:34px;color:\"[theme:neutralLighterAlt, default: #f8f8f8]\";font-weight:400;margin-left:0;margin-right:0}.ToolbarButton.iconSizeRetired{font-size:14px}.ToolbarButton.iconSize{font-size:16px}.ToolbarButton .ms-Icon{font-size:16px;line-height:1.2}.ToolbarButton.LightTheme{background-color:\"[theme:neutralLighter, default: #f4f4f4]\";color:\"[theme:neutralPrimary, default: #333333]\"}.ToolbarButton.LightTheme:hover{background-color:\"[theme:neutralLight, default: #eaeaea]\"}.ToolbarButton.LightTheme:active{background-color:\"[theme:neutralQuaternaryAlt, default: #dadada]\"}.ToolbarButton.LightTheme:focus{border-color:\"[theme:neutralSecondary, default: #666666]\"}.ToolbarButton.DarkTheme{background-color:\"[theme:neutralQuaternary, default: #d0d0d0]\";color:\"[theme:neutralDark, default: #212121]\"}.ToolbarButton.DarkTheme:hover{background-color:\"[theme:neutralTertiaryAlt, default: #c8c8c8]\"}.ToolbarButton.DarkTheme:active{background-color:\"[theme:neutralTertiary, default: #a6a6a6]\"}.ToolbarButton.DarkTheme:focus{border-color:\"[theme:neutralDark, default: #212121]\"}.ToolbarButton:hover{background-color:\"[theme:neutralSecondaryAlt, default: #767676]\";cursor:pointer}.ToolbarButton.ToolbarButton--active{background-color:\"[theme:themeSecondary, default: #2b88d8]\"}.ToolbarButton.ToolbarButton--active+.ToolbarButton--divider:after,.ToolbarButton.ToolbarButton--active.ToolbarButton--divider:after{border:\"[theme:themeSecondary, default: #2b88d8]\"}.ToolbarButton.ToolbarButton--active.LightTheme{background-color:\"[theme:neutralQuaternaryAlt, default: #dadada]\"}.ToolbarButton.ToolbarButton--active.DarkTheme{background-color:\"[theme:neutralTertiary, default: #a6a6a6]\"}.ToolbarButton:active{background-color:\"[theme:themeDarkAlt, default: #106ebe]\"}.ToolbarButton.ToolbarButton--disabled,.ToolbarButton.ToolbarButton--disabled:hover{background-color:\"[theme:neutralPrimary, default: #333333]\";color:\"[theme:neutralSecondary, default: #666666]\"}.ToolbarButton.ToolbarButton--disabled .ms-Icon,.ToolbarButton.ToolbarButton--disabled:hover .ms-Icon{color:\"[theme:neutralSecondary, default: #666666]\"}.ToolbarButton:focus{border:1px solid;outline:0}@media screen and (-ms-high-contrast:active){.ToolbarButton:focus{border:3px dotted #1aebff;box-sizing:border-box}}@media screen and (-ms-high-contrast:black-on-white){.ToolbarButton:focus{border:3px dotted #37006e;box-sizing:border-box}}.ToolbarButton.ToolbarButton--divider:after{content:\"\";position:absolute;height:20px;top:6px}[dir=ltr] .ToolbarButton.ToolbarButton--divider:after{left:0}[dir=rtl] .ToolbarButton.ToolbarButton--divider:after{right:0}[dir=ltr] .ToolbarButton.ToolbarButton--divider:after{border-left:1px solid}[dir=rtl] .ToolbarButton.ToolbarButton--divider:after{border-right:1px solid}.ToolbarButtonTooltip{display:inline}.ToolbarButton--h2{font-size:21px;font-weight:100}.ToolbarButton--blockquote{font-style:italic}button.ToolbarButton--pre{font-family:monospace}", ""]);


/***/ }),

/***/ "hjoG":
/*!**************************************!*\
  !*** ./lib/assets/defaultImage3.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "defaultImage3_7fecb8f412edf6de89f1b7becf43ed94.jpg";

/***/ }),

/***/ "iah3":
/*!********************************************!*\
  !*** ./lib/toolbarButton/ToolbarButton.js ***!
  \********************************************/
/*! exports provided: ToolbarButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarButton", function() { return ToolbarButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ToolbarButton_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ToolbarButton.scss */ "klbR");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file The button component used by toolbars on the Canvas.
 * It implements all common functionalities expected of a toolbar button.
 * It is used in the Canvas control toolbar and Rich Text Editor formatting bar.
 */





/**
 * The button component used by toolbars on the Canvas.
 * @alpha
 */
var ToolbarButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ToolbarButton, _super);
    function ToolbarButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._toolbarButtonRef = react__WEBPACK_IMPORTED_MODULE_3__["createRef"]();
        _this.focus = function () {
            if (_this._toolbarButtonRef.current) {
                _this._toolbarButtonRef.current.focus();
            }
        };
        return _this;
    }
    ToolbarButton._isTouchEnabled = function () {
        var os = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_BrowserDetection"].getBrowserInformation().os;
        return os === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_OS"].Android || os === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_OS"].IOS;
    };
    /**
     * Renders ToolbarButton
     */
    ToolbarButton.prototype.render = function () {
        return !ToolbarButton._isTouchEnabled() ? (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["TooltipHost"], { hostClassName: 'ToolbarButtonTooltip', content: this.props.title, calloutProps: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.calloutProps), { gapSpace: 0 }), directionalHint: this.props.directionalHint, directionalHintForRTL: this.props.directionalHintForRTL, role: 'presentation' }, this._toolbarButton)) : (this._toolbarButton);
    };
    Object.defineProperty(ToolbarButton.prototype, "_toolbarButton", {
        get: function () {
            var isDarkTheme = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["getTheme"])().isInverted;
            var buttonClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])('ToolbarButton', this.props.className, 'iconSize', {
                'ToolbarButton--disabled': !!this.props.disabled,
                'ToolbarButton--active': !!this.props.isActive,
                LightTheme: !isDarkTheme,
                DarkTheme: isDarkTheme
            });
            // For touch devices, onclick is not working properly as the selection gets lost
            // so we have to use onMouseDown instead
            var onClick = ToolbarButton._isTouchEnabled() ? undefined : this.props.onClick; // tslint:disable-line:max-line-length
            var onMouseDown = ToolbarButton._isTouchEnabled() ? this.props.onClick : this.props.onMouseDown;
            var buttonNativeProps = this.props.buttonProps
                ? Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["getNativeProps"])(this.props.buttonProps, _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["buttonProperties"])
                : undefined;
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("button", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, buttonNativeProps, { type: 'button', "aria-label": this.props.title, "aria-disabled": this.props.disabled ? true : undefined, "aria-pressed": this.props.canBeActive && !!this.props.isActive ? this.props.isActive : undefined, className: buttonClassName, onClick: onClick, onMouseDown: onMouseDown, tabIndex: this.props.tabIndex, "data-automation-id": this.props.automationId, onKeyDown: this.props.onKeyDown ? this.props.onKeyDown : undefined, onBlur: this.props.onBlur, onFocus: this.props.onFocus, "data-drag-handle": this.props.dragHandleTag, "data-sp-fre-iconref": this.props.freIconRef, ref: this._toolbarButtonRef }),
                this._getButtonImage(),
                this.props.label));
        },
        enumerable: true,
        configurable: true
    });
    ToolbarButton.prototype._getButtonImage = function () {
        // @todo 198107: Clean this up when mdl2 icons are in
        if (this.props.imageIconUrl) {
            return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("img", { src: this.props.imageIconUrl, height: 16, width: 16, alt: this.props.imageIconAltText });
        }
        else if (this.props.svgIcon) {
            return this.props.svgIcon;
        }
        else {
            var iconClass = void 0;
            if (this.props.fabricIconKey) {
                iconClass = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["getIconClassName"])(this.props.fabricIconKey);
            }
            return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("i", { className: iconClass || this.props.iconClassName });
        }
    };
    /**
     * Default properties for a ToolbarButton
     */
    /* tslint:disable:member-access */
    ToolbarButton.defaultProps = {
        // optional fields default values
        canBeActive: true,
        className: 'CanvasControlToolbar-item',
        disabled: false,
        isActive: false,
        buttonProps: {},
        calloutProps: {}
    };
    return ToolbarButton;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]));



/***/ }),

/***/ "j+LK":
/*!***************************************************!*\
  !*** ./lib/assets/portfolioImageGalleryLamps.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioImageGalleryLamps_6de54d21a5e3bf5497f79f0cbc74d0da.png";

/***/ }),

/***/ "j21u":
/*!****************************************!*\
  !*** ./lib/pageService/PageService.js ***!
  \****************************************/
/*! exports provided: PageEventType, PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEventType", function() { return PageEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PageServiceError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageServiceError */ "GyUw");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */




// tslint:disable-next-line:typedef variable-name
var PageEventType = {
    FieldUpdate: 1,
    StatusStoreUpdate: 2,
    StartRouteTransition: 3,
    EndRouteTransition: 4,
    StartDeferredComponents: 5,
    StopDeferredComponents: 6
};
/**
 * PageService provides service offered from the current page
 */
var PageService = /** @class */ (function () {
    function PageService() {
        var _this = this;
        /**
         * @see IPageServiceProvider
         */
        this.enqueueClientFormSavePromise = function (savePromise) {
            return _this._serviceProvider.enqueueClientFormSavePromise(savePromise);
        };
    }
    PageService._filterHiddenFields = function (clientForm) {
        clientForm.fields = clientForm.fields.filter(function (field) {
            if (field.schema && field.schema.Hidden) {
                return field.schema.Hidden !== true;
            }
            else {
                return true;
            }
        });
        return clientForm;
    };
    Object.defineProperty(PageService.prototype, "isInitialized", {
        get: function () {
            return !!this._serviceProvider;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize Page Service, provides the actual implementation.
     * Note you should call initialize directly if the page service provider is fully loaded
     *
     * @param pageServiceProvider
     */
    PageService.prototype.initialize = function (pageServiceProvider) {
        this._serviceProvider = pageServiceProvider;
    };
    /**
     * Sets the page service provider loader.
     * This enables defer loading of page service provider implementation.
     *
     * @param loader
     */
    PageService.prototype.initializeServiceProviderLoader = function (loader) {
        this._serviceProviderLoader = loader;
        this._serviceProvider = undefined;
        this._serviceProviderLoaderPromise = undefined;
    };
    /**
     * @see IPageServiceProvider
     */
    PageService.prototype.getCurrentItem = function () {
        return this._serviceProvider.getCurrentItem().then(function (clientForm) {
            return PageService._filterHiddenFields(clientForm);
        });
    };
    /**
     * @see IPageServiceProvider
     */
    PageService.prototype.updateCurrentItem = function () {
        return this._serviceProvider.updateCurrentItem().then(function (clientForm) {
            return PageService._filterHiddenFields(clientForm);
        });
    };
    /**
     * @see IPageServiceProvider
     */
    PageService.prototype.openPageSettingsPanel = function () {
        return this._serviceProvider.openPageSettingsPanel();
    };
    /**
     * @see IPageServiceProvider
     */
    PageService.prototype.saveCurrentItem = function (clientForm) {
        return this._serviceProvider.saveCurrentItem(clientForm);
    };
    /**
     * @see IPageServiceProvider
     */
    PageService.prototype.getChromeOptions = function () {
        return this._serviceProvider.getChromeOptions();
    };
    /**
     * @see IPageServiceProvider
     */
    PageService.prototype.getPagePublishInfo = function () {
        return this._serviceProvider.getPagePublishInfo();
    };
    /**
     * @see IPageServiceProvider
     */
    PageService.prototype.getPageBasicInfo = function () {
        return this._serviceProvider.getPageBasicInfo();
    };
    /**
     * @see IPageServiceProvider
     */
    PageService.prototype.getPageMultilingualInfo = function () {
        return this._serviceProvider.getPageMultilingualInfo();
    };
    /**
     * @see IPageServiceProvider
     */
    PageService.prototype.subscribe = function (observer, eventType, handler) {
        this._serviceProvider.subscribe(observer, eventType, handler);
        return Promise.resolve();
    };
    /**
     * @see IPageServiceProvider
     */
    PageService.prototype.unsubscribe = function (observer, eventType, handler) {
        this._serviceProvider.unsubscribe(observer, eventType, handler);
        return Promise.resolve();
    };
    /**
     * @see IPageServiceProvider
     */
    PageService.prototype.getAutoSaver = function () {
        return this._serviceProvider.getAutoSaver();
    };
    /**
     * @see IPageServiceProvider
     */
    PageService.prototype.getClientFormProvider = function () {
        return this._serviceProvider.getClientFormProvider();
    };
    /**
     * @see IPageServiceProvider
     */
    PageService.prototype.getItemUpdateQueue = function () {
        return this._serviceProvider.getItemUpdateQueue();
    };
    /**
     * @see IPageServiceProvider
     */
    PageService.prototype.invalidatePageNavigationCache = function () {
        return Promise.resolve(this._serviceProvider.invalidatePageNavigationCache());
    };
    /**
     * The service key for PageService
     */
    PageService.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["ServiceKey"].create('sp-component-utilities:PageService', PageService);
    PageService.logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create('PageService');
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        withErrorHandling
    ], PageService.prototype, "getCurrentItem", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        withErrorHandling
    ], PageService.prototype, "updateCurrentItem", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        withErrorHandling
    ], PageService.prototype, "openPageSettingsPanel", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        withErrorHandling
    ], PageService.prototype, "saveCurrentItem", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        withErrorHandling
    ], PageService.prototype, "getChromeOptions", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        withErrorHandling
    ], PageService.prototype, "getPagePublishInfo", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        withErrorHandling
    ], PageService.prototype, "getPageBasicInfo", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        withErrorHandling
    ], PageService.prototype, "getPageMultilingualInfo", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        withErrorHandling
    ], PageService.prototype, "subscribe", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        withErrorHandling
    ], PageService.prototype, "unsubscribe", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        withErrorHandling
    ], PageService.prototype, "getAutoSaver", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        withErrorHandling
    ], PageService.prototype, "getClientFormProvider", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        withErrorHandling
    ], PageService.prototype, "invalidatePageNavigationCache", null);
    return PageService;
}());

/**
 * This is a decorator to do generic error handling for page service calls
 * It also initialize the page service if it hasn't been initialized.
 *
 * Example:
 *  @withErrorHandling
 *  public getFieldData(fieldName: string): Promise<any>
 *     ...
 *   }
 */
// tslint:disable:no-any
function withErrorHandling(target, propertyKey, descriptor) {
    var handleError = function (ex) {
        ex = ex || new _PageServiceError__WEBPACK_IMPORTED_MODULE_3__["PageServiceError"](_PageServiceError__WEBPACK_IMPORTED_MODULE_3__["PageServiceErrorCode"].ServiceNotInitialized);
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(PageService.logSource, ex);
        return Promise.reject(ex);
    };
    return {
        value: function _callService() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this._serviceProvider) {
                return descriptor.value.apply(this, args);
            }
            else if (this._serviceProviderLoaderPromise) {
                return this._serviceProviderLoaderPromise.then(function () { return descriptor.value.apply(_this, args); });
            }
            else if (this._serviceProviderLoader) {
                return (this._serviceProviderLoaderPromise = this._serviceProviderLoader()
                    .then(function (pageServiceProvider) {
                    _this.initialize(pageServiceProvider);
                    return descriptor.value.apply(_this, args);
                })
                    .catch(handleError));
            }
            else {
                return handleError();
            }
        }
    };
}


/***/ }),

/***/ "jOlS":
/*!************************************************!*\
  !*** external "@microsoft/load-themed-styles" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jOlS__;

/***/ }),

/***/ "k0Dt":
/*!***************************************!*\
  !*** ./lib/performance/KillSwitch.js ***!
  \***************************************/
/*! exports provided: KillSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KillSwitch", function() { return KillSwitch; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @deprecated DO NOT USE - Use _SPKillSwitch from `@microsoft/sp-core-library`.
 * Example: _SPKillSwitch.isActivated('00000000-0000-0000-0000-000000000000' \/* 'MM/DD/YYYY', 'My Feature' *\/);
 *
 * Class representing kill switch information.
 */
var KillSwitch = /** @class */ (function () {
    /**
     * Specify date and description within comment section
     * e.g. ('efc0bbdb-5840-4f29-ae06-6415236103a5' /* '4/9/2019', 'SOX_EventDataPickerAutoFocus' *\/)
     *
     *
     * @param guid - Guid of the kill switch. It is highly recommended to use lowercase without {} for best performance
     */
    function KillSwitch(guid) {
        this._guid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(guid);
    }
    /**
     * Returns true if kill switch has been activated.
     */
    KillSwitch.prototype.isActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(this._guid, '', '');
    };
    return KillSwitch;
}());



/***/ }),

/***/ "klbR":
/*!*************************************************!*\
  !*** ./lib/toolbarButton/ToolbarButton.scss.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./ToolbarButton.css */ "Ss4T");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "lMrs":
/*!**********************************************!*\
  !*** ./lib/assets/reportDefaultImage5sm.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "reportDefaultImage5sm_ee54b634fecfc72d3306c927e833d118.png";

/***/ }),

/***/ "lsgA":
/*!*******************************************************!*\
  !*** ./lib/assets/portfolioImageGalleryPendantSm.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioImageGalleryPendantSm_2d57ff8ec4b521893ee7f5206a518693.png";

/***/ }),

/***/ "mGD9":
/*!******************************!*\
  !*** ./lib/loc/Strings.resx ***!
  \******************************/
/*! exports provided: HourMessage, MinuteMessage, SecondMessage, CountStringIntervals, DurationText, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"HourMessage\":\"[!!--##{0} ĥōũŕś||{0} ĥōũŕ||{0} ĥōũŕś##--!!]\",\"MinuteMessage\":\"[!!--##{0} mĩńũţēś||{0} mĩńũţē||{0} mĩńũţēś##--!!]\",\"SecondMessage\":\"[!!--##{0} śēćōńďś||{0} śēćōńď||{0} śēćōńďś##--!!]\",\"CountStringIntervals\":\"[!!--##0||1||2-##--!!]\",\"DurationText\":\"[!!--##Ďũŕàţĩōń {0}##--!!]\"}");

/***/ }),

/***/ "mKki":
/*!*******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/pageTemplates/visualTemplateImage1.jpg ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "visualTemplateImage1_04cb013bb5cd57eb1d2dacad1a4608a9.jpg";

/***/ }),

/***/ "medE":
/*!********************************!*\
  !*** ./lib/icsHelper/index.js ***!
  \********************************/
/*! exports provided: IcsFileGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IcsFileGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IcsFileGenerator */ "JW2X");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IcsFileGenerator", function() { return _IcsFileGenerator__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: CacheResponseType, monitor, UnexpectedFailure, ExpectedFailure, DeferredDialogUtility, ExtensionHelper, Icons, DEFAULT_EXTENSION, DEFAULT_SIZE, FOLDER_EXTENSION, LIST_ITEM_EXTENSION, DEFAULT_ICON_COLOR, DOCX_ICON_COLOR, ODP_ICON_COLOR, ICON_EXT_MAP, EXTENSIONS_TO_FILENAME_MAP, FileTypeIconDetailsListRenderer, FileTypeIconsLoader, IcsFileGenerator, ImageSourceType, DefaultImageHelper, ThumbnailUrlGenerator, CropMode, PreviewHelper, PreviewUtility, scrubUrl, peoplePickerDataSourceServiceLoader, SortableLoader, Md5Hash, Multilingual, StatusablePromise, PageEventType, PageService, PageSaveStatus, PageServiceError, PageServiceErrorCode, PageServiceEventArgs, SPModerationStatusType, RetryHelper, RemoteWebFileGetter, BREAKPOINT_SIZE, ResponsiveUI, ScreenReaderAlert, ReadingMode, spConstants, SPResourcePath, SPResourcePathFormat, StringFormaterWithNodes, UrlUtility, ToolbarButton, SPFormatDateTime, SPFREUtility, SPUtility, KillSwitch, SmartRace, LimitedLengthTextField, ENTITY_STATE, INVALID_TOPIC, NULL_TOPIC_ENTITY, RelationsContainerKey, EntityRelationsService, isCortexEnabled, setCortexDisabledFlag, isIndexedDBEnabledForCortexAPIs, isIndexedDBEnabledForOdspAPIs, isIndexedDBEnabledForSubstrateAPIs, isRunTAB, TopicDataService, UPDATE_TOPIC_TITLE_SUB_HEADER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _caching_ICacheResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caching/ICacheResult */ "DHEo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheResponseType", function() { return _caching_ICacheResult__WEBPACK_IMPORTED_MODULE_0__["CacheResponseType"]; });

/* harmony import */ var _decorators_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators/index */ "IoHU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "monitor", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["monitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnexpectedFailure", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["UnexpectedFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpectedFailure", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["ExpectedFailure"]; });

/* harmony import */ var _dialog_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog/index */ "Z675");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredDialogUtility", function() { return _dialog_index__WEBPACK_IMPORTED_MODULE_2__["DeferredDialogUtility"]; });

/* harmony import */ var _extensionHelper_ExtensionHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extensionHelper/ExtensionHelper */ "ByVl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtensionHelper", function() { return _extensionHelper_ExtensionHelper__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _fileTypeIcons_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fileTypeIcons/index */ "rn0h");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icons", function() { return _fileTypeIcons_index__WEBPACK_IMPORTED_MODULE_4__["Icons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_EXTENSION", function() { return _fileTypeIcons_index__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_EXTENSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SIZE", function() { return _fileTypeIcons_index__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_SIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOLDER_EXTENSION", function() { return _fileTypeIcons_index__WEBPACK_IMPORTED_MODULE_4__["FOLDER_EXTENSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LIST_ITEM_EXTENSION", function() { return _fileTypeIcons_index__WEBPACK_IMPORTED_MODULE_4__["LIST_ITEM_EXTENSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ICON_COLOR", function() { return _fileTypeIcons_index__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_ICON_COLOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOCX_ICON_COLOR", function() { return _fileTypeIcons_index__WEBPACK_IMPORTED_MODULE_4__["DOCX_ICON_COLOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ODP_ICON_COLOR", function() { return _fileTypeIcons_index__WEBPACK_IMPORTED_MODULE_4__["ODP_ICON_COLOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ICON_EXT_MAP", function() { return _fileTypeIcons_index__WEBPACK_IMPORTED_MODULE_4__["ICON_EXT_MAP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXTENSIONS_TO_FILENAME_MAP", function() { return _fileTypeIcons_index__WEBPACK_IMPORTED_MODULE_4__["EXTENSIONS_TO_FILENAME_MAP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileTypeIconDetailsListRenderer", function() { return _fileTypeIcons_index__WEBPACK_IMPORTED_MODULE_4__["FileTypeIconDetailsListRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileTypeIconsLoader", function() { return _fileTypeIcons_index__WEBPACK_IMPORTED_MODULE_4__["FileTypeIconsLoader"]; });

/* harmony import */ var _icsHelper_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icsHelper/index */ "medE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IcsFileGenerator", function() { return _icsHelper_index__WEBPACK_IMPORTED_MODULE_5__["IcsFileGenerator"]; });

/* harmony import */ var _imaging_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imaging/index */ "Cy4Q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageSourceType", function() { return _imaging_index__WEBPACK_IMPORTED_MODULE_6__["ImageSourceType"]; });

/* harmony import */ var _layouts_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/index */ "PdVp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultImageHelper", function() { return _layouts_index__WEBPACK_IMPORTED_MODULE_7__["DefaultImageHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThumbnailUrlGenerator", function() { return _layouts_index__WEBPACK_IMPORTED_MODULE_7__["ThumbnailUrlGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CropMode", function() { return _layouts_index__WEBPACK_IMPORTED_MODULE_7__["CropMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreviewHelper", function() { return _layouts_index__WEBPACK_IMPORTED_MODULE_7__["PreviewHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreviewUtility", function() { return _layouts_index__WEBPACK_IMPORTED_MODULE_7__["PreviewUtility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scrubUrl", function() { return _layouts_index__WEBPACK_IMPORTED_MODULE_7__["scrubUrl"]; });

/* harmony import */ var _loader_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loader/index */ "JjRa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "peoplePickerDataSourceServiceLoader", function() { return _loader_index__WEBPACK_IMPORTED_MODULE_8__["peoplePickerDataSourceServiceLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableLoader", function() { return _loader_index__WEBPACK_IMPORTED_MODULE_8__["SortableLoader"]; });

/* harmony import */ var _md5Hash_Md5Hash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./md5Hash/Md5Hash */ "f+8y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Md5Hash", function() { return _md5Hash_Md5Hash__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _multilingual_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./multilingual/index */ "x3Od");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Multilingual", function() { return _multilingual_index__WEBPACK_IMPORTED_MODULE_10__["Multilingual"]; });

/* harmony import */ var _smartRace_SmartRace__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./smartRace/SmartRace */ "ercE");
/* empty/unused harmony star reexport *//* harmony import */ var _statusablePromise_StatusablePromise__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./statusablePromise/StatusablePromise */ "FX2h");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusablePromise", function() { return _statusablePromise_StatusablePromise__WEBPACK_IMPORTED_MODULE_12__["StatusablePromise"]; });

/* harmony import */ var _pageService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pageService */ "Yf54");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageEventType", function() { return _pageService__WEBPACK_IMPORTED_MODULE_13__["PageEventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return _pageService__WEBPACK_IMPORTED_MODULE_13__["PageService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageSaveStatus", function() { return _pageService__WEBPACK_IMPORTED_MODULE_13__["PageSaveStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageServiceError", function() { return _pageService__WEBPACK_IMPORTED_MODULE_13__["PageServiceError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageServiceErrorCode", function() { return _pageService__WEBPACK_IMPORTED_MODULE_13__["PageServiceErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageServiceEventArgs", function() { return _pageService__WEBPACK_IMPORTED_MODULE_13__["PageServiceEventArgs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPModerationStatusType", function() { return _pageService__WEBPACK_IMPORTED_MODULE_13__["SPModerationStatusType"]; });

/* harmony import */ var _retryHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./retryHelper */ "RiH0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RetryHelper", function() { return _retryHelper__WEBPACK_IMPORTED_MODULE_14__["RetryHelper"]; });

/* harmony import */ var _remoteWebFileGetter_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./remoteWebFileGetter/index */ "erqz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoteWebFileGetter", function() { return _remoteWebFileGetter_index__WEBPACK_IMPORTED_MODULE_15__["RemoteWebFileGetter"]; });

/* harmony import */ var _responsiveUI_ResponsiveUI__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./responsiveUI/ResponsiveUI */ "qr+S");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINT_SIZE", function() { return _responsiveUI_ResponsiveUI__WEBPACK_IMPORTED_MODULE_16__["BREAKPOINT_SIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveUI", function() { return _responsiveUI_ResponsiveUI__WEBPACK_IMPORTED_MODULE_16__["ResponsiveUI"]; });

/* harmony import */ var _screenReaderAlert_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./screenReaderAlert/index */ "e/jN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenReaderAlert", function() { return _screenReaderAlert_index__WEBPACK_IMPORTED_MODULE_17__["ScreenReaderAlert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReadingMode", function() { return _screenReaderAlert_index__WEBPACK_IMPORTED_MODULE_17__["ReadingMode"]; });

/* harmony import */ var _SPConstants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SPConstants */ "bz/i");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spConstants", function() { return _SPConstants__WEBPACK_IMPORTED_MODULE_18__["spConstants"]; });

/* harmony import */ var _SPResourcePath__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SPResourcePath */ "OLPK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPResourcePath", function() { return _SPResourcePath__WEBPACK_IMPORTED_MODULE_19__["SPResourcePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPResourcePathFormat", function() { return _SPResourcePath__WEBPACK_IMPORTED_MODULE_19__["SPResourcePathFormat"]; });

/* harmony import */ var _stringFormatUtilities__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./stringFormatUtilities */ "WONs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringFormaterWithNodes", function() { return _stringFormatUtilities__WEBPACK_IMPORTED_MODULE_20__["StringFormaterWithNodes"]; });

/* harmony import */ var _UrlUtility__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./UrlUtility */ "z7It");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlUtility", function() { return _UrlUtility__WEBPACK_IMPORTED_MODULE_21__["UrlUtility"]; });

/* harmony import */ var _toolbarButton_ToolbarButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./toolbarButton/ToolbarButton */ "iah3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolbarButton", function() { return _toolbarButton_ToolbarButton__WEBPACK_IMPORTED_MODULE_22__["ToolbarButton"]; });

/* harmony import */ var _SPFormatDateTime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SPFormatDateTime */ "ekGN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPFormatDateTime", function() { return _SPFormatDateTime__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _SPFREUtility__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./SPFREUtility */ "BdkO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPFREUtility", function() { return _SPFREUtility__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _SPUtility__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./SPUtility */ "1r8z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPUtility", function() { return _SPUtility__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _performance_KillSwitch__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./performance/KillSwitch */ "k0Dt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KillSwitch", function() { return _performance_KillSwitch__WEBPACK_IMPORTED_MODULE_26__["KillSwitch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SmartRace", function() { return _smartRace_SmartRace__WEBPACK_IMPORTED_MODULE_11__["SmartRace"]; });

/* harmony import */ var _limitedLengthTextField_LimitedLengthTextField__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./limitedLengthTextField/LimitedLengthTextField */ "WUZl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LimitedLengthTextField", function() { return _limitedLengthTextField_LimitedLengthTextField__WEBPACK_IMPORTED_MODULE_27__["LimitedLengthTextField"]; });

/* harmony import */ var _topics_index__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./topics/index */ "fnKW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ENTITY_STATE", function() { return _topics_index__WEBPACK_IMPORTED_MODULE_28__["ENTITY_STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INVALID_TOPIC", function() { return _topics_index__WEBPACK_IMPORTED_MODULE_28__["INVALID_TOPIC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NULL_TOPIC_ENTITY", function() { return _topics_index__WEBPACK_IMPORTED_MODULE_28__["NULL_TOPIC_ENTITY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RelationsContainerKey", function() { return _topics_index__WEBPACK_IMPORTED_MODULE_28__["RelationsContainerKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityRelationsService", function() { return _topics_index__WEBPACK_IMPORTED_MODULE_28__["EntityRelationsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCortexEnabled", function() { return _topics_index__WEBPACK_IMPORTED_MODULE_28__["isCortexEnabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCortexDisabledFlag", function() { return _topics_index__WEBPACK_IMPORTED_MODULE_28__["setCortexDisabledFlag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIndexedDBEnabledForCortexAPIs", function() { return _topics_index__WEBPACK_IMPORTED_MODULE_28__["isIndexedDBEnabledForCortexAPIs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIndexedDBEnabledForOdspAPIs", function() { return _topics_index__WEBPACK_IMPORTED_MODULE_28__["isIndexedDBEnabledForOdspAPIs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIndexedDBEnabledForSubstrateAPIs", function() { return _topics_index__WEBPACK_IMPORTED_MODULE_28__["isIndexedDBEnabledForSubstrateAPIs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRunTAB", function() { return _topics_index__WEBPACK_IMPORTED_MODULE_28__["isRunTAB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicDataService", function() { return _topics_index__WEBPACK_IMPORTED_MODULE_28__["TopicDataService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TOPIC_TITLE_SUB_HEADER", function() { return _topics_index__WEBPACK_IMPORTED_MODULE_28__["UPDATE_TOPIC_TITLE_SUB_HEADER"]; });

































/***/ }),

/***/ "nKow":
/*!********************************************************!*\
  !*** ./lib/assets/portfolioImageGalleryHandrailSm.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioImageGalleryHandrailSm_bc4c5296fd3d22ae526bbafde58beda7.png";

/***/ }),

/***/ "ntSI":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/file-type-icons@7.6.24_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/file-type-icons/lib/FileTypeIconMap.js ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: FileTypeIconMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTypeIconMap", function() { return FileTypeIconMap; });
/**
 * Enumeration of icon file names, and what extensions they map to.
 * Please keep items alphabetical. Items without extensions may require specific logic in the code to map.
 * Always use getFileTypeIconProps to get the most up-to-date icon at the right pixel density.
 */
var FileTypeIconMap = {
    accdb: {
        extensions: ['accdb', 'mdb'],
    },
    archive: {
        extensions: ['7z', 'ace', 'arc', 'arj', 'dmg', 'gz', 'iso', 'lzh', 'pkg', 'rar', 'sit', 'tgz', 'tar', 'z'],
    },
    audio: {
        extensions: [
            'aif',
            'aiff',
            'aac',
            'alac',
            'amr',
            'ape',
            'au',
            'awb',
            'dct',
            'dss',
            'dvf',
            'flac',
            'gsm',
            'm4a',
            'm4p',
            'mid',
            'mmf',
            'mp3',
            'oga',
            'ra',
            'rm',
            'wav',
            'wma',
            'wv',
        ],
    },
    calendar: {
        extensions: ['ical', 'icalendar', 'ics', 'ifb', 'vcs'],
    },
    code: {
        extensions: [
            'abap',
            'ada',
            'adp',
            'ahk',
            'as',
            'as3',
            'asc',
            'ascx',
            'asm',
            'asp',
            'awk',
            'bash',
            'bash_login',
            'bash_logout',
            'bash_profile',
            'bashrc',
            'bat',
            'bib',
            'bsh',
            'build',
            'builder',
            'c',
            'cbl',
            'c++',
            'capfile',
            'cc',
            'cfc',
            'cfm',
            'cfml',
            'cl',
            'clj',
            'cls',
            'cmake',
            'cmd',
            'coffee',
            'config',
            'cpp',
            'cpt',
            'cpy',
            'cs',
            'cshtml',
            'cson',
            'csproj',
            'css',
            'ctp',
            'cxx',
            'd',
            'ddl',
            'di',
            'disco',
            'dml',
            'dtd',
            'dtml',
            'el',
            'emakefile',
            'erb',
            'erl',
            'f',
            'f90',
            'f95',
            'fs',
            'fsi',
            'fsscript',
            'fsx',
            'gemfile',
            'gemspec',
            'gitconfig',
            'go',
            'groovy',
            'gvy',
            'h',
            'h++',
            'haml',
            'handlebars',
            'hbs',
            'hcp',
            'hh',
            'hpp',
            'hrl',
            'hs',
            'htc',
            'hxx',
            'idl',
            'iim',
            'inc',
            'inf',
            'ini',
            'inl',
            'ipp',
            'irbrc',
            'jade',
            'jav',
            'java',
            'js',
            'json',
            'jsp',
            'jsproj',
            'jsx',
            'l',
            'less',
            'lhs',
            'lisp',
            'log',
            'lst',
            'ltx',
            'lua',
            'm',
            'mak',
            'make',
            'manifest',
            'master',
            'md',
            'markdn',
            'markdown',
            'mdown',
            'mkdn',
            'ml',
            'mli',
            'mll',
            'mly',
            'mm',
            'mud',
            'nfo',
            'opml',
            'osascript',
            'p',
            'pas',
            'patch',
            'php',
            'php2',
            'php3',
            'php4',
            'php5',
            'phtml',
            'pl',
            'pm',
            'pod',
            'pp',
            'profile',
            'ps1',
            'ps1xml',
            'psd1',
            'psm1',
            'pss',
            'pt',
            'py',
            'pyw',
            'r',
            'rake',
            'rb',
            'rbx',
            'rc',
            'rdf',
            're',
            'reg',
            'rest',
            'resw',
            'resx',
            'rhtml',
            'rjs',
            'rprofile',
            'rpy',
            'rss',
            'rst',
            'ruby',
            'rxml',
            's',
            'sass',
            'scala',
            'scm',
            'sconscript',
            'sconstruct',
            'script',
            'scss',
            'sgml',
            'sh',
            'shtml',
            'sml',
            'svn-base',
            'swift',
            'sql',
            'sty',
            'tcl',
            'tex',
            'textile',
            'tld',
            'tli',
            'tmpl',
            'tpl',
            'vb',
            'vi',
            'vim',
            'vmg',
            'webpart',
            'wsp',
            'wsdl',
            'xhtml',
            'xoml',
            'xsd',
            'xslt',
            'yaml',
            'yaws',
            'yml',
            'zsh',
        ],
    },
    contact: {
        extensions: ['vcf'],
    },
    /*  css: {},  not broken out yet, snapping to 'code' for now */
    csv: {
        extensions: ['csv'],
    },
    desktopfolder: {},
    docset: {},
    documentfolder: {},
    docx: {
        extensions: ['doc', 'docm', 'docx', 'docb'],
    },
    dotx: {
        extensions: ['dot', 'dotm', 'dotx'],
    },
    email: {
        extensions: ['eml', 'msg', 'ost', 'pst'],
    },
    exe: {
        extensions: ['application', 'appref-ms', 'apk', 'app', 'appx', 'exe', 'ipa', 'msi', 'xap'],
    },
    folder: {},
    font: {
        extensions: ['ttf', 'otf', 'woff'],
    },
    fluid: {
        extensions: ['b', 'fluid'],
    },
    genericfile: {},
    html: {
        extensions: ['htm', 'html', 'mht'],
    },
    link: {
        extensions: ['lnk', 'link', 'url', 'website', 'webloc'],
    },
    linkedfolder: {},
    listitem: {},
    officescript: {
        extensions: ['osts'],
    },
    splist: {
        extensions: ['listitem'],
    },
    model: {
        extensions: [
            '3ds',
            '3mf',
            'blend',
            'cool',
            'dae',
            'df',
            'dwfx',
            'dwg',
            'dxf',
            'fbx',
            'glb',
            'gltf',
            'holo',
            'layer',
            'layout',
            'max',
            'mcworld',
            'mtl',
            'obj',
            'off',
            'ply',
            'skp',
            'stp',
            'stl',
            't',
            'thl',
            'x',
        ],
    },
    mpp: {
        extensions: ['mpp'],
    },
    mpt: {
        extensions: ['mpt'],
    },
    multiple: {},
    one: {
        // This represents a single Fluid Note, or a partial exported section/page of a notebook.
        extensions: ['note', 'one'],
    },
    onetoc: {
        extensions: ['ms-one-stub', 'onetoc', 'onetoc2', 'onepkg'],
    },
    pbiapp: {},
    pdf: {
        extensions: ['pdf'],
    },
    photo: {
        extensions: [
            'arw',
            'bmp',
            'cr2',
            'crw',
            'dic',
            'dicm',
            'dcm',
            'dcm30',
            'dcr',
            'dds',
            'dib',
            'dng',
            'erf',
            'gif',
            'heic',
            'heif',
            'ico',
            'jfi',
            'jfif',
            'jif',
            'jpe',
            'jpeg',
            'jpg',
            'kdc',
            'mrw',
            'nef',
            'orf',
            'pct',
            'pict',
            'png',
            'pns',
            'psb',
            'psd',
            'raw',
            'tga',
            'tif',
            'tiff',
            'wdp',
        ],
    },
    photo360: {},
    picturesfolder: {},
    potx: {
        extensions: ['pot', 'potm', 'potx'],
    },
    powerbi: {
        extensions: ['pbids', 'pbix'],
    },
    ppsx: {
        extensions: ['pps', 'ppsm', 'ppsx'],
    },
    pptx: {
        extensions: ['ppt', 'pptm', 'pptx', 'sldx', 'sldm'],
    },
    presentation: {
        extensions: ['odp', 'gslides', 'key'],
    },
    pub: {
        extensions: ['pub'],
    },
    spo: {
        extensions: ['aspx', 'classifier'],
    },
    sponews: {},
    spreadsheet: {
        extensions: ['odc', 'ods', 'gsheet', 'numbers', 'tsv'],
    },
    stream: {},
    rtf: {
        extensions: ['epub', 'gdoc', 'odt', 'rtf', 'wri', 'pages'],
    },
    sharedfolder: {},
    sway: {},
    sysfile: {
        extensions: [
            'bak',
            'bin',
            'cab',
            'cache',
            'cat',
            'cer',
            'class',
            'dat',
            'db',
            'dbg',
            'dl_',
            'dll',
            'ithmb',
            'jar',
            'kb',
            'ldt',
            'lrprev',
            'pkpass',
            'ppa',
            'ppam',
            'pdb',
            'rom',
            'thm',
            'thmx',
            'vsl',
            'xla',
            'xlam',
            'xlb',
            'xll',
        ],
    },
    txt: {
        extensions: ['dif', 'diff', 'readme', 'out', 'plist', 'properties', 'text', 'txt'],
    },
    vaultclosed: {},
    vaultopen: {},
    vector: {
        extensions: [
            'ai',
            'ait',
            'cvs',
            'dgn',
            'gdraw',
            'pd',
            'emf',
            'eps',
            'fig',
            'ind',
            'indd',
            'indl',
            'indt',
            'indb',
            'ps',
            'svg',
            'svgz',
            'wmf',
            'oxps',
            'xps',
            'xd',
            'sketch',
        ],
    },
    video: {
        extensions: [
            '3g2',
            '3gp',
            '3gp2',
            '3gpp',
            'asf',
            'avi',
            'dvr-ms',
            'flv',
            'm1v',
            'm4v',
            'mkv',
            'mod',
            'mov',
            'mm4p',
            'mp2',
            'mp2v',
            'mp4',
            'mp4v',
            'mpa',
            'mpe',
            'mpeg',
            'mpg',
            'mpv',
            'mpv2',
            'mts',
            'ogg',
            'qt',
            'swf',
            'ts',
            'vob',
            'webm',
            'wlmp',
            'wm',
            'wmv',
            'wmx',
        ],
    },
    video360: {},
    vsdx: {
        extensions: ['vdx', 'vsd', 'vsdm', 'vsdx', 'vsw', 'vdw'],
    },
    vssx: {
        extensions: ['vss', 'vssm', 'vssx'],
    },
    vstx: {
        extensions: ['vst', 'vstm', 'vstx', 'vsx'],
    },
    whiteboard: {
        extensions: ['whiteboard'],
    },
    xlsx: {
        extensions: ['xlc', 'xls', 'xlsb', 'xlsm', 'xlsx', 'xlw'],
    },
    xltx: {
        extensions: ['xlt', 'xltm', 'xltx'],
    },
    xml: {
        extensions: ['xaml', 'xml', 'xsl'],
    },
    xsn: {
        extensions: ['xsn'],
    },
    zip: {
        extensions: ['zip'],
    },
};
//# sourceMappingURL=FileTypeIconMap.js.map

/***/ }),

/***/ "o5ir":
/*!******************************************************!*\
  !*** ./lib/assets/portfolioImageGalleryChairsSm.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioImageGalleryChairsSm_5eab4e4091ef32e7fe1ab7af9bed8986.png";

/***/ }),

/***/ "pWJW":
/*!******************************************!*\
  !*** ./lib/layouts/IThumbnailRequest.js ***!
  \******************************************/
/*! exports provided: CropMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropMode", function() { return CropMode; });
/**
 * @file IThumbnailRequest.ts
 * @copyright Microsoft Corporation. All rights reserved.
 */
/***
 * Crop modes. Based on the modes supported by MeTA
 */
// tslint:disable-next-line:typedef variable-name
var CropMode = {
    Default: 'fit',
    Fit: 'fit',
    Fill: 'fill',
    Top: 'top',
    Bottom: 'bottom',
    DocHead: 'dochead'
};


/***/ }),

/***/ "qMPn":
/*!***********************************!*\
  !*** ./lib/decorators/monitor.js ***!
  \***********************************/
/*! exports provided: UnexpectedFailure, ExpectedFailure, monitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnexpectedFailure", function() { return UnexpectedFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpectedFailure", function() { return ExpectedFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monitor", function() { return monitor; });
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @copyright (c) Microsoft Corporation. All rights reserved.
 * @file monitor.ts
 */

function normalizeError(error) {
    if (error instanceof Error) {
        return error;
    }
    else {
        return new Error(error);
    }
}
/**
 * The unexpected failure for QoS monitor.
 */
var UnexpectedFailure = /** @class */ (function () {
    function UnexpectedFailure(tagNameSuffix, innerError, extraData) {
        this._tagNameSuffix = tagNameSuffix;
        this._innerError = normalizeError(innerError);
        this._extraData = extraData;
    }
    Object.defineProperty(UnexpectedFailure.prototype, "tagNameSuffix", {
        get: function () {
            return this._tagNameSuffix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnexpectedFailure.prototype, "innerError", {
        get: function () {
            return this._innerError;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnexpectedFailure.prototype, "extraData", {
        get: function () {
            return this._extraData;
        },
        enumerable: true,
        configurable: true
    });
    return UnexpectedFailure;
}());

/**
 * The expected failure for QoS monitor.
 */
var ExpectedFailure = /** @class */ (function () {
    function ExpectedFailure(tagNameSuffix, innerError, extraData) {
        this._tagNameSuffix = tagNameSuffix;
        this._innerError = normalizeError(innerError);
        this._extraData = extraData;
    }
    Object.defineProperty(ExpectedFailure.prototype, "tagNameSuffix", {
        get: function () {
            return this._tagNameSuffix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpectedFailure.prototype, "innerError", {
        get: function () {
            return this._innerError;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpectedFailure.prototype, "extraData", {
        get: function () {
            return this._extraData;
        },
        enumerable: true,
        configurable: true
    });
    return ExpectedFailure;
}());

/**
 * QoS monitor decorator.
 * @param scenarioName - The scenario name for QoS monitor.
 */
function monitor(scenarioName) {
    return function (target, key, 
    // tslint:disable-next-line:no-any
    descriptor) {
        if (descriptor.value) {
            var originalFunction_1 = descriptor.value; // tslint:disable-line:no-any
            // tslint:disable-next-line:no-any
            descriptor.value = function monitorWrapper() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var qosMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"](scenarioName);
                // @todo Support the synchronous method with try-catch block.
                var promise = originalFunction_1.apply(this, args);
                return promise.then(function (result) {
                    qosMonitor.writeSuccess();
                    return result;
                }, function (error) {
                    if (error instanceof ExpectedFailure) {
                        qosMonitor.writeExpectedFailure(error.tagNameSuffix, error.innerError, error.extraData);
                        throw error.innerError;
                    }
                    else if (error instanceof UnexpectedFailure) {
                        qosMonitor.writeUnexpectedFailure(error.tagNameSuffix, error.innerError, error.extraData);
                        throw error.innerError;
                    }
                    else {
                        qosMonitor.writeUnexpectedFailure('UnexpectedFailure', error);
                        throw error;
                    }
                });
            };
        }
    };
}


/***/ }),

/***/ "qr+S":
/*!******************************************!*\
  !*** ./lib/responsiveUI/ResponsiveUI.js ***!
  \******************************************/
/*! exports provided: BREAKPOINT_SIZE, ResponsiveUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINT_SIZE", function() { return BREAKPOINT_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveUI", function() { return ResponsiveUI; });
/**
 * @file ResponsiveUI.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
// tslint:disable-next-line:typedef
var BREAKPOINT_SIZE = {
    SM: 0,
    MD: 1,
    LG: 2,
    XL: 3,
    XXL: 4,
    XXXL: 5
};
var ResponsiveUI = /** @class */ (function () {
    function ResponsiveUI() {
        /**
         * This is used to pass in the screen or container size breakpoints fot responsive mode.
         * The entries should always be set in ascending order.
         * Example:
         *
         * let responsiveUI: ResponsiveUI = new ResponsiveUI();
         * responsiveUI.screenBreakpoints:  = {
         *  [480]: BREAKPOINT_SIZE.SM,
         *  [640]: BREAKPOINT_SIZE.MD,
         *  [1024]: BREAKPOINT_SIZE.LG,
         *  [1366]: BREAKPOINT_SIZE.XL,
         *  [1920]: BREAKPOINT_SIZE.XXL,
         *  [99999]: BREAKPOINT_SIZE.XXXL
         * };
         */
        this.screenBreakpoints = undefined;
    }
    /**
     * Returns the current responsive mode screen size based on the screen width.
     */
    ResponsiveUI.prototype.getCurrentScreenBreakpoint = function () {
        var _width = window.innerWidth;
        return this.getCurrentElementBreakpoint(_width);
    };
    /**
     * Returns the responsive mode element size based on the given width.
     */
    ResponsiveUI.prototype.getCurrentElementBreakpoint = function (width) {
        if (this.screenBreakpoints !== undefined) {
            for (var key in this.screenBreakpoints) {
                if (parseInt(key, 10) >= width) {
                    return this.screenBreakpoints[key];
                }
            }
        }
        return BREAKPOINT_SIZE.SM;
    };
    return ResponsiveUI;
}());



/***/ }),

/***/ "rgtK":
/*!*********************************************************!*\
  !*** ./lib/screenReaderAlert/ScreenReaderAlertProps.js ***!
  \*********************************************************/
/*! exports provided: ReadingMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingMode", function() { return ReadingMode; });
// tslint:disable-next-line:typedef variable-name
var ReadingMode = {
    /**
     * The content in this component will read out after other reading tasks of screen reader.
     * E.g. first read the information of currently focus control, then this content.
     * NOTE: ReadingMode.ReadAfterOtherContent doesn't support ChromeVOX v53.
     */
    ReadAfterOtherContent: 1,
    /**
     * Read immediately after this component is triggered rendering and updated.
     * Most screen readers will announce the word 'alert' before or after the whole sentence.
     */
    ReadImmediately: 2
};


/***/ }),

/***/ "rn0h":
/*!************************************!*\
  !*** ./lib/fileTypeIcons/index.js ***!
  \************************************/
/*! exports provided: Icons, DEFAULT_EXTENSION, DEFAULT_SIZE, FOLDER_EXTENSION, LIST_ITEM_EXTENSION, DEFAULT_ICON_COLOR, DOCX_ICON_COLOR, ODP_ICON_COLOR, ICON_EXT_MAP, EXTENSIONS_TO_FILENAME_MAP, FileTypeIconDetailsListRenderer, FileTypeIconsLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icons */ "Ze8N");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icons", function() { return _Icons__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_EXTENSION", function() { return _Icons__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_EXTENSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SIZE", function() { return _Icons__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_SIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOLDER_EXTENSION", function() { return _Icons__WEBPACK_IMPORTED_MODULE_0__["FOLDER_EXTENSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LIST_ITEM_EXTENSION", function() { return _Icons__WEBPACK_IMPORTED_MODULE_0__["LIST_ITEM_EXTENSION"]; });

/* harmony import */ var _FileTypeIconMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileTypeIconMap */ "H3mH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ICON_COLOR", function() { return _FileTypeIconMap__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_ICON_COLOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOCX_ICON_COLOR", function() { return _FileTypeIconMap__WEBPACK_IMPORTED_MODULE_1__["DOCX_ICON_COLOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ODP_ICON_COLOR", function() { return _FileTypeIconMap__WEBPACK_IMPORTED_MODULE_1__["ODP_ICON_COLOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ICON_EXT_MAP", function() { return _FileTypeIconMap__WEBPACK_IMPORTED_MODULE_1__["ICON_EXT_MAP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXTENSIONS_TO_FILENAME_MAP", function() { return _FileTypeIconMap__WEBPACK_IMPORTED_MODULE_1__["EXTENSIONS_TO_FILENAME_MAP"]; });

/* harmony import */ var _renderers_FileTypeIconDetailsListRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderers/FileTypeIconDetailsListRenderer */ "F2IJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileTypeIconDetailsListRenderer", function() { return _renderers_FileTypeIconDetailsListRenderer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _FileTypeIconsLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FileTypeIconsLoader */ "aEnU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileTypeIconsLoader", function() { return _FileTypeIconsLoader__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "rszi":
/*!********************************************!*\
  !*** ./lib/assets/reportDefaultImage3.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "reportDefaultImage3_9d414de8477674c853e22dedfb52d774.png";

/***/ }),

/***/ "sJ/D":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/pageTemplates/sleekTemplateImageTile.jpg ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sleekTemplateImageTile_1beada90c670860d97a36422a258917a.jpg";

/***/ }),

/***/ "twtR":
/*!****************************************************************!*\
  !*** ./lib/screenReaderAlert/ScreenReaderAlert.module.scss.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./ScreenReaderAlert.module.css */ "wu3P");
var styles = {
    screenReaderAlert: 'b_b_acd50736'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "tzy4":
/*!**************************************!*\
  !*** ./lib/loader/SortableLoader.js ***!
  \**************************************/
/*! exports provided: SortableLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableLoader", function() { return SortableLoader; });
var SortableLoader = /** @class */ (function () {
    function SortableLoader() {
    }
    SortableLoader.GetSortable = function () {
        if (!SortableLoader._promise) {
            SortableLoader._promise = __webpack_require__.e(/*! import() | sp-component-utilities-edit */ "vendors~sp-component-utilities-edit").then(__webpack_require__.t.bind(null, /*! sortablejs */ "8oUu", 7));
        }
        return SortableLoader._promise;
    };
    return SortableLoader;
}());



/***/ }),

/***/ "uRS8":
/*!**********************************************!*\
  !*** ./lib/assets/reportDefaultImage1sm.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "reportDefaultImage1sm_601c87cbf4b8611b6125ed237800b8a7.png";

/***/ }),

/***/ "uXdC":
/*!**************************************************************!*\
  !*** ./lib/stringFormatUtilities/StringFormaterWithNodes.js ***!
  \**************************************************************/
/*! exports provided: StringFormaterWithNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringFormaterWithNodes", function() { return StringFormaterWithNodes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */


/**
 * String Formater component which can replace placeholers with ReactNode and return a React element.
 */
function StringFormaterWithNodes(_a) {
    var template = _a.template, values = _a.values, divProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["template", "values"]);
    var templateArr = template.split(/\{\d+\}/g /* Regex that finds {#} so it can split by the arguments in string format */);
    var elementArr = new Array();
    for (var i = 0; i < templateArr.length; i++) {
        elementArr.push(templateArr[i]);
        elementArr.push(values[i] || '');
    }
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, divProps), elementArr);
}


/***/ }),

/***/ "uYc5":
/*!************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/news/carousel/newsCarousel1.png ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "newsCarousel1_dd67705c0de60773a9409e628c97c356.png";

/***/ }),

/***/ "ut3N":
/*!********************************************!*\
  !*** external "@microsoft/sp-diagnostics" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ut3N__;

/***/ }),

/***/ "vpCX":
/*!**************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/news/carousel/newsCarousel3sm.png ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "newsCarousel3sm_4b3282c0ce203d8273bc4ed6c946abcf.png";

/***/ }),

/***/ "wS2E":
/*!*******************************************!*\
  !*** ./lib/pageService/PageSaveStatus.js ***!
  \*******************************************/
/*! exports provided: PageSaveStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSaveStatus", function() { return PageSaveStatus; });
// tslint:disable-next-line:typedef variable-name
var PageSaveStatus = {
    Approved: 0,
    Draft: 1,
    Saved: 2,
    ErrorOnPublish: 3,
    NotSaved: 4,
    Pending: 5,
    PublishedOnClick: 6,
    PublishedOnNav: 7,
    Rejected: 8,
    SentNewsDigest: 9,
    SavedButNotPublished: 10,
    UnPublished: 11,
    SubmittedForApproval: 12,
    ApprovalTriggered: 13,
    RejectionTriggered: 14,
    SaveError: 15,
    Scheduled: 16,
    ScheduleTriggered: 17,
    Saving: 18,
    SaveHint: 19
};


/***/ }),

/***/ "wiRv":
/*!*************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/sp-resource-path@0.7.2/node_modules/@ms/sp-resource-path/lib-esm/index.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: SPResourcePath, SPResourcePathFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SPResourcePath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SPResourcePath */ "Co3T");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPResourcePath", function() { return _SPResourcePath__WEBPACK_IMPORTED_MODULE_0__["SPResourcePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPResourcePathFormat", function() { return _SPResourcePath__WEBPACK_IMPORTED_MODULE_0__["SPResourcePathFormat"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "wsap":
/*!*************************************************!*\
  !*** ./lib/assets/portfolioDefaultImage1sm.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolioDefaultImage1sm_fb7b79fac00ee5ec15909064ec506efc.png";

/***/ }),

/***/ "wu3P":
/*!************************************************************!*\
  !*** ./lib/screenReaderAlert/ScreenReaderAlert.module.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./ScreenReaderAlert.module.css */ "Wg2P");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "x3Od":
/*!***********************************!*\
  !*** ./lib/multilingual/index.js ***!
  \***********************************/
/*! exports provided: Multilingual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Multilingual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Multilingual */ "Q67u");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Multilingual", function() { return _Multilingual__WEBPACK_IMPORTED_MODULE_0__["Multilingual"]; });




/***/ }),

/***/ "xygx":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/fileTypeIcons/renderers/FileTypeIcons.module.css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".a_a_acd50736{width:16px!important}", ""]);


/***/ }),

/***/ "xzNW":
/*!**********************************************!*\
  !*** ./lib/topics/EntityRelationsService.js ***!
  \**********************************************/
/*! exports provided: RelationsContainerKey, EntityRelationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationsContainerKey", function() { return RelationsContainerKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityRelationsService", function() { return EntityRelationsService; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */

/**
 * Relations discationary container key
 *
 * @internal
 */
/* tslint:disable-next-line:variable-name */
var RelationsContainerKey = '_relationsContainer';
/**
 * EntityRelationsService helps manage the entity relations in the service scope. Each
 * knowledge aware web part on the topic page will serialize its curations into the entity
 * relations object at the time of page serialization. And eventually, the page will
 * update the 'EntityRelations' column on the topic page entry in the knowledge center.
 *
 * @internal
 */
var EntityRelationsService = /** @class */ (function () {
    function EntityRelationsService() {
        this._relationsContainer = {
            schemaVersion: 1,
            relations: {}
        };
    }
    /**
     * Get the entity relations object as a string
     *
     * @internal
     */
    EntityRelationsService.getRelationsAsString = function (serviceScope) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(serviceScope, 'serviceScope');
        var service = serviceScope.consume(EntityRelationsService.serviceKey);
        /* tslint:disable-next-line:no-string-literal */
        return JSON.stringify(service._relationsContainer);
    };
    EntityRelationsService.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create('sp-component-utilities:EntityRelationsService', EntityRelationsService);
    return EntityRelationsService;
}());



/***/ }),

/***/ "y6r/":
/*!**************************************************!*\
  !*** ./lib/fileTypeIcons/renderers/Strings.resx ***!
  \**************************************************/
/*! exports provided: FileTypeIconAlternateText, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"FileTypeIconAlternateText\":\"[!!--##{0} ƒĩĺē.##--!!]\"}");

/***/ }),

/***/ "y88i":
/*!********************************************!*\
  !*** external "@ms/odsp-utilities-bundle" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_y88i__;

/***/ }),

/***/ "yqC6":
/*!***************************************!*\
  !*** ./lib/layouts/PreviewUtility.js ***!
  \***************************************/
/*! exports provided: ACTIVATE_LOWRES_KS, DROP_QUERY_FOR_FILYTYPE_KS, PreviewUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVATE_LOWRES_KS", function() { return ACTIVATE_LOWRES_KS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DROP_QUERY_FOR_FILYTYPE_KS", function() { return DROP_QUERY_FOR_FILYTYPE_KS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewUtility", function() { return PreviewUtility; });
/* harmony import */ var _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-image-helper */ "8dK2");
/* harmony import */ var _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _performance_KillSwitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../performance/KillSwitch */ "k0Dt");
/* harmony import */ var _DefaultImageHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultImageHelper */ "+5yf");
/* harmony import */ var _ThumbnailUrlGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThumbnailUrlGenerator */ "KCwX");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */




var ACTIVATE_LOWRES_KS = new _performance_KillSwitch__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('7119568e-ed72-4f58-afc5-edc087a53dd3'
/*, '03/22/2020', 'Show lowest resolution image' */
);
var DROP_QUERY_FOR_FILYTYPE_KS = new _performance_KillSwitch__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('8f74df4a-7dc2-4f5b-a5fe-6538a0ca3997'
/*,'06/11/2020', 'WEX Drop query segment before computing file type' */
);
/**
 * Internal Utility for PreviewHelper and ThumbnailUrlGenerator class
 * @internal
 *
 * @deprecated Please find this class and method in the new microsoft/sp-image-helper package.
 */
var PreviewUtility = /** @class */ (function () {
    function PreviewUtility() {
    }
    Object.defineProperty(PreviewUtility, "smallestBreakPointWidth", {
        /**
         * @deprecated Please find this class and method in the new microsoft/sp-image-helper package.
         */
        get: function () {
            return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_PreviewUtility"].smallestBreakPointWidth;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @deprecated Please find this class and method in the new microsoft/sp-image-helper package.
     */
    PreviewUtility.isImage = function (ext) {
        return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_PreviewUtility"].isImage(ext);
    };
    /**
     * @deprecated Please find this class and method in the new microsoft/sp-image-helper package.
     */
    PreviewUtility.isVideo = function (ext) {
        return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_PreviewUtility"].isVideo(ext);
    };
    /**
     * Returns default image url if path is pointing to it
     * According to width, it will use different sets of images
     * Note: width parameter is scaled window.devicePixelRatio times
     *
     * @deprecated Please find this class and method in the new microsoft/sp-image-helper package.
     */
    PreviewUtility.getDefaultImage = function (resourcePath, width) {
        return _DefaultImageHelper__WEBPACK_IMPORTED_MODULE_2__["DefaultImageHelper"].getDefaultImage(new _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_SPResourcePath"](resourcePath.value), width);
    };
    /**
     * Get default image based on the index for Hero web part
     * Note: width parameter is scaled window.devicePixelRatio times
     *
     * @deprecated Please find this class and method in the new microsoft/sp-image-helper package.
     */
    PreviewUtility.getDefaultImageById = function (id, width) {
        return _DefaultImageHelper__WEBPACK_IMPORTED_MODULE_2__["DefaultImageHelper"].getDefaultImageById(id, width);
    };
    /**
     * Generate VROOM based thumbnail URL
     * @param vroomItemUrl - VROOM URL representing drive item
     * @param width - Width of the thumbnail
     * @param height - Height of the thumbnail
     * @param resolution - Alternative to width/height
     * @param originalWidth - Width of the source image
     * @param originalHeight - Height of the source image
     * @param cropmode - Style of cropping requested
     * @param viewportTop - Top position for the subimage to start
     * @param viewportLeft - Left position for the subimage to start
     * @param viewportWidth - Width of the subimage
     * @param viewportHeight - Height of the subimage
     *
     * @deprecated Please find this class and method in the new microsoft/sp-image-helper package.
     */
    PreviewUtility.getVROOMThumbnailUrl = function (vroomItemUrl, width, height, resolution, originalWidth, originalHeight, cropMode, viewportTop, viewportLeft, viewportWidth, viewportHeight) {
        return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_PreviewUtility"].getVROOMThumbnailUrl(vroomItemUrl, width, height, resolution, originalWidth, originalHeight, _ThumbnailUrlGenerator__WEBPACK_IMPORTED_MODULE_3__["ThumbnailUrlGenerator"].convertCropMode(cropMode), viewportTop, viewportLeft, viewportWidth, viewportHeight);
    };
    /**
     * Generates VROOM Item URL for given resource.
     * @param siteId - SiteId of the resource, required if spResourcePath is not provided
     * @param webId - WebId of the resource, required if spResourcePath is not provided
     * @param listId - listId of the resource, required if spResourcePath is not provided
     * @param uniqueId - uniqueId of the resource, required if spResourcePath is not provided
     * @param spHostBaseUrl - Base URL to the SP Host
     * @param domainName - Domain name of the SP Host, required if spResourcePath is not provided
     * @param spResourcePath - Path to the resource. used when Guids are not available.
     * @param callerId - Identification of the caller. This will be used for telemetry purpose only.
     *
     * @deprecated Please find this class and method in the new microsoft/sp-image-helper package.
     */
    PreviewUtility.getVROOMItemUrl = function (siteId, webId, listId, uniqueId, spHostBaseUrl, domainName, spResourcePath, callerId) {
        return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_0__["_PreviewUtility"].getVROOMItemUrl(siteId, webId, listId, uniqueId, spHostBaseUrl, domainName, spResourcePath, callerId);
    };
    return PreviewUtility;
}());



/***/ }),

/***/ "z7It":
/*!***************************!*\
  !*** ./lib/UrlUtility.js ***!
  \***************************/
/*! exports provided: UrlUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlUtility", function() { return UrlUtility; });
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SPResourcePath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SPResourcePath */ "OLPK");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/KillSwitches */ "+ORw");
// @copyright (c) Microsoft Corporation. All rights reserved.




var UrlUtility = /** @class */ (function () {
    function UrlUtility() {
    }
    Object.defineProperty(UrlUtility, "_getProtocolRegExp", {
        get: function () {
            if (!UrlUtility._protocolRegExp) {
                UrlUtility._protocolRegExp = /^http:\/\//i;
            }
            return UrlUtility._protocolRegExp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UrlUtility, "_getSecureProtocolRegExp", {
        get: function () {
            if (!UrlUtility._secureProtocolRegExp) {
                UrlUtility._secureProtocolRegExp = /^https:\/\//i;
            }
            return UrlUtility._secureProtocolRegExp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UrlUtility, "_getAnyProtocolRegExp", {
        get: function () {
            if (!UrlUtility._anyProtocolRegExp) {
                UrlUtility._anyProtocolRegExp = /^http:\/\/|^https:\/\//i;
            }
            return UrlUtility._anyProtocolRegExp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UrlUtility, "_getYoutubePathRegExp", {
        get: function () {
            if (!UrlUtility._youtubePathRegExp) {
                UrlUtility._youtubePathRegExp = /^\/watch\?v\=.*/i;
            }
            return UrlUtility._youtubePathRegExp;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Utility method to ensure the schema of the URL is the wanted one.
     * If the provided url does not have a schema, the default schema will be added to it.
     *
     * @param url The URL to enure its schema is there and valid.
     * @param validSchemas The allowed URL schemas. If nothing provided, all schemas will be considered as correct.
     * @param defaultSchema Set to this schema if no schema found in URL, default value is https.
     *
     * @returns the URL with the valid schema or returns undefined if the given URL has invalid schema.
     */
    UrlUtility.ensureSchema = function (url, validSchemas, defaultSchema) {
        if (defaultSchema === void 0) { defaultSchema = 'https'; }
        if (!url || !url.trim()) {
            return '';
        }
        var uri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__["Uri"](url);
        var scheme = uri.getScheme();
        if (!scheme) {
            if (defaultSchema.toLowerCase() === 'mailto') {
                return "mailto:" + url;
            }
            return defaultSchema + "://" + url;
        }
        else {
            if (validSchemas &&
                !validSchemas.some(function (validSchema) { return validSchema.toLocaleLowerCase() === scheme.toLocaleLowerCase(); })) {
                return undefined;
            }
            return url;
        }
    };
    /**
     * @returns
     * whether the URL starts with https at online SP.
     * whether the URL starts with http|https at onprem SP.
     */
    UrlUtility.isValidURL = function (embedCode) {
        if (!embedCode) {
            return false;
        }
        if (_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["KillSwitches"].urlUtilityRefactor.isActivated()) {
            var _protocolRegExp = /^http:\/\/|^https:\/\//i;
            return _protocolRegExp.test(embedCode);
        }
        else {
            var authority = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_2__["SPResourcePath"](embedCode).authority;
            return UrlUtility._getAnyProtocolRegExp.test(authority);
        }
    };
    /**
     * @returns whether URL is a YouTube video URL
     * It is either a *youtu.be* URL or a *www.youtube.com/watch?v=* URL
     */
    UrlUtility.isYoutubeURL = function (embedCode) {
        if (_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["KillSwitches"].urlUtilityRefactor.isActivated()) {
            var youtubeURLRegExp = _common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["KillSwitches"].newYoutubeUrlRegexKS.isActivated()
                ? /^https:\/\/(www.youtube.com\/.*|youtu.be\/.*)/i
                : /^https:\/\/(www.youtube.com\/watch\?v\=.*|youtu.be\/.*)/i;
            return youtubeURLRegExp.test(embedCode);
        }
        else {
            var resourcePath = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_2__["SPResourcePath"](embedCode);
            if (!UrlUtility._getSecureProtocolRegExp.test(resourcePath.authority)) {
                return false;
            }
            var domain = resourcePath.domain.toLowerCase();
            if (_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["KillSwitches"].newYoutubeUrlRegexKS.isActivated()) {
                return !!resourcePath.path && (domain === UrlUtility._youtubeUrl || domain === UrlUtility._youtuUrl);
            }
            else {
                return (domain === UrlUtility._youtuUrl ||
                    (domain === UrlUtility._youtubeUrl && UrlUtility._getYoutubePathRegExp.test(resourcePath.path)));
            }
        }
    };
    /**
     * Currently, they must be https URLs. If approvedDomains
     * is empty, then by default the embedCode is valid.
     *
     * This method is only used to validate the input URL or src URL of an iframe.
     * It will not validate the entire iframe code.
     *
     * @param embedCode - user's URL needing validation.
     * @param approvedDomains - an array of the accepted domains in regex string format
     * @returns whether embedCode is one of approvedDomains.
     */
    UrlUtility.isApprovedURL = function (embedCode, approvedDomains) {
        if (approvedDomains.length === 0) {
            /**
             * If not expecting specific domains, return true. Non-http validation
             * will occur in conjunction with this function in other parts of the code.
             */
            return true;
        }
        for (var _i = 0, approvedDomains_1 = approvedDomains; _i < approvedDomains_1.length; _i++) {
            var domain = approvedDomains_1[_i];
            var _protocolRegExp = new RegExp('^https://' + domain, 'i');
            if (_protocolRegExp.test(embedCode)) {
                return true;
            }
        }
        return false;
    };
    /**
     * @returns whether the URL begins with http.
     */
    UrlUtility.startsWithHttp = function (embedCode) {
        if (_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["KillSwitches"].urlUtilityRefactor.isActivated()) {
            var _protocolRegExp = /^http:\/\//i;
            return _protocolRegExp.test(embedCode);
        }
        else {
            var resourcePath = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_2__["SPResourcePath"](embedCode);
            return UrlUtility._getProtocolRegExp.test(resourcePath.authority);
        }
    };
    /**
     * @returns the hostname from a URL input.
     */
    UrlUtility.getHostnameFromUrl = function (url) {
        if (_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["KillSwitches"].urlUtilityRefactor.isActivated()) {
            var hostname = '';
            if (url) {
                var regExpResult = /^\s*(http:\/\/|\/\/|https:\/\/)[^\/]+/i.exec(url);
                if (regExpResult && regExpResult.length) {
                    hostname = regExpResult[0].replace(/^\s*(http:\/\/|\/\/|https:\/\/)/i, '');
                }
            }
            return hostname;
        }
        else {
            var resourcePath = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_2__["SPResourcePath"](url);
            var authority = resourcePath.authority.trim();
            if (/^\/\//i.test(authority) ||
                UrlUtility._getProtocolRegExp.test(authority) ||
                UrlUtility._getSecureProtocolRegExp.test(authority)) {
                return resourcePath.domain;
            }
            return '';
        }
    };
    /**
     * Generate the absolute URL
     */
    UrlUtility.absolutizeUrl = function (url, noDecode) {
        if (noDecode === void 0) { noDecode = false; }
        var a = document.createElement('a');
        a.href = url;
        return noDecode ? a.href : decodeURIComponent(a.href);
    };
    /**
     * Generate the relative URL
     */
    UrlUtility.relativizeUrl = function (url) {
        var a = document.createElement('a');
        a.href = url;
        if (a.hostname !== location.hostname) {
            return a.href;
        }
        var rel = a.pathname + a.search + a.hash;
        // HACK: IE/Opera doesn't add the leading slash
        return rel.charAt(0) === '/' ? rel : '/' + rel;
    };
    /**
     *  Generate Anchor element for the given URL
     */
    UrlUtility.getUrlAnchorElement = function (str) {
        var anchorElement = document.createElement('a');
        anchorElement.href = str;
        return anchorElement;
    };
    /**
     * True if url is internal resource.
     */
    UrlUtility.isInternalResource = function (url, pageContext) {
        var tenantInfo = UrlUtility._getTenantInfoFromPageContext(pageContext);
        // Vanity urls are saved in different places with different format in page context
        // according to whether the tenant is multi-geo or not.
        // In multi-geo tenant, vanity urls is saved in AdditionalUrls in multiGeoInfo.
        // In non multi-geo tenant, vanity urls are saved in VanityUrls.
        try {
            if (tenantInfo.isMultiGeo && tenantInfo.multiGeoInfo) {
                return tenantInfo.multiGeoInfo.some(function (geoInfo) {
                    return (UrlUtility._isSameHost(url, geoInfo.PortalUrl) ||
                        UrlUtility._isSameHost(url, geoInfo.MySiteHostUrl) ||
                        UrlUtility._isSameHosts(url, geoInfo.AdditionalUrls));
                });
            }
            else {
                // Use vanity urls combined with current Geo info in non multiGeo tenant.
                var currentGeoDomains = UrlUtility._getMySiteAndPortalDomain();
                if (UrlUtility._isSameHosts(url, currentGeoDomains)) {
                    return true;
                }
                var urlHost = UrlUtility.getHostFromUrl(url);
                if (tenantInfo.singleTenant && tenantInfo.singleTenant.SingleTenant_AdditionalVanityUrls) {
                    var vanityHosts = tenantInfo.singleTenant.SingleTenant_AdditionalVanityUrls.split(';');
                    if (vanityHosts.indexOf(urlHost) !== -1) {
                        return true;
                    }
                }
                if (tenantInfo.singleTenant &&
                    UrlUtility._isInternalResourceOfSingleTenant(tenantInfo.singleTenant, urlHost)) {
                    return true;
                }
            }
        }
        catch (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logError(UrlUtility._logSource, error, 'UrlUtility.isInternalResource');
            return false;
        }
        return false;
    };
    /**
     * True if the url is a vanity url.
     */
    UrlUtility.isVanityUrl = function (url, pageContext) {
        var tenantInfo = UrlUtility._getTenantInfoFromPageContext(pageContext);
        try {
            if (tenantInfo.isMultiGeo && tenantInfo.multiGeoInfo) {
                for (var i = 0; i < tenantInfo.multiGeoInfo.length; i++) {
                    // Vanity domain hosts are stored in AdditionalUrls
                    if (UrlUtility._isSameHosts(url, tenantInfo.multiGeoInfo[i].AdditionalUrls)) {
                        return true;
                    }
                }
            }
            else {
                // Use vanity urls stored in vanityUrls in page context.
                if (tenantInfo.singleTenant && tenantInfo.singleTenant.SingleTenant_AdditionalVanityUrls) {
                    var vanityHosts = tenantInfo.singleTenant.SingleTenant_AdditionalVanityUrls.split(';');
                    var urlHost = UrlUtility.getHostFromUrl(url);
                    if (vanityHosts.indexOf(urlHost) !== -1) {
                        return true;
                    }
                }
            }
        }
        catch (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logError(UrlUtility._logSource, error, 'UrlUtility.isVanityUrl');
            return false;
        }
        return false;
    };
    /**
     * Portal url of the geo location which contains the vanity resource.
     */
    UrlUtility.getPortalUrlOfVanityResource = function (vanityUrl, pageContext) {
        var tenantInfo = UrlUtility._getTenantInfoFromPageContext(pageContext);
        try {
            if (tenantInfo.isMultiGeo && tenantInfo.multiGeoInfo) {
                for (var i = 0; i < tenantInfo.multiGeoInfo.length; i++) {
                    // Vanity domain hosts are stored in AdditionalUrls
                    if (UrlUtility._isSameHosts(vanityUrl, tenantInfo.multiGeoInfo[i].AdditionalUrls)) {
                        return tenantInfo.multiGeoInfo[i].PortalUrl;
                    }
                }
            }
            else {
                // Use vanity urls stored in vanityUrls in page context.
                if (tenantInfo.singleTenant && tenantInfo.singleTenant.SingleTenant_AdditionalVanityUrls) {
                    var vanityHosts = tenantInfo.singleTenant.SingleTenant_AdditionalVanityUrls.split(';');
                    if (vanityHosts.indexOf(UrlUtility.getHostFromUrl(vanityUrl)) !== -1) {
                        // Urls in singleTenant is only host name like 'microsoft.sharepoint.com'.
                        return window.location.protocol + "//" + tenantInfo.singleTenant.SingleTenant_PortalUrl;
                    }
                }
            }
        }
        catch (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logError(UrlUtility._logSource, error, 'UrlUtility.getPortalUrlOfVanityResource');
        }
    };
    UrlUtility.getHostFromUrl = function (url) {
        return new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__["Uri"]((url || '').trim()).getHost().toLowerCase();
    };
    /**
     * Get mysite and portal url of an internal url.
     * If the url is not internal, return [undefined, undefined]
     */
    UrlUtility.getMySiteAndPortalUrlOfInternalResource = function (internalUrl, pageContext) {
        var tenantInfo = UrlUtility._getTenantInfoFromPageContext(pageContext);
        // Vanity urls are saved in different places with different format in page context
        // according to whether the tenant is multi-geo or not.
        // In multi-geo tenant, vanity urls is saved in AdditionalUrls in multiGeoInfo.
        // In non multi-geo tenant, vanity urls are saved in VanityUrls.
        try {
            if (tenantInfo.isMultiGeo && tenantInfo.multiGeoInfo) {
                for (var i = 0; i < tenantInfo.multiGeoInfo.length; i++) {
                    if (UrlUtility._isSameHost(internalUrl, tenantInfo.multiGeoInfo[i].PortalUrl) ||
                        UrlUtility._isSameHost(internalUrl, tenantInfo.multiGeoInfo[i].MySiteHostUrl) ||
                        UrlUtility._isSameHosts(internalUrl, tenantInfo.multiGeoInfo[i].AdditionalUrls)) {
                        return [tenantInfo.multiGeoInfo[i].MySiteHostUrl, tenantInfo.multiGeoInfo[i].PortalUrl];
                    }
                }
            }
            else {
                // Use vanity urls combined with current Geo info in non multiGeo tenant.
                var currentGeoDomains = UrlUtility._getMySiteAndPortalDomain();
                if (UrlUtility._isSameHosts(internalUrl, currentGeoDomains)) {
                    return currentGeoDomains;
                }
                var urlHost = UrlUtility.getHostFromUrl(internalUrl);
                if (tenantInfo.singleTenant && tenantInfo.singleTenant.SingleTenant_AdditionalVanityUrls) {
                    var vanityHosts = tenantInfo.singleTenant.SingleTenant_AdditionalVanityUrls.split(';');
                    if (vanityHosts.indexOf(urlHost) !== -1) {
                        return [
                            window.location.protocol + "//" + tenantInfo.singleTenant.SingleTenant_OneDriveUrl,
                            window.location.protocol + "//" + tenantInfo.singleTenant.SingleTenant_PortalUrl
                        ];
                    }
                }
                if (tenantInfo.singleTenant &&
                    UrlUtility._isInternalResourceOfSingleTenant(tenantInfo.singleTenant, urlHost)) {
                    return [
                        window.location.protocol + "//" + tenantInfo.singleTenant.SingleTenant_OneDriveUrl,
                        window.location.protocol + "//" + tenantInfo.singleTenant.SingleTenant_PortalUrl
                    ];
                }
            }
        }
        catch (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logError(UrlUtility._logSource, error, 'UrlUtility.isInternalResource');
            return [undefined, undefined];
        }
        return [undefined, undefined];
    };
    UrlUtility._isInternalResourceOfSingleTenant = function (singleTenant, urlHost) {
        return ((singleTenant.SingleTenant_OneDriveUrl && singleTenant.SingleTenant_OneDriveUrl === urlHost) ||
            (singleTenant.SingleTenant_PortalUrl && singleTenant.SingleTenant_PortalUrl === urlHost) ||
            (singleTenant.SingleTenant_TeamSitesUrl && singleTenant.SingleTenant_TeamSitesUrl === urlHost));
    };
    UrlUtility._isSameHost = function (url, targetUrl) {
        return UrlUtility.getHostFromUrl(url) === UrlUtility.getHostFromUrl(targetUrl);
    };
    UrlUtility._isSameHosts = function (url, targetUrls) {
        return targetUrls && targetUrls.some(function (targetUrl) { return UrlUtility._isSameHost(url, targetUrl); });
    };
    UrlUtility._getTenantInfoFromPageContext = function (pageContext) {
        return {
            isMultiGeo: pageContext.legacyPageContext.isMultiGeoTenant,
            multiGeoInfo: pageContext.legacyPageContext.multiGeoInfo,
            singleTenant: pageContext.legacyPageContext.vanityUrls
        };
    };
    UrlUtility._getMySiteAndPortalDomain = function () {
        var mySiteSuffix = '-my';
        var currentDomain = window.location.protocol + "//" + window.location.hostname;
        var tenantName = window.location.hostname.substr(0, window.location.hostname.indexOf('.'));
        if (tenantName.indexOf(mySiteSuffix, tenantName.length - mySiteSuffix.length) === -1) {
            var mySiteHostDomain = currentDomain
                .toString()
                .replace(tenantName, tenantName + mySiteSuffix);
            return [mySiteHostDomain, currentDomain];
        }
        else {
            var portalDomain = currentDomain
                .toString()
                .replace(tenantName, tenantName.substring(0, tenantName.length - mySiteSuffix.length));
            return [currentDomain, portalDomain];
        }
    };
    UrlUtility._youtubeUrl = 'www.youtube.com';
    UrlUtility._youtuUrl = 'youtu.be';
    UrlUtility._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_LogSource"].create('UrlUtility');
    return UrlUtility;
}());



/***/ })

/******/ })});;
//# sourceMappingURL=sp-component-utilities_[locale].js.map