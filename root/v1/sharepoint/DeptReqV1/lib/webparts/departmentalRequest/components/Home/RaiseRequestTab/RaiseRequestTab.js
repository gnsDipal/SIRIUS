var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import styles from './RaiseRequestTab.module.scss';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Icon } from '@fluentui/react/lib/Icon';
import { Switch, Route, Link } from "react-router-dom";
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack } from '@fluentui/react/lib/Stack';
import { Dropdown } from '@fluentui/react/lib/Dropdown';
import { Logger } from "@pnp/logging";
import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import { UserContext } from '../../Main/Main';
import Navbar from '../Navbar/Navbar';
import Home from '../Home';
import SPDepartmentalServiceData from '../../../../../services/SPDepartmentalServiceData';
import { ToastContainer } from 'react-toastify';
// debugger;
var stackTokens = { childrenGap: 50 };
var stackStyles = { root: { width: 650 } };
var spRaiseRequestServiceData = null;
var deptListCoreInfo = [];
var departmentOptions = [];
var noDataDeptOptions = [{
        key: 1,
        text: 'No data'
    }
];
var staticDeptOptions = [];
var RaiseRequestTab = function (props) {
    var mainContext = useContext(UserContext);
    var _a = useState(null), deptListCoreInfo = _a[0], setDeptListCoreInfo = _a[1];
    var _b = useState([]), departmentOptions = _b[0], setDepartmentOptions = _b[1];
    var _c = useState(''), selectedDept = _c[0], setSelectedDept = _c[1];
    var _d = useState(''), requestDescription = _d[0], setRequestDescription = _d[1];
    var _e = useState(0), dataFilledCheck = _e[0], setDataFilledCheck = _e[1];
    var _f = useState(''), selectedDeptCategory = _f[0], setSelectedDeptCategory = _f[1];
    var _g = useState([]), departmentCategoryOptions = _g[0], setDepartmentCategoryOptions = _g[1];
    var _h = useState([]), dispatcherGrpUsers = _h[0], setDispatcherGrpUsers = _h[1];
    var _j = useState(false), optionsUnlock = _j[0], setOptionsUnlock = _j[1];
    var _k = useState(null), fileAddition = _k[0], setFileAddition = _k[1];
    var _l = useState(false), toasterNotificationFlag = _l[0], setToasterNotificationFlag = _l[1];
    var _m = useState(0), randomIndex = _m[0], setRandomIndex = _m[1];
    useEffect(function () {
        init();
    }, []);
    var init = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    spRaiseRequestServiceData = new SPDepartmentalServiceData(mainContext);
                    return [4 /*yield*/, spRaiseRequestServiceData.getDepartmentDetailForPost()
                            .then(function (res) {
                            setDeptListCoreInfo(res);
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, spRaiseRequestServiceData.getDepartmentOptions()
                            .then(function (res) {
                            setDepartmentOptions(res);
                            staticDeptOptions = res;
                            setOptionsUnlock(true);
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    // UI event calls dynamic
    var onClickDeptHandle = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setDepartmentOptions(staticDeptOptions);
            return [2 /*return*/];
        });
    }); };
    var onChangeDeptHandle = function (choosenDept) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            //set states
            setSelectedDept(choosenDept.text);
            setDataFilledCheck(1);
            setSelectedDeptCategory(selectedDeptCategory);
            // this.deptCategorySelect();
            // this.loadSelectedDispatcherGroupPeople(selectedDept.text);
            spRaiseRequestServiceData.getDeptCategorySelect(choosenDept.text)
                .then(function (res) {
                setDepartmentCategoryOptions(res);
            });
            spRaiseRequestServiceData.getSelectedDispatcherGroupPeople(choosenDept.text)
                .then(function (res) {
                setDispatcherGrpUsers(res);
            });
            return [2 /*return*/];
        });
    }); };
    var onChangeDeptCategoryHandle = function (selectedDeptCategory) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setSelectedDeptCategory(selectedDeptCategory.text);
            setDataFilledCheck(1);
            return [2 /*return*/];
        });
    }); };
    var getDeptCateg = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setDepartmentCategoryOptions(departmentCategoryOptions);
            return [2 /*return*/];
        });
    }); };
    var onChangeRequestDescriptionHandle = function (requestDescription) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setRequestDescription(requestDescription.currentTarget.value);
            setDataFilledCheck(1);
            return [2 /*return*/];
        });
    }); };
    var onFileAddHandle = function (fileAdd) { return __awaiter(void 0, void 0, void 0, function () {
        var allFiles, i, file;
        return __generator(this, function (_a) {
            allFiles = [];
            for (i = 0; i < fileAdd.length; ++i) {
                allFiles.push(fileAdd[i]);
            }
            file = allFiles[0];
            setFileAddition(allFiles);
            return [2 /*return*/];
        });
    }); };
    var addEmployeeRequest = function (issueDescription, selectedDept, selectedDeptCategory, fileAddition) {
        if (selectedDept !== null) {
            spRaiseRequestServiceData.getEmployeeRequestAdded(issueDescription, selectedDept, selectedDeptCategory, fileAddition, deptListCoreInfo)
                .then(function (r) {
                setToasterNotificationFlag(true);
                setRandomIndex(Math.floor(Math.random() * 6) + 1);
            });
        }
    };
    return (React.createElement("div", { className: styles.raiseRequestTab },
        React.createElement("div", { className: "ms-Grid", dir: "ltr" },
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-lg2 ms-md2 ms-sm2" },
                    React.createElement(Link, { to: "/nav" },
                        React.createElement(Icon, { iconName: 'Home', style: { fontSize: '25px', cursor: 'pointer' } })))),
            React.createElement("div", { className: "ms-Grid-row", style: { marginBottom: '20px' } },
                React.createElement("div", { className: "ms-Grid-col ms-lg8 ms-md8 ms-sm8" },
                    React.createElement(Stack, { tokens: stackTokens },
                        React.createElement(Dropdown, { placeholder: "Select Department", label: "Select the Department", options: departmentOptions.length !== 0 ? departmentOptions : noDataDeptOptions, defaultValue: selectedDept, onChange: function (e, selectedDept) { return onChangeDeptHandle(selectedDept); }, key: randomIndex, styles: { dropdown: { width: '100%', height: '34px' } }, className: styles.dropdownStyle })))),
            React.createElement("div", { className: "ms-Grid-row", style: { marginBottom: '20px' } },
                React.createElement("div", { className: "ms-Grid-col ms-lg8 ms-sm8" },
                    React.createElement(Stack, { tokens: stackTokens },
                        React.createElement(Dropdown, { placeholder: "Select Department Category", label: "Select the Department Category", onClick: getDeptCateg, options: departmentCategoryOptions.length !== 0 ?
                                departmentCategoryOptions : noDataDeptOptions, defaultValue: selectedDeptCategory, defaultSelectedKey: " ", onChange: function (e, selectedDeptCategory) { return onChangeDeptCategoryHandle(selectedDeptCategory); }, key: randomIndex, styles: { dropdown: { width: '100%' } } })))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-lg8 ms-sm8" },
                    React.createElement(TextField, { label: "Type your issue", multiline: true, rows: 3, value: requestDescription, onChange: function (requestDescription) { return onChangeRequestDescriptionHandle(requestDescription); } }))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-lg8 ms-sm8" },
                    React.createElement("h4", { style: { fontSize: '14px', fontWeight: 'normal', marginBottom: '0' } }, strings.AddFileLabel),
                    React.createElement("input", { type: "file", multiple: true, style: { width: '100%', border: '1px solid #ddd', paddingTop: '10px', paddingBottom: '10px' }, onChange: function (e) { return onFileAddHandle(e.target.files); }, key: randomIndex }))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-lg2 ms-sm2" },
                    React.createElement(DefaultButton, { className: styles.saveButtonStyle, onClick: function () { return addEmployeeRequest(requestDescription, selectedDept, selectedDeptCategory, fileAddition); } }, strings.SubmitButtonLabel),
                    React.createElement(ToastContainer, null)))),
        React.createElement(Switch, null,
            React.createElement(Route, { exact: true, path: "/nav" },
                React.createElement("div", null,
                    React.createElement(Navbar, __assign({}, props)),
                    React.createElement(Home, __assign({}, props))))),
        React.createElement(ToastContainer, null),
        (toasterNotificationFlag) &&
            Logger.writeJSON("Raised a new request", 1 /* Info */)));
};
export default RaiseRequestTab;
//# sourceMappingURL=RaiseRequestTab.js.map