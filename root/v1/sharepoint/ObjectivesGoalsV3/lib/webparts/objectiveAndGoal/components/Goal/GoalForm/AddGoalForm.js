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
import * as React from "react";
import styles from './GoalForm.module.scss';
import { useState } from "react";
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack } from '@fluentui/react/lib/Stack';
import { Dropdown } from '@fluentui/react/lib/Dropdown';
debugger;
var AddGoalForm = function (props) {
    // const handleSectorTab = async(e, id) => {    
    //    props.handleSectorChange(id);
    // };   
    var stackTokens = { childrenGap: 50 };
    var stackStyles = { root: { width: 650 } };
    var columnProps = {
        tokens: { childrenGap: 10 },
        styles: { root: { width: 300, textAlign: "Left" } },
    };
    var IntervalOptions = [
        // { key: 'Interval', text: 'Interval', itemType: DropdownMenuItemType.Header },
        { key: 'Interval', text: 'Monthly Target' },
        { key: 'Interval', text: 'Quarterly Objectives' },
        { key: 'Interval', text: 'Yearly Goals' }
    ];
    var _a = useState(true), isAddGoalFormDisplay = _a[0], setIsAddGoalFormDisplay = _a[1];
    var _b = useState(""), isSelectedTitle = _b[0], setIsSelectedTitle = _b[1];
    var _c = useState(""), isSelectedGoal = _c[0], setIsSelectedGoal = _c[1];
    var _d = useState(""), isSelectedInterval = _d[0], setIsSelectedInterval = _d[1];
    var _e = useState(0), isSelectedStatusPercentage = _e[0], setIsSelectedStatusPercentage = _e[1];
    var onChangeGoalTitleHandle = function (selectedTitle) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = setIsSelectedTitle;
                    return [4 /*yield*/, selectedTitle.currentTarget.value];
                case 1:
                    _a.apply(void 0, [_b.sent()]);
                    console.log("selectedTitle in Add Goal Form ==> ", isSelectedTitle);
                    return [2 /*return*/];
            }
        });
    }); };
    var onChangeGoalHandle = function (selectedGoal) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = setIsSelectedGoal;
                    return [4 /*yield*/, selectedGoal.currentTarget.value];
                case 1:
                    _a.apply(void 0, [_b.sent()]);
                    console.log("selectedGoal in Add Goal Form ==> ", isSelectedGoal);
                    return [2 /*return*/];
            }
        });
    }); };
    var onChangeIntervalHandle = function (selectedInterval) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = setIsSelectedInterval;
                    return [4 /*yield*/, selectedInterval.text];
                case 1:
                    _a.apply(void 0, [_b.sent()]);
                    console.log("selectedInterval in Add Goal Form ==> ", isSelectedInterval);
                    return [2 /*return*/];
            }
        });
    }); };
    var onChangeStatusPercentageHandle = function (selectedStatusPercentage) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = setIsSelectedStatusPercentage;
                    return [4 /*yield*/, selectedStatusPercentage.currentTarget.value];
                case 1:
                    _a.apply(void 0, [_b.sent()]);
                    console.log("selectedStatusPercentage in Add Goal Form ==> ", isSelectedStatusPercentage);
                    return [2 /*return*/];
            }
        });
    }); };
    var SaveAddGoalForm = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            alert(" Save Add Goal Form Button Clicked");
            setIsAddGoalFormDisplay(false);
            return [2 /*return*/];
        });
    }); };
    var AddGoalFormCancelButtonClicked = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            alert("Add Goal Form Cancel Button Clicked");
            setIsAddGoalFormDisplay(false);
            return [2 /*return*/];
        });
    }); };
    return (React.createElement("div", { className: styles.goalForm }, isAddGoalFormDisplay &&
        React.createElement("div", { className: styles.FormDisplay },
            React.createElement("div", { className: "ms-Grid", dir: "ltr" },
                React.createElement("h1", null, " Add Goal Form Open")),
            React.createElement("div", { className: "ms-Grid-row", style: { marginBottom: '20px' } },
                React.createElement("div", { className: "ms-Grid-col ms-lg8 ms-md8 ms-sm8" },
                    React.createElement(Stack, { horizontal: true, tokens: stackTokens, styles: stackStyles },
                        React.createElement(Stack, __assign({}, columnProps),
                            React.createElement(TextField, { label: "Title", id: "TitleName", onChange: function (selectedTitle) { onChangeGoalTitleHandle(selectedTitle); } }))))),
            React.createElement("div", { className: "ms-Grid-row", style: { marginBottom: '20px' } },
                React.createElement("div", { className: "ms-Grid-col ms-lg8 ms-md8 ms-sm8" },
                    React.createElement(Stack, { horizontal: true, tokens: stackTokens, styles: stackStyles },
                        React.createElement(Stack, __assign({}, columnProps),
                            React.createElement(TextField, { label: "Goal", id: "GoalsInfo", multiline: true, rows: 3, onChange: function (selectedGoal) { onChangeGoalHandle(selectedGoal); } }))))),
            React.createElement("div", { className: "ms-Grid-row", style: { marginBottom: '20px' } },
                React.createElement("div", { className: "ms-Grid-col ms-lg8 ms-sm8" },
                    React.createElement(Stack, { tokens: stackTokens },
                        React.createElement(Dropdown, { placeholder: "Select an Interval", label: "Interval", options: IntervalOptions, onChange: function (e, selectedInterval) { onChangeIntervalHandle(selectedInterval); }, 
                            //styles={dropdownStyles}
                            styles: { dropdown: { width: 300 } } })))),
            React.createElement("div", { className: "ms-Grid-row", style: { marginBottom: '20px' } },
                React.createElement("div", { className: "ms-Grid-col ms-lg8 ms-md8 ms-sm8" },
                    React.createElement(Stack, { horizontal: true, tokens: stackTokens, styles: stackStyles },
                        React.createElement(Stack, __assign({}, columnProps),
                            React.createElement(TextField, { label: "StatusPercentage", id: "StatusPercentage", placeholder: "Add Percentage for status", onChange: function (selectedStatusPercentage) { onChangeStatusPercentageHandle(selectedStatusPercentage); } }))))),
            React.createElement("div", { className: "ms-Grid-row", style: { marginBottom: '20px' } },
                React.createElement("div", { className: "ms-Grid-col ms-lg8 ms-sm8" },
                    React.createElement(PrimaryButton, { onClick: function () { SaveAddGoalForm(); } },
                        React.createElement("h3", null, "Save")),
                    React.createElement(DefaultButton, { onClick: function () { AddGoalFormCancelButtonClicked(); } },
                        React.createElement("h3", null, "Cancel")))))));
};
export default AddGoalForm;
//# sourceMappingURL=AddGoalForm.js.map