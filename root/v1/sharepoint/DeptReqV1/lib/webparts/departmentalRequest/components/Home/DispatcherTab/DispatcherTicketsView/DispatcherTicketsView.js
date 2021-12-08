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
import * as strings from 'DepartmentalRequestWebPartStrings';
import styles from '../DispatcherTab.module.scss';
import { Switch, Route, Link, useParams } from "react-router-dom";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();
import { Icon } from '@fluentui/react/lib/Icon';
import { Dropdown } from 'office-ui-fabric-react';
import { ToastContainer } from 'react-toastify';
import { Logger } from "@pnp/logging";
import { UserContext } from '../../../Main/Main';
import SPDepartmentalServiceData from '../../../../../../services/SPDepartmentalServiceData';
import * as microsoftTeams from '@microsoft/teams-js';
import DispatcherTab from '../DispatcherTab';
var stackStyles = { root: { width: 169 } };
var spDispatcherServiceData = null;
var DispatcherTicketsView = function () {
    var dept = useParams().dept;
    var mainContext = useContext(UserContext);
    //state variables
    var _a = useState([]), dispatcherDetails = _a[0], setDispatcherDetails = _a[1];
    var _b = useState(false), unlockDispatcherData = _b[0], setUnlockDispatcherData = _b[1];
    var _c = useState([]), deptListDropDown = _c[0], setDeptListDropDown = _c[1];
    var _d = useState(0), idSelect = _d[0], setIdSelect = _d[1];
    var _e = useState({ key: 0, text: '' }), passAssignedToUser = _e[0], setPassAssignedToUser = _e[1];
    var _f = useState(''), deleteSelectedTicket = _f[0], setDeleteSelectedTicket = _f[1];
    var _g = useState(0), randomIndex = _g[0], setRandomIndex = _g[1];
    var _h = useState(null), dispatcherFileAddition = _h[0], setDispatcherFileAddition = _h[1];
    var _j = useState(0), dispatcherNotification = _j[0], setDispatcherNotification = _j[1];
    useEffect(function () {
        init();
    }, []);
    var init = function () {
        //Initialize Microsoft teams sdk
        microsoftTeams.initialize();
        spDispatcherServiceData = new SPDepartmentalServiceData(mainContext);
        spDispatcherServiceData.getDispatcherTicketData(dept)
            .then(function (res) {
            setDispatcherDetails(res);
            setUnlockDispatcherData(true); // Condition for displaying table data
        });
    };
    var getUserByDept = function (control, reAssignTo, department, idNumber) {
        // grpName= department;
        // this.loadDepartmentOptions();
        spDispatcherServiceData.getDepartmentOptionsByGroupName(department)
            .then(function (data) {
            setDeptListDropDown(data); // dept list dropdown
            setIdSelect(idNumber); // setting the current selected Id
        });
    };
    var onUserSelect = function (userName, selectedName, ticketNumber) {
        setPassAssignedToUser(selectedName);
        setDeleteSelectedTicket(ticketNumber);
    };
    var onDispatcherFileAddition = function (dispatcherFileAdd) {
        setDispatcherFileAddition(dispatcherFileAdd);
    };
    var onSubmitDropDownHandle = function (newPeoplePicker, idRequest, assignedToUser, ticketNumberCheck, raisedBy) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(deleteSelectedTicket === ticketNumberCheck)) return [3 /*break*/, 2];
                    setDispatcherNotification(1);
                    return [4 /*yield*/, spDispatcherServiceData.addMultipleDispatcherAttachmentLoop(idRequest, dispatcherFileAddition)
                            .then(function (r) {
                            spDispatcherServiceData.addDispatcherReAssign(assignedToUser, idRequest, raisedBy)
                                .then(function (r) {
                                var items = dispatcherDetails.filter(function (item) { return item.dataId !== idRequest; });
                                // this._sendMessage(this.state.eMailId,raisedBy);
                                setDispatcherDetails(items);
                                setDeptListDropDown([]);
                                setPassAssignedToUser({ key: null, text: '' });
                                setRandomIndex(Math.floor(Math.random() * 6) + 1);
                                setDispatcherNotification(0);
                            });
                        })];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: styles.dispatcherTab },
        React.createElement("div", { className: "ms-Grid", dir: "ltr" },
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-lg4 ms-sm4" },
                    React.createElement(Link, { to: "/dispatcher" },
                        React.createElement(Icon, { iconName: 'NavigateBack', className: styles.iconSize })))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-lg12 ms-sm12" },
                    React.createElement("div", { style: { overflowX: 'auto' } },
                        React.createElement("table", { className: styles.tableSet },
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("th", null, strings.TicketNumberLabel),
                                    React.createElement("th", null, strings.RaisedByLabel),
                                    React.createElement("th", null, strings.IssueDateLabel),
                                    React.createElement("th", null, strings.DescriptionLabel),
                                    React.createElement("th", null, strings.AssignToLabel),
                                    React.createElement("th", null, strings.AttachmentFromRequesterLabel),
                                    React.createElement("th", null, strings.AttachmentFromDispatcherLabel),
                                    React.createElement("th", null, strings.UpdateLabel))),
                            React.createElement("tbody", null, dispatcherDetails.map(function (res, index) {
                                var issuedDate = new Date(res.issueDate).toLocaleDateString();
                                return (React.createElement("tr", null,
                                    React.createElement("td", null, res.ticketNumber),
                                    React.createElement("td", null, res.raisedBy),
                                    React.createElement("td", null, issuedDate),
                                    React.createElement("td", null, res.description),
                                    React.createElement("td", null,
                                        React.createElement(Dropdown, { id: res.ticketNumber + '_dropDown', placeholder: 'Select option', defaultSelectedKey: " ", onClick: function (e) { return getUserByDept(res.ticketNumber + '_dropDown', res.reAssignedTo, res.supportDeptName, res.dataId); }, options: deptListDropDown, onChange: function (e, selectedName) { return onUserSelect(e, selectedName, res.ticketNumber); } })),
                                    React.createElement("td", { key: index }, res.attachmentFileName.map(function (r, i) {
                                        return (React.createElement("a", { href: r.ServerRelativeUrl },
                                            " ", r.FileName + "\n"));
                                    })),
                                    React.createElement("td", null,
                                        React.createElement("input", { multiple: true, type: "file", className: styles.dispatcherAttachmentInput, key: randomIndex, onChange: function (e) { return onDispatcherFileAddition(e.target.files); } })),
                                    React.createElement("td", null,
                                        React.createElement(Icon, { iconName: "Save", className: styles.saveIcon, onClick: function (e) { return onSubmitDropDownHandle(e, res.dataId, passAssignedToUser, res.ticketNumber, res.raisedBy); } }))));
                            })))))),
            React.createElement(ToastContainer, null),
            (dispatcherNotification === 1) &&
                Logger.writeJSON("Ticket dispatched", 1 /* Info */)),
        React.createElement(Switch, null,
            React.createElement(Route, { exact: true, path: "/dispatcher", component: function () { return React.createElement(DispatcherTab, null); } }))));
};
export default DispatcherTicketsView;
//# sourceMappingURL=DispatcherTicketsView.js.map