(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~odsp-datasources~spcx-panels~spcx-teamify"],{

/***/ "A6v3":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/interfaces/groups/SourceType.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: SourceType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceType", function() { return SourceType; });
/**
 * Represents the source of the group data.
 */
var SourceType;
(function (SourceType) {
    /** Group data comes from cache. */
    SourceType[SourceType["Cache"] = 0] = "Cache";
    /** Group data comes from the server. */
    SourceType[SourceType["Server"] = 1] = "Server";
    /** Group data is missing. */
    SourceType[SourceType["None"] = 2] = "None";
    /** Group data fetching error. */
    SourceType[SourceType["Error"] = 3] = "Error";
})(SourceType || (SourceType = {}));
/* harmony default export */ __webpack_exports__["default"] = (SourceType);
//# sourceMappingURL=SourceType.js.map

/***/ }),

/***/ "BAR4":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/groups/GroupsDataSource.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MembersList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MembersList */ "JUIJ");
/* harmony import */ var _base_CachedDataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/CachedDataSource */ "zpEg");
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/encoding/UriEncoding */ "+35T");
/* harmony import */ var _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/guid/Guid */ "vo05");
/* harmony import */ var _base_DataBatchOperationHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base/DataBatchOperationHelper */ "zMwE");
/* harmony import */ var _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-utilities/lib/alternativeUrls/SPAlternativeUrls */ "vmDi");
/* harmony import */ var _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");











/**
 * Default number of maximum retries when error occurs during rest call.
 */
var NUMBER_OF_RETRIES = 3;
/**
 * Main XHR query for getting Group resources.
 * Notice new parameter yammerResources and teamsResources. See IYammerResources and ITeamsResources for more details.
 */
var groupBasicPropertiesUrlTemplate = "Group('{0}')?$select=PrincipalName,Id,DisplayName,Alias,Description,InboxUrl,CalendarUrl,DocumentsUrl,SiteUrl,EditGroupUrl,PictureUrl,PeopleUrl,NotebookUrl,Mail,IsPublic,CreationTime,Classification,yammerResources,teamsResources,allowToAddGuests,isDynamic";
var groupBasicPropertiesUrlTemplateWithAssignedLabels = "Group('{0}')?$select=PrincipalName,Id,DisplayName,Alias,Description,InboxUrl,CalendarUrl,DocumentsUrl,SiteUrl,EditGroupUrl,PictureUrl,PeopleUrl,NotebookUrl,Mail,IsPublic,CreationTime,Classification,yammerResources,teamsResources,allowToAddGuests,isDynamic,assignedLabels";
var getGroupByAliasUrlTemplate = "Group(alias='{0}')";
var getGroupByIdUrlTemplate = "Group('{0}')";
var groupMembershipUrlTemplate = "Group('{0}')/{1}?$skip={2}&$top={3}&$inlinecount=allpages&$select=PrincipalName,Id,DisplayName,PictureUrl,UserType,Mail";
var addGroupMemberUrlTemplate = "Group('{0}')/Members/Add(objectId='{1}', principalName='{2}')";
var addGroupOwnerUrlTemplate = "Group('{0}')/Owners/Add(objectId='{1}', principalName='{2}')";
var removeGroupMemberUrlTemplate = "Group('{0}')/Members/Remove('{1}')";
var removeGroupOwnerUrlTemplate = "Group('{0}')/Owners/Remove('{1}')";
var getUserInfoUrlTemplate = "User(principalName='{0}')";
var userProfileUrlTemplate = '/_layouts/15/me.aspx?p={0}&v=profile&origin=ProfileODB';
var groupStatusPageTemplate = '/_layouts/15/groupstatus.aspx?id={0}&target={1}';
var getUserGroupsUrlTemplate = "User('{0}')/RankedMembership?$top=100&$select=DisplayName,DocumentsUrl,SharePointPictureUrl,PictureUrl,Id,IsFavorite";
var csomGetUserGroupsBodyTemplate = '<Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="Javascript Library"><Actions><ObjectPath Id="4" ObjectPathId="3" /><Query Id="5" ObjectPathId="3"><Query SelectAllProperties="true"><Properties /></Query></Query></Actions><ObjectPaths><StaticMethod Id="3" Name="GetMyGroups" TypeId="{1e54feb9-52a0-49f7-b464-6b722cf86f94}"><Parameters><Parameter Type="String">{0}</Parameter><Parameter Type="Number">0</Parameter><Parameter Type="Number">100</Parameter></Parameters></StaticMethod></ObjectPaths></Request>';
var deleteSiteUrlTemplate = "/_api/GroupSiteManager/Delete?siteUrl='{0}'";
var DISMISS_TEAMIFY_URL = "/_api/GroupSiteManager/HideTeamifyPrompt?siteUrl='{0}'";
var TEAMIFY_HIDDEN_URL = "/_api/GroupSiteManager/IsTeamifyPromptHidden?siteUrl='{0}'";
var TEAMIFY_HIDDEN_CACHE_KEY = 'isTeamifyPromptHidden';
/**
 * The string used in the userType attribute when a person is a guest user
 */
var USER_TYPE_GUEST = 'guest';
/**
 * The default number of owners to load.
 * May 2017 - AAD currently only allows a group to have up to 100 owners,
 * so there is no need to request more.
 */
var DEFAULT_NUMBER_OF_OWNERS = '100';
var GroupsDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GroupsDataSource, _super);
    function GroupsDataSource(pageContext) {
        var _this = _super.call(this, {
            dataSourceName: 'GroupsDataSource',
            id: 'GroupsDataSource'
        }, {
            pageContext: pageContext
        }) || this;
        _this._isTeamifyPromptHiddenCacheKey = pageContext
            ? TEAMIFY_HIDDEN_CACHE_KEY + ("_" + (pageContext.siteId + pageContext.groupId))
            : TEAMIFY_HIDDEN_CACHE_KEY;
        return _this;
    }
    /**
     * Copy from json to IPerson object
     */
    GroupsDataSource._copyMember = function (src) {
        return {
            sip: src.alias,
            userId: src.id,
            email: src.mail,
            principalName: src.principalName,
            name: src.displayName,
            job: src.title,
            image: src.sharePointPictureUrl,
            profilePage: src.profilePage,
            // If the userType returned from the server is 'guest', mark entity type as external user
            entityType: src && src.userType && src.userType === USER_TYPE_GUEST
                ? 1 /* EntityType.externalUser, use 1 to prevent perf issue */
                : undefined
        };
    };
    /**
     * Given response from the server convert it into IPerson object
     */
    GroupsDataSource._parseUser = function (responseText) {
        var src = JSON.parse(responseText);
        return GroupsDataSource._copyMember(src.d);
    };
    /**
     * Copy from member list json to MemberList object
     */
    GroupsDataSource._copyMembers = function (src) {
        var membersList = new _MembersList__WEBPACK_IMPORTED_MODULE_1__["default"]();
        membersList.members = src.map(function (member) {
            return GroupsDataSource._copyMember(member);
        });
        return membersList;
    };
    /**
     * Given response from the server convert it into a group
     */
    GroupsDataSource._parseGroup = function (responseText) {
        var src = JSON.parse(responseText);
        return GroupsDataSource._copyGroup(src.d);
    };
    /**
     * Given response from the server convert it into a membership
     */
    GroupsDataSource._parseMembership = function (responseText) {
        var src = JSON.parse(responseText);
        return GroupsDataSource._copyMembership(src.d);
    };
    /**
     * Copy from group json to group object
     */
    GroupsDataSource._copyGroup = function (src) {
        var group = {
            description: src.description,
            alias: src.alias,
            name: src.displayName,
            principalName: src.principalName,
            creationTime: src.creationTime,
            pictureUrl: src.pictureUrl,
            inboxUrl: src.inboxUrl,
            calendarUrl: src.calendarUrl,
            filesUrl: src.documentsUrl,
            sharePointUrl: src.siteUrl,
            editUrl: src.editGroupUrl,
            membersUrl: src.peopleUrl,
            notebookUrl: src.notebookUrl,
            teamsUrl: src.teamsUrl,
            isPublic: src.isPublic,
            mail: src.mail,
            classification: src.classification,
            yammerResources: src.yammerResources,
            teamsResources: src.teamsResources,
            allowToAddGuests: src.allowToAddGuests,
            isDynamic: src.isDynamic,
            membership: GroupsDataSource._copyMembership(src)
        };
        if (GroupsDataSource._isDisplayAssignedLabelsInsteadOfClassificationFeatureEnabled) {
            group.assignedLabels = src.assignedLabels;
        }
        return group;
    };
    /** Copies the response data into a IMembership object */
    GroupsDataSource._copyMembership = function (src) {
        return {
            totalNumberOfMembers: typeof src.__count === 'string' ? parseInt(src.__count, 10) : src.__count,
            membersList: src && src.results ? GroupsDataSource._copyMembers(src.results) : undefined
        };
    };
    /**
     * Given response from server, convert it into an IOwnership
     */
    GroupsDataSource._parseOwnership = function (responseText) {
        var src = JSON.parse(responseText);
        return GroupsDataSource._copyOwnership(src.d);
    };
    /** Copies the response data into a IOwnership object */
    GroupsDataSource._copyOwnership = function (src) {
        return {
            totalNumberOfOwners: typeof src.__count === 'string' ? parseInt(src.__count, 10) : src.__count,
            ownersList: src && src.results ? GroupsDataSource._copyMembers(src.results) : undefined
        };
    };
    Object.defineProperty(GroupsDataSource, "_isDisplayAssignedLabelsInsteadOfClassificationFeatureEnabled", {
        get: function () {
            return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_9__["default"].isFeatureEnabled({ ODB: 1688 /**AuthZenAssignedLableSupportForGroupRestAPI  */ });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a promise that includes Group's basic properties
     * Basic properties include: name, principalName, alias, mail, description, creationTime,
     * inboxUrl, calendarUrl, filesUrl, notebookUrl, pictureUrl, sharePointUrl, editUrl, membersUrl, isPublic
     * yammerResources, teamsResources, allowToAddGuests, isDynamic
     */
    GroupsDataSource.prototype.getGroupBasicProperties = function (groupId) {
        var _this = this;
        return this.getData(function () {
            return _this._getUrl(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"]((GroupsDataSource._isDisplayAssignedLabelsInsteadOfClassificationFeatureEnabled &&
                groupBasicPropertiesUrlTemplateWithAssignedLabels) ||
                groupBasicPropertiesUrlTemplate, groupId), 'SP.Directory.DirectorySession');
        }, function (responseText) {
            var parsedGroup = GroupsDataSource._parseGroup(responseText);
            if (!parsedGroup.id) {
                // ensure that the group has id.
                parsedGroup.id = groupId;
            }
            _this._calculateMissingGroupProperties(parsedGroup, groupId);
            return parsedGroup;
        }, 'GetBasicProperties', undefined, 'GET', undefined, undefined, NUMBER_OF_RETRIES);
    };
    /**
     * Returns a promise to update the basic properties of the specified Group
     */
    GroupsDataSource.prototype.setGroupBasicProperties = function (group) {
        var _this = this;
        if (!group) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_3__["default"].reject('Group parameter is null or undefined');
        }
        var restUrl = function () {
            return _this._getUrl(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](getGroupByIdUrlTemplate, group.id), 'SP.Directory.DirectorySession');
        };
        var postData = function () {
            var data;
            if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_10__["Killswitch"].isActivated('97B53A51-2910-4797-9994-18DC8486A4CF', '04/14/2020', 'Smarter Save Logic')) {
                data = {
                    __metadata: {
                        type: 'SP.Directory.Group'
                    }
                };
            }
            else {
                data = {
                    __metadata: {
                        type: 'SP.Directory.Group'
                    },
                    displayName: group.name,
                    description: group.description
                };
            }
            if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_10__["Killswitch"].isActivated('97B53A51-2910-4797-9994-18DC8486A4CF', '04/14/2020', 'Smarter Save Logic')) {
                if (group.name) {
                    data.displayName = group.name;
                }
                if (group.description) {
                    data.description = group.description;
                }
            }
            // If assignedLabel is enabled, don't send classification.
            if (GroupsDataSource._isDisplayAssignedLabelsInsteadOfClassificationFeatureEnabled &&
                group.assignedLabels) {
                if (group.isPublic != null) {
                    // Send the privacy if changed (no label or label with unspecified privacy).
                    data.isPublic = group.isPublic;
                }
                if (group.assignedLabels === _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_6__["default"].Empty) {
                    // Choosing no label. Send empty string label to AAD to clear the value.
                    data.assignedLabels = '';
                }
                else {
                    data.assignedLabels = group.assignedLabels;
                }
            }
            else {
                if (group.isPublic != null) {
                    data.isPublic = group.isPublic;
                }
                if (group.classification) {
                    data.classification = group.classification;
                }
            }
            return JSON.stringify(data);
        };
        return this.getData(restUrl, undefined /*parseResponse*/, 'SetBasicProperties' /*qosName*/, postData, 'PATCH' /*method*/, undefined /*additionalHeaders*/, undefined /*contentType*/, NUMBER_OF_RETRIES);
    };
    /**
     * Returns a promise that returns a group with the given alias
     */
    GroupsDataSource.prototype.getGroupByAlias = function (groupAlias) {
        var _this = this;
        return this.getData(function () {
            return _this._getUrl(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](getGroupByAliasUrlTemplate, groupAlias), 'SP.Directory.DirectorySession');
        }, function (responseText) {
            var parsedGroup = GroupsDataSource._parseGroup(responseText);
            return parsedGroup;
        }, 'GetGroupByAlias', undefined, 'GET', undefined, undefined, 0 /* NumberOfRetries*/);
    };
    /**
     * Returns a promise that includes Group's membership information.
     * If loadAllMembers is true, membersList will contain all members. Otherwise, will contain top three.
     * If loadOwnerInformation is true, members who are also owners will have their isOwnerOfCurrentGroup attribute set to true.
     * Otherwise, the attribute will not be set to avoid making an extra call to get the group owners.
     * Membership properties include: isMember, isOwner, isJoinPending, membersList
     *
     * TODO: Note that until we implement paging, loading all members really loads top 100.
     *
     * @param groupId - the id of the group
     * @param userLoginName - user login name passed from the page in form of user@microsoft.com
     * @param loadAllMembers - true to load all members, false to load only top three. Defaults to false.
     * @param loadOwnershipInformation - true to include information about which members are group owners. Defaults to false.
     */
    GroupsDataSource.prototype.getGroupMembership = function (groupId, userLoginName, loadAllMembers, loadOwnershipInformation) {
        var _this = this;
        if (loadAllMembers === void 0) { loadAllMembers = false; }
        if (loadOwnershipInformation === void 0) { loadOwnershipInformation = false; }
        // TODO: implement paging for large groups
        var numberOfMembersToLoad = loadAllMembers ? '100' : '3';
        return this.getData(function () {
            return _this._getUrl(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](groupMembershipUrlTemplate, groupId, 'members', '0' /*skip zero members*/, numberOfMembersToLoad), 'SP.Directory.DirectorySession');
        }, function (responseText) {
            var membership = GroupsDataSource._parseMembership(responseText);
            // TODO: remove once Federated directory will start returning user membership information.
            // Calculates missing membership properties such as user images.
            _this._calculateMissingMembershipProperties(membership, userLoginName);
            return membership;
        }, 'GetMembership', undefined, 'GET', undefined, undefined, NUMBER_OF_RETRIES).then(function (membership) {
            // Augment the members with ownership information if requested
            if (loadOwnershipInformation) {
                return _this._addOwnerInformation(groupId, userLoginName, membership);
            }
            else {
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_3__["default"].resolve(membership);
            }
        });
    };
    /**
     * Returns a promise that includes one page of group members.
     *
     * @param groupId The id of the unified group
     * @param userLoginName Current user login name passed from the page in form of user@microsoft.com
     * @param skip Number of members to skip (aka starting index)
     * @param top Number of members to include in the page. Recommended number is 20 for best performance.
     */
    GroupsDataSource.prototype.getGroupMembershipPage = function (groupId, userLoginName, skip, top) {
        var _this = this;
        return this.getData(function () {
            return _this._getUrl(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](groupMembershipUrlTemplate, groupId, 'members', skip, top), 'SP.Directory.DirectorySession');
        }, function (responseText) {
            var membership = GroupsDataSource._parseMembership(responseText);
            // TODO: remove once Federated directory will start returning user membership information.
            // Calculates user images.
            _this._calculateMissingMembershipProperties(membership, userLoginName);
            return membership;
        }, 'GetMembershipPage', undefined, 'GET', undefined, undefined, NUMBER_OF_RETRIES);
    };
    /**
     * Returns a promise that includes only the Group's owners
     * Ownership properties include: totalNumberOfOwners, ownersList
     *
     * @param {string} groupId The id of the group
     * @param {string} numberOfOwnersToLoad A string representation of the number of owners to load, used in the URL template.
     * Defaults to 100, the maximum number of group owners permitted by AAD.
     */
    GroupsDataSource.prototype.getGroupOwnership = function (groupId, numberOfOwnersToLoad) {
        var _this = this;
        var top = numberOfOwnersToLoad ? numberOfOwnersToLoad : DEFAULT_NUMBER_OF_OWNERS;
        return this.getData(function () {
            return _this._getUrl(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](groupMembershipUrlTemplate, groupId, 'owners', '0' /*skip zero owners*/, top), 'SP.Directory.DirectorySession');
        }, function (responseText) {
            var ownership = GroupsDataSource._parseOwnership(responseText);
            // Calculates user images and profile pages
            _this._calculateMissingOwnershipProperties(ownership);
            return ownership;
        }, 'GetOwnership', undefined, 'GET', undefined, undefined, NUMBER_OF_RETRIES);
    };
    /**
     * The CSOM method that retrieves the user information from Azure Active Directory‎,
     * and returns a promise that includes groups that user is a member of.
     *
     * @param user - indicates the user for which the groups are returned
     */
    GroupsDataSource.prototype.getUserGroupsFromAAD = function (user) {
        var _this = this;
        var csomUrl = function () {
            return _this._getCsomUrl('ProcessQuery');
        };
        return this.getData(csomUrl, this._parseResponseForGetUserGroups.bind(this), 'GetUserGroupsFromAAD', function () {
            return _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](csomGetUserGroupsBodyTemplate, user.email);
        }, 'POST');
    };
    /**
     * Returns a promise that includes groups that user is a member of.
     * Calls the FBI rest endpoint by default which in turn calls Exchange and returns a sorted (Prankie) list of groups.
     * Also has a fallback that retrieves the user information from Azure Active Directory.
     *
     * @param user - indicates the user for which the groups are returned
     */
    GroupsDataSource.prototype.getUserGroups = function (user) {
        var _this = this;
        var GET_USER_GROUPS_FBIRANKED_RETRIES = 0;
        var restUrl = function () {
            return _this._getUrl(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](getUserGroupsUrlTemplate, user.userId), 'SP.Directory.DirectorySession');
        };
        var getUserGroupsFallback = function () {
            return _this.getUserGroupsFromAAD(user);
        };
        return this.getData(restUrl, this._parseResponseForGetUserGroups.bind(this), 'GetUserGroups', undefined, 'GET', undefined, undefined, GET_USER_GROUPS_FBIRANKED_RETRIES).then(function (value) {
            if (!value || !value.length) {
                // If we get an empty list then fallback to ADD
                return getUserGroupsFallback();
            }
            return value;
        }, getUserGroupsFallback);
    };
    /**
     * Returns a promise that user was added to the group as a member.
     *
     * @param groupId The GUID of of the group where the member will be added.
     * @param userId The GUID of the user to be added as a member of the group.
     * @param principalName The principal name of the user to be added as a member of the group.
     * @param qosName The customized qosName, if not provided, the default qosName will be used.
     */
    GroupsDataSource.prototype.addGroupMember = function (groupId, userId, principalName, qosName) {
        var _this = this;
        userId = userId ? userId : _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_6__["default"].Empty;
        principalName = principalName ? principalName : '';
        var restUrl = function () {
            return _this._getUrl(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](addGroupMemberUrlTemplate, groupId, userId, principalName), 'SP.Directory.DirectorySession');
        };
        return this.getData(restUrl, undefined, qosName || 'AddMember', undefined, 'POST', undefined, undefined, NUMBER_OF_RETRIES);
    };
    /**
     * Returns a promise that user was added to the group as a owner.
     *
     * @param groupId The GUID of of the group where the owner will be added.
     * @param userId The GUID of the user to be added as a onwer of the group.
     * @param principalName The principal name of the user to be added as a onwer of the group.
     * @param qosName The customized qosName, if not provided, the default qosName will be used.
     */
    GroupsDataSource.prototype.addGroupOwner = function (groupId, userId, principalName, qosName) {
        var _this = this;
        userId = userId ? userId : _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_6__["default"].Empty;
        principalName = principalName ? principalName : '';
        var restUrl = function () {
            return _this._getUrl(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](addGroupOwnerUrlTemplate, groupId, userId, principalName), 'SP.Directory.DirectorySession');
        };
        return this.getData(restUrl, undefined, qosName || 'AddOwner', undefined, 'POST', undefined, undefined, NUMBER_OF_RETRIES);
    };
    /**
     * Returns a promise that user was removed from the group as a member.
     *
     * @param groupId The GUID of of the group where the member will be removed.
     * @param userId The GUID of the user to be removed from the group membership.
     * @param qosName The customized qosName, if not provided, the default qosName will be used.
     */
    GroupsDataSource.prototype.removeGroupMember = function (groupId, userId, qosName) {
        var _this = this;
        var restUrl = function () {
            return _this._getUrl(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](removeGroupMemberUrlTemplate, groupId, userId), 'SP.Directory.DirectorySession');
        };
        return this.getData(restUrl, undefined, qosName || 'RemoveMember', undefined, 'POST', undefined, undefined, NUMBER_OF_RETRIES);
    };
    /**
     * Returns a promise that user was removed from the group as a owner.
     *
     * @param groupId The GUID of of the group where the owner will be removed.
     * @param userId The GUID of the user to be removed from the group ownership.
     * @param qosName The customized qosName, if not provided, the default qosName will be used.
     */
    GroupsDataSource.prototype.removeGroupOwner = function (groupId, userId, qosName) {
        var _this = this;
        var restUrl = function () {
            return _this._getUrl(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](removeGroupOwnerUrlTemplate, groupId, userId), 'SP.Directory.DirectorySession');
        };
        return this.getData(restUrl, undefined, qosName || 'RemoveOwner', undefined, 'POST', undefined, undefined, NUMBER_OF_RETRIES);
    };
    /**
     * Returns a promise that add users to the group as members or owners.
     *
     * @param groupId The GUID of of the group where the members and oweners will be added.
     * @param owners The GUID of the users to be added as owners of the group.
     * @param members The GUID of the users to be added as members of the group.
     * @param ownersPrincipalName The principal names of the users to be added as members of the group.
     * @param membersPrincipalName The principal names of the users to be added as owners of the group.
     */
    GroupsDataSource.prototype.addUsersToGroup = function (groupId, owners, members, ownersPrincipalName, membersPrincipalName) {
        var _this = this;
        var batchGuid = _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_6__["default"].generate();
        var contentType = 'multipart/mixed; boundary=batch_' + batchGuid;
        var membersEndPoints = [];
        var ownersEndPoints = [];
        var ownersNumber = 0;
        var membersNumber = 0;
        var addGroupUsers = function (usersArray, isAddingOwner, isUsingPrincipalName) {
            var addGroupUsersUrlTemplate = isAddingOwner ? addGroupOwnerUrlTemplate : addGroupMemberUrlTemplate;
            for (var i = 0; i < usersArray.length; i++) {
                var userId = void 0;
                var principalName = void 0;
                if (isUsingPrincipalName) {
                    principalName = usersArray[i];
                }
                else {
                    userId = usersArray[i];
                }
                if (userId || principalName) {
                    userId = userId ? userId : _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_6__["default"].Empty;
                    principalName = principalName ? principalName : '';
                    var getUrl = _this._getUrl(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](addGroupUsersUrlTemplate, groupId, userId, principalName), 'SP.Directory.DirectorySession');
                    if (isAddingOwner) {
                        ownersEndPoints.push(getUrl);
                    }
                    else {
                        membersEndPoints.push(getUrl);
                    }
                }
            }
        };
        if (owners) {
            addGroupUsers(owners, true /* isAddingOwner */, false /* isUsingPrincipalName */);
            ownersNumber = owners.length;
        }
        else if (ownersPrincipalName) {
            addGroupUsers(ownersPrincipalName, true /* isAddingOwner */, true /* isUsingPrincipalName */);
            ownersNumber = ownersPrincipalName.length;
        }
        if (members) {
            addGroupUsers(members, false /* isAddingOwner */, false /* isUsingPrincipalName */);
            membersNumber = members.length;
        }
        else if (membersPrincipalName) {
            addGroupUsers(membersPrincipalName, false /* isAddingOwner */, true /* isUsingPrincipalName */);
            membersNumber = membersPrincipalName.length;
        }
        if (ownersEndPoints.length < 1 && membersEndPoints.length < 1) {
            return;
        }
        var addUsersToGroupQosHandler = function (input) {
            var errorData = input.errorData, eventData = input.eventData;
            if (errorData) {
                errorData.extraData = {
                    OwnersNumber: ownersNumber,
                    MembersNumber: membersNumber
                };
                return {
                    eventData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, eventData), { resultCode: errorData.status.toString() })
                };
            }
            return { eventData: eventData };
        };
        // When adding members and owners to same group, they needs to be different changeset
        var batchRequestPromise = this.getData(
        /* getUrl */ function () {
            return _base_DataBatchOperationHelper__WEBPACK_IMPORTED_MODULE_7__["DataBatchOperationHelper"].getBatchOperationUrl(_this._pageContext.webAbsoluteUrl);
        }, 
        /* parseResponse */ function (responseText) {
            return responseText;
        }, 
        /* qosName */ 'AddUsersToGroup', 
        /* getAddtionalPostData */ function () {
            return _base_DataBatchOperationHelper__WEBPACK_IMPORTED_MODULE_7__["DataBatchOperationHelper"].getBatchContent(batchGuid, [ownersEndPoints, membersEndPoints], 'POST', _base_DataBatchOperationHelper__WEBPACK_IMPORTED_MODULE_7__["DataBatchOperationHelper"].defaultBatchRequestPostData);
        }, 
        /* method */ 'POST', 
        /* additionalHeaders */ undefined, 
        /* contentType */ contentType, 
        /* maxRetries */ undefined, 
        /* noRedirect */ undefined, 
        /* crossSiteCollectionCall */ undefined, 
        /* telemetryHandler */ addUsersToGroupQosHandler, 
        /* qosExtraData */ undefined);
        var onExecute = function (complete, error) {
            batchRequestPromise.then(function (responseFromServer) {
                var batchResponseResult = _base_DataBatchOperationHelper__WEBPACK_IMPORTED_MODULE_7__["DataBatchOperationHelper"].processBatchResponse(responseFromServer);
                if (batchResponseResult.hasError) {
                    error(batchResponseResult);
                }
                else {
                    complete(batchResponseResult);
                }
            }, function (errorFromServer) {
                error(errorFromServer);
            });
        };
        return new _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_3__["default"](onExecute);
    };
    /**
     * Returns a promise that add or remove users to the group as owners or members.
     *
     * @param groupId The GUID of of the group where the members and oweners will be added.
     * @param owners The GUID of the users to be added as owners of the group.
     * @param members The GUID of the users to be added as members of the group.
     * @param ownersPrincipalName The principal names of the users to be added as members of the group.
     * @param membersPrincipalName The principal names of the users to be added as owners of the group.
     */
    GroupsDataSource.prototype.addRemoveGroupUsers = function (groupId, ownersToAdd, membersToAdd, ownersToRemove, membersToRemove) {
        var _this = this;
        var batchGuid = _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_6__["default"].generate();
        var contentType = 'multipart/mixed; boundary=batch_' + batchGuid;
        var addOwnersEndPoints = [];
        var addMembersEndPoints = [];
        var removeOwnersEndPoints = [];
        var removeMembersEndPoints = [];
        var addOrRemoveGroupUsers = function (usersArray, isOwner, isAdding) {
            var baseUrl = 'SP.Directory.DirectorySession';
            if (usersArray === undefined) {
                return;
            }
            for (var i = 0; i < usersArray.length; i++) {
                if (isOwner) {
                    if (isAdding) {
                        var getUrl = _this._getUrl(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](addGroupOwnerUrlTemplate, groupId, usersArray[i], ''), baseUrl);
                        addOwnersEndPoints.push(getUrl);
                    }
                    else {
                        var getUrl = _this._getUrl(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](removeGroupOwnerUrlTemplate, groupId, usersArray[i]), baseUrl);
                        removeOwnersEndPoints.push(getUrl);
                    }
                }
                else {
                    if (isAdding) {
                        var getUrl = _this._getUrl(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](addGroupMemberUrlTemplate, groupId, usersArray[i], ''), baseUrl);
                        addMembersEndPoints.push(getUrl);
                    }
                    else {
                        var getUrl = _this._getUrl(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](removeGroupMemberUrlTemplate, groupId, usersArray[i]), baseUrl);
                        removeMembersEndPoints.push(getUrl);
                    }
                }
            }
        };
        addOrRemoveGroupUsers(ownersToAdd, true /* isOwner */, true /* isAdding */);
        addOrRemoveGroupUsers(ownersToRemove, true /* isOwner */, false /* isAdding */);
        addOrRemoveGroupUsers(membersToAdd, false /* isOwner */, true /* isAdding */);
        addOrRemoveGroupUsers(membersToRemove, false /* isOwner */, false /* isAdding */);
        if (addOwnersEndPoints.length === 0 &&
            addMembersEndPoints.length === 0 &&
            removeOwnersEndPoints.length === 0 &&
            removeMembersEndPoints.length === 0) {
            return;
        }
        var addRemoveGroupUsersQosHandler = function (input) {
            var errorData = input.errorData, eventData = input.eventData;
            if (errorData) {
                errorData.extraData = {
                    OwnersToAdd: addOwnersEndPoints.length,
                    MembersToAdd: addMembersEndPoints.length,
                    OwnersToRemove: removeOwnersEndPoints.length,
                    MembersToRemove: removeMembersEndPoints.length
                };
                return {
                    eventData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, eventData), { resultCode: errorData.status.toString() })
                };
            }
            return { eventData: eventData };
        };
        // When adding owners to same group, they needs to be different changeset
        var batchRequestPromise = this.getData(
        /* getUrl */ function () {
            return _base_DataBatchOperationHelper__WEBPACK_IMPORTED_MODULE_7__["DataBatchOperationHelper"].getBatchOperationUrl(_this._pageContext.webAbsoluteUrl);
        }, 
        /* parseResponse */ function (responseText) {
            return responseText;
        }, 
        /* qosName */ 'AddRemoveGroupOwners', 
        /* getAddtionalPostData */ function () {
            return _base_DataBatchOperationHelper__WEBPACK_IMPORTED_MODULE_7__["DataBatchOperationHelper"].getBatchContent(batchGuid, [addOwnersEndPoints, addMembersEndPoints, removeOwnersEndPoints, removeMembersEndPoints], 'POST', _base_DataBatchOperationHelper__WEBPACK_IMPORTED_MODULE_7__["DataBatchOperationHelper"].defaultBatchRequestPostData);
        }, 
        /* method */ 'POST', 
        /* additionalHeaders */ undefined, 
        /* contentType */ contentType, 
        /* maxRetries */ undefined, 
        /* noRedirect */ undefined, 
        /* crossSiteCollectionCall */ undefined, 
        /* telemetryHandler */ addRemoveGroupUsersQosHandler, 
        /* qosExtraData */ undefined);
        var onExecute = function (complete, error) {
            batchRequestPromise.then(function (responseFromServer) {
                var batchResponseResult = _base_DataBatchOperationHelper__WEBPACK_IMPORTED_MODULE_7__["DataBatchOperationHelper"].processBatchResponse(responseFromServer);
                if (batchResponseResult.hasError) {
                    error(batchResponseResult);
                }
                else {
                    complete(batchResponseResult);
                }
            }, function (errorFromServer) {
                error(errorFromServer);
            });
        };
        return new _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_3__["default"](onExecute);
    };
    /**
     * Returns an IPerson promise of a current user given user's principal name
     * by making GetGraphUser rest call to federated directory
     */
    GroupsDataSource.prototype.getUserInfo = function (userPrincipalName) {
        var _this = this;
        var restUrl = function () {
            return _this._getUrl(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](getUserInfoUrlTemplate, _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_5__["default"].encodeRestUriStringToken(userPrincipalName)), 'SP.Directory.DirectorySession');
        };
        return this.getData(restUrl, function (responseText) {
            var user = GroupsDataSource._parseUser(responseText);
            user.email = userPrincipalName;
            return user;
        }, 'GetGraphUser', undefined, 'GET', undefined, undefined, NUMBER_OF_RETRIES);
    };
    /**
     * Requests the deletion of the specified group
     */
    GroupsDataSource.prototype.deleteGroup = function (group) {
        var _this = this;
        if (!group) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_3__["default"].reject('Group parameter is null or undefined');
        }
        var restUrl = function () {
            return _this._getUrl(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](getGroupByIdUrlTemplate, group.id), 'SP.Directory.DirectorySession');
        };
        return this.getData(restUrl, undefined /*parseResponse*/, 'DeleteGroup' /*qosName*/, undefined /*getAdditionalPostData*/, 'DELETE' /*method*/, undefined /*additionalHeaders*/, undefined /*contentType*/, NUMBER_OF_RETRIES);
    };
    /**
     * Requests the deletion of the specified group site
     */
    GroupsDataSource.prototype.deleteSite = function (siteUrl) {
        var _this = this;
        var restUrl = function () {
            return _this._pageContext.siteAbsoluteUrl + _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](deleteSiteUrlTemplate, siteUrl);
        };
        return this.getData(restUrl, undefined /* parseResponse */, 'DeleteSite' /* qosName */, undefined /* getAdditionalPostData */, 'POST' /* method */, undefined /* additionalHeaders */, undefined /* contentType */, NUMBER_OF_RETRIES);
    };
    /**
     * @inheritdoc
     */
    GroupsDataSource.prototype.teamify = function () {
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
    GroupsDataSource.prototype.teamifyV2 = function (tabItems, callback) {
        var _this = this;
        var createTeamUrl = function () {
            return _this._pageContext.webAbsoluteUrl + '/_api/GroupSiteManager/EnsureTeamForGroupEx';
        };
        var parseCreateTeamResult = function (responseText) {
            if (responseText) {
                var responseObj = JSON.parse(responseText);
                if (responseObj && responseObj.d) {
                    return responseObj.d.EnsureTeamForGroupEx;
                }
            }
            return undefined;
        };
        return this.getData(createTeamUrl, parseCreateTeamResult, 'TeamifyV2' /* qos name*/, function () {
            return '';
        }, 'POST', undefined, undefined, 0 /* no retries */).then(function (createTeamResult) {
            callback(createTeamResult);
            if (createTeamResult && createTeamResult.teamsId) {
                return _this._pinToTeam(createTeamResult, tabItems);
            }
            else {
                return undefined;
            }
        });
    };
    GroupsDataSource.prototype.dismissTeamifyBanner = function () {
        var _this = this;
        var restUrl = function () {
            return (_this._pageContext.siteAbsoluteUrl +
                _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](DISMISS_TEAMIFY_URL, _this._pageContext.siteAbsoluteUrl));
        };
        return this.getData(restUrl, function (response) {
            return null;
        }, 'DismissTeamifyBanner', function () {
            return '';
        }, 'POST').then(function () {
            // Invalidate previous cache and fetch new value
            if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_10__["Killswitch"].isActivated('B96CEE94-D6AD-4AAA-9E6F-DFD3A0CA44BA', '4/20/2020', 'Cache getTeamifyBannerHidden call')) {
                _this.flushCache(_this._isTeamifyPromptHiddenCacheKey);
                _this.getTeamifyBannerHidden(true);
            }
        });
    };
    GroupsDataSource.prototype.getTeamifyBannerHidden = function (forceRefresh) {
        var _this = this;
        var restUrl = function () {
            return (_this._pageContext.siteAbsoluteUrl +
                _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](TEAMIFY_HIDDEN_URL, _this._pageContext.siteAbsoluteUrl));
        };
        var parseResponse = function (response) {
            var parsed = JSON.parse(response);
            if (parsed && parsed.d) {
                return parsed.d.IsTeamifyPromptHidden;
            }
            return false;
        };
        if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_10__["Killswitch"].isActivated('B96CEE94-D6AD-4AAA-9E6F-DFD3A0CA44BA', '4/20/2020', 'Cache getTeamifyBannerHidden call')) {
            return this.getDataUtilizingPersistentCache({
                getUrl: restUrl,
                qosName: 'TeamifyBannerHidden',
                parseResponse: parseResponse,
                additionalPostData: '',
                method: 'Get',
                cachingStrategy: forceRefresh
                    ? 3 /* bypassCache */
                    : 0 /* useCacheAndUpdateInTheBackground */,
                cacheRequestKey: this._isTeamifyPromptHiddenCacheKey
            });
        }
        else {
            return this.getData(restUrl, parseResponse, 'TeamifyBannerHidden', function () {
                return '';
            }, 'Get');
        }
    };
    GroupsDataSource.prototype._getUrl = function (op, ns) {
        return this._pageContext.webAbsoluteUrl + "/_api/" + ns + "/" + op;
    };
    GroupsDataSource.prototype._getCsomUrl = function (op) {
        return this._pageContext.webAbsoluteUrl + "/_vti_bin/client.svc/" + op;
    };
    GroupsDataSource.prototype._getGroupStatusNotebookUrl = function (groupId) {
        return (this._pageContext.webAbsoluteUrl + _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](groupStatusPageTemplate, groupId, 'notebook'));
    };
    GroupsDataSource.prototype._getGroupStatusFilesUrl = function (groupId) {
        return (this._pageContext.webAbsoluteUrl + _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](groupStatusPageTemplate, groupId, 'documents'));
    };
    GroupsDataSource.prototype._addOwnerInformation = function (groupId, userLoginName, membership) {
        // A member is an owner if he/she is present in the owners list. In theory, all owners are also present in the members list.
        // In practice, this may not be properly enforced, so we must check for any owners not found in the members list.
        // TODO: progressive loading for large numbers of owners.
        return this.getGroupOwnership(groupId, DEFAULT_NUMBER_OF_OWNERS).then(function (ownership) {
            var ownersFromServer = ownership.ownersList.members;
            var membersFromServer = membership.membersList.members;
            var combinedMembersList = [];
            var ownerDictionary = {};
            ownersFromServer.forEach(function (owner) {
                ownerDictionary[owner.userId] = true;
                // If the current user is present in the owners list, set isOwner to true
                if (owner.principalName.toLowerCase() === userLoginName.toLowerCase()) {
                    membership.isOwner = true;
                }
            });
            var numberOfOwnersFound = 0;
            var foundOwnersDictionary = {};
            membersFromServer.forEach(function (member) {
                // If the member is present in the owners list, we mark it as an owner
                if (ownerDictionary[member.userId]) {
                    member.isOwnerOfCurrentGroup = true;
                    combinedMembersList.push(member);
                    numberOfOwnersFound++;
                    foundOwnersDictionary[member.userId] = true;
                }
                else {
                    combinedMembersList.push(member);
                }
                if (member.principalName === userLoginName) {
                    membership.isMember = true;
                }
            });
            // Check for a malformed members list - are there any dangling owners we didn't find in the members list?
            if (numberOfOwnersFound < ownersFromServer.length) {
                ownersFromServer.forEach(function (owner) {
                    if (!foundOwnersDictionary[owner.userId]) {
                        owner.isOwnerOfCurrentGroup = true;
                        combinedMembersList.push(owner);
                    }
                });
            }
            // Use the combined list of owners and members in the IMembership object
            membership.membersList.members = combinedMembersList;
            // If owners were missing from the members list, the count of total number of members returned from the server could be
            // inaccurate. Try to correct for this to the extent possible.
            if (membership.totalNumberOfMembers < combinedMembersList.length) {
                membership.totalNumberOfMembers = combinedMembersList.length;
            }
            membership.totalNumberOfOwners = ownership.totalNumberOfOwners;
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_3__["default"].resolve(membership);
        });
    };
    GroupsDataSource.prototype._fixUserImages = function (member) {
        if (!member.image && member.email) {
            member.image = Object(_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8__["getUserPhotoUrl"])(member.email);
        }
        if (!member.profilePage && member.email) {
            member.profilePage = _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"](userProfileUrlTemplate, member.email);
        }
    };
    /**
     * Calculates and sets member image and profile page
     * Remove once federated directory makes appropriate fixes
     */
    GroupsDataSource.prototype._calculateMissingMembershipProperties = function (groupMembership, userLoginName) {
        var _this = this;
        groupMembership.membersList.members.forEach(function (member) {
            _this._fixUserImages(member);
        });
    };
    /**
     * Calculates and sets image and profile page for each group owner
     *
     * @param {IOwnership} groupOwnership - the IOwnership object containing the group's owners
     */
    GroupsDataSource.prototype._calculateMissingOwnershipProperties = function (groupOwnership) {
        var _this = this;
        groupOwnership.ownersList.members.forEach(function (owner) {
            _this._fixUserImages(owner);
        });
    };
    /**
     *  Remove once federated directory makes appropriate fixes
     */
    GroupsDataSource.prototype._calculateMissingGroupProperties = function (group, groupId) {
        if (!group.creationTime) {
            group.creationTime = Date.now();
        }
        if (group.pictureUrl) {
            group.pictureUrl = group.pictureUrl.replace('EWS/Exchange.asmx/s/GetUserPhoto', 'OWA/service.svc/s/GetPersonaPhoto');
        }
        if (!group.notebookUrl && groupId) {
            group.notebookUrl = this._getGroupStatusNotebookUrl(groupId);
        }
        if (!group.filesUrl && groupId) {
            group.filesUrl = this._getGroupStatusFilesUrl(groupId);
        }
    };
    /**
     *  Parse the response for the getUserGroups and getUserGroupsFallback.
     */
    GroupsDataSource.prototype._parseResponseForGetUserGroups = function (responseText) {
        var _this = this;
        var r = JSON.parse(responseText);
        // CSOM call will return an array
        if (r.constructor === Array) {
            return r[4].GroupsList.map(function (obj) {
                return {
                    filesUrl: obj.DocumentsUrl,
                    name: obj.DisplayName,
                    id: obj.Id
                };
            });
        }
        else {
            // RankedMembership REST call
            var restResults = r.d.results;
            var results = restResults.map(function (obj) {
                var group = {
                    filesUrl: obj.documentsUrl,
                    name: obj.displayName,
                    id: obj.id,
                    pictureUrl: obj.pictureUrl,
                    isFavorite: obj.isFavorite
                };
                _this._calculateMissingGroupProperties(group, group.id);
                return group;
            });
            // Results that we receive from the server are backwards
            var sortedGroups = results.filter(function (group) { return group.isFavorite; });
            sortedGroups.push.apply(sortedGroups, results.filter(function (group) { return !group.isFavorite; }));
            return sortedGroups;
        }
    };
    GroupsDataSource.prototype._pinToTeam = function (teamsResponse, tabItems) {
        var _this = this;
        tabItems = tabItems.map(function (item) {
            return {
                displayName: item.displayName,
                isDefault: item.isDefault,
                url: item.url,
                itemType: item.itemType
            };
        });
        var PinToTeamUrl = function () {
            return _this._pageContext.siteAbsoluteUrl + '/_api/GroupSiteManager/PinToTeam';
        };
        var parsePinToTabResult = function (responseText) {
            if (responseText) {
                var responseObj = JSON.parse(responseText);
                if (responseObj && responseObj.d) {
                    return {
                        pinToTeam: responseObj.d.PinToTeam,
                        teamsInfo: teamsResponse
                    };
                }
            }
        };
        var pinToTeamPostData = function () {
            if (_this._pageContext &&
                _this._pageContext.navigationInfo &&
                _this._pageContext.navigationInfo.quickLaunch) {
                // tslint:disable-next-line:no-any
                var data = {
                    requestParams: {
                        __metadata: {
                            type: 'Microsoft.SharePoint.Portal.PinToTeamParams'
                        },
                        teamsId: teamsResponse.teamsId,
                        tabs: {
                            __metadata: {
                                type: 'Collection(Microsoft.SharePoint.Portal.M365TabItem)'
                            },
                            results: tabItems
                        }
                    }
                };
                return JSON.stringify(data);
            }
            else {
                return undefined;
            }
        };
        return this.getData(PinToTeamUrl, parsePinToTabResult, 'PinToTeam' /* qos name */, pinToTeamPostData, 'POST', undefined, undefined, 0);
    };
    return GroupsDataSource;
}(_base_CachedDataSource__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (GroupsDataSource);
//# sourceMappingURL=GroupsDataSource.js.map

/***/ }),

/***/ "JUIJ":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/groups/MembersList.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: MembersList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersList", function() { return MembersList; });
var MembersList = /** @class */ (function () {
    function MembersList() {
        this.members = new Array();
    }
    /**
     * Add given user to the members list of the group
     */
    MembersList.prototype.addUserToList = function (user) {
        this.members.unshift(user);
    };
    /**
     * Remove user from members list of a group
     */
    MembersList.prototype.removeUserFromList = function (user) {
        var indexToRemove = -1; // not found by default
        for (var i = 0; i < this.members.length; i++) {
            if (this.members[i].userId === user.userId) {
                indexToRemove = i; // find the index
            }
        }
        // If user exists in members list then remove it
        if (indexToRemove >= 0) {
            this.members.splice(indexToRemove, 1);
        }
    };
    /**
     * Returns true if the members list contains a user with the given
     * principalName, false otherwise. Comparison is case-insensitive.
     *
     * Note this is O(n) operation. If performing frequent lookups,
     * use a dictionary for better performance.
     */
    MembersList.prototype.containsUserByPrincipalName = function (principalName) {
        if (principalName) {
            // Comparison should be case-insensitive
            var principalNameLowerCase = principalName.toLowerCase();
            for (var i = 0; i < this.members.length; i++) {
                if (this.members[i].principalName &&
                    this.members[i].principalName.toLowerCase() === principalNameLowerCase) {
                    return true;
                }
            }
        }
        return false;
    };
    return MembersList;
}());

/* harmony default export */ __webpack_exports__["default"] = (MembersList);
//# sourceMappingURL=MembersList.js.map

/***/ }),

/***/ "TrXG":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/providers/groups/GroupsProvider.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: GroupsProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsProvider", function() { return GroupsProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_groups_Group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/groups/Group */ "xUJN");
/* harmony import */ var _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../interfaces/groups/SourceType */ "A6v3");
/* harmony import */ var _dataSources_groups_GroupsDataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dataSources/groups/GroupsDataSource */ "BAR4");
/* harmony import */ var _models_groups_MembershipPager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/groups/MembershipPager */ "zGEL");
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../interfaces/ISpPageContext */ "GlwB");
/* harmony import */ var _ms_odsp_utilities_lib_events_EventGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/odsp-utilities/lib/events/EventGroup */ "Oa+Z");
/* harmony import */ var _dataSources_base_DataRequestor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dataSources/base/DataRequestor */ "PayJ");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _ms_persistent_cache_lib_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/persistent-cache/lib/index */ "uFJw");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Qos.event */ "c09w");













/** Key for Yammer conversations */
var YAMMER_CONVERSATIONS_KEY = 'Yammer.FeedURL';
/** Key for Teams resources */
var TEAMS_RESOURCES_KEY = 'MicrosoftTeams.TeamHomeURL';
var HIDE_TEAMIFY_KEY = 'HideTeamify';
/**
 * Ensure that this constant stays in sync with the one in StateManager.ts
 * from the CompositeHeader control in odsp-shared-react.
 */
var GET_GROUP_IMAGE_ENDPOINT = '/_api/GroupService/GetGroupImage';
var SET_GROUP_IMAGE_ENDPOINT = '/_api/GroupService/SetGroupImage';
var MISSING_GROUP_ID_ERROR = 'Missing group id.';
var CURRENT_USER_CACHE_ID = 'CurrentUser';
/**
 * O365 Groups service provider
 */
var GroupsProvider = /** @class */ (function () {
    function GroupsProvider(params) {
        this._missingLoginNameError = 'Missing user login name information.';
        this._pageContext = params.pageContext;
        this._dataRequestor = new _dataSources_base_DataRequestor__WEBPACK_IMPORTED_MODULE_8__["default"]({ qosName: 'GroupsProvider' }, { pageContext: params.pageContext });
        this._dataSource = params.dataSource || new _dataSources_groups_GroupsDataSource__WEBPACK_IMPORTED_MODULE_3__["default"](params.pageContext);
        var loggingOverride = function (data) {
            if (data.name) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data), { name: "GroupsProvider.PersistentCache." + data.name });
            }
            return data;
        };
        this._persistentCache = new _ms_persistent_cache_lib_index__WEBPACK_IMPORTED_MODULE_10__["PersistentCache"]({
            secret: undefined,
            cacheType: 1 /* indexedDB */,
            telemetry: {
                engagement: _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_11__["Engagement"].withData(loggingOverride),
                qos: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_12__["Qos"].withData(loggingOverride)
            }
        });
        this._userLoginName = params.pageContext && params.pageContext.userLoginName;
        this._groups = [];
        this._eventGroup = new _ms_odsp_utilities_lib_events_EventGroup__WEBPACK_IMPORTED_MODULE_7__["default"](this);
        this.switchCurrentGroup(params.groupId || (params.pageContext && params.pageContext.groupId));
    }
    GroupsProvider.prototype.dispose = function () {
        if (this._eventGroup) {
            this._eventGroup.dispose();
            this._eventGroup = undefined;
        }
    };
    GroupsProvider.prototype.getSPPageContext = function () {
        return this._pageContext;
    };
    /**
     * Returns a new instance of the MembershipPager object, which allows you to iterate over the members list
     * one page at a time.
     *
     * @param {IMembershipPagingOptions} pagingOptions - allows you to choose page size and whether to add ownership information
     */
    GroupsProvider.prototype.getMembershipPager = function (pagingOptions) {
        var _this = this;
        // Create a callback function for the membership pager to use when loading a page of members
        // from the server.
        var loadMembershipPageFromServer = function (groupId, skip, top) {
            if (!groupId) {
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].reject(MISSING_GROUP_ID_ERROR);
            }
            else if (!_this._userLoginName) {
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].reject(_this._missingLoginNameError);
            }
            else {
                return _this._dataSource.getGroupMembershipPage(groupId, _this._userLoginName, skip, top);
            }
        };
        return new _models_groups_MembershipPager__WEBPACK_IMPORTED_MODULE_4__["default"](this, this.group, loadMembershipPageFromServer, pagingOptions, this._userLoginName);
    };
    /**
     * Given group id loads group info object from the browser session cache.
     */
    GroupsProvider.prototype.loadGroupInfoFromCache = function (id) {
        if (id) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].resolve(this._persistentCache
                .read({
                key: id
            })
                .then(function (result) {
                return result.data;
            }));
        }
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].resolve(undefined);
    };
    /**
     * Saves the given group to the browser session cache.
     */
    GroupsProvider.prototype.saveGroupToCache = function (group) {
        if (group) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].resolve(this._persistentCache.update({ key: group.id }, group));
        }
    };
    /**
     * Auguments the already local session cached group with the membership data.
     */
    GroupsProvider.prototype.saveMembershipToCache = function (groupId, membership) {
        var _this = this;
        return this.loadGroupInfoFromCache(groupId).then(function (group) {
            if (group) {
                group.membership = {
                    isMember: membership.isMember,
                    totalNumberOfMembers: membership.totalNumberOfMembers,
                    totalNumberOfOwners: membership.totalNumberOfOwners,
                    membersList: membership.membersList,
                    isOwner: membership.isOwner,
                    isJoinPending: membership.isJoinPending,
                    lastLoadTimeStampFromServer: membership.lastLoadTimeStampFromServer
                };
                return _this.saveGroupToCache(group);
            }
        });
    };
    /**
     * Gets group basic properties from datasource, and returns an IGroup object.
     * Basic properties include: name, principalName, alias, mail, description, creationTime,
     * inboxUrl, calendarUrl, filesUrl, notebookUrl, pictureUrl, sharePointUrl, editUrl, membersUrl, isPublic
     * yammerResources, teamsResources, allowToAddGuests, isDynamic
     */
    GroupsProvider.prototype.loadGroupInfoContainerFromServer = function (id) {
        var _this = this;
        if (id) {
            return this._dataSource.getGroupBasicProperties(id).then(function (group) {
                // Perform any necessary post processing on group basic properties
                _this._performBasicPropertiesPostProcessing(group);
                // Compare some of the Group properties in SharePoint with the corresponding properties in AAD.
                // If found different then calls the /_api/GroupService/SyncGroupProperties endpoint to sync.
                if (Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_6__["isGroupWebContext"])(_this._pageContext) && _this.doesCachedGroupPropertiesDiffer(group)) {
                    _this.syncGroupProperties();
                }
                return group;
            });
        }
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].reject(MISSING_GROUP_ID_ERROR);
    };
    /**
     * Gets group membership information from datasource and saves in the group model and localStorage
     * [September 2016] If loadAllMembers is true, loads all members, otherwise loads top 3 members
     * If loadOwnershipInformation is true, sets an attribute on each member to say whether they are a group owner
     * (requires an additional server call).
     *
     * @param {boolean} loadAllMembers - Indicates whether to load all members or only the top three. Defaults to false.
     * @param {boolean} loadOwnershipInformation - Indicates whether to add information to each member saying whether they are a group owner. Defaults to false.
     */
    GroupsProvider.prototype.loadMembershipContainerFromServer = function (id, loadAllMembers, loadOwnershipInformation) {
        if (loadAllMembers === void 0) { loadAllMembers = false; }
        if (loadOwnershipInformation === void 0) { loadOwnershipInformation = false; }
        if (!id) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].reject(MISSING_GROUP_ID_ERROR);
        }
        else if (!this._userLoginName) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].reject(this._missingLoginNameError);
        }
        else {
            return this._dataSource.getGroupMembership(id, this._userLoginName, loadAllMembers, loadOwnershipInformation);
        }
    };
    /**
     * Gets group ownership from server.
     * May 2017 - AAD permits up to 100 group owners
     *
     * @param {string} id Id of the group
     * @param {string} numberOfOwnersToLoad Maximum number of owners to load. Defaults to 100, the maximum number
     * of group owners permitted by AAD.
     */
    GroupsProvider.prototype.loadOwnershipContainerFromServer = function (id, numberOfOwnersToLoad) {
        if (!id) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].reject(MISSING_GROUP_ID_ERROR);
        }
        else {
            return this._dataSource.getGroupOwnership(id, numberOfOwnersToLoad);
        }
    };
    /**
     * Gets groups that user is a member of, and saves in the group model and localstorage
     *
     * @param isLoadFromAAD The boolean to decide if to load user form AAD directly or
     * get RankedMembership from exchange meanwhile has load from AAD as fallback.
     */
    GroupsProvider.prototype.loadUserGroups = function (isLoadFromAAD) {
        var _this = this;
        return this.loadUserGroupsFromCache(isLoadFromAAD).then(function (userGroups) {
            if (!userGroups || userGroups.length === 0) {
                return _this.getCurrentUser().then(function (currentUser) {
                    if (isLoadFromAAD) {
                        return _this._dataSource
                            .getUserGroupsFromAAD(currentUser)
                            .then(function (userGroupsFromServer) {
                            _this._persistentCache.update({
                                key: 'UserGroupsFromAAD' + currentUser.userId
                            }, userGroupsFromServer);
                            return userGroupsFromServer;
                        });
                    }
                    else {
                        return _this._dataSource.getUserGroups(currentUser).then(function (userGroupsFromServer) {
                            _this._persistentCache.update({ key: 'UserGroups' + currentUser.userId }, userGroupsFromServer);
                            _this._setUsersGroups(userGroupsFromServer, _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_2__["SourceType"].Server);
                            return userGroupsFromServer;
                        });
                    }
                });
            }
            else {
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].resolve(userGroups);
            }
        });
    };
    /**
     * Gets cached groups that user is a member of.
     *
     * @param isLoadFromAAD The boolean to decide if to load user form UserGroupsFromAAD cache or UserGroups Cache.
     */
    GroupsProvider.prototype.loadUserGroupsFromCache = function (isLoadFromAAD) {
        var _this = this;
        return this.getCurrentUser().then(function (currentUser) {
            var userGroupsPromise;
            if (isLoadFromAAD) {
                userGroupsPromise = _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].resolve(_this._persistentCache
                    .read({
                    key: 'UserGroupsFromAAD' + currentUser.userId
                })
                    .then(function (result) { return result.data; }));
            }
            else {
                userGroupsPromise = _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].resolve(_this._persistentCache
                    .read({ key: 'UserGroups' + currentUser.userId })
                    .then(function (result) { return result.data; }));
            }
            return userGroupsPromise.then(function (userGroups) {
                if (userGroups && !isLoadFromAAD) {
                    _this._setUsersGroups(userGroups, _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_2__["SourceType"].Cache);
                }
                return userGroups;
            });
        });
    };
    /**
     * Check if user is a member of group.
     *
     * @param groupId The groupId of the group need to be checked.
     */
    GroupsProvider.prototype.isUserInGroup = function (groupId) {
        var isLoadFromAAD = true;
        return this.loadUserGroups(isLoadFromAAD).then(function (userGroups) {
            for (var i = 0, len = userGroups.length; i < len; i++) {
                if (userGroups[i].id === groupId) {
                    return true;
                }
            }
            return false;
        });
    };
    /**
     * @inheritDoc
     */
    GroupsProvider.prototype.getGroup = function (groupId, bypassCache) {
        var _this = this;
        if (bypassCache === void 0) { bypassCache = false; }
        if (groupId) {
            throw new Error('NotImplemented: Calling getGroup() on groupsProvider supplying a groupId is not yet implemented.');
        }
        if (!bypassCache && (!groupId || groupId.length === 0 || (this.group && groupId === this.group.id))) {
            // will flow through this if we're not bypassing cache and we're loading the currently observed group
            return new _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"](function (onComplete, onError) {
                var group = _this.group;
                if (!_this.group) {
                    onError('There is no group currently being managed by GroupsProvider.');
                    return;
                }
                if (group.source !== _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_2__["SourceType"].None) {
                    onComplete(group);
                    return;
                }
                _this._eventGroup.on(group, _models_groups_Group__WEBPACK_IMPORTED_MODULE_1__["default"].onSourceChange, function (newValue) {
                    if (newValue === _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_2__["SourceType"].Error) {
                        onError(_this.group.error);
                        return;
                    }
                    if (newValue !== _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_2__["SourceType"].None) {
                        onComplete(group);
                        return;
                    }
                });
            });
        }
        else {
            // if we're bypassing cache or loading a different group
            if (!groupId || groupId.length === 0) {
                groupId = this.group.id;
            }
            return this.loadGroupInfoContainerFromServer(groupId);
        }
    };
    /**
     * Gets current user person model
     */
    GroupsProvider.prototype.getCurrentUser = function () {
        var _this = this;
        if (!this._userLoginName) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].reject(this._missingLoginNameError);
        }
        if (this.currentUser) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].resolve(this.currentUser);
        }
        return this._getUserFromCache(CURRENT_USER_CACHE_ID).then(function (currentUser) {
            _this.currentUser = currentUser;
            if (!currentUser) {
                return _this._dataSource.getUserInfo(_this._userLoginName).then(function (c) {
                    _this._saveUserToCache(c, CURRENT_USER_CACHE_ID);
                    _this.currentUser = c;
                    return c;
                });
            }
            else {
                return currentUser;
            }
        });
    };
    /**
     * @inheritDoc
     */
    GroupsProvider.prototype.addUserToGroupMembership = function (groupId, userId, principalName, qosName) {
        var _this = this;
        if (!groupId) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].reject(MISSING_GROUP_ID_ERROR);
        }
        var userIdForCacheClear;
        return this._getUserIdForCacheClear(userId, principalName)
            .then(function (userIdObtained) {
            userIdForCacheClear = userIdObtained;
            return _this._dataSource.addGroupMember(groupId, userId, principalName, qosName);
        })
            .then(function () {
            _this._clearUserGroupsCache(userIdForCacheClear);
        });
    };
    /**
     * @inheritDoc
     */
    GroupsProvider.prototype.addUserToGroupOwnership = function (groupId, userId, principalName, qosName) {
        var _this = this;
        if (!groupId) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].reject(MISSING_GROUP_ID_ERROR);
        }
        var userIdForCacheClear;
        return this._getUserIdForCacheClear(userId, principalName)
            .then(function (userIdObtained) {
            userIdForCacheClear = userIdObtained;
            return _this._dataSource.addGroupOwner(groupId, userId, principalName, qosName);
        })
            .then(function () {
            _this._clearUserGroupsCache(userIdForCacheClear);
        });
    };
    /**
     * @inheritDoc
     */
    GroupsProvider.prototype.removeUserFromGroupMembership = function (groupId, userId, qosName) {
        var _this = this;
        if (!groupId) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].reject(MISSING_GROUP_ID_ERROR);
        }
        var userIdForCacheClear;
        return this._getUserIdForCacheClear(userId)
            .then(function (userIdObtained) {
            userIdForCacheClear = userIdObtained;
            return _this._dataSource.removeGroupMember(groupId, userId, qosName);
        })
            .then(function () {
            _this._clearUserGroupsCache(userIdForCacheClear);
        });
    };
    /**
     * @inheritDoc
     */
    GroupsProvider.prototype.removeUserFromGroupOwnership = function (groupId, userId, qosName) {
        var _this = this;
        if (!groupId) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].reject(MISSING_GROUP_ID_ERROR);
        }
        var userIdForCacheClear;
        return this._getUserIdForCacheClear(userId)
            .then(function (userIdObtained) {
            userIdForCacheClear = userIdObtained;
            return _this._dataSource.removeGroupOwner(groupId, userId, qosName);
        })
            .then(function () {
            _this._clearUserGroupsCache(userIdForCacheClear);
        });
    };
    /**
     * @inheritDoc
     */
    GroupsProvider.prototype.addUsersToGroup = function (groupId, owners, members, ownersPrincipalName, membersPrincipalName) {
        var _this = this;
        if (!groupId) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].reject(MISSING_GROUP_ID_ERROR);
        }
        var userId;
        if (this.currentUser) {
            userId = this.currentUser.userId;
            return this._dataSource
                .addUsersToGroup(groupId, owners, members, ownersPrincipalName, membersPrincipalName)
                .then(function (result) {
                _this._clearUserGroupsCache(userId);
                return result;
            });
        }
        else {
            return this.getCurrentUser()
                .then(function (currentUser) {
                userId = currentUser.userId;
            })
                .then(function () {
                return _this._dataSource.addUsersToGroup(groupId, owners, members, ownersPrincipalName, membersPrincipalName);
            })
                .then(function (result) {
                _this._clearUserGroupsCache(userId);
                return result;
            });
        }
    };
    GroupsProvider.prototype.saveGroupProperties = function (group) {
        return this._dataSource.setGroupBasicProperties(group);
    };
    /**
     * Changes currently observed group, given group Id
     */
    GroupsProvider.prototype.switchCurrentGroup = function (groupId) {
        var currentGroupId = this.group ? this.group.id : undefined;
        if (groupId && groupId !== currentGroupId) {
            var g = this.getCachedGroup(groupId);
            g.load();
            this.group = g;
        }
    };
    /**
     * Gets group object that is cached in memory
     * If it doesn't exist then load it from browser cache
     */
    GroupsProvider.prototype.getCachedGroup = function (id, groupInfo) {
        var group = this._groups[id];
        // If we can't find the group already created, make a new object which gets info from cache.
        if (!group) {
            group = new _models_groups_Group__WEBPACK_IMPORTED_MODULE_1__["default"](groupInfo, this, id, this._pageContext);
            this._groups[id] = group;
        }
        return group;
    };
    /**
     * Calls the /_api/GroupService/SyncGroupProperties endpoint to sync the Group properties that are locally
     * stored on SharePoint from Federated Directory.
     * Properties currently locally stored on SharePoint (and thus are synced):
     * - Title
     * - Description
     */
    GroupsProvider.prototype.syncGroupProperties = function () {
        var url = this._pageContext.webAbsoluteUrl + '/_api/GroupService/SyncGroupProperties';
        return this._dataRequestor.getData({
            url: url,
            qosName: 'SyncGroupProperties',
            method: 'POST',
            noRedirect: true
        });
    };
    /**
     * Calls the /_api/GroupService/SetGroupImage endpoint to update the image associated with the Group.
     */
    GroupsProvider.prototype.setGroupImage = function (image) {
        var url = this._pageContext.webAbsoluteUrl + SET_GROUP_IMAGE_ENDPOINT;
        return this._dataRequestor.getData({
            url: url,
            qosName: 'SetGroupImage',
            method: 'POST',
            noRedirect: true,
            additionalPostData: image,
            contentType: image ? image.type : 'image/jpeg' // just specify jpeg type when image blob is null
        });
    };
    /**
     * Compares some of the Group properties in SharePoint with the corresponding properties in AAD.
     * @param group {IGroup} Group object
     * @returns {boolean} True if a difference is found, false otherwise
     */
    GroupsProvider.prototype.doesCachedGroupPropertiesDiffer = function (group) {
        var pageContext = this._pageContext;
        if (pageContext.groupId === group.id) {
            // ensure matching group
            return (pageContext.webTitle !== group.name || // title
                ((pageContext.siteClassification || group.classification) &&
                    pageContext.siteClassification !== group.classification) || // classification
                ((pageContext.sensitivityLabel || group.assignedLabels) &&
                    pageContext.sensitivityLabel.toLocaleLowerCase() !== group.assignedLabels.toLocaleLowerCase()) || // assignedLabels/sensitivityLabel
                pageContext.groupType === null ||
                pageContext.groupType === undefined || // this happens when the server side SPSite.IsPrivateGroup is not set
                (pageContext.groupType === "Public" /* public */) !== group.isPublic || // privacy
                (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_9__["Killswitch"].isActivated('C846AC33-6AD5-479A-B4FD-8DE1AF891B6F', '04/10/2020', 'Lazt Sync Teams Connected Site') &&
                    !pageContext.isTeamsConnectedSite &&
                    !!group.teamsUrl &&
                    group.teamsUrl.length > 0)); // is Teams Connected site, but SPSite.IsTeamsConnectedSite is not set
        }
        return false;
    };
    /**
     * Attach a new Team to the group for the current site.
     */
    GroupsProvider.prototype.teamify = function () {
        return this._dataSource.teamify();
    };
    /**
     *  Attach a new Team to the group for the current site and pin resources of the current site as tabs in the Teams.
     */
    GroupsProvider.prototype.teamifyV2 = function (tabItems, callback) {
        return this._dataSource.teamifyV2(tabItems, callback);
    };
    GroupsProvider.prototype.hideTeamifyBanner = function () {
        var key = this._makeHideTeamifyKey();
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].resolve(this._persistentCache.update({ key: key }, {}));
    };
    GroupsProvider.prototype.dismissTeamifyBanner = function () {
        return this._dataSource.dismissTeamifyBanner();
    };
    GroupsProvider.prototype.getTeamifyBannerHidden = function (forceRefresh) {
        var _this = this;
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].resolve(this._persistentCache
            .read({ key: this._makeHideTeamifyKey() })
            .then(function (result) {
            if (result.data) {
                return true;
            }
            // If there are errors assume that it's not hidden
            return _this._dataSource.getTeamifyBannerHidden(forceRefresh).catch(function () { return false; });
        }));
    };
    /**
     * Requests the deletion of the specified group
     */
    GroupsProvider.prototype.deleteGroup = function (group) {
        return this._dataSource.deleteGroup(group);
    };
    /**
     * Requests the deletion of the specified group site
     */
    GroupsProvider.prototype.deleteSite = function (siteUrl) {
        return this._dataSource.deleteSite(siteUrl);
    };
    GroupsProvider.prototype._makeHideTeamifyKey = function (siteId) {
        var currentSiteId = !!siteId ? siteId : this._pageContext.siteId;
        return HIDE_TEAMIFY_KEY + ":" + currentSiteId;
    };
    GroupsProvider.prototype._setUsersGroups = function (leftNavGroups, leftNavSource) {
        var _this = this;
        this.userGroups = leftNavGroups.map(function (groupInfo) {
            var group = _this.getCachedGroup(groupInfo.id, groupInfo);
            // Only merge into the group object the left nav data if it's more accurate because:
            // We received the data from the SP Server
            // or if group is from cache, at which point we'll can take the left nav cache data we have.
            if (leftNavSource === _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_2__["SourceType"].Server || group.source !== _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_2__["SourceType"].Server) {
                group.extend(groupInfo);
            }
            if (!group.pictureUrl) {
                // PictureUrl is undefined or undefined (which will be the case in the CSOM fallback call)
                group.load();
            }
            return group;
        });
        this._eventGroup.raise(GroupsProvider.onUserGroupsChange, this.userGroups);
    };
    /**
     * This is run after fetching data from the datasource to perform any fixups to the properties
     */
    GroupsProvider.prototype._performBasicPropertiesPostProcessing = function (group) {
        if (this._pageContext) {
            // Instead of directly using the PictureUrl given by Federated Directory, we want to go through a SharePoint endpoint
            // This endpoint also performs caching of the picture locally in SharePoint
            group.hasPictureUrl = !!group.pictureUrl;
            group.pictureUrl = "" + this._pageContext.webAbsoluteUrl + GET_GROUP_IMAGE_ENDPOINT;
            group.inboxUrl = this._getWorkloadUrl(group, 'inboxUrl', 'conversations', YAMMER_CONVERSATIONS_KEY);
            group.calendarUrl = this._getWorkloadUrl(group, 'calendarUrl', 'CALENDAR', null);
            group.membersUrl = this._getWorkloadUrl(group, 'membersUrl', 'members', null);
            group.teamsUrl = this._getWorkloadUrl(group, 'teamsUrl', null, TEAMS_RESOURCES_KEY);
        }
    };
    /**
     * This function generates the final workload URL taking into consideration the following rules
     * First regardless if this is a yammer group
     *      - if the conditionalProperty is set to TEAMS_CONVERSATIONS_KEY means the purpose
     *        of this function call is to get teamsUrl from Teams Resources if exists.
     *
     * If conditionalProperty is not set to TEAMS_CONVERSATIONS_KEY:
     *  If this is a Yammer Group (yammerResources is non-null), then
     *      - use the yammerResource property specified by yammerProperty to get the value of the requested workload.
     *        if it doesn't exist, we just return null.
     *
     *  If it's not a Yammer Group,
     *      - and the groupProperty (e.g. inboxUrl) is null, then return the groupstatus.aspx page with the appropriate target.
     *      - if the groupProperty (e.g. inboxUrl) is non null, just return that.
     *
     *  @param group: The group object.
     *  @param groupProperty: The property of group we want to set. e.g. inboxUrl or calendarUrl or membersUrl.
     *  @param targetWorkload: The query parameter to groupstatus.aspx that we want for this workload. e.g. conversations, CALENDAR, members.
     *  @param conditionalProperty: The name of the property we need to search for in ConditionalResources(yammerResources or teamsResources).
     */
    GroupsProvider.prototype._getWorkloadUrl = function (group, groupProperty, targetWorkload, conditionalProperty) {
        var retUrl = null;
        var yammerResources = group.yammerResources, teamsResources = group.teamsResources;
        var getUrlFromConditionalResources = function (conditionalResourcesResult) {
            var conditionalResource = conditionalResourcesResult.filter(function (currentValue) {
                return currentValue.Key === conditionalProperty;
            });
            return conditionalResource && conditionalResource[0] ? conditionalResource[0].Value : null;
        };
        // If conditionalProperty is set to TEAMS_CONVERSATIONS_KEY means this purpose of this function call
        // is to get teamsUrl from Teams Resources regardless if it's a yammer group or not.
        if (conditionalProperty === TEAMS_RESOURCES_KEY) {
            // If Teams Resources exists.
            if (teamsResources && teamsResources.results && teamsResources.results.length > 0) {
                retUrl = getUrlFromConditionalResources(teamsResources.results);
            }
        }
        else {
            if (yammerResources && yammerResources.results && yammerResources.results.length > 0) {
                // This is a Yammer Group
                if (conditionalProperty === YAMMER_CONVERSATIONS_KEY) {
                    // This is a Yammer Group, and we have a specific property to look for,
                    // so filter to the appropriate property in yammerResources to return.
                    retUrl = getUrlFromConditionalResources(yammerResources.results);
                }
                // For Yammer groups (those with non null yammerResources), if no yammerProperty is specified
                // then we just fall through to the end of the function... essentially returning null.
                // As such, for Yammer groups, workloads like calendar and members will be hidden.
            }
            else {
                // Not a Yammer Group, so if the existing group property does not exist, use the status page with the appropriate workload except for Teams.
                // The exchange related group properties conversations, CALENDAR, members are mutual exclusive with yammer.
                if (!group[groupProperty]) {
                    retUrl = this._pageContext.webAbsoluteUrl + "/_layouts/15/groupstatus.aspx?id=" + group.id + "&target=" + targetWorkload;
                }
                else {
                    retUrl = group[groupProperty];
                }
            }
        }
        return retUrl;
    };
    /**
     * Save user to local storage of the browser
     */
    GroupsProvider.prototype._saveUserToCache = function (user, cacheId) {
        if (user) {
            return this._persistentCache.update({ key: cacheId }, user);
        }
    };
    /**
     * Get user from the local storage of the browser
     */
    GroupsProvider.prototype._getUserFromCache = function (cacheId) {
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].resolve(this._persistentCache
            .read({ key: cacheId })
            .then(function (result) {
            return result.data;
        }));
    };
    /**
     * Clear the UserGroup caches for both UserGroups and UserGroupsFromAAD.
     */
    GroupsProvider.prototype._clearUserGroupsCache = function (userId) {
        if (userId) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].all([
                this._persistentCache.remove({ key: 'UserGroupsFromAAD' + userId }),
                this._persistentCache.remove({ key: 'UserGroups' + userId })
            ]).then(function (results) {
                return;
            });
        }
    };
    /**
     * Return user id for cache clear if the user to add or remove is current user, otherwise return null.
     */
    GroupsProvider.prototype._getUserIdForCacheClear = function (userId, principalName) {
        var userIdForCacheClear;
        if (this.currentUser && userId) {
            userIdForCacheClear = userId === this.currentUser.userId ? userId : null;
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].resolve(userIdForCacheClear);
        }
        else {
            return this.getCurrentUser().then(function (currentUser) {
                if (userId) {
                    userIdForCacheClear = userId === currentUser.userId ? currentUser.userId : null;
                }
                else {
                    userIdForCacheClear = principalName === currentUser.principalName ? currentUser.userId : null;
                }
                return userIdForCacheClear;
            });
        }
    };
    /** The name of the userGroups change event */
    GroupsProvider.onUserGroupsChange = 'userGroups';
    return GroupsProvider;
}());

/* harmony default export */ __webpack_exports__["default"] = (GroupsProvider);
//# sourceMappingURL=GroupsProvider.js.map

/***/ }),

/***/ "VSHS":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/groups/GroupType.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: GroupType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupType", function() { return GroupType; });
/**
 * Group types for ISpPageContextInfo.groupType.
 * For non-groups, this property will be null.
 */
var GroupType;
(function (GroupType) {
    GroupType["public"] = "Public";
    GroupType["private"] = "Private";
})(GroupType || (GroupType = {}));
/* harmony default export */ __webpack_exports__["default"] = (GroupType);
//# sourceMappingURL=GroupType.js.map

/***/ }),

/***/ "b0jF":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/Groups.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: GroupsProvider, GroupType, MembersList, Group, MembershipLoadOptions, Membership, SourceType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _providers_groups_GroupsProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./providers/groups/GroupsProvider */ "TrXG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupsProvider", function() { return _providers_groups_GroupsProvider__WEBPACK_IMPORTED_MODULE_0__["GroupsProvider"]; });

/* harmony import */ var _dataSources_groups_GroupsDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataSources/groups/GroupsDataSource */ "BAR4");
/* empty/unused harmony star reexport *//* harmony import */ var _dataSources_groups_GroupType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataSources/groups/GroupType */ "VSHS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupType", function() { return _dataSources_groups_GroupType__WEBPACK_IMPORTED_MODULE_2__["GroupType"]; });

/* harmony import */ var _dataSources_groups_MembersList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataSources/groups/MembersList */ "JUIJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MembersList", function() { return _dataSources_groups_MembersList__WEBPACK_IMPORTED_MODULE_3__["MembersList"]; });

/* harmony import */ var _models_groups_Group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/groups/Group */ "xUJN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _models_groups_Group__WEBPACK_IMPORTED_MODULE_4__["Group"]; });

/* harmony import */ var _models_groups_Membership__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/groups/Membership */ "bHkX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MembershipLoadOptions", function() { return _models_groups_Membership__WEBPACK_IMPORTED_MODULE_5__["MembershipLoadOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Membership", function() { return _models_groups_Membership__WEBPACK_IMPORTED_MODULE_5__["Membership"]; });

/* harmony import */ var _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interfaces/groups/SourceType */ "A6v3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SourceType", function() { return _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_6__["SourceType"]; });

// Everything related to Groups datasources and providers (but not GroupSite)







//# sourceMappingURL=Groups.js.map

/***/ }),

/***/ "bHkX":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/models/groups/Membership.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: MembershipLoadOptions, Membership, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipLoadOptions", function() { return MembershipLoadOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Membership", function() { return Membership; });
/* harmony import */ var _dataSources_groups_MembersList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dataSources/groups/MembersList */ "JUIJ");
/* harmony import */ var _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../interfaces/groups/SourceType */ "A6v3");
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_events_EventGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/events/EventGroup */ "Oa+Z");




var CACHE_TIME_THRESHOLD = 24 * 60 * 60 * 1000; // 24 hour
/**
 * You can load group membership with different options depending on how much information you need.
 * This enum provides bitflags to track which options were requested.
 */
var MembershipLoadOptions;
(function (MembershipLoadOptions) {
    /**
     * No special options were requested
     */
    MembershipLoadOptions[MembershipLoadOptions["none"] = 0] = "none";
    /**
     * All members were requested instead of the top three
     */
    MembershipLoadOptions[MembershipLoadOptions["allMembers"] = 1] = "allMembers";
    /**
     * Ownership information was requested
     */
    MembershipLoadOptions[MembershipLoadOptions["ownershipInformation"] = 2] = "ownershipInformation";
    /**
     * Force loading directly from the server regardless
     * of caching logic.
     */
    MembershipLoadOptions[MembershipLoadOptions["forceSkipCache"] = 4] = "forceSkipCache";
})(MembershipLoadOptions || (MembershipLoadOptions = {}));
var Membership = /** @class */ (function () {
    function Membership(membershipInfo, groupsProvider, group) {
        this._eventGroup = new _ms_odsp_utilities_lib_events_EventGroup__WEBPACK_IMPORTED_MODULE_3__["default"](this);
        this.source = _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_1__["SourceType"].None;
        this.lastLoadTimeStampFromServer = -1;
        this._groupsProvider = groupsProvider;
        this._parent = group;
        if (membershipInfo) {
            this.extend(membershipInfo, _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_1__["SourceType"].None);
        }
        if (!this.membersList) {
            this.membersList = new _dataSources_groups_MembersList__WEBPACK_IMPORTED_MODULE_0__["default"]();
        }
    }
    Membership.prototype.dispose = function () {
        if (this._eventGroup) {
            this._eventGroup.dispose();
            this._eventGroup = undefined;
        }
        this._parent = undefined;
    };
    /**
     * If loadAllMembers is true, load all members. If false, load only the top three members.
     * (Only the top three members are required for the facepile control in the site header,
     * but if the user opens the Group Membership panel, we will need all members.)
     *
     * Note that loading with the allMembers option really loads up to 100 members. To load more members, use the
     * MembershipPager to load one page of members at a time.
     *
     * If loadOwnershipInformation is true, set the isOwnerOfCurrentGroup attribute on each member to say whether they are an owner.
     * (This requires an additional server call.) If false, do not add ownership information.
     *
     * @param {boolean} loadAllMembers - true if we need all members, false for top three. Defaults to false.
     * @param {boolean} loadOwnershipInformation - true if we need to know whether each member is also a group owner. Defaults to false.
     */
    Membership.prototype.load = function (loadAllMembers, loadOwnershipInformation) {
        var _this = this;
        if (loadAllMembers === void 0) { loadAllMembers = false; }
        if (loadOwnershipInformation === void 0) { loadOwnershipInformation = false; }
        if (this._groupsProvider && this._parent.id) {
            var options_1 = 0;
            /* tslint:disable: no-bitwise */
            if (loadAllMembers) {
                options_1 |= MembershipLoadOptions.allMembers;
            }
            if (loadOwnershipInformation) {
                options_1 |= MembershipLoadOptions.ownershipInformation;
            }
            /* tslint:enable: no-bitwise */
            // If there are no special load options, use the cache
            var promise = _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__["default"].resolve();
            if (this.source === _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_1__["SourceType"].None && !options_1) {
                promise = this._groupsProvider.loadGroupInfoFromCache(this._parent.id).then(function (groupInfo) {
                    if (groupInfo && groupInfo.membership && groupInfo.membership.lastLoadTimeStampFromServer > 0) {
                        _this.extend(groupInfo.membership, _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_1__["SourceType"].Cache);
                    }
                });
            }
            return promise.then(function () {
                if (_this._shouldLoadNewData(options_1)) {
                    _this._startLoadingFromServer(options_1);
                    var promise_1 = _this._groupsProvider.loadMembershipContainerFromServer(_this._parent.id, loadAllMembers, loadOwnershipInformation);
                    return promise_1.then(function (membership) {
                        _this.extend(membership, _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_1__["SourceType"].Server);
                        _this._finishLoadingFromServer();
                        // If there are no special load options, use the cache
                        if (!options_1) {
                            membership.lastLoadTimeStampFromServer = _this.lastLoadTimeStampFromServer;
                            _this._groupsProvider.saveMembershipToCache(_this._parent.id, membership);
                        }
                    }, function (error) {
                        _this._errorLoading(error);
                    });
                }
            });
        }
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__["default"].resolve();
    };
    /**
     * Load the group membership according to the requested load options.
     *
     * Note that loading with the allMembers option really loads up to 100 members. To load more members, use the
     * MembershipPager to load one page of members at a time.
     *
     * @param {number} options - set bit flags to indicate which MembershipLoadOptions (if any) to request.
     * Select any options from MembershipLoadOptions. For more than one option, do a bitwise OR between options like this:
     * MembershipLoadOptions.allMembers | MembershipLoadOptions.ownershipInformation
     */
    Membership.prototype.loadWithOptions = function (options) {
        var _this = this;
        if (this._groupsProvider && this._parent.id) {
            // If there are no special load options, use the cache
            if (this.source === _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_1__["SourceType"].None && !options) {
                this._groupsProvider.loadGroupInfoFromCache(this._parent.id).then(function (groupInfo) {
                    if (groupInfo && groupInfo.membership && groupInfo.membership.lastLoadTimeStampFromServer > 0) {
                        _this.extend(groupInfo.membership, _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_1__["SourceType"].Cache);
                    }
                });
            }
            if (this._shouldLoadNewData(options)) {
                this._startLoadingFromServer(options);
                var promise = this._groupsProvider.loadMembershipContainerFromServer(this._parent.id, 
                /* tslint:disable: no-bitwise */
                options && (options & MembershipLoadOptions.allMembers) === MembershipLoadOptions.allMembers, options &&
                    (options & MembershipLoadOptions.ownershipInformation) ===
                        MembershipLoadOptions.ownershipInformation);
                /* tslint:enable: no-bitwise */
                return promise.then(function (membership) {
                    _this.extend(membership, _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_1__["SourceType"].Server);
                    _this._finishLoadingFromServer();
                    // If there are no special load options, use the cache
                    if (!options || options === MembershipLoadOptions.forceSkipCache) {
                        membership.lastLoadTimeStampFromServer = _this.lastLoadTimeStampFromServer;
                        _this._groupsProvider.saveMembershipToCache(_this._parent.id, membership);
                    }
                }, function (error) {
                    _this._errorLoading(error);
                });
            }
        }
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__["default"].resolve(undefined);
    };
    Membership.prototype.extend = function (m, sourceType) {
        this.isMember = m.isMember;
        this.isOwner = m.isOwner;
        this.isJoinPending = m.isJoinPending;
        this.membersList = m.membersList;
        this.totalNumberOfMembers = m.totalNumberOfMembers;
        this.totalNumberOfOwners = m.totalNumberOfOwners;
        this.lastLoadTimeStampFromServer = m.lastLoadTimeStampFromServer;
        this._parent.membership = this;
        this.source = sourceType;
        this._eventGroup.raise(Membership.onSourceChange, this.source);
    };
    /**
     * Returns true if last load is older that given number of milliseconds,
     * or data is from cache, or have never been loaded.
     * Also returns true if the load options are requesting special additional information.
     *
     * @param {number} options - set bit flags to indicate which MembershipLoadOptions (if any) to request
     */
    Membership.prototype._shouldLoadNewData = function (options) {
        var cacheTimeThreshold = CACHE_TIME_THRESHOLD;
        return ((!this.isLoadingFromServer &&
            this.source !== _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_1__["SourceType"].Server &&
            (this.lastLoadTimeStampFromServer < 0 ||
                Date.now() - this.lastLoadTimeStampFromServer > cacheTimeThreshold)) ||
            /* tslint:disable: no-bitwise */
            // If caller requested skipping the cache, load new data
            (options &&
                (options & MembershipLoadOptions.forceSkipCache) === MembershipLoadOptions.forceSkipCache) ||
            // If we want all members and are not currently loading them, must load new data
            (options &&
                (options & MembershipLoadOptions.allMembers) === MembershipLoadOptions.allMembers &&
                !(this._currentLoadOptions &&
                    (this._currentLoadOptions & MembershipLoadOptions.allMembers) === MembershipLoadOptions.allMembers)) ||
            // If we want ownership information and are not currently loading it, must load new data
            (options &&
                (options & MembershipLoadOptions.ownershipInformation) ===
                    MembershipLoadOptions.ownershipInformation &&
                !(this._currentLoadOptions &&
                    (this._currentLoadOptions & MembershipLoadOptions.ownershipInformation) ===
                        MembershipLoadOptions.ownershipInformation)));
        /* tslint:enable: no-bitwise */
    };
    /**
     * Should be called before loading new data
     */
    Membership.prototype._startLoadingFromServer = function (options) {
        this.isLoadingFromServer = true;
        this._currentLoadOptions = options;
    };
    /**
     * Should be called after loading new data
     */
    Membership.prototype._finishLoadingFromServer = function () {
        this.isLoadingFromServer = false;
        this._currentLoadOptions = undefined;
        this.lastLoadTimeStampFromServer = Date.now();
    };
    /**
     * Indicates to the controller that loading of data has failed
     */
    Membership.prototype._errorLoading = function (errorMessage) {
        this.isLoadingFromServer = false;
        this._currentLoadOptions = undefined;
        this.error = errorMessage;
    };
    /** The name of the source change event */
    Membership.onSourceChange = 'source';
    return Membership;
}());

/* harmony default export */ __webpack_exports__["default"] = (Membership);
//# sourceMappingURL=Membership.js.map

/***/ }),

/***/ "vmDi":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/alternativeUrls/SPAlternativeUrls.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @ms/odsp-utilities/./lib/alternativeUrls/SPAlternativeUrls.js
var pkg = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
module.exports = pkg.SPAlternativeUrls;

/***/ }),

/***/ "xUJN":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/models/groups/Group.js ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: Group, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony import */ var _Membership__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Membership */ "bHkX");
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_events_EventGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/events/EventGroup */ "Oa+Z");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../interfaces/groups/SourceType */ "A6v3");





var groupStatusPageTemplate = '/_layouts/15/groupstatus.aspx?id={0}&target={1}';
var CACHE_TIME_THRESHOLD = 24 * 60 * 60 * 1000; // 24 hour
/**
 * A concrete model of a Group that implements IGroup, but also has additional methods and built-in support
 * for cache interaction.
 */
var Group = /** @class */ (function () {
    /**
     * Constructs a new Group model.
     * @param groupInfo? - The IGroup properties to apply to the model.
     * @param groupsProvider? - If supplied together with groupId, will result in an attempt to
     *      load the group through appropriate datasources.
     * @param groupId? - The ID (GUID) of the Group. If supplied together with groupsProvider, will result in
     *      an attempt to load the group through appropriate datasources.
     * @param pageContext? - Context used to determine Planner URL.
     */
    function Group(groupInfo, groupsProvider, groupId, pageContext) {
        this._eventGroup = new _ms_odsp_utilities_lib_events_EventGroup__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.source = _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_4__["SourceType"].None;
        this.lastLoadTimeStampFromServer = -1;
        this._groupsProvider = groupsProvider;
        this.id = groupId;
        if (groupInfo) {
            this.extend(groupInfo);
        }
        else {
            this.load();
        }
        this.membership = new _Membership__WEBPACK_IMPORTED_MODULE_0__["default"](undefined, this._groupsProvider, this);
        if (!pageContext && groupsProvider) {
            pageContext = groupsProvider.getSPPageContext();
        }
        this.plannerUrl = Group._getPlannerUrl(pageContext, groupId);
    }
    Group._getPlannerUrl = function (pageContext, groupId) {
        if (pageContext) {
            if (!groupId) {
                groupId = pageContext.groupId;
            }
            return pageContext.webAbsoluteUrl + _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_3__["format"](groupStatusPageTemplate, groupId, 'planner');
        }
        return undefined;
    };
    Group.prototype.dispose = function () {
        if (this._eventGroup) {
            this._eventGroup.dispose();
            this._eventGroup = undefined;
        }
    };
    /**
     * Attempts to load a group, attempting to load from cache, and will preserve loaded data to cache.
     * Will also save loaded data to cache.
     *
     * Note: Requires the Group object to have been initialized a GroupsProvider instance, or load() will not
     *       do anything.
     * @param loadNewData? - Force load new data.
     */
    Group.prototype.load = function (loadNewData) {
        var _this = this;
        if (this._groupsProvider && this.id) {
            var promise = _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve();
            if (this.source === _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_4__["SourceType"].None) {
                promise = this._groupsProvider.loadGroupInfoFromCache(this.id).then(function (groupInfo) {
                    if (groupInfo && groupInfo.lastLoadTimeStampFromServer > 0) {
                        _this.extend(groupInfo);
                        _this.source = _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_4__["SourceType"].Cache;
                        _this._eventGroup.raise(Group.onSourceChange, _this.source);
                    }
                });
            }
            return promise.then(function () {
                if (_this._shouldLoadNewData(loadNewData)) {
                    _this._startLoadingFromServer();
                    var promise_1 = _this._groupsProvider.loadGroupInfoContainerFromServer(_this.id);
                    return promise_1.then(function (groupInfo) {
                        groupInfo.lastLoadTimeStampFromServer = Date.now();
                        _this.extend(groupInfo);
                        _this._finishLoadingFromServer();
                        _this._groupsProvider.saveGroupToCache(groupInfo);
                    }, function (error) {
                        _this._errorLoading(error);
                    });
                }
            });
        }
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve();
    };
    /**
     * Add the defined properties of another Group object into this one
     * Also perform necessary initialization steps with the new data
     */
    Group.prototype.extend = function (g) {
        this.name = g.name;
        this.principalName = g.principalName;
        this.alias = g.alias;
        this.mail = g.mail;
        this.description = g.description;
        this.creationTime = g.creationTime;
        this.profileUrl = g.profileUrl;
        this.inboxUrl = g.inboxUrl;
        this.calendarUrl = g.calendarUrl;
        this.filesUrl = g.filesUrl;
        this.notebookUrl = g.notebookUrl;
        this.pictureUrl = g.pictureUrl;
        this.hasPictureUrl = g.hasPictureUrl;
        this.sharePointUrl = g.sharePointUrl;
        this.editUrl = g.editUrl;
        this.membersUrl = g.membersUrl;
        this.teamsUrl = g.teamsUrl;
        this.isPublic = g.isPublic;
        this.classification = g.classification;
        this.assignedLabels = g.assignedLabels;
        this.allowToAddGuests = g.allowToAddGuests;
        this.isDynamic = g.isDynamic;
        this.yammerResources = g.yammerResources;
        this.teamsResources = g.teamsResources;
        this.lastLoadTimeStampFromServer = g.lastLoadTimeStampFromServer;
    };
    /**
     * Returns if last load is older than threshold number of milliseconds,
     * or data is from cache, or have never been loaded.
     */
    Group.prototype._shouldLoadNewData = function (loadNewData) {
        var cacheTimeThreshold = CACHE_TIME_THRESHOLD;
        return (!this.isLoadingFromServer &&
            (loadNewData ||
                (this.source !== _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_4__["SourceType"].Server &&
                    (!this.lastLoadTimeStampFromServer ||
                        Date.now() - this.lastLoadTimeStampFromServer > cacheTimeThreshold))));
    };
    /**
     * Should be called after loading new data
     */
    Group.prototype._startLoadingFromServer = function () {
        this.isLoadingFromServer = true;
    };
    /**
     * Should be called after loading new data
     */
    Group.prototype._finishLoadingFromServer = function () {
        this.isLoadingFromServer = false;
        this.source = _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_4__["SourceType"].Server;
        this._eventGroup.raise(Group.onSourceChange, this.source);
    };
    /**
     * Indicates to the controller that loading of data has failed
     */
    Group.prototype._errorLoading = function (errorMessage) {
        this.isLoadingFromServer = false;
        this.error = errorMessage;
        this._eventGroup.raise(Group.onSourceChange, _interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_4__["SourceType"].Error);
    };
    /** The name of the source change event */
    Group.onSourceChange = 'source';
    return Group;
}());

/* harmony default export */ __webpack_exports__["default"] = (Group);
//# sourceMappingURL=Group.js.map

/***/ }),

/***/ "zGEL":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/models/groups/MembershipPager.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: MembershipPager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipPager", function() { return MembershipPager; });
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");

/**
 * Default page size to use when requesting a page of members.
 * For best performance, use a page size of 20.
 * This is because for pages of size <=20, FBI will use its cache. For larger pages, FBI will fetch from AAD.
 */
var DEFAULT_PAGE_SIZE = 20;
/**
 * A MembershipPager allows you to load group members one page at a time.
 * To obtain the first page, call loadPage with your desired start index (probably zero).
 * When you're ready for the next page, call the getNextPagePromise function returned by loadPage.
 */
var MembershipPager = /** @class */ (function () {
    /**
     * Constructor sets up a new MembershipPager with the given options.
     *
     * @param {IGroupsProvider} groupsProvider The groups provider associated with the group
     * @param {IGroup} group The associated group
     * @param {(groupId: string, skip: number, top: number) => Promise<IMembership>} loadPageFromServerDelegate Delegate method to load a page of members from
     * the server. Parameters are the id of the group, number of members to skip, and number of members per page.
     * @param {IMembershipPagingOptions} pagingOptions Optional special options including page size and ownership information. See IMembershipPagingOptions for more details.
     * @param {string} userLoginName Current user's login name in the form of user@microsoft.com. Used to determine whether the current user is a group owner.
     */
    function MembershipPager(groupsProvider, group, loadPageFromServerDelegate, pagingOptions, userLoginName) {
        this._groupsProvider = groupsProvider;
        this._parentGroup = group;
        this._loadPageFromServerDelegate = loadPageFromServerDelegate;
        this._pageSize =
            pagingOptions && typeof pagingOptions.pageSize === 'number'
                ? pagingOptions.pageSize
                : DEFAULT_PAGE_SIZE;
        this._shouldAddOwnershipInformation =
            pagingOptions && typeof pagingOptions.ownershipInformation ? pagingOptions.ownershipInformation : true;
        this._userLoginName = userLoginName;
        this._foundOwnersDictionary = {};
        this._numberOfOwnersFound = 0;
    }
    /**
     * Loads a page of members, beginning with the specified starting index. Returns the page of members, along with a function
     * that provides a promise for the next page of members.
     *
     * @param {number} membersToSkip Number of members to skip before the desired page begins. Defaults to zero.
     */
    MembershipPager.prototype.loadPage = function (membersToSkip) {
        var _this = this;
        var startingIndex = membersToSkip ? membersToSkip : 0;
        if (this._groupsProvider && this._parentGroup.id) {
            var promise = this._loadPageFromServerDelegate(this._parentGroup.id, startingIndex, this._pageSize);
            return promise.then(function (page) {
                return _this._processPage(page, startingIndex);
            }, function (error) {
                _this.error = error;
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].reject(error);
            });
        }
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].reject(undefined);
    };
    /**
     * Processes the page of members returned from the server. Returns the processed page of members, along with a function
     * that provides a promise for the next page of members.
     */
    MembershipPager.prototype._processPage = function (page, membersToSkip) {
        var _this = this;
        this.totalNumberOfMembers = page.totalNumberOfMembers;
        var isLastPage = membersToSkip + this._pageSize >= this.totalNumberOfMembers;
        var getNextPagePromise = isLastPage
            ? undefined
            : this._computeGetNextPagePromise(membersToSkip + this._pageSize);
        // If ownership information was requested, add it.
        // We only load the owners list once, and keep it to reference during subsequent page requests.
        if (this._shouldAddOwnershipInformation) {
            if (!this._ownersDictionary) {
                return this._groupsProvider
                    .loadOwnershipContainerFromServer(this._parentGroup.id)
                    .then(function (ownership) {
                    _this._addOwnershipInformationToPage(page, isLastPage, ownership);
                    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve({
                        page: page.membersList.members,
                        getNextPagePromise: getNextPagePromise
                    });
                });
            }
            else {
                this._addOwnershipInformationToPage(page, isLastPage);
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve({ page: page.membersList.members, getNextPagePromise: getNextPagePromise });
            }
        }
        else {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve({ page: page.membersList.members, getNextPagePromise: getNextPagePromise });
        }
    };
    /**
     * Adds information about the group owners to the page. Sets totalNumberOfOwners and isOwner, creates a dictionary of group
     * owners for reference, marks each member in the page as an owner if that member is an owner,
     * and checks for a malformed members list.
     */
    MembershipPager.prototype._addOwnershipInformationToPage = function (page, isLastPage, ownership) {
        var _this = this;
        // If we loaded the group ownership, update general ownership properties
        if (ownership) {
            this.totalNumberOfOwners = ownership.totalNumberOfOwners;
            this._ownersDictionary = {};
            ownership.ownersList.members.forEach(function (owner) {
                if (owner.userId) {
                    _this._ownersDictionary[owner.userId] = owner;
                }
            });
            this.isOwner = ownership.ownersList.containsUserByPrincipalName(this._userLoginName);
        }
        // For each member in the page, mark as an owner if the person is present in the owners list
        page.membersList.members.forEach(function (member) {
            member.isOwnerOfCurrentGroup = _this._ownersDictionary && !!_this._ownersDictionary[member.userId]; // Returns undefined if key not present
            if (member.isOwnerOfCurrentGroup) {
                // Remember which owners we have found in the members list
                _this._numberOfOwnersFound++;
                _this._foundOwnersDictionary[member.userId] = true;
            }
        });
        // If this is the last page, check for missing owners.
        // In theory, all group owners should also be present in the members list. However, this is not properly enforced.
        // When we reach the last page of members, we must check for any owners not found in the members list.
        // If we find any, we add them to the members list behind the scenes.
        if (isLastPage && this._ownersDictionary && this._numberOfOwnersFound < this.totalNumberOfOwners) {
            for (var key in this._ownersDictionary) {
                var owner = this._ownersDictionary[key];
                if (!this._foundOwnersDictionary[owner.userId]) {
                    owner.isOwnerOfCurrentGroup = true;
                    page.membersList.members.push(owner);
                    // If owners were missing from the members list, the totalNumberOfMembers count will be wrong.
                    // Try to fix this to the extent possible.
                    this.totalNumberOfMembers++;
                }
            }
        }
    };
    /**
     * Creates a function that returns a promise for the page of members starting with membersToSkip.
     */
    MembershipPager.prototype._computeGetNextPagePromise = function (membersToSkip) {
        var _this = this;
        var getNextPagePromise = function () {
            return _this.loadPage(membersToSkip);
        };
        return getNextPagePromise;
    };
    return MembershipPager;
}());

/* harmony default export */ __webpack_exports__["default"] = (MembershipPager);
//# sourceMappingURL=MembershipPager.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~odsp-datasources~spcx-panels~spcx-teamify_[locale].js.map