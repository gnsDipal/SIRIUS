(window["webpackJsonp_4df9bb86_ab0a_4aab_ab5f_48bf167048fb_1_12_1"] = window["webpackJsonp_4df9bb86_ab0a_4aab_ab5f_48bf167048fb_1_12_1"] || []).push([["sp-navigation-datastore"],{

/***/ "oPyX":
/*!**********************************************!*\
  !*** ./lib/navigator/NavigationDataStore.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
// Copyright (c) Microsoft. All rights reserved.


var fetchAppDataQosScenarioName = 'NavigationDataStore.fetchAppData';
/**
 * Navigation Data Store that stores navigation data items while enforcing
 * constraints to ensure optimal use of resources
 *
 * @internal
 */
var NavigationDataStore = /** @class */ (function () {
    function NavigationDataStore(id, buildIdKey, buildId, executor, validator, refreshThresholdMs, maxStoreSize) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(id, 'id');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(executor, 'executor');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(validator, 'validator');
        this._id = id;
        this._executor = executor;
        this._dataValidator = validator;
        this._refreshThreshold = refreshThresholdMs || NavigationDataStore.refreshThresholdMs;
        this._maxStoreSize = maxStoreSize || NavigationDataStore.maxStoreSize;
        var storeItems = NavigationDataStore._initStore(id, this._maxStoreSize, buildIdKey, buildId);
        this._buildMinHeap(storeItems);
    }
    NavigationDataStore._leftChild = function (index) {
        return 2 * index + 1;
    };
    NavigationDataStore._rightChild = function (index) {
        return 2 * index + 2;
    };
    NavigationDataStore._parent = function (index) {
        return Math.floor((index - 1) / 2);
    };
    NavigationDataStore._swap = function (items, leftIdx, rightIdx) {
        var temp = items[rightIdx];
        items[rightIdx] = items[leftIdx];
        items[leftIdx] = temp;
    };
    NavigationDataStore._generateItemCacheKey = function () {
        return "spfx-ndsi-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
    };
    NavigationDataStore._fetchSessionCacheEntry = function (item
    // tslint:disable-next-line:no-any
    ) {
        var cachedEntry = undefined;
        try {
            var cacheKey = item.itemReference;
            if (cacheKey && cacheKey.length > 0) {
                var serializedEntry = sessionStorage.getItem(cacheKey);
                if (serializedEntry && serializedEntry.length > 0) {
                    var parsedResponse = JSON.parse(serializedEntry);
                    if (parsedResponse &&
                        NavigationDataStore._normalizeUrl(parsedResponse.url) ===
                            NavigationDataStore._normalizeUrl(item.url)) {
                        cachedEntry = parsedResponse;
                    }
                }
            }
        }
        catch (_a) {
            // Ignore and return an empty entry
        }
        return cachedEntry;
    };
    NavigationDataStore._fetchItemData = function (item, fetchLkg
    // tslint:disable-next-line:no-any
    ) {
        var cachedEntry = NavigationDataStore._fetchSessionCacheEntry(item);
        if (cachedEntry && cachedEntry.payload) {
            return {
                navData: cachedEntry.payload.navData,
                data: fetchLkg && cachedEntry.payload.data ? cachedEntry.payload.data : undefined
            };
        }
        return undefined;
    };
    NavigationDataStore._upsertItemData = function (item, data, // tslint:disable-line:no-any
    isNavData) {
        var cachedEntry = NavigationDataStore._fetchSessionCacheEntry(item);
        if (cachedEntry && cachedEntry.payload) {
            if (isNavData) {
                cachedEntry.payload.navData = data;
            }
            else {
                cachedEntry.payload.data = data;
            }
            NavigationDataStore._updateStore(item.itemReference, cachedEntry);
        }
        else {
            // tslint:disable-next-line:no-any
            var payload = {
                navData: isNavData ? data : undefined,
                data: !isNavData ? data : undefined
            };
            // tslint:disable-next-line:no-any
            var newEntry = {
                url: item.url,
                payload: payload
            };
            var cacheKey = NavigationDataStore._generateItemCacheKey();
            NavigationDataStore._updateStore(cacheKey, newEntry);
            item.itemReference = cacheKey;
        }
    };
    NavigationDataStore._removeItemEntries = function (items) {
        if (Array.isArray(items) && items.length > 0) {
            items.forEach(function (item) {
                if (item && item.itemReference && item.itemReference.length > 0) {
                    sessionStorage.removeItem(item.itemReference);
                }
            });
        }
    };
    NavigationDataStore._initStore = function (id, maxSize, buildIdKey, buildId) {
        var items = [];
        try {
            var cacheBuildId = sessionStorage.getItem(buildIdKey);
            if (buildId !== cacheBuildId) {
                sessionStorage.setItem(buildIdKey, buildId);
            }
            var serializedEntry = sessionStorage.getItem(id);
            if (serializedEntry && serializedEntry.length > 0) {
                var entries = JSON.parse(serializedEntry);
                if (Array.isArray(entries) && entries.length > 0) {
                    items = entries;
                    var maxEntriesToRemove = buildId !== cacheBuildId ? entries.length : maxSize;
                    if (items.length > maxSize || buildId !== cacheBuildId) {
                        var removedItems = items.splice(maxEntriesToRemove);
                        NavigationDataStore._removeItemEntries(removedItems);
                    }
                    if (buildId !== cacheBuildId) {
                        sessionStorage.removeItem(id);
                        return [];
                    }
                }
            }
        }
        catch (e) {
            // Ignore and return an empty store
        }
        return items;
    };
    NavigationDataStore._updateStore = function (id, data) {
        try {
            sessionStorage.setItem(id, JSON.stringify(data));
        }
        catch (e) {
            // Ignore and return an empty cache
        }
    };
    NavigationDataStore._generatePreloadHeaders = function (props) {
        var headers = new Headers();
        if (props && props.isPrefetchRequest) {
            headers.append('X-RequestPrefetchLink', '1');
        }
        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('153edef1-9c5b-4ad1-aa5f-a9c53071e0fa' /* '08/28/2020', 'Skip server manifests on sw-powered pages' */) &&
            window['__spfxMark'] // tslint:disable-line:no-string-literal
        ) {
            headers.append('X-Service-Worker-In-Place-Nav', 'true');
        }
        return headers;
    };
    NavigationDataStore._generatePrefetchHeaders = function (props) {
        var headers = new Headers();
        headers.append('X-RequestPrefetchData', '1');
        if (props && props.isPrefetchRequest) {
            headers.append('X-RequestPrefetchLink', '1');
        }
        return headers;
    };
    NavigationDataStore._normalizeUrl = function (url) {
        return url && url.toLowerCase();
    };
    Object.defineProperty(NavigationDataStore.prototype, "id", {
        /**
         * Gets the Store Id
         */
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NavigationDataStore.prototype, "items", {
        /**
         * Gets all the store items
         */
        get: function () {
            return this._store.items;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets the item associated with a key.
     *
     * @remarks
     * If the Item exists in the store and is still valid then returns from the store,
     * else relies on the executor to fetch the item from the store and upserts it accordingly
     *
     * @param url - The url corresponding to the item
     * @param props - Optional Navigation property bag
     *
     * @returns The Promise associated with the navigation data response.
     */
    NavigationDataStore.prototype.getData = function (url, props) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(url, 'url');
        var cachedItem = undefined;
        var cachedItemIdx = -1;
        if (props && props.enableCache) {
            var cachedEntry = this._findItem(url);
            cachedItem = cachedEntry.item;
            cachedItemIdx = cachedEntry.index;
            if (cachedItem && cachedItem.fetchedTime) {
                var threshold = Date.now() - this._refreshThreshold;
                var hasExpired = cachedItem.fetchedTime <= threshold;
                if (!hasExpired) {
                    if (!props.isPrefetchRequest) {
                        cachedItem.accessedTime = Date.now();
                        this._heapify(cachedItemIdx);
                        NavigationDataStore._updateStore(this._id, this._store.items);
                    }
                    var entry = NavigationDataStore._fetchItemData(cachedItem, props.enableDataPrefetch);
                    if (entry && entry.navData) {
                        var preloadedDataPromise = Promise.resolve(entry.navData);
                        var prefetchedDataPromise = props.enableDataPrefetch // tslint:disable-line:no-any
                            ? Promise.resolve(entry.data)
                            : undefined;
                        return Promise.resolve({
                            preloadedData: preloadedDataPromise,
                            prefetchedData: prefetchedDataPromise
                        });
                    }
                }
            }
        }
        return this._fetchData(url, props, cachedItem, cachedItemIdx);
    };
    /**
     * Removes an item associated with a given key or matching a key RegExp
     * @param url - The URL or RegExp
     */
    NavigationDataStore.prototype.remove = function (url) {
        var itemsRemoved = false;
        if (url instanceof RegExp) {
            itemsRemoved = this._removeMatching(url);
        }
        else {
            var cachedEntry = this._findItem(url);
            if (cachedEntry.index > -1) {
                var removedItems = this._store.items.splice(cachedEntry.index, 1);
                NavigationDataStore._removeItemEntries(removedItems);
                itemsRemoved = true;
            }
        }
        if (itemsRemoved) {
            this._buildMinHeap(this._store.items);
            NavigationDataStore._updateStore(this._id, this._store.items);
        }
    };
    /**
     * Removes all items whose key matches this RegExp
     * @param regExp any keys matching this regex will be removed
     * @returns whether any items were removed
     */
    NavigationDataStore.prototype._removeMatching = function (regExp) {
        regExp = new RegExp(NavigationDataStore._normalizeUrl(regExp.source), 'i');
        var removedAnything = false;
        var cachedItemIdx = -1;
        var numItems = this._store.size;
        var removedItemCollection = [];
        for (cachedItemIdx = 0; cachedItemIdx < numItems; cachedItemIdx++) {
            var item = this._store.items[cachedItemIdx];
            if (item && !!regExp.test(NavigationDataStore._normalizeUrl(item.url))) {
                var removedItem = this._store.items.splice(cachedItemIdx, 1);
                if (removedItem) {
                    removedItemCollection.push.apply(removedItemCollection, removedItem);
                }
                cachedItemIdx--;
                numItems--;
                removedAnything = true;
            }
        }
        NavigationDataStore._removeItemEntries(removedItemCollection);
        return removedAnything;
    };
    NavigationDataStore.prototype._addOrUpdateCacheEntry = function (url, data, // tslint:disable-line:no-any
    isNavData, cachedEntry) {
        if (cachedEntry && cachedEntry.item) {
            if (isNavData) {
                cachedEntry.item.fetchedTime = Date.now();
                cachedEntry.item.accessedTime = cachedEntry.item.fetchedTime;
                NavigationDataStore._upsertItemData(cachedEntry.item, data, true);
                this._heapify(cachedEntry.index);
            }
            else {
                NavigationDataStore._upsertItemData(cachedEntry.item, data, false);
            }
        }
        else {
            var entry = this._findItem(url);
            if (entry.item) {
                NavigationDataStore._upsertItemData(entry.item, data, isNavData);
            }
            else {
                if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('5433a3bc-803a-458b-b88b-2ae6540f7d43'
                /* '09/09/2020', 'Don't cache pages that have URLs that break RegExp parsing' */
                )) {
                    try {
                        // tslint:disable-next-line:no-unused-expression
                        new RegExp(url);
                    }
                    catch (error) {
                        // Some URLs cause RegExp to throw, so just avoid caching these entries to avoid problems when we
                        // invalidate these cache entries
                        return;
                    }
                }
                var curTime = Date.now();
                var storeItem = {
                    accessedTime: curTime,
                    fetchedTime: curTime,
                    url: url
                };
                NavigationDataStore._upsertItemData(storeItem, data, isNavData);
                this._insert(storeItem);
            }
        }
        NavigationDataStore._updateStore(this._id, this._store.items);
    };
    NavigationDataStore.prototype._fetchData = function (url, props, cachedItem, cachedItemIdx) {
        var _this = this;
        var preloadedDataPromise = this._executor(url, NavigationDataStore._generatePreloadHeaders(props)).then(function (navData) {
            _this._dataValidator(navData);
            if (props && props.enableCache) {
                var entry = cachedItem
                    ? {
                        item: cachedItem,
                        index: cachedItemIdx
                    }
                    : undefined;
                _this._addOrUpdateCacheEntry(url, navData, true, entry);
            }
            return navData;
        });
        var prefetchedDataPromise = undefined; // tslint:disable-line:no-any
        if (props && props.enableDataPrefetch) {
            var qosMonitor_1 = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"](fetchAppDataQosScenarioName);
            prefetchedDataPromise =
                // tslint:disable-next-line:no-any
                this._executor(url, NavigationDataStore._generatePrefetchHeaders(props))
                    // tslint:disable-next-line:no-any
                    .then(function (appData) {
                    var entry = cachedItem
                        ? {
                            item: cachedItem,
                            index: cachedItemIdx
                        }
                        : undefined;
                    _this._addOrUpdateCacheEntry(url, appData, false, entry);
                    qosMonitor_1.writeSuccess();
                    return appData;
                })
                    .catch(function (e) {
                    qosMonitor_1.writeUnexpectedFailure(e);
                    throw e;
                });
        }
        return Promise.resolve({
            preloadedData: preloadedDataPromise,
            prefetchedData: prefetchedDataPromise
        });
    };
    NavigationDataStore.prototype._heapify = function (index) {
        var leftIdx = NavigationDataStore._leftChild(index);
        var rightIdx = NavigationDataStore._rightChild(index);
        var smallestIdx = undefined;
        if (leftIdx < this._store.size &&
            this._store.items[leftIdx].accessedTime < this._store.items[index].accessedTime) {
            smallestIdx = leftIdx;
        }
        else {
            smallestIdx = index;
        }
        if (rightIdx < this._store.size &&
            this._store.items[rightIdx].accessedTime < this._store.items[smallestIdx].accessedTime) {
            smallestIdx = rightIdx;
        }
        if (smallestIdx !== index) {
            NavigationDataStore._swap(this._store.items, index, smallestIdx);
            this._heapify(smallestIdx);
        }
    };
    NavigationDataStore.prototype._extractMin = function () {
        if (this._store.size < 1) {
            return undefined;
        }
        var minItem = this._store.items[0];
        this._store.items[0] = this._store.items[this._store.size - 1];
        this._store.size -= 1;
        this._heapify(0);
        var removedItems = this._store.items.splice(this._store.size);
        NavigationDataStore._removeItemEntries(removedItems);
        return minItem;
    };
    NavigationDataStore.prototype._reduceKey = function (index, item) {
        this._store.items[index] = item;
        while (index >= 0 && this._store.items[NavigationDataStore._parent(index)] < this._store.items[index]) {
            NavigationDataStore._swap(this._store.items, index, NavigationDataStore._parent(index));
            index = NavigationDataStore._parent(index);
        }
    };
    NavigationDataStore.prototype._insert = function (item) {
        if (this._store.size === this._maxStoreSize) {
            this._extractMin();
        }
        this._store.size += 1;
        this._reduceKey(this._store.size - 1, item);
    };
    NavigationDataStore.prototype._buildMinHeap = function (items) {
        this._store = {
            items: items,
            size: items.length
        };
        for (var idx = Math.floor(this._store.size / 2); idx >= 0; idx--) {
            this._heapify(idx);
        }
    };
    NavigationDataStore.prototype._findItem = function (url) {
        var cachedItem = undefined;
        var cachedItemIdx = -1;
        for (cachedItemIdx = 0; cachedItemIdx < this._store.size; cachedItemIdx++) {
            var item = this._store.items[cachedItemIdx];
            if (item && NavigationDataStore._normalizeUrl(item.url) === NavigationDataStore._normalizeUrl(url)) {
                cachedItem = item;
                break;
            }
        }
        return {
            item: cachedItem,
            index: cachedItem === undefined ? -1 : cachedItemIdx
        };
    };
    NavigationDataStore.refreshThresholdMs = 10 * 60 * 1000; // 10 mins
    NavigationDataStore.maxStoreSize = 15;
    return NavigationDataStore;
}());
/* harmony default export */ __webpack_exports__["default"] = (NavigationDataStore);


/***/ })

}]);
//# sourceMappingURL=chunk.sp-navigation-datastore_none.js.map