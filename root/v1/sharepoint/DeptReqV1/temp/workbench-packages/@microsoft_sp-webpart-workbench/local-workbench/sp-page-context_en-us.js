define("1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8_1.12.1", ["@microsoft/sp-dynamic-data","@microsoft/sp-core-library","@microsoft/sp-diagnostics"], function(__WEBPACK_EXTERNAL_MODULE__84nK__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_ut3N__) { return /******/ (function(modules) { // webpackBootstrap
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

/***/ "6ZP6":
/*!***********************!*\
  !*** ./lib/SPUser.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SPTimeZone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SPTimeZone */ "PL7Z");

/**
 * This class is primarily used with the `PageContext` class.  It provides contextual information
 * for the SharePoint user that is accessing the page.
 *
 * @public
 */
var SPUser = /** @class */ (function () {
    /**
     * @internal
     */
    function SPUser(data) {
        this.displayName = data.displayName || '';
        this.email = data.email || '';
        this.isAnonymousGuestUser = data.isAnonymousGuestUser;
        this.isExternalGuestUser = data.isExternalGuestUser;
        this.loginName = data.loginName || '';
        // Remove the or statement when changes reach Prod everywhere.
        this.preferUserTimeZone = data.preferUserTimeZone || false;
        this.timeZoneInfo = data.timeZoneInfo ? new _SPTimeZone__WEBPACK_IMPORTED_MODULE_0__["default"](data.timeZoneInfo) : undefined;
        this.firstDayOfWeek = data.firstDayOfWeek;
    }
    return SPUser;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPUser);


/***/ }),

/***/ "84nK":
/*!*********************************************!*\
  !*** external "@microsoft/sp-dynamic-data" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__84nK__;

/***/ }),

/***/ "CRGG":
/*!***********************!*\
  !*** ./lib/SPList.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SPPermission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SPPermission */ "W9Pz");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);


/**
 * This class is primarily used with the `PageContext` class.  It provides contextual
 * information for the SharePoint list that hosts the page.
 *
 * @public
 */
var SPList = /** @class */ (function () {
    /**
     * @internal
     */
    function SPList(data) {
        this.id = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].parse(data.id);
        this.permissions = new _SPPermission__WEBPACK_IMPORTED_MODULE_0__["default"](data.permissions);
        this.serverRelativeUrl = data.serverRelativeUrl;
        this.title = data.title;
    }
    return SPList;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPList);


/***/ }),

/***/ "GLAT":
/*!*************************************!*\
  !*** ./lib/O365GroupAssociation.js ***!
  \*************************************/
/*! exports provided: O365GroupAssociationType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O365GroupAssociationType", function() { return O365GroupAssociationType; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

/**
 * {@inheritDoc  O365GroupAssociation."type"}
 * @alpha
 */
var O365GroupAssociationType;
(function (O365GroupAssociationType) {
    O365GroupAssociationType[O365GroupAssociationType["Unknown"] = 0] = "Unknown";
    O365GroupAssociationType[O365GroupAssociationType["Private"] = 1] = "Private";
    O365GroupAssociationType[O365GroupAssociationType["Public"] = 2] = "Public";
})(O365GroupAssociationType || (O365GroupAssociationType = {}));
/**
 * This class is primarily used with the `PageContext` class. If the site is associated with an O365
 * group, this object provides contextual information about the group.
 *
 * @alpha
 */
var O365GroupAssociation = /** @class */ (function () {
    /**
     * @internal
     */
    function O365GroupAssociation(data) {
        this.id = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(data.id);
        switch (data.type) {
            case 'Private':
                this.type = O365GroupAssociationType.Private;
                break;
            case 'Public':
                this.type = O365GroupAssociationType.Public;
                break;
            default:
                this.type = O365GroupAssociationType.Unknown;
                break;
        }
    }
    return O365GroupAssociation;
}());
/* harmony default export */ __webpack_exports__["default"] = (O365GroupAssociation);


/***/ }),

/***/ "GPn3":
/*!***************************!*\
  !*** ./lib/SPListItem.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This class is primarily used with the `PageContext` class.  It provides contextual
 * information for the SharePoint list item that hosts the page.
 *
 * @public
 */
var SPListItem = /** @class */ (function () {
    /**
     * @internal
     */
    function SPListItem(data) {
        this.id = data.id;
    }
    return SPListItem;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPListItem);


/***/ }),

/***/ "JRdv":
/*!**************************************************************!*\
  !*** ./lib/pageManager/SharePointPageContextDataProvider.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
  * The page context represents contextual information about the SharePoint page that
  * is currently being viewed, such as its site URL, the client-side application ID,
  * the current user, etc.  The page context objects themselves represent key information
  * that is needed e.g. to identify the site/web/list/listitem in a REST service call,
  * but it is not a full cache with invalidation and change notifications.

  * @alpha
  */
var SharePointPageContextDataProvider = /** @class */ (function () {
    function SharePointPageContextDataProvider() {
    }
    /**
     * Populates the webPart pageContext using the data from the app Page Context. AppPageContext
     * must be populated already.
     * @internal
     */
    SharePointPageContextDataProvider._createPageContextData = function (spPageContextInfo) {
        var pageContextData = {
            aadInfo: !!spPageContextInfo.aadInstanceUrl && !!spPageContextInfo.aadTenantId && !!spPageContextInfo.aadUserId
                ? {
                    instanceUrl: spPageContextInfo.aadInstanceUrl,
                    tenantId: spPageContextInfo.aadTenantId,
                    userId: spPageContextInfo.aadUserId
                }
                : undefined,
            cultureInfo: {
                currentCultureName: spPageContextInfo.currentCultureName,
                currentUICultureName: spPageContextInfo.currentUICultureName,
                isRightToLeft: document.documentElement.dir === 'rtl' ? true : false
            },
            list: spPageContextInfo.listId && spPageContextInfo.listId !== ''
                ? {
                    baseTemplate: spPageContextInfo.listBaseTemplate,
                    id: spPageContextInfo.listId,
                    permissions: spPageContextInfo.listPermsMask,
                    serverRelativeUrl: spPageContextInfo.listUrl,
                    title: spPageContextInfo.listTitle
                }
                : undefined,
            listItem: spPageContextInfo.pageItemId && spPageContextInfo.pageItemId !== -1
                ? {
                    id: spPageContextInfo.pageItemId
                }
                : undefined,
            page: spPageContextInfo.socialBarEnabled
                ? {
                    socialBarEnabled: spPageContextInfo.socialBarEnabled
                }
                : {},
            site: {
                absoluteUrl: spPageContextInfo.siteAbsoluteUrl,
                cdnPrefix: spPageContextInfo.cdnPrefix,
                classification: spPageContextInfo.siteClassification,
                correlationId: spPageContextInfo.CorrelationId,
                group: spPageContextInfo.groupId && spPageContextInfo.groupId !== ''
                    ? {
                        id: spPageContextInfo.groupId,
                        type: spPageContextInfo.groupType
                    }
                    : undefined,
                id: spPageContextInfo.siteId,
                isNoScriptEnabled: spPageContextInfo.isNoScriptEnabled,
                recycleBinItemCount: spPageContextInfo.RecycleBinItemCount,
                serverRelativeUrl: spPageContextInfo.siteServerRelativeUrl,
                serverRequestPath: spPageContextInfo.serverRequestPath,
                sitePagesEnabled: spPageContextInfo.sitePagesEnabled
            },
            user: {
                isAnonymousGuestUser: spPageContextInfo.isAnonymousGuestUser,
                isExternalGuestUser: spPageContextInfo.isExternalGuestUser,
                displayName: spPageContextInfo.userDisplayName,
                email: spPageContextInfo.userEmail,
                loginName: spPageContextInfo.userLoginName,
                preferUserTimeZone: spPageContextInfo.preferUserTimeZone,
                timeZoneInfo: spPageContextInfo.userTimeZoneData
                    ? {
                        daylightDate: spPageContextInfo.userTimeZoneData.DaylightDate,
                        daylightOffset: spPageContextInfo.userTimeZoneData.DaylightBias,
                        description: spPageContextInfo.userTimeZoneData.Description,
                        id: spPageContextInfo.userTimeZoneData.Id,
                        offset: spPageContextInfo.userTimeZoneData.Bias,
                        standardDate: spPageContextInfo.userTimeZoneData.StandardDate,
                        standardOffset: spPageContextInfo.userTimeZoneData.StandardBias
                    }
                    : undefined,
                // Server returns null if firstDayOfWeek setting is not configured or user doesn't have permission to access.
                firstDayOfWeek: spPageContextInfo.userFirstDayOfWeek || undefined
            },
            web: {
                absoluteUrl: spPageContextInfo.webAbsoluteUrl,
                id: spPageContextInfo.webId,
                isAppWeb: spPageContextInfo.isAppWeb,
                language: spPageContextInfo.webLanguage,
                languageName: spPageContextInfo.webLanguageName,
                logoUrl: spPageContextInfo.webLogoUrl,
                permissions: spPageContextInfo.webPermMasks,
                serverRelativeUrl: spPageContextInfo.webServerRelativeUrl,
                templateName: spPageContextInfo.webTemplate,
                description: spPageContextInfo.webDescription,
                timeZoneInfo: spPageContextInfo.webTimeZoneData
                    ? {
                        daylightDate: spPageContextInfo.webTimeZoneData.DaylightDate,
                        daylightOffset: spPageContextInfo.webTimeZoneData.DaylightBias,
                        description: spPageContextInfo.webTimeZoneData.Description,
                        id: spPageContextInfo.webTimeZoneData.Id,
                        offset: spPageContextInfo.webTimeZoneData.Bias,
                        standardDate: spPageContextInfo.webTimeZoneData.StandardDate,
                        standardOffset: spPageContextInfo.webTimeZoneData.StandardBias
                    }
                    : undefined,
                // Server returns null if firstDayOfWeek setting is not configured or user doesn't have permission to access.
                firstDayOfWeek: spPageContextInfo.webFirstDayOfWeek || undefined,
                title: spPageContextInfo.webTitle
            },
            featureInfo: spPageContextInfo.featureInfo
        };
        pageContextData.site.sitePagesFeatureVersion = spPageContextInfo.sitePagesFeatureVersion;
        return pageContextData;
    };
    return SharePointPageContextDataProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (SharePointPageContextDataProvider);


/***/ }),

/***/ "JhOW":
/*!************************!*\
  !*** ./lib/SPField.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A field represents the data model for a column in SharePoint list view.
 * @remarks
 *
 * This is the client-side equivalent for SharePoint `SPField` class. It is used with the
 * `@microsoft/sp-listview-extensibility` package.
 *
 * @public
 */
var SPField = /** @class */ (function () {
    /**
     * @internal
     */
    function SPField(data) {
        this.id = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(data.id);
        this.internalName = data.internalName || '';
        this.fieldType = data.fieldType || '';
        this.isRequired = data.isRequired;
        this.displayName = data.displayName || '';
        this.clientSideComponentId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(data.clientSideComponentId);
        this.clientSideComponentProperties = data.clientSideComponentProperties || '';
    }
    return SPField;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPField);


/***/ }),

/***/ "L14d":
/*!****************************!*\
  !*** ./lib/CultureInfo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This class is primarily used with the `PageContext` class.  It provides culture info
 * for the current user of the application.
 *
 * @public
 */
var CultureInfo = /** @class */ (function () {
    /**
     * @internal
     */
    function CultureInfo(data) {
        this.currentCultureName = data.currentCultureName;
        this.currentUICultureName = data.currentUICultureName;
        this.isRightToLeft = data.isRightToLeft;
    }
    return CultureInfo;
}());
/* harmony default export */ __webpack_exports__["default"] = (CultureInfo);


/***/ }),

/***/ "PL7Z":
/*!***************************!*\
  !*** ./lib/SPTimeZone.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * It provides timezone information from SharePoint. A conversion from UTC to local
 * time can be calculated by using the following formula.
 *
 * @remarks
 *
 * ```
 * isDaylightSavingsTime = isCurrentDate after DaylightSavingsDate but before the StandardDate
 * LocalTime = UTCTime - Offset - (isDaylightSavingsTime ? daylightOffset : standardOffset)
 * June 11, 2 A.M. PST = June 11, 9 A.M. - (480 minutes) - (-60  minutes)
 * ```
 *
 * @beta
 */
var SPTimeZone = /** @class */ (function () {
    /**
     * @internal
     */
    function SPTimeZone(data) {
        this.daylightDate = data.daylightDate;
        this.daylightOffset = data.daylightOffset;
        this.description = data.description;
        this.id = data.id;
        this.offset = data.offset;
        this.standardDate = data.standardDate;
        this.standardOffset = data.standardOffset;
    }
    return SPTimeZone;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPTimeZone);


/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "W9Pz":
/*!*****************************!*\
  !*** ./lib/SPPermission.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Used to test whether the current user has a requested set of permissions.
 *
 * @remarks
 *
 * Specifies the built-in permissions available in SharePoint Foundation
 *
 * For more information, see:
 * {@link https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spbasepermissions.aspx}
 *
 * @public
 */
var SPPermission = /** @class */ (function () {
    function SPPermission(value) {
        if (!value || value.High === undefined || value.Low === undefined) {
            throw new Error('Must use an object with a Low and High number value');
        }
        this._value = value;
    }
    Object.defineProperty(SPPermission.prototype, "value", {
        /**
         * Returns the value of this SPPermission object
         */
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Function for testing whether a given permission mask has any of the requested permissions.
     * @param requestedPerms - Any number of SPPermission objects to be compared against the original
     */
    SPPermission.prototype.hasAnyPermissions = function () {
        var _this = this;
        var requestedPerms = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            requestedPerms[_i] = arguments[_i];
        }
        return (requestedPerms || []).some(function (permission) {
            return _this.hasPermission(permission);
        });
    };
    /**
     * Function for testing whether a given permission mask has all of the requested permissions.
     * @param requestedPerms - Any number of SPPermission objects to be compared against the original
     */
    SPPermission.prototype.hasAllPermissions = function () {
        var _this = this;
        var requestedPerms = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            requestedPerms[_i] = arguments[_i];
        }
        return (requestedPerms || []).every(function (permission) {
            return _this.hasPermission(permission);
        });
    };
    /**
     * Function for testing whether a given permission mask has the requested permission.
     * @param requestedPerm - The SPPermission object to be compared against the original
     */
    SPPermission.prototype.hasPermission = function (requestedPerm) {
        /* tslint:disable:no-bitwise */
        return (requestedPerm &&
            (requestedPerm.value.Low & this.value.Low) === requestedPerm.value.Low &&
            (requestedPerm.value.High & this.value.High) === requestedPerm.value.High);
        /* tslint:enable:no-bitwise */
    };
    /**
     * Has no permissions on the Web site. Not available through the user interface.
     */
    SPPermission.emptyMask = new SPPermission({ High: 0x0, Low: 0x0 });
    // list/document perms  =0x000000000000XXXX
    /**
     * View items in lists, documents in document libraries, and view Web discussion comments.
     */
    SPPermission.viewListItems = new SPPermission({ High: 0x0, Low: 0x1 });
    /**
     * Add items to lists, add documents to document libraries, and add Web discussion comments.
     */
    SPPermission.addListItems = new SPPermission({ High: 0x0, Low: 0x2 });
    /**
     * Edit items in lists, edit documents in document libraries, edit Web discussion comments in documents,
     * and customize web part Pages in document libraries.
     */
    SPPermission.editListItems = new SPPermission({ High: 0x0, Low: 0x4 });
    /**
     * Delete items from a list, documents from a document library, and Web discussion comments in documents.
     */
    SPPermission.deleteListItems = new SPPermission({ High: 0x0, Low: 0x8 });
    /**
     * Approve a minor version of a list item or document.
     */
    SPPermission.approveItems = new SPPermission({ High: 0x0, Low: 0x10 });
    /**
     * View the source of documents with server-side file handlers.
     */
    SPPermission.openItems = new SPPermission({ High: 0x0, Low: 0x20 });
    /**
     * View past versions of a list item or document.
     */
    SPPermission.viewVersions = new SPPermission({ High: 0x0, Low: 0x40 });
    /**
     * Delete past versions of a list item or document.
     */
    SPPermission.deleteVersions = new SPPermission({ High: 0x0, Low: 0x80 });
    /**
     * Discard or check in a document which is checked out to another user.
     */
    SPPermission.cancelCheckout = new SPPermission({ High: 0x0, Low: 0x100 });
    /**
     * Create, change, and delete personal views of lists.
     */
    SPPermission.managePersonalViews = new SPPermission({ High: 0x0, Low: 0x200 });
    /**
     * Create and delete lists, add or remove columns in a list, and add or remove public views of a list.
     */
    SPPermission.manageLists = new SPPermission({ High: 0x0, Low: 0x800 });
    /**
     * View forms, views, and application pages, and enumerate lists.
     */
    SPPermission.viewFormPages = new SPPermission({ High: 0x0, Low: 0x1000 });
    // web level perms      =0x0000XXXXXXXX0000,
    /**
     * Allow users to open a Web site, list, or folder to access items inside that container.
     */
    SPPermission.open = new SPPermission({ High: 0x0, Low: 0x20000 });
    /**
     * View pages in a Web site.
     */
    SPPermission.viewPages = new SPPermission({ High: 0x0, Low: 0x20000 });
    /**
     * View the layouts page?
     */
    SPPermission.layoutsPage = new SPPermission({ High: 0x0, Low: 0x21000 });
    /**
     * Add, change, or delete HTML pages or web part Pages, and edit the Web site using a SharePoint
     * Foundation–compatible editor.
     */
    SPPermission.addAndCustomizePages = new SPPermission({ High: 0x0, Low: 0x40000 });
    /**
     * Apply a theme or borders to the entire Web site.
     */
    SPPermission.applyThemeAndBorder = new SPPermission({ High: 0x0, Low: 0x80000 });
    /**
     * Apply a style sheet (.css file) to the Web site.
     */
    SPPermission.applyStyleSheets = new SPPermission({ High: 0x0, Low: 0x100000 });
    /**
     * View reports on Web site usage.
     */
    SPPermission.viewUsageData = new SPPermission({ High: 0x0, Low: 0x200000 });
    /**
     * Create a Web site using Self-Service Site Creation.
     */
    SPPermission.createSSCSite = new SPPermission({ High: 0x0, Low: 0x400000 });
    /**
     * Create subsites such as team sites, Meeting Workspace sites, and Document Workspace sites.
     */
    SPPermission.manageSubwebs = new SPPermission({ High: 0x0, Low: 0x800000 });
    /**
     * Create a group of users that can be used anywhere within the site collection.
     */
    SPPermission.createGroups = new SPPermission({ High: 0x0, Low: 0x1000000 });
    /**
     * Create and change permission levels on the Web site and assign permissions to users and groups.
     */
    SPPermission.managePermissions = new SPPermission({ High: 0x0, Low: 0x2000000 });
    /**
     * Enumerate files and folders in a Web site using Microsoft Office SharePoint Designer 2007 and WebDAV interfaces.
     */
    SPPermission.browseDirectories = new SPPermission({ High: 0x0, Low: 0x4000000 });
    /**
     * View information about users of the Web site.
     */
    SPPermission.browserUserInfo = new SPPermission({ High: 0x0, Low: 0x8000000 });
    /**
     * Add or remove personal web parts on a web part Page.
     */
    SPPermission.addDelPrivateWebParts = new SPPermission({
        High: 0x0,
        Low: 0x10000000
    });
    /**
     * Update web parts to display personalized information.
     */
    SPPermission.updatePersonalWebParts = new SPPermission({
        High: 0x0,
        Low: 0x20000000
    });
    /**
     * Grant the ability to perform all administration tasks for the Web site as well as manage content.
     *
     * @remarks
     * Activate, deactivate, or edit properties of Web site scoped Features through the object model or
     * through the user interface (UI). When granted on the root Web site of a site collection, activate,
     * deactivate, or edit properties of site collection scoped Features through the object model. To
     * browse to the Site Collection Features page and activate or deactivate site collection scoped
     * Features through the UI, you must be a site collection administrator.
     */
    SPPermission.manageWeb = new SPPermission({ High: 0x0, Low: 0x40000000 });
    /**
     * Use features that launch client applications; otherwise, users must work on documents locally and upload changes.
     */
    SPPermission.useClientIntegration = new SPPermission({ High: 0x10, Low: 0x0 });
    /**
     * Use SOAP, WebDAV, or Microsoft Office SharePoint Designer 2007 interfaces to access the Web site.
     */
    SPPermission.useRemoteAPIs = new SPPermission({ High: 0x20, Low: 0x0 });
    /**
     * Manage alerts for all users of the Web site.
     */
    SPPermission.manageAlerts = new SPPermission({ High: 0x40, Low: 0x0 });
    /**
     * Create e-mail alerts.
     */
    SPPermission.createAlerts = new SPPermission({ High: 0x80, Low: 0x0 });
    /**
     * Allows a user to change his or her user information, such as adding a picture.
     */
    SPPermission.editMyUserInfo = new SPPermission({ High: 0x100, Low: 0x0 });
    /**
     * Enumerate permissions on the Web site, list, folder, document, or list item.
     */
    SPPermission.enumeratePermissions = new SPPermission({
        High: 0x40000000,
        Low: 0x0
    });
    /**
     * Has all permissions on the Web site. Not available through the user interface.
     */
    SPPermission.fullMask = new SPPermission({ High: 0x7fffffff, Low: 0xffffffff });
    return SPPermission;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPPermission);


/***/ }),

/***/ "ZcDP":
/*!*****************************************!*\
  !*** ./lib/AzureActiveDirectoryInfo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

/**
 * This class is primarily used with the `PageContext` class. It provides information
 * useful for communicating with Azure Active Directory.
 *
 * @alpha
 */
var AzureActiveDirectoryInfo = /** @class */ (function () {
    /**
     * @internal
     */
    function AzureActiveDirectoryInfo(data) {
        this.instanceUrl = data.instanceUrl ? data.instanceUrl : '';
        this.tenantId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(data.tenantId);
        this.userId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(data.userId);
    }
    return AzureActiveDirectoryInfo;
}());
/* harmony default export */ __webpack_exports__["default"] = (AzureActiveDirectoryInfo);


/***/ }),

/***/ "cnM3":
/*!*********************!*\
  !*** ./lib/Page.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Exposes information that is associated with the SharePoint web page that is currently being displayed.
 *
 * @remarks
 * The Page object provides access to information that is scoped to the current SharePoint web page, but not
 * stored with the underlying SPListItem. Note that the {@link PageContext.listItem} may be undefined for
 * pages that are not based on a SharePoint list, whereas the PageContext.page will never be undefined.
 *
 * The concept of a "page" is subjective and defined by the router for a particular client-side application.
 *
 * @alpha
 */
var Page = /** @class */ (function () {
    /**
     * @internal
     */
    function Page(data) {
        this.socialBarEnabled = data.socialBarEnabled || false;
    }
    return Page;
}());
/* harmony default export */ __webpack_exports__["default"] = (Page);


/***/ }),

/***/ "ed5A":
/*!****************************!*\
  !*** ./lib/PageContext.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_dynamic_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-dynamic-data */ "84nK");
/* harmony import */ var _microsoft_sp_dynamic_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_dynamic_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AzureActiveDirectoryInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AzureActiveDirectoryInfo */ "ZcDP");
/* harmony import */ var _CultureInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CultureInfo */ "L14d");
/* harmony import */ var _SPFeatureInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SPFeatureInfo */ "x7V9");
/* harmony import */ var _SPList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SPList */ "CRGG");
/* harmony import */ var _SPListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SPListItem */ "GPn3");
/* harmony import */ var _SPSite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SPSite */ "qdg7");
/* harmony import */ var _SPUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SPUser */ "6ZP6");
/* harmony import */ var _SPWeb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SPWeb */ "swVP");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loc/Strings.resx */ "mGD9");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "mGD9", 1);












/**
 * The SharePoint page context object.
 *
 * @remarks
 * The page context provides standard definitions for common SharePoint objects
 * that need to be shared between the client-side application, web parts, and other
 * components.  Typically the data is fetched via REST queries when navigating to a
 * new page, but it can also be preloaded by the web server, or filled from a custom
 * application cache.

 * @public
 */
var PageContext = /** @class */ (function () {
    function PageContext(serviceScope) {
        var _this = this;
        this._isInitialized = false;
        this._serviceScope = serviceScope;
        this._serviceScope.whenFinished(function () {
            // Create the page context data source:
            // Note that the Initialize function is called multiple times, and each time
            // we mark the datasource as having changed.
            _this._pageContextDataSource = new _microsoft_sp_dynamic_data__WEBPACK_IMPORTED_MODULE_2__["_PageContextDataSource"](serviceScope);
            _this._pageContextDataSource.addPropertyHandler({
                id: PageContext._pageContextInfoId,
                dynamicDataFunctions: {
                    getPropertyDefinitions: _this._getPropertyDefinitions.bind(_this),
                    getPropertyValue: _this._getPropertyValue.bind(_this),
                    getAnnotatedPropertyValue: _this._getAnnotatedPropertyValue.bind(_this),
                    allowedEvents: function () {
                        return [];
                    }
                }
            });
        });
        this._getPropertyValue = this._getPropertyValue.bind(this);
    }
    /**
     * Initializes the Page Context.
     * @internal
     */
    // tslint:disable-next-line:no-any
    PageContext.prototype.initialize = function (options, legacyPageContext) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(options, 'options');
        try {
            this._aadInfo = options.aadInfo ? new _AzureActiveDirectoryInfo__WEBPACK_IMPORTED_MODULE_3__["default"](options.aadInfo) : undefined;
            this._cultureInfo = new _CultureInfo__WEBPACK_IMPORTED_MODULE_4__["default"](options.cultureInfo);
            this._list = options.list ? new _SPList__WEBPACK_IMPORTED_MODULE_6__["default"](options.list) : undefined;
            this._listItem = options.listItem ? new _SPListItem__WEBPACK_IMPORTED_MODULE_7__["default"](options.listItem) : undefined;
            this._site = new _SPSite__WEBPACK_IMPORTED_MODULE_8__["default"](options.site);
            this._user = new _SPUser__WEBPACK_IMPORTED_MODULE_9__["default"](options.user);
            this._web = new _SPWeb__WEBPACK_IMPORTED_MODULE_10__["default"](options.web);
            this._spFeatureInfo = new _SPFeatureInfo__WEBPACK_IMPORTED_MODULE_5__["default"](options.featureInfo);
            this._legacyPageContext = legacyPageContext;
        }
        catch (e) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(PageContext._logSource, e, 'initialize');
            throw e;
        }
        this._serviceScope.whenFinished(function () {
            // The datasource was initialized in the constructor because this initialize method is
            // called numerous times.
            _this._pageContextDataSource.notifyPropertyChanged(PageContext._pageContextUserDynamicProperty);
            _this._pageContextDataSource.notifyPropertyChanged(PageContext._pageContextSiteDataDynamicProperty);
            _this._pageContextDataSource.notifyPropertyChanged(PageContext._pageContextUserDynamicProperty);
        });
        this._isInitialized = true;
    };
    /**
     * Sets the search query value for the page context dynamic data.
     * Updating the value triggers a notification to dynamic data consumers for that property.
     *
     * @param searchQuery - Search query to set.
     * @internal
     */
    PageContext.prototype._setSearchQuery = function (searchQuery) {
        // If the value is the same, do not update. This avoids unnecessary callbacks for the same value.
        if (this._isSearchDynamicDataEnabled() && this._searchQuery !== searchQuery) {
            this._searchQuery = searchQuery;
            this._pageContextDataSource.notifyPropertyChanged(PageContext._pageContextSearchDataDynamicProperty);
        }
    };
    Object.defineProperty(PageContext.prototype, "aadInfo", {
        /**
         * Contextual information for communicating with Azure Active Directory.
         * If the current page doesn't have an associated Azure Active Directory tenant, this
         * property will be undefined.
         */
        get: function () {
            return this._aadInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageContext.prototype, "cultureInfo", {
        /**
         * It provides culture info for the current user of the application.
         * This class is primarily used with the `PageContext` class.
         */
        get: function () {
            return this._cultureInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageContext.prototype, "list", {
        /**
         * Contextual information for the SharePoint list that is hosting the page.
         * If there is no list associated to the current page, this property will be undefined.
         */
        get: function () {
            return this._list;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageContext.prototype, "listItem", {
        /**
         * Contextual information for the SharePoint list item that is hosting the page.
         * If there is no list item associated to the current page, this property will be undefined.
         */
        get: function () {
            return this._listItem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageContext.prototype, "page", {
        /**
         * Exposes information that is associated with the SharePoint web page that is currently being displayed.
         * @alpha
         */
        get: function () {
            return this._page;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageContext.prototype, "site", {
        /**
         * Contextual information for the SharePoint site collection ("SPSite") that is hosting the page.
         */
        get: function () {
            return this._site;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageContext.prototype, "user", {
        /**
         * It provides contextual information for the SharePoint user that is accessing the page.
         * This class is primarily used with the `PageContext` class.
         */
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageContext.prototype, "web", {
        /**
         * Contextual information for the SharePoint site ("SPWeb") that is hosting the page.
         */
        get: function () {
            return this._web;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageContext.prototype, "_featureInfo", {
        /**
         * Contextual information for the features that are enabled on the SharePoint site
         * that is hosting the page.
         * @internal
         */
        get: function () {
            return this._spFeatureInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageContext.prototype, "legacyPageContext", {
        /**
         * An object providing classic SharePoint properties that may be required by certain legacy scripts.
         *
         * @remarks
         * This property is provided to facilitate migration of legacy code. It returns a JavaScript
         * object whose contents are similar to the `_spPageContextInfo` window variable from classic pages.
         * The contents of this variable may change in future releases of SharePoint.  For this reason,
         * new projects are encouraged to use the SharePoint Framework TypeScript APIs instead, since they
         * are fully documented and provide reliable backwards compatibility guarantees.
         *
         * NOTE: If certain functionality is exposed in the `legacyPageContext` but does not seem to have
         * a proper TypeScript API, please file an issue on GitHub.  The intention is that no modern application
         * should need to rely on the `legacyPageContext` object.
         */
        // tslint:disable-next-line:no-any
        get: function () {
            return this._legacyPageContext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageContext.prototype, "isInitialized", {
        /**
         * Returns whether the `PageContext` has been initialized.
         */
        get: function () {
            return this._isInitialized;
        },
        enumerable: false,
        configurable: true
    });
    PageContext.prototype._getPropertyDefinitions = function () {
        var properties = [
            {
                id: PageContext._pageContextSiteDataDynamicProperty,
                title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddpSiteDataTitle"]
            },
            {
                id: PageContext._pageContextUserDynamicProperty,
                title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddpUserDataTitle"]
            },
            {
                id: PageContext._pageContextUrlDataDynamicProperty,
                title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddpUrlDataTitle"]
            }
        ];
        if (this._isSearchDynamicDataEnabled()) {
            properties.push({
                id: PageContext._pageContextSearchDataDynamicProperty,
                title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddpSearchDataTitle"]
            });
        }
        return properties;
    };
    // tslint:disable-next-line:no-any
    PageContext.prototype._getPropertyValue = function (propertyId) {
        switch (propertyId) {
            case PageContext._pageContextUserDynamicProperty:
                return {
                    userName: this.user.displayName,
                    userEmail: this.user.email,
                    userLogin: this.user.loginName
                };
            case PageContext._pageContextSiteDataDynamicProperty:
                return {
                    siteUrl: this.web.absoluteUrl,
                    siteCollectionUrl: this.site.absoluteUrl,
                    listUrl: document &&
                        document.location &&
                        this.list &&
                        document.location.origin + this.list.serverRelativeUrl,
                    itemId: this.listItem && this.listItem.id,
                    siteClassification: this.site.classification,
                    siteTitle: this.web.title,
                    siteDescription: this.web.description,
                    siteLogoUrl: document && document.location && document.location.origin + this.web.logoUrl
                };
            case PageContext._pageContextUrlDataDynamicProperty:
                return {
                    queryParameters: this._getUrlQueryParameterCollection(),
                    fragment: this._getUrlFragmentIdentifier()
                };
            case PageContext._pageContextSearchDataDynamicProperty:
                return this._isSearchDynamicDataEnabled()
                    ? {
                        searchQuery: this._searchQuery
                    }
                    : undefined;
            default:
                return undefined;
        }
    };
    PageContext.prototype._getAnnotatedPropertyValue = function (propertyId) {
        var propMetadata = {};
        switch (propertyId) {
            case PageContext._pageContextUserDynamicProperty:
                propMetadata = {
                    userName: {
                        title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvUserName"],
                        description: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvUserNameDesc"]
                    },
                    userEmail: {
                        title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvUserEmail"],
                        description: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvUserEmailDesc"]
                    },
                    userLogin: {
                        title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvUserLogin"],
                        description: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvUserLoginDesc"]
                    }
                };
                break;
            case PageContext._pageContextSiteDataDynamicProperty:
                propMetadata = {
                    siteUrl: {
                        title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvSiteUrl"],
                        description: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvSiteUrlDesc"]
                    },
                    siteCollectionUrl: {
                        title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvSiteCollectionUrl"],
                        description: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvSiteCollectionUrlDesc"]
                    },
                    listUrl: {
                        title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvListUrl"],
                        description: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvListUrlDesc"]
                    },
                    itemId: {
                        title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvItemId"],
                        description: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvItemIdDesc"]
                    },
                    siteClassification: {
                        title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvSiteClassification"],
                        description: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvSiteClassificationDesc"]
                    },
                    siteTitle: {
                        title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvSiteTitle"],
                        description: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvSiteTitleDesc"]
                    },
                    siteDescription: {
                        title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvSiteDescription"],
                        description: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvSiteDescriptionDesc"]
                    },
                    siteLogoUrl: {
                        title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvSiteLogoUrl"],
                        description: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvSiteLogoUrlDesc"]
                    }
                };
                break;
            case PageContext._pageContextUrlDataDynamicProperty:
                propMetadata = {
                    queryParameters: {
                        title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvQueryParameters"],
                        description: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvQueryParametersDesc"]
                    },
                    fragment: {
                        title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvFragment"],
                        description: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvFragmentDesc"]
                    }
                };
                break;
            case PageContext._pageContextSearchDataDynamicProperty:
                if (this._isSearchDynamicDataEnabled()) {
                    propMetadata = {
                        searchQuery: {
                            title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvSearchQuery"],
                            description: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["ddvSearchQueryDesc"]
                        }
                    };
                }
                else {
                    propMetadata = {};
                }
                break;
        }
        return {
            sampleValue: this._getPropertyValue(propertyId),
            metadata: propMetadata
        };
    };
    /**
     * Returns decoded key-value pair collection for the current page's query parameters.
     *
     * @remarks
     * If the key or value doesn't exist, it adds an empty string instead.
     */
    PageContext.prototype._getUrlQueryParameterCollection = function () {
        var queryParamCollection = {};
        if (this._isQueryStringParamsKSActivated()) {
            var queryParams = this._getUrlParser().search.substring(1).split('&');
            for (var _i = 0, queryParams_1 = queryParams; _i < queryParams_1.length; _i++) {
                var queryParam = queryParams_1[_i];
                if (queryParam !== '') {
                    var params = queryParam.split('=');
                    queryParamCollection[decodeURIComponent(params[0])] = decodeURIComponent(params[1] || '');
                }
            }
        }
        else {
            var queryParams = new URL(self.location.href).searchParams;
            queryParams.forEach(function (value, key) {
                queryParamCollection[decodeURIComponent(key)] = decodeURIComponent(value || '');
            });
        }
        return queryParamCollection;
    };
    /**
     * Returns the fragment identifier for the current page's url.
     */
    PageContext.prototype._getUrlFragmentIdentifier = function () {
        if (this._isQueryStringParamsKSActivated()) {
            return this._getUrlParser().hash.substring(1); // removing '#' which is at the 0 index.
        }
        else {
            return new URL(self.location.href).hash.substring(1); // removing '#' which is at the 0 index.
        }
    };
    PageContext.prototype._getUrlParser = function () {
        this._urlParser = this._urlParser || document.createElement('a');
        this._urlParser.href = self.location.href;
        return this._urlParser;
    };
    PageContext.prototype._isSearchDynamicDataEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1626 /* CSISearchQueryExtension */);
    };
    PageContext.prototype._isQueryStringParamsKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('a7c756f2-39a2-4d56-b46e-d6fd3fb056c7' /* '12/02/2020', 'Use URLSearchParams to extract query string params'*/);
    };
    /**
     * The service key for PageContext.
     */
    PageContext.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create('sp-page-context:PageContext', PageContext);
    PageContext._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('PageContext');
    PageContext._pageContextInfoId = 'PageContextInfoProperties';
    PageContext._pageContextUserDynamicProperty = 'UserData';
    PageContext._pageContextSiteDataDynamicProperty = 'SiteData';
    PageContext._pageContextUrlDataDynamicProperty = 'UrlData';
    PageContext._pageContextSearchDataDynamicProperty = 'SearchData';
    return PageContext;
}());
/* harmony default export */ __webpack_exports__["default"] = (PageContext);


/***/ }),

/***/ "mGD9":
/*!******************************!*\
  !*** ./lib/loc/Strings.resx ***!
  \******************************/
/*! exports provided: ddpSiteDataTitle, ddpUserDataTitle, ddpUrlDataTitle, ddvUserName, ddvUserNameDesc, ddvUserEmail, ddvUserEmailDesc, ddvUserLogin, ddvUserLoginDesc, ddvSiteUrl, ddvSiteUrlDesc, ddvSiteCollectionUrl, ddvSiteCollectionUrlDesc, ddvListUrl, ddvListUrlDesc, ddvItemId, ddvItemIdDesc, ddvSiteClassification, ddvSiteClassificationDesc, ddvSiteTitle, ddvSiteTitleDesc, ddvSiteDescription, ddvSiteDescriptionDesc, ddvSiteLogoUrl, ddvSiteLogoUrlDesc, ddvQueryParameters, ddvQueryParametersDesc, ddvFragment, ddvFragmentDesc, ddpSearchDataTitle, ddvSearchQuery, ddvSearchQueryDesc, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ddpSiteDataTitle\":\"Site properties\",\"ddpUserDataTitle\":\"Current user information\",\"ddpUrlDataTitle\":\"Query string\",\"ddvUserName\":\"User name\",\"ddvUserNameDesc\":\"The name of the user\",\"ddvUserEmail\":\"User email\",\"ddvUserEmailDesc\":\"The email of the current user\",\"ddvUserLogin\":\"Login name\",\"ddvUserLoginDesc\":\"The name that the user logged in with\",\"ddvSiteUrl\":\"Site link\",\"ddvSiteUrlDesc\":\"The URL of the current site\",\"ddvSiteCollectionUrl\":\"Site collection link\",\"ddvSiteCollectionUrlDesc\":\"The URL of the current site collection\",\"ddvListUrl\":\"List link\",\"ddvListUrlDesc\":\"The URL of the current list\",\"ddvItemId\":\"Item id\",\"ddvItemIdDesc\":\"The id of the current item\",\"ddvSiteClassification\":\"Site classification\",\"ddvSiteClassificationDesc\":\"The classification of the current site\",\"ddvSiteTitle\":\"Site title\",\"ddvSiteTitleDesc\":\"The title of the current site\",\"ddvSiteDescription\":\"Site description\",\"ddvSiteDescriptionDesc\":\"The description of the current site\",\"ddvSiteLogoUrl\":\"Site logo\",\"ddvSiteLogoUrlDesc\":\"The URL of the site logo\",\"ddvQueryParameters\":\"Query parameters\",\"ddvQueryParametersDesc\":\"The different query strings that are on the current URL\",\"ddvFragment\":\"URL fragment\",\"ddvFragmentDesc\":\"The part of the current URL that is after the #\",\"ddpSearchDataTitle\":\"Search\",\"ddvSearchQuery\":\"Search query\",\"ddvSearchQueryDesc\":\"The query used to get search results\"}");

/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: Page, PageContext, SPWeb, SPSite, SPUser, SPField, SPList, SPListItem, _SPFeatureInfo, SPDayOfWeek, CultureInfo, O365GroupAssociation, O365GroupAssociationType, SPPermission, SharePointPageContextDataProvider, SPTimeZone, AzureActiveDirectoryInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page */ "cnM3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _Page__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _PageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageContext */ "ed5A");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageContext", function() { return _PageContext__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SPWeb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SPWeb */ "swVP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPWeb", function() { return _SPWeb__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _SPSite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SPSite */ "qdg7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPSite", function() { return _SPSite__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _SPUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SPUser */ "6ZP6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPUser", function() { return _SPUser__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _SPField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SPField */ "JhOW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPField", function() { return _SPField__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _SPList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SPList */ "CRGG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPList", function() { return _SPList__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _SPListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SPListItem */ "GPn3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPListItem", function() { return _SPListItem__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _SPFeatureInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SPFeatureInfo */ "x7V9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_SPFeatureInfo", function() { return _SPFeatureInfo__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _SPDayOfWeek__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SPDayOfWeek */ "sIiP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPDayOfWeek", function() { return _SPDayOfWeek__WEBPACK_IMPORTED_MODULE_9__["SPDayOfWeek"]; });

/* harmony import */ var _CultureInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CultureInfo */ "L14d");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CultureInfo", function() { return _CultureInfo__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _O365GroupAssociation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./O365GroupAssociation */ "GLAT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "O365GroupAssociation", function() { return _O365GroupAssociation__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "O365GroupAssociationType", function() { return _O365GroupAssociation__WEBPACK_IMPORTED_MODULE_11__["O365GroupAssociationType"]; });

/* harmony import */ var _SPPermission__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SPPermission */ "W9Pz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPPermission", function() { return _SPPermission__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _pageManager_SharePointPageContextDataProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pageManager/SharePointPageContextDataProvider */ "JRdv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharePointPageContextDataProvider", function() { return _pageManager_SharePointPageContextDataProvider__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _SPTimeZone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SPTimeZone */ "PL7Z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPTimeZone", function() { return _SPTimeZone__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _AzureActiveDirectoryInfo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AzureActiveDirectoryInfo */ "ZcDP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AzureActiveDirectoryInfo", function() { return _AzureActiveDirectoryInfo__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/**
 * Page context services for the SharePoint Framework
 *
 * @remarks
 * The page context allows an application and its web parts to share common
 * data about the current page, such as its contents, URL, list, user, permissions,
 * navigation menu, etc.
 *
 * @packagedocumentation
 */


















/***/ }),

/***/ "qdg7":
/*!***********************!*\
  !*** ./lib/SPSite.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _O365GroupAssociation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./O365GroupAssociation */ "GLAT");


/**
 * This class is primarily used with the `PageContext` class.  It provides contextual
 * information for the SharePoint site collection ("SPSite") that hosts the page.
 *
 * @public
 */
var SPSite = /** @class */ (function () {
    /**
     * @internal
     */
    function SPSite(data) {
        this.absoluteUrl = data.absoluteUrl;
        this.cdnPrefix = data.cdnPrefix || '';
        this.classification = data.classification;
        this.correlationId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(data.correlationId);
        this.group = data.group ? new _O365GroupAssociation__WEBPACK_IMPORTED_MODULE_1__["default"](data.group) : undefined;
        this.id = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(data.id);
        this.isNoScriptEnabled = data.isNoScriptEnabled;
        this.recycleBinItemCount = data.recycleBinItemCount;
        this.serverRelativeUrl = data.serverRelativeUrl;
        this.serverRequestPath = data.serverRequestPath;
        this.sitePagesEnabled = data.sitePagesEnabled;
        this.sitePagesFeatureVersion = data.sitePagesFeatureVersion ? data.sitePagesFeatureVersion : 0;
    }
    return SPSite;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPSite);


/***/ }),

/***/ "sIiP":
/*!****************************!*\
  !*** ./lib/SPDayOfWeek.js ***!
  \****************************/
/*! exports provided: SPDayOfWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPDayOfWeek", function() { return SPDayOfWeek; });
/**
 * The object members represent the seven days of a week.
 *
 * @beta
 */
// tslint:disable-next-line:typedef variable-name
var SPDayOfWeek = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6
};


/***/ }),

/***/ "swVP":
/*!**********************!*\
  !*** ./lib/SPWeb.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SPPermission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SPPermission */ "W9Pz");
/* harmony import */ var _SPTimeZone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SPTimeZone */ "PL7Z");



/**
 * This class is primarily used with the `PageContext` class. It provides contextual
 * information for the SharePoint site ("SPWeb") that hosts the page.
 *
 * @public
 */
var SPWeb = /** @class */ (function () {
    /**
     * @internal
     */
    function SPWeb(data) {
        this.absoluteUrl = data.absoluteUrl;
        this.id = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(data.id);
        this.isAppWeb = data.isAppWeb;
        this.language = data.language;
        this.languageName = data.languageName || '';
        this.logoUrl = data.logoUrl;
        this.permissions = new _SPPermission__WEBPACK_IMPORTED_MODULE_1__["default"](data.permissions);
        this.timeZoneInfo = data.timeZoneInfo ? new _SPTimeZone__WEBPACK_IMPORTED_MODULE_2__["default"](data.timeZoneInfo) : undefined;
        this.firstDayOfWeek = data.firstDayOfWeek;
        this.serverRelativeUrl = data.serverRelativeUrl;
        this.templateName = data.templateName || '';
        this.title = data.title || '';
        this.description = data.description || '';
    }
    return SPWeb;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPWeb);


/***/ }),

/***/ "ut3N":
/*!********************************************!*\
  !*** external "@microsoft/sp-diagnostics" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ut3N__;

/***/ }),

/***/ "x7V9":
/*!******************************!*\
  !*** ./lib/SPFeatureInfo.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */
/**
 * This class is primarily used with the `PageContext` class. It provides contextual
 * information for the features enabled on the SharePoint site that hosts the page.
 *
 * @internal
 */
var SPFeatureInfo = /** @class */ (function () {
    /**
     * @param data - Raw JSON data from the html file
     */
    function SPFeatureInfo(data) {
        this._features = new Map();
        for (var key in data) {
            if (key !== undefined) {
                // tslint:disable-next-line:no-any
                var value = data[key];
                this._features.set(key, { version: value.Version, enabled: value.Enabled });
            }
        }
    }
    /**
     * Returns feature information for a given feature.
     * @param featureName - Name of a feature to lookup
     */
    SPFeatureInfo.prototype.get = function (featureName) {
        return this._features.get(featureName);
    };
    return SPFeatureInfo;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPFeatureInfo);


/***/ })

/******/ })});;
//# sourceMappingURL=sp-page-context_[locale].js.map