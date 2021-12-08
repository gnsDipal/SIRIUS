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
import styles from './AssignedTab.module.scss';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Icon } from '@fluentui/react/lib/Icon';
import { Switch, Route, Link, useParams, useLocation } from "react-router-dom";
import { UserContext } from '../../Main/Main';
import AssignedTicketsView from './AssignedTicketsView/AssignedTicketsView';
import SPDepartmentalServiceData from '../../../../../services/SPDepartmentalServiceData';
import AssignedClosedTicketsView from './AssignedClosedTicketsView/AssignedClosedTicketsView';
// debugger;
var myRequestedEachPlateData = [];
var InProcess = "In Process";
var Completed = "Completed";
var DepartmentalCountData = [];
var spAssignedService = null;
var spAssignedServiceData = null;
var AssignedTab = function () {
    var loc = useLocation();
    var _a = useParams(), Inprocess = _a.Inprocess, dept = _a.dept, Closed = _a.Closed;
    var _b = useState(null), deptPlate = _b[0], SetdeptPlate = _b[1];
    var _c = useState(0), TotalRaisedData = _c[0], SetTotalRaisedData = _c[1];
    var _d = useState(0), InProcessData = _d[0], SetInProcessData = _d[1];
    var _e = useState(0), ClosedData = _e[0], SetClosedData = _e[1];
    var mainContext = useContext(UserContext);
    useEffect(function () {
        myRequestedEachPlateData = [];
        init();
    }, []);
    var init = function () {
        {
            (mainContext.sdks.microsoftTeams) &&
                alert("Location" + loc.pathname);
        }
        spAssignedServiceData = new SPDepartmentalServiceData(mainContext);
        spAssignedServiceData.getAssignedViewCountData()
            .then(function (res) {
            SetdeptPlate(res);
            SetTotalRaisedData(res.length);
        });
    };
    return (React.createElement("div", { className: styles.assignedTab },
        React.createElement("div", { className: "ms-Grid", dir: "ltr" },
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-lg2 ms-md2 ms-sm2" },
                    React.createElement(Link, { to: "/nav" },
                        React.createElement(Icon, { iconName: 'Home', style: { fontSize: '25px', cursor: 'pointer' } }))),
                React.createElement("div", { className: "ms-Grid-col ms-lg8 ms-md8 ms-sm8" },
                    React.createElement("h2", null, strings.AssignedIssuesLabel))),
            React.createElement("div", { className: "ms-Grid" },
                React.createElement("div", { className: "ms-Grid-row ms-lg12 ms-sm12" },
                    React.createElement("h4", null, strings.DepartmentBasedCardLabel),
                    (TotalRaisedData !== 0) &&
                        deptPlate.map(function (res, index) {
                            return (React.createElement("div", { className: "ms-Grid-col ms-lg4 ms-sm4" },
                                React.createElement("div", { className: styles.smallBox + " " + styles.setMainBox },
                                    React.createElement("div", { className: styles.SetMainTitle },
                                        React.createElement("h4", null, res.DepartmentName)),
                                    React.createElement("ul", { className: styles.nav },
                                        React.createElement("li", null,
                                            React.createElement(Link, { to: "/assigned/" + InProcess + "/" + res.DepartmentName },
                                                React.createElement("a", null,
                                                    strings.InProcessLabel,
                                                    React.createElement("span", { className: styles['bg-orange'] + " " + styles['pull-right'] + " " + styles.badge }, res.InProcess)))),
                                        React.createElement("li", null,
                                            React.createElement(Link, { to: "/assigned/set/" + Completed + "/" + res.DepartmentName },
                                                React.createElement("a", null,
                                                    strings.ClosedLabel,
                                                    React.createElement("span", { className: styles['bg-green'] + " " + styles['pull-right'] + " " + styles.badge }, res.Closed)))),
                                        React.createElement("li", null,
                                            React.createElement("a", null,
                                                strings.TotalLabel,
                                                React.createElement("span", { className: styles['bg-blue'] + " " + styles['pull-right'] + " " + styles.badge }, res.InProcess + res.Closed)))))));
                        })))),
        React.createElement(Switch, null,
            React.createElement(Route, { exact: true, path: "/assigned/:Inprocess/:dept", component: function (props) { return React.createElement(AssignedTicketsView, __assign({}, props)); } }),
            React.createElement(Route, { exact: true, path: "/assigned/set/:Closed/:dept", component: function () { return React.createElement(AssignedClosedTicketsView, null); } }),
            React.createElement(Route, { exact: true, path: "/nav" },
                React.createElement("div", null)))));
};
export default AssignedTab;
//# sourceMappingURL=AssignedTab.js.map