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
import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import styles from '../AssignedTab.module.scss';
import { Switch, Route, Link, useParams } from "react-router-dom";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();
import { Icon } from '@fluentui/react/lib/Icon';
import AssignedTab from '../AssignedTab';
import { UserContext } from '../../../Main/Main';
import SPDepartmentalServiceData from '../../../../../../services/SPDepartmentalServiceData';
// debugger;
var spAssignedServiceData = null;
var stackStyles = { root: { width: 169 } };
//Main function
var AssignedClosedTicketsView = function () {
    var _a = useParams(), Closed = _a.Closed, dept = _a.dept;
    var mainContext = useContext(UserContext);
    //State variables
    var _b = useState(null), AssignedClosedListData = _b[0], SetAssignedClosedListData = _b[1];
    var _c = useState(false), LoadData = _c[0], SetLoadData = _c[1];
    useEffect(function () {
        init();
    }, []);
    var init = function () {
        spAssignedServiceData = new SPDepartmentalServiceData(mainContext);
        spAssignedServiceData.getAssignToListData(Closed, dept)
            .then(function (res) {
            console.log('res = ' + res.length);
            SetAssignedClosedListData(res);
            SetLoadData(true);
        });
    };
    return (React.createElement("div", { className: styles.assignedTab },
        React.createElement("div", { className: "ms-Grid", dir: "ltr" },
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-lg4 ms-sm4" },
                    React.createElement(Link, { to: "/assigned" },
                        React.createElement(Icon, { iconName: 'NavigateBack', style: { fontSize: '25px', cursor: 'pointer' } })))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-lg12 ms-sm12" },
                    React.createElement("div", { style: { overflowX: 'auto' } },
                        React.createElement("table", { className: styles.tableSet },
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("th", null, "Ticket Number"),
                                    React.createElement("th", null, "Raised By"),
                                    React.createElement("th", null, "Issue Date"),
                                    React.createElement("th", null, "Description"),
                                    React.createElement("th", null, "Category"),
                                    React.createElement("th", null, "Attachment from Requester"),
                                    React.createElement("th", null, "Attachment from Dispatcher"))),
                            React.createElement("tbody", null, (LoadData) &&
                                AssignedClosedListData.map(function (res, index) {
                                    var issuedDate = new Date(res.issueDate).toLocaleDateString();
                                    return (React.createElement("tr", null,
                                        React.createElement("td", null, res.ticketNumber),
                                        React.createElement("td", null, res.raisedBy),
                                        React.createElement("td", null, issuedDate),
                                        React.createElement("td", null, res.description),
                                        React.createElement("td", null, res.category),
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
                                        }))));
                                })))))),
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, path: "/assigned", component: function (props) { return React.createElement(AssignedTab, __assign({}, props)); } })))));
};
export default AssignedClosedTicketsView;
//# sourceMappingURL=AssignedClosedTicketsView.js.map