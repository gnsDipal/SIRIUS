(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["debugManifests"] = factory();
	else
		root["debugManifests"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// Set the webpack public path
/******/ 	(function () {
/******/ 	  var scripts = document.getElementsByTagName('script');
/******/ 	  var regex = /manifests\.js/i;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManifests", function() { return getManifests; });
var MANIFESTS_ARRAY = [
  {
    "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
    "alias": "SPLoadThemedStyles",
    "componentType": "Library",
    "version": "0.1.2",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-load-themed-styles",
      "scriptResources": {
        "sp-load-themed-styles": {
          "type": "path",
          "path": "sp-load-themed-styles_none.js"
        }
      }
    }
  },
  {
    "id": "17ce0976-e69a-4355-be84-89b69a74717d",
    "alias": "FabricStyling",
    "componentType": "Library",
    "version": "0.1.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "uifabric-styling-bundle",
      "scriptResources": {
        "uifabric-styling-bundle": {
          "type": "path",
          "path": "uifabric-styling-bundle_none.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        }
      }
    }
  },
  {
    "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
    "alias": "OfficeUIFabricReact",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "office-ui-fabric-react-bundle",
      "scriptResources": {
        "office-ui-fabric-react-bundle": {
          "type": "path",
          "path": "office-ui-fabric-react-bundle_none.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "react-dom": {
          "type": "component",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "version": "16.9.0"
        },
        "@ms/uifabric-styling-bundle": {
          "type": "component",
          "id": "17ce0976-e69a-4355-be84-89b69a74717d",
          "version": "0.1.0"
        }
      }
    }
  },
  {
    "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
    "alias": "SPLodashSubset",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-lodash-subset",
      "scriptResources": {
        "sp-lodash-subset": {
          "type": "path",
          "path": "sp-lodash-subset_f27338a6e8aa6a7ceda8.js"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "2e09fb9b-13bb-48f2-859f-97d6fff71176",
    "alias": "OdspCoreBundle",
    "componentType": "Library",
    "version": "1.1.13",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "odsp-core-bundle",
      "scriptResources": {
        "odsp-core-bundle": {
          "type": "path",
          "path": "odsp-core-bundle_none.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        }
      }
    }
  },
  {
    "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
    "alias": "SPCoreLibrary",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-core-library",
      "scriptResources": {
        "sp-core-library": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-core-library_default.js",
            "en-US": "sp-core-library_en-us.js",
            "qps-ploca": "sp-core-library_qps-ploca.js",
            "qps-ploc": "sp-core-library_qps-ploc.js",
            "en-GB": "sp-core-library_en-us.js",
            "en-NZ": "sp-core-library_en-us.js",
            "en-IE": "sp-core-library_en-us.js",
            "en-AU": "sp-core-library_en-us.js",
            "bn": "sp-core-library_en-us.js",
            "chr": "sp-core-library_en-us.js",
            "dv": "sp-core-library_en-us.js",
            "div": "sp-core-library_en-us.js",
            "en": "sp-core-library_en-us.js",
            "fil": "sp-core-library_en-us.js",
            "haw": "sp-core-library_en-us.js",
            "iu": "sp-core-library_en-us.js",
            "lo": "sp-core-library_en-us.js",
            "moh": "sp-core-library_en-us.js",
            "sq": "sp-core-library_en-us.js",
            "am": "sp-core-library_en-us.js",
            "hy": "sp-core-library_en-us.js",
            "mk": "sp-core-library_en-us.js",
            "bs": "sp-core-library_en-us.js",
            "my": "sp-core-library_en-us.js",
            "dz": "sp-core-library_en-us.js",
            "en-CY": "sp-core-library_en-us.js",
            "en-EG": "sp-core-library_en-us.js",
            "en-IL": "sp-core-library_en-us.js",
            "en-IS": "sp-core-library_en-us.js",
            "en-JO": "sp-core-library_en-us.js",
            "en-KE": "sp-core-library_en-us.js",
            "en-KW": "sp-core-library_en-us.js",
            "en-MK": "sp-core-library_en-us.js",
            "en-MT": "sp-core-library_en-us.js",
            "en-PK": "sp-core-library_en-us.js",
            "en-QA": "sp-core-library_en-us.js",
            "en-SA": "sp-core-library_en-us.js",
            "en-LK": "sp-core-library_en-us.js",
            "en-AE": "sp-core-library_en-us.js",
            "en-VN": "sp-core-library_en-us.js",
            "is": "sp-core-library_en-us.js",
            "km": "sp-core-library_en-us.js",
            "kh": "sp-core-library_en-us.js",
            "mt": "sp-core-library_en-us.js",
            "fa": "sp-core-library_en-us.js",
            "gd": "sp-core-library_en-us.js",
            "sr-Cyrl-BA": "sp-core-library_en-us.js",
            "sr-Latn-BA": "sp-core-library_en-us.js",
            "sd": "sp-core-library_en-us.js",
            "si": "sp-core-library_en-us.js",
            "so": "sp-core-library_en-us.js",
            "ti-ET": "sp-core-library_en-us.js",
            "uz": "sp-core-library_en-us.js",
            "en-SG": "sp-core-library_en-us.js",
            "en-HK": "sp-core-library_en-us.js",
            "en-MY": "sp-core-library_en-us.js",
            "en-PH": "sp-core-library_en-us.js",
            "en-TT": "sp-core-library_en-us.js",
            "en-AZ": "sp-core-library_en-us.js",
            "en-BH": "sp-core-library_en-us.js",
            "en-BN": "sp-core-library_en-us.js",
            "en-ID": "sp-core-library_en-us.js",
            "mi": "sp-core-library_en-us.js"
          },
          "defaultPath": "sp-core-library_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/odsp-core-bundle": {
          "type": "component",
          "id": "2e09fb9b-13bb-48f2-859f-97d6fff71176",
          "version": "1.1.13"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
    "alias": "SPDiagnostics",
    "componentType": "Library",
    "version": "1.12.1",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-diagnostics",
      "scriptResources": {
        "sp-diagnostics": {
          "type": "path",
          "path": "sp-diagnostics_none.js"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "id": "7c9eec52-5087-48ef-929d-1ce66304c041",
    "alias": "SPTaskLib",
    "componentType": "Library",
    "version": "0.0.4",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-tab-tasklib",
      "scriptResources": {
        "sp-tab-tasklib": {
          "type": "path",
          "path": "sp-tab-tasklib.js"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "e40f8203-b39d-425a-a957-714852e33b79",
    "alias": "SPDynamicData",
    "componentType": "Library",
    "version": "1.12.1",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-dynamic-data",
      "scriptResources": {
        "sp-dynamic-data": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-dynamic-data_default.js",
            "en-US": "sp-dynamic-data_en-us.js",
            "qps-ploca": "sp-dynamic-data_qps-ploca.js",
            "qps-ploc": "sp-dynamic-data_qps-ploc.js",
            "en-GB": "sp-dynamic-data_en-us.js",
            "en-NZ": "sp-dynamic-data_en-us.js",
            "en-IE": "sp-dynamic-data_en-us.js",
            "en-AU": "sp-dynamic-data_en-us.js",
            "bn": "sp-dynamic-data_en-us.js",
            "chr": "sp-dynamic-data_en-us.js",
            "dv": "sp-dynamic-data_en-us.js",
            "div": "sp-dynamic-data_en-us.js",
            "en": "sp-dynamic-data_en-us.js",
            "fil": "sp-dynamic-data_en-us.js",
            "haw": "sp-dynamic-data_en-us.js",
            "iu": "sp-dynamic-data_en-us.js",
            "lo": "sp-dynamic-data_en-us.js",
            "moh": "sp-dynamic-data_en-us.js",
            "sq": "sp-dynamic-data_en-us.js",
            "am": "sp-dynamic-data_en-us.js",
            "hy": "sp-dynamic-data_en-us.js",
            "mk": "sp-dynamic-data_en-us.js",
            "bs": "sp-dynamic-data_en-us.js",
            "my": "sp-dynamic-data_en-us.js",
            "dz": "sp-dynamic-data_en-us.js",
            "en-CY": "sp-dynamic-data_en-us.js",
            "en-EG": "sp-dynamic-data_en-us.js",
            "en-IL": "sp-dynamic-data_en-us.js",
            "en-IS": "sp-dynamic-data_en-us.js",
            "en-JO": "sp-dynamic-data_en-us.js",
            "en-KE": "sp-dynamic-data_en-us.js",
            "en-KW": "sp-dynamic-data_en-us.js",
            "en-MK": "sp-dynamic-data_en-us.js",
            "en-MT": "sp-dynamic-data_en-us.js",
            "en-PK": "sp-dynamic-data_en-us.js",
            "en-QA": "sp-dynamic-data_en-us.js",
            "en-SA": "sp-dynamic-data_en-us.js",
            "en-LK": "sp-dynamic-data_en-us.js",
            "en-AE": "sp-dynamic-data_en-us.js",
            "en-VN": "sp-dynamic-data_en-us.js",
            "is": "sp-dynamic-data_en-us.js",
            "km": "sp-dynamic-data_en-us.js",
            "kh": "sp-dynamic-data_en-us.js",
            "mt": "sp-dynamic-data_en-us.js",
            "fa": "sp-dynamic-data_en-us.js",
            "gd": "sp-dynamic-data_en-us.js",
            "sr-Cyrl-BA": "sp-dynamic-data_en-us.js",
            "sr-Latn-BA": "sp-dynamic-data_en-us.js",
            "sd": "sp-dynamic-data_en-us.js",
            "si": "sp-dynamic-data_en-us.js",
            "so": "sp-dynamic-data_en-us.js",
            "ti-ET": "sp-dynamic-data_en-us.js",
            "uz": "sp-dynamic-data_en-us.js",
            "en-SG": "sp-dynamic-data_en-us.js",
            "en-HK": "sp-dynamic-data_en-us.js",
            "en-MY": "sp-dynamic-data_en-us.js",
            "en-PH": "sp-dynamic-data_en-us.js",
            "en-TT": "sp-dynamic-data_en-us.js",
            "en-AZ": "sp-dynamic-data_en-us.js",
            "en-BH": "sp-dynamic-data_en-us.js",
            "en-BN": "sp-dynamic-data_en-us.js",
            "en-ID": "sp-dynamic-data_en-us.js",
            "mi": "sp-dynamic-data_en-us.js"
          },
          "defaultPath": "sp-dynamic-data_default.js"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "id": "1e384972-6346-49b4-93c7-b2e6763938e6",
    "alias": "sp-polyfills",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-polyfills",
      "scriptResources": {
        "sp-polyfills": {
          "type": "path",
          "path": "sp-polyfills_none.js"
        }
      }
    }
  },
  {
    "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
    "alias": "SPHttp",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "preloadComponents": [],
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-http",
      "scriptResources": {
        "sp-http": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-http_default.js",
            "en-US": "sp-http_en-us.js",
            "qps-ploca": "sp-http_qps-ploca.js",
            "qps-ploc": "sp-http_qps-ploc.js",
            "en-GB": "sp-http_en-us.js",
            "en-NZ": "sp-http_en-us.js",
            "en-IE": "sp-http_en-us.js",
            "en-AU": "sp-http_en-us.js",
            "bn": "sp-http_en-us.js",
            "chr": "sp-http_en-us.js",
            "dv": "sp-http_en-us.js",
            "div": "sp-http_en-us.js",
            "en": "sp-http_en-us.js",
            "fil": "sp-http_en-us.js",
            "haw": "sp-http_en-us.js",
            "iu": "sp-http_en-us.js",
            "lo": "sp-http_en-us.js",
            "moh": "sp-http_en-us.js",
            "sq": "sp-http_en-us.js",
            "am": "sp-http_en-us.js",
            "hy": "sp-http_en-us.js",
            "mk": "sp-http_en-us.js",
            "bs": "sp-http_en-us.js",
            "my": "sp-http_en-us.js",
            "dz": "sp-http_en-us.js",
            "en-CY": "sp-http_en-us.js",
            "en-EG": "sp-http_en-us.js",
            "en-IL": "sp-http_en-us.js",
            "en-IS": "sp-http_en-us.js",
            "en-JO": "sp-http_en-us.js",
            "en-KE": "sp-http_en-us.js",
            "en-KW": "sp-http_en-us.js",
            "en-MK": "sp-http_en-us.js",
            "en-MT": "sp-http_en-us.js",
            "en-PK": "sp-http_en-us.js",
            "en-QA": "sp-http_en-us.js",
            "en-SA": "sp-http_en-us.js",
            "en-LK": "sp-http_en-us.js",
            "en-AE": "sp-http_en-us.js",
            "en-VN": "sp-http_en-us.js",
            "is": "sp-http_en-us.js",
            "km": "sp-http_en-us.js",
            "kh": "sp-http_en-us.js",
            "mt": "sp-http_en-us.js",
            "fa": "sp-http_en-us.js",
            "gd": "sp-http_en-us.js",
            "sr-Cyrl-BA": "sp-http_en-us.js",
            "sr-Latn-BA": "sp-http_en-us.js",
            "sd": "sp-http_en-us.js",
            "si": "sp-http_en-us.js",
            "so": "sp-http_en-us.js",
            "ti-ET": "sp-http_en-us.js",
            "uz": "sp-http_en-us.js",
            "en-SG": "sp-http_en-us.js",
            "en-HK": "sp-http_en-us.js",
            "en-MY": "sp-http_en-us.js",
            "en-PH": "sp-http_en-us.js",
            "en-TT": "sp-http_en-us.js",
            "en-AZ": "sp-http_en-us.js",
            "en-BH": "sp-http_en-us.js",
            "en-BN": "sp-http_en-us.js",
            "en-ID": "sp-http_en-us.js",
            "mi": "sp-http_en-us.js"
          },
          "defaultPath": "sp-http_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
    "alias": "SPPageContext",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-page-context",
      "scriptResources": {
        "sp-page-context": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-page-context_default.js",
            "en-US": "sp-page-context_en-us.js",
            "qps-ploca": "sp-page-context_qps-ploca.js",
            "qps-ploc": "sp-page-context_qps-ploc.js",
            "en-GB": "sp-page-context_en-us.js",
            "en-NZ": "sp-page-context_en-us.js",
            "en-IE": "sp-page-context_en-us.js",
            "en-AU": "sp-page-context_en-us.js",
            "bn": "sp-page-context_en-us.js",
            "chr": "sp-page-context_en-us.js",
            "dv": "sp-page-context_en-us.js",
            "div": "sp-page-context_en-us.js",
            "en": "sp-page-context_en-us.js",
            "fil": "sp-page-context_en-us.js",
            "haw": "sp-page-context_en-us.js",
            "iu": "sp-page-context_en-us.js",
            "lo": "sp-page-context_en-us.js",
            "moh": "sp-page-context_en-us.js",
            "sq": "sp-page-context_en-us.js",
            "am": "sp-page-context_en-us.js",
            "hy": "sp-page-context_en-us.js",
            "mk": "sp-page-context_en-us.js",
            "bs": "sp-page-context_en-us.js",
            "my": "sp-page-context_en-us.js",
            "dz": "sp-page-context_en-us.js",
            "en-CY": "sp-page-context_en-us.js",
            "en-EG": "sp-page-context_en-us.js",
            "en-IL": "sp-page-context_en-us.js",
            "en-IS": "sp-page-context_en-us.js",
            "en-JO": "sp-page-context_en-us.js",
            "en-KE": "sp-page-context_en-us.js",
            "en-KW": "sp-page-context_en-us.js",
            "en-MK": "sp-page-context_en-us.js",
            "en-MT": "sp-page-context_en-us.js",
            "en-PK": "sp-page-context_en-us.js",
            "en-QA": "sp-page-context_en-us.js",
            "en-SA": "sp-page-context_en-us.js",
            "en-LK": "sp-page-context_en-us.js",
            "en-AE": "sp-page-context_en-us.js",
            "en-VN": "sp-page-context_en-us.js",
            "is": "sp-page-context_en-us.js",
            "km": "sp-page-context_en-us.js",
            "kh": "sp-page-context_en-us.js",
            "mt": "sp-page-context_en-us.js",
            "fa": "sp-page-context_en-us.js",
            "gd": "sp-page-context_en-us.js",
            "sr-Cyrl-BA": "sp-page-context_en-us.js",
            "sr-Latn-BA": "sp-page-context_en-us.js",
            "sd": "sp-page-context_en-us.js",
            "si": "sp-page-context_en-us.js",
            "so": "sp-page-context_en-us.js",
            "ti-ET": "sp-page-context_en-us.js",
            "uz": "sp-page-context_en-us.js",
            "en-SG": "sp-page-context_en-us.js",
            "en-HK": "sp-page-context_en-us.js",
            "en-MY": "sp-page-context_en-us.js",
            "en-PH": "sp-page-context_en-us.js",
            "en-TT": "sp-page-context_en-us.js",
            "en-AZ": "sp-page-context_en-us.js",
            "en-BH": "sp-page-context_en-us.js",
            "en-BN": "sp-page-context_en-us.js",
            "en-ID": "sp-page-context_en-us.js",
            "mi": "sp-page-context_en-us.js"
          },
          "defaultPath": "sp-page-context_default.js"
        },
        "@microsoft/sp-dynamic-data": {
          "type": "component",
          "id": "e40f8203-b39d-425a-a957-714852e33b79",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
    "alias": "React",
    "componentType": "Library",
    "version": "16.9.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "react-16-bundle",
      "scriptResources": {
        "react-16-bundle": {
          "type": "path",
          "path": "react-16-bundle_none.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        }
      }
    }
  },
  {
    "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
    "alias": "ReactDOM",
    "componentType": "Library",
    "version": "16.9.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "react-dom-16-bundle",
      "scriptResources": {
        "react-dom-16-bundle": {
          "type": "path",
          "path": "react-dom-16-bundle_none.js"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        }
      }
    }
  },
  {
    "id": "d0619256-3350-4eb2-95df-31fbc25c4451",
    "alias": "ReactDomProfiling",
    "componentType": "Library",
    "version": "16.9.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "react-dom-16-profiling-bundle",
      "scriptResources": {
        "react-dom-16-profiling-bundle": {
          "type": "path",
          "path": "react-dom-16-profiling-bundle_none.js"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        }
      }
    }
  },
  {
    "id": "467dc675-7cc5-4709-8aac-78e3b71bd2f6",
    "alias": "SPComponentBase",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-component-base",
      "scriptResources": {
        "sp-component-base": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-component-base_default.js",
            "en-US": "sp-component-base_en-us.js",
            "qps-ploca": "sp-component-base_qps-ploca.js",
            "qps-ploc": "sp-component-base_qps-ploc.js",
            "en-GB": "sp-component-base_en-us.js",
            "en-NZ": "sp-component-base_en-us.js",
            "en-IE": "sp-component-base_en-us.js",
            "en-AU": "sp-component-base_en-us.js",
            "bn": "sp-component-base_en-us.js",
            "chr": "sp-component-base_en-us.js",
            "dv": "sp-component-base_en-us.js",
            "div": "sp-component-base_en-us.js",
            "en": "sp-component-base_en-us.js",
            "fil": "sp-component-base_en-us.js",
            "haw": "sp-component-base_en-us.js",
            "iu": "sp-component-base_en-us.js",
            "lo": "sp-component-base_en-us.js",
            "moh": "sp-component-base_en-us.js",
            "sq": "sp-component-base_en-us.js",
            "am": "sp-component-base_en-us.js",
            "hy": "sp-component-base_en-us.js",
            "mk": "sp-component-base_en-us.js",
            "bs": "sp-component-base_en-us.js",
            "my": "sp-component-base_en-us.js",
            "dz": "sp-component-base_en-us.js",
            "en-CY": "sp-component-base_en-us.js",
            "en-EG": "sp-component-base_en-us.js",
            "en-IL": "sp-component-base_en-us.js",
            "en-IS": "sp-component-base_en-us.js",
            "en-JO": "sp-component-base_en-us.js",
            "en-KE": "sp-component-base_en-us.js",
            "en-KW": "sp-component-base_en-us.js",
            "en-MK": "sp-component-base_en-us.js",
            "en-MT": "sp-component-base_en-us.js",
            "en-PK": "sp-component-base_en-us.js",
            "en-QA": "sp-component-base_en-us.js",
            "en-SA": "sp-component-base_en-us.js",
            "en-LK": "sp-component-base_en-us.js",
            "en-AE": "sp-component-base_en-us.js",
            "en-VN": "sp-component-base_en-us.js",
            "is": "sp-component-base_en-us.js",
            "km": "sp-component-base_en-us.js",
            "kh": "sp-component-base_en-us.js",
            "mt": "sp-component-base_en-us.js",
            "fa": "sp-component-base_en-us.js",
            "gd": "sp-component-base_en-us.js",
            "sr-Cyrl-BA": "sp-component-base_en-us.js",
            "sr-Latn-BA": "sp-component-base_en-us.js",
            "sd": "sp-component-base_en-us.js",
            "si": "sp-component-base_en-us.js",
            "so": "sp-component-base_en-us.js",
            "ti-ET": "sp-component-base_en-us.js",
            "uz": "sp-component-base_en-us.js",
            "en-SG": "sp-component-base_en-us.js",
            "en-HK": "sp-component-base_en-us.js",
            "en-MY": "sp-component-base_en-us.js",
            "en-PH": "sp-component-base_en-us.js",
            "en-TT": "sp-component-base_en-us.js",
            "en-AZ": "sp-component-base_en-us.js",
            "en-BH": "sp-component-base_en-us.js",
            "en-BN": "sp-component-base_en-us.js",
            "en-ID": "sp-component-base_en-us.js",
            "mi": "sp-component-base_en-us.js"
          },
          "defaultPath": "sp-component-base_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@microsoft/sp-dynamic-data": {
          "type": "component",
          "id": "e40f8203-b39d-425a-a957-714852e33b79",
          "version": "1.12.1"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "id": "8217e442-8ed3-41fd-957d-b112e841286a",
    "alias": "SPTelemetry",
    "componentType": "Library",
    "version": "0.19.2",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-telemetry",
      "scriptResources": {
        "sp-telemetry": {
          "type": "path",
          "path": "sp-telemetry_none.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/odsp-core-bundle": {
          "type": "component",
          "id": "2e09fb9b-13bb-48f2-859f-97d6fff71176",
          "version": "1.1.13"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "a7f8537f-f742-423f-ad20-ed8feaaf0805",
    "alias": "SPFlightInspector",
    "componentType": "Library",
    "version": "0.1.0",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-flight-inspector",
      "scriptResources": {
        "sp-flight-inspector": {
          "type": "path",
          "path": "sp-flight-inspector_none.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "react-dom": {
          "type": "component",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "version": "16.9.0"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        }
      }
    }
  },
  {
    "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
    "alias": "tslib",
    "componentType": "Library",
    "version": "1.10.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "tslib-bundle",
      "scriptResources": {
        "tslib-bundle": {
          "type": "path",
          "path": "tslib-bundle_none.js"
        }
      }
    }
  },
  {
    "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
    "alias": "SPLoader",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-loader",
      "scriptResources": {
        "sp-loader": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-loader_default.js",
            "en-US": "sp-loader_en-us.js",
            "qps-ploca": "sp-loader_qps-ploca.js",
            "qps-ploc": "sp-loader_qps-ploc.js",
            "en-GB": "sp-loader_en-us.js",
            "en-NZ": "sp-loader_en-us.js",
            "en-IE": "sp-loader_en-us.js",
            "en-AU": "sp-loader_en-us.js",
            "bn": "sp-loader_en-us.js",
            "chr": "sp-loader_en-us.js",
            "dv": "sp-loader_en-us.js",
            "div": "sp-loader_en-us.js",
            "en": "sp-loader_en-us.js",
            "fil": "sp-loader_en-us.js",
            "haw": "sp-loader_en-us.js",
            "iu": "sp-loader_en-us.js",
            "lo": "sp-loader_en-us.js",
            "moh": "sp-loader_en-us.js",
            "sq": "sp-loader_en-us.js",
            "am": "sp-loader_en-us.js",
            "hy": "sp-loader_en-us.js",
            "mk": "sp-loader_en-us.js",
            "bs": "sp-loader_en-us.js",
            "my": "sp-loader_en-us.js",
            "dz": "sp-loader_en-us.js",
            "en-CY": "sp-loader_en-us.js",
            "en-EG": "sp-loader_en-us.js",
            "en-IL": "sp-loader_en-us.js",
            "en-IS": "sp-loader_en-us.js",
            "en-JO": "sp-loader_en-us.js",
            "en-KE": "sp-loader_en-us.js",
            "en-KW": "sp-loader_en-us.js",
            "en-MK": "sp-loader_en-us.js",
            "en-MT": "sp-loader_en-us.js",
            "en-PK": "sp-loader_en-us.js",
            "en-QA": "sp-loader_en-us.js",
            "en-SA": "sp-loader_en-us.js",
            "en-LK": "sp-loader_en-us.js",
            "en-AE": "sp-loader_en-us.js",
            "en-VN": "sp-loader_en-us.js",
            "is": "sp-loader_en-us.js",
            "km": "sp-loader_en-us.js",
            "kh": "sp-loader_en-us.js",
            "mt": "sp-loader_en-us.js",
            "fa": "sp-loader_en-us.js",
            "gd": "sp-loader_en-us.js",
            "sr-Cyrl-BA": "sp-loader_en-us.js",
            "sr-Latn-BA": "sp-loader_en-us.js",
            "sd": "sp-loader_en-us.js",
            "si": "sp-loader_en-us.js",
            "so": "sp-loader_en-us.js",
            "ti-ET": "sp-loader_en-us.js",
            "uz": "sp-loader_en-us.js",
            "en-SG": "sp-loader_en-us.js",
            "en-HK": "sp-loader_en-us.js",
            "en-MY": "sp-loader_en-us.js",
            "en-PH": "sp-loader_en-us.js",
            "en-TT": "sp-loader_en-us.js",
            "en-AZ": "sp-loader_en-us.js",
            "en-BH": "sp-loader_en-us.js",
            "en-BN": "sp-loader_en-us.js",
            "en-ID": "sp-loader_en-us.js",
            "mi": "sp-loader_en-us.js"
          },
          "defaultPath": "sp-loader_default.js"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-dynamic-data": {
          "type": "component",
          "id": "e40f8203-b39d-425a-a957-714852e33b79",
          "version": "1.12.1"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "componentType": "Library",
    "id": "44bae1a2-d2eb-4e10-8c21-a1dbdce1036f",
    "alias": "sp-loader-assembly",
    "isInternal": true,
    "version": "1.0.0",
    "rootComponentId": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
    "requiresCustomScript": false,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-loader-assembly",
      "scriptResources": {
        "sp-loader-assembly": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-loader-assembly_default.js",
            "en-US": "sp-loader-assembly_en-us.js",
            "qps-ploca": "sp-loader-assembly_qps-ploca.js",
            "qps-ploc": "sp-loader-assembly_qps-ploc.js",
            "en-GB": "sp-loader-assembly_en-us.js",
            "en-NZ": "sp-loader-assembly_en-us.js",
            "en-IE": "sp-loader-assembly_en-us.js",
            "en-AU": "sp-loader-assembly_en-us.js",
            "bn": "sp-loader-assembly_en-us.js",
            "chr": "sp-loader-assembly_en-us.js",
            "dv": "sp-loader-assembly_en-us.js",
            "div": "sp-loader-assembly_en-us.js",
            "en": "sp-loader-assembly_en-us.js",
            "fil": "sp-loader-assembly_en-us.js",
            "haw": "sp-loader-assembly_en-us.js",
            "iu": "sp-loader-assembly_en-us.js",
            "lo": "sp-loader-assembly_en-us.js",
            "moh": "sp-loader-assembly_en-us.js",
            "sq": "sp-loader-assembly_en-us.js",
            "am": "sp-loader-assembly_en-us.js",
            "hy": "sp-loader-assembly_en-us.js",
            "mk": "sp-loader-assembly_en-us.js",
            "bs": "sp-loader-assembly_en-us.js",
            "my": "sp-loader-assembly_en-us.js",
            "dz": "sp-loader-assembly_en-us.js",
            "en-CY": "sp-loader-assembly_en-us.js",
            "en-EG": "sp-loader-assembly_en-us.js",
            "en-IL": "sp-loader-assembly_en-us.js",
            "en-IS": "sp-loader-assembly_en-us.js",
            "en-JO": "sp-loader-assembly_en-us.js",
            "en-KE": "sp-loader-assembly_en-us.js",
            "en-KW": "sp-loader-assembly_en-us.js",
            "en-MK": "sp-loader-assembly_en-us.js",
            "en-MT": "sp-loader-assembly_en-us.js",
            "en-PK": "sp-loader-assembly_en-us.js",
            "en-QA": "sp-loader-assembly_en-us.js",
            "en-SA": "sp-loader-assembly_en-us.js",
            "en-LK": "sp-loader-assembly_en-us.js",
            "en-AE": "sp-loader-assembly_en-us.js",
            "en-VN": "sp-loader-assembly_en-us.js",
            "is": "sp-loader-assembly_en-us.js",
            "km": "sp-loader-assembly_en-us.js",
            "kh": "sp-loader-assembly_en-us.js",
            "mt": "sp-loader-assembly_en-us.js",
            "fa": "sp-loader-assembly_en-us.js",
            "gd": "sp-loader-assembly_en-us.js",
            "sr-Cyrl-BA": "sp-loader-assembly_en-us.js",
            "sr-Latn-BA": "sp-loader-assembly_en-us.js",
            "sd": "sp-loader-assembly_en-us.js",
            "si": "sp-loader-assembly_en-us.js",
            "so": "sp-loader-assembly_en-us.js",
            "ti-ET": "sp-loader-assembly_en-us.js",
            "uz": "sp-loader-assembly_en-us.js",
            "en-SG": "sp-loader-assembly_en-us.js",
            "en-HK": "sp-loader-assembly_en-us.js",
            "en-MY": "sp-loader-assembly_en-us.js",
            "en-PH": "sp-loader-assembly_en-us.js",
            "en-TT": "sp-loader-assembly_en-us.js",
            "en-AZ": "sp-loader-assembly_en-us.js",
            "en-BH": "sp-loader-assembly_en-us.js",
            "en-BN": "sp-loader-assembly_en-us.js",
            "en-ID": "sp-loader-assembly_en-us.js",
            "mi": "sp-loader-assembly_en-us.js"
          },
          "defaultPath": "sp-loader-assembly_default.js"
        }
      }
    }
  },
  {
    "id": "0773bd53-a69e-4293-87e6-ba80ea4d614b",
    "alias": "SPExtensionBase",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-extension-base",
      "scriptResources": {
        "sp-extension-base": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-extension-base_default.js",
            "en-US": "sp-extension-base_en-us.js",
            "qps-ploca": "sp-extension-base_qps-ploca.js",
            "qps-ploc": "sp-extension-base_qps-ploc.js",
            "en-GB": "sp-extension-base_en-us.js",
            "en-NZ": "sp-extension-base_en-us.js",
            "en-IE": "sp-extension-base_en-us.js",
            "en-AU": "sp-extension-base_en-us.js",
            "bn": "sp-extension-base_en-us.js",
            "chr": "sp-extension-base_en-us.js",
            "dv": "sp-extension-base_en-us.js",
            "div": "sp-extension-base_en-us.js",
            "en": "sp-extension-base_en-us.js",
            "fil": "sp-extension-base_en-us.js",
            "haw": "sp-extension-base_en-us.js",
            "iu": "sp-extension-base_en-us.js",
            "lo": "sp-extension-base_en-us.js",
            "moh": "sp-extension-base_en-us.js",
            "sq": "sp-extension-base_en-us.js",
            "am": "sp-extension-base_en-us.js",
            "hy": "sp-extension-base_en-us.js",
            "mk": "sp-extension-base_en-us.js",
            "bs": "sp-extension-base_en-us.js",
            "my": "sp-extension-base_en-us.js",
            "dz": "sp-extension-base_en-us.js",
            "en-CY": "sp-extension-base_en-us.js",
            "en-EG": "sp-extension-base_en-us.js",
            "en-IL": "sp-extension-base_en-us.js",
            "en-IS": "sp-extension-base_en-us.js",
            "en-JO": "sp-extension-base_en-us.js",
            "en-KE": "sp-extension-base_en-us.js",
            "en-KW": "sp-extension-base_en-us.js",
            "en-MK": "sp-extension-base_en-us.js",
            "en-MT": "sp-extension-base_en-us.js",
            "en-PK": "sp-extension-base_en-us.js",
            "en-QA": "sp-extension-base_en-us.js",
            "en-SA": "sp-extension-base_en-us.js",
            "en-LK": "sp-extension-base_en-us.js",
            "en-AE": "sp-extension-base_en-us.js",
            "en-VN": "sp-extension-base_en-us.js",
            "is": "sp-extension-base_en-us.js",
            "km": "sp-extension-base_en-us.js",
            "kh": "sp-extension-base_en-us.js",
            "mt": "sp-extension-base_en-us.js",
            "fa": "sp-extension-base_en-us.js",
            "gd": "sp-extension-base_en-us.js",
            "sr-Cyrl-BA": "sp-extension-base_en-us.js",
            "sr-Latn-BA": "sp-extension-base_en-us.js",
            "sd": "sp-extension-base_en-us.js",
            "si": "sp-extension-base_en-us.js",
            "so": "sp-extension-base_en-us.js",
            "ti-ET": "sp-extension-base_en-us.js",
            "uz": "sp-extension-base_en-us.js",
            "en-SG": "sp-extension-base_en-us.js",
            "en-HK": "sp-extension-base_en-us.js",
            "en-MY": "sp-extension-base_en-us.js",
            "en-PH": "sp-extension-base_en-us.js",
            "en-TT": "sp-extension-base_en-us.js",
            "en-AZ": "sp-extension-base_en-us.js",
            "en-BH": "sp-extension-base_en-us.js",
            "en-BN": "sp-extension-base_en-us.js",
            "en-ID": "sp-extension-base_en-us.js",
            "mi": "sp-extension-base_en-us.js"
          },
          "defaultPath": "sp-extension-base_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-component-base": {
          "type": "component",
          "id": "467dc675-7cc5-4709-8aac-78e3b71bd2f6",
          "version": "1.12.1"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "4958ea79-6ff3-4480-8291-0932dd010869",
    "alias": "SPSearchExtensibility",
    "componentType": "Library",
    "version": "1.12.1",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-search-extensibility",
      "scriptResources": {
        "sp-search-extensibility": {
          "type": "path",
          "path": "sp-search-extensibility_none.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-extension-base": {
          "type": "component",
          "id": "0773bd53-a69e-4293-87e6-ba80ea4d614b",
          "version": "1.12.1"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "8502035a-8180-4e8d-9513-07d22f75b15c",
    "alias": "SPSearchCommon",
    "componentType": "Library",
    "version": "0.1.0",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-search-common",
      "scriptResources": {
        "sp-search-common": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-search-common_default.js",
            "en-US": "sp-search-common_en-us.js",
            "qps-ploca": "sp-search-common_qps-ploca.js",
            "qps-ploc": "sp-search-common_qps-ploc.js",
            "en-GB": "sp-search-common_en-us.js",
            "en-NZ": "sp-search-common_en-us.js",
            "en-IE": "sp-search-common_en-us.js",
            "en-AU": "sp-search-common_en-us.js",
            "bn": "sp-search-common_en-us.js",
            "chr": "sp-search-common_en-us.js",
            "dv": "sp-search-common_en-us.js",
            "div": "sp-search-common_en-us.js",
            "en": "sp-search-common_en-us.js",
            "fil": "sp-search-common_en-us.js",
            "haw": "sp-search-common_en-us.js",
            "iu": "sp-search-common_en-us.js",
            "lo": "sp-search-common_en-us.js",
            "moh": "sp-search-common_en-us.js",
            "sq": "sp-search-common_en-us.js",
            "am": "sp-search-common_en-us.js",
            "hy": "sp-search-common_en-us.js",
            "mk": "sp-search-common_en-us.js",
            "bs": "sp-search-common_en-us.js",
            "my": "sp-search-common_en-us.js",
            "dz": "sp-search-common_en-us.js",
            "en-CY": "sp-search-common_en-us.js",
            "en-EG": "sp-search-common_en-us.js",
            "en-IL": "sp-search-common_en-us.js",
            "en-IS": "sp-search-common_en-us.js",
            "en-JO": "sp-search-common_en-us.js",
            "en-KE": "sp-search-common_en-us.js",
            "en-KW": "sp-search-common_en-us.js",
            "en-MK": "sp-search-common_en-us.js",
            "en-MT": "sp-search-common_en-us.js",
            "en-PK": "sp-search-common_en-us.js",
            "en-QA": "sp-search-common_en-us.js",
            "en-SA": "sp-search-common_en-us.js",
            "en-LK": "sp-search-common_en-us.js",
            "en-AE": "sp-search-common_en-us.js",
            "en-VN": "sp-search-common_en-us.js",
            "is": "sp-search-common_en-us.js",
            "km": "sp-search-common_en-us.js",
            "kh": "sp-search-common_en-us.js",
            "mt": "sp-search-common_en-us.js",
            "fa": "sp-search-common_en-us.js",
            "gd": "sp-search-common_en-us.js",
            "sr-Cyrl-BA": "sp-search-common_en-us.js",
            "sr-Latn-BA": "sp-search-common_en-us.js",
            "sd": "sp-search-common_en-us.js",
            "si": "sp-search-common_en-us.js",
            "so": "sp-search-common_en-us.js",
            "ti-ET": "sp-search-common_en-us.js",
            "uz": "sp-search-common_en-us.js",
            "en-SG": "sp-search-common_en-us.js",
            "en-HK": "sp-search-common_en-us.js",
            "en-MY": "sp-search-common_en-us.js",
            "en-PH": "sp-search-common_en-us.js",
            "en-TT": "sp-search-common_en-us.js",
            "en-AZ": "sp-search-common_en-us.js",
            "en-BH": "sp-search-common_en-us.js",
            "en-BN": "sp-search-common_en-us.js",
            "en-ID": "sp-search-common_en-us.js",
            "mi": "sp-search-common_en-us.js"
          },
          "defaultPath": "sp-search-common_default.js"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "id": "f8a8ad94-4cf3-4a19-a76b-1cec9da00219",
    "alias": "SPSuiteNav",
    "componentType": "Library",
    "manifestVersion": 2,
    "version": "0.1.0",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-suite-nav",
      "scriptResources": {
        "sp-suite-nav": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-suite-nav_default.js",
            "en-US": "sp-suite-nav_en-us.js",
            "qps-ploca": "sp-suite-nav_qps-ploca.js",
            "qps-ploc": "sp-suite-nav_qps-ploc.js",
            "en-GB": "sp-suite-nav_en-us.js",
            "en-NZ": "sp-suite-nav_en-us.js",
            "en-IE": "sp-suite-nav_en-us.js",
            "en-AU": "sp-suite-nav_en-us.js",
            "bn": "sp-suite-nav_en-us.js",
            "chr": "sp-suite-nav_en-us.js",
            "dv": "sp-suite-nav_en-us.js",
            "div": "sp-suite-nav_en-us.js",
            "en": "sp-suite-nav_en-us.js",
            "fil": "sp-suite-nav_en-us.js",
            "haw": "sp-suite-nav_en-us.js",
            "iu": "sp-suite-nav_en-us.js",
            "lo": "sp-suite-nav_en-us.js",
            "moh": "sp-suite-nav_en-us.js",
            "sq": "sp-suite-nav_en-us.js",
            "am": "sp-suite-nav_en-us.js",
            "hy": "sp-suite-nav_en-us.js",
            "mk": "sp-suite-nav_en-us.js",
            "bs": "sp-suite-nav_en-us.js",
            "my": "sp-suite-nav_en-us.js",
            "dz": "sp-suite-nav_en-us.js",
            "en-CY": "sp-suite-nav_en-us.js",
            "en-EG": "sp-suite-nav_en-us.js",
            "en-IL": "sp-suite-nav_en-us.js",
            "en-IS": "sp-suite-nav_en-us.js",
            "en-JO": "sp-suite-nav_en-us.js",
            "en-KE": "sp-suite-nav_en-us.js",
            "en-KW": "sp-suite-nav_en-us.js",
            "en-MK": "sp-suite-nav_en-us.js",
            "en-MT": "sp-suite-nav_en-us.js",
            "en-PK": "sp-suite-nav_en-us.js",
            "en-QA": "sp-suite-nav_en-us.js",
            "en-SA": "sp-suite-nav_en-us.js",
            "en-LK": "sp-suite-nav_en-us.js",
            "en-AE": "sp-suite-nav_en-us.js",
            "en-VN": "sp-suite-nav_en-us.js",
            "is": "sp-suite-nav_en-us.js",
            "km": "sp-suite-nav_en-us.js",
            "kh": "sp-suite-nav_en-us.js",
            "mt": "sp-suite-nav_en-us.js",
            "fa": "sp-suite-nav_en-us.js",
            "gd": "sp-suite-nav_en-us.js",
            "sr-Cyrl-BA": "sp-suite-nav_en-us.js",
            "sr-Latn-BA": "sp-suite-nav_en-us.js",
            "sd": "sp-suite-nav_en-us.js",
            "si": "sp-suite-nav_en-us.js",
            "so": "sp-suite-nav_en-us.js",
            "ti-ET": "sp-suite-nav_en-us.js",
            "uz": "sp-suite-nav_en-us.js",
            "en-SG": "sp-suite-nav_en-us.js",
            "en-HK": "sp-suite-nav_en-us.js",
            "en-MY": "sp-suite-nav_en-us.js",
            "en-PH": "sp-suite-nav_en-us.js",
            "en-TT": "sp-suite-nav_en-us.js",
            "en-AZ": "sp-suite-nav_en-us.js",
            "en-BH": "sp-suite-nav_en-us.js",
            "en-BN": "sp-suite-nav_en-us.js",
            "en-ID": "sp-suite-nav_en-us.js",
            "mi": "sp-suite-nav_en-us.js"
          },
          "defaultPath": "sp-suite-nav_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@ms/sp-search-common": {
          "type": "component",
          "id": "8502035a-8180-4e8d-9513-07d22f75b15c",
          "version": "0.1.0"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@ms/odsp-core-bundle": {
          "type": "component",
          "id": "2e09fb9b-13bb-48f2-859f-97d6fff71176",
          "version": "1.1.13"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "componentType": "Library",
    "id": "05580011-8e5d-45cc-8488-220e459c5c67",
    "alias": "sp-default-assembly",
    "isInternal": true,
    "version": "1.0.0",
    "rootComponentId": "4df9bb86-ab0a-4aab-ab5f-48bf167048fb",
    "requiresCustomScript": false,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-default-assembly",
      "scriptResources": {
        "sp-default-assembly": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-default-assembly_default.js",
            "en-US": "sp-default-assembly_en-us.js",
            "qps-ploca": "sp-default-assembly_qps-ploca.js",
            "qps-ploc": "sp-default-assembly_qps-ploc.js",
            "en-GB": "sp-default-assembly_en-us.js",
            "en-NZ": "sp-default-assembly_en-us.js",
            "en-IE": "sp-default-assembly_en-us.js",
            "en-AU": "sp-default-assembly_en-us.js",
            "bn": "sp-default-assembly_en-us.js",
            "chr": "sp-default-assembly_en-us.js",
            "dv": "sp-default-assembly_en-us.js",
            "div": "sp-default-assembly_en-us.js",
            "en": "sp-default-assembly_en-us.js",
            "fil": "sp-default-assembly_en-us.js",
            "haw": "sp-default-assembly_en-us.js",
            "iu": "sp-default-assembly_en-us.js",
            "lo": "sp-default-assembly_en-us.js",
            "moh": "sp-default-assembly_en-us.js",
            "sq": "sp-default-assembly_en-us.js",
            "am": "sp-default-assembly_en-us.js",
            "hy": "sp-default-assembly_en-us.js",
            "mk": "sp-default-assembly_en-us.js",
            "bs": "sp-default-assembly_en-us.js",
            "my": "sp-default-assembly_en-us.js",
            "dz": "sp-default-assembly_en-us.js",
            "en-CY": "sp-default-assembly_en-us.js",
            "en-EG": "sp-default-assembly_en-us.js",
            "en-IL": "sp-default-assembly_en-us.js",
            "en-IS": "sp-default-assembly_en-us.js",
            "en-JO": "sp-default-assembly_en-us.js",
            "en-KE": "sp-default-assembly_en-us.js",
            "en-KW": "sp-default-assembly_en-us.js",
            "en-MK": "sp-default-assembly_en-us.js",
            "en-MT": "sp-default-assembly_en-us.js",
            "en-PK": "sp-default-assembly_en-us.js",
            "en-QA": "sp-default-assembly_en-us.js",
            "en-SA": "sp-default-assembly_en-us.js",
            "en-LK": "sp-default-assembly_en-us.js",
            "en-AE": "sp-default-assembly_en-us.js",
            "en-VN": "sp-default-assembly_en-us.js",
            "is": "sp-default-assembly_en-us.js",
            "km": "sp-default-assembly_en-us.js",
            "kh": "sp-default-assembly_en-us.js",
            "mt": "sp-default-assembly_en-us.js",
            "fa": "sp-default-assembly_en-us.js",
            "gd": "sp-default-assembly_en-us.js",
            "sr-Cyrl-BA": "sp-default-assembly_en-us.js",
            "sr-Latn-BA": "sp-default-assembly_en-us.js",
            "sd": "sp-default-assembly_en-us.js",
            "si": "sp-default-assembly_en-us.js",
            "so": "sp-default-assembly_en-us.js",
            "ti-ET": "sp-default-assembly_en-us.js",
            "uz": "sp-default-assembly_en-us.js",
            "en-SG": "sp-default-assembly_en-us.js",
            "en-HK": "sp-default-assembly_en-us.js",
            "en-MY": "sp-default-assembly_en-us.js",
            "en-PH": "sp-default-assembly_en-us.js",
            "en-TT": "sp-default-assembly_en-us.js",
            "en-AZ": "sp-default-assembly_en-us.js",
            "en-BH": "sp-default-assembly_en-us.js",
            "en-BN": "sp-default-assembly_en-us.js",
            "en-ID": "sp-default-assembly_en-us.js",
            "mi": "sp-default-assembly_en-us.js"
          },
          "defaultPath": "sp-default-assembly_default.js"
        }
      }
    }
  },
  {
    "id": "4df9bb86-ab0a-4aab-ab5f-48bf167048fb",
    "alias": "SPApplicationBase",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "preloadComponents": [
      "c0c518b8-701b-4f6f-956d-5782772bb731",
      "4958ea79-6ff3-4480-8291-0932dd010869"
    ],
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-application-base",
      "scriptResources": {
        "sp-application-base": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-application-base_default.js",
            "en-US": "sp-application-base_en-us.js",
            "qps-ploca": "sp-application-base_qps-ploca.js",
            "qps-ploc": "sp-application-base_qps-ploc.js",
            "en-GB": "sp-application-base_en-us.js",
            "en-NZ": "sp-application-base_en-us.js",
            "en-IE": "sp-application-base_en-us.js",
            "en-AU": "sp-application-base_en-us.js",
            "bn": "sp-application-base_en-us.js",
            "chr": "sp-application-base_en-us.js",
            "dv": "sp-application-base_en-us.js",
            "div": "sp-application-base_en-us.js",
            "en": "sp-application-base_en-us.js",
            "fil": "sp-application-base_en-us.js",
            "haw": "sp-application-base_en-us.js",
            "iu": "sp-application-base_en-us.js",
            "lo": "sp-application-base_en-us.js",
            "moh": "sp-application-base_en-us.js",
            "sq": "sp-application-base_en-us.js",
            "am": "sp-application-base_en-us.js",
            "hy": "sp-application-base_en-us.js",
            "mk": "sp-application-base_en-us.js",
            "bs": "sp-application-base_en-us.js",
            "my": "sp-application-base_en-us.js",
            "dz": "sp-application-base_en-us.js",
            "en-CY": "sp-application-base_en-us.js",
            "en-EG": "sp-application-base_en-us.js",
            "en-IL": "sp-application-base_en-us.js",
            "en-IS": "sp-application-base_en-us.js",
            "en-JO": "sp-application-base_en-us.js",
            "en-KE": "sp-application-base_en-us.js",
            "en-KW": "sp-application-base_en-us.js",
            "en-MK": "sp-application-base_en-us.js",
            "en-MT": "sp-application-base_en-us.js",
            "en-PK": "sp-application-base_en-us.js",
            "en-QA": "sp-application-base_en-us.js",
            "en-SA": "sp-application-base_en-us.js",
            "en-LK": "sp-application-base_en-us.js",
            "en-AE": "sp-application-base_en-us.js",
            "en-VN": "sp-application-base_en-us.js",
            "is": "sp-application-base_en-us.js",
            "km": "sp-application-base_en-us.js",
            "kh": "sp-application-base_en-us.js",
            "mt": "sp-application-base_en-us.js",
            "fa": "sp-application-base_en-us.js",
            "gd": "sp-application-base_en-us.js",
            "sr-Cyrl-BA": "sp-application-base_en-us.js",
            "sr-Latn-BA": "sp-application-base_en-us.js",
            "sd": "sp-application-base_en-us.js",
            "si": "sp-application-base_en-us.js",
            "so": "sp-application-base_en-us.js",
            "ti-ET": "sp-application-base_en-us.js",
            "uz": "sp-application-base_en-us.js",
            "en-SG": "sp-application-base_en-us.js",
            "en-HK": "sp-application-base_en-us.js",
            "en-MY": "sp-application-base_en-us.js",
            "en-PH": "sp-application-base_en-us.js",
            "en-TT": "sp-application-base_en-us.js",
            "en-AZ": "sp-application-base_en-us.js",
            "en-BH": "sp-application-base_en-us.js",
            "en-BN": "sp-application-base_en-us.js",
            "en-ID": "sp-application-base_en-us.js",
            "mi": "sp-application-base_en-us.js"
          },
          "defaultPath": "sp-application-base_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@ms/sp-suite-nav": {
          "type": "component",
          "id": "f8a8ad94-4cf3-4a19-a76b-1cec9da00219",
          "version": "0.1.0"
        },
        "@microsoft/sp-component-base": {
          "type": "component",
          "id": "467dc675-7cc5-4709-8aac-78e3b71bd2f6",
          "version": "1.12.1"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@ms/odsp-core-bundle": {
          "type": "component",
          "id": "2e09fb9b-13bb-48f2-859f-97d6fff71176",
          "version": "1.1.13"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "@microsoft/sp-extension-base": {
          "type": "component",
          "id": "0773bd53-a69e-4293-87e6-ba80ea4d614b",
          "version": "1.12.1"
        },
        "@ms/uifabric-styling-bundle": {
          "type": "component",
          "id": "17ce0976-e69a-4355-be84-89b69a74717d",
          "version": "0.1.0"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "id": "f9e737b7-f0df-4597-ba8c-3060f82380db",
    "alias": "SPPropertyPane",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-property-pane",
      "scriptResources": {
        "sp-property-pane": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-property-pane_default.js",
            "en-US": "sp-property-pane_en-us.js",
            "qps-ploca": "sp-property-pane_qps-ploca.js",
            "qps-ploc": "sp-property-pane_qps-ploc.js",
            "en-GB": "sp-property-pane_en-us.js",
            "en-NZ": "sp-property-pane_en-us.js",
            "en-IE": "sp-property-pane_en-us.js",
            "en-AU": "sp-property-pane_en-us.js",
            "bn": "sp-property-pane_en-us.js",
            "chr": "sp-property-pane_en-us.js",
            "dv": "sp-property-pane_en-us.js",
            "div": "sp-property-pane_en-us.js",
            "en": "sp-property-pane_en-us.js",
            "fil": "sp-property-pane_en-us.js",
            "haw": "sp-property-pane_en-us.js",
            "iu": "sp-property-pane_en-us.js",
            "lo": "sp-property-pane_en-us.js",
            "moh": "sp-property-pane_en-us.js",
            "sq": "sp-property-pane_en-us.js",
            "am": "sp-property-pane_en-us.js",
            "hy": "sp-property-pane_en-us.js",
            "mk": "sp-property-pane_en-us.js",
            "bs": "sp-property-pane_en-us.js",
            "my": "sp-property-pane_en-us.js",
            "dz": "sp-property-pane_en-us.js",
            "en-CY": "sp-property-pane_en-us.js",
            "en-EG": "sp-property-pane_en-us.js",
            "en-IL": "sp-property-pane_en-us.js",
            "en-IS": "sp-property-pane_en-us.js",
            "en-JO": "sp-property-pane_en-us.js",
            "en-KE": "sp-property-pane_en-us.js",
            "en-KW": "sp-property-pane_en-us.js",
            "en-MK": "sp-property-pane_en-us.js",
            "en-MT": "sp-property-pane_en-us.js",
            "en-PK": "sp-property-pane_en-us.js",
            "en-QA": "sp-property-pane_en-us.js",
            "en-SA": "sp-property-pane_en-us.js",
            "en-LK": "sp-property-pane_en-us.js",
            "en-AE": "sp-property-pane_en-us.js",
            "en-VN": "sp-property-pane_en-us.js",
            "is": "sp-property-pane_en-us.js",
            "km": "sp-property-pane_en-us.js",
            "kh": "sp-property-pane_en-us.js",
            "mt": "sp-property-pane_en-us.js",
            "fa": "sp-property-pane_en-us.js",
            "gd": "sp-property-pane_en-us.js",
            "sr-Cyrl-BA": "sp-property-pane_en-us.js",
            "sr-Latn-BA": "sp-property-pane_en-us.js",
            "sd": "sp-property-pane_en-us.js",
            "si": "sp-property-pane_en-us.js",
            "so": "sp-property-pane_en-us.js",
            "ti-ET": "sp-property-pane_en-us.js",
            "uz": "sp-property-pane_en-us.js",
            "en-SG": "sp-property-pane_en-us.js",
            "en-HK": "sp-property-pane_en-us.js",
            "en-MY": "sp-property-pane_en-us.js",
            "en-PH": "sp-property-pane_en-us.js",
            "en-TT": "sp-property-pane_en-us.js",
            "en-AZ": "sp-property-pane_en-us.js",
            "en-BH": "sp-property-pane_en-us.js",
            "en-BN": "sp-property-pane_en-us.js",
            "en-ID": "sp-property-pane_en-us.js",
            "mi": "sp-property-pane_en-us.js"
          },
          "defaultPath": "sp-property-pane_default.js"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "react-dom": {
          "type": "component",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "version": "16.9.0"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "id": "974a7777-0990-4136-8fa6-95d80114c2e0",
    "alias": "SPWebPartBase",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "preloadComponents": [
      "f9e737b7-f0df-4597-ba8c-3060f82380db"
    ],
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-webpart-base",
      "scriptResources": {
        "sp-webpart-base": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-webpart-base_default.js",
            "en-US": "sp-webpart-base_en-us.js",
            "qps-ploca": "sp-webpart-base_qps-ploca.js",
            "qps-ploc": "sp-webpart-base_qps-ploc.js",
            "en-GB": "sp-webpart-base_en-us.js",
            "en-NZ": "sp-webpart-base_en-us.js",
            "en-IE": "sp-webpart-base_en-us.js",
            "en-AU": "sp-webpart-base_en-us.js",
            "bn": "sp-webpart-base_en-us.js",
            "chr": "sp-webpart-base_en-us.js",
            "dv": "sp-webpart-base_en-us.js",
            "div": "sp-webpart-base_en-us.js",
            "en": "sp-webpart-base_en-us.js",
            "fil": "sp-webpart-base_en-us.js",
            "haw": "sp-webpart-base_en-us.js",
            "iu": "sp-webpart-base_en-us.js",
            "lo": "sp-webpart-base_en-us.js",
            "moh": "sp-webpart-base_en-us.js",
            "sq": "sp-webpart-base_en-us.js",
            "am": "sp-webpart-base_en-us.js",
            "hy": "sp-webpart-base_en-us.js",
            "mk": "sp-webpart-base_en-us.js",
            "bs": "sp-webpart-base_en-us.js",
            "my": "sp-webpart-base_en-us.js",
            "dz": "sp-webpart-base_en-us.js",
            "en-CY": "sp-webpart-base_en-us.js",
            "en-EG": "sp-webpart-base_en-us.js",
            "en-IL": "sp-webpart-base_en-us.js",
            "en-IS": "sp-webpart-base_en-us.js",
            "en-JO": "sp-webpart-base_en-us.js",
            "en-KE": "sp-webpart-base_en-us.js",
            "en-KW": "sp-webpart-base_en-us.js",
            "en-MK": "sp-webpart-base_en-us.js",
            "en-MT": "sp-webpart-base_en-us.js",
            "en-PK": "sp-webpart-base_en-us.js",
            "en-QA": "sp-webpart-base_en-us.js",
            "en-SA": "sp-webpart-base_en-us.js",
            "en-LK": "sp-webpart-base_en-us.js",
            "en-AE": "sp-webpart-base_en-us.js",
            "en-VN": "sp-webpart-base_en-us.js",
            "is": "sp-webpart-base_en-us.js",
            "km": "sp-webpart-base_en-us.js",
            "kh": "sp-webpart-base_en-us.js",
            "mt": "sp-webpart-base_en-us.js",
            "fa": "sp-webpart-base_en-us.js",
            "gd": "sp-webpart-base_en-us.js",
            "sr-Cyrl-BA": "sp-webpart-base_en-us.js",
            "sr-Latn-BA": "sp-webpart-base_en-us.js",
            "sd": "sp-webpart-base_en-us.js",
            "si": "sp-webpart-base_en-us.js",
            "so": "sp-webpart-base_en-us.js",
            "ti-ET": "sp-webpart-base_en-us.js",
            "uz": "sp-webpart-base_en-us.js",
            "en-SG": "sp-webpart-base_en-us.js",
            "en-HK": "sp-webpart-base_en-us.js",
            "en-MY": "sp-webpart-base_en-us.js",
            "en-PH": "sp-webpart-base_en-us.js",
            "en-TT": "sp-webpart-base_en-us.js",
            "en-AZ": "sp-webpart-base_en-us.js",
            "en-BH": "sp-webpart-base_en-us.js",
            "en-BN": "sp-webpart-base_en-us.js",
            "en-ID": "sp-webpart-base_en-us.js",
            "mi": "sp-webpart-base_en-us.js"
          },
          "defaultPath": "sp-webpart-base_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-component-base": {
          "type": "component",
          "id": "467dc675-7cc5-4709-8aac-78e3b71bd2f6",
          "version": "1.12.1"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "cc2cc925-b5be-41bb-880a-f0f8030c6aff",
    "alias": "OdspUtilitiesBundle",
    "componentType": "Library",
    "version": "5.3.140",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "odsp-utilities-bundle",
      "scriptResources": {
        "odsp-utilities-bundle": {
          "type": "localizedPath",
          "paths": {
            "default": "odsp-utilities-bundle_default.js",
            "en-US": "odsp-utilities-bundle_en-us.js",
            "qps-ploca": "odsp-utilities-bundle_qps-ploca.js",
            "qps-ploc": "odsp-utilities-bundle_qps-ploc.js",
            "en-GB": "odsp-utilities-bundle_en-us.js",
            "en-NZ": "odsp-utilities-bundle_en-us.js",
            "en-IE": "odsp-utilities-bundle_en-us.js",
            "en-AU": "odsp-utilities-bundle_en-us.js",
            "bn": "odsp-utilities-bundle_en-us.js",
            "chr": "odsp-utilities-bundle_en-us.js",
            "dv": "odsp-utilities-bundle_en-us.js",
            "div": "odsp-utilities-bundle_en-us.js",
            "en": "odsp-utilities-bundle_en-us.js",
            "fil": "odsp-utilities-bundle_en-us.js",
            "haw": "odsp-utilities-bundle_en-us.js",
            "iu": "odsp-utilities-bundle_en-us.js",
            "lo": "odsp-utilities-bundle_en-us.js",
            "moh": "odsp-utilities-bundle_en-us.js",
            "sq": "odsp-utilities-bundle_en-us.js",
            "am": "odsp-utilities-bundle_en-us.js",
            "hy": "odsp-utilities-bundle_en-us.js",
            "mk": "odsp-utilities-bundle_en-us.js",
            "bs": "odsp-utilities-bundle_en-us.js",
            "my": "odsp-utilities-bundle_en-us.js",
            "dz": "odsp-utilities-bundle_en-us.js",
            "en-CY": "odsp-utilities-bundle_en-us.js",
            "en-EG": "odsp-utilities-bundle_en-us.js",
            "en-IL": "odsp-utilities-bundle_en-us.js",
            "en-IS": "odsp-utilities-bundle_en-us.js",
            "en-JO": "odsp-utilities-bundle_en-us.js",
            "en-KE": "odsp-utilities-bundle_en-us.js",
            "en-KW": "odsp-utilities-bundle_en-us.js",
            "en-MK": "odsp-utilities-bundle_en-us.js",
            "en-MT": "odsp-utilities-bundle_en-us.js",
            "en-PK": "odsp-utilities-bundle_en-us.js",
            "en-QA": "odsp-utilities-bundle_en-us.js",
            "en-SA": "odsp-utilities-bundle_en-us.js",
            "en-LK": "odsp-utilities-bundle_en-us.js",
            "en-AE": "odsp-utilities-bundle_en-us.js",
            "en-VN": "odsp-utilities-bundle_en-us.js",
            "is": "odsp-utilities-bundle_en-us.js",
            "km": "odsp-utilities-bundle_en-us.js",
            "kh": "odsp-utilities-bundle_en-us.js",
            "mt": "odsp-utilities-bundle_en-us.js",
            "fa": "odsp-utilities-bundle_en-us.js",
            "gd": "odsp-utilities-bundle_en-us.js",
            "sr-Cyrl-BA": "odsp-utilities-bundle_en-us.js",
            "sr-Latn-BA": "odsp-utilities-bundle_en-us.js",
            "sd": "odsp-utilities-bundle_en-us.js",
            "si": "odsp-utilities-bundle_en-us.js",
            "so": "odsp-utilities-bundle_en-us.js",
            "ti-ET": "odsp-utilities-bundle_en-us.js",
            "uz": "odsp-utilities-bundle_en-us.js",
            "en-SG": "odsp-utilities-bundle_en-us.js",
            "en-HK": "odsp-utilities-bundle_en-us.js",
            "en-MY": "odsp-utilities-bundle_en-us.js",
            "en-PH": "odsp-utilities-bundle_en-us.js",
            "en-TT": "odsp-utilities-bundle_en-us.js",
            "en-AZ": "odsp-utilities-bundle_en-us.js",
            "en-BH": "odsp-utilities-bundle_en-us.js",
            "en-BN": "odsp-utilities-bundle_en-us.js",
            "en-ID": "odsp-utilities-bundle_en-us.js",
            "mi": "odsp-utilities-bundle_en-us.js"
          },
          "defaultPath": "odsp-utilities-bundle_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/odsp-core-bundle": {
          "type": "component",
          "id": "2e09fb9b-13bb-48f2-859f-97d6fff71176",
          "version": "1.1.13"
        }
      }
    }
  },
  {
    "id": "05ed6956-59ad-4aa6-9e4e-b832c96ae87b",
    "alias": "SPA11y",
    "componentType": "Library",
    "version": "0.7.17",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-a11y",
      "scriptResources": {
        "sp-a11y": {
          "type": "path",
          "path": "sp-a11y_none.js"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "da71836d-ece8-41d2-8893-da69034ae453",
    "alias": "globalizeBundle",
    "componentType": "Library",
    "version": "1.4.3",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "globalize-bundle",
      "scriptResources": {
        "globalize-bundle": {
          "type": "localizedPath",
          "paths": {
            "en-US": "globalize-bundle_en-us_none.js",
            "default": "globalize-bundle_default_none.js",
            "en-GB": "globalize-bundle_en-us_none.js",
            "en-NZ": "globalize-bundle_en-us_none.js",
            "en-IE": "globalize-bundle_en-us_none.js",
            "en-AU": "globalize-bundle_en-us_none.js",
            "bn": "globalize-bundle_en-us_none.js",
            "chr": "globalize-bundle_en-us_none.js",
            "dv": "globalize-bundle_en-us_none.js",
            "div": "globalize-bundle_en-us_none.js",
            "en": "globalize-bundle_en-us_none.js",
            "fil": "globalize-bundle_en-us_none.js",
            "haw": "globalize-bundle_en-us_none.js",
            "iu": "globalize-bundle_en-us_none.js",
            "lo": "globalize-bundle_en-us_none.js",
            "moh": "globalize-bundle_en-us_none.js",
            "sq": "globalize-bundle_en-us_none.js",
            "am": "globalize-bundle_en-us_none.js",
            "hy": "globalize-bundle_en-us_none.js",
            "mk": "globalize-bundle_en-us_none.js",
            "bs": "globalize-bundle_en-us_none.js",
            "my": "globalize-bundle_en-us_none.js",
            "dz": "globalize-bundle_en-us_none.js",
            "en-CY": "globalize-bundle_en-us_none.js",
            "en-EG": "globalize-bundle_en-us_none.js",
            "en-IL": "globalize-bundle_en-us_none.js",
            "en-IS": "globalize-bundle_en-us_none.js",
            "en-JO": "globalize-bundle_en-us_none.js",
            "en-KE": "globalize-bundle_en-us_none.js",
            "en-KW": "globalize-bundle_en-us_none.js",
            "en-MK": "globalize-bundle_en-us_none.js",
            "en-MT": "globalize-bundle_en-us_none.js",
            "en-PK": "globalize-bundle_en-us_none.js",
            "en-QA": "globalize-bundle_en-us_none.js",
            "en-SA": "globalize-bundle_en-us_none.js",
            "en-LK": "globalize-bundle_en-us_none.js",
            "en-AE": "globalize-bundle_en-us_none.js",
            "en-VN": "globalize-bundle_en-us_none.js",
            "is": "globalize-bundle_en-us_none.js",
            "km": "globalize-bundle_en-us_none.js",
            "kh": "globalize-bundle_en-us_none.js",
            "mt": "globalize-bundle_en-us_none.js",
            "fa": "globalize-bundle_en-us_none.js",
            "gd": "globalize-bundle_en-us_none.js",
            "sr-Cyrl-BA": "globalize-bundle_en-us_none.js",
            "sr-Latn-BA": "globalize-bundle_en-us_none.js",
            "sd": "globalize-bundle_en-us_none.js",
            "si": "globalize-bundle_en-us_none.js",
            "so": "globalize-bundle_en-us_none.js",
            "ti-ET": "globalize-bundle_en-us_none.js",
            "uz": "globalize-bundle_en-us_none.js",
            "en-SG": "globalize-bundle_en-us_none.js",
            "en-HK": "globalize-bundle_en-us_none.js",
            "en-MY": "globalize-bundle_en-us_none.js",
            "en-PH": "globalize-bundle_en-us_none.js",
            "en-TT": "globalize-bundle_en-us_none.js",
            "en-AZ": "globalize-bundle_en-us_none.js",
            "en-BH": "globalize-bundle_en-us_none.js",
            "en-BN": "globalize-bundle_en-us_none.js",
            "en-ID": "globalize-bundle_en-us_none.js",
            "mi": "globalize-bundle_en-us_none.js"
          },
          "defaultPath": "globalize-bundle_default_none.js"
        }
      }
    }
  },
  {
    "id": "c83d5509-ccd5-4c67-919f-2440f237927a",
    "alias": "I18nUtilities",
    "componentType": "Library",
    "version": "0.2.231",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "i18n-utilities-bundle",
      "scriptResources": {
        "i18n-utilities-bundle": {
          "type": "localizedPath",
          "paths": {
            "default": "i18n-utilities-bundle_default.js",
            "en-US": "i18n-utilities-bundle_en-us.js",
            "qps-ploca": "i18n-utilities-bundle_qps-ploca.js",
            "qps-ploc": "i18n-utilities-bundle_qps-ploc.js",
            "en-GB": "i18n-utilities-bundle_en-us.js",
            "en-NZ": "i18n-utilities-bundle_en-us.js",
            "en-IE": "i18n-utilities-bundle_en-us.js",
            "en-AU": "i18n-utilities-bundle_en-us.js",
            "bn": "i18n-utilities-bundle_en-us.js",
            "chr": "i18n-utilities-bundle_en-us.js",
            "dv": "i18n-utilities-bundle_en-us.js",
            "div": "i18n-utilities-bundle_en-us.js",
            "en": "i18n-utilities-bundle_en-us.js",
            "fil": "i18n-utilities-bundle_en-us.js",
            "haw": "i18n-utilities-bundle_en-us.js",
            "iu": "i18n-utilities-bundle_en-us.js",
            "lo": "i18n-utilities-bundle_en-us.js",
            "moh": "i18n-utilities-bundle_en-us.js",
            "sq": "i18n-utilities-bundle_en-us.js",
            "am": "i18n-utilities-bundle_en-us.js",
            "hy": "i18n-utilities-bundle_en-us.js",
            "mk": "i18n-utilities-bundle_en-us.js",
            "bs": "i18n-utilities-bundle_en-us.js",
            "my": "i18n-utilities-bundle_en-us.js",
            "dz": "i18n-utilities-bundle_en-us.js",
            "en-CY": "i18n-utilities-bundle_en-us.js",
            "en-EG": "i18n-utilities-bundle_en-us.js",
            "en-IL": "i18n-utilities-bundle_en-us.js",
            "en-IS": "i18n-utilities-bundle_en-us.js",
            "en-JO": "i18n-utilities-bundle_en-us.js",
            "en-KE": "i18n-utilities-bundle_en-us.js",
            "en-KW": "i18n-utilities-bundle_en-us.js",
            "en-MK": "i18n-utilities-bundle_en-us.js",
            "en-MT": "i18n-utilities-bundle_en-us.js",
            "en-PK": "i18n-utilities-bundle_en-us.js",
            "en-QA": "i18n-utilities-bundle_en-us.js",
            "en-SA": "i18n-utilities-bundle_en-us.js",
            "en-LK": "i18n-utilities-bundle_en-us.js",
            "en-AE": "i18n-utilities-bundle_en-us.js",
            "en-VN": "i18n-utilities-bundle_en-us.js",
            "is": "i18n-utilities-bundle_en-us.js",
            "km": "i18n-utilities-bundle_en-us.js",
            "kh": "i18n-utilities-bundle_en-us.js",
            "mt": "i18n-utilities-bundle_en-us.js",
            "fa": "i18n-utilities-bundle_en-us.js",
            "gd": "i18n-utilities-bundle_en-us.js",
            "sr-Cyrl-BA": "i18n-utilities-bundle_en-us.js",
            "sr-Latn-BA": "i18n-utilities-bundle_en-us.js",
            "sd": "i18n-utilities-bundle_en-us.js",
            "si": "i18n-utilities-bundle_en-us.js",
            "so": "i18n-utilities-bundle_en-us.js",
            "ti-ET": "i18n-utilities-bundle_en-us.js",
            "uz": "i18n-utilities-bundle_en-us.js",
            "en-SG": "i18n-utilities-bundle_en-us.js",
            "en-HK": "i18n-utilities-bundle_en-us.js",
            "en-MY": "i18n-utilities-bundle_en-us.js",
            "en-PH": "i18n-utilities-bundle_en-us.js",
            "en-TT": "i18n-utilities-bundle_en-us.js",
            "en-AZ": "i18n-utilities-bundle_en-us.js",
            "en-BH": "i18n-utilities-bundle_en-us.js",
            "en-BN": "i18n-utilities-bundle_en-us.js",
            "en-ID": "i18n-utilities-bundle_en-us.js",
            "mi": "i18n-utilities-bundle_en-us.js"
          },
          "defaultPath": "i18n-utilities-bundle_default.js"
        },
        "@ms/globalize-bundle": {
          "type": "component",
          "id": "da71836d-ece8-41d2-8893-da69034ae453",
          "version": "1.4.3"
        }
      }
    }
  },
  {
    "id": "29bd516f-4ece-40b7-8028-597cbc65a223",
    "alias": "SpOfficeUIFabricCore",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "office-ui-fabric-core",
      "scriptResources": {
        "office-ui-fabric-core": {
          "type": "path",
          "path": "office-ui-fabric-core_none.js"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "2c46c8f0-e214-4f49-951e-fd5b9d7b4ae1",
    "alias": "SPImageHelper",
    "componentType": "Library",
    "version": "1.12.1",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-image-helper",
      "scriptResources": {
        "sp-image-helper": {
          "type": "path",
          "path": "sp-image-helper_none.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@ms/odsp-core-bundle": {
          "type": "component",
          "id": "2e09fb9b-13bb-48f2-859f-97d6fff71176",
          "version": "1.1.13"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "9ef3df07-744e-4793-9840-c67d47c41763",
    "alias": "SPTeamsLib",
    "componentType": "Library",
    "version": "0.1.0",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-teams-lib",
      "scriptResources": {
        "sp-teams-lib": {
          "type": "path",
          "path": "sp-teams-lib_none.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@ms/odsp-core-bundle": {
          "type": "component",
          "id": "2e09fb9b-13bb-48f2-859f-97d6fff71176",
          "version": "1.1.13"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "@ms/odsp-utilities-bundle": {
          "type": "component",
          "id": "cc2cc925-b5be-41bb-880a-f0f8030c6aff",
          "version": "5.3.140"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "fa4155f6-2498-4a20-8406-5cb3b385b142",
    "alias": "SPDeferredComponent",
    "componentType": "Library",
    "version": "0.4.175",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-deferred-component",
      "scriptResources": {
        "sp-deferred-component": {
          "type": "path",
          "path": "sp-deferred-component_none.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        }
      }
    }
  },
  {
    "id": "8494e7d7-6b99-47b2-a741-59873e42f16f",
    "alias": "SPComponentUtilities",
    "componentType": "Library",
    "version": "11.10.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-component-utilities",
      "scriptResources": {
        "sp-component-utilities": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-component-utilities_default.js",
            "en-US": "sp-component-utilities_en-us.js",
            "qps-ploca": "sp-component-utilities_qps-ploca.js",
            "qps-ploc": "sp-component-utilities_qps-ploc.js",
            "en-GB": "sp-component-utilities_en-us.js",
            "en-NZ": "sp-component-utilities_en-us.js",
            "en-IE": "sp-component-utilities_en-us.js",
            "en-AU": "sp-component-utilities_en-us.js",
            "bn": "sp-component-utilities_en-us.js",
            "chr": "sp-component-utilities_en-us.js",
            "dv": "sp-component-utilities_en-us.js",
            "div": "sp-component-utilities_en-us.js",
            "en": "sp-component-utilities_en-us.js",
            "fil": "sp-component-utilities_en-us.js",
            "haw": "sp-component-utilities_en-us.js",
            "iu": "sp-component-utilities_en-us.js",
            "lo": "sp-component-utilities_en-us.js",
            "moh": "sp-component-utilities_en-us.js",
            "sq": "sp-component-utilities_en-us.js",
            "am": "sp-component-utilities_en-us.js",
            "hy": "sp-component-utilities_en-us.js",
            "mk": "sp-component-utilities_en-us.js",
            "bs": "sp-component-utilities_en-us.js",
            "my": "sp-component-utilities_en-us.js",
            "dz": "sp-component-utilities_en-us.js",
            "en-CY": "sp-component-utilities_en-us.js",
            "en-EG": "sp-component-utilities_en-us.js",
            "en-IL": "sp-component-utilities_en-us.js",
            "en-IS": "sp-component-utilities_en-us.js",
            "en-JO": "sp-component-utilities_en-us.js",
            "en-KE": "sp-component-utilities_en-us.js",
            "en-KW": "sp-component-utilities_en-us.js",
            "en-MK": "sp-component-utilities_en-us.js",
            "en-MT": "sp-component-utilities_en-us.js",
            "en-PK": "sp-component-utilities_en-us.js",
            "en-QA": "sp-component-utilities_en-us.js",
            "en-SA": "sp-component-utilities_en-us.js",
            "en-LK": "sp-component-utilities_en-us.js",
            "en-AE": "sp-component-utilities_en-us.js",
            "en-VN": "sp-component-utilities_en-us.js",
            "is": "sp-component-utilities_en-us.js",
            "km": "sp-component-utilities_en-us.js",
            "kh": "sp-component-utilities_en-us.js",
            "mt": "sp-component-utilities_en-us.js",
            "fa": "sp-component-utilities_en-us.js",
            "gd": "sp-component-utilities_en-us.js",
            "sr-Cyrl-BA": "sp-component-utilities_en-us.js",
            "sr-Latn-BA": "sp-component-utilities_en-us.js",
            "sd": "sp-component-utilities_en-us.js",
            "si": "sp-component-utilities_en-us.js",
            "so": "sp-component-utilities_en-us.js",
            "ti-ET": "sp-component-utilities_en-us.js",
            "uz": "sp-component-utilities_en-us.js",
            "en-SG": "sp-component-utilities_en-us.js",
            "en-HK": "sp-component-utilities_en-us.js",
            "en-MY": "sp-component-utilities_en-us.js",
            "en-PH": "sp-component-utilities_en-us.js",
            "en-TT": "sp-component-utilities_en-us.js",
            "en-AZ": "sp-component-utilities_en-us.js",
            "en-BH": "sp-component-utilities_en-us.js",
            "en-BN": "sp-component-utilities_en-us.js",
            "en-ID": "sp-component-utilities_en-us.js",
            "mi": "sp-component-utilities_en-us.js"
          },
          "defaultPath": "sp-component-utilities_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-image-helper": {
          "type": "component",
          "id": "2c46c8f0-e214-4f49-951e-fd5b9d7b4ae1",
          "version": "1.12.1"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
          "version": "1.12.1"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "@ms/i18n-utilities": {
          "type": "component",
          "id": "c83d5509-ccd5-4c67-919f-2440f237927a",
          "version": "0.2.231"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@ms/odsp-utilities-bundle": {
          "type": "component",
          "id": "cc2cc925-b5be-41bb-880a-f0f8030c6aff",
          "version": "5.3.140"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "dd6f4302-b840-4db3-919d-e8bcba06daaa",
    "alias": "ContentHandler",
    "componentType": "Library",
    "version": "0.1.0",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "content-handler-library",
      "scriptResources": {
        "content-handler-library": {
          "type": "path",
          "path": "content-handler-library_none.js"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@ms/sp-component-utilities": {
          "type": "component",
          "id": "8494e7d7-6b99-47b2-a741-59873e42f16f",
          "version": "11.10.1"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "bdb0f5dd-3bb4-4b93-b12a-71aa9e20bb09",
    "alias": "SPAnchor",
    "componentType": "Library",
    "version": "0.5.183",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-anchor",
      "scriptResources": {
        "sp-anchor": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-anchor_default.js",
            "en-US": "sp-anchor_en-us.js",
            "qps-ploca": "sp-anchor_qps-ploca.js",
            "qps-ploc": "sp-anchor_qps-ploc.js",
            "en-GB": "sp-anchor_en-us.js",
            "en-NZ": "sp-anchor_en-us.js",
            "en-IE": "sp-anchor_en-us.js",
            "en-AU": "sp-anchor_en-us.js",
            "bn": "sp-anchor_en-us.js",
            "chr": "sp-anchor_en-us.js",
            "dv": "sp-anchor_en-us.js",
            "div": "sp-anchor_en-us.js",
            "en": "sp-anchor_en-us.js",
            "fil": "sp-anchor_en-us.js",
            "haw": "sp-anchor_en-us.js",
            "iu": "sp-anchor_en-us.js",
            "lo": "sp-anchor_en-us.js",
            "moh": "sp-anchor_en-us.js",
            "sq": "sp-anchor_en-us.js",
            "am": "sp-anchor_en-us.js",
            "hy": "sp-anchor_en-us.js",
            "mk": "sp-anchor_en-us.js",
            "bs": "sp-anchor_en-us.js",
            "my": "sp-anchor_en-us.js",
            "dz": "sp-anchor_en-us.js",
            "en-CY": "sp-anchor_en-us.js",
            "en-EG": "sp-anchor_en-us.js",
            "en-IL": "sp-anchor_en-us.js",
            "en-IS": "sp-anchor_en-us.js",
            "en-JO": "sp-anchor_en-us.js",
            "en-KE": "sp-anchor_en-us.js",
            "en-KW": "sp-anchor_en-us.js",
            "en-MK": "sp-anchor_en-us.js",
            "en-MT": "sp-anchor_en-us.js",
            "en-PK": "sp-anchor_en-us.js",
            "en-QA": "sp-anchor_en-us.js",
            "en-SA": "sp-anchor_en-us.js",
            "en-LK": "sp-anchor_en-us.js",
            "en-AE": "sp-anchor_en-us.js",
            "en-VN": "sp-anchor_en-us.js",
            "is": "sp-anchor_en-us.js",
            "km": "sp-anchor_en-us.js",
            "kh": "sp-anchor_en-us.js",
            "mt": "sp-anchor_en-us.js",
            "fa": "sp-anchor_en-us.js",
            "gd": "sp-anchor_en-us.js",
            "sr-Cyrl-BA": "sp-anchor_en-us.js",
            "sr-Latn-BA": "sp-anchor_en-us.js",
            "sd": "sp-anchor_en-us.js",
            "si": "sp-anchor_en-us.js",
            "so": "sp-anchor_en-us.js",
            "ti-ET": "sp-anchor_en-us.js",
            "uz": "sp-anchor_en-us.js",
            "en-SG": "sp-anchor_en-us.js",
            "en-HK": "sp-anchor_en-us.js",
            "en-MY": "sp-anchor_en-us.js",
            "en-PH": "sp-anchor_en-us.js",
            "en-TT": "sp-anchor_en-us.js",
            "en-AZ": "sp-anchor_en-us.js",
            "en-BH": "sp-anchor_en-us.js",
            "en-BN": "sp-anchor_en-us.js",
            "en-ID": "sp-anchor_en-us.js",
            "mi": "sp-anchor_en-us.js"
          },
          "defaultPath": "sp-anchor_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@ms/odsp-utilities-bundle": {
          "type": "component",
          "id": "cc2cc925-b5be-41bb-880a-f0f8030c6aff",
          "version": "5.3.140"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "a8d4def5-9852-45c7-905e-2e50203cbb98",
    "alias": "MySiteCache",
    "componentType": "Library",
    "version": "0.1.0",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-mysitecache",
      "scriptResources": {
        "sp-mysitecache": {
          "type": "path",
          "path": "sp-mysitecache_none.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
          "version": "1.12.1"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
          "version": "1.12.1"
        },
        "@ms/odsp-utilities-bundle": {
          "type": "component",
          "id": "cc2cc925-b5be-41bb-880a-f0f8030c6aff",
          "version": "5.3.140"
        }
      }
    }
  },
  {
    "id": "5388ac31-7915-4ba6-a021-0f8808dd5784",
    "alias": "SPCanvasToolbox",
    "componentType": "Library",
    "version": "0.0.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-toolbox",
      "scriptResources": {
        "sp-toolbox": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-toolbox_default.js",
            "en-US": "sp-toolbox_en-us.js",
            "qps-ploca": "sp-toolbox_qps-ploca.js",
            "qps-ploc": "sp-toolbox_qps-ploc.js",
            "en-GB": "sp-toolbox_en-us.js",
            "en-NZ": "sp-toolbox_en-us.js",
            "en-IE": "sp-toolbox_en-us.js",
            "en-AU": "sp-toolbox_en-us.js",
            "bn": "sp-toolbox_en-us.js",
            "chr": "sp-toolbox_en-us.js",
            "dv": "sp-toolbox_en-us.js",
            "div": "sp-toolbox_en-us.js",
            "en": "sp-toolbox_en-us.js",
            "fil": "sp-toolbox_en-us.js",
            "haw": "sp-toolbox_en-us.js",
            "iu": "sp-toolbox_en-us.js",
            "lo": "sp-toolbox_en-us.js",
            "moh": "sp-toolbox_en-us.js",
            "sq": "sp-toolbox_en-us.js",
            "am": "sp-toolbox_en-us.js",
            "hy": "sp-toolbox_en-us.js",
            "mk": "sp-toolbox_en-us.js",
            "bs": "sp-toolbox_en-us.js",
            "my": "sp-toolbox_en-us.js",
            "dz": "sp-toolbox_en-us.js",
            "en-CY": "sp-toolbox_en-us.js",
            "en-EG": "sp-toolbox_en-us.js",
            "en-IL": "sp-toolbox_en-us.js",
            "en-IS": "sp-toolbox_en-us.js",
            "en-JO": "sp-toolbox_en-us.js",
            "en-KE": "sp-toolbox_en-us.js",
            "en-KW": "sp-toolbox_en-us.js",
            "en-MK": "sp-toolbox_en-us.js",
            "en-MT": "sp-toolbox_en-us.js",
            "en-PK": "sp-toolbox_en-us.js",
            "en-QA": "sp-toolbox_en-us.js",
            "en-SA": "sp-toolbox_en-us.js",
            "en-LK": "sp-toolbox_en-us.js",
            "en-AE": "sp-toolbox_en-us.js",
            "en-VN": "sp-toolbox_en-us.js",
            "is": "sp-toolbox_en-us.js",
            "km": "sp-toolbox_en-us.js",
            "kh": "sp-toolbox_en-us.js",
            "mt": "sp-toolbox_en-us.js",
            "fa": "sp-toolbox_en-us.js",
            "gd": "sp-toolbox_en-us.js",
            "sr-Cyrl-BA": "sp-toolbox_en-us.js",
            "sr-Latn-BA": "sp-toolbox_en-us.js",
            "sd": "sp-toolbox_en-us.js",
            "si": "sp-toolbox_en-us.js",
            "so": "sp-toolbox_en-us.js",
            "ti-ET": "sp-toolbox_en-us.js",
            "uz": "sp-toolbox_en-us.js",
            "en-SG": "sp-toolbox_en-us.js",
            "en-HK": "sp-toolbox_en-us.js",
            "en-MY": "sp-toolbox_en-us.js",
            "en-PH": "sp-toolbox_en-us.js",
            "en-TT": "sp-toolbox_en-us.js",
            "en-AZ": "sp-toolbox_en-us.js",
            "en-BH": "sp-toolbox_en-us.js",
            "en-BN": "sp-toolbox_en-us.js",
            "en-ID": "sp-toolbox_en-us.js",
            "mi": "sp-toolbox_en-us.js"
          },
          "defaultPath": "sp-toolbox_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
          "version": "1.12.1"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@ms/sp-mysitecache": {
          "type": "component",
          "id": "a8d4def5-9852-45c7-905e-2e50203cbb98",
          "version": "0.1.0"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "@ms/uifabric-styling-bundle": {
          "type": "component",
          "id": "17ce0976-e69a-4355-be84-89b69a74717d",
          "version": "0.1.0"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@ms/odsp-utilities-bundle": {
          "type": "component",
          "id": "cc2cc925-b5be-41bb-880a-f0f8030c6aff",
          "version": "5.3.140"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "5f4cceb9-6310-47e8-85d4-8149fc59b546",
    "alias": "SpViewportLoader",
    "componentType": "Library",
    "version": "0.1.0",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-viewport-loader",
      "scriptResources": {
        "sp-viewport-loader": {
          "type": "path",
          "path": "sp-viewport-loader_none.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0",
          "version": "1.12.1"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "id": "6ff2150d-f5a7-4af8-a69a-ecf112dc2a90",
    "alias": "FabricVariants",
    "componentType": "Library",
    "version": "0.1.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "uifabric-variants-bundle",
      "scriptResources": {
        "uifabric-variants-bundle": {
          "type": "path",
          "path": "uifabric-variants-bundle_none.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/uifabric-styling-bundle": {
          "type": "component",
          "id": "17ce0976-e69a-4355-be84-89b69a74717d",
          "version": "0.1.0"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "b00dc31b-0f09-4cdc-977e-7810d7f9d087",
    "alias": "sp-ckeditor-flight",
    "componentType": "Library",
    "version": "0.6.130",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-ckeditor-flight",
      "scriptResources": {
        "sp-ckeditor-flight": {
          "type": "path",
          "path": "sp-ckeditor-flight_none.js"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "ad843ba1-a2ac-4506-815e-f02bd9f3e77b",
    "alias": "sp-ckeditor",
    "componentType": "Library",
    "version": "0.3.130",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-ckeditor",
      "scriptResources": {
        "sp-ckeditor": {
          "type": "path",
          "path": "sp-ckeditor_none.js"
        }
      }
    }
  },
  {
    "alias": "FirstRunExperience",
    "componentType": "Library",
    "id": "6da60671-741f-47c5-b35b-5078edaf312f",
    "manifestVersion": 2,
    "version": "0.1.0",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-coachmark-utility",
      "scriptResources": {
        "sp-coachmark-utility": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-coachmark-utility_default.js",
            "en-US": "sp-coachmark-utility_en-us.js",
            "qps-ploca": "sp-coachmark-utility_qps-ploca.js",
            "qps-ploc": "sp-coachmark-utility_qps-ploc.js",
            "en-GB": "sp-coachmark-utility_en-us.js",
            "en-NZ": "sp-coachmark-utility_en-us.js",
            "en-IE": "sp-coachmark-utility_en-us.js",
            "en-AU": "sp-coachmark-utility_en-us.js",
            "bn": "sp-coachmark-utility_en-us.js",
            "chr": "sp-coachmark-utility_en-us.js",
            "dv": "sp-coachmark-utility_en-us.js",
            "div": "sp-coachmark-utility_en-us.js",
            "en": "sp-coachmark-utility_en-us.js",
            "fil": "sp-coachmark-utility_en-us.js",
            "haw": "sp-coachmark-utility_en-us.js",
            "iu": "sp-coachmark-utility_en-us.js",
            "lo": "sp-coachmark-utility_en-us.js",
            "moh": "sp-coachmark-utility_en-us.js",
            "sq": "sp-coachmark-utility_en-us.js",
            "am": "sp-coachmark-utility_en-us.js",
            "hy": "sp-coachmark-utility_en-us.js",
            "mk": "sp-coachmark-utility_en-us.js",
            "bs": "sp-coachmark-utility_en-us.js",
            "my": "sp-coachmark-utility_en-us.js",
            "dz": "sp-coachmark-utility_en-us.js",
            "en-CY": "sp-coachmark-utility_en-us.js",
            "en-EG": "sp-coachmark-utility_en-us.js",
            "en-IL": "sp-coachmark-utility_en-us.js",
            "en-IS": "sp-coachmark-utility_en-us.js",
            "en-JO": "sp-coachmark-utility_en-us.js",
            "en-KE": "sp-coachmark-utility_en-us.js",
            "en-KW": "sp-coachmark-utility_en-us.js",
            "en-MK": "sp-coachmark-utility_en-us.js",
            "en-MT": "sp-coachmark-utility_en-us.js",
            "en-PK": "sp-coachmark-utility_en-us.js",
            "en-QA": "sp-coachmark-utility_en-us.js",
            "en-SA": "sp-coachmark-utility_en-us.js",
            "en-LK": "sp-coachmark-utility_en-us.js",
            "en-AE": "sp-coachmark-utility_en-us.js",
            "en-VN": "sp-coachmark-utility_en-us.js",
            "is": "sp-coachmark-utility_en-us.js",
            "km": "sp-coachmark-utility_en-us.js",
            "kh": "sp-coachmark-utility_en-us.js",
            "mt": "sp-coachmark-utility_en-us.js",
            "fa": "sp-coachmark-utility_en-us.js",
            "gd": "sp-coachmark-utility_en-us.js",
            "sr-Cyrl-BA": "sp-coachmark-utility_en-us.js",
            "sr-Latn-BA": "sp-coachmark-utility_en-us.js",
            "sd": "sp-coachmark-utility_en-us.js",
            "si": "sp-coachmark-utility_en-us.js",
            "so": "sp-coachmark-utility_en-us.js",
            "ti-ET": "sp-coachmark-utility_en-us.js",
            "uz": "sp-coachmark-utility_en-us.js",
            "en-SG": "sp-coachmark-utility_en-us.js",
            "en-HK": "sp-coachmark-utility_en-us.js",
            "en-MY": "sp-coachmark-utility_en-us.js",
            "en-PH": "sp-coachmark-utility_en-us.js",
            "en-TT": "sp-coachmark-utility_en-us.js",
            "en-AZ": "sp-coachmark-utility_en-us.js",
            "en-BH": "sp-coachmark-utility_en-us.js",
            "en-BN": "sp-coachmark-utility_en-us.js",
            "en-ID": "sp-coachmark-utility_en-us.js",
            "mi": "sp-coachmark-utility_en-us.js"
          },
          "defaultPath": "sp-coachmark-utility_default.js"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "id": "1cea229f-b208-4202-8014-22503d92a019",
    "alias": "SPDataProviders",
    "componentType": "Library",
    "version": "0.1.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-dataproviders",
      "scriptResources": {
        "sp-dataproviders": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-dataproviders_default.js",
            "en-US": "sp-dataproviders_en-us.js",
            "qps-ploca": "sp-dataproviders_qps-ploca.js",
            "qps-ploc": "sp-dataproviders_qps-ploc.js",
            "en-GB": "sp-dataproviders_en-us.js",
            "en-NZ": "sp-dataproviders_en-us.js",
            "en-IE": "sp-dataproviders_en-us.js",
            "en-AU": "sp-dataproviders_en-us.js",
            "bn": "sp-dataproviders_en-us.js",
            "chr": "sp-dataproviders_en-us.js",
            "dv": "sp-dataproviders_en-us.js",
            "div": "sp-dataproviders_en-us.js",
            "en": "sp-dataproviders_en-us.js",
            "fil": "sp-dataproviders_en-us.js",
            "haw": "sp-dataproviders_en-us.js",
            "iu": "sp-dataproviders_en-us.js",
            "lo": "sp-dataproviders_en-us.js",
            "moh": "sp-dataproviders_en-us.js",
            "sq": "sp-dataproviders_en-us.js",
            "am": "sp-dataproviders_en-us.js",
            "hy": "sp-dataproviders_en-us.js",
            "mk": "sp-dataproviders_en-us.js",
            "bs": "sp-dataproviders_en-us.js",
            "my": "sp-dataproviders_en-us.js",
            "dz": "sp-dataproviders_en-us.js",
            "en-CY": "sp-dataproviders_en-us.js",
            "en-EG": "sp-dataproviders_en-us.js",
            "en-IL": "sp-dataproviders_en-us.js",
            "en-IS": "sp-dataproviders_en-us.js",
            "en-JO": "sp-dataproviders_en-us.js",
            "en-KE": "sp-dataproviders_en-us.js",
            "en-KW": "sp-dataproviders_en-us.js",
            "en-MK": "sp-dataproviders_en-us.js",
            "en-MT": "sp-dataproviders_en-us.js",
            "en-PK": "sp-dataproviders_en-us.js",
            "en-QA": "sp-dataproviders_en-us.js",
            "en-SA": "sp-dataproviders_en-us.js",
            "en-LK": "sp-dataproviders_en-us.js",
            "en-AE": "sp-dataproviders_en-us.js",
            "en-VN": "sp-dataproviders_en-us.js",
            "is": "sp-dataproviders_en-us.js",
            "km": "sp-dataproviders_en-us.js",
            "kh": "sp-dataproviders_en-us.js",
            "mt": "sp-dataproviders_en-us.js",
            "fa": "sp-dataproviders_en-us.js",
            "gd": "sp-dataproviders_en-us.js",
            "sr-Cyrl-BA": "sp-dataproviders_en-us.js",
            "sr-Latn-BA": "sp-dataproviders_en-us.js",
            "sd": "sp-dataproviders_en-us.js",
            "si": "sp-dataproviders_en-us.js",
            "so": "sp-dataproviders_en-us.js",
            "ti-ET": "sp-dataproviders_en-us.js",
            "uz": "sp-dataproviders_en-us.js",
            "en-SG": "sp-dataproviders_en-us.js",
            "en-HK": "sp-dataproviders_en-us.js",
            "en-MY": "sp-dataproviders_en-us.js",
            "en-PH": "sp-dataproviders_en-us.js",
            "en-TT": "sp-dataproviders_en-us.js",
            "en-AZ": "sp-dataproviders_en-us.js",
            "en-BH": "sp-dataproviders_en-us.js",
            "en-BN": "sp-dataproviders_en-us.js",
            "en-ID": "sp-dataproviders_en-us.js",
            "mi": "sp-dataproviders_en-us.js"
          },
          "defaultPath": "sp-dataproviders_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-image-helper": {
          "type": "component",
          "id": "2c46c8f0-e214-4f49-951e-fd5b9d7b4ae1",
          "version": "1.12.1"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@ms/odsp-core-bundle": {
          "type": "component",
          "id": "2e09fb9b-13bb-48f2-859f-97d6fff71176",
          "version": "1.1.13"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
          "version": "1.12.1"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "@ms/i18n-utilities": {
          "type": "component",
          "id": "c83d5509-ccd5-4c67-919f-2440f237927a",
          "version": "0.2.231"
        },
        "@ms/sp-component-utilities": {
          "type": "component",
          "id": "8494e7d7-6b99-47b2-a741-59873e42f16f",
          "version": "11.10.1"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
          "version": "1.12.1"
        },
        "@ms/odsp-utilities-bundle": {
          "type": "component",
          "id": "cc2cc925-b5be-41bb-880a-f0f8030c6aff",
          "version": "5.3.140"
        }
      }
    }
  },
  {
    "id": "e795d530-8fb6-425c-b864-b86735dbae1d",
    "alias": "SPPagePicker",
    "componentType": "Library",
    "version": "1.7.153",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-pagepicker",
      "scriptResources": {
        "sp-pagepicker": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-pagepicker_default.js",
            "en-US": "sp-pagepicker_en-us.js",
            "qps-ploca": "sp-pagepicker_qps-ploca.js",
            "qps-ploc": "sp-pagepicker_qps-ploc.js",
            "en-GB": "sp-pagepicker_en-us.js",
            "en-NZ": "sp-pagepicker_en-us.js",
            "en-IE": "sp-pagepicker_en-us.js",
            "en-AU": "sp-pagepicker_en-us.js",
            "bn": "sp-pagepicker_en-us.js",
            "chr": "sp-pagepicker_en-us.js",
            "dv": "sp-pagepicker_en-us.js",
            "div": "sp-pagepicker_en-us.js",
            "en": "sp-pagepicker_en-us.js",
            "fil": "sp-pagepicker_en-us.js",
            "haw": "sp-pagepicker_en-us.js",
            "iu": "sp-pagepicker_en-us.js",
            "lo": "sp-pagepicker_en-us.js",
            "moh": "sp-pagepicker_en-us.js",
            "sq": "sp-pagepicker_en-us.js",
            "am": "sp-pagepicker_en-us.js",
            "hy": "sp-pagepicker_en-us.js",
            "mk": "sp-pagepicker_en-us.js",
            "bs": "sp-pagepicker_en-us.js",
            "my": "sp-pagepicker_en-us.js",
            "dz": "sp-pagepicker_en-us.js",
            "en-CY": "sp-pagepicker_en-us.js",
            "en-EG": "sp-pagepicker_en-us.js",
            "en-IL": "sp-pagepicker_en-us.js",
            "en-IS": "sp-pagepicker_en-us.js",
            "en-JO": "sp-pagepicker_en-us.js",
            "en-KE": "sp-pagepicker_en-us.js",
            "en-KW": "sp-pagepicker_en-us.js",
            "en-MK": "sp-pagepicker_en-us.js",
            "en-MT": "sp-pagepicker_en-us.js",
            "en-PK": "sp-pagepicker_en-us.js",
            "en-QA": "sp-pagepicker_en-us.js",
            "en-SA": "sp-pagepicker_en-us.js",
            "en-LK": "sp-pagepicker_en-us.js",
            "en-AE": "sp-pagepicker_en-us.js",
            "en-VN": "sp-pagepicker_en-us.js",
            "is": "sp-pagepicker_en-us.js",
            "km": "sp-pagepicker_en-us.js",
            "kh": "sp-pagepicker_en-us.js",
            "mt": "sp-pagepicker_en-us.js",
            "fa": "sp-pagepicker_en-us.js",
            "gd": "sp-pagepicker_en-us.js",
            "sr-Cyrl-BA": "sp-pagepicker_en-us.js",
            "sr-Latn-BA": "sp-pagepicker_en-us.js",
            "sd": "sp-pagepicker_en-us.js",
            "si": "sp-pagepicker_en-us.js",
            "so": "sp-pagepicker_en-us.js",
            "ti-ET": "sp-pagepicker_en-us.js",
            "uz": "sp-pagepicker_en-us.js",
            "en-SG": "sp-pagepicker_en-us.js",
            "en-HK": "sp-pagepicker_en-us.js",
            "en-MY": "sp-pagepicker_en-us.js",
            "en-PH": "sp-pagepicker_en-us.js",
            "en-TT": "sp-pagepicker_en-us.js",
            "en-AZ": "sp-pagepicker_en-us.js",
            "en-BH": "sp-pagepicker_en-us.js",
            "en-BN": "sp-pagepicker_en-us.js",
            "en-ID": "sp-pagepicker_en-us.js",
            "mi": "sp-pagepicker_en-us.js"
          },
          "defaultPath": "sp-pagepicker_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "@ms/i18n-utilities": {
          "type": "component",
          "id": "c83d5509-ccd5-4c67-919f-2440f237927a",
          "version": "0.2.231"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "react-dom": {
          "type": "component",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "version": "16.9.0"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "id": "6d3c733c-8cb7-4871-bb22-b5b37c1d518d",
    "alias": "sp-safehtml",
    "componentType": "Library",
    "version": "0.2.259",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-safehtml",
      "scriptResources": {
        "sp-safehtml": {
          "type": "path",
          "path": "sp-safehtml_none.js"
        }
      }
    }
  },
  {
    "id": "7d834519-e86f-4d2b-ad52-b9b35dab66f1",
    "alias": "sp-live-persona-card",
    "componentType": "Library",
    "manifestVersion": 2,
    "version": "0.1.0",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-live-persona-card",
      "scriptResources": {
        "sp-live-persona-card": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-live-persona-card_default.js",
            "en-US": "sp-live-persona-card_en-us.js",
            "qps-ploca": "sp-live-persona-card_qps-ploca.js",
            "qps-ploc": "sp-live-persona-card_qps-ploc.js",
            "en-GB": "sp-live-persona-card_en-us.js",
            "en-NZ": "sp-live-persona-card_en-us.js",
            "en-IE": "sp-live-persona-card_en-us.js",
            "en-AU": "sp-live-persona-card_en-us.js",
            "bn": "sp-live-persona-card_en-us.js",
            "chr": "sp-live-persona-card_en-us.js",
            "dv": "sp-live-persona-card_en-us.js",
            "div": "sp-live-persona-card_en-us.js",
            "en": "sp-live-persona-card_en-us.js",
            "fil": "sp-live-persona-card_en-us.js",
            "haw": "sp-live-persona-card_en-us.js",
            "iu": "sp-live-persona-card_en-us.js",
            "lo": "sp-live-persona-card_en-us.js",
            "moh": "sp-live-persona-card_en-us.js",
            "sq": "sp-live-persona-card_en-us.js",
            "am": "sp-live-persona-card_en-us.js",
            "hy": "sp-live-persona-card_en-us.js",
            "mk": "sp-live-persona-card_en-us.js",
            "bs": "sp-live-persona-card_en-us.js",
            "my": "sp-live-persona-card_en-us.js",
            "dz": "sp-live-persona-card_en-us.js",
            "en-CY": "sp-live-persona-card_en-us.js",
            "en-EG": "sp-live-persona-card_en-us.js",
            "en-IL": "sp-live-persona-card_en-us.js",
            "en-IS": "sp-live-persona-card_en-us.js",
            "en-JO": "sp-live-persona-card_en-us.js",
            "en-KE": "sp-live-persona-card_en-us.js",
            "en-KW": "sp-live-persona-card_en-us.js",
            "en-MK": "sp-live-persona-card_en-us.js",
            "en-MT": "sp-live-persona-card_en-us.js",
            "en-PK": "sp-live-persona-card_en-us.js",
            "en-QA": "sp-live-persona-card_en-us.js",
            "en-SA": "sp-live-persona-card_en-us.js",
            "en-LK": "sp-live-persona-card_en-us.js",
            "en-AE": "sp-live-persona-card_en-us.js",
            "en-VN": "sp-live-persona-card_en-us.js",
            "is": "sp-live-persona-card_en-us.js",
            "km": "sp-live-persona-card_en-us.js",
            "kh": "sp-live-persona-card_en-us.js",
            "mt": "sp-live-persona-card_en-us.js",
            "fa": "sp-live-persona-card_en-us.js",
            "gd": "sp-live-persona-card_en-us.js",
            "sr-Cyrl-BA": "sp-live-persona-card_en-us.js",
            "sr-Latn-BA": "sp-live-persona-card_en-us.js",
            "sd": "sp-live-persona-card_en-us.js",
            "si": "sp-live-persona-card_en-us.js",
            "so": "sp-live-persona-card_en-us.js",
            "ti-ET": "sp-live-persona-card_en-us.js",
            "uz": "sp-live-persona-card_en-us.js",
            "en-SG": "sp-live-persona-card_en-us.js",
            "en-HK": "sp-live-persona-card_en-us.js",
            "en-MY": "sp-live-persona-card_en-us.js",
            "en-PH": "sp-live-persona-card_en-us.js",
            "en-TT": "sp-live-persona-card_en-us.js",
            "en-AZ": "sp-live-persona-card_en-us.js",
            "en-BH": "sp-live-persona-card_en-us.js",
            "en-BN": "sp-live-persona-card_en-us.js",
            "en-ID": "sp-live-persona-card_en-us.js",
            "mi": "sp-live-persona-card_en-us.js"
          },
          "defaultPath": "sp-live-persona-card_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "c79b9f88-6338-40fb-b463-3aad22a88b15",
    "alias": "sp-webpart-shared-editmode",
    "componentType": "Library",
    "version": "0.1.0",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-webpart-shared-editmode",
      "scriptResources": {
        "sp-webpart-shared-editmode": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-webpart-shared-editmode_default.js",
            "en-US": "sp-webpart-shared-editmode_en-us.js",
            "qps-ploca": "sp-webpart-shared-editmode_qps-ploca.js",
            "qps-ploc": "sp-webpart-shared-editmode_qps-ploc.js",
            "en-GB": "sp-webpart-shared-editmode_en-us.js",
            "en-NZ": "sp-webpart-shared-editmode_en-us.js",
            "en-IE": "sp-webpart-shared-editmode_en-us.js",
            "en-AU": "sp-webpart-shared-editmode_en-us.js",
            "bn": "sp-webpart-shared-editmode_en-us.js",
            "chr": "sp-webpart-shared-editmode_en-us.js",
            "dv": "sp-webpart-shared-editmode_en-us.js",
            "div": "sp-webpart-shared-editmode_en-us.js",
            "en": "sp-webpart-shared-editmode_en-us.js",
            "fil": "sp-webpart-shared-editmode_en-us.js",
            "haw": "sp-webpart-shared-editmode_en-us.js",
            "iu": "sp-webpart-shared-editmode_en-us.js",
            "lo": "sp-webpart-shared-editmode_en-us.js",
            "moh": "sp-webpart-shared-editmode_en-us.js",
            "sq": "sp-webpart-shared-editmode_en-us.js",
            "am": "sp-webpart-shared-editmode_en-us.js",
            "hy": "sp-webpart-shared-editmode_en-us.js",
            "mk": "sp-webpart-shared-editmode_en-us.js",
            "bs": "sp-webpart-shared-editmode_en-us.js",
            "my": "sp-webpart-shared-editmode_en-us.js",
            "dz": "sp-webpart-shared-editmode_en-us.js",
            "en-CY": "sp-webpart-shared-editmode_en-us.js",
            "en-EG": "sp-webpart-shared-editmode_en-us.js",
            "en-IL": "sp-webpart-shared-editmode_en-us.js",
            "en-IS": "sp-webpart-shared-editmode_en-us.js",
            "en-JO": "sp-webpart-shared-editmode_en-us.js",
            "en-KE": "sp-webpart-shared-editmode_en-us.js",
            "en-KW": "sp-webpart-shared-editmode_en-us.js",
            "en-MK": "sp-webpart-shared-editmode_en-us.js",
            "en-MT": "sp-webpart-shared-editmode_en-us.js",
            "en-PK": "sp-webpart-shared-editmode_en-us.js",
            "en-QA": "sp-webpart-shared-editmode_en-us.js",
            "en-SA": "sp-webpart-shared-editmode_en-us.js",
            "en-LK": "sp-webpart-shared-editmode_en-us.js",
            "en-AE": "sp-webpart-shared-editmode_en-us.js",
            "en-VN": "sp-webpart-shared-editmode_en-us.js",
            "is": "sp-webpart-shared-editmode_en-us.js",
            "km": "sp-webpart-shared-editmode_en-us.js",
            "kh": "sp-webpart-shared-editmode_en-us.js",
            "mt": "sp-webpart-shared-editmode_en-us.js",
            "fa": "sp-webpart-shared-editmode_en-us.js",
            "gd": "sp-webpart-shared-editmode_en-us.js",
            "sr-Cyrl-BA": "sp-webpart-shared-editmode_en-us.js",
            "sr-Latn-BA": "sp-webpart-shared-editmode_en-us.js",
            "sd": "sp-webpart-shared-editmode_en-us.js",
            "si": "sp-webpart-shared-editmode_en-us.js",
            "so": "sp-webpart-shared-editmode_en-us.js",
            "ti-ET": "sp-webpart-shared-editmode_en-us.js",
            "uz": "sp-webpart-shared-editmode_en-us.js",
            "en-SG": "sp-webpart-shared-editmode_en-us.js",
            "en-HK": "sp-webpart-shared-editmode_en-us.js",
            "en-MY": "sp-webpart-shared-editmode_en-us.js",
            "en-PH": "sp-webpart-shared-editmode_en-us.js",
            "en-TT": "sp-webpart-shared-editmode_en-us.js",
            "en-AZ": "sp-webpart-shared-editmode_en-us.js",
            "en-BH": "sp-webpart-shared-editmode_en-us.js",
            "en-BN": "sp-webpart-shared-editmode_en-us.js",
            "en-ID": "sp-webpart-shared-editmode_en-us.js",
            "mi": "sp-webpart-shared-editmode_en-us.js"
          },
          "defaultPath": "sp-webpart-shared-editmode_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0",
          "version": "1.12.1"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "@ms/sp-component-utilities": {
          "type": "component",
          "id": "8494e7d7-6b99-47b2-a741-59873e42f16f",
          "version": "11.10.1"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
          "version": "1.12.1"
        },
        "@ms/odsp-utilities-bundle": {
          "type": "component",
          "id": "cc2cc925-b5be-41bb-880a-f0f8030c6aff",
          "version": "5.3.140"
        }
      }
    }
  },
  {
    "id": "914330ee-2df2-4f6e-a858-30c23a812408",
    "alias": "sp-webpart-shared",
    "componentType": "Library",
    "version": "1.15.53",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-webpart-shared",
      "scriptResources": {
        "sp-webpart-shared": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-webpart-shared_default.js",
            "en-US": "sp-webpart-shared_en-us.js",
            "qps-ploca": "sp-webpart-shared_qps-ploca.js",
            "qps-ploc": "sp-webpart-shared_qps-ploc.js",
            "en-GB": "sp-webpart-shared_en-us.js",
            "en-NZ": "sp-webpart-shared_en-us.js",
            "en-IE": "sp-webpart-shared_en-us.js",
            "en-AU": "sp-webpart-shared_en-us.js",
            "bn": "sp-webpart-shared_en-us.js",
            "chr": "sp-webpart-shared_en-us.js",
            "dv": "sp-webpart-shared_en-us.js",
            "div": "sp-webpart-shared_en-us.js",
            "en": "sp-webpart-shared_en-us.js",
            "fil": "sp-webpart-shared_en-us.js",
            "haw": "sp-webpart-shared_en-us.js",
            "iu": "sp-webpart-shared_en-us.js",
            "lo": "sp-webpart-shared_en-us.js",
            "moh": "sp-webpart-shared_en-us.js",
            "sq": "sp-webpart-shared_en-us.js",
            "am": "sp-webpart-shared_en-us.js",
            "hy": "sp-webpart-shared_en-us.js",
            "mk": "sp-webpart-shared_en-us.js",
            "bs": "sp-webpart-shared_en-us.js",
            "my": "sp-webpart-shared_en-us.js",
            "dz": "sp-webpart-shared_en-us.js",
            "en-CY": "sp-webpart-shared_en-us.js",
            "en-EG": "sp-webpart-shared_en-us.js",
            "en-IL": "sp-webpart-shared_en-us.js",
            "en-IS": "sp-webpart-shared_en-us.js",
            "en-JO": "sp-webpart-shared_en-us.js",
            "en-KE": "sp-webpart-shared_en-us.js",
            "en-KW": "sp-webpart-shared_en-us.js",
            "en-MK": "sp-webpart-shared_en-us.js",
            "en-MT": "sp-webpart-shared_en-us.js",
            "en-PK": "sp-webpart-shared_en-us.js",
            "en-QA": "sp-webpart-shared_en-us.js",
            "en-SA": "sp-webpart-shared_en-us.js",
            "en-LK": "sp-webpart-shared_en-us.js",
            "en-AE": "sp-webpart-shared_en-us.js",
            "en-VN": "sp-webpart-shared_en-us.js",
            "is": "sp-webpart-shared_en-us.js",
            "km": "sp-webpart-shared_en-us.js",
            "kh": "sp-webpart-shared_en-us.js",
            "mt": "sp-webpart-shared_en-us.js",
            "fa": "sp-webpart-shared_en-us.js",
            "gd": "sp-webpart-shared_en-us.js",
            "sr-Cyrl-BA": "sp-webpart-shared_en-us.js",
            "sr-Latn-BA": "sp-webpart-shared_en-us.js",
            "sd": "sp-webpart-shared_en-us.js",
            "si": "sp-webpart-shared_en-us.js",
            "so": "sp-webpart-shared_en-us.js",
            "ti-ET": "sp-webpart-shared_en-us.js",
            "uz": "sp-webpart-shared_en-us.js",
            "en-SG": "sp-webpart-shared_en-us.js",
            "en-HK": "sp-webpart-shared_en-us.js",
            "en-MY": "sp-webpart-shared_en-us.js",
            "en-PH": "sp-webpart-shared_en-us.js",
            "en-TT": "sp-webpart-shared_en-us.js",
            "en-AZ": "sp-webpart-shared_en-us.js",
            "en-BH": "sp-webpart-shared_en-us.js",
            "en-BN": "sp-webpart-shared_en-us.js",
            "en-ID": "sp-webpart-shared_en-us.js",
            "mi": "sp-webpart-shared_en-us.js"
          },
          "defaultPath": "sp-webpart-shared_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-component-base": {
          "type": "component",
          "id": "467dc675-7cc5-4709-8aac-78e3b71bd2f6",
          "version": "1.12.1"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
          "version": "1.12.1"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "@ms/i18n-utilities": {
          "type": "component",
          "id": "c83d5509-ccd5-4c67-919f-2440f237927a",
          "version": "0.2.231"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0",
          "version": "1.12.1"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "react-dom": {
          "type": "component",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "version": "16.9.0"
        },
        "@ms/sp-component-utilities": {
          "type": "component",
          "id": "8494e7d7-6b99-47b2-a741-59873e42f16f",
          "version": "11.10.1"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@ms/sp-deferred-component": {
          "type": "component",
          "id": "fa4155f6-2498-4a20-8406-5cb3b385b142",
          "version": "0.4.175"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
          "version": "1.12.1"
        },
        "@ms/odsp-utilities-bundle": {
          "type": "component",
          "id": "cc2cc925-b5be-41bb-880a-f0f8030c6aff",
          "version": "5.3.140"
        }
      }
    }
  },
  {
    "id": "3fbad3f4-a628-41b0-8694-2054c09edccd",
    "alias": "SPHtmlEmbed",
    "componentType": "Library",
    "version": "1.0.3",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-html-embed",
      "scriptResources": {
        "sp-html-embed": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-html-embed_default.js",
            "en-US": "sp-html-embed_en-us.js",
            "qps-ploca": "sp-html-embed_qps-ploca.js",
            "qps-ploc": "sp-html-embed_qps-ploc.js",
            "en-GB": "sp-html-embed_en-us.js",
            "en-NZ": "sp-html-embed_en-us.js",
            "en-IE": "sp-html-embed_en-us.js",
            "en-AU": "sp-html-embed_en-us.js",
            "bn": "sp-html-embed_en-us.js",
            "chr": "sp-html-embed_en-us.js",
            "dv": "sp-html-embed_en-us.js",
            "div": "sp-html-embed_en-us.js",
            "en": "sp-html-embed_en-us.js",
            "fil": "sp-html-embed_en-us.js",
            "haw": "sp-html-embed_en-us.js",
            "iu": "sp-html-embed_en-us.js",
            "lo": "sp-html-embed_en-us.js",
            "moh": "sp-html-embed_en-us.js",
            "sq": "sp-html-embed_en-us.js",
            "am": "sp-html-embed_en-us.js",
            "hy": "sp-html-embed_en-us.js",
            "mk": "sp-html-embed_en-us.js",
            "bs": "sp-html-embed_en-us.js",
            "my": "sp-html-embed_en-us.js",
            "dz": "sp-html-embed_en-us.js",
            "en-CY": "sp-html-embed_en-us.js",
            "en-EG": "sp-html-embed_en-us.js",
            "en-IL": "sp-html-embed_en-us.js",
            "en-IS": "sp-html-embed_en-us.js",
            "en-JO": "sp-html-embed_en-us.js",
            "en-KE": "sp-html-embed_en-us.js",
            "en-KW": "sp-html-embed_en-us.js",
            "en-MK": "sp-html-embed_en-us.js",
            "en-MT": "sp-html-embed_en-us.js",
            "en-PK": "sp-html-embed_en-us.js",
            "en-QA": "sp-html-embed_en-us.js",
            "en-SA": "sp-html-embed_en-us.js",
            "en-LK": "sp-html-embed_en-us.js",
            "en-AE": "sp-html-embed_en-us.js",
            "en-VN": "sp-html-embed_en-us.js",
            "is": "sp-html-embed_en-us.js",
            "km": "sp-html-embed_en-us.js",
            "kh": "sp-html-embed_en-us.js",
            "mt": "sp-html-embed_en-us.js",
            "fa": "sp-html-embed_en-us.js",
            "gd": "sp-html-embed_en-us.js",
            "sr-Cyrl-BA": "sp-html-embed_en-us.js",
            "sr-Latn-BA": "sp-html-embed_en-us.js",
            "sd": "sp-html-embed_en-us.js",
            "si": "sp-html-embed_en-us.js",
            "so": "sp-html-embed_en-us.js",
            "ti-ET": "sp-html-embed_en-us.js",
            "uz": "sp-html-embed_en-us.js",
            "en-SG": "sp-html-embed_en-us.js",
            "en-HK": "sp-html-embed_en-us.js",
            "en-MY": "sp-html-embed_en-us.js",
            "en-PH": "sp-html-embed_en-us.js",
            "en-TT": "sp-html-embed_en-us.js",
            "en-AZ": "sp-html-embed_en-us.js",
            "en-BH": "sp-html-embed_en-us.js",
            "en-BN": "sp-html-embed_en-us.js",
            "en-ID": "sp-html-embed_en-us.js",
            "mi": "sp-html-embed_en-us.js"
          },
          "defaultPath": "sp-html-embed_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
          "version": "1.12.1"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@ms/sp-webpart-shared": {
          "type": "component",
          "id": "914330ee-2df2-4f6e-a858-30c23a812408",
          "version": "1.15.53"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "@ms/sp-component-utilities": {
          "type": "component",
          "id": "8494e7d7-6b99-47b2-a741-59873e42f16f",
          "version": "11.10.1"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
          "version": "1.12.1"
        },
        "@ms/odsp-utilities-bundle": {
          "type": "component",
          "id": "cc2cc925-b5be-41bb-880a-f0f8030c6aff",
          "version": "5.3.140"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "f1006a38-983e-4851-ba4a-70a12aaf94b8",
    "alias": "Multilingual",
    "componentType": "Library",
    "version": "0.1.0",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-multilingual",
      "scriptResources": {
        "sp-multilingual": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-multilingual_default.js",
            "en-US": "sp-multilingual_en-us.js",
            "qps-ploca": "sp-multilingual_qps-ploca.js",
            "qps-ploc": "sp-multilingual_qps-ploc.js",
            "en-GB": "sp-multilingual_en-us.js",
            "en-NZ": "sp-multilingual_en-us.js",
            "en-IE": "sp-multilingual_en-us.js",
            "en-AU": "sp-multilingual_en-us.js",
            "bn": "sp-multilingual_en-us.js",
            "chr": "sp-multilingual_en-us.js",
            "dv": "sp-multilingual_en-us.js",
            "div": "sp-multilingual_en-us.js",
            "en": "sp-multilingual_en-us.js",
            "fil": "sp-multilingual_en-us.js",
            "haw": "sp-multilingual_en-us.js",
            "iu": "sp-multilingual_en-us.js",
            "lo": "sp-multilingual_en-us.js",
            "moh": "sp-multilingual_en-us.js",
            "sq": "sp-multilingual_en-us.js",
            "am": "sp-multilingual_en-us.js",
            "hy": "sp-multilingual_en-us.js",
            "mk": "sp-multilingual_en-us.js",
            "bs": "sp-multilingual_en-us.js",
            "my": "sp-multilingual_en-us.js",
            "dz": "sp-multilingual_en-us.js",
            "en-CY": "sp-multilingual_en-us.js",
            "en-EG": "sp-multilingual_en-us.js",
            "en-IL": "sp-multilingual_en-us.js",
            "en-IS": "sp-multilingual_en-us.js",
            "en-JO": "sp-multilingual_en-us.js",
            "en-KE": "sp-multilingual_en-us.js",
            "en-KW": "sp-multilingual_en-us.js",
            "en-MK": "sp-multilingual_en-us.js",
            "en-MT": "sp-multilingual_en-us.js",
            "en-PK": "sp-multilingual_en-us.js",
            "en-QA": "sp-multilingual_en-us.js",
            "en-SA": "sp-multilingual_en-us.js",
            "en-LK": "sp-multilingual_en-us.js",
            "en-AE": "sp-multilingual_en-us.js",
            "en-VN": "sp-multilingual_en-us.js",
            "is": "sp-multilingual_en-us.js",
            "km": "sp-multilingual_en-us.js",
            "kh": "sp-multilingual_en-us.js",
            "mt": "sp-multilingual_en-us.js",
            "fa": "sp-multilingual_en-us.js",
            "gd": "sp-multilingual_en-us.js",
            "sr-Cyrl-BA": "sp-multilingual_en-us.js",
            "sr-Latn-BA": "sp-multilingual_en-us.js",
            "sd": "sp-multilingual_en-us.js",
            "si": "sp-multilingual_en-us.js",
            "so": "sp-multilingual_en-us.js",
            "ti-ET": "sp-multilingual_en-us.js",
            "uz": "sp-multilingual_en-us.js",
            "en-SG": "sp-multilingual_en-us.js",
            "en-HK": "sp-multilingual_en-us.js",
            "en-MY": "sp-multilingual_en-us.js",
            "en-PH": "sp-multilingual_en-us.js",
            "en-TT": "sp-multilingual_en-us.js",
            "en-AZ": "sp-multilingual_en-us.js",
            "en-BH": "sp-multilingual_en-us.js",
            "en-BN": "sp-multilingual_en-us.js",
            "en-ID": "sp-multilingual_en-us.js",
            "mi": "sp-multilingual_en-us.js"
          },
          "defaultPath": "sp-multilingual_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
          "version": "1.12.1"
        },
        "@ms/sp-dataproviders": {
          "type": "component",
          "id": "1cea229f-b208-4202-8014-22503d92a019",
          "version": "0.1.0"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "react-dom": {
          "type": "component",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "version": "16.9.0"
        },
        "@ms/uifabric-styling-bundle": {
          "type": "component",
          "id": "17ce0976-e69a-4355-be84-89b69a74717d",
          "version": "0.1.0"
        },
        "@ms/sp-component-utilities": {
          "type": "component",
          "id": "8494e7d7-6b99-47b2-a741-59873e42f16f",
          "version": "11.10.1"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
          "version": "1.12.1"
        },
        "@ms/odsp-utilities-bundle": {
          "type": "component",
          "id": "cc2cc925-b5be-41bb-880a-f0f8030c6aff",
          "version": "5.3.140"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "1e2cdec9-1360-4295-b73c-98d6f51866d5",
    "alias": "SPPagesCorePreloads",
    "componentType": "Library",
    "version": "0.1.0",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-pages-preloads",
      "scriptResources": {
        "sp-pages-preloads": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-pages-preloads_default.js",
            "en-US": "sp-pages-preloads_en-us.js",
            "qps-ploca": "sp-pages-preloads_qps-ploca.js",
            "qps-ploc": "sp-pages-preloads_qps-ploc.js",
            "en-GB": "sp-pages-preloads_en-us.js",
            "en-NZ": "sp-pages-preloads_en-us.js",
            "en-IE": "sp-pages-preloads_en-us.js",
            "en-AU": "sp-pages-preloads_en-us.js",
            "bn": "sp-pages-preloads_en-us.js",
            "chr": "sp-pages-preloads_en-us.js",
            "dv": "sp-pages-preloads_en-us.js",
            "div": "sp-pages-preloads_en-us.js",
            "en": "sp-pages-preloads_en-us.js",
            "fil": "sp-pages-preloads_en-us.js",
            "haw": "sp-pages-preloads_en-us.js",
            "iu": "sp-pages-preloads_en-us.js",
            "lo": "sp-pages-preloads_en-us.js",
            "moh": "sp-pages-preloads_en-us.js",
            "sq": "sp-pages-preloads_en-us.js",
            "am": "sp-pages-preloads_en-us.js",
            "hy": "sp-pages-preloads_en-us.js",
            "mk": "sp-pages-preloads_en-us.js",
            "bs": "sp-pages-preloads_en-us.js",
            "my": "sp-pages-preloads_en-us.js",
            "dz": "sp-pages-preloads_en-us.js",
            "en-CY": "sp-pages-preloads_en-us.js",
            "en-EG": "sp-pages-preloads_en-us.js",
            "en-IL": "sp-pages-preloads_en-us.js",
            "en-IS": "sp-pages-preloads_en-us.js",
            "en-JO": "sp-pages-preloads_en-us.js",
            "en-KE": "sp-pages-preloads_en-us.js",
            "en-KW": "sp-pages-preloads_en-us.js",
            "en-MK": "sp-pages-preloads_en-us.js",
            "en-MT": "sp-pages-preloads_en-us.js",
            "en-PK": "sp-pages-preloads_en-us.js",
            "en-QA": "sp-pages-preloads_en-us.js",
            "en-SA": "sp-pages-preloads_en-us.js",
            "en-LK": "sp-pages-preloads_en-us.js",
            "en-AE": "sp-pages-preloads_en-us.js",
            "en-VN": "sp-pages-preloads_en-us.js",
            "is": "sp-pages-preloads_en-us.js",
            "km": "sp-pages-preloads_en-us.js",
            "kh": "sp-pages-preloads_en-us.js",
            "mt": "sp-pages-preloads_en-us.js",
            "fa": "sp-pages-preloads_en-us.js",
            "gd": "sp-pages-preloads_en-us.js",
            "sr-Cyrl-BA": "sp-pages-preloads_en-us.js",
            "sr-Latn-BA": "sp-pages-preloads_en-us.js",
            "sd": "sp-pages-preloads_en-us.js",
            "si": "sp-pages-preloads_en-us.js",
            "so": "sp-pages-preloads_en-us.js",
            "ti-ET": "sp-pages-preloads_en-us.js",
            "uz": "sp-pages-preloads_en-us.js",
            "en-SG": "sp-pages-preloads_en-us.js",
            "en-HK": "sp-pages-preloads_en-us.js",
            "en-MY": "sp-pages-preloads_en-us.js",
            "en-PH": "sp-pages-preloads_en-us.js",
            "en-TT": "sp-pages-preloads_en-us.js",
            "en-AZ": "sp-pages-preloads_en-us.js",
            "en-BH": "sp-pages-preloads_en-us.js",
            "en-BN": "sp-pages-preloads_en-us.js",
            "en-ID": "sp-pages-preloads_en-us.js",
            "mi": "sp-pages-preloads_en-us.js"
          },
          "defaultPath": "sp-pages-preloads_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@ms/odsp-core-bundle": {
          "type": "component",
          "id": "2e09fb9b-13bb-48f2-859f-97d6fff71176",
          "version": "1.1.13"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
          "version": "1.12.1"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "@ms/uifabric-styling-bundle": {
          "type": "component",
          "id": "17ce0976-e69a-4355-be84-89b69a74717d",
          "version": "0.1.0"
        },
        "@ms/sp-component-utilities": {
          "type": "component",
          "id": "8494e7d7-6b99-47b2-a741-59873e42f16f",
          "version": "11.10.1"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@ms/odsp-utilities-bundle": {
          "type": "component",
          "id": "cc2cc925-b5be-41bb-880a-f0f8030c6aff",
          "version": "5.3.140"
        }
      }
    }
  },
  {
    "id": "764afdc3-183e-47f5-8d20-a62aff2b0881",
    "alias": "SPPagesCore",
    "componentType": "Library",
    "version": "0.1.0",
    "manifestVersion": 2,
    "preloadComponents": [
      "1e2cdec9-1360-4295-b73c-98d6f51866d5"
    ],
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-pages-core",
      "scriptResources": {
        "sp-pages-core": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-pages-core_default.js",
            "en-US": "sp-pages-core_en-us.js",
            "qps-ploca": "sp-pages-core_qps-ploca.js",
            "qps-ploc": "sp-pages-core_qps-ploc.js",
            "en-GB": "sp-pages-core_en-us.js",
            "en-NZ": "sp-pages-core_en-us.js",
            "en-IE": "sp-pages-core_en-us.js",
            "en-AU": "sp-pages-core_en-us.js",
            "bn": "sp-pages-core_en-us.js",
            "chr": "sp-pages-core_en-us.js",
            "dv": "sp-pages-core_en-us.js",
            "div": "sp-pages-core_en-us.js",
            "en": "sp-pages-core_en-us.js",
            "fil": "sp-pages-core_en-us.js",
            "haw": "sp-pages-core_en-us.js",
            "iu": "sp-pages-core_en-us.js",
            "lo": "sp-pages-core_en-us.js",
            "moh": "sp-pages-core_en-us.js",
            "sq": "sp-pages-core_en-us.js",
            "am": "sp-pages-core_en-us.js",
            "hy": "sp-pages-core_en-us.js",
            "mk": "sp-pages-core_en-us.js",
            "bs": "sp-pages-core_en-us.js",
            "my": "sp-pages-core_en-us.js",
            "dz": "sp-pages-core_en-us.js",
            "en-CY": "sp-pages-core_en-us.js",
            "en-EG": "sp-pages-core_en-us.js",
            "en-IL": "sp-pages-core_en-us.js",
            "en-IS": "sp-pages-core_en-us.js",
            "en-JO": "sp-pages-core_en-us.js",
            "en-KE": "sp-pages-core_en-us.js",
            "en-KW": "sp-pages-core_en-us.js",
            "en-MK": "sp-pages-core_en-us.js",
            "en-MT": "sp-pages-core_en-us.js",
            "en-PK": "sp-pages-core_en-us.js",
            "en-QA": "sp-pages-core_en-us.js",
            "en-SA": "sp-pages-core_en-us.js",
            "en-LK": "sp-pages-core_en-us.js",
            "en-AE": "sp-pages-core_en-us.js",
            "en-VN": "sp-pages-core_en-us.js",
            "is": "sp-pages-core_en-us.js",
            "km": "sp-pages-core_en-us.js",
            "kh": "sp-pages-core_en-us.js",
            "mt": "sp-pages-core_en-us.js",
            "fa": "sp-pages-core_en-us.js",
            "gd": "sp-pages-core_en-us.js",
            "sr-Cyrl-BA": "sp-pages-core_en-us.js",
            "sr-Latn-BA": "sp-pages-core_en-us.js",
            "sd": "sp-pages-core_en-us.js",
            "si": "sp-pages-core_en-us.js",
            "so": "sp-pages-core_en-us.js",
            "ti-ET": "sp-pages-core_en-us.js",
            "uz": "sp-pages-core_en-us.js",
            "en-SG": "sp-pages-core_en-us.js",
            "en-HK": "sp-pages-core_en-us.js",
            "en-MY": "sp-pages-core_en-us.js",
            "en-PH": "sp-pages-core_en-us.js",
            "en-TT": "sp-pages-core_en-us.js",
            "en-AZ": "sp-pages-core_en-us.js",
            "en-BH": "sp-pages-core_en-us.js",
            "en-BN": "sp-pages-core_en-us.js",
            "en-ID": "sp-pages-core_en-us.js",
            "mi": "sp-pages-core_en-us.js"
          },
          "defaultPath": "sp-pages-core_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@ms/sp-suite-nav": {
          "type": "component",
          "id": "f8a8ad94-4cf3-4a19-a76b-1cec9da00219",
          "version": "0.1.0"
        },
        "@microsoft/sp-application-base": {
          "type": "component",
          "id": "4df9bb86-ab0a-4aab-ab5f-48bf167048fb",
          "version": "1.12.1"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@ms/odsp-core-bundle": {
          "type": "component",
          "id": "2e09fb9b-13bb-48f2-859f-97d6fff71176",
          "version": "1.1.13"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
          "version": "1.12.1"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "react-dom": {
          "type": "component",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "version": "16.9.0"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@ms/uifabric-variants-bundle": {
          "type": "component",
          "id": "6ff2150d-f5a7-4af8-a69a-ecf112dc2a90",
          "version": "0.1.0"
        },
        "@ms/odsp-utilities-bundle": {
          "type": "component",
          "id": "cc2cc925-b5be-41bb-880a-f0f8030c6aff",
          "version": "5.3.140"
        },
        "@ms/sp-a11y": {
          "type": "component",
          "id": "05ed6956-59ad-4aa6-9e4e-b832c96ae87b",
          "version": "0.7.17"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "49d290fb-a38e-4001-97d3-a2db486db2fa",
    "alias": "SPTopicShared",
    "componentType": "Library",
    "version": "0.1.0",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-topic-shared",
      "scriptResources": {
        "sp-topic-shared": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-topic-shared_default.js",
            "en-US": "sp-topic-shared_en-us.js",
            "qps-ploca": "sp-topic-shared_qps-ploca.js",
            "qps-ploc": "sp-topic-shared_qps-ploc.js",
            "en-GB": "sp-topic-shared_en-us.js",
            "en-NZ": "sp-topic-shared_en-us.js",
            "en-IE": "sp-topic-shared_en-us.js",
            "en-AU": "sp-topic-shared_en-us.js",
            "bn": "sp-topic-shared_en-us.js",
            "chr": "sp-topic-shared_en-us.js",
            "dv": "sp-topic-shared_en-us.js",
            "div": "sp-topic-shared_en-us.js",
            "en": "sp-topic-shared_en-us.js",
            "fil": "sp-topic-shared_en-us.js",
            "haw": "sp-topic-shared_en-us.js",
            "iu": "sp-topic-shared_en-us.js",
            "lo": "sp-topic-shared_en-us.js",
            "moh": "sp-topic-shared_en-us.js",
            "sq": "sp-topic-shared_en-us.js",
            "am": "sp-topic-shared_en-us.js",
            "hy": "sp-topic-shared_en-us.js",
            "mk": "sp-topic-shared_en-us.js",
            "bs": "sp-topic-shared_en-us.js",
            "my": "sp-topic-shared_en-us.js",
            "dz": "sp-topic-shared_en-us.js",
            "en-CY": "sp-topic-shared_en-us.js",
            "en-EG": "sp-topic-shared_en-us.js",
            "en-IL": "sp-topic-shared_en-us.js",
            "en-IS": "sp-topic-shared_en-us.js",
            "en-JO": "sp-topic-shared_en-us.js",
            "en-KE": "sp-topic-shared_en-us.js",
            "en-KW": "sp-topic-shared_en-us.js",
            "en-MK": "sp-topic-shared_en-us.js",
            "en-MT": "sp-topic-shared_en-us.js",
            "en-PK": "sp-topic-shared_en-us.js",
            "en-QA": "sp-topic-shared_en-us.js",
            "en-SA": "sp-topic-shared_en-us.js",
            "en-LK": "sp-topic-shared_en-us.js",
            "en-AE": "sp-topic-shared_en-us.js",
            "en-VN": "sp-topic-shared_en-us.js",
            "is": "sp-topic-shared_en-us.js",
            "km": "sp-topic-shared_en-us.js",
            "kh": "sp-topic-shared_en-us.js",
            "mt": "sp-topic-shared_en-us.js",
            "fa": "sp-topic-shared_en-us.js",
            "gd": "sp-topic-shared_en-us.js",
            "sr-Cyrl-BA": "sp-topic-shared_en-us.js",
            "sr-Latn-BA": "sp-topic-shared_en-us.js",
            "sd": "sp-topic-shared_en-us.js",
            "si": "sp-topic-shared_en-us.js",
            "so": "sp-topic-shared_en-us.js",
            "ti-ET": "sp-topic-shared_en-us.js",
            "uz": "sp-topic-shared_en-us.js",
            "en-SG": "sp-topic-shared_en-us.js",
            "en-HK": "sp-topic-shared_en-us.js",
            "en-MY": "sp-topic-shared_en-us.js",
            "en-PH": "sp-topic-shared_en-us.js",
            "en-TT": "sp-topic-shared_en-us.js",
            "en-AZ": "sp-topic-shared_en-us.js",
            "en-BH": "sp-topic-shared_en-us.js",
            "en-BN": "sp-topic-shared_en-us.js",
            "en-ID": "sp-topic-shared_en-us.js",
            "mi": "sp-topic-shared_en-us.js"
          },
          "defaultPath": "sp-topic-shared_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
          "version": "1.12.1"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0",
          "version": "1.12.1"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "react-dom": {
          "type": "component",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "version": "16.9.0"
        },
        "@ms/sp-component-utilities": {
          "type": "component",
          "id": "8494e7d7-6b99-47b2-a741-59873e42f16f",
          "version": "11.10.1"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
          "version": "1.12.1"
        },
        "@ms/odsp-utilities-bundle": {
          "type": "component",
          "id": "cc2cc925-b5be-41bb-880a-f0f8030c6aff",
          "version": "5.3.140"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "8404d628-4817-4b3a-883e-1c5a4d07892e",
    "alias": "SPRte",
    "componentType": "Library",
    "version": "1.11.0",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-rte",
      "scriptResources": {
        "sp-rte": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-rte_default.js",
            "en-US": "sp-rte_en-us.js",
            "qps-ploca": "sp-rte_qps-ploca.js",
            "qps-ploc": "sp-rte_qps-ploc.js",
            "en-GB": "sp-rte_en-us.js",
            "en-NZ": "sp-rte_en-us.js",
            "en-IE": "sp-rte_en-us.js",
            "en-AU": "sp-rte_en-us.js",
            "bn": "sp-rte_en-us.js",
            "chr": "sp-rte_en-us.js",
            "dv": "sp-rte_en-us.js",
            "div": "sp-rte_en-us.js",
            "en": "sp-rte_en-us.js",
            "fil": "sp-rte_en-us.js",
            "haw": "sp-rte_en-us.js",
            "iu": "sp-rte_en-us.js",
            "lo": "sp-rte_en-us.js",
            "moh": "sp-rte_en-us.js",
            "sq": "sp-rte_en-us.js",
            "am": "sp-rte_en-us.js",
            "hy": "sp-rte_en-us.js",
            "mk": "sp-rte_en-us.js",
            "bs": "sp-rte_en-us.js",
            "my": "sp-rte_en-us.js",
            "dz": "sp-rte_en-us.js",
            "en-CY": "sp-rte_en-us.js",
            "en-EG": "sp-rte_en-us.js",
            "en-IL": "sp-rte_en-us.js",
            "en-IS": "sp-rte_en-us.js",
            "en-JO": "sp-rte_en-us.js",
            "en-KE": "sp-rte_en-us.js",
            "en-KW": "sp-rte_en-us.js",
            "en-MK": "sp-rte_en-us.js",
            "en-MT": "sp-rte_en-us.js",
            "en-PK": "sp-rte_en-us.js",
            "en-QA": "sp-rte_en-us.js",
            "en-SA": "sp-rte_en-us.js",
            "en-LK": "sp-rte_en-us.js",
            "en-AE": "sp-rte_en-us.js",
            "en-VN": "sp-rte_en-us.js",
            "is": "sp-rte_en-us.js",
            "km": "sp-rte_en-us.js",
            "kh": "sp-rte_en-us.js",
            "mt": "sp-rte_en-us.js",
            "fa": "sp-rte_en-us.js",
            "gd": "sp-rte_en-us.js",
            "sr-Cyrl-BA": "sp-rte_en-us.js",
            "sr-Latn-BA": "sp-rte_en-us.js",
            "sd": "sp-rte_en-us.js",
            "si": "sp-rte_en-us.js",
            "so": "sp-rte_en-us.js",
            "ti-ET": "sp-rte_en-us.js",
            "uz": "sp-rte_en-us.js",
            "en-SG": "sp-rte_en-us.js",
            "en-HK": "sp-rte_en-us.js",
            "en-MY": "sp-rte_en-us.js",
            "en-PH": "sp-rte_en-us.js",
            "en-TT": "sp-rte_en-us.js",
            "en-AZ": "sp-rte_en-us.js",
            "en-BH": "sp-rte_en-us.js",
            "en-BN": "sp-rte_en-us.js",
            "en-ID": "sp-rte_en-us.js",
            "mi": "sp-rte_en-us.js"
          },
          "defaultPath": "sp-rte_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-topic-shared": {
          "type": "component",
          "id": "49d290fb-a38e-4001-97d3-a2db486db2fa",
          "version": "0.1.0"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
          "version": "1.12.1"
        },
        "@ms/sp-safehtml": {
          "type": "component",
          "id": "6d3c733c-8cb7-4871-bb22-b5b37c1d518d",
          "version": "0.2.259"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "@ms/sp-coachmark-utility": {
          "type": "component",
          "id": "6da60671-741f-47c5-b35b-5078edaf312f",
          "version": "0.1.0"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "react-dom": {
          "type": "component",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "version": "16.9.0"
        },
        "@ms/sp-component-utilities": {
          "type": "component",
          "id": "8494e7d7-6b99-47b2-a741-59873e42f16f",
          "version": "11.10.1"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@ms/sp-a11y": {
          "type": "component",
          "id": "05ed6956-59ad-4aa6-9e4e-b832c96ae87b",
          "version": "0.7.17"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "95273007-bacd-4c7c-a52c-fe18c3746a10",
    "alias": "SpCanvasRead",
    "componentType": "Library",
    "version": "0.1.0",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-canvas-read",
      "scriptResources": {
        "sp-canvas-read": {
          "type": "path",
          "path": "sp-canvas-read_none.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-component-base": {
          "type": "component",
          "id": "467dc675-7cc5-4709-8aac-78e3b71bd2f6",
          "version": "1.12.1"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
          "version": "1.12.1"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0",
          "version": "1.12.1"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "react-dom": {
          "type": "component",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "version": "16.9.0"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@ms/sp-deferred-component": {
          "type": "component",
          "id": "fa4155f6-2498-4a20-8406-5cb3b385b142",
          "version": "0.4.175"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@ms/uifabric-variants-bundle": {
          "type": "component",
          "id": "6ff2150d-f5a7-4af8-a69a-ecf112dc2a90",
          "version": "0.1.0"
        },
        "@ms/sp-viewport-loader": {
          "type": "component",
          "id": "5f4cceb9-6310-47e8-85d4-8149fc59b546",
          "version": "0.1.0"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "099b8b60-1a4c-4493-abe7-92219fcf9875",
    "alias": "SpCanvasDiff",
    "componentType": "Library",
    "version": "0.1.0",
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-canvas-diff",
      "scriptResources": {
        "sp-canvas-diff": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-canvas-diff_default.js",
            "en-US": "sp-canvas-diff_en-us.js",
            "qps-ploca": "sp-canvas-diff_qps-ploca.js",
            "qps-ploc": "sp-canvas-diff_qps-ploc.js",
            "en-GB": "sp-canvas-diff_en-us.js",
            "en-NZ": "sp-canvas-diff_en-us.js",
            "en-IE": "sp-canvas-diff_en-us.js",
            "en-AU": "sp-canvas-diff_en-us.js",
            "bn": "sp-canvas-diff_en-us.js",
            "chr": "sp-canvas-diff_en-us.js",
            "dv": "sp-canvas-diff_en-us.js",
            "div": "sp-canvas-diff_en-us.js",
            "en": "sp-canvas-diff_en-us.js",
            "fil": "sp-canvas-diff_en-us.js",
            "haw": "sp-canvas-diff_en-us.js",
            "iu": "sp-canvas-diff_en-us.js",
            "lo": "sp-canvas-diff_en-us.js",
            "moh": "sp-canvas-diff_en-us.js",
            "sq": "sp-canvas-diff_en-us.js",
            "am": "sp-canvas-diff_en-us.js",
            "hy": "sp-canvas-diff_en-us.js",
            "mk": "sp-canvas-diff_en-us.js",
            "bs": "sp-canvas-diff_en-us.js",
            "my": "sp-canvas-diff_en-us.js",
            "dz": "sp-canvas-diff_en-us.js",
            "en-CY": "sp-canvas-diff_en-us.js",
            "en-EG": "sp-canvas-diff_en-us.js",
            "en-IL": "sp-canvas-diff_en-us.js",
            "en-IS": "sp-canvas-diff_en-us.js",
            "en-JO": "sp-canvas-diff_en-us.js",
            "en-KE": "sp-canvas-diff_en-us.js",
            "en-KW": "sp-canvas-diff_en-us.js",
            "en-MK": "sp-canvas-diff_en-us.js",
            "en-MT": "sp-canvas-diff_en-us.js",
            "en-PK": "sp-canvas-diff_en-us.js",
            "en-QA": "sp-canvas-diff_en-us.js",
            "en-SA": "sp-canvas-diff_en-us.js",
            "en-LK": "sp-canvas-diff_en-us.js",
            "en-AE": "sp-canvas-diff_en-us.js",
            "en-VN": "sp-canvas-diff_en-us.js",
            "is": "sp-canvas-diff_en-us.js",
            "km": "sp-canvas-diff_en-us.js",
            "kh": "sp-canvas-diff_en-us.js",
            "mt": "sp-canvas-diff_en-us.js",
            "fa": "sp-canvas-diff_en-us.js",
            "gd": "sp-canvas-diff_en-us.js",
            "sr-Cyrl-BA": "sp-canvas-diff_en-us.js",
            "sr-Latn-BA": "sp-canvas-diff_en-us.js",
            "sd": "sp-canvas-diff_en-us.js",
            "si": "sp-canvas-diff_en-us.js",
            "so": "sp-canvas-diff_en-us.js",
            "ti-ET": "sp-canvas-diff_en-us.js",
            "uz": "sp-canvas-diff_en-us.js",
            "en-SG": "sp-canvas-diff_en-us.js",
            "en-HK": "sp-canvas-diff_en-us.js",
            "en-MY": "sp-canvas-diff_en-us.js",
            "en-PH": "sp-canvas-diff_en-us.js",
            "en-TT": "sp-canvas-diff_en-us.js",
            "en-AZ": "sp-canvas-diff_en-us.js",
            "en-BH": "sp-canvas-diff_en-us.js",
            "en-BN": "sp-canvas-diff_en-us.js",
            "en-ID": "sp-canvas-diff_en-us.js",
            "mi": "sp-canvas-diff_en-us.js"
          },
          "defaultPath": "sp-canvas-diff_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
          "version": "1.12.1"
        },
        "@ms/sp-safehtml": {
          "type": "component",
          "id": "6d3c733c-8cb7-4871-bb22-b5b37c1d518d",
          "version": "0.2.259"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@ms/sp-canvas-read": {
          "type": "component",
          "id": "95273007-bacd-4c7c-a52c-fe18c3746a10",
          "version": "0.1.0"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "id": "f7fa85fe-da91-45cb-9813-5c31106cba7b",
    "alias": "SPDragZone",
    "componentType": "Library",
    "version": "0.1.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-dragzone",
      "scriptResources": {
        "sp-dragzone": {
          "type": "path",
          "path": "sp-dragzone_none.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
          "version": "1.12.1"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        }
      }
    }
  },
  {
    "id": "85093aa7-8c12-4683-91aa-47cd5e2654db",
    "alias": "SPCanvas",
    "componentType": "Library",
    "version": "2.5.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-canvas",
      "scriptResources": {
        "sp-canvas": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-canvas_default.js",
            "en-US": "sp-canvas_en-us.js",
            "qps-ploca": "sp-canvas_qps-ploca.js",
            "qps-ploc": "sp-canvas_qps-ploc.js",
            "en-GB": "sp-canvas_en-us.js",
            "en-NZ": "sp-canvas_en-us.js",
            "en-IE": "sp-canvas_en-us.js",
            "en-AU": "sp-canvas_en-us.js",
            "bn": "sp-canvas_en-us.js",
            "chr": "sp-canvas_en-us.js",
            "dv": "sp-canvas_en-us.js",
            "div": "sp-canvas_en-us.js",
            "en": "sp-canvas_en-us.js",
            "fil": "sp-canvas_en-us.js",
            "haw": "sp-canvas_en-us.js",
            "iu": "sp-canvas_en-us.js",
            "lo": "sp-canvas_en-us.js",
            "moh": "sp-canvas_en-us.js",
            "sq": "sp-canvas_en-us.js",
            "am": "sp-canvas_en-us.js",
            "hy": "sp-canvas_en-us.js",
            "mk": "sp-canvas_en-us.js",
            "bs": "sp-canvas_en-us.js",
            "my": "sp-canvas_en-us.js",
            "dz": "sp-canvas_en-us.js",
            "en-CY": "sp-canvas_en-us.js",
            "en-EG": "sp-canvas_en-us.js",
            "en-IL": "sp-canvas_en-us.js",
            "en-IS": "sp-canvas_en-us.js",
            "en-JO": "sp-canvas_en-us.js",
            "en-KE": "sp-canvas_en-us.js",
            "en-KW": "sp-canvas_en-us.js",
            "en-MK": "sp-canvas_en-us.js",
            "en-MT": "sp-canvas_en-us.js",
            "en-PK": "sp-canvas_en-us.js",
            "en-QA": "sp-canvas_en-us.js",
            "en-SA": "sp-canvas_en-us.js",
            "en-LK": "sp-canvas_en-us.js",
            "en-AE": "sp-canvas_en-us.js",
            "en-VN": "sp-canvas_en-us.js",
            "is": "sp-canvas_en-us.js",
            "km": "sp-canvas_en-us.js",
            "kh": "sp-canvas_en-us.js",
            "mt": "sp-canvas_en-us.js",
            "fa": "sp-canvas_en-us.js",
            "gd": "sp-canvas_en-us.js",
            "sr-Cyrl-BA": "sp-canvas_en-us.js",
            "sr-Latn-BA": "sp-canvas_en-us.js",
            "sd": "sp-canvas_en-us.js",
            "si": "sp-canvas_en-us.js",
            "so": "sp-canvas_en-us.js",
            "ti-ET": "sp-canvas_en-us.js",
            "uz": "sp-canvas_en-us.js",
            "en-SG": "sp-canvas_en-us.js",
            "en-HK": "sp-canvas_en-us.js",
            "en-MY": "sp-canvas_en-us.js",
            "en-PH": "sp-canvas_en-us.js",
            "en-TT": "sp-canvas_en-us.js",
            "en-AZ": "sp-canvas_en-us.js",
            "en-BH": "sp-canvas_en-us.js",
            "en-BN": "sp-canvas_en-us.js",
            "en-ID": "sp-canvas_en-us.js",
            "mi": "sp-canvas_en-us.js"
          },
          "defaultPath": "sp-canvas_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-component-base": {
          "type": "component",
          "id": "467dc675-7cc5-4709-8aac-78e3b71bd2f6",
          "version": "1.12.1"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
          "version": "1.12.1"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0",
          "version": "1.12.1"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "react-dom": {
          "type": "component",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "version": "16.9.0"
        },
        "@ms/sp-component-utilities": {
          "type": "component",
          "id": "8494e7d7-6b99-47b2-a741-59873e42f16f",
          "version": "11.10.1"
        },
        "@ms/sp-dragzone": {
          "type": "component",
          "id": "f7fa85fe-da91-45cb-9813-5c31106cba7b",
          "version": "0.1.0"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@ms/sp-deferred-component": {
          "type": "component",
          "id": "fa4155f6-2498-4a20-8406-5cb3b385b142",
          "version": "0.4.175"
        },
        "@ms/sp-canvas-read": {
          "type": "component",
          "id": "95273007-bacd-4c7c-a52c-fe18c3746a10",
          "version": "0.1.0"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@ms/odsp-utilities-bundle": {
          "type": "component",
          "id": "cc2cc925-b5be-41bb-880a-f0f8030c6aff",
          "version": "5.3.140"
        },
        "@ms/sp-a11y": {
          "type": "component",
          "id": "05ed6956-59ad-4aa6-9e4e-b832c96ae87b",
          "version": "0.7.17"
        },
        "@ms/sp-viewport-loader": {
          "type": "component",
          "id": "5f4cceb9-6310-47e8-85d4-8149fc59b546",
          "version": "0.1.0"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "componentType": "Library",
    "id": "5dae53c4-db1e-4d0b-b8b2-88c874dabf83",
    "alias": "sp-webpart-workbench-assembly",
    "isInternal": true,
    "version": "1.0.0",
    "rootComponentId": "8be81a5c-af38-4bb2-af97-afa3b64dfbed",
    "requiresCustomScript": false,
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-webpart-workbench-assembly",
      "scriptResources": {
        "sp-webpart-workbench-assembly": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-webpart-workbench-assembly_default.js",
            "en-US": "sp-webpart-workbench-assembly_en-us.js",
            "qps-ploca": "sp-webpart-workbench-assembly_qps-ploca.js",
            "qps-ploc": "sp-webpart-workbench-assembly_qps-ploc.js",
            "en-GB": "sp-webpart-workbench-assembly_en-us.js",
            "en-NZ": "sp-webpart-workbench-assembly_en-us.js",
            "en-IE": "sp-webpart-workbench-assembly_en-us.js",
            "en-AU": "sp-webpart-workbench-assembly_en-us.js",
            "bn": "sp-webpart-workbench-assembly_en-us.js",
            "chr": "sp-webpart-workbench-assembly_en-us.js",
            "dv": "sp-webpart-workbench-assembly_en-us.js",
            "div": "sp-webpart-workbench-assembly_en-us.js",
            "en": "sp-webpart-workbench-assembly_en-us.js",
            "fil": "sp-webpart-workbench-assembly_en-us.js",
            "haw": "sp-webpart-workbench-assembly_en-us.js",
            "iu": "sp-webpart-workbench-assembly_en-us.js",
            "lo": "sp-webpart-workbench-assembly_en-us.js",
            "moh": "sp-webpart-workbench-assembly_en-us.js",
            "sq": "sp-webpart-workbench-assembly_en-us.js",
            "am": "sp-webpart-workbench-assembly_en-us.js",
            "hy": "sp-webpart-workbench-assembly_en-us.js",
            "mk": "sp-webpart-workbench-assembly_en-us.js",
            "bs": "sp-webpart-workbench-assembly_en-us.js",
            "my": "sp-webpart-workbench-assembly_en-us.js",
            "dz": "sp-webpart-workbench-assembly_en-us.js",
            "en-CY": "sp-webpart-workbench-assembly_en-us.js",
            "en-EG": "sp-webpart-workbench-assembly_en-us.js",
            "en-IL": "sp-webpart-workbench-assembly_en-us.js",
            "en-IS": "sp-webpart-workbench-assembly_en-us.js",
            "en-JO": "sp-webpart-workbench-assembly_en-us.js",
            "en-KE": "sp-webpart-workbench-assembly_en-us.js",
            "en-KW": "sp-webpart-workbench-assembly_en-us.js",
            "en-MK": "sp-webpart-workbench-assembly_en-us.js",
            "en-MT": "sp-webpart-workbench-assembly_en-us.js",
            "en-PK": "sp-webpart-workbench-assembly_en-us.js",
            "en-QA": "sp-webpart-workbench-assembly_en-us.js",
            "en-SA": "sp-webpart-workbench-assembly_en-us.js",
            "en-LK": "sp-webpart-workbench-assembly_en-us.js",
            "en-AE": "sp-webpart-workbench-assembly_en-us.js",
            "en-VN": "sp-webpart-workbench-assembly_en-us.js",
            "is": "sp-webpart-workbench-assembly_en-us.js",
            "km": "sp-webpart-workbench-assembly_en-us.js",
            "kh": "sp-webpart-workbench-assembly_en-us.js",
            "mt": "sp-webpart-workbench-assembly_en-us.js",
            "fa": "sp-webpart-workbench-assembly_en-us.js",
            "gd": "sp-webpart-workbench-assembly_en-us.js",
            "sr-Cyrl-BA": "sp-webpart-workbench-assembly_en-us.js",
            "sr-Latn-BA": "sp-webpart-workbench-assembly_en-us.js",
            "sd": "sp-webpart-workbench-assembly_en-us.js",
            "si": "sp-webpart-workbench-assembly_en-us.js",
            "so": "sp-webpart-workbench-assembly_en-us.js",
            "ti-ET": "sp-webpart-workbench-assembly_en-us.js",
            "uz": "sp-webpart-workbench-assembly_en-us.js",
            "en-SG": "sp-webpart-workbench-assembly_en-us.js",
            "en-HK": "sp-webpart-workbench-assembly_en-us.js",
            "en-MY": "sp-webpart-workbench-assembly_en-us.js",
            "en-PH": "sp-webpart-workbench-assembly_en-us.js",
            "en-TT": "sp-webpart-workbench-assembly_en-us.js",
            "en-AZ": "sp-webpart-workbench-assembly_en-us.js",
            "en-BH": "sp-webpart-workbench-assembly_en-us.js",
            "en-BN": "sp-webpart-workbench-assembly_en-us.js",
            "en-ID": "sp-webpart-workbench-assembly_en-us.js",
            "mi": "sp-webpart-workbench-assembly_en-us.js"
          },
          "defaultPath": "sp-webpart-workbench-assembly_default.js"
        }
      }
    }
  },
  {
    "id": "8be81a5c-af38-4bb2-af97-afa3b64dfbed",
    "alias": "WebPartWorkbench",
    "componentType": "Application",
    "version": "1.12.1",
    "manifestVersion": 2,
    "title": {
      "default": "WebpartWorkbench"
    },
    "description": {
      "default": "WebpartWorkbench"
    },
    "assemblyId": "5dae53c4-db1e-4d0b-b8b2-88c874dabf83",
    "hasSuiteNav": true,
    "preloadComponents": [],
    "preloadOptions": {
      "shouldPreloadWeb": true,
      "shouldPreloadUser": true,
      "shouldPreloadList": false,
      "shouldPreloadItem": true,
      "shouldPreloadQuickLaunch": true
    },
    "loaderConfig": {
      "internalModuleBaseUrls": [],
      "entryModuleId": "sp-webpart-workbench",
      "scriptResources": {
        "sp-webpart-workbench": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-webpart-workbench_default.js",
            "en-US": "sp-webpart-workbench_en-us.js",
            "qps-ploca": "sp-webpart-workbench_qps-ploca.js",
            "qps-ploc": "sp-webpart-workbench_qps-ploc.js",
            "en-GB": "sp-webpart-workbench_en-us.js",
            "en-NZ": "sp-webpart-workbench_en-us.js",
            "en-IE": "sp-webpart-workbench_en-us.js",
            "en-AU": "sp-webpart-workbench_en-us.js",
            "bn": "sp-webpart-workbench_en-us.js",
            "chr": "sp-webpart-workbench_en-us.js",
            "dv": "sp-webpart-workbench_en-us.js",
            "div": "sp-webpart-workbench_en-us.js",
            "en": "sp-webpart-workbench_en-us.js",
            "fil": "sp-webpart-workbench_en-us.js",
            "haw": "sp-webpart-workbench_en-us.js",
            "iu": "sp-webpart-workbench_en-us.js",
            "lo": "sp-webpart-workbench_en-us.js",
            "moh": "sp-webpart-workbench_en-us.js",
            "sq": "sp-webpart-workbench_en-us.js",
            "am": "sp-webpart-workbench_en-us.js",
            "hy": "sp-webpart-workbench_en-us.js",
            "mk": "sp-webpart-workbench_en-us.js",
            "bs": "sp-webpart-workbench_en-us.js",
            "my": "sp-webpart-workbench_en-us.js",
            "dz": "sp-webpart-workbench_en-us.js",
            "en-CY": "sp-webpart-workbench_en-us.js",
            "en-EG": "sp-webpart-workbench_en-us.js",
            "en-IL": "sp-webpart-workbench_en-us.js",
            "en-IS": "sp-webpart-workbench_en-us.js",
            "en-JO": "sp-webpart-workbench_en-us.js",
            "en-KE": "sp-webpart-workbench_en-us.js",
            "en-KW": "sp-webpart-workbench_en-us.js",
            "en-MK": "sp-webpart-workbench_en-us.js",
            "en-MT": "sp-webpart-workbench_en-us.js",
            "en-PK": "sp-webpart-workbench_en-us.js",
            "en-QA": "sp-webpart-workbench_en-us.js",
            "en-SA": "sp-webpart-workbench_en-us.js",
            "en-LK": "sp-webpart-workbench_en-us.js",
            "en-AE": "sp-webpart-workbench_en-us.js",
            "en-VN": "sp-webpart-workbench_en-us.js",
            "is": "sp-webpart-workbench_en-us.js",
            "km": "sp-webpart-workbench_en-us.js",
            "kh": "sp-webpart-workbench_en-us.js",
            "mt": "sp-webpart-workbench_en-us.js",
            "fa": "sp-webpart-workbench_en-us.js",
            "gd": "sp-webpart-workbench_en-us.js",
            "sr-Cyrl-BA": "sp-webpart-workbench_en-us.js",
            "sr-Latn-BA": "sp-webpart-workbench_en-us.js",
            "sd": "sp-webpart-workbench_en-us.js",
            "si": "sp-webpart-workbench_en-us.js",
            "so": "sp-webpart-workbench_en-us.js",
            "ti-ET": "sp-webpart-workbench_en-us.js",
            "uz": "sp-webpart-workbench_en-us.js",
            "en-SG": "sp-webpart-workbench_en-us.js",
            "en-HK": "sp-webpart-workbench_en-us.js",
            "en-MY": "sp-webpart-workbench_en-us.js",
            "en-PH": "sp-webpart-workbench_en-us.js",
            "en-TT": "sp-webpart-workbench_en-us.js",
            "en-AZ": "sp-webpart-workbench_en-us.js",
            "en-BH": "sp-webpart-workbench_en-us.js",
            "en-BN": "sp-webpart-workbench_en-us.js",
            "en-ID": "sp-webpart-workbench_en-us.js",
            "mi": "sp-webpart-workbench_en-us.js"
          },
          "defaultPath": "sp-webpart-workbench_default.js"
        },
        "@ms/sp-canvas": {
          "type": "component",
          "id": "85093aa7-8c12-4683-91aa-47cd5e2654db",
          "version": "2.5.0"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-application-base": {
          "type": "component",
          "id": "4df9bb86-ab0a-4aab-ab5f-48bf167048fb",
          "version": "1.12.1"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0",
          "version": "1.12.1"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "react-dom": {
          "type": "component",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "version": "16.9.0"
        },
        "@ms/uifabric-styling-bundle": {
          "type": "component",
          "id": "17ce0976-e69a-4355-be84-89b69a74717d",
          "version": "0.1.0"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@ms/sp-canvas-read": {
          "type": "component",
          "id": "95273007-bacd-4c7c-a52c-fe18c3746a10",
          "version": "0.1.0"
        },
        "@ms/sp-a11y": {
          "type": "component",
          "id": "05ed6956-59ad-4aa6-9e4e-b832c96ae87b",
          "version": "0.7.17"
        }
      }
    }
  }
];
/**
 * Get the manifest array.
 */
function getParameterByName(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
function getManifests() {
    // tslint:disable-line:export-name
    // Clone manifestsArray
    var manifests = JSON.parse(JSON.stringify(MANIFESTS_ARRAY));
    var manifestsFileUrl = __webpack_require__.p;
    var selectedLocale = getParameterByName('market') || getParameterByName('locale');
    if (selectedLocale) {
        selectedLocale = selectedLocale.toLowerCase();
    }
    if (!manifestsFileUrl) {
        console.error("Unable to determine " + "manifests.js" + " file URL. Using default base URL. " +
            'This is expected if you are running "gulp serve."');
    }
    for (var _i = 0, manifests_1 = manifests; _i < manifests_1.length; _i++) {
        var manifest = manifests_1[_i];
        if (manifestsFileUrl) {
            if (!manifest.loaderConfig.internalModuleBaseUrls ||
                manifest.loaderConfig.internalModuleBaseUrls.length === 0) {
                manifest.loaderConfig.internalModuleBaseUrls = [manifestsFileUrl];
            }
        }
        if (selectedLocale) {
            // tslint:disable-next-line:forin
            for (var scriptResourceName in manifest.loaderConfig.scriptResources) {
                var scriptResource = manifest.loaderConfig.scriptResources[scriptResourceName];
                if (manifest.loaderConfig.scriptResources.hasOwnProperty(scriptResourceName) &&
                    scriptResource.type === 'localizedPath') {
                    // If this is a localized path resource, and a ?locale= or ?market= query parameter has been specified,
                    // only provide that resource
                    var locResource = scriptResource;
                    if (locResource.paths) {
                        for (var localeName in locResource.paths) {
                            if (locResource.paths.hasOwnProperty(localeName) &&
                                localeName.toLowerCase() === selectedLocale) {
                                locResource.defaultPath = locResource.paths[localeName];
                                delete locResource.paths;
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
    return manifests;
}
//# sourceMappingURL=manifestsFile.js.map

/***/ })
/******/ ]);
});