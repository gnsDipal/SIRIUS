(window["webpackJsonp_1cea229f_b208_4202_8014_22503d92a019_0_1_0"] = window["webpackJsonp_1cea229f_b208_4202_8014_22503d92a019_0_1_0"] || []).push([["sp-queryablemanagedproperties"],{

/***/ "n9CK":
/*!********************************************************************************!*\
  !*** ./lib/dataProviders/search/managedProperty/QueryableManagedProperties.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/ManagedDataType */ "ui8f");
/**
 * @file QueryableManagedProperties.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */

// To be kept in sync with OOTBSchemaOSS.cs.
var QueryableManagedProperties = /** @class */ (function () {
    function QueryableManagedProperties() {
    }
    QueryableManagedProperties.getProperties = function () {
        if (!QueryableManagedProperties._properties) {
            QueryableManagedProperties._properties = {
                AADObjectId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                AboutMe: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Account: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                AccountName: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                AnalyticsPath: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                AnchorTextComplete: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                AssignedTo: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                AttachmentType: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Author: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                AuthorOWSUser: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                BaseOfficeLocation: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                CategoryNavigationUrl: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Charset: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ClassificationConfidence: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                ClassificationCount: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                ClassificationLastScan: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].DateTime,
                ClassificationType: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ClientUrl: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Colleagues: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                CombinedUserProfileNames: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Companies: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ComplianceTag: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ComplianceTagWrittenTime: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].DateTime,
                ContentClass: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ContentDatabaseId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ContentModifiedTime: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].DateTime,
                ContentsHidden: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ContentSource: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ContentType: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ContentTypeId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Created: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].DateTime,
                CreatedBy: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                CreatedById: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                CreatedOWSDate: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                DeepLinks: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                DefAggre: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Department: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Description: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                DetectedLanguage: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                DiscoveredTime: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].DateTime,
                DisplayAuthor: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                DisplayDate: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].DateTime,
                DlcDocId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                DMSDocAccessRight: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                DMSDocAuthor: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                DMSDocTitle: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                DocACL: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                DocComments: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                DocId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                DocKeywords: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                DocSignature: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                DocSubject: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                DocumentSignature: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                Domain: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                DuplicateHash: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                EditorOWSUser: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                EduAssignmentCategory: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                EduAssignmentFormat: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                EduMaximumScore: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                EndDate: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].DateTime,
                EntityName: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                EntityNamespace: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ExpirationTime: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].DateTime,
                ExpiresOWSDate: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ExtractedAuthor: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ExtractedDate: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].DateTime,
                FileExtension: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Filename: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                FileType: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                FirstLevelColleagues: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                FirstLevelMutualFollowings: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                FirstName: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                FollowAllAnchor: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                FollowRecommendedFor: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                GeneratedTitle: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Genre: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                HashTags: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                HideFromDelve: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].YesNo,
                HierarchyUrl: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                HitHighlightedProperties: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                HitHighlightedSummary: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                HostingPartition: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                HtmlFileType: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                HWBoost: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                ImageDateCreated: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].DateTime,
                Importance: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                IndexDocId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                Interests: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                IRMProtected: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].YesNo,
                IRMTemplateName: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                IsClassificationProcessingLimitExceeded: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].YesNo,
                IsContainer: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].YesNo,
                IsData: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].YesNo,
                IsDocument: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].YesNo,
                IsExternalContent: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].YesNo,
                IsInRecycleBin: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].YesNo,
                IsMyDocuments: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].YesNo,
                IsOneNotePage: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].YesNo,
                IsPartiallyProcessed: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].YesNo,
                IsPublishingCatalog: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].YesNo,
                IsReport: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].YesNo,
                ItemCategory: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                JobTitle: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Keywords: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                language: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Languages: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                LastModifiedTime: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].DateTime,
                LastName: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                LastSharedByUser: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                LinkingUrl: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ListID: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ListItemId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ListUrl: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Location: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                MediaDuration: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                Memberships: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                MetadataAuthor: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                MicroBlogType: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                MobilePhone: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ModifiedBy: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ModifiedById: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ModifiedOWSDate: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                NLCodePage: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                Notes: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                OfficeGraphEnabled: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].YesNo,
                OfficeNumber: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                OrgNames: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                OrgParentNames: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                OrgParentURLs: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                OrgURLs: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                OWS_URL: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                OWSMetadataFacetInfo: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                OWSTaxIdMetadataAllTagsInfo: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                OWSTaxIdProductCatalogItemCategory: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                OWSTaxIdVideoPortalItemCategory: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                PageAppId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                PageId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                PageTags: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ParentId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ParentLink: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                PartitionKey: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                PastProjects: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Path: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                People: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                PeopleInMedia: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                PeopleKeywords: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                PhoneNumber: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                PictureHeight: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                PictureThumbnailURL: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                PictureURL: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                PictureWidth: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                PolicyACL: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                PolicyTags: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                PostAuthor: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                PreferredName: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Priority: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                PrivacyIndicator: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                PrivateColleagues: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ProcessingTime: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].DateTime,
                ProductCatalogGroupNumberOWSText: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ProfileExpertise: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ProfileName: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ProgID: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Pronunciations: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                PublishingContactOWSUser: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                PublishingIsFurlPageOWSBool: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                PublishingPageLayoutOWSURLH: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Purpose: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                RankDetail: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                RankingWeightHigh: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                RankingWeightLow: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                RankingWeightName: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                RecommendedFor: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Responsibilities: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Restricted: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].YesNo,
                RobotsNoIndex: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].YesNo,
                RobotsNoIndexOWSBool: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                RootPostId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                RootPostOwnerId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                RootPostUniqueId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Schools: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                SecondaryFileExtension: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                SecondLevelColleagues: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ServerRedirectedURL: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ServiceApplicationId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                SharedWithInternal: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                SharedWithUsersOWSUser: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                SipAddress: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Site: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                SiteClosed: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].YesNo,
                SiteGroup: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                SiteId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                SitemapChangeFrequencyOWSCHCS: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                SitePath: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                SiteTemplate: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                SiteTemplateId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                SiteTitle: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Size: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                Skills: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                SocialTag: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                SocialTagId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                SocialTagTextUrl: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                SPContentType: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                'SPS-HideFromAddressLists': _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                SPSiteURL: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                'SPS-RecipientTypeDetails': _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                'SPS-UserType': _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                StartDate: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].DateTime,
                Status: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Tags: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Title: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                Tld: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                UIVersionStringOWSText: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                UniqueId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                URLDepth: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                URLkeywords: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                URLs: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                UsageAnalyticsId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                UsageEventItemId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                UserName: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                UserProfile_Guid: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                VideoProcessingStatus: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                ViewableByAnonymousUsers: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].YesNo,
                ViewableByExternalUsers: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].YesNo,
                WebApplicationId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                WebId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                WebTemplate: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                WebUrl: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                WikiCategory: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                WordCustomRefiner1: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                WordCustomRefiner2: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                WordCustomRefiner3: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                WordCustomRefiner4: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                WordCustomRefiner5: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                WordExactCustomRefiner: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                WordPartCustomRefiner1: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                WordPartCustomRefiner2: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                WordPartCustomRefiner3: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                WordPartCustomRefiner4: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                WordPartCustomRefiner5: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                WordPartExactCustomRefiner: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                WorkEmail: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                WorkPhone: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                XLDataConnCountRngId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                XLFormulaCountRngId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                XLLinkedWkbkCountRngId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                XLLinkedWorkbooksText: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text,
                XLUniqueFormulaSetCountRngId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer,
                XLWorksheetCountRngId: _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer
            };
            // Date00-09
            for (var i = 0; i < 10; i++) {
                QueryableManagedProperties._properties["Date0" + i.toString()] = _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].DateTime;
            }
            // Decimal00-09
            for (var i = 0; i < 10; i++) {
                QueryableManagedProperties._properties["Decimal0" + i.toString()] = _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Decimal;
            }
            // Double00-09
            for (var i = 0; i < 10; i++) {
                QueryableManagedProperties._properties["Double0" + i.toString()] = _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Double;
            }
            // Int00-49
            for (var i = 0; i < 50; i++) {
                QueryableManagedProperties._properties["Int" + (i < 10 ? '0' : '') + i] = _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer;
            }
            // RefinableDate00-19
            for (var i = 0; i < 20; i++) {
                QueryableManagedProperties._properties["RefinableDate" + (i < 10 ? '0' : '') + i] =
                    _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].DateTime;
            }
            // RefinableDecimal00-09
            for (var i = 0; i < 10; i++) {
                QueryableManagedProperties._properties["RefinableDecimal0" + i] = _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Decimal;
            }
            // RefinableDouble00-09
            for (var i = 0; i < 10; i++) {
                QueryableManagedProperties._properties["RefinableDouble0" + i] = _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Double;
            }
            // RefinableInt00-49
            for (var i = 0; i < 50; i++) {
                QueryableManagedProperties._properties["RefinableInt" + (i < 10 ? '0' : '') + i] =
                    _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Integer;
            }
            // RefinableString00-199
            for (var i = 0; i < 200; i++) {
                // this is correct, the first 10 have a left padded zero but others do not even though this range goes to 200.
                QueryableManagedProperties._properties["RefinableString" + (i < 10 ? '0' : '') + i] =
                    _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"].Text;
            }
        }
        return QueryableManagedProperties._properties;
    };
    return QueryableManagedProperties;
}());
/* harmony default export */ __webpack_exports__["default"] = (QueryableManagedProperties);


/***/ })

}]);
//# sourceMappingURL=chunk.sp-queryablemanagedproperties_none.js.map