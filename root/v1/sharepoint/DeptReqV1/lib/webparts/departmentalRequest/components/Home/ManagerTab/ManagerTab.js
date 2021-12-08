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
import styles from './ManagerTab.module.scss';
import { useEffect, useContext, useState } from 'react';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Icon } from '@fluentui/react/lib/Icon';
import { Switch, Route, Link, useParams } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Home from '../Home';
import SPDepartmentalServiceData from '../../../../../services/SPDepartmentalServiceData';
import { UserContext } from '../../Main/Main';
var spManagerServiceData = undefined;
var ManagerTab = function (props) {
    var mainContext = useContext(UserContext);
    var _a = useParams(), myReqStatus = _a.myReqStatus, dept = _a.dept;
    var _b = useState([]), managerCountPlate = _b[0], setManagerCountPlate = _b[1];
    var _c = useState(false), unlockPlate = _c[0], setUnlockPlate = _c[1];
    useEffect(function () {
        init();
    }, []);
    var init = function () {
        spManagerServiceData = new SPDepartmentalServiceData(mainContext);
        spManagerServiceData.getManagerViewCount()
            .then(function (res) {
            setManagerCountPlate(res);
            setUnlockPlate(true);
        });
    };
    return (React.createElement("div", { className: styles.managerTab },
        React.createElement("div", { className: "ms-Grid", dir: "ltr" },
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-lg2 ms-md2 ms-sm2" },
                    React.createElement(Link, { to: "/nav" },
                        React.createElement(Icon, { iconName: 'Home', className: styles.iconSize }))),
                React.createElement("div", { className: "ms-Grid-col ms-lg8 ms-md8 ms-sm8" },
                    React.createElement("h2", null, strings.RequestedIssuesLabel))),
            React.createElement("div", { className: "ms-Grid-row ms-lg12 ms-md12 ms-sm12" }, unlockPlate &&
                managerCountPlate.map(function (res, index) {
                    return (React.createElement("div", { className: "ms-Grid-col ms-lg4 ms-sm4" },
                        React.createElement("div", { className: styles.smallBox + " " + styles.setMainBox },
                            React.createElement("div", { className: styles.SetMainTitle },
                                React.createElement("h4", null, res.DepartmentName)),
                            React.createElement("ul", { className: styles.nav },
                                React.createElement("li", null,
                                    React.createElement(Link, { to: "/manager/" + strings.PendingLabel + "/" + res.DepartmentName },
                                        React.createElement("a", null,
                                            strings.OpenRequestsLabel,
                                            React.createElement("span", { className: styles['bg-red'] + " " + styles['pull-right'] + " " + styles.badge }, res.Open)))),
                                React.createElement("li", null,
                                    React.createElement(Link, { to: "/manager/" + strings.InProcessLabel + "/" + res.DepartmentName },
                                        React.createElement("a", null,
                                            strings.InProcessLabel,
                                            React.createElement("span", { className: styles['bg-orange'] + " " + styles['pull-right'] + " " + styles.badge }, res.InProcess)))),
                                React.createElement("li", null,
                                    React.createElement(Link, { to: "/manager/" + strings.CompletedLabel + "/" + res.DepartmentName },
                                        React.createElement("a", null,
                                            strings.ClosedLabel,
                                            React.createElement("span", { className: styles['bg-green'] + " " + styles['pull-right'] + " " + styles.badge }, res.Closed)))),
                                React.createElement("li", null,
                                    React.createElement("a", null,
                                        strings.TotalLabel,
                                        React.createElement("span", { className: styles['bg-blue'] + " " + styles['pull-right'] + " " + styles.badge }, res.Open + res.InProcess + res.Closed)))))));
                }))),
        React.createElement(Switch, null,
            React.createElement(Route, { exact: true, path: "/nav" },
                React.createElement("div", null,
                    React.createElement(Navbar, __assign({}, props)),
                    React.createElement(Home, __assign({}, props)))))));
};
export default ManagerTab;
//# sourceMappingURL=ManagerTab.js.map