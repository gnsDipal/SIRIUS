(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~shared-react-sitescriptprogressin~92a2151d"],{

/***/ "3egX":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/providers/siteScriptProgress/SiteScriptProgressProvider.js ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: SiteScriptProgressProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteScriptProgressProvider", function() { return SiteScriptProgressProvider; });
var BASE_10_RADIX = 10;
var SITE_SCRIPT_LENGTH_THRESHOLD = 30;
var SiteScriptProgressProvider = /** @class */ (function () {
    function SiteScriptProgressProvider(params) {
        this._dataSource = params.dataSource;
        this._currentCultureName = params.currentCultureName;
    }
    SiteScriptProgressProvider.prototype.getSiteDesignRunStatus = function (runId, includeSchema) {
        var _this = this;
        return this._dataSource
            .getSiteDesignRunStatus(runId)
            .then(function (data) {
            var stageResultData = [];
            var items = data &&
                data.d &&
                data.d.GetSiteDesignRunStatusAndSchema &&
                data.d.GetSiteDesignRunStatusAndSchema.ActionStatus &&
                data.d.GetSiteDesignRunStatusAndSchema.ActionStatus.results;
            if (items && items.length) {
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    stageResultData.push({
                        outcomeCode: item.OutcomeCode,
                        outcomeText: item.OutcomeText
                    });
                }
            }
            var siteScriptData = undefined;
            if (includeSchema && data.d.GetSiteDesignRunStatusAndSchema.Schema) {
                siteScriptData = _this._constructSiteScriptData(data.d.GetSiteDesignRunStatusAndSchema.Schema, undefined /*siteDesignId*/);
            }
            return {
                siteScriptData: siteScriptData,
                stageResultData: stageResultData
            };
        });
    };
    SiteScriptProgressProvider.prototype.getSiteDesignRuns = function () {
        var _this = this;
        return this._dataSource.getSiteDesignRuns().then(function (data) {
            var result = [];
            if (data && data.d && data.d.results) {
                for (var i = 0; i < data.d.results.length; i++) {
                    var item = data.d.results[i];
                    var startTime = parseInt(item.StartTime, BASE_10_RADIX);
                    result.push({
                        siteDesignId: item.SiteDesignID,
                        siteDesignTitle: item.SiteDesignTitle,
                        runId: item.ID,
                        version: item.SiteDesignVersion,
                        runDate: isNaN(startTime) ? '' : new Date(startTime).toLocaleDateString(_this._currentCultureName)
                    });
                }
            }
            return result;
        });
    };
    SiteScriptProgressProvider.prototype.getSiteDesignStages = function (id) {
        var _this = this;
        return this._dataSource.getSiteDesignStages(id).then(function (data) {
            if (data && data.d && data.d.GetSiteDesignStages) {
                return _this._constructSiteScriptData(data.d.GetSiteDesignStages, id);
            }
        });
    };
    SiteScriptProgressProvider.prototype.addSiteDesignTask = function (siteDesignId) {
        return this._dataSource.addSiteDesignTask(siteDesignId).then(function (data) {
            if (data && data.d && data.d.AddSiteDesignTaskToCurrentWeb && data.d.AddSiteDesignTaskToCurrentWeb.ID) {
                return {
                    taskId: data.d.AddSiteDesignTaskToCurrentWeb.ID,
                    siteDesignId: data.d.AddSiteDesignTaskToCurrentWeb.SiteDesignID,
                    logonName: data.d.AddSiteDesignTaskToCurrentWeb.LogonName
                };
            }
            return undefined;
        });
    };
    SiteScriptProgressProvider.prototype.getSiteDesignTasks = function () {
        return this._dataSource.getSiteDesignTasks().then(function (data) {
            if (data &&
                data.d &&
                data.d.GetSiteDesignTasks &&
                data.d.GetSiteDesignTasks.results &&
                data.d.GetSiteDesignTasks.results.map) {
                return data.d.GetSiteDesignTasks.results.map(function (value) {
                    return {
                        taskId: value.ID,
                        siteDesignId: value.SiteDesignID,
                        logonName: value.LogonName
                    };
                });
            }
            return undefined;
        });
    };
    SiteScriptProgressProvider.prototype.applySiteDesign = function (id, store) {
        return this._dataSource.applySiteDesign(id, store).then(function (data) {
            if (data && data.d && data.d.ApplySiteDesign) {
                var serverResults = data.d.ApplySiteDesign.results;
                if (serverResults) {
                    var result = [];
                    for (var i = 0; i < serverResults.length; i++) {
                        var item = serverResults[i];
                        var outcomeCode = parseInt(item.Outcome, BASE_10_RADIX);
                        result.push({
                            outcomeCode: isNaN(outcomeCode) ? 1 /* Failure */ : outcomeCode,
                            outcomeText: item.OutcomeText
                        });
                    }
                    return result;
                }
            }
            return undefined;
        });
    };
    SiteScriptProgressProvider.prototype.getTenantSiteDesigns = function () {
        var _this = this;
        return this._dataSource
            .getTenantSiteDesigns()
            .then(function (data) { return _this._getSiteDesignsFromServerData(data); });
    };
    SiteScriptProgressProvider.prototype.getOutOfBoxSiteDesigns = function () {
        var _this = this;
        return this._dataSource
            .getOutOfBoxSiteDesigns()
            .then(function (data) { return _this._getSiteDesignsFromServerData(data); });
    };
    SiteScriptProgressProvider.prototype.getIsSiteDesignPending = function () {
        return this._dataSource.getIsSiteDesignPending().then(function (data) {
            if (!data || !data.d) {
                return false;
            }
            else if (data.error) {
                return false;
            }
            else {
                return !!data.d.ValidatePendingWebTemplateExtension;
            }
        }, function (error) {
            return false;
        });
    };
    SiteScriptProgressProvider.prototype.applyImplicitSiteDesign = function () {
        this._dataSource.applyImplicitSiteDesign();
    };
    SiteScriptProgressProvider.prototype._constructSiteScriptData = function (stagesData, siteDesignId) {
        var serverData = JSON.parse(stagesData);
        var siteScripts = [];
        var stageNames = [];
        if (serverData && serverData.recipes.length) {
            for (var i = 0; i < serverData.recipes.length; i++) {
                siteScripts.push({
                    id: serverData.recipes[i].recipeGuid,
                    name: serverData.recipes[i].recipeName,
                    actions: serverData.recipes[i].actions
                });
                if (serverData.recipes[i].actions && serverData.recipes[i].actions.length) {
                    for (var j = 0; j < serverData.recipes[i].actions.length; j++) {
                        if (serverData.recipes[i].actions[j] &&
                            serverData.recipes[i].actions[j].stages &&
                            serverData.recipes[i].actions[j].stages.length) {
                            stageNames.push.apply(stageNames, serverData.recipes[i].actions[j].stages);
                        }
                    }
                }
            }
        }
        return {
            siteDesignId: siteDesignId,
            siteDesignTitle: serverData.siteDesignTitle,
            siteScripts: siteScripts,
            stageNames: stageNames,
            isLongRunning: stageNames.length > SITE_SCRIPT_LENGTH_THRESHOLD
        };
    };
    SiteScriptProgressProvider.prototype._getSiteDesignsFromServerData = function (data) {
        if (data && data.d && data.d.GetSiteDesigns) {
            var serverOutOfBoxSiteDesigns = data.d.GetSiteDesigns.results;
            if (serverOutOfBoxSiteDesigns && serverOutOfBoxSiteDesigns.length) {
                var result = [];
                for (var i = 0; i < serverOutOfBoxSiteDesigns.length; i++) {
                    var item = serverOutOfBoxSiteDesigns[i];
                    if (item) {
                        var supportedTemplates = item.SupportedWebTemplates &&
                            item.SupportedWebTemplates.results &&
                            item.SupportedWebTemplates.results.length
                            ? this._getSupportedTemplateTypes(item.SupportedWebTemplates.results)
                            : this._getSupportedTemplateTypes([item.WebTemplate]);
                        var templateFeatures = item.TemplateFeatures && item.TemplateFeatures.results;
                        result.push({
                            id: item.Id,
                            title: item.Title,
                            version: item.Version,
                            schema: undefined,
                            imageUrl: item.PreviewImageUrl,
                            imageAltText: item.PreviewImageAltText,
                            description: item.Description,
                            supportedTemplates: supportedTemplates,
                            designPackageId: undefined,
                            thumbnailUrl: item.ThumbnailUrl,
                            templateFeatures: templateFeatures,
                            isOutOfBoxTemplate: item.IsOutOfBoxTemplate,
                            requiresGroupConnected: item.RequiresGroupConnected,
                            requiresTeamsConnected: item.RequiresTeamsConnected,
                            requiresYammerConnected: item.RequiresYammerConnected,
                            isTenantAdminOnly: item.IsTenantAdminOnly
                        });
                    }
                }
                return result;
            }
        }
        return [];
    };
    SiteScriptProgressProvider.prototype._getSupportedTemplateTypes = function (webTemplateList) {
        var result = [];
        if (webTemplateList) {
            for (var i = 0; i < webTemplateList.length; i++) {
                var webTemplate = webTemplateList[i];
                if (webTemplate) {
                    var template = parseInt(webTemplate, 10 /*radix*/);
                    if (!isNaN(template)) {
                        result.push(template);
                    }
                }
            }
        }
        return result;
    };
    return SiteScriptProgressProvider;
}());

//# sourceMappingURL=SiteScriptProgressProvider.js.map

/***/ }),

/***/ "OpcF":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/providers/siteScriptProgress/SiteScriptProgressStateManager.js ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: SiteScriptProgressCallbackType, SiteScriptRunAge, SiteScriptProgressStateManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteScriptProgressCallbackType", function() { return SiteScriptProgressCallbackType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteScriptRunAge", function() { return SiteScriptRunAge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteScriptProgressStateManager", function() { return SiteScriptProgressStateManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _dataSources_siteScriptProgress_SiteScriptProgressDataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dataSources/siteScriptProgress/SiteScriptProgressDataSource */ "Q1B5");
/* harmony import */ var _SiteScriptProgressProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SiteScriptProgressProvider */ "3egX");





/**
 * In general, to get async data from the state manager, you need to register a callback.
 * The methods in this class do not return promises. This is because a run may return data
 * in multiple installments.
 */
var SiteScriptProgressCallbackType;
(function (SiteScriptProgressCallbackType) {
    /**
     * These callbacks will be invoked when new data about a site design run is retrieved from the server.
     */
    SiteScriptProgressCallbackType[SiteScriptProgressCallbackType["newProgressData"] = 0] = "newProgressData";
    /**
     * These callbacks will be invoked when new data is retrieved from the server, if the data isn't about the initial site design
     * run.
     */
    SiteScriptProgressCallbackType[SiteScriptProgressCallbackType["newNonProgressData"] = 1] = "newNonProgressData";
    /**
     * These callbacks will be invoked when a user executes the action to open the site script progress panel.
     * The intended use of this is through the gear menu.
     * Note that this is not the same as clicking on the SiteScriptProgressIndicator.
     */
    SiteScriptProgressCallbackType[SiteScriptProgressCallbackType["openPanelAction"] = 2] = "openPanelAction";
})(SiteScriptProgressCallbackType || (SiteScriptProgressCallbackType = {}));
/**
 * A run is considered "new" if it isn't complete by the time the first "getProgress" call is made for it.
 * A run is considered "old" if it is complete by the time the first "getProgress" call is made for it.
 * Before the first "getProgress" call is made, the run is considered "unknown"
 */
var SiteScriptRunAge;
(function (SiteScriptRunAge) {
    SiteScriptRunAge[SiteScriptRunAge["unknown"] = 0] = "unknown";
    SiteScriptRunAge[SiteScriptRunAge["old"] = 1] = "old";
    SiteScriptRunAge[SiteScriptRunAge["new"] = 2] = "new";
})(SiteScriptRunAge || (SiteScriptRunAge = {}));
var INITIAL_TIMEOUT_V2 = 8; // wait this many seconds between polls for data (initially)
var EXPONENTIAL_BACKOFF_THRESHOLD = 120; // after this many seconds, start exponentially backing off how often polls for data are done
// This class generates numbers based on the Fibonacci sequence,
// This leads to exponential backoff of approximately 1.6^n.
var TimeoutGenerator = /** @class */ (function () {
    function TimeoutGenerator(firstTimeout, root) {
        this._totalTimeWaited = 0;
        this._useTimerV2 = false;
        if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated('67B7383B-D5DF-4CFD-9BCB-7D8A2A1468A1', '05/30/2019', 'Delay site script exponential backoff')) {
            this._useTimerV2 = true;
            this._nextTimeout = INITIAL_TIMEOUT_V2;
            this._lastTimeout = INITIAL_TIMEOUT_V2;
        }
        else {
            this._nextTimeout = firstTimeout;
            this._lastTimeout = root;
        }
    }
    TimeoutGenerator.prototype.getNextTimeout = function () {
        if (this._useTimerV2) {
            var generatedTimeout = void 0;
            if (this._totalTimeWaited >= EXPONENTIAL_BACKOFF_THRESHOLD) {
                generatedTimeout = this._nextTimeout;
                this._nextTimeout = this._nextTimeout + this._lastTimeout;
                this._lastTimeout = generatedTimeout;
            }
            else {
                generatedTimeout = INITIAL_TIMEOUT_V2;
            }
            this._totalTimeWaited += generatedTimeout;
            return generatedTimeout * 1000;
        }
        else {
            var lastTimeoutBackup = this._lastTimeout;
            this._lastTimeout = this._nextTimeout;
            this._nextTimeout = this._nextTimeout + lastTimeoutBackup;
            return this._lastTimeout * 1000;
        }
    };
    return TimeoutGenerator;
}());
var NOT_FOUND_STATUS_CODE = 404;
var EMPTY_GUID = '00000000-0000-0000-0000-000000000000';
var INITIAL_SITE_DESIGN_RUN_ID = EMPTY_GUID;
var INITIAL_TIMEOUT = 3;
var TIMEOUT_ROOT = 2;
var SiteScriptProgressStateManager = /** @class */ (function () {
    function SiteScriptProgressStateManager(props) {
        var _this = this;
        /**
         * Retrieves progress information about the indicated run and pings the listeners.
         * This method will continue calling itself until the run reports itself as complete.
         *
         * @param runId The id of the run
         * @param runKey The key of the run
         * @param siteDesignId The id of the site design being run
         * @param timeoutGenerator Used to generate the timeouts for this series of requests
         * @param allowApplySiteDesign If true, a REST call to apply the implicit site design if the first call in the series fails with a 404
         * @param allowGetSiteDesignStages If true, _getSiteDesignStages will be called if no stage data is availble and a request in the series fails.
         */
        this._getSiteDesignProgress = function (runId, runKey, siteDesignId, timeoutGenerator, allowApplySiteDesign, allowGetSiteDesignStages) {
            if (!_this.isRunComplete(runKey)) {
                var timer_1 = setTimeout(_this._getSiteDesignProgress.bind(_this), timeoutGenerator.getNextTimeout(), runId, runKey, siteDesignId, timeoutGenerator, false /*allowApplySiteDesign*/, allowGetSiteDesignStages);
                var includeSchema = !_this._data[runKey].stageResultData || _this._runCompletionStates[runKey].isSchemaDirty;
                // Keep requesting the schema until one of the calls succeeds. After that, we should have the actual schema,
                // so no need to keep requesting it.
                _this._provider.getSiteDesignRunStatus(runId, includeSchema).then(function (value) {
                    if (value) {
                        var updateNeeded = false; // Will cause the listeners to be notified of runKey is the currently selected run
                        var forceUpdate = false; // Will cause the listeners to be notified no matter what
                        // on legacy runs, the site design title won't be returned from the server
                        // but we should have it cached already, so just fill it in.
                        if (value.siteScriptData &&
                            !value.siteScriptData.siteDesignTitle &&
                            _this._siteDesignRunDict[runKey] &&
                            _this._siteDesignRunDict[runKey].siteDesignTitle) {
                            value.siteScriptData.siteDesignTitle = _this._siteDesignRunDict[runKey].siteDesignTitle;
                        }
                        var stageOutcomesKnownButIncomplete = _this._getStageOutcomesKnownButIncomplete(value.stageResultData);
                        if (value.siteScriptData) {
                            _this._data[runKey].siteScriptData = value.siteScriptData;
                            _this._runCompletionStates[runKey].isSchemaDirty = false;
                            _this._runCompletionStates[runKey].stagesRetrieved = true;
                            _this._runCompletionStates[runKey].stagesRequired = value.siteScriptData.stageNames.length;
                            updateNeeded = true;
                        }
                        if (!_this._data[runKey].stageResultData ||
                            value.stageResultData.length > _this._data[runKey].stageResultData.length ||
                            stageOutcomesKnownButIncomplete <
                                _this._runCompletionStates[runKey].stageOutcomesKnownButIncomplete) {
                            _this._data[runKey].stageResultData = value.stageResultData;
                            _this._runCompletionStates[runKey].stageOutcomesKnown = value.stageResultData.length;
                            _this._runCompletionStates[runKey].stageOutcomesKnownButIncomplete = stageOutcomesKnownButIncomplete;
                            updateNeeded = true;
                        }
                        var isRunComplete = _this.isRunComplete(runKey);
                        if (_this._runCompletionStates[runKey].age === SiteScriptRunAge.unknown) {
                            _this._runCompletionStates[runKey].age = isRunComplete
                                ? SiteScriptRunAge.old
                                : SiteScriptRunAge.new;
                            updateNeeded = true;
                        }
                        if (isRunComplete) {
                            clearTimeout(timer_1);
                            if (_this._runCompletionStates[runKey].age === SiteScriptRunAge.new) {
                                _this._state.hasARunCompleted = true;
                                forceUpdate = true;
                            }
                        }
                        if (updateNeeded && runKey === _this._state.displayedRunKey) {
                            _this._updateState(_this._runCompletionStates[runKey]);
                            _this._notifyListeners(SiteScriptProgressCallbackType.newProgressData);
                        }
                        else if (forceUpdate) {
                            _this._notifyListeners(SiteScriptProgressCallbackType.newProgressData);
                        }
                    }
                    else {
                        if (_this._runCompletionStates[runKey].age === SiteScriptRunAge.unknown) {
                            _this._runCompletionStates[runKey].age = SiteScriptRunAge.new;
                            if (allowGetSiteDesignStages) {
                                _this._getSiteDesignStages(runKey, siteDesignId);
                            }
                            if (runKey === _this._state.displayedRunKey) {
                                _this._updateState(_this._runCompletionStates[runKey]);
                                _this._notifyListeners(SiteScriptProgressCallbackType.newProgressData);
                            }
                        }
                    }
                }, function (error) {
                    if (_this._runCompletionStates[runKey].age === SiteScriptRunAge.unknown) {
                        _this._runCompletionStates[runKey].age = SiteScriptRunAge.new;
                        if (allowGetSiteDesignStages) {
                            _this._getSiteDesignStages(runKey, siteDesignId);
                        }
                        if (runKey === _this._state.displayedRunKey) {
                            _this._updateState(_this._runCompletionStates[runKey]);
                            _this._notifyListeners(SiteScriptProgressCallbackType.newProgressData);
                        }
                    }
                    if (error.status === NOT_FOUND_STATUS_CODE && allowApplySiteDesign) {
                        _this._provider.applyImplicitSiteDesign();
                    }
                });
            }
        };
        this._pageContext = props.pageContext;
        this._currentCultureName = this.getCurrentCultureName();
        this._webTemplate = props.pageContext ? props.pageContext.webTemplate : '';
        this._provider = new _SiteScriptProgressProvider__WEBPACK_IMPORTED_MODULE_4__["SiteScriptProgressProvider"]({
            dataSource: this.createSiteScriptProgressDataSource(),
            currentCultureName: this._currentCultureName
        });
        this._state = {
            isSiteDesignPending: false,
            stagesRetrieved: false,
            stageOutcomesKnown: 0,
            stageOutcomesKnownButIncomplete: 0,
            displayedRunKey: INITIAL_SITE_DESIGN_RUN_ID,
            stagesRequired: 0,
            age: SiteScriptRunAge.unknown,
            selectedTenantSiteDesign: '',
            hasARunCompleted: false
        };
        this._runCompletionStates = {};
        this._data = {};
        this._registeredCallbacks = [];
        this._tenantSiteDesignsDict = {};
        this._siteDesignRunDict = {};
        this._siteDesignRunRequestSentDict = {};
        this._tenantSiteDesignSchemaRequestSentDict = {};
        this._triggeredOpenBefore = false;
        if (props.pageContext) {
            if (props.pageContext.hasPendingWebTemplateExtension) {
                this._isSiteDesignPendingPromise = this._checkForPendingSiteDesign();
            }
            else {
                this._isSiteDesignPendingPromise = Promise.resolve(false);
            }
        }
        else {
            // this is a workaround to allow the demo to work.
            this._isSiteDesignPendingPromise = this._checkForPendingSiteDesign();
        }
    }
    SiteScriptProgressStateManager.getInstance = function (props) {
        if (!SiteScriptProgressStateManager._instance) {
            SiteScriptProgressStateManager._instance = new SiteScriptProgressStateManager(props);
        }
        return SiteScriptProgressStateManager._instance;
    };
    /**
     * This method only exists to be overridden for use in the demo.
     */
    SiteScriptProgressStateManager.prototype.createSiteScriptProgressDataSource = function () {
        return new _dataSources_siteScriptProgress_SiteScriptProgressDataSource__WEBPACK_IMPORTED_MODULE_3__["SiteScriptProgressDataSource"]({
            pageContext: this._pageContext
        });
    };
    /**
     * This method only exists to be overridden for use in the demo.
     */
    SiteScriptProgressStateManager.prototype.getCurrentCultureName = function () {
        return this._pageContext.currentCultureName;
    };
    /**
     * Returns the web template of the current web.
     */
    SiteScriptProgressStateManager.prototype.getWebTemplate = function () {
        return this._webTemplate;
    };
    /**
     * Changes the displayed run to runId and retrieves its data if necessary.
     * @param runId The run to display
     */
    SiteScriptProgressStateManager.prototype.showSiteDesignRun = function (runId) {
        if (this._siteDesignRunDict[runId]) {
            if (!this._data[runId] && !this._siteDesignRunRequestSentDict[runId]) {
                this._siteDesignRunRequestSentDict[runId] = true; // only send this request once
                this._initializeRunData(runId, SiteScriptRunAge.unknown);
                this._getSiteDesignProgress(runId, runId /*runKey*/, this._siteDesignRunDict[runId].siteDesignId, new TimeoutGenerator(INITIAL_TIMEOUT, TIMEOUT_ROOT), false /*allowApplySiteDesign*/, true /*allowGetSiteDesignStages*/);
            }
            // This is where the displayed run is changed.
            this._updateState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._runCompletionStates[runId]), { displayedRunKey: runId, selectedTenantSiteDesign: '', selectedTenantSiteDesignSchema: undefined, showingTenantSiteDesigns: false }));
            this._notifyListeners(SiteScriptProgressCallbackType.newNonProgressData);
        }
    };
    SiteScriptProgressStateManager.prototype.showTenantSiteDesigns = function () {
        this._updateState({
            showingTenantSiteDesigns: true,
            selectedTenantSiteDesign: '',
            selectedTenantSiteDesignSchema: undefined
        });
        this._notifyListeners(SiteScriptProgressCallbackType.newNonProgressData);
    };
    SiteScriptProgressStateManager.prototype.hideTenantSiteDesigns = function () {
        if (this._state.showingTenantSiteDesigns) {
            this._updateState({
                showingTenantSiteDesigns: false,
                selectedTenantSiteDesign: '',
                selectedTenantSiteDesignSchema: undefined
            });
            this._notifyListeners(SiteScriptProgressCallbackType.newNonProgressData);
        }
    };
    SiteScriptProgressStateManager.prototype.showTenantSiteDesign = function (siteDesignId) {
        var _this = this;
        if (siteDesignId) {
            if (this._tenantSiteDesignsDict[siteDesignId]) {
                this._updateState({
                    selectedTenantSiteDesign: siteDesignId,
                    selectedTenantSiteDesignSchema: this._tenantSiteDesignsDict[siteDesignId].schema // it's fine if this is undefined
                });
                this._notifyListeners(SiteScriptProgressCallbackType.newNonProgressData);
                if (!this._tenantSiteDesignsDict[siteDesignId].schema &&
                    !this._tenantSiteDesignSchemaRequestSentDict[siteDesignId]) {
                    this._tenantSiteDesignSchemaRequestSentDict[siteDesignId] = true;
                    this._provider.getSiteDesignStages(siteDesignId).then(function (value) {
                        if (value) {
                            _this._tenantSiteDesignsDict[siteDesignId].schema = value;
                        }
                        if (_this._state.selectedTenantSiteDesign === siteDesignId) {
                            _this._state.selectedTenantSiteDesignSchema = _this._tenantSiteDesignsDict[siteDesignId].schema;
                            _this._notifyListeners(SiteScriptProgressCallbackType.newNonProgressData);
                        }
                    });
                }
            }
        }
        else {
            this._updateState({
                selectedTenantSiteDesign: '',
                selectedTenantSiteDesignSchema: undefined
            });
            this._notifyListeners(SiteScriptProgressCallbackType.newNonProgressData);
        }
    };
    /**
     * Apply this indicated site design and display the result.
     * @param id The site design to apply
     */
    SiteScriptProgressStateManager.prototype.applySiteDesign = function (id) {
        var tenantSiteDesign;
        if (this._tenantSiteDesignsDict[id]) {
            tenantSiteDesign = this._tenantSiteDesignsDict[id];
        }
        else {
            return;
        }
        // We currently have no way of figuring out the actual id of the run before the request returns
        // so use this instead. We will find out the actual id later.
        var runKey = Date.now().toString();
        this._siteDesignRunRequestSentDict[runKey] = true;
        this._siteDesignRunDict[runKey] = {
            siteDesignTitle: tenantSiteDesign.title,
            siteDesignId: id,
            runId: runKey,
            version: tenantSiteDesign.version,
            runDate: new Date().toLocaleDateString(this._currentCultureName)
        };
        this._state.siteDesignRuns = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([this._siteDesignRunDict[runKey]], this._state.siteDesignRuns);
        this._initializeRunData(runKey, SiteScriptRunAge.new);
        this._data[runKey].stageResultData = [];
        this._addSiteDesignTask(tenantSiteDesign, runKey);
        this._updateState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._runCompletionStates[runKey]), { displayedRunKey: runKey, showingTenantSiteDesigns: false, selectedTenantSiteDesign: '', selectedTenantSiteDesignSchema: undefined }));
        this._notifyListeners(SiteScriptProgressCallbackType.newNonProgressData);
    };
    /**
     * This method causes the list of tenant site designs and the list of site designs
     * that have been run on this web to be loaded. Calling it more than once has no additional effect.
     * It does not return a promise. To be notified of the result, you need to listen for
     * SiteScriptProgressCallbackType.newNonProgressData.
     */
    SiteScriptProgressStateManager.prototype.retrieveTenantSiteDesignsAndSiteDesignRuns = function () {
        var _this = this;
        if (!this._requestedTenantSiteDesigns) {
            this._requestedTenantSiteDesigns = true;
            this._provider.getTenantSiteDesigns().then(function (tenantSiteDesigns) {
                _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_1__["Engagement"].logData({
                    name: 'SiteScripts.GetTenantSiteDesigns',
                    extraData: { siteDesignCount: tenantSiteDesigns ? tenantSiteDesigns.length : 0 }
                });
                _this._updateState({
                    tenantSiteDesigns: tenantSiteDesigns
                });
                for (var i = 0; i < tenantSiteDesigns.length; i++) {
                    _this._tenantSiteDesignsDict[tenantSiteDesigns[i].id] = tenantSiteDesigns[i];
                }
                _this._notifyListeners(SiteScriptProgressCallbackType.newNonProgressData);
            });
        }
        this._getSiteDesignRuns();
    };
    SiteScriptProgressStateManager.prototype.getSiteDesignRun = function (runKey) {
        return this._siteDesignRunDict[runKey];
    };
    SiteScriptProgressStateManager.prototype._addSiteDesignTask = function (tenantSiteDesign, runKey) {
        var _this = this;
        this._data[runKey].siteScriptData = tenantSiteDesign.schema;
        this._runCompletionStates[runKey].stagesRetrieved = true;
        this._runCompletionStates[runKey].stagesRequired = this._data[runKey].siteScriptData.stageNames.length;
        this._runCompletionStates[runKey].isSchemaDirty = true;
        this._provider.addSiteDesignTask(tenantSiteDesign.id).then(function (task) {
            _this._getSiteDesignProgress(task.taskId, runKey, tenantSiteDesign.id, new TimeoutGenerator(INITIAL_TIMEOUT, TIMEOUT_ROOT), false /*allowApplySiteDesign*/, false /*allowGetSiteDesignStages*/);
        });
    };
    /**
     * This method causes the list of dite design runs that have occurred on this web to be retrieved.
     * As a side effect, the resulting promise is also cached in this._siteDesignRunsPromise.
     * Further calls to this method have no effect.
     */
    SiteScriptProgressStateManager.prototype._getSiteDesignRuns = function () {
        var _this = this;
        if (!this._siteDesignRunsPromise) {
            this._siteDesignRunsPromise = this._provider.getSiteDesignRuns().then(function (runs) {
                _this._updateState({
                    siteDesignRuns: runs
                });
                for (var i = 0; i < runs.length; i++) {
                    _this._siteDesignRunDict[runs[i].runId] = runs[i];
                }
                _this._notifyListeners(SiteScriptProgressCallbackType.newNonProgressData);
                return runs;
            });
        }
        return this._siteDesignRunsPromise;
    };
    SiteScriptProgressStateManager.prototype._getSiteDesignTasks = function () {
        if (!this._siteDesignTasksPromise) {
            this._siteDesignTasksPromise = this._provider.getSiteDesignTasks();
        }
        return this._siteDesignTasksPromise;
    };
    /**
     * Returns the current state. Modifying it this way will cause undefined behavior,
     * so don't do that.
     */
    SiteScriptProgressStateManager.prototype.getState = function () {
        return this._state;
    };
    /**
     * Returns data about a specific run. If no data is available, returns undefined.
     * @param runKey The run.
     */
    SiteScriptProgressStateManager.prototype.getData = function (runKey) {
        return this._data[runKey];
    };
    SiteScriptProgressStateManager.prototype.getTenantSiteDesign = function (siteDesignId) {
        return this._tenantSiteDesignsDict[siteDesignId];
    };
    SiteScriptProgressStateManager.prototype.registerCallback = function (key, callbackType, callback) {
        if (!this._registeredCallbacks[callbackType]) {
            this._registeredCallbacks[callbackType] = {};
        }
        this._registeredCallbacks[callbackType][key] = callback;
    };
    SiteScriptProgressStateManager.prototype.unregisterCallback = function (key, callbackType) {
        var registeredCallbacks = this._registeredCallbacks[callbackType];
        if (registeredCallbacks && registeredCallbacks.hasOwnProperty(key)) {
            delete registeredCallbacks[key];
        }
    };
    /**
     * This method causes the panel to open. It is intended to be used as a user-initiated action
     * (like clicking on a link in the settings menu). It also retrieves some data to show in the panel.
     */
    SiteScriptProgressStateManager.prototype.triggerOpenPanelAction = function () {
        var _this = this;
        if (!this._triggeredOpenBefore) {
            this._triggeredOpenBefore = true;
            this._isSiteDesignPendingPromise.then(function (isPending) {
                if (!isPending) {
                    _this._getSiteDesignRuns().then(function (result) {
                        if (result && result.length) {
                            var runId = result[0].runId;
                            _this._initializeRunData(runId, SiteScriptRunAge.unknown);
                            _this._updateState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this._runCompletionStates[runId]), { displayedRunKey: runId }));
                            _this._notifyListeners(SiteScriptProgressCallbackType.newNonProgressData);
                            _this._siteDesignRunRequestSentDict[runId] = true;
                            _this._getSiteDesignProgress(runId, runId /*runKey*/, result[0].siteDesignId, new TimeoutGenerator(INITIAL_TIMEOUT, TIMEOUT_ROOT), false /*allowApplySiteDesign*/, true /*allowGetSiteDesignStages*/);
                        }
                    });
                }
            });
        }
        this._notifyListeners(SiteScriptProgressCallbackType.openPanelAction);
    };
    /**
     * Returns true if and only if the indicated run is complete, according to what is cached in the progressmanager.
     * @param runKey The run in question
     */
    SiteScriptProgressStateManager.prototype.isRunComplete = function (runKey) {
        if (this._runCompletionStates[runKey]) {
            var state = this._runCompletionStates[runKey];
            return (state.stagesRetrieved &&
                state.stageOutcomesKnown === state.stagesRequired &&
                state.stageOutcomesKnownButIncomplete === 0);
        }
        return false;
    };
    /**
     * Returns the percent completion of a run as a number between 0 and 1 inclusive.
     * @param runKey The run in question
     */
    SiteScriptProgressStateManager.prototype.getCompletionRatio = function (runKey) {
        if (!this._data ||
            !this._data[runKey] ||
            !this._data[runKey].siteScriptData ||
            !this._data[runKey].siteScriptData.stageNames) {
            return 0;
        }
        else if (this._data[runKey].siteScriptData.stageNames.length === 0) {
            return 1;
        }
        else {
            var stagesComplete = Math.max(0, this._state.stageOutcomesKnown - this._state.stageOutcomesKnownButIncomplete);
            return stagesComplete / this._data[runKey].siteScriptData.stageNames.length;
        }
    };
    SiteScriptProgressStateManager.prototype._updateState = function (newState) {
        this._state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._state), newState);
    };
    /**
     * Convenience method for initializing the state of a run.
     * @param runKey The runKey of the run
     * @param age The RunAge to initialize the run with. Usually it will be "unknown" or "new"
     */
    SiteScriptProgressStateManager.prototype._initializeRunData = function (runKey, age) {
        this._runCompletionStates[runKey] = {
            stagesRetrieved: false,
            stageOutcomesKnown: 0,
            stageOutcomesKnownButIncomplete: 0,
            stagesRequired: 0,
            age: age
        };
        this._data[runKey] = {
            siteScriptData: undefined,
            stageResultData: undefined
        };
    };
    /**
     * Sends a notification to all listeners that are listening the specified callbackType
     * @param callbackType The callbackType
     */
    SiteScriptProgressStateManager.prototype._notifyListeners = function (callbackType) {
        var registeredCallbacks = this._registeredCallbacks[callbackType];
        if (registeredCallbacks) {
            for (var key in registeredCallbacks) {
                if (registeredCallbacks.hasOwnProperty(key)) {
                    try {
                        registeredCallbacks[key](Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._state));
                    }
                    catch (exception) {
                        // do nothing
                    }
                }
            }
        }
    };
    //  Basic flow:
    //  The web property HasPendingWebTemplateExtension will be enabled on most webs, even when a web template extension is not pending.
    //  The reason for this is that it is not possible to tell if a newly created site should have the default web template extension
    //  enabled on it without making a call and blocking the site creation flow until this call is finished is undesirable.
    //
    //  Instead, if the HasPendingWebTemplateExtension property is set, the SiteScriptProgressStateManager
    //  will call _checkForPendingSiteDesign(). This REST call will make the expensive call to check if there really is a web template
    //  extension. If there is, it will cache the ID of the web template extension in the web to speed up future calls to
    //  _checkForPendingSiteDesign(). If there isn't, it will unset the HasPendingWebTemplateExtension property, so that this
    //  entire flow can be skipped in the future on this site. Meanwhile, the state canRenderWebTemplatesGalleryFirstRun will be set to true,
    //  if the other first run experience conditions are met, the WebTemplatesGallery first run dialog will be rendered.
    //
    //  If there is actually a pending web template extension, the SiteScriptProgressStateManager will set state.isSiteDesignPending = true
    //  and send out a notification to everything listening.
    //
    //  In the current app design, the SiteScriptProgressIndicator will be listening for such a notification, and if it recieves one,
    //  it will make itself visible. It takes the form of a status bar. It will also render the SiteScriptProgressPanel.
    //
    //  Meanwhile, the SiteScriptProgressStateManager will kick off a _getSiteDesignProgress call. _getSiteDesignProgress will repeatedly
    //  invoke itself, with exponential backoff, trying to read the progress list for progress data about the run. Once it has read the
    //  list for the first time, it will have the schema of the run, which will be sent to all listeners. Every time new progress info is
    //  retrieved, this is sent to all listeners as well. Once all stages in the run have a result, _getSiteDesignProgress will stop invoking
    //  itself.
    //
    //  Note that if any stages are marked "Started", the run will still be considered incomplete until they are changed to something else.
    /**
     * Checks to see if a site design run is pending. This only checks for the implicit site design. This function is only
     * invoked to check if the "initial run state" is occurring.
     * If a site design run is pending, this method will cause the state manager to begin monitoring it and sending
     * out updates to the listeners.
     */
    SiteScriptProgressStateManager.prototype._checkForPendingSiteDesign = function () {
        var _this = this;
        this._siteDesignRunRequestSentDict[INITIAL_SITE_DESIGN_RUN_ID] = true;
        return this._provider.getIsSiteDesignPending().then(function (isPending) {
            if (isPending) {
                if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated('402D171D-93E7-49F4-8E32-4231EFA41B9D', '5/10/2019', 'Show stages for long site designs')) {
                    _this._initializeRunData(INITIAL_SITE_DESIGN_RUN_ID, SiteScriptRunAge.unknown);
                }
                else {
                    _this._initializeRunData(INITIAL_SITE_DESIGN_RUN_ID, SiteScriptRunAge.new);
                }
                _this._updateState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this._runCompletionStates[INITIAL_SITE_DESIGN_RUN_ID]), { isSiteDesignPending: true }));
                _this._notifyListeners(SiteScriptProgressCallbackType.newProgressData);
                if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated('402D171D-93E7-49F4-8E32-4231EFA41B9D', '5/10/2019', 'Show stages for long site designs')) {
                    // passing in the empty guid retrieves the implicit site design
                    _this._getSiteDesignProgress(INITIAL_SITE_DESIGN_RUN_ID, INITIAL_SITE_DESIGN_RUN_ID /*runKey*/, EMPTY_GUID /* siteDesignId */, new TimeoutGenerator(INITIAL_TIMEOUT, TIMEOUT_ROOT), true /*allowApplySiteDesign*/, true /*allowGetSiteDesignStages*/);
                }
                else {
                    // passing in the empty guid retrieves the implicit site design
                    _this._getSiteDesignProgress(INITIAL_SITE_DESIGN_RUN_ID, INITIAL_SITE_DESIGN_RUN_ID /*runKey*/, EMPTY_GUID /* siteDesignId */, new TimeoutGenerator(INITIAL_TIMEOUT, TIMEOUT_ROOT), true /*allowApplySiteDesign*/, false /*allowGetSiteDesignStages*/);
                }
                return true;
            }
            return _this._getSiteDesignTasks().then(function (tasks) {
                if (tasks.length) {
                    // In the unlikely event that more than one task is found, we will only care
                    // about the first one, since the first run experience only cares about one
                    // run at a time.
                    _this._initializeRunData(tasks[0].taskId, SiteScriptRunAge.new);
                    _this._updateState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this._runCompletionStates[tasks[0].taskId]), { displayedRunKey: tasks[0].taskId, isSiteDesignPending: true }));
                    _this._notifyListeners(SiteScriptProgressCallbackType.newProgressData);
                    _this._getSiteDesignProgress(tasks[0].taskId, tasks[0].taskId /*runKey*/, tasks[0].siteDesignId /* siteDesignId */, new TimeoutGenerator(INITIAL_TIMEOUT, TIMEOUT_ROOT), false /*allowApplySiteDesign*/, true /*allowGetSiteDesignStages*/);
                    return true;
                }
                _this._updateState({
                    canRenderWebTemplatesGalleryFirstRun: true
                });
                _this._notifyListeners(SiteScriptProgressCallbackType.newProgressData);
                return false;
            });
        }, function () {
            return false;
        });
    };
    /**
     * Retrieves the stages of the current version of the indicated site design and saves them with the runData indicated
     * by runKey. Note that this method returns the data about the current version of the site design. If the runKey
     * indicates an old run of the site design that was on a different version, it will be wrong.
     *
     * Since the data returned by this method may be wrong, _getSiteDesignProgress (which is assumed to never be wrong,
     * just slow) can overwrite the data returned by this method, while this method cannot overwrite the
     * data from _getSiteDesignProgress.
     *
     * @param runKey The run to save the data with
     * @param siteDesignId The site design to request
     */
    SiteScriptProgressStateManager.prototype._getSiteDesignStages = function (runKey, siteDesignId) {
        var _this = this;
        var getStagesPromise = this._provider.getSiteDesignStages(siteDesignId);
        getStagesPromise.then(function (value) {
            if (!_this._data[runKey].siteScriptData) {
                _this._data[runKey].siteScriptData = value;
                _this._runCompletionStates[runKey].stagesRetrieved = true;
                _this._runCompletionStates[runKey].stagesRequired = value.stageNames.length;
                _this._runCompletionStates[runKey].isSchemaDirty = true;
                if (runKey === _this._state.displayedRunKey) {
                    _this._updateState(_this._runCompletionStates[runKey]);
                    _this._notifyListeners(SiteScriptProgressCallbackType.newNonProgressData);
                }
            }
        });
        return getStagesPromise;
    };
    /**
     * Reads a stageResultData array to find the number of stages that have an outcome of "Started",
     * which means they are still technically incomplete.
     * @param stageResultData the array to read
     */
    SiteScriptProgressStateManager.prototype._getStageOutcomesKnownButIncomplete = function (stageResultData) {
        var result = 0;
        for (var i = 0; i < stageResultData.length; i++) {
            if (stageResultData[i].outcomeCode === 4 /* Started */) {
                result += 1;
            }
        }
        return result;
    };
    return SiteScriptProgressStateManager;
}());

//# sourceMappingURL=SiteScriptProgressStateManager.js.map

/***/ }),

/***/ "Q1B5":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/siteScriptProgress/SiteScriptProgressDataSource.js ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: SiteScriptProgressDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteScriptProgressDataSource", function() { return SiteScriptProgressDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_DataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/DataSource */ "AfY0");
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
/* harmony import */ var _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/encoding/UriEncoding */ "+35T");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");





var SiteScriptProgressDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SiteScriptProgressDataSource, _super);
    function SiteScriptProgressDataSource(params) {
        return _super.call(this, {
            dataSourceName: 'SiteScriptProgressDataSource'
        }, {
            pageContext: params.pageContext
        }) || this;
    }
    SiteScriptProgressDataSource.prototype.getDesignPackageMenuContents = function () {
        return this.getData(this._constructGetDesignPackageMenuContentsUrl.bind(this), function (responseText) { return JSON.parse(responseText); }, 'GetDesignPackageMenuContentsAPI');
    };
    SiteScriptProgressDataSource.prototype.getSiteDesignTasks = function () {
        var _this = this;
        return this.getData(this._constructGetSiteDesignTasksUrl.bind(this), function (responseText) { return JSON.parse(responseText); }, 'GetSiteDesignTasksAPI', function () {
            if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__["Killswitch"].isActivated('C9983E3A-9ADE-46A3-AA71-5D790B7A6566', '6/28/2019', 'GetSiteDesignTasksOnlyForCurrentWeb')) {
                return JSON.stringify({
                    webUrl: _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_3__["default"].escapeUrlForCallback(_this._pageContext.webAbsoluteUrl)
                });
            }
            else {
                return JSON.stringify({
                    webUrl: ''
                });
            }
        });
    };
    SiteScriptProgressDataSource.prototype.addSiteDesignTask = function (siteDesignId) {
        return this.getData(this._constructAddSiteDesignTaskUrl.bind(this), function (responseText) { return JSON.parse(responseText); }, 'AddSiteDesignTaskAPI', function () {
            return JSON.stringify({
                siteDesignId: siteDesignId
            });
        });
    };
    SiteScriptProgressDataSource.prototype.getSiteDesignRunStatus = function (runId) {
        return this.getData(this._constructGetSiteDesignRunStatusUrl.bind(this), function (responseText) { return JSON.parse(responseText); }, 'GetSiteDesignRunStatusAPI', function () {
            return JSON.stringify({
                runId: runId
            });
        });
    };
    SiteScriptProgressDataSource.prototype.getSiteDesignRuns = function () {
        return this.getData(this._constructGetSiteDesignRunsUrl.bind(this), function (responseText) { return JSON.parse(responseText); }, 'GetSiteDesignStagesAPI');
    };
    SiteScriptProgressDataSource.prototype.getSiteDesignStages = function (id) {
        return this.getData(this._constructGetSiteDesignStagesUrl.bind(this), function (responseText) { return JSON.parse(responseText); }, 'GetSiteDesignStagesAPI', function () {
            return JSON.stringify({
                siteDesignId: id
            });
        });
    };
    SiteScriptProgressDataSource.prototype.applySiteDesign = function (id, store) {
        var _this = this;
        return this.getData(this._constructApplySiteDesignUrl.bind(this), function (responseText) { return JSON.parse(responseText); }, 'ApplySiteDesignAPI', function () {
            return JSON.stringify({
                siteDesignId: id,
                webUrl: _this._pageContext.webAbsoluteUrl,
                store: store
            });
        });
    };
    SiteScriptProgressDataSource.prototype.getTenantSiteDesigns = function () {
        return this.getData(this._consturctGetTenantSiteDesignsUrl.bind(this), function (responseText) { return JSON.parse(responseText); }, 'GetTenantSiteDesignsAPI');
    };
    SiteScriptProgressDataSource.prototype.getOutOfBoxSiteDesigns = function () {
        return this.getData(this._consturctGetOutOfBoxSiteDesignsUrl.bind(this), function (responseText) { return JSON.parse(responseText); }, 'GetOutOfBoxSiteDesignsAPI');
    };
    SiteScriptProgressDataSource.prototype.getIsSiteDesignPending = function () {
        return this.getData(this._constructValidateSiteDesignPendingUrl.bind(this), function (responseText) { return JSON.parse(responseText); }, 'ValidateSiteDesignPendingAPI');
    };
    SiteScriptProgressDataSource.prototype.applyImplicitSiteDesign = function () {
        this.getData(this._constructApplyImplicitSiteDesignUrl.bind(this), function (responseText) { return responseText; }, 'ApplyImplicitSiteDesignAPI');
    };
    SiteScriptProgressDataSource.prototype._constructGetDesignPackageMenuContentsUrl = function () {
        return this._constructGenericUrl('/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetDesignPackageMenuContents');
    };
    SiteScriptProgressDataSource.prototype._constructGetSiteDesignTasksUrl = function () {
        return this._constructGenericUrl('/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesignTasks');
    };
    SiteScriptProgressDataSource.prototype._constructAddSiteDesignTaskUrl = function () {
        return this._constructGenericUrl('/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.AddSiteDesignTaskToCurrentWeb');
    };
    SiteScriptProgressDataSource.prototype._constructGetSiteDesignRunStatusUrl = function () {
        return this._constructGenericUrl('/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesignRunStatusAndSchema');
    };
    SiteScriptProgressDataSource.prototype._constructGetSiteDesignRunsUrl = function () {
        return this._constructGenericUrl('/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesignRun');
    };
    SiteScriptProgressDataSource.prototype._constructGetSiteDesignStagesUrl = function () {
        return this._constructGenericUrl('/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesignStages');
    };
    SiteScriptProgressDataSource.prototype._constructApplySiteDesignUrl = function () {
        return this._constructGenericUrl('/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.ApplySiteDesign');
    };
    SiteScriptProgressDataSource.prototype._consturctGetTenantSiteDesignsUrl = function () {
        return this._constructGenericUrl('/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesigns');
    };
    SiteScriptProgressDataSource.prototype._consturctGetOutOfBoxSiteDesignsUrl = function () {
        return this._constructGenericUrl('/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesigns?store=1');
    };
    SiteScriptProgressDataSource.prototype._constructValidateSiteDesignPendingUrl = function () {
        return this._constructGenericUrl('/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.ValidatePendingWebTemplateExtension');
    };
    SiteScriptProgressDataSource.prototype._constructApplyImplicitSiteDesignUrl = function () {
        return this._constructGenericUrl('/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.ApplyImplicitSiteDesign');
    };
    SiteScriptProgressDataSource.prototype._constructGenericUrl = function (suffix) {
        var uri = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_2__["default"](_ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_2__["default"].concatenate(_ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_3__["default"].escapeUrlForCallback(this._pageContext.webServerRelativeUrl), suffix));
        return uri.toString();
    };
    return SiteScriptProgressDataSource;
}(_base_DataSource__WEBPACK_IMPORTED_MODULE_1__["default"]));

//# sourceMappingURL=SiteScriptProgressDataSource.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~shared-react-sitescriptprogressin~92a2151d_[locale].js.map