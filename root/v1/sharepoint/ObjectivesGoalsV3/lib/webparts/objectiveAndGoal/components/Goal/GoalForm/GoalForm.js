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
debugger;
var GoalForm = function (props) {
    // const handleSectorTab = async(e, id) => {    
    //    props.handleSectorChange(id);
    // };
    console.log(props + "Id of Edit Button =>", props.handleEditButtonId);
    var stackTokens = { childrenGap: 50 };
    var stackStyles = { root: { width: 650 } };
    var columnProps = {
        tokens: { childrenGap: 10 },
        styles: { root: { width: 300, textAlign: "Left" } },
    };
    var _a = useState(true), isEditGoalFormDisplay = _a[0], setIsEditGoalFormDisplay = _a[1];
    var SaveEditGoalForm = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            alert(" Save Edit Goal Form Button Clicked");
            setIsEditGoalFormDisplay(false);
            return [2 /*return*/];
        });
    }); };
    var EditFormCancelButtonClicked = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            alert("Edit Form Cancel Button Clicked");
            setIsEditGoalFormDisplay(false);
            return [2 /*return*/];
        });
    }); };
    // const getEditFormIdData = async() => {
    //      let EditFormIdData =[];
    //      let sectorsArrayIndex = props.selectedSectorId-1;
    //      { props.sectors.map((sector, index)=>{
    //         if (sector.Id == props.selectedSectorId ){
    //               //Check the Id in the Monthly Interval Data
    //                {sector.Data.Monthly.map( (MonthlyTarget, index)=> {
    //                     if (MonthlyTarget.Id ===props.handleEditButtonId)                    
    //                     { EditFormIdData.push({
    //                          Id: MonthlyTarget.Id,
    //                          Title: MonthlyTarget.Title,
    //                          IsActive:MonthlyTarget.IsActive,
    //                          Goal:MonthlyTarget.Goal,
    //                          Interval:MonthlyTarget.Interval,
    //                          StatusPercentage:MonthlyTarget.StatusPercentage
    //                          })
    //                     }
    //                })}
    //                //Check the Id in the Monthly Interval Data
    //                {sector.Data.QuarterlyObjectives.map( (QuarterlyObjectives, index)=> {
    //                     if (QuarterlyObjectives.Id ===props.handleEditButtonId)
    //                     { EditFormIdData.push({
    //                          Id: QuarterlyObjectives.Id,
    //                          Title: QuarterlyObjectives.Title,
    //                          IsActive:QuarterlyObjectives.IsActive,
    //                          Goal:QuarterlyObjectives.Goal,
    //                          Interval:QuarterlyObjectives.Interval,
    //                          StatusPercentage:QuarterlyObjectives.StatusPercentage
    //                          })
    //                     }
    //                })}
    //                //Check the Id in the Monthly Interval Data
    //                {sector.Data.Yearly.map( (Yearly, index)=> {
    //                     if (Yearly.Id ===props.handleEditButtonId)
    //                     { EditFormIdData.push({
    //                          Id: Yearly.Id,
    //                          Title: Yearly.Title,
    //                          IsActive:Yearly.IsActive,
    //                          Goal:Yearly.Goal,
    //                          Interval:Yearly.Interval,
    //                          StatusPercentage:Yearly.StatusPercentage
    //                          })
    //                     }
    //                })}
    //           } 
    //           return EditFormIdData;
    //      })}
    //   };
    return (React.createElement("div", { className: styles.goalForm }, isEditGoalFormDisplay &&
        React.createElement("div", { className: styles.FormDisplay },
            React.createElement("div", { className: "ms-Grid", dir: "ltr" },
                React.createElement("h1", null, " Edit Goal Form Open")),
            React.createElement("div", { className: "ms-Grid-row", style: { marginBottom: '20px' } },
                React.createElement("div", { className: "ms-Grid-col ms-lg8 ms-md8 ms-sm8" },
                    React.createElement(Stack, { horizontal: true, tokens: stackTokens, styles: stackStyles },
                        React.createElement(Stack, __assign({}, columnProps),
                            React.createElement(TextField, { label: "Title", id: "TitleName", disabled: true, placeholder: "EditGoalTitle" }))))),
            React.createElement("div", { className: "ms-Grid-row", style: { marginBottom: '20px' } },
                React.createElement("div", { className: "ms-Grid-col ms-lg8 ms-md8 ms-sm8" },
                    React.createElement(Stack, { horizontal: true, tokens: stackTokens, styles: stackStyles },
                        React.createElement(Stack, __assign({}, columnProps),
                            React.createElement(TextField, { label: "Goal", id: "GoalsInfo", multiline: true, rows: 3, disabled: true, placeholder: "Goal Information for Edit Button" }))))),
            React.createElement("div", { className: "ms-Grid-row", style: { marginBottom: '20px' } },
                React.createElement("div", { className: "ms-Grid-col ms-lg8 ms-sm8" },
                    React.createElement(Stack, { horizontal: true, tokens: stackTokens, styles: stackStyles },
                        React.createElement(Stack, __assign({}, columnProps),
                            React.createElement(TextField, { label: "Interval", id: "Interval", placeholder: "Interval name of seleced Id for Edit Button", disabled: true }))))),
            React.createElement("div", { className: "ms-Grid-row", style: { marginBottom: '20px' } },
                React.createElement("div", { className: "ms-Grid-col ms-lg8 ms-md8 ms-sm8" },
                    React.createElement(Stack, { horizontal: true, tokens: stackTokens, styles: stackStyles },
                        React.createElement(Stack, __assign({}, columnProps),
                            React.createElement(TextField, { label: "StatusPercentage", id: "StatusPercentage", placeholder: "Change the status Percentage" }))))),
            React.createElement("div", { className: "ms-Grid-row", style: { marginBottom: '20px' } },
                React.createElement("div", { className: "ms-Grid-col ms-lg8 ms-sm8" },
                    React.createElement(PrimaryButton, { onClick: function () { SaveEditGoalForm(); } },
                        React.createElement("h3", null, "Save")),
                    React.createElement(DefaultButton, { onClick: function () { EditFormCancelButtonClicked(); } },
                        React.createElement("h3", null, "Cancel")))))));
};
export default GoalForm;
//# sourceMappingURL=GoalForm.js.map