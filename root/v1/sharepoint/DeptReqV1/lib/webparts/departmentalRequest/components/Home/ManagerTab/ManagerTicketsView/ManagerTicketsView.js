import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import styles from '../ManagerTab.module.scss';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Link, useParams } from "react-router-dom";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();
import { Icon } from '@fluentui/react/lib/Icon';
import { UserContext } from '../../../Main/Main';
import SPDepartmentalServiceData from '../../../../../../services/SPDepartmentalServiceData';
var spManagerServiceData = null;
var stackStyles = { root: { width: 169 } };
var ManagerTicketsView = function () {
    var _a = useParams(), myReqStatus = _a.myReqStatus, dept = _a.dept;
    var mainContext = useContext(UserContext);
    //State variables
    var _b = useState([]), managerData = _b[0], setManagerData = _b[1];
    var _c = useState(false), unlockData = _c[0], setUnlockData = _c[1];
    useEffect(function () {
        init();
    }, []);
    var init = function () {
        spManagerServiceData = new SPDepartmentalServiceData(mainContext);
        spManagerServiceData.getDeptListInfo(myReqStatus, dept)
            .then(function (res) {
            setManagerData(res);
            setUnlockData(true);
        });
    };
    return (React.createElement("div", { className: styles.managerTab },
        React.createElement("div", { className: "ms-Grid", dir: "ltr" },
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-lg4 ms-sm4" },
                    React.createElement(Link, { to: "/manager" },
                        React.createElement(Icon, { iconName: strings.NavigateBackLabel, className: styles.iconSize })))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-lg12 ms-sm12" },
                    React.createElement("div", { className: styles.overFlowCheck },
                        React.createElement("table", { className: styles.tableSet },
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("th", null, strings.RaisedByLabel),
                                    React.createElement("th", null, strings.TicketNumberLabel),
                                    React.createElement("th", null, strings.IssueDateLabel),
                                    React.createElement("th", null, strings.DescriptionLabel),
                                    React.createElement("th", null, strings.CategoryLabel),
                                    React.createElement("th", null, strings.DepartmentLabel),
                                    React.createElement("th", null, strings.CommentLabel),
                                    React.createElement("th", null, strings.StatusLabel),
                                    React.createElement("th", null, strings.DispatcherGroupLabel),
                                    React.createElement("th", null, strings.ReAssignToLabel),
                                    React.createElement("th", null,
                                        React.createElement(Icon, { iconName: strings.AttachLabel })))),
                            React.createElement("tbody", null, managerData.map(function (res, index) {
                                var issuedDate = new Date(res.issueDate).toLocaleDateString();
                                return (React.createElement("tr", null,
                                    React.createElement("td", null, res.raisedBy),
                                    React.createElement("td", null, res.ticketNumber),
                                    React.createElement("td", null, issuedDate),
                                    React.createElement("td", null, res.description),
                                    React.createElement("td", null, res.category),
                                    React.createElement("td", null, res.department),
                                    React.createElement("td", null, res.comment),
                                    React.createElement("td", null, res.status),
                                    React.createElement("td", null, res.dispatcherDeptName),
                                    React.createElement("td", null, res.reAssignedTo.Title),
                                    React.createElement("td", null, res.attachmentFileName.map(function (r, i) {
                                        return (React.createElement("a", { href: r.ServerRelativeUrl },
                                            " ",
                                            r.FileName));
                                    }))));
                            })))))))));
};
export default ManagerTicketsView;
//# sourceMappingURL=ManagerTicketsView.js.map