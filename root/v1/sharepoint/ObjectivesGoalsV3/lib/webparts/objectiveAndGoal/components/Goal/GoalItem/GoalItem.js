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
import styles from './GoalItem.module.scss';
import { DefaultButton } from "@fluentui/react/lib/Button";
import { useState } from "react";
import AddGoalForm from "../GoalForm/AddGoalForm";
debugger;
var GoalItem = function (props) {
    //console.log("GoalItem component contain props ==> ", props + "selectedSectorId => ",props.selectedSectorId);
    var _a = useState(false), isAddGoalFormDisplay = _a[0], setIsAddGoalFormDisplay = _a[1];
    var _b = useState(0), isSelEditId = _b[0], setIsSelEditId = _b[1];
    var _c = useState(0), updatedStatusPercentage = _c[0], setUpdatedStatusPercentage = _c[1];
    var _d = useState(true), isProgressBarDisplay = _d[0], setIsProgressBarDisplay = _d[1];
    var _e = useState(false), isStatusInputDisplay = _e[0], setIsStatusInputDisplay = _e[1];
    var onChangeStatusPercentageHandle = function (selectedStatusPercentage) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = setUpdatedStatusPercentage;
                    return [4 /*yield*/, selectedStatusPercentage.currentTarget.value];
                case 1:
                    _a.apply(void 0, [_b.sent()]);
                    console.log("Updated StatusPercentage for Edit Id ==> ", updatedStatusPercentage);
                    return [2 /*return*/];
            }
        });
    }); };
    var EditButtonClicked = function (sectorId, selectedEditId, statusValue) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            alert("Edit Button Clicked. SectorId is =>" + sectorId + ", selectedEditId =>" + selectedEditId + ", StatusValue =>" + statusValue);
            setIsSelEditId(selectedEditId);
            setIsProgressBarDisplay(false);
            setIsStatusInputDisplay(true);
            return [2 /*return*/];
        });
    }); };
    var UpdateButtonClicked = function (sectorId, selectedEditId, updatedStatusValue) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            alert("Update Status Percentage Button Clicked. SectorId is =>" + sectorId + ", selectedEditId =>" + selectedEditId + ", Updated status Percentage =>" + updatedStatusValue);
            setIsSelEditId(selectedEditId);
            setIsProgressBarDisplay(true);
            setIsStatusInputDisplay(false);
            return [2 /*return*/];
        });
    }); };
    var AddGoalButtonClicked = function (AddGoalButtonName) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            alert(AddGoalButtonName + " Add Goal Button Clicked");
            setIsAddGoalFormDisplay(true);
            return [2 /*return*/];
        });
    }); };
    //TODO : Change the data display pattern and also change the styles from this file to scss files
    return (React.createElement("div", { className: styles.goalItem }, props.sectors.map(function (sector) {
        if (sector.Id == props.selectedSectorId)
            return (React.createElement("div", null, (props.selectedSectorId !== 2) ?
                React.createElement("div", null,
                    React.createElement("div", { className: styles.IntervalSetDisplay },
                        React.createElement("div", { className: styles.IntervalButtonDiv },
                            React.createElement(DefaultButton, { className: styles.IntervalButtons },
                                React.createElement("h3", null, "Monthly Target"))),
                        React.createElement("div", { className: styles.DataDisplay },
                            React.createElement("ul", null, sector.Data.Monthly.map(function (MonthlyTarget, index) {
                                return (React.createElement("li", { key: MonthlyTarget.Id },
                                    React.createElement("div", { style: { marginBottom: '15px' } },
                                        React.createElement("div", { style: { marginBottom: '5px' } },
                                            React.createElement("label", null, MonthlyTarget.Goal)),
                                        isProgressBarDisplay &&
                                            React.createElement("div", null,
                                                " ",
                                                React.createElement("progress", { id: "file", value: MonthlyTarget.StatusPercentage, max: "100" }, " "),
                                                React.createElement("span", { style: { marginLeft: '5px' } },
                                                    MonthlyTarget.StatusPercentage,
                                                    "% "),
                                                (sector.IsEditable) &&
                                                    React.createElement("button", { style: { margin: '0 20px' }, onClick: function () { return EditButtonClicked(sector.Id, MonthlyTarget.Id, MonthlyTarget.StatusPercentage); } }, " Edit ")),
                                        isStatusInputDisplay && (sector.IsEditable) &&
                                            React.createElement("div", null,
                                                " ",
                                                React.createElement("input", { type: "number", id: MonthlyTarget.Id, name: MonthlyTarget.Title, min: "1", max: "100", defaultValue: MonthlyTarget.StatusPercentage, onChange: function (selectedStatusPercentage) { onChangeStatusPercentageHandle(selectedStatusPercentage); } }),
                                                React.createElement("button", { style: { margin: '0 20px' }, onClick: function () { return UpdateButtonClicked(sector.Id, MonthlyTarget.Id, updatedStatusPercentage); } }, " Update  ")))));
                            })))),
                    React.createElement("div", { className: styles.IntervalSetDisplay },
                        React.createElement("div", { className: styles.IntervalButtonDiv },
                            React.createElement(DefaultButton, { className: styles.IntervalButtons },
                                React.createElement("h3", null, "Quarterly Objectives"))),
                        React.createElement("div", { className: styles.DataDisplay },
                            React.createElement("ul", null, sector.Data.Quartly.map(function (QuarterlyObjectives, index) {
                                return (React.createElement("li", { key: QuarterlyObjectives.Id },
                                    React.createElement("div", { style: { marginBottom: '15px' } },
                                        React.createElement("div", { style: { marginBottom: '5px' } },
                                            React.createElement("label", null, QuarterlyObjectives.Goal)),
                                        isProgressBarDisplay &&
                                            React.createElement("div", null,
                                                " ",
                                                React.createElement("progress", { id: "file", value: QuarterlyObjectives.StatusPercentage, max: "100" }, " "),
                                                React.createElement("span", { style: { marginLeft: '5px' } },
                                                    QuarterlyObjectives.StatusPercentage,
                                                    "% "),
                                                (sector.IsEditable) &&
                                                    React.createElement("button", { style: { margin: '0 20px' }, onClick: function () { return EditButtonClicked(sector.Id, QuarterlyObjectives.Id, QuarterlyObjectives.StatusPercentage); } }, " Edit ")),
                                        isStatusInputDisplay && (sector.IsEditable) &&
                                            React.createElement("div", null,
                                                " ",
                                                React.createElement("input", { type: "number", id: QuarterlyObjectives.Id, name: QuarterlyObjectives.Title, min: "1", max: "100", defaultValue: QuarterlyObjectives.StatusPercentage, onChange: function (selectedStatusPercentage) { onChangeStatusPercentageHandle(selectedStatusPercentage); } }),
                                                React.createElement("button", { style: { margin: '0 20px' }, onClick: function () { return UpdateButtonClicked(sector.Id, QuarterlyObjectives.Id, updatedStatusPercentage); } }, " Update  ")))));
                            })))),
                    React.createElement("div", { className: styles.IntervalSetDisplay },
                        React.createElement("div", { className: styles.IntervalButtonDiv },
                            React.createElement(DefaultButton, { className: styles.IntervalButtons },
                                React.createElement("h3", null, "Yearly Goals"))),
                        React.createElement("div", { className: styles.DataDisplay },
                            React.createElement("ul", null, sector.Data.Yearly.map(function (YearlyGoals, index) {
                                return (React.createElement("li", { key: YearlyGoals.Id },
                                    React.createElement("div", { style: { marginBottom: '15px' } },
                                        React.createElement("div", { style: { marginBottom: '5px' } },
                                            React.createElement("label", null, YearlyGoals.Goal)),
                                        isProgressBarDisplay &&
                                            React.createElement("div", null,
                                                " ",
                                                React.createElement("progress", { id: "file", value: YearlyGoals.StatusPercentage, max: "100" }, " "),
                                                React.createElement("span", { style: { marginLeft: '5px' } },
                                                    YearlyGoals.StatusPercentage,
                                                    "% "),
                                                (sector.IsEditable) &&
                                                    React.createElement("button", { style: { margin: '0 20px' }, onClick: function () { return EditButtonClicked(sector.Id, YearlyGoals.Id, YearlyGoals.StatusPercentage); } }, " Edit ")),
                                        isStatusInputDisplay && (sector.IsEditable) &&
                                            React.createElement("div", null,
                                                " ",
                                                React.createElement("input", { type: "number", id: YearlyGoals.Id, name: YearlyGoals.Title, min: "1", max: "100", defaultValue: YearlyGoals.StatusPercentage, onChange: function (selectedStatusPercentage) { onChangeStatusPercentageHandle(selectedStatusPercentage); } }),
                                                React.createElement("button", { style: { margin: '0 20px' }, onClick: function () { return UpdateButtonClicked(sector.Id, YearlyGoals.Id, updatedStatusPercentage); } }, " Update  ")))));
                            })))),
                    React.createElement(DefaultButton, { className: styles.AddGoalButton, onClick: function () { return AddGoalButtonClicked(sector.Title); } },
                        React.createElement("h3", null,
                            "Add ",
                            sector.Title,
                            " Goal")),
                    isAddGoalFormDisplay && React.createElement(AddGoalForm, __assign({}, props)))
                :
                    React.createElement("div", null,
                        React.createElement("div", { className: styles.IntervalSetDisplay },
                            React.createElement("div", { className: styles.IntervalButtonDiv },
                                React.createElement(DefaultButton, { className: styles.IntervalButtons },
                                    React.createElement("h3", null, "Monthly Target"))),
                            React.createElement("div", { className: styles.DataDisplay }, sector.Data.map(function (Department, index) {
                                return (React.createElement("ul", null,
                                    React.createElement("h3", null, Department.DepartmentName),
                                    Department.DepartmentData.Monthly.map(function (MonthlyTarget, index) {
                                        return (React.createElement("li", { key: MonthlyTarget.Id },
                                            React.createElement("div", { style: { marginBottom: '15px' } },
                                                React.createElement("div", { style: { marginBottom: '5px' } },
                                                    React.createElement("label", null, MonthlyTarget.Goal)),
                                                isProgressBarDisplay &&
                                                    React.createElement("div", null,
                                                        " ",
                                                        React.createElement("progress", { id: "file", value: MonthlyTarget.StatusPercentage, max: "100" }, " "),
                                                        React.createElement("span", { style: { marginLeft: '5px' } },
                                                            MonthlyTarget.StatusPercentage,
                                                            "% "),
                                                        (Department.IsEditable) &&
                                                            React.createElement("button", { style: { margin: '0 20px' }, onClick: function () { return EditButtonClicked(sector.Id, MonthlyTarget.Id, MonthlyTarget.StatusPercentage); } }, " Edit ")),
                                                isStatusInputDisplay &&
                                                    React.createElement("div", null,
                                                        " ",
                                                        React.createElement("input", { type: "number", id: MonthlyTarget.Id, name: MonthlyTarget.Title, min: "1", max: "100", defaultValue: MonthlyTarget.StatusPercentage, onChange: function (selectedStatusPercentage) { onChangeStatusPercentageHandle(selectedStatusPercentage); } }),
                                                        React.createElement("button", { style: { margin: '0 20px' }, onClick: function () { return UpdateButtonClicked(sector.Id, MonthlyTarget.Id, updatedStatusPercentage); } }, " Update  ")))));
                                    })));
                            }))),
                        React.createElement("div", { className: styles.IntervalSetDisplay },
                            React.createElement("div", { className: styles.IntervalButtonDiv },
                                React.createElement(DefaultButton, { className: styles.IntervalButtons },
                                    React.createElement("h3", null, "Quarterly Objectives"))),
                            React.createElement("div", { className: styles.DataDisplay }, sector.Data.map(function (Department, index) {
                                return (React.createElement("ul", null,
                                    React.createElement("h3", null, Department.DepartmentName),
                                    Department.DepartmentData.Quartly.map(function (QuarterlyObjectives, index) {
                                        return (React.createElement("li", { key: QuarterlyObjectives.Id },
                                            React.createElement("div", { style: { marginBottom: '15px' } },
                                                React.createElement("div", { style: { marginBottom: '5px' } },
                                                    React.createElement("label", null, QuarterlyObjectives.Goal)),
                                                isProgressBarDisplay &&
                                                    React.createElement("div", null,
                                                        " ",
                                                        React.createElement("progress", { id: "file", value: QuarterlyObjectives.StatusPercentage, max: "100" }, " "),
                                                        " ",
                                                        React.createElement("span", { style: { marginLeft: '5px' } },
                                                            QuarterlyObjectives.StatusPercentage,
                                                            "% "),
                                                        (Department.IsEditable) &&
                                                            React.createElement("button", { style: { margin: '0 20px' }, onClick: function () { return EditButtonClicked(sector.Id, QuarterlyObjectives.Id, QuarterlyObjectives.StatusPercentage); } }, " Edit ")),
                                                isStatusInputDisplay &&
                                                    React.createElement("div", null,
                                                        " ",
                                                        React.createElement("input", { type: "number", id: QuarterlyObjectives.Id, name: QuarterlyObjectives.Title, min: "1", max: "100", defaultValue: QuarterlyObjectives.StatusPercentage, onChange: function (selectedStatusPercentage) { onChangeStatusPercentageHandle(selectedStatusPercentage); } }),
                                                        React.createElement("button", { style: { margin: '0 20px' }, onClick: function () { return UpdateButtonClicked(sector.Id, QuarterlyObjectives.Id, updatedStatusPercentage); } }, " Update  ")))));
                                    })));
                            }))),
                        React.createElement("div", { className: styles.IntervalSetDisplay },
                            React.createElement("div", { className: styles.IntervalButtonDiv },
                                React.createElement(DefaultButton, { className: styles.IntervalButtons },
                                    React.createElement("h3", null, "Yearly Goals"))),
                            React.createElement("div", { className: styles.DataDisplay }, sector.Data.map(function (Department, index) {
                                return (React.createElement("ul", null,
                                    React.createElement("h3", null, Department.DepartmentName),
                                    Department.DepartmentData.Yearly.map(function (YearlyGoals, index) {
                                        return (React.createElement("li", { key: YearlyGoals.Id },
                                            React.createElement("div", { style: { marginBottom: '15px' } },
                                                React.createElement("div", { style: { marginBottom: '5px' } },
                                                    React.createElement("label", null, YearlyGoals.Goal)),
                                                isProgressBarDisplay &&
                                                    React.createElement("div", null,
                                                        " ",
                                                        React.createElement("progress", { id: "file", value: YearlyGoals.StatusPercentage, max: "100" }, " "),
                                                        React.createElement("span", { style: { marginLeft: '5px' } },
                                                            YearlyGoals.StatusPercentage,
                                                            "% "),
                                                        (Department.IsEditable) &&
                                                            React.createElement("button", { style: { margin: '0 20px' }, onClick: function () { return EditButtonClicked(sector.Id, YearlyGoals.Id, YearlyGoals.StatusPercentage); } }, " Edit ")),
                                                isStatusInputDisplay &&
                                                    React.createElement("div", null,
                                                        " ",
                                                        React.createElement("input", { type: "number", id: YearlyGoals.Id, name: YearlyGoals.Title, min: "1", max: "100", defaultValue: YearlyGoals.StatusPercentage, onChange: function (selectedStatusPercentage) { onChangeStatusPercentageHandle(selectedStatusPercentage); } }),
                                                        React.createElement("button", { style: { margin: '0 20px' }, onClick: function () { return UpdateButtonClicked(sector.Id, YearlyGoals.Id, updatedStatusPercentage); } }, " Update  ")))));
                                    })));
                            }))),
                        React.createElement(DefaultButton, { className: styles.AddGoalButton, onClick: function () { return AddGoalButtonClicked(sector.Title); } },
                            React.createElement("h3", null,
                                "Add ",
                                sector.Title,
                                " Goal")),
                        isAddGoalFormDisplay && React.createElement(AddGoalForm, __assign({}, props)))));
        //  props.sectors.map closed          
    })));
};
export default GoalItem;
//# sourceMappingURL=GoalItem.js.map