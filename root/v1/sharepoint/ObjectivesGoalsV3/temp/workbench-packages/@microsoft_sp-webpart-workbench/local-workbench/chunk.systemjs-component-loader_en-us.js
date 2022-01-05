(window["webpackJsonp_1c6c9123_7aac_41f3_a376_3caea41ed83f_1_12_1"] = window["webpackJsonp_1c6c9123_7aac_41f3_a376_3caea41ed83f_1_12_1"] || []).push([["systemjs-component-loader"],{

/***/ "/+z7":
/*!********************************!*\
  !*** ./lib/loader/Loader.resx ***!
  \********************************/
/*! exports provided: loadComponentLog, loadComponentEndLog, loadComponentRetryLog, loadPathDependencyLog, isUndefinedValidateError, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"loadComponentLog\":\"Loading component \\u0022{0}\\u0022 ({1}).\",\"loadComponentEndLog\":\"Component \\u0022{0}\\u0022 ({1}) loaded.\",\"loadComponentRetryLog\":\"Loading component \\u0022{0}\\u0022 ({1}). Attempt {2} of {3}.\",\"loadPathDependencyLog\":\"Loading path dependency \\u0022{0}\\u0022 from component \\u0022{1}\\u0022 ({2})\",\"isUndefinedValidateError\":\"The value for \\u0022{0}\\u0022 must not be undefined\"}");

/***/ }),

/***/ "8ehC":
/*!*************************************!*\
  !*** ./lib/systemjs/SystemsJs.resx ***!
  \*************************************/
/*! exports provided: systemConfigDisabledError, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"systemConfigDisabledError\":\"System.config() is not supported. Use a manifest to specify the configuration.\"}");

/***/ }),

/***/ "A8iV":
/*!*********************************************!*\
  !*** ./lib/utilities/ComponentOverrider.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/ComponentStore */ "eaMA");
/* harmony import */ var _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/ManifestStore */ "Eke5");
/* harmony import */ var _componentConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentConstants */ "kd3Z");




var ComponentOverrider = /** @class */ (function () {
    function ComponentOverrider() {
    }
    /**
     * Given a component id and a component module, it sets the component in the loader, therefore being
     * available without the need of loading it separately.
     * Should only be used when initializing the loader.
     *
     * @param componentId - Id of the component to override. There should be only one version of the component.
     * @param componentModule - Component module.
     */
    ComponentOverrider.overrideComponent = function (componentId, componentModule, serviceScope, moduleLoaderServiceKey) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(componentId, 'componentId');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(componentModule, 'componentModule');
        // Needed for React16 rollout. Should be removed with version aware assembly manifests.
        var version = ComponentOverrider.getReactVersionIfNecessary(componentId);
        var manifest = _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_2__["default"].instance.tryGetManifest(componentId, version);
        // VSO bug 295355 makes it possible that manifest for odspUtilitiesBundle may not exist.
        if (!manifest) {
            return;
        }
        serviceScope.consume(moduleLoaderServiceKey).ensure(manifest, componentModule);
        _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_1__["default"].instance.storeLoadedComponent(manifest.id, manifest.version, componentModule);
    };
    /**
     * This is necessary because assemblies don't advertise the component version, and it may be the case where the page
     * requires both React 15 and React 16 manifests, but assemblies never have React 15 anymore.  When assemblies have
     * a deeper understanding of the versions that are included in them, this can be removed.
     */
    ComponentOverrider.getReactVersionIfNecessary = function (componentId) {
        if (componentId === _componentConstants__WEBPACK_IMPORTED_MODULE_3__["reactComponentId"] || componentId === _componentConstants__WEBPACK_IMPORTED_MODULE_3__["reactDomComponentId"]) {
            return _componentConstants__WEBPACK_IMPORTED_MODULE_3__["react16Version"];
        }
        else {
            return undefined;
        }
    };
    return ComponentOverrider;
}());
/* harmony default export */ __webpack_exports__["default"] = (ComponentOverrider);


/***/ }),

/***/ "Edzh":
/*!***************************************!*\
  !*** ./lib/systemjs/normalizeName.js ***!
  \***************************************/
/*! exports provided: default, normalizeFailoverPathName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeFailoverPathName", function() { return normalizeFailoverPathName; });
/* harmony import */ var _utilities_normalizeComponentId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/normalizeComponentId */ "jLfe");

/**
 * This is the base URL for components that will be sent to SystemJS.
 * SystemJS removes the base URL in order to get the right identifier.
 *
 * By having two different base URLs we can differentiate when we are importing components
 * and when it's an accidental import.
 */
var _componentBaseUrl = 'https://component-id.invalid/';
/**
 * Given a manifest, or a manifest and a name, normalizes the name for usage
 * in stores and SystemJS.
 *
 * This is used in order to support versioning for components, and uniquely
 * identify non-component dependencies.
 *
 * Current behavior:
 * Returns <manifestId>_<manifestVersion>.
 * If a name is provided returns the <manifestId>_<manifestVersion>/<name>.
 * It prepends 'https://component-id.invalid/' in order to make it an absolute URL.
 *
 * Final behavior:
 * For a manifest, normalized name will be <componentId>-<version>
 * If a name is provided, normalized name will be <componentId>-<version>-<name>
 */
function normalizeName(manifest, name) {
    if (name) {
        return _componentBaseUrl + [normalizeManifestId(manifest), name].join('/');
    }
    else {
        return _componentBaseUrl + normalizeManifestId(manifest);
    }
}
function normalizeManifestId(manifest) {
    return Object(_utilities_normalizeComponentId__WEBPACK_IMPORTED_MODULE_0__["default"])(manifest.id, manifest.version);
}
/**
 * This is only used for components that have a failover path (so far, react and react-dom).
 * As the failover path is used when there is no component, they work via its name,
 * but as opposed to the 'path' dependencies, they are unique in SPFx, like a component.
 *
 * They return the name directly, prepended by the component base URL.
 */
function normalizeFailoverPathName(name) {
    return _componentBaseUrl + name;
}


/***/ }),

/***/ "PypK":
/*!*************************************************!*\
  !*** ./lib/requirejs/SystemJsFallbackLoader.js ***!
  \*************************************************/
/*! exports provided: SystemJsFallbackLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemJsFallbackLoader", function() { return SystemJsFallbackLoader; });
/* harmony import */ var _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stores/ComponentStore */ "eaMA");
/* harmony import */ var _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/ManifestStore */ "Eke5");
/* harmony import */ var _systemjs_normalizeName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../systemjs/normalizeName */ "Edzh");
/* harmony import */ var _systemjs_SPSystemJsComponentLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../systemjs/SPSystemJsComponentLoader */ "gsvc");
/* harmony import */ var _systemjs_SystemJsLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../systemjs/SystemJsLoader */ "U29/");
/* harmony import */ var _utilities_LoadComponentExecutor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/LoadComponentExecutor */ "td2X");






var SystemJsFallbackLoader = /** @class */ (function () {
    function SystemJsFallbackLoader(serviceScope) {
        this._isInitialized = false;
        this._serviceScope = serviceScope;
        this._executor = new _utilities_LoadComponentExecutor__WEBPACK_IMPORTED_MODULE_5__["default"](this._loadComponentImpl.bind(this));
    }
    Object.defineProperty(SystemJsFallbackLoader.prototype, "executor", {
        get: function () {
            return this._executor;
        },
        enumerable: false,
        configurable: true
    });
    SystemJsFallbackLoader.prototype.loadComponent = function (manifest) {
        return this._executor.loadComponent(manifest);
    };
    SystemJsFallbackLoader.prototype._loadComponentImpl = function (manifest) {
        var _this = this;
        this._ensureInitialized();
        // At this point we are on a best-effort basis once RequireJS fails to load the component.
        // This is overly expensive but it "just works" to ensure that SystemJS has everything that's needed.
        // Loading a component twice could lead to unexpected behavior and race condition issues.
        _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_0__["default"].instance.getAllComponentReferences().forEach(function (value, key) {
            _this._systemJsLoader._ensure(Object(_systemjs_normalizeName__WEBPACK_IMPORTED_MODULE_2__["normalizeFailoverPathName"])(key), value);
        });
        _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_1__["default"].instance.getRegisteredManifests().forEach(function (m) {
            _this._systemJsLoader.configure(m);
        });
        return this._systemJsComponentLoader
            .loadComponent(manifest)
            .then(function (module) {
            _this._restoreGlobals();
            return module;
        })
            .catch(function (error) {
            _this._restoreGlobals();
            throw error;
        });
    };
    SystemJsFallbackLoader.prototype._ensureInitialized = function () {
        if (this._isInitialized) {
            return;
        }
        this._saveGlobals();
        this._systemJsComponentLoader = new _systemjs_SPSystemJsComponentLoader__WEBPACK_IMPORTED_MODULE_3__["default"](this._serviceScope);
        this._systemJsLoader = this._serviceScope.consume(_systemjs_SystemJsLoader__WEBPACK_IMPORTED_MODULE_4__["default"].serviceKey);
        this._restoreGlobals();
        this._isInitialized = true;
    };
    SystemJsFallbackLoader.prototype._saveGlobals = function () {
        this.requirejs = SystemJsFallbackLoader._window.requirejs;
        this.require = SystemJsFallbackLoader._window.require;
        this.define = SystemJsFallbackLoader._window.define;
    };
    SystemJsFallbackLoader.prototype._restoreGlobals = function () {
        SystemJsFallbackLoader._window.requirejs = this.requirejs;
        SystemJsFallbackLoader._window.require = this.require;
        SystemJsFallbackLoader._window.define = this.define;
    };
    SystemJsFallbackLoader._window = window;
    return SystemJsFallbackLoader;
}());



/***/ }),

/***/ "U29/":
/*!****************************************!*\
  !*** ./lib/systemjs/SystemJsLoader.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/ManifestStore */ "Eke5");
/* harmony import */ var _stores_AddressStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stores/AddressStore */ "F+Lb");
/* harmony import */ var _utilities_resolveAddress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/resolveAddress */ "W2kl");
/* harmony import */ var _utilities_isCorsEnabled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/isCorsEnabled */ "ASbA");
/* harmony import */ var _normalizeName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./normalizeName */ "Edzh");
/* harmony import */ var _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/telemetryConstants */ "4mHd");
/* harmony import */ var _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../error/ErrorBuilder */ "ff4n");
/* harmony import */ var _requirejs_loadScriptWithoutEval__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../requirejs/loadScriptWithoutEval */ "CI3B");
/* harmony import */ var _SystemsJs_resx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SystemsJs.resx */ "8ehC");
var _SystemsJs_resx__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./SystemsJs.resx */ "8ehC", 1);
// Copyright (c) Microsoft. All rights reserved.
/// <reference path="./es-module-loader.d.ts" />











/**
 * Loader for SystemJS.
 * Provides the instance of SystemJS and allows methods for configuration.
 */
var SystemJsLoader = /** @class */ (function () {
    function SystemJsLoader(serviceScope) {
        this._configuredFailoverPaths = [];
        this._checkEntryPointDependenciesError = this._checkEntryPointDependenciesError.bind(this);
        this._initialize();
    }
    Object.defineProperty(SystemJsLoader.prototype, "loadEntryPointErrorProcessors", {
        get: function () {
            return [this._checkEntryPointDependenciesError];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SystemJsLoader.prototype, "loadComponentDependencyErrorProcessors", {
        get: function () {
            return [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SystemJsLoader.prototype, "loadPathDependencyErrorProcessors", {
        get: function () {
            return [];
        },
        enumerable: false,
        configurable: true
    });
    // tslint:disable-next-line:no-any
    SystemJsLoader.prototype.ensure = function (manifest, module) {
        var name = Object(_normalizeName__WEBPACK_IMPORTED_MODULE_6__["default"])(manifest);
        return this._ensure(name, module);
    };
    /**
     * If a module hasn't been loaded with the specified name,
     * it created a new module and sets it in SystemJS
     */
    // tslint:disable-next-line:no-any
    SystemJsLoader.prototype._ensure = function (name, module) {
        var system = this._system;
        if (!system.has(name)) {
            system.set(name, system.newModule(module));
        }
    };
    SystemJsLoader.prototype.delete = function (manifest) {
        return this._delete(Object(_normalizeName__WEBPACK_IMPORTED_MODULE_6__["default"])(manifest));
    };
    /**
     * If a module has been loaded with the specified name,
     * it delete it from SystemJS
     */
    SystemJsLoader.prototype._delete = function (name) {
        var system = this._system;
        if (system.has(name)) {
            system.delete(name);
        }
    };
    /**
     * Calls actual System.config()
     */
    SystemJsLoader.prototype.systemConfig = function (config) {
        this._originalSystemConfig.call(this._system, config);
    };
    SystemJsLoader.prototype.load = function (manifest, name, globalName) {
        var _this = this;
        return this.systemImport(Object(_normalizeName__WEBPACK_IMPORTED_MODULE_6__["default"])(manifest, name)).then(function (module) {
            var retValue = module;
            // Save "exportedModuleName" in SystemJS
            if (!name && manifest.loaderConfig.exportName) {
                retValue = module[manifest.loaderConfig.exportName];
                _this._ensure(Object(_normalizeName__WEBPACK_IMPORTED_MODULE_6__["default"])(manifest, manifest.loaderConfig.exportName), retValue);
            }
            return retValue;
        });
    };
    SystemJsLoader.prototype.loadFromFailoverPath = function (name) {
        return this.systemImport(Object(_normalizeName__WEBPACK_IMPORTED_MODULE_6__["normalizeFailoverPathName"])(name));
    };
    /**
     * Calls System.import()
     * Catches exceptions and returns a rejected promise with the error from SystemJS
     */
    SystemJsLoader.prototype.systemImport = function (name) {
        try {
            return this._system.import(name);
        }
        catch (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logError(_utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_7__["loadComponentLogSource"], error, SystemJsLoader.systemImportEventName);
            return Promise.reject(error);
        }
    };
    /** Calls System.delete() with the name matching the input manifest */
    SystemJsLoader.prototype.systemDelete = function (manifest) {
        this._system.delete(Object(_normalizeName__WEBPACK_IMPORTED_MODULE_6__["default"])(manifest));
    };
    /**
     * Sets the config for SystemJS. Handles global exports, renames the dependencies.
     * Also sets AddressStore with the right mapping between script and URL.
     */
    SystemJsLoader.prototype.configure = function (manifest) {
        var resources = manifest.loaderConfig.scriptResources;
        var depsMap = {};
        // Used only for failover paths. So far, this impacts react and react-dom on debug manifests.
        var globalDepsMap = {};
        for (var name_1 in resources) {
            if (resources[name_1].type === 'component') {
                var moduleConfiguration = resources[name_1];
                var resourceManifest = _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_2__["default"].instance.tryGetManifest(moduleConfiguration.id, moduleConfiguration.version);
                if (resourceManifest) {
                    depsMap[name_1] = Object(_normalizeName__WEBPACK_IMPORTED_MODULE_6__["default"])(resourceManifest);
                }
                if (moduleConfiguration.failoverPath) {
                    if (this._configuredFailoverPaths.indexOf(name_1) === -1) {
                        var normalizedName = Object(_normalizeName__WEBPACK_IMPORTED_MODULE_6__["normalizeFailoverPathName"])(name_1);
                        var address = Object(_utilities_resolveAddress__WEBPACK_IMPORTED_MODULE_4__["default"])(manifest, name_1);
                        // Start downloading the script without evaluating it.
                        // tslint:disable-next-line: no-floating-promises
                        Object(_requirejs_loadScriptWithoutEval__WEBPACK_IMPORTED_MODULE_9__["loadScriptWithoutEval"])(address, false /* Do not append .js to url */);
                        _stores_AddressStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.set(normalizedName, address);
                        globalDepsMap[name_1] = normalizedName;
                        this._configuredFailoverPaths.push(name_1);
                    }
                }
            }
            else {
                // path or localizedPath
                var normalizedName = void 0;
                if (name_1 === manifest.loaderConfig.entryModuleId) {
                    // the entry point of the module
                    normalizedName = Object(_normalizeName__WEBPACK_IMPORTED_MODULE_6__["default"])(manifest);
                }
                else {
                    normalizedName = Object(_normalizeName__WEBPACK_IMPORTED_MODULE_6__["default"])(manifest, name_1);
                    depsMap[name_1] = normalizedName;
                }
                var address = Object(_utilities_resolveAddress__WEBPACK_IMPORTED_MODULE_4__["default"])(manifest, name_1);
                // Start downloading the script without evaluating it.
                // tslint:disable-next-line: no-floating-promises
                Object(_requirejs_loadScriptWithoutEval__WEBPACK_IMPORTED_MODULE_9__["loadScriptWithoutEval"])(address, false /* Do not append .js to url */);
                _stores_AddressStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.set(normalizedName, address);
                var resource = resources[name_1];
                this._configureMetadata(normalizedName, address, resource);
            }
        }
        var packages = {};
        packages[Object(_normalizeName__WEBPACK_IMPORTED_MODULE_6__["default"])(manifest)] = {
            map: depsMap,
            defaultExtension: false
        };
        var config = {
            packages: packages
        };
        this.systemConfig(config);
        if (Object.keys(globalDepsMap).length) {
            this.systemConfig({
                map: globalDepsMap
            });
        }
    };
    /**
     * Returns the dependencies of a component, as detected by SystemJS when importing the module.
     * This method ignores the manifest dependencies and looks only at the JS file instead.
     * Used as a helper to find mismatching dependencies.
     *
     * @returns Array with the dependencies in a component. Empty array if dependencies could not be found.
     */
    SystemJsLoader.prototype.getDependencies = function (manifest) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(manifest, 'manifest');
        var defined = this._system.defined; // tslint:disable-line:no-any
        // Empirically, this is saved in 'https://relative-path.invalid/<id>_<version>'
        var definedName = this.getDefinedId(manifest);
        var componentDefinition = defined[definedName];
        if (!componentDefinition) {
            return [];
        }
        return componentDefinition.deps;
    };
    /**
     * Executes the base configuration for SystemJS. It should be private but it's public
     * so STS pages can modify scriptLoad to be false.
     */
    SystemJsLoader.prototype._baseSystemConfig = function (pluginName, scriptLoad) {
        var systemConfig = {
            meta: {
                '*': {
                    loader: pluginName,
                    scriptLoad: scriptLoad
                }
            }
        };
        this.systemConfig(systemConfig);
    };
    SystemJsLoader.prototype._initialize = function () {
        this._system = this._loadSystemJs();
        this._setCustomLoader(SystemJsLoader.pluginName, this._system);
        // Create a default SystemJS config that passes everything to our loader.
        var systemConfig = {
            baseURL: SystemJsLoader._invalidBaseUrl,
            defaultJsExtensions: false
        };
        this.systemConfig(systemConfig);
        this._baseSystemConfig(SystemJsLoader.pluginName, true);
    };
    SystemJsLoader.prototype._loadSystemJs = function () {
        // Load SystemJS
        var system =  false
            ? undefined
            : // tslint:disable-next-line:max-line-length
                __webpack_require__(/*! @rushstack/loader-raw-script!../../blobs/systemjs/0.19.25/dist/system.spfx */ "iKy5");
        // Hide System.config()
        this._originalSystemConfig = system.config;
        system.config = function (config) {
            throw new Error(_SystemsJs_resx__WEBPACK_IMPORTED_MODULE_10__["systemConfigDisabledError"]);
        };
        return system;
    };
    SystemJsLoader.prototype._setCustomLoader = function (pluginName, system) {
        var loader = {
            /**
             * locate returns an address for a module name.
             * In the case of components it takes the normalized name, which is an absolute URL.
             * SystemJS gets the name as 'https://component-id.invalid/<id>', which has an entry
             * in the AddressStore.
             * If the AddressStore doesn't have an entry for the name, locate leaves the name unmodified.
             * This supports the scenario where people call System.import() with an absolute URL.
             * System.import() with a relative URL is not supported and will fail to fetch the module,
             * as the base URL is 'https://relative-path.invalid/'
             */
            locate: function (module) {
                var address = _stores_AddressStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.tryGetAddress(module.name);
                if (address) {
                    return address;
                }
                else {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logVerbose(_utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_7__["loadComponentLogSource"], "Address not found for module name: " + module.name + ". Using it as absolute URL.");
                    // If we don't have the address mapped, assume the name IS the URL to grab it
                    return module.name;
                }
            }
        };
        // Load the loader as a system module and then set the system config. We need to do this is this order, otherwise
        // SystemJS will try to load our loader with itself, and will throw.
        system.set(pluginName, system.newModule(loader));
    };
    /**
     * Returns the id used by SystemJS in System.defined.
     * This allows to browse through SystemJS internals for additional data, like the JS dependencies.
     */
    SystemJsLoader.prototype.getDefinedId = function (manifest) {
        return SystemJsLoader._invalidBaseUrl + manifest.id + '_' + manifest.version;
    };
    /**
     * Configures the SystemJS metadata with the crossOrigin parameter,
     * and if the resource has a globalName; sets the global name configuration.
     * The crossOrigin parameter is needed for the SPFx service worker to transparently
     * read cross-domain resources.
     */
    SystemJsLoader.prototype._configureMetadata = function (normalizedName, address, resource) {
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1106 /* AkamaiCrossOrigin */)) {
            var meta = {};
            // Support global names
            if (resource.globalName) {
                meta[normalizedName] = {
                    format: 'global',
                    exports: resource.globalName
                };
            }
            if (Object(_utilities_isCorsEnabled__WEBPACK_IMPORTED_MODULE_5__["default"])(address)) {
                (meta[normalizedName] || (meta[normalizedName] = {})).crossOrigin = 'anonymous';
            }
            var globalConfig = {
                meta: meta
            };
            this.systemConfig(globalConfig);
        }
        else {
            // Support global names
            if (resource && resource.globalName) {
                var meta = {};
                meta[normalizedName] = {
                    format: 'global',
                    exports: resource.globalName
                };
                var globalConfig = {
                    meta: meta
                };
                this.systemConfig(globalConfig);
            }
        }
    };
    /**
     * Checks if the loaded JS dependencies match with dependencies declared in the manifest.
     * This can happen when a component is re-built but the manifest hasn't been modified.
     * If missing dependencies are found, it throws with an error stating the first mismatch.
     *
     * @param manifest - Manifest to check
     * @param name - Name of the entry point. Unused in this function.
     */
    SystemJsLoader.prototype._checkEntryPointDependenciesError = function (manifest, name) {
        var dependencies = this.getDependencies(manifest);
        var resources = manifest.loaderConfig.scriptResources;
        dependencies.forEach(function (depName) {
            if (!resources[depName]) {
                throw _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_8__["default"].buildModuleHasUndeclaredDependencyError(manifest, depName);
            }
        });
        return Promise.resolve();
    };
    SystemJsLoader.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["ServiceKey"].create('sp-loader:SystemJsLoader', SystemJsLoader);
    SystemJsLoader.pluginName = 'sp-loader-resolver';
    SystemJsLoader.systemImportEventName = 'System.import';
    /**
     * This is the configured base URL for SystemJS.
     * When a user tries to call SystemJS with a relative path, an error will show this as the base URL.
     *
     * Example:
     * System.import("myModule") => Error: https://relative-path.invalid/myModule not found
     */
    SystemJsLoader._invalidBaseUrl = 'https://relative-path.invalid/';
    return SystemJsLoader;
}());
/* harmony default export */ __webpack_exports__["default"] = (SystemJsLoader);


/***/ }),

/***/ "Uk6p":
/*!*******************************************!*\
  !*** ./lib/loader/BaseComponentLoader.js ***!
  \*******************************************/
/*! exports provided: BaseComponentLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponentLoader", function() { return BaseComponentLoader; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _debug_DebugManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../debug/DebugManager */ "GV8Z");
/* harmony import */ var _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/ComponentStore */ "eaMA");
/* harmony import */ var _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stores/ManifestStore */ "Eke5");
/* harmony import */ var _utilities_componentConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/componentConstants */ "kd3Z");
/* harmony import */ var _tiny_common_killSwitches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tiny/common/killSwitches */ "zBRI");
/* harmony import */ var _tiny_common_platformLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tiny/common/platformLoader */ "pxRb");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */







/**
 * The base class for a component loader.
 * Contains all implementation of the component loader that is agnostic to the internal module loader.
 *
 * @alpha
 */
var BaseComponentLoader = /** @class */ (function () {
    // Initialization
    /**
     * @internal
     */
    function BaseComponentLoader(serviceScope) {
        this._isInitialized = false;
        if (!BaseComponentLoader._headElement) {
            BaseComponentLoader._headElement = document.getElementsByTagName('head')[0];
        }
        this._serviceScope = serviceScope;
    }
    /**
     * This is called by the page scripts to start loading the framework. Do not call it from your own code.
     * @internal
     */
    BaseComponentLoader.prototype._startApplication = function (preloadedData) {
        // tslint:disable-next-line:no-any
        return Object(_tiny_common_platformLoader__WEBPACK_IMPORTED_MODULE_6__["startApplication"])(preloadedData, this._serviceScope).then(function (application) {
            // Normally non-SPFx environments locate their SPFx host application via a window variable
            // that our startup code assigns like this:
            //
            //   global.moduleLoaderPromise = global.spModuleLoader.start(spClientSidePageContext, handleFailure)
            //
            // However, in the case of the modern ListView, the "listview-spfx-host" loads after the main scripts,
            // which creates a race condition where window.moduleLoaderPromise sometimes might not be assigned yet
            // when their code tries to read it.  In that situation, they can register a callback like this:
            //
            // if (window['moduleLoaderPromise']) {
            //   window['moduleLoaderPromise'].then((application) => {
            //     doSomething(application);
            //   });
            // } else {
            //   window['_spLoaderCallback'] = function(application) {
            //     doSomething(application);
            //   };
            // }
            //
            /* tslint:disable:no-string-literal */
            if (window['_spLoaderCallback']) {
                var _spLoaderCallback = window['_spLoaderCallback']; // tslint:disable-line:no-any
                _spLoaderCallback(application);
            }
            /* tslint:enable:no-string-literal */
            return application;
        });
    };
    /**
     * Initializes the component loader.
     * Registers all manifests (including debug manifests, if it applies)
     * and sets up internal logic before allowing to load components.
     * @internal
     */
    BaseComponentLoader.prototype._initialize = function (preloadedData, bundledComponents, debugData) {
        if (this._isInitialized) {
            return;
        }
        // Set before the promise to ensure the async code is not called twice
        this._isInitialized = true;
        _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.registerPreloadedManifests(preloadedData);
        // We need to register the debug manifests before overriding the components
        if (debugData.debugManifests) {
            if (!debugData.registerAsNonDebug && !Object(_tiny_common_killSwitches__WEBPACK_IMPORTED_MODULE_5__["isDangerouslyEnableDebugKSActivated"])()) {
                _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.registerDebugManifests(debugData.debugManifests || []);
            }
            else {
                _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.registerManifests(debugData.debugManifests || [], debugData.registerAsNonDebug);
            }
        }
        this._listViewHostWorkaround(preloadedData);
        // Pins the bundled components except when it's using a debug loader
        if (!debugData.debugLoader) {
            this._pinBundledComponents(bundledComponents);
        }
        this._overrideComponents(bundledComponents);
    };
    /**
     * Try and get a reference to a loaded component from a manifest.
     *
     * @param manifest - Manifest of the module to load.
     * @returns A reference to a component module by id and version or, if it does not exist, undefined.
     */
    BaseComponentLoader.prototype.tryGetLoadedComponent = function (manifest) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(manifest, 'manifest');
        return _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_2__["default"].instance.tryGetComponentReference(manifest.id, manifest.version);
    };
    /**
     * Resolve a component id and version, and load it.
     * If a manifest cannot be found, it requests the manifest to the server through the REST API.
     * If a manifest is not found and not present in the server, it rejects the promise.
     *
     * @param id      - The id of the component to load.
     * @param version - The version of the component to load. If version is not defined, the method
     *                    will load any version of the component.
     * @returns         A promise containing the loaded module.
     *
     * @alpha
     */
    BaseComponentLoader.prototype.loadComponentById = function (id, version) {
        var _this = this;
        var parsedId;
        try {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(id, 'id');
            parsedId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(id).toString();
        }
        catch (error) {
            return Promise.reject(error);
        }
        var manifest = _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.tryGetManifest(parsedId, version);
        if (manifest) {
            return this.loadComponent(manifest);
        }
        else {
            return _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance
                .requestManifest(parsedId, version)
                .then(function (newManifest) { return _this.loadComponent(newManifest); });
        }
    };
    /**
     * Registers manifests in the manifest store.
     *
     * @param manifests - The manifests to register in the store.
     *
     * @alpha
     */
    BaseComponentLoader.prototype.registerManifests = function (manifests) {
        _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.registerManifests(manifests, false);
    };
    Object.defineProperty(BaseComponentLoader.prototype, "_manifestReferences", {
        /**
         * All registered manifests.
         * Note that this returns the actual manifests, so modifying the
         * returned objects modifies the primary data, not a copy
         *
         * @readonly
         * @internal
         */
        get: function () {
            return _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.getRegisteredManifests();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Inserts a <link ... /> tag for a stylesheet.
     *
     * @param url - The CSS file URL.
     */
    BaseComponentLoader.prototype.loadCss = function (url) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(url, 'url');
        var linkTag = document.createElement('link');
        linkTag.rel = 'stylesheet';
        linkTag.type = 'text/css';
        linkTag.href = url;
        BaseComponentLoader._headElement.appendChild(linkTag);
    };
    // Internal methods
    /**
     * {@inheritDoc  ISPComponentLoader._loadDebugManifestsForWorkbench}
     *
     * @internal
     */
    BaseComponentLoader.prototype._loadDebugManifestsForWorkbench = function (manifestsFileUrl) {
        return _debug_DebugManager__WEBPACK_IMPORTED_MODULE_1__["DebugManager"].loadAndRegisterManifestsFile(this, manifestsFileUrl, /* registerAsNonDebug */ true);
    };
    /**
     * Get a component manifest from the component id and version.
     *
     * @param id      - GUID id of the component.
     * @param version - Version of the component. If version is not defined, the method
     *                    will return the manifest for any version of the component.
     * @returns         Manifest for the component.
     *
     * @alpha
     */
    BaseComponentLoader.prototype.tryGetManifestById = function (id, version) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(id, 'id');
        var parsedId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(id).toString();
        return _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.tryGetManifest(parsedId, version);
    };
    /**
     * {@inheritdoc ManifestStore.requestManifest}
     *
     * @alpha
     */
    BaseComponentLoader.prototype.requestManifest = function (id, version) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(id, 'id');
        var parsedId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(id).toString();
        return _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.requestManifest(parsedId, version);
    };
    /**
     * {@inheritDoc  ISPComponentLoader._unloadComponents}
     *
     * @internal
     */
    BaseComponentLoader.prototype._unloadComponents = function () {
        var _this = this;
        _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.getRegisteredManifests().forEach(function (manifest) {
            _this._unloadComponent(manifest);
        });
    };
    /**
     * {@inheritdoc ISPComponentLoader._preloadComponents}
     *
     * @internal
     */
    BaseComponentLoader.prototype._preloadComponents = function () {
        /* No-op. Only implemented in the tiny loader flow. */
    };
    /**
     * SystemJS component loader overrides this function with a workaround required for the loader to work with
     * ListView pages.
     * @virtual
     */
    BaseComponentLoader.prototype._listViewHostWorkaround = function (preloadedData) {
        // Do nothing
    };
    /**
     * Pins the manifest for each component that is bundled in the assembly.
     * See ManifestStore._pinManifest() for details about pinning.
     */
    BaseComponentLoader.prototype._pinBundledComponents = function (bundledComponents) {
        for (var id in bundledComponents) {
            // Different versions of React may be loaded by components at a later time, so we should not pin that manifest.
            // React / ReactDOM are the only non-SPFx, non-internal packages that we add on an assembly.
            if (bundledComponents.hasOwnProperty(id) && id !== _utilities_componentConstants__WEBPACK_IMPORTED_MODULE_4__["reactComponentId"] && id !== _utilities_componentConstants__WEBPACK_IMPORTED_MODULE_4__["reactDomComponentId"]) {
                _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance._pinManifest(id);
            }
        }
    };
    /**
     * Overrides component definitions with existing components.
     * This is used for the assemblies to set up all the data.
     * This is dependent on the internal module loader (SystemJS, RequireJS) so each implementation has to write its own.
     */
    BaseComponentLoader.prototype._overrideComponents = function (bundledComponents) {
        var _this = this;
        Object.keys(bundledComponents).forEach(function (key) {
            _this._overrideComponent(key, bundledComponents[key]);
        });
    };
    return BaseComponentLoader;
}());



/***/ }),

/***/ "aghm":
/*!*************************************!*\
  !*** ./lib/loader/loadComponent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error/ErrorBuilder */ "ff4n");
/* harmony import */ var _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stores/ComponentStore */ "eaMA");
/* harmony import */ var _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stores/ManifestStore */ "Eke5");
/* harmony import */ var _utilities_resolveAddress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/resolveAddress */ "W2kl");
/* harmony import */ var _utilities_ResourceUrlChecker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/ResourceUrlChecker */ "cnPT");
/* harmony import */ var _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utilities/telemetryConstants */ "4mHd");
/* harmony import */ var _Loader_resx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Loader.resx */ "/+z7");
var _Loader_resx__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Loader.resx */ "/+z7", 1);
/* harmony import */ var _loc_Common_resx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../loc/Common.resx */ "p2pk");
var _loc_Common_resx__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../loc/Common.resx */ "p2pk", 1);












var FIRST_RETRY = 1;
var MAX_NUMBER_RETRIES = 3;
var LOAD_COMPONENT_IMPL_EVENT_NAME = 'loadComponentImpl';
/**
 * Loads a component from a manifest.
 *
 * @param manifest - Manifest of the module to load.
 * @returns          A promise containing the loaded module.
 */
function loadComponent(manifest, moduleLoader) {
    if (!manifest) {
        return Promise.reject(new Error(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Text"].format(_Loader_resx__WEBPACK_IMPORTED_MODULE_10__["isUndefinedValidateError"], 'manifest')));
    }
    // If the module has already been cached, return the cached value. Might not have been resolved yet
    var cachedModule = _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_5__["default"].instance.tryGetComponent(manifest.id, manifest.version);
    if (cachedModule) {
        return cachedModule;
    }
    var componentPromise = _loadComponentRetryStrategy(manifest, FIRST_RETRY, MAX_NUMBER_RETRIES, moduleLoader).catch(function (error) {
        // If it fails to load, the caller can then call loadComponent() again and not hit the cache
        _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_5__["default"].instance.deleteComponent(manifest.id, manifest.version);
        throw error;
    });
    // Synchronously store the component in the Component Store
    // This allows other callers to use the cached execution when trying to load it as a dependency.
    // If the execution failed, it would asynchronously delete it from the Component Store so it can be requested again.
    _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_5__["default"].instance.storeComponent(manifest.id, manifest.version, componentPromise);
    return componentPromise;
}
function _loadComponentRetryStrategy(manifest, currentRetryNumber, maxNumberRetries, moduleLoader) {
    if (currentRetryNumber === 1) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(_utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_9__["loadComponentLogSource"], _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Text"].format(_Loader_resx__WEBPACK_IMPORTED_MODULE_10__["loadComponentLog"], manifest.id, manifest.alias, manifest.version));
    }
    else {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(_utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_9__["loadComponentLogSource"], _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Text"].format(_Loader_resx__WEBPACK_IMPORTED_MODULE_10__["loadComponentRetryLog"], manifest.id, manifest.alias, currentRetryNumber, maxNumberRetries));
    }
    return _loadComponentImpl(manifest, moduleLoader)
        .then(function (component) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(_utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_9__["loadComponentLogSource"], _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Text"].format(_Loader_resx__WEBPACK_IMPORTED_MODULE_10__["loadComponentEndLog"], manifest.id, manifest.alias, manifest.version));
        return component;
    })
        .catch(function (error) {
        // If the attempt to load fails, the module loader deletes the module to try to load it again
        // Otherwise, the retry will get the module from the cache, thus failing again.
        moduleLoader.delete(manifest);
        if (currentRetryNumber < maxNumberRetries) {
            return _loadComponentRetryStrategy(manifest, currentRetryNumber + 1, maxNumberRetries, moduleLoader);
        }
        else {
            // All retries failed, so the user behavior will be affected. Log error instead of verbose
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(_utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_9__["loadComponentLogSource"], new Error(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Text"].format(_loc_Common_resx__WEBPACK_IMPORTED_MODULE_11__["loadComponentMaxRetriesError"], manifest.id, manifest.alias, maxNumberRetries)));
            throw error;
        }
    });
}
/**
 * Private method to load component.
 * Assumes that the manifest is not undefined, and the component hasn't been loaded yet.
 *
 * Configures the module loader for this component, loads the dependencies and the entry point,
 * and in case of failure it rejects the promise.
 */
function _loadComponentImpl(manifest, moduleLoader) {
    try {
        moduleLoader.configure(manifest);
    }
    catch (error) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(_utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_9__["loadComponentLogSource"], error.message, LOAD_COMPONENT_IMPL_EVENT_NAME);
        return Promise.reject(error);
    }
    var componentDeps = [];
    var pathDeps = [];
    try {
        componentDeps = _loadComponentDependencies(manifest, moduleLoader);
    }
    catch (error) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(_utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_9__["loadComponentLogSource"], error.message, LOAD_COMPONENT_IMPL_EVENT_NAME);
        return Promise.reject(error);
    }
    try {
        pathDeps = _loadPathDependencies(manifest, moduleLoader);
    }
    catch (error) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(_utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_9__["loadComponentLogSource"], error.message, LOAD_COMPONENT_IMPL_EVENT_NAME);
        return Promise.reject(error);
    }
    // If any dependency fails, the result for the entry point is not reliable, so the load fails
    return Promise.all(componentDeps.concat(pathDeps))
        .then(function (components) {
        // If the component doesn't have an entryModuleId, we can return an empty object
        // This is used for component that only load dependencies but have no code, like JSOM
        if (!manifest.loaderConfig.entryModuleId) {
            moduleLoader.ensure(manifest, {});
            return {};
        }
        return _loadEntryPoint(manifest, moduleLoader).then(function (entryPoint) {
            _validateComponentIsNotEmptyOrThrow(entryPoint, manifest);
            return entryPoint;
        });
    })
        .catch(function (e) {
        throw _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_4__["default"].buildLoadComponentError(manifest, e);
    });
}
/**
 * Checks if the component is not empty (or does not have a default properties that is empty).
 * If either case happens, it throws an error
 */
function _validateComponentIsNotEmptyOrThrow(component, manifest) {
    if (Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(component)) {
        throw _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_4__["default"].buildLoadComponentReturnsEmptyError(manifest);
    }
    var defaultObject = component.default; // tslint:disable-line:no-any
    if (defaultObject && Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(defaultObject) && !defaultObject.prototype) {
        throw _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_4__["default"].buildLoadComponentReturnsDefaultEmptyError(manifest);
    }
}
/**
 * Loads all component dependencies for a component.
 * If the dependency can't be found and it has a failover path, it will load it
 * from the path.
 *
 * Returns an array with the promises for all the component dependencies
 */
function _loadComponentDependencies(manifest, moduleLoader) {
    var depPromises = [];
    var resources = manifest.loaderConfig.scriptResources;
    var _loop_1 = function (name_1) {
        if (resources[name_1].type === 'component' && !resources[name_1].shouldNotPreload) {
            var moduleConfiguration_1 = resources[name_1];
            var resourceManifest = _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_6__["default"].instance.tryGetManifest(moduleConfiguration_1.id, moduleConfiguration_1.version);
            if (resourceManifest) {
                var dep = loadComponent(resourceManifest, moduleLoader).catch(function (e) {
                    throw _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_4__["default"].buildLoadComponentDependencyError(manifest, e);
                });
                depPromises.push(dep);
            }
            else {
                // if (!resourceManifest)
                if (moduleConfiguration_1.failoverPath) {
                    var dep = moduleLoader
                        .loadFromFailoverPath(name_1)
                        .catch(function (e) {
                        return _processLoadErrors(manifest, name_1, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([_utilities_ResourceUrlChecker__WEBPACK_IMPORTED_MODULE_8__["default"].checkResourceUrl], moduleLoader.loadComponentDependencyErrorProcessors), function () {
                            return _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_4__["default"].buildLoadComponentDependencyFailoverPathError(manifest, name_1, Object(_utilities_resolveAddress__WEBPACK_IMPORTED_MODULE_7__["resolvePath"])(moduleConfiguration_1.failoverPath), e);
                        });
                    });
                    depPromises.push(dep);
                }
                else {
                    // if (!moduleConfiguration.failoverPath)
                    var dep = _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_6__["default"].instance
                        .requestManifest(moduleConfiguration_1.id, moduleConfiguration_1.version)
                        .then(function (m) { return loadComponent(m, moduleLoader); })
                        .catch(function (e) { return Promise.reject(_error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_4__["default"].buildManifestNotFoundError(moduleConfiguration_1)); });
                    depPromises.push(dep);
                }
            }
        }
    };
    for (var name_1 in resources) {
        _loop_1(name_1);
    }
    return depPromises;
}
/**
 * Loads all paths dependencies for a component, excluding the entry point.
 * If a path dependency is marked as shouldNotPreload, it is skipped
 */
function _loadPathDependencies(manifest, moduleLoader) {
    var resources = manifest.loaderConfig.scriptResources;
    var loadedPathDependencies = new Map();
    for (var name_2 in resources) {
        if ((resources[name_2].type === 'path' || resources[name_2].type === 'localizedPath') &&
            !resources[name_2].shouldNotPreload) {
            if (name_2 !== manifest.loaderConfig.entryModuleId) {
                // tslint:disable-next-line:no-floating-promises - This is partially handled, but should be refactored
                _loadPathDependency(manifest, name_2, loadedPathDependencies, moduleLoader);
            }
        }
    }
    var loadedPathDependenciesValues = [];
    loadedPathDependencies.forEach(function (value) {
        loadedPathDependenciesValues.push(value);
    });
    return loadedPathDependenciesValues;
}
/**
 * Loads a single path dependency.
 * If there are any global dependencies, the requested path dependency will be loaded after its dependencies
 * in a serial way.
 * If the path dependency is requested more than once, it just returns the original promise.
 */
function _loadPathDependency(manifest, name, loadedPathDependencies, moduleLoader) {
    // If already requested, return the existing promise
    var loadedPathDependency = loadedPathDependencies.get(name);
    if (loadedPathDependency) {
        return loadedPathDependency;
    }
    var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](_utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_9__["loadPathDependencyQosScenarioName"]);
    var qosExtraData = {
        name: name,
        manifestId: manifest.id,
        version: manifest.version,
        alias: manifest.alias,
        isInternal: manifest.isInternal
    };
    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(_utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_9__["loadComponentLogSource"], _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Text"].format(_Loader_resx__WEBPACK_IMPORTED_MODULE_10__["loadPathDependencyLog"], name, manifest.id, manifest.alias));
    var resources = manifest.loaderConfig.scriptResources;
    var pathConfig = resources[name];
    if (!pathConfig) {
        return Promise.reject(_error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_4__["default"].buildMissingPathDependencyError(manifest, name));
    }
    var loadPromise;
    if (pathConfig.globalDependencies) {
        var depPromises = pathConfig.globalDependencies.map(function (dep) {
            return _loadPathDependency(manifest, dep, loadedPathDependencies, moduleLoader);
        });
        loadPromise = Promise.all(depPromises).then(function () {
            return _moduleLoaderLoadPathDependency(manifest, name, moduleLoader);
        }, function () {
            throw _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_4__["default"].buildLoadPathDependencyBlockedError(manifest, name);
        });
    }
    else {
        loadPromise = _moduleLoaderLoadPathDependency(manifest, name, moduleLoader);
    }
    loadedPathDependencies.set(name, loadPromise);
    return loadPromise.then(function (load) {
        qosMonitor.writeSuccess(qosExtraData);
        return load;
    }, function (error) {
        qosMonitor.writeUnexpectedFailure(undefined, error, qosExtraData);
        throw error;
    });
}
/**
 * Auxiliary method to call the module loader on a path dependency.
 * Used only inside _loadPathDependency
 */
function _moduleLoaderLoadPathDependency(manifest, name, moduleLoader) {
    var globalName = manifest.loaderConfig.scriptResources[name].globalName;
    return moduleLoader.load(manifest, name, globalName).catch(function (e) {
        return _processLoadErrors(manifest, name, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([_utilities_ResourceUrlChecker__WEBPACK_IMPORTED_MODULE_8__["default"].checkResourceUrl], moduleLoader.loadPathDependencyErrorProcessors), function () { return _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_4__["default"].buildLoadPathDependencyError(manifest, name, e); });
    });
}
/**
 * Loads the entry point for a component.
 * If it fails, it tries to identify the root cause of the error.
 */
function _loadEntryPoint(manifest, moduleLoader) {
    return moduleLoader.load(manifest).catch(function (e) {
        return _processLoadErrors(manifest, manifest.loaderConfig.entryModuleId, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([_utilities_ResourceUrlChecker__WEBPACK_IMPORTED_MODULE_8__["default"].checkResourceUrl], moduleLoader.loadEntryPointErrorProcessors), function () { return _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_4__["default"].buildLoadEntryPointError(manifest, e); });
    });
}
function _processLoadErrors(manifest, name, errorProcessors, buildDefaultError) {
    return Promise.all(errorProcessors.map(function (errorProcessor) { return errorProcessor(manifest, name); })).then(
    // Default error handling
    function () {
        throw buildDefaultError();
    }, function (e) {
        throw e;
    });
}


/***/ }),

/***/ "gsvc":
/*!***************************************************!*\
  !*** ./lib/systemjs/SPSystemJsComponentLoader.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error/ErrorBuilder */ "ff4n");
/* harmony import */ var _error_SPLoaderError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error/SPLoaderError */ "BBmw");
/* harmony import */ var _loader_BaseComponentLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loader/BaseComponentLoader */ "Uk6p");
/* harmony import */ var _loader_loadComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loader/loadComponent */ "aghm");
/* harmony import */ var _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stores/ComponentStore */ "eaMA");
/* harmony import */ var _utilities_ComponentOverrider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/ComponentOverrider */ "A8iV");
/* harmony import */ var _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utilities/telemetryConstants */ "4mHd");
/* harmony import */ var _SystemJsLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SystemJsLoader */ "U29/");
// Copyright (c) Microsoft. All rights reserved.











/**
 * The component loader for SPFx.
 * This implementation uses SystemJS as the internal module loader.
 *
 * @alpha
 */
var SPSystemJsComponentLoader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPSystemJsComponentLoader, _super);
    // Initialization
    /**
     * @internal
     */
    function SPSystemJsComponentLoader(serviceScope) {
        var _this = _super.call(this, serviceScope) || this;
        _this._systemJsLoader = serviceScope.consume(_SystemJsLoader__WEBPACK_IMPORTED_MODULE_10__["default"].serviceKey);
        return _this;
    }
    // Public API
    /**
     * Given a URL, load a script.
     *
     * @param url     - The script URL.
     * @param options - globalExportsName: If the script isn't an AMD module and loads a global member on the page,
     *                    specify the global member's name.
     * @returns         A promise containing the loaded module.
     */
    SPSystemJsComponentLoader.prototype.loadScript = function (url, options) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(url, 'url');
        if (typeof options === 'string') {
            throw _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_3__["default"].buildLoadScriptWithStringError();
        }
        var globalMetaConfig = {
            meta: {}
        };
        // This ensures that SystemJS can execute a script that doesn't have any output
        globalMetaConfig.meta[url] = {
            scriptLoad: false
        };
        if (options) {
            if (options.globalExportsName) {
                globalMetaConfig.meta[url] = {
                    format: 'global',
                    exports: options.globalExportsName
                };
            }
        }
        this._systemJsLoader.systemConfig(globalMetaConfig);
        return this._systemJsLoader.systemImport(url);
    };
    /**
     * Loads a component from a manifest.
     *
     * @param manifest - Manifest of the module to load.
     * @returns          A promise containing the loaded module.
     */
    SPSystemJsComponentLoader.prototype.loadComponent = function (manifest) {
        var _this = this;
        var qosMonitor;
        var qosExtraData;
        if (!manifest.isInternal) {
            qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](_utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_9__["loadComponentQosScenarioName"]);
            qosExtraData = this._buildQosExtraData(manifest);
        }
        return Object(_loader_loadComponent__WEBPACK_IMPORTED_MODULE_6__["default"])(manifest, this._systemJsLoader)
            .then(function (component) {
            if (qosMonitor) {
                qosMonitor.writeSuccess(qosExtraData);
            }
            return component;
        })
            .catch(function (error) {
            return _this._handleLoadComponentError(error, manifest, qosMonitor, qosExtraData);
        });
    };
    SPSystemJsComponentLoader.prototype._overrideComponent = function (componentId, componentModule) {
        _utilities_ComponentOverrider__WEBPACK_IMPORTED_MODULE_8__["default"].overrideComponent(componentId, componentModule, this._serviceScope, _SystemJsLoader__WEBPACK_IMPORTED_MODULE_10__["default"].serviceKey);
    };
    SPSystemJsComponentLoader.prototype._unloadComponent = function (manifest) {
        if (_stores_ComponentStore__WEBPACK_IMPORTED_MODULE_7__["default"].instance.tryGetComponent(manifest.id, manifest.version)) {
            _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_7__["default"].instance.deleteComponent(manifest.id, manifest.version);
            this._systemJsLoader.systemDelete(manifest);
        }
    };
    /**
     * Workaround for ListView host app, as there are problems when using SystemJS and RequireJS together.
     * By configuring SystemJS scriptLoad = false it ensures that the "define" definition in the window is
     * the one from RequireJS
     * @override
     */
    SPSystemJsComponentLoader.prototype._listViewHostWorkaround = function (preloadedData) {
        if (preloadedData.clientSideApplicationId === 'b1ab4aaa-f779-405c-8683-d3a750b5d18d') {
            this._systemJsLoader._baseSystemConfig(_SystemJsLoader__WEBPACK_IMPORTED_MODULE_10__["default"].pluginName, /* scriptLoad */ false);
        }
    };
    SPSystemJsComponentLoader.prototype._buildQosExtraData = function (manifest) {
        return {
            manifestId: manifest.id,
            version: manifest.version,
            alias: manifest.alias,
            isInternal: manifest.isInternal,
            isDebug: manifest._isDebug,
            loader: 'systemjs'
        };
    };
    SPSystemJsComponentLoader.prototype._handleLoadComponentError = function (error, manifest, qosMonitor, qosExtraData) {
        if (error instanceof _error_SPLoaderError__WEBPACK_IMPORTED_MODULE_4__["default"] && error.isExpected && qosMonitor) {
            qosMonitor.writeExpectedFailure(undefined, error, qosExtraData);
        }
        else if (qosMonitor) {
            qosMonitor.writeUnexpectedFailure(undefined, error, qosExtraData);
        }
        // If it fails to load, the caller can then call loadComponent() again and not hit the cache
        _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_7__["default"].instance.deleteComponent(manifest.id, manifest.version);
        throw error;
    };
    return SPSystemJsComponentLoader;
}(_loader_BaseComponentLoader__WEBPACK_IMPORTED_MODULE_5__["BaseComponentLoader"]));
/* harmony default export */ __webpack_exports__["default"] = (SPSystemJsComponentLoader);


/***/ }),

/***/ "iKy5":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@rushstack/loader-raw-script@1.3.113/node_modules/@rushstack/loader-raw-script/lib!./blobs/systemjs/0.19.25/dist/system.spfx.js ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global) {
  eval('/*\r\n * SystemJS v0.19.25\r\n */\r\n!function(){function e(){!function(e){function t(e,n){if("string"!=typeof e)throw new TypeError("URL must be a string");var r=String(e).replace(/^\\s+|\\s+$/g,"").match(/^([^:\\/?#]+:)?(?:\\/\\/(?:([^:@\\/?#]*)(?::([^:@\\/?#]*))?@)?(([^:\\/?#]*)(?::(\\d*))?))?([^?#]*)(\\?[^#]*)?(#[\\s\\S]*)?/);if(!r)throw new RangeError("Invalid URL format");var a=r[1]||"",o=r[2]||"",s=r[3]||"",i=r[4]||"",l=r[5]||"",u=r[6]||"",d=r[7]||"",c=r[8]||"",f=r[9]||"";if(void 0!==n){var m=n instanceof t?n:new t(n),p=!a&&!i&&!o;!p||d||c||(c=m.search),p&&"/"!==d[0]&&(d=d?(!m.host&&!m.username||m.pathname?"":"/")+m.pathname.slice(0,m.pathname.lastIndexOf("/")+1)+d:m.pathname);var h=[];d.replace(/^(\\.\\.?(\\/|$))+/,"").replace(/\\/(\\.(\\/|$))+/g,"/").replace(/\\/\\.\\.$/,"/../").replace(/\\/?[^\\/]*/g,function(e){"/.."===e?h.pop():h.push(e)}),d=h.join("").replace(/^\\//,"/"===d[0]?"/":""),p&&(u=m.port,l=m.hostname,i=m.host,s=m.password,o=m.username),a||(a=m.protocol)}"file:"==a&&(d=d.replace(/\\\\/g,"/")),this.origin=i?a+(""!==a||""!==i?"//":"")+i:"",this.href=a+(a&&i||"file:"==a?"//":"")+(""!==o?o+(""!==s?":"+s:"")+"@":"")+i+d+c+f,this.protocol=a,this.username=o,this.password=s,this.host=i,this.hostname=l,this.port=u,this.pathname=d,this.search=c,this.hash=f}e.URLPolyfill=t}("undefined"!=typeof self?self:global),function(e){function t(e,t){return e instanceof Error?(e.message=t+"\\n	"+e.message,Error.call(e,e.message)):e=t+"\\n	"+e,e}function n(e,n,r){try{new Function(e).call(r)}catch(a){throw t(a,"Evaluating "+n)}}function r(){}function a(t){this._loader={loaderObj:this,loads:[],modules:{},importPromises:{},moduleRecords:{}},z(this,"global",{get:function(){return e}})}function o(){a.call(this),this.paths={}}function s(e,t){var n,r="",a=0;for(var o in e){var s=o.split("*");if(s.length>2)throw new TypeError("Only one wildcard in a path is permitted");if(1==s.length){if(t==o)return e[o];if(t.substr(0,o.length-1)==o.substr(0,o.length-1)&&(t.length<o.length||t[o.length-1]==o[o.length-1])&&"/"==e[o][e[o].length-1])return e[o].substr(0,e[o].length-1)+(t.length>o.length?"/"+t.substr(o.length):"")}else{var i=s[0].length;i>=a&&t.substr(0,s[0].length)==s[0]&&t.substr(t.length-s[1].length)==s[1]&&(a=i,r=o,n=t.substr(s[0].length,t.length-s[1].length-s[0].length))}}var l=e[r];return"string"==typeof n&&(l=l.replace("*",n)),l}function i(){}function l(){o.call(this),J.call(this)}function u(){}function d(e,t){l.prototype[e]=t(l.prototype[e]||function(){})}function c(e){J=e(J||function(){})}function f(e){for(var t=[],n=[],r=0,a=e.length;a>r;r++){var o=I.call(t,e[r]);-1===o?(t.push(e[r]),n.push([r])):n[o].push(r)}return{names:t,indices:n}}function m(e){var t={};if("object"==typeof e||"function"==typeof e)if(C){var n;for(var r in e)(n=Object.getOwnPropertyDescriptor(e,r))&&z(t,r,n)}else{var a=e&&e.hasOwnProperty;for(var r in e)(!a||e.hasOwnProperty(r))&&(t[r]=e[r])}return t["default"]=e,z(t,"__useDefault",{value:!0}),t}function p(e,t,n){for(var r in t)n&&r in e||(e[r]=t[r]);return e}function h(e,t,n){for(var r in t){var a=t[r];r in e?a instanceof Array&&e[r]instanceof Array?e[r]=[].concat(n?a:e[r]).concat(n?e[r]:a):"object"==typeof a&&null!==a&&"object"==typeof e[r]?e[r]=p(p({},e[r]),a,n):n||(e[r]=a):e[r]=a}}function g(e){this.warnings&&"undefined"!=typeof console&&console.warn}function v(e,t){for(var n=e.split(".");n.length;)t=t[n.shift()];return t}function y(){if(H[this.baseURL])return H[this.baseURL];"/"!=this.baseURL[this.baseURL.length-1]&&(this.baseURL+="/");var e=new F(this.baseURL,L);return this.baseURL=e.href,H[this.baseURL]=e}function b(e,t){var n,r=0;for(var a in e)if(t.substr(0,a.length)==a&&(t.length==a.length||"/"==t[a.length])){var o=a.split("/").length;if(r>=o)continue;n=a,r=o}return n}function w(e){this.set("@system-env",this.newModule({browser:O,node:!!this._nodeRequire,production:e,"default":!0}))}function x(e){return("."!=e[0]||!!e[1]&&"/"!=e[1]&&"."!=e[1])&&"/"!=e[0]&&!e.match(B)}function S(e,t){return t&&(t=t.replace(/#/g,"%05")),new F(e,t||X).href.replace(/%05/g,"#")}function E(e,t){return new F(t,y.call(e)).href}function j(e,t){if(!x(e))return S(e,t);var n=b(this.map,e);if(n&&(e=this.map[n]+e.substr(n.length),!x(e)))return S(e);if(this.has(e))return e;if("@node/"==e.substr(0,6)&&-1!=Z.indexOf(e.substr(6))){if(!this._nodeRequire)throw new TypeError("Error loading "+e+". Can only load node core modules in Node.");return this.set(e,this.newModule(m(this._nodeRequire(e.substr(6))))),e}var r=s(this.paths,e);return r&&!x(r)?S(r):E(this,r||e)}function _(e){var t=e.match(V);return t&&"System.register"==e.substr(t[0].length,15)}function k(){return{name:null,deps:null,originalIndices:null,declare:null,execute:null,executingRequire:!1,declarative:!1,normalizedDeps:null,groupIndex:null,evaluated:!1,module:null,esModule:null,esmExports:!1}}function P(t){if("string"==typeof t)return v(t,e);if(!(t instanceof Array))throw new Error("Global exports must be a string or array.");for(var n={},r=!0,a=0;a<t.length;a++){var o=v(t[a],e);r&&(n["default"]=o,r=!1),n[t[a].split(".").pop()]=o}return n}var R="undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts,O="undefined"!=typeof window&&"undefined"!=typeof document,M="undefined"!=typeof process&&"undefined"!=typeof process.platform&&!!process.platform.match(/^win/);e.console||(e.console={assert:function(){}});var z,I=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1};!function(){try{Object.defineProperty({},"a",{})&&(z=Object.defineProperty)}catch(e){z=function(e,t,n){try{e[t]=n.value||n.get.call(e)}catch(r){}}}}();var L;if("undefined"!=typeof document&&document.getElementsByTagName){if(L=document.baseURI,!L){var A=document.getElementsByTagName("base");L=A[0]&&A[0].href||window.location.href}L=L.split("#")[0].split("?")[0],L=L.substr(0,L.lastIndexOf("/")+1)}else if("undefined"!=typeof process&&process.cwd)L="file://"+(M?"/":"")+process.cwd()+"/",M&&(L=L.replace(/\\\\/g,"/"));else{if("undefined"==typeof location)throw new TypeError("No environment baseURI");L=e.location.href}var F=e.URLPolyfill||e.URL;z(r.prototype,"toString",{value:function(){return"Module"}}),function(){function o(e){return{status:"loading",name:e,linkSets:[],dependencies:[],metadata:{}}}function s(e,t,n){return new Promise(c({step:n.address?"fetch":"locate",loader:e,moduleName:t,moduleMetadata:n&&n.metadata||{},moduleSource:n.source,moduleAddress:n.address}))}function i(e,t,n,r){return new Promise(function(a,o){a(e.loaderObj.normalize(t,n,r))}).then(function(t){var n;if(e.modules[t])return n=o(t),n.status="linked",n.module=e.modules[t],n;for(var r=0,a=e.loads.length;a>r;r++)if(n=e.loads[r],n.name==t)return n;return n=o(t),e.loads.push(n),l(e,n),n})}function l(e,t){u(e,t,Promise.resolve().then(function(){return e.loaderObj.locate({name:t.name,metadata:t.metadata})}))}function u(e,t,n){d(e,t,n.then(function(n){return"loading"==t.status?(t.address=n,e.loaderObj.fetch({name:t.name,metadata:t.metadata,address:n})):void 0}))}function d(t,r,a){a.then(function(a){return"loading"==r.status?Promise.resolve(t.loaderObj.translate({name:r.name,metadata:r.metadata,address:r.address,source:a})).then(function(e){return r.source=e,t.loaderObj.instantiate({name:r.name,metadata:r.metadata,address:r.address,source:e})}).then(function(a){if(void 0===a)return r.address=r.address||"<Anonymous Module "+ ++j+">",r.isDeclarative=!0,E.call(t.loaderObj,r).then(function(t){var a=e.System,o=a.register;a.register=function(e,t,n){"string"!=typeof e&&(n=t,t=e),r.declare=n,r.depsList=t},n(t,r.address,{}),a.register=o});if("object"!=typeof a)throw TypeError("Invalid instantiate return value");r.depsList=a.deps||[],r.execute=a.execute,r.isDeclarative=!1}).then(function(){r.dependencies=[];for(var e=r.depsList,n=[],a=0,o=e.length;o>a;a++)(function(e,a){n.push(i(t,e,r.name,r.address).then(function(t){if(r.dependencies[a]={key:e,value:t.name},"linked"!=t.status)for(var n=r.linkSets.concat([]),o=0,s=n.length;s>o;o++)m(n[o],t)}))})(e[a],a);return Promise.all(n)}).then(function(){r.status="loaded";for(var e=r.linkSets.concat([]),t=0,n=e.length;n>t;t++)h(e[t],r)}):void 0})["catch"](function(e){r.status="failed",r.exception=e;for(var t=r.linkSets.concat([]),n=0,a=t.length;a>n;n++)g(t[n],r,e)})}function c(e){return function(t,n){var r=e.loader,a=e.moduleName,s=e.step;if(r.modules[a])throw new TypeError(\'"\'+a+\'" already exists in the module table\');for(var i,c=0,m=r.loads.length;m>c;c++)if(r.loads[c].name==a&&(i=r.loads[c],"translate"!=s||i.source||(i.address=e.moduleAddress,d(r,i,Promise.resolve(e.moduleSource))),i.linkSets.length&&i.linkSets[0].loads[0].name==i.name))return i.linkSets[0].done.then(function(){t(i)});var p=i||o(a);p.metadata=e.moduleMetadata;var h=f(r,p);r.loads.push(p),t(h.done),"locate"==s?l(r,p):"fetch"==s?u(r,p,Promise.resolve(e.moduleAddress)):(p.address=e.moduleAddress,d(r,p,Promise.resolve(e.moduleSource)))}}function f(e,t){var n={loader:e,loads:[],startingLoad:t,loadingCount:0};return n.done=new Promise(function(e,t){n.resolve=e,n.reject=t}),m(n,t),n}function m(e,t){if("failed"!=t.status){for(var n=0,r=e.loads.length;r>n;n++)if(e.loads[n]==t)return;e.loads.push(t),t.linkSets.push(e),"loaded"!=t.status&&e.loadingCount++;for(var a=e.loader,n=0,r=t.dependencies.length;r>n;n++)if(t.dependencies[n]){var o=t.dependencies[n].value;if(!a.modules[o])for(var s=0,i=a.loads.length;i>s;s++)if(a.loads[s].name==o){m(e,a.loads[s]);break}}}}function p(e){var t=!1;try{w(e,function(n,r){g(e,n,r),t=!0})}catch(n){g(e,null,n),t=!0}return t}function h(e,t){if(e.loadingCount--,!(e.loadingCount>0)){var n=e.startingLoad;if(e.loader.loaderObj.execute===!1){for(var r=[].concat(e.loads),a=0,o=r.length;o>a;a++){var t=r[a];t.module=t.isDeclarative?{name:t.name,module:_({}),evaluated:!0}:{module:_({})},t.status="linked",v(e.loader,t)}return e.resolve(n)}var s=p(e);s||e.resolve(n)}}function g(e,n,r){var a=e.loader;e:if(n)if(e.loads[0].name==n.name)r=t(r,"Error loading "+n.name);else{for(var o=0;o<e.loads.length;o++)for(var s=e.loads[o],i=0;i<s.dependencies.length;i++){var l=s.dependencies[i];if(l.value==n.name){r=t(r,"Error loading "+n.name+\' as "\'+l.key+\'" from \'+s.name);break e}}r=t(r,"Error loading "+n.name+" from "+e.loads[0].name)}else r=t(r,"Error linking "+e.loads[0].name);for(var u=e.loads.concat([]),o=0,d=u.length;d>o;o++){var n=u[o];a.loaderObj.failed=a.loaderObj.failed||[],-1==I.call(a.loaderObj.failed,n)&&a.loaderObj.failed.push(n);var c=I.call(n.linkSets,e);if(n.linkSets.splice(c,1),0==n.linkSets.length){var f=I.call(e.loader.loads,n);-1!=f&&e.loader.loads.splice(f,1)}}e.reject(r)}function v(e,t){if(e.loaderObj.trace){e.loaderObj.loads||(e.loaderObj.loads={});var n={};t.dependencies.forEach(function(e){n[e.key]=e.value}),e.loaderObj.loads[t.name]={name:t.name,deps:t.dependencies.map(function(e){return e.key}),depMap:n,address:t.address,metadata:t.metadata,source:t.source,kind:t.isDeclarative?"declarative":"dynamic"}}t.name&&(e.modules[t.name]=t.module);var r=I.call(e.loads,t);-1!=r&&e.loads.splice(r,1);for(var a=0,o=t.linkSets.length;o>a;a++)r=I.call(t.linkSets[a].loads,t),-1!=r&&t.linkSets[a].loads.splice(r,1);t.linkSets.splice(0,t.linkSets.length)}function y(e,t,n){try{var a=t.execute()}catch(o){return void n(t,o)}return a&&a instanceof r?a:void n(t,new TypeError("Execution must define a Module instance"))}function b(e,t,n){var r=e._loader.importPromises;return r[t]=n.then(function(e){return r[t]=void 0,e},function(e){throw r[t]=void 0,e})}function w(e,t){var n=e.loader;if(e.loads.length)for(var r=e.loads.concat([]),a=0;a<r.length;a++){var o=r[a],s=y(e,o,t);if(!s)return;o.module={name:o.name,module:s},o.status="linked",v(n,o)}}function x(e,t){return t.module.module}function S(){}function E(){throw new TypeError("ES6 transpilation is only provided in the dev module loader build.")}var j=0;a.prototype={constructor:a,define:function(e,t,n){if(this._loader.importPromises[e])throw new TypeError("Module is already loading.");return b(this,e,new Promise(c({step:"translate",loader:this._loader,moduleName:e,moduleMetadata:n&&n.metadata||{},moduleSource:t,moduleAddress:n&&n.address})))},"delete":function(e){var t=this._loader;return delete t.importPromises[e],delete t.moduleRecords[e],t.modules[e]?delete t.modules[e]:!1},get:function(e){return this._loader.modules[e]?(S(this._loader.modules[e],[],this),this._loader.modules[e].module):void 0},has:function(e){return!!this._loader.modules[e]},"import":function(e,t,n){"object"==typeof t&&(t=t.name);var r=this;return Promise.resolve(r.normalize(e,t)).then(function(e){var t=r._loader;return t.modules[e]?(S(t.modules[e],[],t._loader),t.modules[e].module):t.importPromises[e]||b(r,e,s(t,e,{}).then(function(n){return delete t.importPromises[e],x(t,n)}))})},load:function(e){var t=this._loader;return t.modules[e]?Promise.resolve():t.importPromises[e]||b(this,e,new Promise(c({step:"locate",loader:t,moduleName:e,moduleMetadata:{},moduleSource:void 0,moduleAddress:void 0})).then(function(){delete t.importPromises[e]}))},module:function(e,t){var n=o();n.address=t&&t.address;var r=f(this._loader,n),a=Promise.resolve(e),s=this._loader,i=r.done.then(function(){return x(s,n)});return d(s,n,a),i},newModule:function(e){if("object"!=typeof e)throw new TypeError("Expected object");var t=new r,n=[];if(Object.getOwnPropertyNames&&null!=e)n=Object.getOwnPropertyNames(e);else for(var a in e)n.push(a);for(var o=0;o<n.length;o++)(function(n){z(t,n,{configurable:!1,enumerable:!0,get:function(){return e[n]},set:function(){throw new Error("Module exports cannot be changed externally.")}})})(n[o]);return Object.freeze&&Object.freeze(t),t},set:function(e,t){if(!(t instanceof r))throw new TypeError("Loader.set("+e+", module) must be a module");this._loader.modules[e]={module:t}},normalize:function(e,t,n){return e},locate:function(e){return e.name},fetch:function(e){},translate:function(e){return e.source},instantiate:function(e){}};var _=a.prototype.newModule}();var D;i.prototype=a.prototype,o.prototype=new i;var T;if("undefined"!=typeof XMLHttpRequest)T=function(e,t,n,r){function a(){n(s.responseText)}function o(){r(new Error("XHR error"+(s.status?" ("+s.status+(s.statusText?" "+s.statusText:"")+")":"")+" loading "+e))}var s=new XMLHttpRequest,i=!0,l=!1;if(!("withCredentials"in s)){var u=/^(\\w+:)?\\/\\/([^\\/]+)/.exec(e);u&&(i=u[2]===window.location.host,u[1]&&(i&=u[1]===window.location.protocol))}i||"undefined"==typeof XDomainRequest||(s=new XDomainRequest,s.onload=a,s.onerror=o,s.ontimeout=o,s.onprogress=function(){},s.timeout=0,l=!0),s.onreadystatechange=function(){4===s.readyState&&(0==s.status?s.responseText?a():(s.addEventListener("error",o),s.addEventListener("load",a)):200===s.status?a():o())},s.open("GET",e,!0),s.setRequestHeader&&(s.setRequestHeader("Accept","application/x-es-module, */*"),t&&("string"==typeof t&&s.setRequestHeader("Authorization",t),s.withCredentials=!0)),l?setTimeout(function(){s.send()},0):s.send(null)};else if("undefined"!=typeof require&&"undefined"!=typeof process){var q;T=function(e,t,n,r){if("file:///"!=e.substr(0,8))throw new Error(\'Unable to fetch "\'+e+\'". Only file URLs of the form file:/// allowed running in Node.\');return q=q||require("fs"),e=M?e.replace(/\\//g,"\\\\").substr(8):e.substr(7),q.readFile(e,function(e,t){if(e)return r(e);var a=t+"";"\\ufeff"===a[0]&&(a=a.substr(1)),n(a)})}}else{if("undefined"==typeof self||"undefined"==typeof self.fetch)throw new TypeError("No environment fetch API available.");T=function(e,t,n,r){var a={headers:{Accept:"application/x-es-module, */*"}};t&&("string"==typeof t&&(a.headers.Authorization=t),a.credentials="include"),fetch(e,a).then(function(e){if(e.ok)return e.text();throw new Error("Fetch error: "+e.status+" "+e.statusText)}).then(n,r)}}o.prototype.fetch=function(e){return new Promise(function(t,n){T(e.address,void 0,t,n)})};(function(){function t(t){var r=this;return Promise.resolve(e["typescript"==r.transpiler?"ts":r.transpiler]||(r.pluginLoader||r)["import"](r.transpiler)).then(function(e){e.__useDefault&&(e=e["default"]);var a;return a=e.Compiler?n:e.createLanguageService?s:o,"(function(__moduleName){"+a.call(r,t,e)+\'\\n})("\'+t.name+\'");\\n//# sourceURL=\'+t.address+"!transpiled"})}function n(e,t){var n=this.traceurOptions||{};n.modules="instantiate",n.script=!1,void 0===n.sourceMaps&&(n.sourceMaps="inline"),n.filename=e.address,n.inputSourceMap=e.metadata.sourceMap,n.moduleName=!1;var a=new t.Compiler(n);return r(e.source,a,n.filename)}function r(e,t,n){try{return t.compile(e,n)}catch(r){if(r.length)throw r[0];throw r}}function o(e,t){var n=this.babelOptions||{};return n.modules="system",void 0===n.sourceMap&&(n.sourceMap="inline"),n.inputSourceMap=e.metadata.sourceMap,n.filename=e.address,n.code=!0,n.ast=!1,t.transform(e.source,n).code}function s(e,t){var n=this.typescriptOptions||{};return n.target=n.target||t.ScriptTarget.ES5,void 0===n.sourceMap&&(n.sourceMap=!0),n.sourceMap&&n.inlineSourceMap!==!1&&(n.inlineSourceMap=!0),n.module=t.ModuleKind.System,t.transpile(e.source,n,e.address)}return a.prototype.transpiler="traceur",t})();u.prototype=o.prototype,l.prototype=new u,l.prototype.constructor=l,l.prototype.instantiate=function(){};var J,C=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(U){C=!1}var N,$=["main","format","defaultExtension","meta","map","basePath","depCache"];!function(){function n(e){var t=e.source.lastIndexOf("\\n"),n="global"!=e.metadata.format,r=e.metadata.sourceMap;if(r){if("object"!=typeof r)throw new TypeError("load.metadata.sourceMap must be set to an object.");r=JSON.stringify(r)}return(n?"(function(System, SystemJS, require) {":"")+e.source+(n?"\\n})(System, System);":"")+("\\n//# sourceURL="!=e.source.substr(t,15)?"\\n//# sourceURL="+e.address+(r?"!transpiled":""):"")+(r&&i&&"\\n//# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(r)))||"")}function r(t,n){s=n,0==u++&&(l=e.System),e.System=e.SystemJS=t}function a(){0==--u&&(e.System=e.SystemJS=l),s=void 0}function o(e){m||(m=document.head||document.body||document.documentElement);var o=document.createElement("script");o.text=n(e,!1);var s,i=window.onerror;if(window.onerror=function(n){s=t(n,"Evaluating "+e.address)},r(this,e),e.metadata.integrity&&o.setAttribute("integrity",e.metadata.integrity),e.metadata.nonce&&o.setAttribute("nonce",e.metadata.nonce),m.appendChild(o),m.removeChild(o),a(),window.onerror=i,s)throw s}var s,i="undefined"!=typeof btoa;d("pushRegister_",function(){return function(e){return s?(this.reduceRegister_(s,e),!0):!1}});var l,u=0;N=function(e){if(e.source){if((e.metadata.integrity||e.metadata.nonce)&&c)return o.call(this,e);try{r(this,e),s=e,(0,eval)(n(e)),a()}catch(i){throw a(),t(i,"Evaluating "+e.address)}}};var c=!1;if(O&&"undefined"!=typeof document&&document.getElementsByTagName){var f=document.getElementsByTagName("script");$__curScript=f[f.length-1],window.chrome&&window.chrome.extension||navigator.userAgent.match(/^Node\\.js/)||(c=!0)}var m}();var B=/^[^\\/]+:\\/\\//,H={},X=new F(L);c(function(e){return function(){e.call(this),this.baseURL=L.substr(0,L.lastIndexOf("/")+1),this.map={},this.paths={},this.warnings=!1,this.defaultJSExtensions=!1,this.pluginFirst=!1,this.loaderErrorStack=!1,this.set("@empty",this.newModule({})),w.call(this,!1)}}),"undefined"==typeof require||"undefined"==typeof process||process.browser||(l.prototype._nodeRequire=require);var Z=["assert","buffer","child_process","cluster","console","constants","crypto","dgram","dns","domain","events","fs","http","https","module","net","os","path","process","punycode","querystring","readline","repl","stream","string_decoder","sys","timers","tls","tty","url","util","vm","zlib"];d("normalize",function(e){return function(e,t,n){var r=j.call(this,e,t);return n||!this.defaultJSExtensions||".js"==r.substr(r.length-3,3)||x(r)||(r+=".js"),r}});var G="undefined"!=typeof XMLHttpRequest;d("locate",function(e){return function(t){return Promise.resolve(e.call(this,t)).then(function(e){return G?e.replace(/#/g,"%23"):e})}}),d("fetch",function(){return function(e){return new Promise(function(t,n){T(e.address,e.metadata.authorization,t,n)})}}),d("import",function(e){return function(t,n,r){return n&&n.name&&g.call(this,"SystemJS.import(name, { name: parentName }) is deprecated for SystemJS.import(name, parentName), while importing "+t+" from "+n.name),e.call(this,t,n,r).then(function(e){return e.__useDefault?e["default"]:e})}}),d("translate",function(e){return function(t){return"detect"==t.metadata.format&&(t.metadata.format=void 0),e.call(this,t)}}),d("instantiate",function(e){return function(e){if("json"==e.metadata.format&&!this.builder){var t=e.metadata.entry=k();t.deps=[],t.execute=function(){try{return JSON.parse(e.source)}catch(t){throw new Error("Invalid JSON file "+e.name)}}}}}),l.prototype.env="development";var W;l.prototype.config=function(e){function t(e){for(var t in e)if(hasOwnProperty.call(e,t))return!0}var n=this;if("loaderErrorStack"in e&&(W=$__curScript,e.loaderErrorStack?$__curScript=void 0:$__curScript=W),"warnings"in e&&(n.warnings=e.warnings),e.transpilerRuntime===!1&&(n._loader.loadedTranspilerRuntime=!0),e.baseURL){if(t(n.packages)||t(n.meta)||t(n.depCache)||t(n.bundles)||t(n.packageConfigPaths))throw new TypeError("Incorrect configuration order. The baseURL must be configured with the first SystemJS.config call.");n.baseURL=e.baseURL,y.call(n)}if(e.defaultJSExtensions&&(n.defaultJSExtensions=e.defaultJSExtensions,g.call(n,"The defaultJSExtensions configuration option is deprecated, use packages configuration instead.")),e.pluginFirst&&(n.pluginFirst=e.pluginFirst),e.production&&w.call(n,!0),e.paths)for(var r in e.paths)n.paths[r]=e.paths[r];if(e.map){var a="";for(var r in e.map){var o=e.map[r];if("string"!=typeof o){a+=(a.length?", ":"")+\'"\'+r+\'"\';var s=n.defaultJSExtensions&&".js"!=r.substr(r.length-3,3),i=n.decanonicalize(r);s&&".js"==i.substr(i.length-3,3)&&(i=i.substr(0,i.length-3));var l="";for(var u in n.packages)i.substr(0,u.length)==u&&(!i[u.length]||"/"==i[u.length])&&l.split("/").length<u.split("/").length&&(l=u);l&&n.packages[l].main&&(i=i.substr(0,i.length-n.packages[l].main.length-1));var u=n.packages[i]=n.packages[i]||{};u.map=o}else n.map[r]=o}a&&g.call(n,"The map configuration for "+a+\' uses object submaps, which is deprecated in global map.\\nUpdate this to use package contextual map with configs like SystemJS.config({ packages: { "\'+r+\'": { map: {...} } } }).\')}if(e.packageConfigPaths){for(var d=[],c=0;c<e.packageConfigPaths.length;c++){var f=e.packageConfigPaths[c],m=Math.max(f.lastIndexOf("*")+1,f.lastIndexOf("/")),s=n.defaultJSExtensions&&".js"!=f.substr(m-3,3),p=n.decanonicalize(f.substr(0,m));s&&".js"==p.substr(p.length-3,3)&&(p=p.substr(0,p.length-3)),d[c]=p+f.substr(m)}n.packageConfigPaths=d}if(e.bundles)for(var r in e.bundles){for(var v=[],c=0;c<e.bundles[r].length;c++){var s=n.defaultJSExtensions&&".js"!=e.bundles[r][c].substr(e.bundles[r][c].length-3,3),b=n.decanonicalize(e.bundles[r][c]);s&&".js"==b.substr(b.length-3,3)&&(b=b.substr(0,b.length-3)),v.push(b)}n.bundles[r]=v}if(e.packages)for(var r in e.packages){if(r.match(/^([^\\/]+:)?\\/\\/$/))throw new TypeError(\'"\'+r+\'" is not a valid package name.\');var i=j.call(n,r);"/"==i[i.length-1]&&(i=i.substr(0,i.length-1)),n.packages[i]=n.packages[i]||{};var u=e.packages[r];u.modules&&(g.call(n,"Package "+r+\' is configured with "modules", which is deprecated as it has been renamed to "meta".\'),u.meta=u.modules,delete u.modules),"object"==typeof u.main&&(u.map=u.map||{},u.map["./@main"]=u.main,u.main["default"]=u.main["default"]||"./",u.main="@main");for(var S in u)-1==I.call($,S)&&g.call(n,\'"\'+S+\'" is not a valid package configuration option in package \'+r);h(n.packages[i],u)}for(var E in e){var o=e[E];if("baseURL"!=E&&"map"!=E&&"packages"!=E&&"bundles"!=E&&"paths"!=E&&"warnings"!=E&&"packageConfigPaths"!=E&&"loaderErrorStack"!=E)if("object"!=typeof o||o instanceof Array)n[E]=o;else{n[E]=n[E]||{};for(var r in o)if("meta"==E&&"*"==r[0])n[E][r]=o[r];else if("meta"==E){var _=j.call(n,r);n.defaultJSExtensions&&".js"!=_.substr(_.length-3,3)&&!x(_)&&(_+=".js"),n[E][_]=o[r]}else if("depCache"==E){var s=n.defaultJSExtensions&&".js"!=r.substr(r.length-3,3),i=n.decanonicalize(r);s&&".js"==i.substr(i.length-3,3)&&(i=i.substr(0,i.length-3)),n[E][i]=o[r]}else n[E][r]=o[r]}}},function(){function e(e,t){var n,r,a=0;for(var o in e.packages)t.substr(0,o.length)!==o||t.length!==o.length&&"/"!==t[o.length]||(r=o.split("/").length,r>a&&(n=o,a=r));return n}function t(e,t,n,r,a){if(!r||"/"==r[r.length-1]||a||t.defaultExtension===!1)return r;if(r.match(interpolationRegEx))return r;var o=!1;if(t.meta&&p(t.meta,r,function(e,t,n){return 0==n||e.lastIndexOf("*")!=e.length-1?o=!0:void 0}),!o&&e.meta&&p(e.meta,n+"/"+r,function(e,t,n){return 0==n||e.lastIndexOf("*")!=e.length-1?o=!0:void 0}),o)return r;var s="."+(t.defaultExtension||"js");return r.substr(r.length-s.length)!=s?r+s:r}function n(e,n,r,o,s){if(!o){if(!n.main)return r+(e.defaultJSExtensions?".js":"");o="./"==n.main.substr(0,2)?n.main.substr(2):n.main}if(n.map){var i="./"+o,l=b(n.map,i);if(l||(i="./"+t(e,n,r,o,s),i!="./"+o&&(l=b(n.map,i))),l)return a(e,n,r,l,i,s)}return r+"/"+t(e,n,r,o,s)}function r(e,t,n){if("."==e)throw new Error("Package "+n+\' has a map entry for "." which is not permitted.\');if(t.substr(0,e.length)==e&&"/"!=e[e.length-1]&&"/"==t[e.length])throw new Error("Package "+n+\' has a recursive map for "\'+e+\'" which is not permitted.\')}function a(e,n,a,o,s,i){var l=n.map[o];if("object"==typeof l)throw new Error("Synchronous conditional normalization not supported sync normalizing "+o+" in "+a);if(r(o,l,a),"string"!=typeof l&&(l=o=s),r(o,l,a),"."==l)l=a;else if("./"==l.substr(0,2))return a+"/"+t(e,n,a,l.substr(2)+s.substr(o.length),i);return e.normalizeSync(l+s.substr(o.length),a+"/")}function o(e,n,r,a,o){if(!a){if(!n.main)return Promise.resolve(r+(e.defaultJSExtensions?".js":""));a="./"==n.main.substr(0,2)?n.main.substr(2):n.main}var s,l;return n.map&&(s="./"+a,l=b(n.map,s),l||(s="./"+t(e,n,r,a,o),s!="./"+a&&(l=b(n.map,s)))),(l?i(e,n,r,l,s,o):Promise.resolve()).then(function(s){return s?Promise.resolve(s):Promise.resolve(r+"/"+t(e,n,r,a,o))})}function s(e,n,r,a,o,s,i){if("."==o)o=r;else if("./"==o.substr(0,2))return Promise.resolve(r+"/"+t(e,n,r,o.substr(2)+s.substr(a.length),i)).then(function(t){return interpolateConditional.call(e,t,r+"/")});return e.normalize(o+s.substr(a.length),r+"/")}function i(e,t,n,a,o,i){var l=t.map[a];return"string"==typeof l?(r(a,l,n),s(e,t,n,a,l,o,i)):e.builder?Promise.resolve(n+"/#:"+o):e["import"](t.map["@env"]||"@system-env",n).then(function(e){for(var t in l){var n="~"==t[0],r=v(n?t.substr(1):t,e);if(!n&&r||n&&!r)return l[t]}}).then(function(l){if(l){if("string"!=typeof l)throw new Error("Unable to map a package conditional to a package conditional.");return r(a,l,n),s(e,t,n,a,l,o,i)}})}function u(e){var t=e.lastIndexOf("*"),n=Math.max(t+1,e.lastIndexOf("/"));return{length:n,regEx:new RegExp("^("+e.substr(0,n).replace(/[.+?^${}()|[\\]\\\\]/g,"\\\\$&").replace(/\\*/g,"[^\\\\/]+")+")(\\\\/|$)"),wildcard:-1!=t}}function f(e,t){for(var n,r,a=!1,o=0;o<e.packageConfigPaths.length;o++){var s=e.packageConfigPaths[o],i=y[s]||(y[s]=u(s));if(!(t.length<i.length)){var l=t.match(i.regEx);!l||n&&(a&&i.wildcard||!(n.length<l[1].length))||(n=l[1],a=!i.wildcard,r=n+s.substr(i.length))}}return n?{packageName:n,configPath:r}:void 0}function m(e,t,n){var r=e.pluginLoader||e;return(r.meta[n]=r.meta[n]||{}).format="json",r.load(n).then(function(){var a=r.get(n)["default"];a.systemjs&&(a=a.systemjs),a.modules&&(a.meta=a.modules,g.call(e,"Package config file "+n+\' is configured with "modules", which is deprecated as it has been renamed to "meta".\'));for(var o in a)-1==I.call($,o)&&delete a[o];var s=e.packages[t]=e.packages[t]||{};if(h(s,a,!0),a.depCache){for(var i in a.depCache){var l;l="./"==i.substr(0,2)?t+"/"+i.substr(2):j.call(e,i),e.depCache[l]=(e.depCache[l]||[]).concat(a.depCache[i])}delete a.depCache}return"object"==typeof s.main&&(s.map=s.map||{},s.map["./@main"]=s.main,s.main["default"]=s.main["default"]||"./",s.main="@main"),s})}function p(e,t,n){var r;for(var a in e){var o="./"==a.substr(0,2)?"./":"";if(o&&(a=a.substr(2)),r=a.indexOf("*"),-1!==r&&a.substr(0,r)==t.substr(0,r)&&a.substr(r+1)==t.substr(t.length-a.length+r+1)&&n(a,e[o+a],a.split("/").length))return}var s=e[t]&&e.hasOwnProperty&&e.hasOwnProperty(t)?e[t]:e["./"+t];s&&n(s,s,0)}c(function(e){return function(){e.call(this),this.packages={},this.packageConfigPaths=[]}}),l.prototype.normalizeSync=l.prototype.decanonicalize=l.prototype.normalize,d("decanonicalize",function(t){return function(n,r){if(this.builder)return t.call(this,n,r,!0);var a=t.call(this,n,r);if(!this.defaultJSExtensions)return a;var o=e(this,a),s=this.packages[o],i=s&&s.defaultExtension;return void 0==i&&s&&s.meta&&p(s.meta,a.substr(o),function(e,t,n){return 0==n||e.lastIndexOf("*")!=e.length-1?(i=!1,!0):void 0}),(i===!1||i&&".js"!=i)&&".js"!=n.substr(n.length-3,3)&&".js"==a.substr(a.length-3,3)&&(a=a.substr(0,a.length-3)),a}}),d("normalizeSync",function(t){return function(r,o,s){g.call(this,"SystemJS.normalizeSync has been deprecated for SystemJS.decanonicalize.");var i=this;if(s=s===!0,o)var l=e(i,o)||i.defaultJSExtensions&&".js"==o.substr(o.length-3,3)&&e(i,o.substr(0,o.length-3));var u=l&&i.packages[l];if(u&&"."!=r[0]){var d=u.map,c=d&&b(d,r);if(c&&"string"==typeof d[c])return a(i,u,l,c,r,s)}var m=i.defaultJSExtensions&&".js"!=r.substr(r.length-3,3),p=t.call(i,r,o);m&&".js"!=p.substr(p.length-3,3)&&(m=!1),m&&(p=p.substr(0,p.length-3));var h=f(i,p),v=h&&h.packageName||e(i,p);if(!v)return p+(m?".js":"");var y=p.substr(v.length+1);return n(i,i.packages[v]||{},v,y,s)}}),d("normalize",function(t){return function(n,r,a){var s=this;return a=a===!0,Promise.resolve().then(function(){if(r)var t=e(s,r)||s.defaultJSExtensions&&".js"==r.substr(r.length-3,3)&&e(s,r.substr(0,r.length-3));var o=t&&s.packages[t];if(o&&"./"!=n.substr(0,2)){var l=o.map,u=l&&b(l,n);if(u)return i(s,o,t,u,n,a)}return Promise.resolve()}).then(function(i){if(i)return i;var l=s.defaultJSExtensions&&".js"!=n.substr(n.length-3,3),u=t.call(s,n,r);l&&".js"!=u.substr(u.length-3,3)&&(l=!1),l&&(u=u.substr(0,u.length-3));var d=f(s,u),c=d&&d.packageName||e(s,u);if(!c)return Promise.resolve(u+(l?".js":""));var p=s.packages[c],h=p&&(p.configured||!d);return(h?Promise.resolve(p):m(s,c,d.configPath)).then(function(e){var t=u.substr(c.length+1);return o(s,e,c,t,a)})})}});var y={};d("locate",function(t){return function(n){var r=this;return Promise.resolve(t.call(this,n)).then(function(t){var a=e(r,n.name);if(a){var o=r.packages[a],s=n.name.substr(a.length+1);o.format&&(n.metadata.format=n.metadata.format||o.format);var i={};if(o.meta){var l=0;p(o.meta,s,function(e,t,n){n>l&&(l=n),h(i,t,n&&l>n)}),h(n.metadata,i)}}return t})}})}(),function(){function t(){if(s&&"interactive"===s.script.readyState)return s.load;for(var e=0;e<u.length;e++)if("interactive"==u[e].script.readyState)return s=u[e],s.load}function n(e,t){return new Promise(function(e,n){t.metadata.integrity&&n(new Error("Subresource integrity checking is not supported in web workers.")),i=t;try{importScripts(t.address)}catch(r){i=null,n(r)}i=null,t.metadata.entry||n(new Error(t.address+" did not call System.register or AMD define")),e("")})}if("undefined"!=typeof document)var r=document.getElementsByTagName("head")[0];var a,o,s,i=null,l=r&&function(){var e=document.createElement("script"),t="undefined"!=typeof opera&&"[object Opera]"===opera.toString();return e.attachEvent&&!(e.attachEvent.toString&&e.attachEvent.toString().indexOf("[native code")<0)&&!t}(),u=[],c=0,f=[];d("pushRegister_",function(e){return function(n){return e.call(this,n)?!1:(i?this.reduceRegister_(i,n):l?this.reduceRegister_(t(),n):c?f.push(n):this.reduceRegister_(null,n),!0)}}),d("fetch",function(t){return function(i){var d=this;return"json"!=i.metadata.format&&i.metadata.scriptLoad&&(O||R)?R?n(d,i):new Promise(function(t,n){function m(e){if(!g.readyState||"loaded"==g.readyState||"complete"==g.readyState){\r\nif(c--,i.metadata.entry||f.length){if(!l){for(var r=0;r<f.length;r++)d.reduceRegister_(i,f[r]);f=[]}}else d.reduceRegister_(i);h(),i.metadata.entry||i.metadata.bundle||n(new Error(i.name+" did not call System.register or AMD define. If loading a global module configure the global name via the meta exports property for script injection support.")),t("")}}function p(e){h(),n(new Error("Unable to load script "+i.address))}function h(){if(e.System=a,e.require=o,g.detachEvent){g.detachEvent("onreadystatechange",m);for(var t=0;t<u.length;t++)u[t].script==g&&(s&&s.script==g&&(s=null),u.splice(t,1))}else g.removeEventListener("load",m,!1),g.removeEventListener("error",p,!1);r.removeChild(g)}var g=document.createElement("script");g.async=!0,i.metadata.crossOrigin&&(g.crossOrigin=i.metadata.crossOrigin),i.metadata.integrity&&g.setAttribute("integrity",i.metadata.integrity),l?(g.attachEvent("onreadystatechange",m),u.push({script:g,load:i})):(g.addEventListener("load",m,!1),g.addEventListener("error",p,!1)),c++,a=e.System,o=e.require,g.src=i.address,r.appendChild(g)}):t.call(this,i)}})}();var V=/^(\\s*\\/\\*[^\\*]*(\\*(?!\\/)[^\\*]*)*\\*\\/|\\s*\\/\\/[^\\n]*|\\s*"[^"]+"\\s*;?|\\s*\'[^\']+\'\\s*;?)*\\s*/;!function(){function t(e,n,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==I.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var a=0,o=e.normalizedDeps.length;o>a;a++){var s=e.normalizedDeps[a],i=n.defined[s];if(i&&!i.evaluated){var l=e.groupIndex+(i.declarative!=e.declarative);if(null===i.groupIndex||i.groupIndex<l){if(null!==i.groupIndex&&(r[i.groupIndex].splice(I.call(r[i.groupIndex],i),1),0==r[i.groupIndex].length))throw new Error("Mixed dependency cycle detected");i.groupIndex=l}t(i,n,r)}}}}function n(e,n){var r=n.defined[e];if(!r.module){r.groupIndex=0;var a=[];t(r,n,a);for(var o=!!r.declarative==a.length%2,i=a.length-1;i>=0;i--){for(var l=a[i],d=0;d<l.length;d++){var c=l[d];o?s(c,n):u(c,n)}o=!o}}}function a(){}function o(e,t){return t[e]||(t[e]={name:e,dependencies:[],exports:new a,importers:[]})}function s(t,n){if(!t.module){var r=n._loader.moduleRecords,a=t.module=o(t.name,r),i=t.module.exports,l=t.declare.call(e,function(e,t){if(a.locked=!0,"object"==typeof e)for(var n in e)i[n]=e[n];else i[e]=t;for(var r=0,o=a.importers.length;o>r;r++){var s=a.importers[r];if(!s.locked){var l=I.call(s.dependencies,a);s.setters[l](i)}}return a.locked=!1,t},{id:t.name});if(a.setters=l.setters,a.execute=l.execute,!a.setters||!a.execute)throw new TypeError("Invalid System.register form for "+t.name);for(var u=0,d=t.normalizedDeps.length;d>u;u++){var c,f=t.normalizedDeps[u],m=n.defined[f],p=r[f];p?c=p.exports:m&&!m.declarative?c=m.esModule:m?(s(m,n),p=m.module,c=p.exports):c=n.get(f),p&&p.importers?(p.importers.push(a),a.dependencies.push(p)):a.dependencies.push(null);for(var h=t.originalIndices[u],g=0,v=h.length;v>g;++g){var y=h[g];a.setters[y]&&a.setters[y](c)}}}}function i(e,t){var n,r=t.defined[e];if(r)r.declarative?p(e,[],t):r.evaluated||u(r,t),n=r.module.exports;else if(n=t.get(e),!n)throw new Error("Unable to load dependency "+e+".");return(!r||r.declarative)&&n&&n.__useDefault?n["default"]:n}function u(t,n){if(!t.module){var a={},o=t.module={exports:a,id:t.name};if(!t.executingRequire)for(var s=0,l=t.normalizedDeps.length;l>s;s++){var d=t.normalizedDeps[s],c=n.defined[d];c&&u(c,n)}t.evaluated=!0;var f=t.execute.call(e,function(e){for(var r=0,a=t.deps.length;a>r;r++)if(t.deps[r]==e)return i(t.normalizedDeps[r],n);var o=n.normalizeSync(e,t.name);if(-1!=I.call(t.normalizedDeps,o))return i(o,n);throw new Error("Module "+e+" not declared as a dependency of "+t.name)},a,o);f&&(o.exports=f),a=o.exports,a&&(a.__esModule||a instanceof r)?t.esModule=a:t.esmExports&&a!==e?t.esModule=m(a):t.esModule={"default":a}}}function p(t,n,r){var a=r.defined[t];if(a&&!a.evaluated&&a.declarative){n.push(t);for(var o=0,s=a.normalizedDeps.length;s>o;o++){var i=a.normalizedDeps[o];-1==I.call(n,i)&&(r.defined[i]?p(i,n,r):r.get(i))}a.evaluated||(a.evaluated=!0,a.module.execute.call(e))}}l.prototype.register=function(e,t,n){if("string"!=typeof e&&(n=t,t=e,e=null),"boolean"==typeof n)return this.registerDynamic.apply(this,arguments);var r=k();r.name=e&&(this.decanonicalize||this.normalize).call(this,e),r.declarative=!0,r.deps=t,r.declare=n,this.pushRegister_({amd:!1,entry:r})},l.prototype.registerDynamic=function(e,t,n,r){"string"!=typeof e&&(r=n,n=t,t=e,e=null);var a=k();a.name=e&&(this.decanonicalize||this.normalize).call(this,e),a.deps=t,a.execute=r,a.executingRequire=n,this.pushRegister_({amd:!1,entry:a})},d("reduceRegister_",function(){return function(e,t){if(t){var n=t.entry,r=e&&e.metadata;if(n.name&&(n.name in this.defined||(this.defined[n.name]=n),r&&(r.bundle=!0)),!n.name||e&&n.name==e.name){if(!r)throw new TypeError("Invalid System.register call. Anonymous System.register calls can only be made by modules loaded by SystemJS.import and not via script tags.");if(r.entry)throw"register"==r.format?new Error("Multiple anonymous System.register calls in module "+e.name+". If loading a bundle, ensure all the System.register calls are named."):new Error("Module "+e.name+" interpreted as "+r.format+" module format, but called System.register.");r.format||(r.format="register"),r.entry=n}}}}),c(function(e){return function(){e.call(this),this.defined={},this._loader.moduleRecords={}}}),z(a,"toString",{value:function(){return"Module"}}),d("delete",function(e){return function(t){return delete this._loader.moduleRecords[t],delete this.defined[t],e.call(this,t)}}),d("fetch",function(e){return function(t){return this.defined[t.name]?(t.metadata.format="defined",""):(t.metadata.deps=t.metadata.deps||[],e.call(this,t))}}),d("translate",function(e){return function(t){return t.metadata.deps=t.metadata.deps||[],Promise.resolve(e.call(this,t)).then(function(e){return("register"==t.metadata.format||!t.metadata.format&&_(t.source))&&(t.metadata.format="register"),e})}}),d("instantiate",function(e){return function(t){"detect"==t.metadata.format&&(t.metadata.format=void 0),e.call(this,t);var r,a=this;if(a.defined[t.name])r=a.defined[t.name],r.declarative||(r.deps=r.deps.concat(t.metadata.deps));else if(t.metadata.entry)r=t.metadata.entry,r.deps=r.deps.concat(t.metadata.deps);else if(!(a.builder&&t.metadata.bundle||"register"!=t.metadata.format&&"esm"!=t.metadata.format&&"es6"!=t.metadata.format)){if("undefined"!=typeof N&&N.call(a,t),!t.metadata.entry&&!t.metadata.bundle)throw new Error(t.name+" detected as "+t.metadata.format+" but didn\'t execute.");r=t.metadata.entry,r&&t.metadata.deps&&(r.deps=r.deps.concat(t.metadata.deps))}r||(r=k(),r.deps=t.metadata.deps,r.execute=function(){}),a.defined[t.name]=r;var o=f(r.deps);r.deps=o.names,r.originalIndices=o.indices,r.name=t.name,r.esmExports=t.metadata.esmExports!==!1;for(var s=[],i=0,l=r.deps.length;l>i;i++)s.push(Promise.resolve(a.normalize(r.deps[i],t.name)));return Promise.all(s).then(function(e){return r.normalizedDeps=e,{deps:r.deps,execute:function(){return n(t.name,a),p(t.name,[],a),a.defined[t.name]=void 0,a.newModule(r.declarative?r.module.exports:r.esModule)}}})}})}();var K="undefined"!=typeof self?"self":"global";d("fetch",function(e){return function(t){return t.metadata.exports&&!t.metadata.format&&(t.metadata.format="global"),e.call(this,t)}}),d("instantiate",function(e){return function(t){var n=this;if(t.metadata.format||(t.metadata.format="global"),"global"==t.metadata.format&&!t.metadata.registered){var r=k();t.metadata.entry=r,r.deps=[];for(var a in t.metadata.globals){var o=t.metadata.globals[a];o&&r.deps.push(o)}r.execute=function(e,r,a){var o;if(t.metadata.globals){o={};for(var s in t.metadata.globals)t.metadata.globals[s]&&(o[s]=e(t.metadata.globals[s]))}var i=t.metadata.exports;i&&(t.source+="\\n"+K+\'["\'+i+\'"] = \'+i+";");var l=n.get("@@global-helpers").prepareGlobal(a.id,i,o);try{N.call(n,t)}catch(u){throw l(),u}return l()}}return e.call(this,t)}}),d("reduceRegister_",function(e){return function(t,n){if(n||!t.metadata.exports)return e.call(this,t,n);t.metadata.format="global";var r=t.metadata.entry=k();r.deps=t.metadata.deps;var a=P(t.metadata.exports);r.execute=function(){return a}}}),c(function(t){return function(){function n(t){if(Object.keys)Object.keys(e).forEach(t);else for(var n in e)s.call(e,n)&&t(n)}function r(t){n(function(n){if(-1==I.call(i,n)){try{var r=e[n]}catch(a){i.push(n)}t(n,r)}})}var a=this;t.call(a);var o,s=Object.prototype.hasOwnProperty,i=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];a.set("@@global-helpers",a.newModule({prepareGlobal:function(t,n,a){var s=e.define;e.define=void 0;var i;if(a){i={};for(var l in a)i[l]=e[l],e[l]=a[l]}return n||(o={},r(function(e,t){o[e]=t})),function(){var t;if(n)t=P(n);else{t={};var a,l;r(function(e,n){o[e]!==n&&"undefined"!=typeof n&&(t[e]=n,"undefined"!=typeof a?l||a===n||(l=!0):a=n)}),t=l?t:a}if(i)for(var u in i)e[u]=i[u];return e.define=s,t}}}))}}),function(){function t(e){function t(e,t){for(var n=0;n<e.length;n++)if(e[n][0]<t.index&&e[n][1]>t.index)return!0;return!1}r.lastIndex=a.lastIndex=o.lastIndex=0;var n,s=[],i=[],l=[];if(e.length/e.split("\\n").length<200){for(;n=o.exec(e);)i.push([n.index,n.index+n[0].length]);for(;n=a.exec(e);)t(i,n)||l.push([n.index,n.index+n[0].length])}for(;n=r.exec(e);)if(!t(i,n)&&!t(l,n)){var u=n[1].substr(1,n[1].length-2);if(u.match(/"|\'/))continue;"/"==u[u.length-1]&&(u=u.substr(0,u.length-1)),s.push(u)}return s}var n=/(?:^\\uFEFF?|[^$_a-zA-Z\\xA0-\\uFFFF.])(exports\\s*(\\[[\'"]|\\.)|module(\\.exports|\\[\'exports\'\\]|\\["exports"\\])\\s*(\\[[\'"]|[=,\\.]))/,r=/(?:^\\uFEFF?|[^$_a-zA-Z\\xA0-\\uFFFF."\'])require\\s*\\(\\s*("[^"\\\\]*(?:\\\\.[^"\\\\]*)*"|\'[^\'\\\\]*(?:\\\\.[^\'\\\\]*)*\')\\s*\\)/g,a=/(^|[^\\\\])(\\/\\*([\\s\\S]*?)\\*\\/|([^:]|^)\\/\\/(.*)$)/gm,o=/("[^"\\\\\\n\\r]*(\\\\.[^"\\\\\\n\\r]*)*"|\'[^\'\\\\\\n\\r]*(\\\\.[^\'\\\\\\n\\r]*)*\')/g,s=/^\\#\\!.*/;d("instantiate",function(a){return function(o){var i=this;if(o.metadata.format||(n.lastIndex=0,r.lastIndex=0,(r.exec(o.source)||n.exec(o.source))&&(o.metadata.format="cjs")),"cjs"==o.metadata.format){var l=o.metadata.deps,u=o.metadata.cjsRequireDetection===!1?[]:t(o.source);for(var d in o.metadata.globals)o.metadata.globals[d]&&u.push(o.metadata.globals[d]);var c=k();o.metadata.entry=c,c.deps=u,c.executingRequire=!0,c.execute=function(t,n,r){function a(e){return"/"==e[e.length-1]&&(e=e.substr(0,e.length-1)),t.apply(this,arguments)}if(a.resolve=function(e){return i.get("@@cjs-helpers").requireResolve(e,r.id)},!o.metadata.cjsDeferDepsExecute)for(var u=0;u<l.length;u++)a(l[u]);var d=i.get("@@cjs-helpers").getPathVars(r.id),c={exports:n,args:[a,n,r,d.filename,d.dirname,e,e]},f="(function(require, exports, module, __filename, __dirname, global, GLOBAL";if(o.metadata.globals)for(var m in o.metadata.globals)c.args.push(a(o.metadata.globals[m])),f+=", "+m;var p=e.define;e.define=void 0,e.__cjsWrapper=c,o.source=f+") {"+o.source.replace(s,"")+"\\n}).apply(__cjsWrapper.exports, __cjsWrapper.args);",N.call(i,o),e.__cjsWrapper=void 0,e.define=p}}return a.call(i,o)}})}(),c(function(e){return function(){function t(e){return"file:///"==e.substr(0,8)?e.substr(7+!!M):r&&e.substr(0,r.length)==r?e.substr(r.length):e}var n=this;if(e.call(n),"undefined"!=typeof window&&"undefined"!=typeof document&&window.location)var r=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");n.set("@@cjs-helpers",n.newModule({requireResolve:function(e,r){return t(n.normalizeSync(e,r))},getPathVars:function(e){var n,r=e.lastIndexOf("!");n=-1!=r?e.substr(0,r):e;var a=n.split("/");return a.pop(),a=a.join("/"),{filename:t(n),dirname:t(a)}}}))}}),d("fetch",function(t){return function(n){return n.metadata.scriptLoad&&O&&(e.define=this.amdDefine),t.call(this,n)}}),c(function(t){return function(){function n(e,t){e=e.replace(s,"");var n=e.match(u),r=(n[1].split(",")[t]||"require").replace(c,""),a=f[r]||(f[r]=new RegExp(i+r+l,"g"));a.lastIndex=0;for(var o,d=[];o=a.exec(e);)d.push(o[2]||o[3]);return d}function r(e,t,n,a){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof t&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var s=o.defaultJSExtensions&&".js"!=e.substr(e.length-3,3),i=o.decanonicalize(e,a);s&&".js"==i.substr(i.length-3,3)&&(i=i.substr(0,i.length-3));var l=o.get(i);if(!l)throw new Error(\'Module not already loaded loading "\'+e+\'" as \'+i+(a?\' from "\'+a+\'".\':"."));return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var u=[],d=0;d<e.length;d++)u.push(o["import"](e[d],a));Promise.all(u).then(function(e){t&&t.apply(null,e)},n)}function a(t,a,s){function i(t,n,i){function c(e,n,a){return"string"==typeof e&&"function"!=typeof n?t(e):r.call(o,e,n,a,i.id)}for(var f=[],m=0;m<a.length;m++)f.push(t(a[m]));i.uri=i.id,i.config=function(){},-1!=d&&f.splice(d,0,i),-1!=u&&f.splice(u,0,n),-1!=l&&(c.toUrl=function(e){var t=o.defaultJSExtensions&&".js"!=e.substr(e.length-3,3),n=o.decanonicalize(e,i.id);return t&&".js"==n.substr(n.length-3,3)&&(n=n.substr(0,n.length-3)),n},f.splice(l,0,c));var p=e.require;e.require=r;var h=s.apply(-1==u?e:n,f);return e.require=p,"undefined"==typeof h&&i&&(h=i.exports),"undefined"!=typeof h?h:void 0}"string"!=typeof t&&(s=a,a=t,t=null),a instanceof Array||(s=a,a=["require","exports","module"].splice(0,s.length)),"function"!=typeof s&&(s=function(e){return function(){return e}}(s)),void 0===a[a.length-1]&&a.pop();var l,u,d;-1!=(l=I.call(a,"require"))&&(a.splice(l,1),t||(a=a.concat(n(s.toString(),l)))),-1!=(u=I.call(a,"exports"))&&a.splice(u,1),-1!=(d=I.call(a,"module"))&&a.splice(d,1);var c=k();c.name=t&&(o.decanonicalize||o.normalize).call(o,t),c.deps=a,c.execute=i,o.pushRegister_({amd:!0,entry:c})}var o=this;t.call(this);var s=/(\\/\\*([\\s\\S]*?)\\*\\/|([^:]|^)\\/\\/(.*)$)/gm,i="(?:^|[^$_a-zA-Z\\\\xA0-\\\\uFFFF.])",l="\\\\s*\\\\(\\\\s*(\\"([^\\"]+)\\"|\'([^\']+)\')\\\\s*\\\\)",u=/\\(([^\\)]*)\\)/,c=/^\\s+|\\s+$/g,f={};a.amd={},d("reduceRegister_",function(e){return function(t,n){if(!n||!n.amd)return e.call(this,t,n);var r=t&&t.metadata,a=n.entry;if(r&&(r.format="amd"),a.name)r&&(r.entry||r.bundle?r.entry&&r.entry.name&&(r.entry=void 0):r.entry=a,r.bundle=!0),a.name in this.defined||(this.defined[a.name]=a);else{if(!r)throw new TypeError("Unexpected anonymous AMD define.");if(r.entry&&!r.entry.name)throw new Error("Multiple anonymous defines in module "+t.name);r.entry=a}}}),o.amdDefine=a,o.amdRequire=r}}),function(){var t=/(?:^\\uFEFF?|[^$_a-zA-Z\\xA0-\\uFFFF.])define\\s*\\(\\s*("[^"]+"\\s*,\\s*|\'[^\']+\'\\s*,\\s*)?\\s*(\\[(\\s*(("[^"]+"|\'[^\']+\')\\s*,|\\/\\/.*\\r?\\n|\\/\\*(.|\\s)*?\\*\\/))*(\\s*("[^"]+"|\'[^\']+\')\\s*,?)?(\\s*(\\/\\/.*\\r?\\n|\\/\\*(.|\\s)*?\\*\\/))*\\s*\\]|function\\s*|{|[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*\\))/;d("instantiate",function(n){return function(r){var a=this;if("amd"==r.metadata.format||!r.metadata.format&&r.source.match(t))if(r.metadata.format="amd",a.builder||a.execute===!1)r.metadata.execute=function(){return r.metadata.builderExecute.apply(this,arguments)};else{var o=e.define;e.define=this.amdDefine;try{N.call(a,r)}finally{e.define=o}if(!r.metadata.entry&&!r.metadata.bundle)throw new TypeError("AMD module "+r.name+" did not define")}return n.call(a,r)}})}(),function(){function e(e,t){if(t){var n;if(e.pluginFirst){if(-1!=(n=t.lastIndexOf("!")))return t.substr(n+1)}else if(-1!=(n=t.indexOf("!")))return t.substr(0,n);return t}}function t(e,t){var n,r,a=t.lastIndexOf("!");return-1!=a?(e.pluginFirst?(n=t.substr(a+1),r=t.substr(0,a)):(n=t.substr(0,a),r=t.substr(a+1)||n.substr(n.lastIndexOf(".")+1)),{argument:n,plugin:r}):void 0}function n(e,t,n,r){return r&&".js"==t.substr(t.length-3,3)&&(t=t.substr(0,t.length-3)),e.pluginFirst?n+"!"+t:t+"!"+n}function r(e,t){return e.defaultJSExtensions&&".js"!=t.substr(t.length-3,3)}function a(a){return function(o,s,i){var l=this;s=e(this,s);var u=t(l,o);if(!u)return a.call(this,o,s,i);var d=l.normalizeSync(u.argument,s,!0),c=l.normalizeSync(u.plugin,s,!0);return n(l,d,c,r(l,u.argument))}}d("decanonicalize",a),d("normalizeSync",a),d("normalize",function(a){return function(o,s,i){var l=this;s=e(this,s);var u=t(l,o);return u?Promise.all([l.normalize(u.argument,s,!0),l.normalize(u.plugin,s)]).then(function(e){return n(l,e[0],e[1],r(l,u.argument))}):a.call(l,o,s,i)}}),d("locate",function(e){return function(t){var n,r=this,a=t.name;return r.pluginFirst?-1!=(n=a.indexOf("!"))&&(t.metadata.loader=a.substr(0,n),t.name=a.substr(n+1)):-1!=(n=a.lastIndexOf("!"))&&(t.metadata.loader=a.substr(n+1),t.name=a.substr(0,n)),e.call(r,t).then(function(e){return-1==n&&t.metadata.loader?r.normalize(t.metadata.loader,t.name).then(function(n){return t.metadata.loader=n,e}):e}).then(function(e){var n=t.metadata.loader;if(!n)return e;if(t.name==n)throw new Error("Plugin "+n+" cannot load itself, make sure it is excluded from any wildcard meta configuration via a custom loader: false rule.");if(r.defined&&r.defined[a])return e;var o=r.pluginLoader||r;return o["import"](n).then(function(n){return t.metadata.loaderModule=n,t.address=e,n.locate?n.locate.call(r,t):e})})}}),d("fetch",function(e){return function(t){var n=this;return t.metadata.loaderModule&&t.metadata.loaderModule.fetch&&"defined"!=t.metadata.format?(t.metadata.scriptLoad=!1,t.metadata.loaderModule.fetch.call(n,t,function(t){return e.call(n,t)})):e.call(n,t)}}),d("translate",function(e){return function(t){var n=this;return t.metadata.loaderModule&&t.metadata.loaderModule.translate&&"defined"!=t.metadata.format?Promise.resolve(t.metadata.loaderModule.translate.call(n,t)).then(function(r){var a=t.metadata.sourceMap;if(a){if("object"!=typeof a)throw new Error("load.metadata.sourceMap must be set to an object.");var o=t.name.split("!")[0];a.file=o+"!transpiled",(!a.sources||a.sources.length<=1)&&(a.sources=[o])}return"string"==typeof r?t.source=r:g.call(this,"Plugin "+t.metadata.loader+" should return the source in translate, instead of setting load.source directly. This support will be deprecated."),e.call(n,t)}):e.call(n,t)}}),d("instantiate",function(e){return function(t){var n=this,r=!1;return t.metadata.loaderModule&&t.metadata.loaderModule.instantiate&&!n.builder&&"defined"!=t.metadata.format?Promise.resolve(t.metadata.loaderModule.instantiate.call(n,t,function(t){if(r)throw new Error("Instantiate must only be called once.");return r=!0,e.call(n,t)})).then(function(a){return r?a:(t.metadata.entry=k(),t.metadata.entry.execute=function(){return a},t.metadata.entry.deps=t.metadata.deps,t.metadata.format="defined",e.call(n,t))}):e.call(n,t)}})}(),function(){d("fetch",function(e){return function(t){var n=t.metadata.alias,r=t.metadata.deps||[];if(n){t.metadata.format="defined";var a=k();return this.defined[t.name]=a,a.declarative=!0,a.deps=r.concat([n]),a.declare=function(e){return{setters:[function(t){for(var n in t)e(n,t[n]);t.__useDefault&&(a.module.exports.__useDefault=!0)}],execute:function(){}}},""}return e.call(this,t)}})}(),function(){function e(e,t,n){for(var r,a=t.split(".");a.length>1;)r=a.shift(),e=e[r]=e[r]||{};r=a.shift(),r in e||(e[r]=n)}c(function(e){return function(){this.meta={},e.call(this)}}),d("locate",function(e){return function(t){var n,r=this.meta,a=t.name,o=0;for(var s in r)if(n=s.indexOf("*"),-1!==n&&s.substr(0,n)===a.substr(0,n)&&s.substr(n+1)===a.substr(a.length-s.length+n+1)){var i=s.split("/").length;i>o&&(o=i),h(t.metadata,r[s],o!=i)}return r[a]&&h(t.metadata,r[a]),e.call(this,t)}});var t=/^(\\s*\\/\\*[^\\*]*(\\*(?!\\/)[^\\*]*)*\\*\\/|\\s*\\/\\/[^\\n]*|\\s*"[^"]+"\\s*;?|\\s*\'[^\']+\'\\s*;?)+/,n=/\\/\\*[^\\*]*(\\*(?!\\/)[^\\*]*)*\\*\\/|\\/\\/[^\\n]*|"[^"]+"\\s*;?|\'[^\']+\'\\s*;?/g;d("translate",function(r){return function(a){var o=a.source.match(t);if(o)for(var s=o[0].match(n),i=0;i<s.length;i++){var l=s[i],u=l.length,d=l.substr(0,1);if(";"==l.substr(u-1,1)&&u--,\'"\'==d||"\'"==d){var c=l.substr(1,l.length-3),f=c.substr(0,c.indexOf(" "));if(f){var m=c.substr(f.length+1,c.length-f.length-1);"[]"==f.substr(f.length-2,2)?(f=f.substr(0,f.length-2),a.metadata[f]=a.metadata[f]||[],a.metadata[f].push(m)):a.metadata[f]instanceof Array?(g.call(this,"Module "+a.name+\' contains deprecated "deps \'+m+\'" meta syntax.\\nThis should be updated to "deps[] \'+m+\'" for pushing to array meta.\'),a.metadata[f].push(m)):e(a.metadata,f,m)}else a.metadata[c]=!0}}return r.call(this,a)}})}(),function(){c(function(e){return function(){e.call(this),this.depCache={}}}),d("locate",function(e){return function(t){var n=this,r=n.depCache[t.name];if(r)for(var a=0;a<r.length;a++)n["import"](r[a],t.name);return e.call(n,t)}})}(),D=new l,e.SystemJS=D,D.version="0.19.25 for SPFx","object"==typeof exports&&(module.exports=a),e.Reflect=e.Reflect||{},e.Reflect.Loader=e.Reflect.Loader||a,e.Reflect.global=e.Reflect.global||e,e.LoaderPolyfill=a,D||(D=new o,D.constructor=o),"object"==typeof exports&&(module.exports=D),e.System=D}("undefined"!=typeof self?self:global)}var t="undefined"==typeof Promise;if("undefined"!=typeof document){var n=document.getElementsByTagName("script");if($__curScript=n[n.length-1],t){var r=$__curScript.src,a=r.substr(0,r.lastIndexOf("/")+1);window.systemJSBootstrap=e,document.write(\'<script type="text/javascript" src="\'+a+\'system-polyfills.js"></script>\')}else e()}else if("undefined"!=typeof importScripts){var a="";try{throw new Error("_")}catch(o){o.stack.replace(/(?:at|@).*(http.+):[\\d]+:[\\d]+/,function(e,t){$__curScript={src:t},a=t.replace(/\\/[^\\/]*$/,"/")})}t&&importScripts(a+"system-polyfills.js"),e()}else $__curScript="undefined"!=typeof __filename?{src:__filename}:null,e()}();\r\n');
}.call(exports, (function() { return this; }())))

/***/ }),

/***/ "jLfe":
/*!***********************************************!*\
  !*** ./lib/utilities/normalizeComponentId.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponentId; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Given a component id and version, gives a normalized string that includes both string and version.
 * Used internally to provide a common way to refer to id + version in different classes.
 *
 * Example:
 * { id: d1d91016-032f-456d-98a4-721247c305e8, version: 1.0.0 } -> d1d91016-032f-456d-98a4-721247c305e8_1.0.0
 */
function normalizeComponentId(id, version) {
    id = typeof id === 'string' ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(id) : id;
    version = typeof version === 'string' ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Version"].parse(version) : version;
    return id.toString() + "_" + version.toString();
}


/***/ })

}]);
//# sourceMappingURL=chunk.systemjs-component-loader_[locale].js.map