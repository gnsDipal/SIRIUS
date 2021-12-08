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
var _this = this;
import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import styles from '../AssignedTab.module.scss';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Switch, Route, Link, useParams } from "react-router-dom";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();
import { Icon } from '@fluentui/react/lib/Icon';
import { Dropdown, TextField } from 'office-ui-fabric-react';
import { Stack } from '@fluentui/react/lib/Stack';
import { ToastContainer } from 'react-toastify';
import { Logger } from "@pnp/logging";
import { TooltipHost } from '@fluentui/react/lib/Tooltip';
import AssignedTab from '../AssignedTab';
import { UserContext } from '../../../Main/Main';
import SPDepartmentalServiceData from '../../../../../../services/SPDepartmentalServiceData';
import useMsGraphProvider from '../../../../../../services/msGraphProvider';
import * as microsoftTeams from '@microsoft/teams-js';
// debugger;
var spAssignedServiceData = null;
var stackStyles = { root: { width: 169 } };
//Main function
var AssignedTicketsView = function (props) {
    // let loc = useLocation();
    // const urlSearchParams = new URLSearchParams(loc);
    // const params = Object.fromEntries(urlSearchParams.entries());
    // const search = useLocation().serach;
    // const main = new URLSearchParams(search).get('main');
    // const loc = useLocation();
    // const locMain = new URLSearchParams(loc).get('main');
    var _a = useParams(), Inprocess = _a.Inprocess, dept = _a.dept;
    var mainContext = useContext(UserContext);
    //State variables
    var _b = useState(null), AssignedListData = _b[0], SetAssignedListData = _b[1];
    var _c = useState(false), LoadData = _c[0], SetLoadData = _c[1];
    var _d = useState(0), IndexSelect = _d[0], SetIndexSelect = _d[1];
    var _e = useState(''), CommentData = _e[0], SetCommentData = _e[1];
    var _f = useState([]), StatusOptions = _f[0], SetStatusOptions = _f[1];
    var _g = useState([]), DeptListDropDown = _g[0], SetDeptListDropDown = _g[1];
    var _h = useState(0), StatusCompletedCheck = _h[0], SetStatusCompletedCheck = _h[1];
    var _j = useState(''), DeleteSelectedTicket = _j[0], SetDeleteSelectedTicket = _j[1];
    var _k = useState({
        key: 0,
        text: ''
    }), PassAssignedToUser = _k[0], SetPassAssignedToUser = _k[1];
    var _l = useState(0), IdSelect = _l[0], SetIdSelect = _l[1];
    var _m = useState(0), AssignedNotification = _m[0], SetAssignedNotification = _m[1];
    var _o = useState(0), TicketCount = _o[0], SetTicketCount = _o[1];
    var _p = useState(''), EmailId = _p[0], SetEmailId = _p[1];
    var _q = useState({
        getCurrentUserId: function () { return; },
        getUserId: function (userEmail) { return; },
        createUsersChat: function (requesterId, birthdayPersonId) { return; },
        sendMessage: function (chatId, chatMessage) { return; }
    }), msGraphProvider = _q[0], SetMsGraphProvider = _q[1];
    useEffect(function () {
        init();
    }, []);
    var init = function () {
        //Initialize Microsoft teams sdk
        microsoftTeams.initialize();
        // console.log('main = ' + main);
        // alert('main = ' + main);
        // alert('search = ' + search);
        // alert('loc = ' + loc);
        // alert('loc.main = ' + loc.main);
        spAssignedServiceData = new SPDepartmentalServiceData(mainContext);
        spAssignedServiceData.getAssignToListData(Inprocess, dept)
            .then(function (res) {
            console.log('res = ' + res.length);
            SetAssignedListData(res);
            SetLoadData(true);
            console.log('AssignedListData = ' + AssignedListData);
            fetchMsGraphProvider();
        });
        if (mainContext.sdks.microsoftTeams) {
            mainContext.sdks.microsoftTeams.context.subEntityId = "/assigned";
            alert("mainContext.sdks.microsoftTeams.context.subEntityId = " + mainContext.sdks.microsoftTeams.context.subEntityId);
            alert("mainContext.sdks.microsoftTeams.context.entityId = " + mainContext.sdks.microsoftTeams.context.entityId);
        }
    };
    var fetchMsGraphProvider = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = SetMsGraphProvider;
                    return [4 /*yield*/, useMsGraphProvider(mainContext.msGraphClientFactory)];
                case 1:
                    _a.apply(void 0, [_b.sent()]);
                    return [2 /*return*/];
            }
        });
    }); };
    function onTextFieldClickHandle(ticketNumber) {
        SetIndexSelect(ticketNumber);
    }
    function inputComment(event) {
        SetCommentData(event.target.value);
    }
    function loadStatusList() {
        SetStatusOptions([
            { key: 1, text: 'In Process' },
            { key: 2, text: 'Completed' },
        ]);
    }
    function onStatusChangeHandle(selectedStatus, ticketNumber, department, idNumber, authorId) {
        console.log(selectedStatus, ticketNumber);
        if (selectedStatus.text === 'Completed') {
            this.getEmail(authorId);
            SetDeptListDropDown([]);
            SetStatusCompletedCheck(2);
            SetDeleteSelectedTicket(ticketNumber);
            SetPassAssignedToUser({
                key: null,
                text: ''
            });
        }
        if (selectedStatus.text === 'In Process') {
            spAssignedServiceData.getDeptOptionsByGrpName(department)
                .then(function (data) {
                SetDeptListDropDown(data);
                SetIdSelect(idNumber);
                SetStatusCompletedCheck(1);
                SetDeleteSelectedTicket(ticketNumber);
            });
        }
    }
    function getUserByDept(control, reAssignTo, department, idNumber) {
        if (StatusCompletedCheck === 1) {
            spAssignedServiceData.getDeptOptionsByGrpName(department)
                .then(function (data) {
                console.log(data);
                SetDeptListDropDown(data);
                SetIdSelect(idNumber);
            });
        }
        else {
            SetDeptListDropDown([]);
        }
    }
    function onUserSelect(userName, selectedName, ticketNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var AssignedUserEmailId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(userName, selectedName);
                        return [4 /*yield*/, spAssignedServiceData.getEmailId(selectedName.key)];
                    case 1:
                        AssignedUserEmailId = _a.sent();
                        SetEmailId(AssignedUserEmailId);
                        SetPassAssignedToUser(selectedName);
                        SetDeleteSelectedTicket(ticketNumber);
                        return [2 /*return*/];
                }
            });
        });
    }
    function onSubmitDropDownHandle(commentData, idRequest, assignedToUser, ticketNumberCheck, department) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (DeleteSelectedTicket === ticketNumberCheck) {
                    if (assignedToUser.text != '') {
                        // SetEmailId(AssignedUserEmailId.Email);
                        SetAssignedNotification(1);
                        spAssignedServiceData.addReAssignedToData(assignedToUser, idRequest, commentData, ticketNumberCheck).then(function (r) {
                            var items = AssignedListData.filter(function (item) { return item.dataId !== idRequest; });
                            _sendReAssignedTeamsMessage(EmailId, ticketNumberCheck, department);
                            SetAssignedListData(items);
                            SetDeptListDropDown([]);
                            SetTicketCount(TicketCount - 1);
                            SetPassAssignedToUser({
                                key: null,
                                text: ''
                            });
                            SetStatusCompletedCheck(0);
                            SetStatusOptions([]);
                            SetCommentData('');
                            SetAssignedNotification(0);
                        });
                    }
                    if (assignedToUser.text === '' && (this.state.statusCompletedCheck === 2)) {
                        _sendCompletedStatusTeamsMessage(EmailId, ticketNumberCheck);
                        SetAssignedNotification(1);
                        spAssignedServiceData.getCompletedWithStatusUpdate(idRequest, commentData).then(function (r) {
                            var items = AssignedListData.filter(function (item) { return item.dataId !== idRequest; });
                            //Setting state variables
                            SetAssignedListData(items);
                            SetDeptListDropDown([]);
                            SetTicketCount(TicketCount - 1);
                            SetPassAssignedToUser({
                                key: null,
                                text: ''
                            });
                            SetStatusCompletedCheck(0);
                            SetStatusOptions([]);
                            SetCommentData('');
                            SetAssignedNotification(0);
                        });
                    }
                }
                return [2 /*return*/];
            });
        });
    }
    // &path=${loc.pathname}
    var _sendReAssignedTeamsMessage = function (ToEmailId, ticketNumber, department) { return __awaiter(void 0, void 0, void 0, function () {
        var currentUserId, userIdToSendMessage, chatOfUser, url, message, chatMessage, currentUserId, userIdToSendMessage, chatOfUser, url, message, chatMessage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!mainContext.sdks.microsoftTeams) return [3 /*break*/, 5];
                    return [4 /*yield*/, msGraphProvider.getCurrentUserId()];
                case 1:
                    currentUserId = _a.sent();
                    return [4 /*yield*/, msGraphProvider.getUserId(ToEmailId)];
                case 2:
                    userIdToSendMessage = _a.sent();
                    return [4 /*yield*/, msGraphProvider.createUsersChat(currentUserId, userIdToSendMessage)];
                case 3:
                    chatOfUser = _a.sent();
                    url = encodeURI("https://teams.microsoft.com/l/entity/9c81173a-1b57-4a3c-9b5e-0a97015460f6/" + mainContext.sdks.microsoftTeams.context.entityId + "?context={\"subEntityId\":" + mainContext.sdks.microsoftTeams.context.subEntityId + "&path=main,\"channelId\":" + chatOfUser + "}");
                    message = "\n    <div style=\"border-style:solid; border-width:1px; padding:10px;\">\n    <div>Departmental Request Application</div>\n    <hr />\n    <div style=\"background: #eaeaff; font-weight: bold \">\n        <a href=\"" + url + "\">Ticket number: " + ticketNumber + " has been reassigned to you</a>\n    </div>\n    </div><br />\n    ";
                    chatMessage = {
                        body: {
                            contentType: "html",
                            content: message
                        }
                    };
                    return [4 /*yield*/, msGraphProvider.sendMessage(chatOfUser, chatMessage)
                            .then(function (result) {
                            console.log(result);
                        })
                            .catch(function (error) {
                            console.log(error);
                        })];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 5: return [4 /*yield*/, msGraphProvider.getCurrentUserId()];
                case 6:
                    currentUserId = _a.sent();
                    return [4 /*yield*/, msGraphProvider.getUserId(ToEmailId)];
                case 7:
                    userIdToSendMessage = _a.sent();
                    return [4 /*yield*/, msGraphProvider.createUsersChat(currentUserId, userIdToSendMessage)];
                case 8:
                    chatOfUser = _a.sent();
                    url = mainContext.pageContext.web.absoluteUrl + "#/assigned/In Process/" + department;
                    message = "\n    <div style=\"border-style:solid; border-width:1px; padding:10px;\">\n    <div>Departmental Request Application</div>\n    <hr />\n    <div style=\"background: #eaeaff; font-weight: bold \">\n        <a href=\"" + url + "\">Ticket number: " + ticketNumber + " has been reassigned to you</a>\n    </div>\n    </div><br />\n    ";
                    chatMessage = {
                        body: {
                            contentType: "html",
                            content: message
                        }
                    };
                    return [4 /*yield*/, msGraphProvider.sendMessage(chatOfUser, chatMessage)
                            .then(function (result) {
                            console.log(result);
                        })
                            .catch(function (error) {
                            console.log(error);
                        })];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10: return [2 /*return*/];
            }
        });
    }); };
    var _sendCompletedStatusTeamsMessage = function (ToEmailId, ticketNumber) { return __awaiter(void 0, void 0, void 0, function () {
        var currentUserId, userIdToSendMessage, chatOfUser, url, message, chatMessage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, msGraphProvider.getCurrentUserId()];
                case 1:
                    currentUserId = _a.sent();
                    return [4 /*yield*/, msGraphProvider.getUserId(ToEmailId)];
                case 2:
                    userIdToSendMessage = _a.sent();
                    return [4 /*yield*/, msGraphProvider.createUsersChat(currentUserId, userIdToSendMessage)];
                case 3:
                    chatOfUser = _a.sent();
                    url = "" + mainContext.pageContext.web.absoluteUrl;
                    message = "\n    <div style=\"border-style:solid; border-width:1px; padding:10px;\">\n    <div>Departmental Request Application</div>\n    <hr />\n    <div style=\"background: #eaeaff; font-weight: bold \">\n        <span>The request " + ticketNumber + " you created has been marked as complete.</span>\n    </div>\n    </div><br />\n    ";
                    chatMessage = {
                        body: {
                            contentType: "html",
                            content: message
                        }
                    };
                    return [4 /*yield*/, msGraphProvider.sendMessage(chatOfUser, chatMessage)
                            .then(function (result) {
                            console.log(result);
                        })
                            .catch(function (error) {
                            console.log(error);
                        })];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: styles.assignedTab },
        React.createElement("div", { className: "ms-Grid", dir: "ltr" },
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-lg4 ms-sm4" },
                    React.createElement(Link, { to: "/assigned" },
                        React.createElement(Icon, { iconName: 'NavigateBack', className: styles.iconSize }))),
                React.createElement("div", { className: "ms-Grid-col ms-lg4 ms-sm4" },
                    React.createElement(TooltipHost, { content: "Tickets" },
                        React.createElement(Icon, { iconName: 'Assign', className: styles.iconSize }))),
                React.createElement("div", { className: "ms-Grid-col ms-lg4 ms-sm4" },
                    React.createElement(TooltipHost, { content: "All" },
                        React.createElement(Icon, { iconName: 'ViewAll', className: styles.iconSize })))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-lg12 ms-sm12" },
                    React.createElement("div", { className: styles.tableAutoFlow },
                        React.createElement("table", { className: styles.tableSet },
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("th", null, strings.TicketNumberLabel),
                                    React.createElement("th", null, strings.RaisedByLabel),
                                    React.createElement("th", null, strings.IssueDateLabel),
                                    React.createElement("th", null, strings.DescriptionLabel),
                                    React.createElement("th", null, strings.CategoryLabel),
                                    React.createElement("th", null, strings.CommentLabel),
                                    React.createElement("th", null, strings.ActionLabel),
                                    React.createElement("th", null, strings.AttachmentFromRequesterLabel),
                                    React.createElement("th", null, strings.AttachmentFromDispatcherLabel),
                                    React.createElement("th", null))),
                            React.createElement("tbody", null, LoadData &&
                                AssignedListData.map(function (res, index) {
                                    var issuedDate = new Date(res.issueDate).toLocaleDateString();
                                    return (React.createElement("tr", null,
                                        React.createElement("td", null, res.ticketNumber),
                                        React.createElement("td", null, res.raisedBy),
                                        React.createElement("td", null, issuedDate),
                                        React.createElement("td", null, res.description),
                                        React.createElement("td", null, res.category),
                                        React.createElement("td", { id: "" + index },
                                            React.createElement(Stack, { horizontal: true, styles: stackStyles },
                                                React.createElement(TextField, { multiline: true, rows: 3, key: index, 
                                                    // ref={textInput}
                                                    type: "text", 
                                                    // accessKey={res.ticketNumber}
                                                    onClick: function () { return onTextFieldClickHandle(res.dataId); }, defaultValue: "", value: (IndexSelect === res.dataId) ?
                                                        CommentData : '', onChange: inputComment }))),
                                        React.createElement("td", null,
                                            React.createElement(Dropdown, { placeholder: 'Select Status', label: 'Status', options: StatusOptions, defaultSelectedKey: " ", onClick: function () { return loadStatusList(); }, onChange: function (e, selectedStatusOption) { return onStatusChangeHandle(selectedStatusOption, res.ticketNumber, res.supportDeptName, res.dataId, res.authorId); } }),
                                            React.createElement(Dropdown, { id: res.ticketNumber + '_dropDown', placeholder: 'Select User', label: 'ReAssigned To', defaultSelectedKey: " ", onClick: function (e) { return getUserByDept(res.ticketNumber + '_dropDown', _this, res.supportDeptName, res.dataId); }, options: DeptListDropDown, onChange: function (e, selectedName) { return onUserSelect(e, selectedName, res.ticketNumber); } })),
                                        React.createElement("td", null, res.attachmentFileName.map(function (r, i) {
                                            if (r.FileName.substring(0, 3) === "REQ") {
                                                return (React.createElement("a", { href: r.ServerRelativeUrl },
                                                    " ",
                                                    r.FileName));
                                            }
                                        })),
                                        React.createElement("td", null, res.attachmentFileName.map(function (r, i) {
                                            if (r.FileName.substring(0, 4) === "DISP") {
                                                return (React.createElement("a", { href: r.ServerRelativeUrl },
                                                    " ",
                                                    r.FileName));
                                            }
                                        })),
                                        React.createElement("td", null,
                                            React.createElement(Icon, { iconName: "Save", className: styles.saveIcon, onClick: function (e) { return onSubmitDropDownHandle(CommentData, res.dataId, PassAssignedToUser, res.ticketNumber, res.department); } }))));
                                }))))),
                React.createElement(ToastContainer, null),
                (AssignedNotification === 1) &&
                    Logger.writeJSON("Ticket assigned", 1 /* Info */))),
        React.createElement(Switch, null,
            React.createElement(Route, { exact: true, path: "/assigned", component: function (props) { return React.createElement(AssignedTab, __assign({}, props)); } }))));
};
export default AssignedTicketsView;
//# sourceMappingURL=AssignedTicketsView.js.map