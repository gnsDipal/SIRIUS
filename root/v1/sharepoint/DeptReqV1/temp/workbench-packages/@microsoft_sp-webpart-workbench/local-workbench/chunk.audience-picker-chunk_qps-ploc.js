(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["audience-picker-chunk"],{

/***/ "4QBU":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/AudiencePicker/ChunkLoader.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: PeoplePickerProvider, PeoplePicker, AudienceItem, AudienceHint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_datasources_lib_PeoplePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-datasources/lib/PeoplePicker */ "sQJ6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerProvider", function() { return _ms_odsp_datasources_lib_PeoplePicker__WEBPACK_IMPORTED_MODULE_0__["PeoplePickerProvider"]; });

/* harmony import */ var _PeoplePicker_PeoplePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PeoplePicker/PeoplePicker */ "5zxV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeoplePicker", function() { return _PeoplePicker_PeoplePicker__WEBPACK_IMPORTED_MODULE_1__["PeoplePicker"]; });

/* harmony import */ var _AudienceItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudienceItem */ "X5YS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudienceItem", function() { return _AudienceItem__WEBPACK_IMPORTED_MODULE_2__["AudienceItem"]; });

/* harmony import */ var _AudienceHint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AudienceHint */ "FvNt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudienceHint", function() { return _AudienceHint__WEBPACK_IMPORTED_MODULE_3__["AudienceHint"]; });





//# sourceMappingURL=ChunkLoader.js.map

/***/ }),

/***/ "FvNt":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/AudiencePicker/AudienceHint.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: AudienceHint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudienceHint", function() { return AudienceHint; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _AudienceHint_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AudienceHint.module.scss */ "JwjO");
/* harmony import */ var _AudienceHint_resx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AudienceHint.resx */ "XZrB");
/* harmony import */ var _AudienceHint_resx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AudienceHint_resx__WEBPACK_IMPORTED_MODULE_4__);





function AudienceHint(props) {
    var numberLeft = props.limit - props.audienceCount;
    var numberLeftHint = _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["format"](_AudienceHint_resx__WEBPACK_IMPORTED_MODULE_4___default.a.AudienceLimitDescription, _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["formatWithLocalizedCountValue"](_AudienceHint_resx__WEBPACK_IMPORTED_MODULE_4___default.a.AudienceNumber, _AudienceHint_resx__WEBPACK_IMPORTED_MODULE_4___default.a.AudienceNumberInterval, props.limit), _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["formatWithLocalizedCountValue"](_AudienceHint_resx__WEBPACK_IMPORTED_MODULE_4___default.a.AudienceNumber, _AudienceHint_resx__WEBPACK_IMPORTED_MODULE_4___default.a.AudienceNumberInterval, numberLeft));
    return props.error ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { "aria-live": 'assertive', className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(_AudienceHint_module_scss__WEBPACK_IMPORTED_MODULE_3__["hint"], _AudienceHint_module_scss__WEBPACK_IMPORTED_MODULE_3__["error"]) }, props.error)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { "aria-live": 'assertive', className: _AudienceHint_module_scss__WEBPACK_IMPORTED_MODULE_3__["hint"], "data-number-Left": numberLeft }, numberLeftHint));
}
//# sourceMappingURL=AudienceHint.js.map

/***/ }),

/***/ "JdBn":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/AudiencePicker/AudienceItem.resx.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"OneOrMoreAudienceInvalid":"[!!--##Ōńē ōŕ mōŕē ĝŕōũƥś àŕē ĩńvàĺĩď##--!!]"};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "JwjO":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/AudiencePicker/AudienceHint.module.scss.js ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: hint, error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hint", function() { return hint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".hint_5ffbb2eb{font-size:12px;color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}.hint_5ffbb2eb.error_5ffbb2eb{color:#a4262c}\n" }]);
var hint = "hint_5ffbb2eb";
var error = "error_5ffbb2eb";
//# sourceMappingURL=AudienceHint.module.scss.js.map

/***/ }),

/***/ "QR6J":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/AudiencePicker/AudienceItem.module.scss.js ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: audienceItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audienceItem", function() { return audienceItem; });
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".audienceItem_9729f3f9.ms-PickerPersona-container.is-selected{background:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}.audienceItem_9729f3f9.ms-PickerPersona-container.is-selected:hover{background:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}\n" }]);
var audienceItem = "audienceItem_9729f3f9";
//# sourceMappingURL=AudienceItem.module.scss.js.map

/***/ }),

/***/ "X5YS":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/AudiencePicker/AudienceItem.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: peoplePickerQueryParams, AudienceItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peoplePickerQueryParams", function() { return peoplePickerQueryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudienceItem", function() { return AudienceItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_datasources_lib_PeoplePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-datasources/lib/PeoplePicker */ "sQJ6");
/* harmony import */ var office_ui_fabric_react_lib_Pickers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Pickers */ "JuHm");
/* harmony import */ var office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Spinner */ "fyAn");
/* harmony import */ var _AudienceKillSwitches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AudienceKillSwitches */ "hl+O");
/* harmony import */ var _AudienceItem_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AudienceItem.module.scss */ "QR6J");
/* harmony import */ var _AudienceItem_resx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AudienceItem.resx */ "JdBn");
/* harmony import */ var _AudienceItem_resx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_AudienceItem_resx__WEBPACK_IMPORTED_MODULE_6__);







var peoplePickerQueryParams = {
    allowEmailAddresses: false,
    allowOnlyEmailAddresses: false,
    allowMultipleEntities: true,
    maximumEntitySuggestions: 30,
    principalType: _ms_odsp_datasources_lib_PeoplePicker__WEBPACK_IMPORTED_MODULE_1__["PrincipalType"].securityGroup
};
function useAudience(props) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](undefined), audience = _a[0], setAudience = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        props.dataProvider
            .resolve(props.audienceId, peoplePickerQueryParams)
            .then(function (group) {
            if (group.principalType === _ms_odsp_datasources_lib_PeoplePicker__WEBPACK_IMPORTED_MODULE_1__["PrincipalType"].securityGroup) {
                setAudience(group);
            }
            else {
                setAudience(false);
                props.onError(_AudienceItem_resx__WEBPACK_IMPORTED_MODULE_6___default.a.OneOrMoreAudienceInvalid);
            }
        })
            .catch(function () {
            setAudience(false);
            props.onError(_AudienceItem_resx__WEBPACK_IMPORTED_MODULE_6___default.a.OneOrMoreAudienceInvalid);
        });
    }, [props.dataProvider, props.audienceId, props.onError]);
    return audience;
}
function AudienceItem(props) {
    var person = useAudience(props);
    if (person) {
        var item = {
            text: person.name || '',
            imageUrl: person.image || '',
            tertiaryText: person.email || '',
            secondaryText: person.job || '',
            imageInitials: '',
            imageAlt: person.imageAlt,
            ValidationState: office_ui_fabric_react_lib_Pickers__WEBPACK_IMPORTED_MODULE_2__["ValidationState"].valid
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_Pickers__WEBPACK_IMPORTED_MODULE_2__["PeoplePickerItem"], { className: Object(_AudienceKillSwitches__WEBPACK_IMPORTED_MODULE_4__["isFixAudiencePickerThemeKillSwitchActivated"])() ? undefined : _AudienceItem_module_scss__WEBPACK_IMPORTED_MODULE_5__["audienceItem"], item: item, index: props.index, selected: props.selected, onRemoveItem: props.onRemoveItem }));
    }
    else if (person === undefined) {
        // The audience has not been resolved yet.
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_3__["Spinner"], null);
    }
    else {
        // The audience cannot be resolved.
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
    }
}
//# sourceMappingURL=AudienceItem.js.map

/***/ }),

/***/ "XZrB":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/AudiencePicker/AudienceHint.resx.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"AudienceLimitDescription":"[!!--##{0} ĺĩmĩţ - {1} ĺēƒţ##--!!]","AudienceNumber":"[!!--##{0} àũďĩēńćēś||{0} àũďĩēńćē||{0} àũďĩēńćēś##--!!]","AudienceNumberInterval":"[!!--##0||1||2-##--!!]"};
strings.default = strings;
module.exports = strings;

/***/ })

}]);
//# sourceMappingURL=chunk.audience-picker-chunk_[locale].js.map