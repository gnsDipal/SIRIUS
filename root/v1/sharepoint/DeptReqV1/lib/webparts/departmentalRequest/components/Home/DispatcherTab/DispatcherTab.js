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
import styles from './DispatcherTab.module.scss';
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../Main/Main';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Icon } from '@fluentui/react/lib/Icon';
import { Switch, Route, Link, useParams } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Home from '../Home';
import SPDepartmentalServiceData from '../../../../../services/SPDepartmentalServiceData';
import DispatcherTicketsView from './DispatcherTicketsView/DispatcherTicketsView';
var spDispatcherServiceData = null;
var OpenRequests = "Open Requests";
var DispatcherTab = function (props) {
    var mainContext = useContext(UserContext);
    var _a = useParams(), open = _a.open, dept = _a.dept;
    var _b = useState(null), dispatcherCountData = _b[0], setDispatcherCountData = _b[1];
    var _c = useState(0), unlockDispatcherCard = _c[0], setUnlockDispatcherCard = _c[1];
    useEffect(function () {
        init();
    }, []);
    var init = function () {
        spDispatcherServiceData = new SPDepartmentalServiceData(mainContext);
        spDispatcherServiceData.getDispatcherPlates()
            .then(function (res) {
            setDispatcherCountData(res);
            setUnlockDispatcherCard(1); // For rendering once thedata is set
        });
    };
    // style={{fontSize:'25px', cursor:'pointer'}}
    return (React.createElement("div", { className: styles.dispatcherTab },
        React.createElement("div", { className: "ms-Grid", dir: "ltr" },
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-lg2 ms-md2 ms-sm2" },
                    React.createElement(Link, { to: "/nav" },
                        React.createElement(Icon, { iconName: 'Home', className: styles.iconSize }))),
                React.createElement("div", { className: "ms-Grid-col ms-lg8 ms-md8 ms-sm8" },
                    React.createElement("h2", null, strings.DispatcherViewLabel))),
            React.createElement("div", { className: "ms-Grid" },
                React.createElement("div", { className: "ms-Grid-row ms-lg12 ms-sm12" },
                    React.createElement("h4", null, strings.DepartmentBasedCardLabel),
                    (unlockDispatcherCard !== 0) &&
                        dispatcherCountData.map(function (res, index) {
                            return (React.createElement("div", { className: "ms-Grid-col ms-lg4 ms-sm4" },
                                React.createElement("div", { className: styles.smallBox + " " + styles.setMainBox },
                                    React.createElement("div", { className: styles.SetMainTitle },
                                        React.createElement("h4", null, res.deptName)),
                                    React.createElement("ul", { className: styles.nav },
                                        React.createElement("li", null,
                                            React.createElement(Link, { to: "/dispatcher/" + strings.PendingLabel + "/" + res.deptName },
                                                React.createElement("a", null,
                                                    strings.OpenRequestsLabel,
                                                    React.createElement("span", { className: styles['bg-red'] + " " + styles['pull-right'] + " " + styles.badge }, res.thisCount))))))));
                        })))),
        React.createElement(Switch, null,
            React.createElement(Route, { exact: true, path: "/dispatcher/:open/:dept", component: function () { return React.createElement(DispatcherTicketsView, null); } }),
            React.createElement(Route, { exact: true, path: "/nav" },
                React.createElement("div", null,
                    React.createElement(Navbar, __assign({}, props)),
                    React.createElement(Home, __assign({}, props)))))));
};
export default DispatcherTab;
//# sourceMappingURL=DispatcherTab.js.map