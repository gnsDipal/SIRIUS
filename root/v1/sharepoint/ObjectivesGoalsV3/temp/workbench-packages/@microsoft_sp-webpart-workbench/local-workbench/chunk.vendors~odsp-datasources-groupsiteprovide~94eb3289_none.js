(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~odsp-datasources-groupsiteprovide~94eb3289"],{

/***/ "ASs2":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/site/SiteCreationDataSource.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: SiteCreationDataSource, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteCreationDataSource", function() { return SiteCreationDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/encoding/UriEncoding */ "+35T");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_CachedDataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/CachedDataSource */ "zpEg");




/**
 * Default number of maximum retries when error occurs during rest call.
 */
var NUMBER_OF_RETRIES = 3;
var checkSiteExistsUrlTemplate = "/_api/SP.Site.Exists(url=@v)?@v='{0}'";
var getTenantAdminSettingsUrl = '/_api/SPOInternalUseOnly.TenantAdminSettings';
var updateSitePropertiesUrl = "/_api/SPOInternalUseOnly.SiteProperties?Url='{0}'";
/**
 * Use SiteCreationDataSource as a base class for other data sources
 * that handle the creation of sites.
 */
var SiteCreationDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SiteCreationDataSource, _super);
    function SiteCreationDataSource(params, dependencies) {
        return _super.call(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, params), { id: 'SiteCreationDataSource' }), dependencies) || this;
    }
    /**
     * Checks the existance of a site with site url.
     */
    SiteCreationDataSource.prototype.checkSiteExists = function (siteUrl) {
        var _this = this;
        var restUrl = function () {
            return (_this._pageContext.webAbsoluteUrl +
                _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__["format"](checkSiteExistsUrlTemplate, _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_1__["default"].encodeRestUriStringToken(siteUrl)));
        };
        return this.getData(restUrl, function (responseText) {
            var result = JSON.parse(responseText);
            return result && result.d && result.d.Exists;
        }, 'GetSiteExists', undefined, 'GET', undefined, undefined, 0 /* NumberOfRetries*/);
    };
    /**
     * Gets the tenant admin settings
     *
     * Example of result:
     * {
     *     "AutoQuotaEnabled": { "Value": false },
     *     "SiteCreationDefaultStorageQuota": { "Value": 2048 },
     *     "TenantDefaultTimeZoneId": { "Value": 56 }
     * }
     */
    SiteCreationDataSource.prototype.getTenantAdminSettings = function () {
        var _this = this;
        var restUrl = function () {
            return _this._pageContext.webAbsoluteUrl + getTenantAdminSettingsUrl;
        };
        return this.getData(restUrl, function (responseText) {
            var result = JSON.parse(responseText);
            var tenantAdminSettings = {
                isAutoQuotaEnabled: result && result.AutoQuotaEnabled ? result.AutoQuotaEnabled.Value : undefined,
                defaultStorageQuota: result && result.SiteCreationDefaultStorageQuota
                    ? result.SiteCreationDefaultStorageQuota.Value
                    : undefined,
                defaultTimeZoneId: result && result.TenantDefaultTimeZoneId ? result.TenantDefaultTimeZoneId.Value : undefined
            };
            return tenantAdminSettings;
        }, 'getTenantAdminSettings', undefined, 'GET', {
            accept: 'application/json'
        }, undefined, 0 /* NumberOfRetries*/);
    };
    /**
     *  Update site properties, ex, TimeZoneId and StorageMaximumLevel after site creation
     */
    SiteCreationDataSource.prototype.updateSiteProperites = function (siteUpdateParams) {
        var _this = this;
        var restUrl = function () {
            return (_this._pageContext.webAbsoluteUrl +
                _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__["format"](updateSitePropertiesUrl, _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_1__["default"].encodeRestUriStringToken(siteUpdateParams.url)));
        };
        var additionalPostData = function () {
            var updateSPSiteParamObj = {
                TimeZoneId: siteUpdateParams.timeZoneId ? siteUpdateParams.timeZoneId : undefined,
                StorageMaximumLevel: siteUpdateParams.storageMaximumLevel
                    ? String(siteUpdateParams.storageMaximumLevel)
                    : undefined,
                Owner: siteUpdateParams.owner ? siteUpdateParams.owner : undefined
            };
            return JSON.stringify(updateSPSiteParamObj);
        };
        return this.getData(restUrl, undefined /*parseResponse*/, 'updateSiteProperites' /*qosName*/, additionalPostData, 'PATCH' /*method*/, { Accept: 'application/json' } /*additionalHeaders*/, 'application/json' /*Content-Type*/, NUMBER_OF_RETRIES);
    };
    return SiteCreationDataSource;
}(_base_CachedDataSource__WEBPACK_IMPORTED_MODULE_3__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (SiteCreationDataSource);
//# sourceMappingURL=SiteCreationDataSource.js.map

/***/ }),

/***/ "ZaX7":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/providers/groups/GroupSiteProvider.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: GroupSiteProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSiteProvider", function() { return GroupSiteProvider; });
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _dataSources_groups_GroupSiteDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dataSources/groups/GroupSiteDataSource */ "cky/");


var MISSING_GROUP_ID_ERROR = 'Missing group id.';
/**
 * O365 Groups service provider
 */
var GroupSiteProvider = /** @class */ (function () {
    function GroupSiteProvider(params) {
        this._dataSource = params.dataSource || new _dataSources_groups_GroupSiteDataSource__WEBPACK_IMPORTED_MODULE_1__["default"](params.pageContext);
    }
    /**
     * Checks the availability of the site and alias.
     */
    GroupSiteProvider.prototype.checkGroupExists = function (strAlias) {
        return this._dataSource.checkGroupExists(strAlias);
    };
    /**
     * Checks the existance of a site with site url.
     */
    GroupSiteProvider.prototype.checkSiteExists = function (siteUrl) {
        return this._dataSource.checkSiteExists(siteUrl);
    };
    /**
     * get site Url from alias
     */
    GroupSiteProvider.prototype.getSiteUrlFromAlias = function (alias, managedPath, isTeamSite) {
        if (alias) {
            return this._dataSource.getSiteUrlFromAlias(alias, managedPath, isTeamSite);
        }
        else {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(undefined);
        }
    };
    /**
     * get group creation context
     */
    GroupSiteProvider.prototype.getGroupCreationContext = function (bypassCache) {
        if (bypassCache === void 0) { bypassCache = false; }
        return this._dataSource.getGroupCreationContext(bypassCache);
    };
    /**
     * @inheritdoc
     */
    GroupSiteProvider.prototype.validateGroupName = function (displayName, groupAlias) {
        return this._dataSource.validateGroupName(displayName, groupAlias);
    };
    GroupSiteProvider.prototype.createGroup = function (params, mailNickname, isPublic, description, dataClassification, allowGuestUsers, siteUrl, formulaId, spSiteLanguage, owners, hubSiteId) {
        var displayName;
        if (typeof params === 'string') {
            displayName = params;
            return this._dataSource.createGroup(displayName, mailNickname, isPublic, description, dataClassification, allowGuestUsers, siteUrl, formulaId, spSiteLanguage, owners, hubSiteId);
        }
        else {
            return this._dataSource.createGroup(params);
        }
    };
    /**
     * Attach a new Group to the current site.
     * @param strName The name of the group.
     * @param strAlias The alias of the group.
     * @param isPublic Whether the group is public or private
     * @param description The description for the group
     * @param dataClassification Data classification for the group (eg: HBI, MBI, etc.).
     * @param allowGuestUsers Whether guest users are allowed on the site
     * @param keepOldHomepage Whether the current homepage of the site should be retained after Groupification
     * @param sensitivityLabel Represents the unique id of the O365 Classifications
     */
    GroupSiteProvider.prototype.groupify = function (strName, strAlias, isPublic, description, dataClassification, allowGuestUsers, keepOldHomepage, sensitivityLabel) {
        return this._dataSource.groupify(strName, strAlias, isPublic, description, dataClassification, allowGuestUsers, keepOldHomepage, sensitivityLabel);
    };
    GroupSiteProvider.prototype.getGroupSiteConversionData = function () {
        return this._dataSource.getGroupSiteConversionData();
    };
    /**
     * Gets the group notebook URL from the GroupSiteManager API.
     */
    GroupSiteProvider.prototype.getNotebookUrl = function (groupId) {
        if (!groupId) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].reject(MISSING_GROUP_ID_ERROR);
        }
        return this._dataSource.getNotebookUrl(groupId);
    };
    /**
     * Gets the group site provisioning status.
     */
    GroupSiteProvider.prototype.getGroupSiteStatus = function (groupId) {
        if (!groupId) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].reject(MISSING_GROUP_ID_ERROR);
        }
        return this._dataSource.getSiteStatus(groupId);
    };
    /**
     * Creates the group site if necessary.
     */
    GroupSiteProvider.prototype.createGroupSite = function (groupId) {
        if (!groupId) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].reject(MISSING_GROUP_ID_ERROR);
        }
        return this._dataSource.createSite(groupId);
    };
    /**
     * Gets the tenant's default TimeZoneId
     */
    GroupSiteProvider.prototype.getTenantAdminSettings = function () {
        return this._dataSource.getTenantAdminSettings();
    };
    /**
     *  Update site properties, ex, TimeZoneId and StorageMaximumLevel after site creation
     */
    GroupSiteProvider.prototype.updateSiteProperites = function (siteUpdateParams) {
        return this._dataSource.updateSiteProperites(siteUpdateParams);
    };
    return GroupSiteProvider;
}());

/* harmony default export */ __webpack_exports__["default"] = (GroupSiteProvider);
//# sourceMappingURL=GroupSiteProvider.js.map

/***/ }),

/***/ "cky/":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/groups/GroupSiteDataSource.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: GroupNameValidationErrorCode, GroupSiteDataSource, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupNameValidationErrorCode", function() { return GroupNameValidationErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSiteDataSource", function() { return GroupSiteDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _site_SiteCreationDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../site/SiteCreationDataSource */ "ASs2");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/encoding/UriEncoding */ "+35T");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/guid/Guid */ "vo05");







/**
 * Default number of maximum retries when error occurs during rest call.
 */
var NUMBER_OF_RETRIES = 3;
var CREATE_SITE_URL_TEMPLATE = "/_api/GroupSiteManager/Create?groupId='{0}'";
var CAN_USER_CREATE_GROUP_URL_TEMPLATE = '/_api/GroupSiteManager/CanUserCreateGroup';
var GET_GROUP_CREATION_CONTEXT_URL_TEMPLATE = '/_api/GroupSiteManager/GetGroupCreationContext';
var GET_SITE_URL_FROM_ALIAS_URL_TEMPLATE = "/_api/GroupSiteManager/GetValidSiteUrlFromAlias?alias='{0}'";
var GET_SITE_URL_FROM_ALIAS_AND_MANAGED_PATH_URL_TEMPLATE = "/_api/GroupSiteManager/GetValidSiteUrlFromAlias?alias='{0}'&managedPath='{1}'";
var GET_SITE_URL_FROM_ALIAS_AND_IS_TEAM_SITE_URL_TEMPLATE = "/_api/GroupSiteManager/GetValidSiteUrlFromAlias?alias='{0}'&isTeamSite={1}";
var GET_SITE_URL_FROM_ALIAS_AND_MANAGED_PATH_AND_IS_TEAM_SITE_URL_TEMPLATE = "/_api/GroupSiteManager/GetValidSiteUrlFromAlias?alias='{0}'&managedPath='{1}'&isTeamSite={2}";
var GET_NOTEBOOK_URL_TEMPLATE = "/_api/GroupSiteManager/Notebook?groupId='{0}'";
var GET_SITE_STATUS_URL_TEMPLATE = "/_api/GroupSiteManager/GetSiteStatus?groupId='{0}'";
var GET_GROUP_BY_ALIAS_URL_TEMPLATE = "Group(alias='{0}')";
var VALIDATE_GROUP_NAME_URL_TEMPLATE = "ValidateGroupName(displayName='{0}', alias='{1}')";
var DIRECTORY_SESSION_TEMPLATE = 'SP.Directory.DirectorySession';
var INVALID_LENGTH = 'InvalidLength';
var MISSING_PREFIX_SUFFIX = 'MissingPrefixSuffix';
var CONTAINS_BLOCK_WORD = 'ContainsBlockedWord';
var PROPERTY_CONFLIICT = 'PropertyConflict';
var LANGUAGE_PREFIX = 'SPSiteLanguage:';
var HUB_SITE_ID_PREFIX = 'HubSiteId:';
var SENSITIVITY_LABEL_PREFIX = 'SensitivityLabel:';
// The purpose behind this string is that if the user has selected a formula
// to be applied after the web has been provisioned, a guid needs to be passed
// to CreateGroupEx indicating which formula. Due to the design of the server, the only
// feasible way to do this is to put it in the GroupCreationOptions.
// However, GroupCreationOptions is a collection of strings, not a dictionary,
// so the workaround that was decided on was to append the formula guid to this
// prefix, so that the server can identify it.
// Note that the guid 292aa8a00786498a87a5ca52d9f4214a is part of the string identifier
// and is not the formula guid, which will be appended afterward. (so there will be two guids
// in a row, seperated by an underscore)
var IMPLICIT_FORMULA_PREFIX = 'implicit_formula_292aa8a00786498a87a5ca52d9f4214a_';
// Flights
var EnableClassificationLabels = { ODB: 1186 };
var createSiteFromHubFeature = { ODB: 1075 };
/**
 * enum for four types of group name validation error code.
 */
var GroupNameValidationErrorCode;
(function (GroupNameValidationErrorCode) {
    /**
     * The current prefix/suffix exceeds the maximum length as allowed for property mailNickname.
     */
    GroupNameValidationErrorCode[GroupNameValidationErrorCode["invalidLength"] = 0] = "invalidLength";
    /**
     * The value is missing a required an organization required prefix or suffix.
     */
    GroupNameValidationErrorCode[GroupNameValidationErrorCode["missingPrefixSuffix"] = 1] = "missingPrefixSuffix";
    /**
     * The displayName contains the blocked word that does not meet company policy.
     */
    GroupNameValidationErrorCode[GroupNameValidationErrorCode["containsBlockedWord"] = 2] = "containsBlockedWord";
    /**
     * Another object with the same value for property mailNickname already exists.
     */
    GroupNameValidationErrorCode[GroupNameValidationErrorCode["propertyConflict"] = 3] = "propertyConflict";
})(GroupNameValidationErrorCode || (GroupNameValidationErrorCode = {}));
/**
 * Use GroupSiteDatasource to interact with group sites.
 * It supports actions like Create, CheckExistence, etc.
 */
var GroupSiteDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GroupSiteDataSource, _super);
    function GroupSiteDataSource(pageContext) {
        return _super.call(this, {
            dataSourceName: 'GroupSiteDataSource'
        }, {
            pageContext: pageContext
        }) || this;
    }
    GroupSiteDataSource._parseGroupSiteInfoResponse = function (responseText, methodName) {
        var response = JSON.parse(responseText);
        var siteInfoResponse = response.d[methodName];
        return {
            siteUrl: siteInfoResponse.SiteUrl,
            errorMessage: siteInfoResponse.ErrorMessage,
            siteStatus: siteInfoResponse.SiteStatus,
            documentsUrl: siteInfoResponse.DocumentsUrl
        };
    };
    /**
     * Returns a true if a group with specified alias exists...
     * False otherwise.
     */
    GroupSiteDataSource.prototype.checkGroupExists = function (groupAlias) {
        var _this = this;
        return this.getData(function () {
            return _this._getUrl(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__["format"](GET_GROUP_BY_ALIAS_URL_TEMPLATE, groupAlias), DIRECTORY_SESSION_TEMPLATE);
        }, function (responseText) {
            return true;
        }, 'GetGroupByAlias', undefined, 'GET', undefined, undefined, 0 /* NumberOfRetries*/).then(function (value) {
            return value;
        }, function (error) {
            var errorCode = error.code;
            if (errorCode) {
                var exception = errorCode.split(',')[1];
                if (exception && -1 === exception.indexOf('ResourceNotFoundException')) {
                    return true;
                }
            }
            return false;
        });
    };
    /**
     * Gets the group's notebook URL from the GroupSiteManager API
     */
    GroupSiteDataSource.prototype.getNotebookUrl = function (id) {
        var _this = this;
        var restUrl = function () {
            return _this._pageContext.webAbsoluteUrl + _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__["format"](GET_NOTEBOOK_URL_TEMPLATE, id);
        };
        return this.getData(restUrl, function (responseText) {
            var response = JSON.parse(responseText);
            return response.d.Notebook;
        }, 'GetNotebookUrl', undefined, 'GET', undefined, undefined, NUMBER_OF_RETRIES);
    };
    /**
     * Returns the group's site provisioning status in a GroupSiteInfo promise
     */
    GroupSiteDataSource.prototype.getSiteStatus = function (id) {
        var _this = this;
        var restUrl = function () {
            return _this._pageContext.webAbsoluteUrl + _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__["format"](GET_SITE_STATUS_URL_TEMPLATE, id);
        };
        return this.getData(restUrl, function (responseText) {
            return GroupSiteDataSource._parseGroupSiteInfoResponse(responseText, 'GetSiteStatus');
        }, 'GetSiteStatus', undefined, 'GET', undefined, undefined, NUMBER_OF_RETRIES);
    };
    /**
     * Kicks off group site provisioning and returns the provisioning status in a GroupSiteInfo promise
     */
    GroupSiteDataSource.prototype.createSite = function (id) {
        var _this = this;
        var restUrl = function () {
            return _this._pageContext.webAbsoluteUrl + _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__["format"](CREATE_SITE_URL_TEMPLATE, id);
        };
        return this.getData(restUrl, function (responseText) {
            return GroupSiteDataSource._parseGroupSiteInfoResponse(responseText, 'Create');
        }, 'CreateSite', undefined, 'POST', undefined, undefined, NUMBER_OF_RETRIES);
    };
    GroupSiteDataSource.prototype.createGroup = function (params, mailNickname, isPublic, description, dataClassification, allowGuestUsers, siteUrl, formulaId, spSiteLanguage, owners, hubSiteId) {
        var _this = this;
        var displayName;
        var sensitivityLabel; // Represents the unique id of the O365 Classifications
        if (typeof params === 'string') {
            displayName = params;
        }
        else {
            displayName = params.displayName;
            mailNickname = params.mailNickname;
            isPublic = params.isPublic;
            description = params.description;
            dataClassification = params.dataClassification;
            allowGuestUsers = params.allowGuestUsers;
            siteUrl = params.siteUrl;
            formulaId = params.formulaId;
            spSiteLanguage = params.spSiteLanguage;
            hubSiteId = params.hubSiteId;
            owners = params.owners;
            sensitivityLabel = params.sensitivityLabel;
        }
        var restUrl = function () {
            return _this._pageContext.webAbsoluteUrl + '/_api/GroupSiteManager/CreateGroupEx';
        };
        var additionalPostData = function () {
            var creationOptions = [];
            if (allowGuestUsers) {
                creationOptions.push('AllowFileSharingForGuestUsers');
            }
            if (siteUrl) {
                var siteAlias = _this._extractSiteAlias(siteUrl);
                if (siteAlias !== '' && siteAlias !== mailNickname) {
                    creationOptions.push('SiteAlias:' + siteAlias);
                }
            }
            if (formulaId) {
                creationOptions.push(IMPLICIT_FORMULA_PREFIX + formulaId);
            }
            if (spSiteLanguage) {
                creationOptions.push(LANGUAGE_PREFIX + spSiteLanguage.toString());
            }
            if (_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_3__["default"].isFeatureEnabled(createSiteFromHubFeature) && hubSiteId) {
                creationOptions.push(HUB_SITE_ID_PREFIX + hubSiteId.toString());
            }
            if (_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_3__["default"].isFeatureEnabled(EnableClassificationLabels) && sensitivityLabel) {
                creationOptions.push(SENSITIVITY_LABEL_PREFIX + sensitivityLabel);
            }
            owners = owners || [];
            var createGroupParamObj = {
                displayName: displayName,
                alias: mailNickname,
                isPublic: isPublic,
                optionalParams: {
                    Description: description,
                    Owners: { results: owners },
                    CreationOptions: { results: creationOptions },
                    Classification: dataClassification
                }
            };
            return JSON.stringify(createGroupParamObj);
        };
        var parseResult = function (responseText) {
            var result = JSON.parse(responseText);
            if (result.d) {
                var groupId = result.d.CreateGroupEx;
                return {
                    status: '200',
                    response: responseText,
                    groupId: groupId
                };
            }
        };
        return this.getData(restUrl, parseResult, 'CreateGroupSiteFromSP', additionalPostData, 'POST', undefined, undefined, 0 /* no retries */);
    };
    /**
     * Create an AAD group and attaches it to the current site.
     * @param strName Name of the group.
     * @param strAlias Alias for the group (ie: how you contact it via email).
     * @param isPublic Whether the group is public or not.
     * @param description The description for the site/group.  This SHOULD be the current description of the root web of the site, otherwise we'll overwrite it.
     * @param dataClassification Data classification for the group (eg: HBI, MBI, etc.).
     * @param allowGuestUsers Whether the group should allow guest users.
     * @param keepOldHomepage Whether the site should retain its old homepage or not.
     * @param sensitivityLabel Represents the unique id of the O365 Classifications
     */
    GroupSiteDataSource.prototype.groupify = function (strName, strAlias, isPublic, description, dataClassification, allowGuestUsers, keepOldHomepage, sensitivityLabel) {
        var _this = this;
        var restUrl = function () {
            return _this._pageContext.webAbsoluteUrl + '/_api/GroupSiteManager/CreateGroupForSite';
        };
        var additionalPostData = function () {
            var creationOptions = [];
            if (allowGuestUsers) {
                creationOptions.push('AllowFileSharingForGuestUsers');
            }
            if (keepOldHomepage) {
                creationOptions.push('SharePointKeepOldHomepage');
            }
            if (_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_3__["default"].isFeatureEnabled(EnableClassificationLabels) && sensitivityLabel) {
                creationOptions.push(SENSITIVITY_LABEL_PREFIX + sensitivityLabel);
            }
            var groupifyParamObj = {
                displayName: strName,
                alias: strAlias,
                isPublic: isPublic,
                optionalParams: {
                    Description: description,
                    CreationOptions: { results: creationOptions },
                    Classification: dataClassification
                }
            };
            return JSON.stringify(groupifyParamObj);
        };
        var parseResult = function (responseText) {
            var result = JSON.parse(responseText);
            if (result.d) {
                var groupId = result.d.CreateGroupForSite;
                return {
                    status: '200',
                    response: responseText,
                    groupId: groupId
                };
            }
        };
        return this.getData(restUrl, parseResult, 'Groupify', additionalPostData, 'POST', undefined, undefined, 0 /* no retries */);
    };
    GroupSiteDataSource.prototype.getGroupSiteConversionData = function () {
        var _this = this;
        var restUrl = function () {
            return _this._pageContext.webAbsoluteUrl + '/_api/GroupSiteManager/GetGroupSiteConversionData';
        };
        var parseResult = function (responseText) {
            var result = JSON.parse(responseText);
            if (result.d) {
                var conversionInfo = {
                    GroupType: result.d.GetGroupSiteConversionData.GroupType,
                    SuggestedMembers: result.d.GetGroupSiteConversionData.SuggestedMembers.results,
                    SuggestedOwners: result.d.GetGroupSiteConversionData.SuggestedOwners.results,
                    UnsuggestablePrincipals: result.d.GetGroupSiteConversionData.UnsuggestablePrincipals.results,
                    IsRegionRestricted: result.d.GetGroupSiteConversionData.IsRegionRestricted,
                    IsWrongPdl: result.d.GetGroupSiteConversionData.IsWrongPdl,
                    IsGroupifyDisabled: result.d.GetGroupSiteConversionData.IsGroupifyDisabled
                };
                return {
                    status: '200',
                    response: responseText,
                    conversionInfo: conversionInfo
                };
            }
        };
        return this.getData(restUrl, parseResult, 'GetGroupSiteConversionData', null, 'POST', undefined, undefined, 0 /* no retries */);
    };
    /**
     * can user create group
     */
    GroupSiteDataSource.prototype.canUserCreateGroup = function () {
        var _this = this;
        var restUrl = function () {
            return _this._pageContext.webAbsoluteUrl + CAN_USER_CREATE_GROUP_URL_TEMPLATE;
        };
        return this.getDataUtilizingLegacyCache({
            getUrl: restUrl,
            parseResponse: function (responseText) {
                var result = JSON.parse(responseText);
                if (result && result.d && result.d.CanUserCreateGroup) {
                    return result.d.CanUserCreateGroup;
                }
                return undefined;
            },
            qosName: 'CanUserCreateGroup',
            method: 'GET',
            maxRetries: NUMBER_OF_RETRIES,
            noRedirect: true
        });
    };
    /**
     * get group creation context
     */
    GroupSiteDataSource.prototype.getGroupCreationContext = function (bypassCache) {
        var _this = this;
        if (bypassCache === void 0) { bypassCache = false; }
        var restUrl = function () {
            return _this._pageContext.webAbsoluteUrl + GET_GROUP_CREATION_CONTEXT_URL_TEMPLATE;
        };
        return this.getDataUtilizingLegacyCache({
            getUrl: restUrl,
            parseResponse: function (responseText) {
                var isClassificationLabelsFlightEnabled = _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_3__["default"].isFeatureEnabled(EnableClassificationLabels);
                var isMandatoryLabelSupported = !_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__["Killswitch"].isActivated('952bf3d2-dabd-47c3-8309-52b4220e944a', '9/25/2020', 'AuthZenMandatoryLabelClient');
                var result = JSON.parse(responseText);
                if (result && result.d && result.d.GetGroupCreationContext) {
                    var groupCreationContext = result.d.GetGroupCreationContext;
                    var classificationDescriptionsNew = void 0;
                    var dataClassificationOptionsNew = void 0;
                    var classificationPrivacy = void 0;
                    if (isClassificationLabelsFlightEnabled) {
                        classificationDescriptionsNew = _this._parseClassificationOptions(groupCreationContext.ClassificationDescriptionsNew, 'classificationDescription');
                        dataClassificationOptionsNew = _this._parseClassificationOptions(groupCreationContext.DataClassificationOptionsNew, 'classificationDescription');
                        classificationPrivacy = _this._parseClassificationOptions(groupCreationContext.ClassificationPrivacyValue, 'classificationPrivacy');
                        // Add the option for no label unless label is mandatory.
                        if (classificationDescriptionsNew.length > 0 &&
                            dataClassificationOptionsNew.length > 0 &&
                            classificationPrivacy.length > 0 &&
                            isMandatoryLabelSupported &&
                            !groupCreationContext.SensitivityLabelPolicyMandatory) {
                            classificationDescriptionsNew.push({
                                classificationDescription: '',
                                classificationTitle: 'None'
                            });
                            dataClassificationOptionsNew.push({
                                classificationDescription: 'None',
                                classificationTitle: _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_6__["default"].Empty
                            });
                            classificationPrivacy.push({
                                classificationTitle: _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_6__["default"].Empty,
                                classificationPrivacy: 'unspecified'
                            });
                        }
                    }
                    return {
                        requireSecondaryContact: groupCreationContext.RequireSecondaryContact,
                        usageGuidelineUrl: groupCreationContext.UsageGuidelineUrl,
                        dataClassificationOptions: groupCreationContext.DataClassificationOptions.results,
                        customFormUrl: groupCreationContext.CustomFormUrl,
                        allowToAddGuests: groupCreationContext.ExternalInvitationEnabled,
                        sitePath: groupCreationContext.SitePath,
                        defaultClassification: groupCreationContext.DefaultClassification,
                        classificationDescriptions: _this._parseClassificationOptions(groupCreationContext.ClassificationDescriptions, 'classificationDescription'),
                        classificationDescriptionsNew: classificationDescriptionsNew,
                        dataClassificationOptionsNew: dataClassificationOptionsNew,
                        classificationPrivacy: classificationPrivacy,
                        siteSensitivityLabelId: groupCreationContext.SiteSensitivityLabelId,
                        preferredLanguage: groupCreationContext.PreferredLanguage,
                        machineLearningCaptureEnabled: groupCreationContext.MachineLearningCaptureEnabled,
                        showSelfServiceSiteCreation: groupCreationContext.ShowSelfServiceSiteCreation,
                        siteCreationNewUX: groupCreationContext.SiteCreationNewUX,
                        isSensitivityLabelMandatory: isMandatoryLabelSupported && groupCreationContext.SensitivityLabelPolicyMandatory
                    };
                }
                return undefined;
            },
            qosName: 'GetGroupCreationContext',
            method: 'GET',
            maxRetries: NUMBER_OF_RETRIES,
            noRedirect: true,
            bypassCache: bypassCache
        });
    };
    /**
     * get site Url from alias
     */
    GroupSiteDataSource.prototype.getSiteUrlFromAlias = function (alias, managedPath, isTeamSite) {
        var _this = this;
        var restUrl = function () {
            var url;
            if (isTeamSite &&
                !_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__["Killswitch"].isActivated('AFA48D1B-18A9-43CA-8358-9F6A5C2DD9E4', '7/24/2018', 'New team site managed path')) {
                if (!!managedPath &&
                    !_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__["Killswitch"].isActivated('d419b1b7-a67a-4731-87d0-763651d687c4', '6/28/2018', 'select managed path in site url')) {
                    url =
                        _this._pageContext.webAbsoluteUrl +
                            _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__["format"](GET_SITE_URL_FROM_ALIAS_AND_MANAGED_PATH_AND_IS_TEAM_SITE_URL_TEMPLATE, alias, managedPath, isTeamSite);
                }
                else {
                    url =
                        _this._pageContext.webAbsoluteUrl +
                            _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__["format"](GET_SITE_URL_FROM_ALIAS_AND_IS_TEAM_SITE_URL_TEMPLATE, alias, isTeamSite);
                }
            }
            else if (!!managedPath &&
                !_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__["Killswitch"].isActivated('d419b1b7-a67a-4731-87d0-763651d687c4', '6/28/2018', 'select managed path in site url')) {
                url =
                    _this._pageContext.webAbsoluteUrl +
                        _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__["format"](GET_SITE_URL_FROM_ALIAS_AND_MANAGED_PATH_URL_TEMPLATE, alias, managedPath);
            }
            else {
                url =
                    _this._pageContext.webAbsoluteUrl + _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__["format"](GET_SITE_URL_FROM_ALIAS_URL_TEMPLATE, alias);
            }
            return url;
        };
        return this.getData(
        /* getUrl */ restUrl, 
        /* parseResponse */ function (responseText) {
            var result = JSON.parse(responseText);
            if (result && result.d && result.d.GetValidSiteUrlFromAlias) {
                return result.d.GetValidSiteUrlFromAlias;
            }
        }, 
        /* qosName */ 'GetSiteUrlFromAlias', 
        /* getAdditionalPostData */ undefined, 
        /* method */ 'GET', 
        /* additionalHeaders */ undefined, 
        /* contentType */ undefined, 
        /* maxRetries */ NUMBER_OF_RETRIES, 
        /* noRedirect */ undefined, 
        /* crossSiteCollectionCall */ undefined, 
        /* telemetryHandler */ function (input) {
            var errorData = input.errorData, eventData = input.eventData;
            if (errorData) {
                var errorCode = errorData.code ? errorData.code : '';
                var resultCode = errorCode.indexOf('2147467261') > -1 ? 'AliasNullException' : errorData.status.toString();
                return {
                    eventData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, eventData), { resultCode: resultCode })
                };
            }
            return { eventData: eventData };
        });
    };
    /**
     * @inheritdoc
     */
    GroupSiteDataSource.prototype.validateGroupName = function (displayName, groupAlias) {
        var _this = this;
        var mapErrorCode = function (errorCode) {
            var validationErrorCode;
            switch (errorCode.toLowerCase()) {
                case INVALID_LENGTH.toLowerCase():
                    validationErrorCode = 0 /* invalidLength */;
                    break;
                case MISSING_PREFIX_SUFFIX.toLowerCase():
                    validationErrorCode = 1 /* missingPrefixSuffix */;
                    break;
                case CONTAINS_BLOCK_WORD.toLowerCase():
                    validationErrorCode = 2 /* containsBlockedWord */;
                    break;
                case PROPERTY_CONFLIICT.toLowerCase():
                    validationErrorCode = 3 /* propertyConflict */;
                    break;
            }
            return validationErrorCode;
        };
        var assignErrorDetails = function (errorDetails) {
            return {
                validationPropertyName: errorDetails.ValidationPropertyName,
                validationErrorCode: mapErrorCode(errorDetails.ValidationErrorCode),
                validationErrorMessage: errorDetails.ValidationErrorMessage,
                prefix: errorDetails.Prefix,
                suffix: errorDetails.Suffix,
                blockedWord: errorDetails.BlockedWord
            };
        };
        return this.getData(function () {
            return _this._getUrl(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__["format"](VALIDATE_GROUP_NAME_URL_TEMPLATE, _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_4__["default"].encodeRestUriStringToken(displayName), _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_4__["default"].encodeRestUriStringToken(groupAlias)), DIRECTORY_SESSION_TEMPLATE);
        }, function (responseText) {
            var result = JSON.parse(responseText);
            if (result && result.d && result.d.ValidateGroupName) {
                var groupNameValidationResult = result.d.ValidateGroupName;
                var displayNameErrorDetails = groupNameValidationResult.DisplayNameErrorDetails
                    ? assignErrorDetails(groupNameValidationResult.DisplayNameErrorDetails)
                    : undefined;
                var aliasErrorDetails = groupNameValidationResult.AliasErrorDetails
                    ? assignErrorDetails(groupNameValidationResult.AliasErrorDetails)
                    : undefined;
                return {
                    isValidName: groupNameValidationResult.IsValidName,
                    errorCode: groupNameValidationResult.ErrorCode,
                    errorMessage: groupNameValidationResult.ErrorMessage,
                    displayNameErrorDetails: displayNameErrorDetails,
                    aliasErrorDetails: aliasErrorDetails
                };
            }
            return undefined;
        }, 'ValidateGroupName', undefined, 'GET', undefined, undefined, NUMBER_OF_RETRIES);
    };
    /**
     * @inheritdoc
     */
    GroupSiteDataSource.prototype.teamify = function () {
        var _this = this;
        var restUrl = function () {
            return _this._pageContext.webAbsoluteUrl + '/_api/GroupSiteManager/EnsureTeamForGroup';
        };
        var parseResult = function (responseText) {
            if (responseText) {
                var responseObj = JSON.parse(responseText);
                if (responseObj && responseObj.d) {
                    return responseObj.d.EnsureTeamForGroup;
                }
            }
            return undefined;
        };
        return this.getData(restUrl, parseResult, 'Groupify', function () {
            return '';
        }, 'POST', undefined, undefined, 0 /* no retries */);
    };
    GroupSiteDataSource.prototype._getUrl = function (op, ns) {
        return this._pageContext.webAbsoluteUrl + "/_api/" + ns + "/" + op;
    };
    GroupSiteDataSource.prototype._extractSiteAlias = function (siteUrl) {
        var alias = '';
        if (siteUrl && siteUrl.length > 0) {
            var startIndex = siteUrl.lastIndexOf('/') + 1;
            if (startIndex !== -1) {
                if (startIndex === siteUrl.length) {
                    siteUrl = siteUrl.substr(0, siteUrl.length - 1);
                    startIndex = siteUrl.lastIndexOf('/') + 1;
                }
                var aliasLength = siteUrl.length - startIndex;
                alias = siteUrl.substr(startIndex, aliasLength);
            }
        }
        return alias;
    };
    GroupSiteDataSource.prototype._parseClassificationOptions = function (classificationObjects, propertyName) {
        if (classificationObjects && classificationObjects.results) {
            return classificationObjects.results.map(function (classificationObject) {
                var classificationDescriptionItem = {
                    classificationTitle: classificationObject.Key
                };
                classificationDescriptionItem[propertyName] = classificationObject.Value;
                return classificationDescriptionItem;
            });
        }
        else {
            return undefined;
        }
    };
    return GroupSiteDataSource;
}(_site_SiteCreationDataSource__WEBPACK_IMPORTED_MODULE_1__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (GroupSiteDataSource);
//# sourceMappingURL=GroupSiteDataSource.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~odsp-datasources-groupsiteprovide~94eb3289_[locale].js.map