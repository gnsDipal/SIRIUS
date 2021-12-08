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
import styles from './Home.module.scss';
import { Switch, Route } from "react-router-dom";
import MyRequestTab from './MyRequestTab/MyRequestTab';
import AssignedTab from './AssignedTab/AssignedTab';
import DispatcherTab from './DispatcherTab/DispatcherTab';
import RaiseRequestTab from './RaiseRequestTab/RaiseRequestTab';
import ManagerTab from './ManagerTab/ManagerTab';
import * as microsoftTeams from '@microsoft/teams-js';
// debugger;
var Home = function (props) {
    //Initialize Microsoft Teams SDK
    microsoftTeams.initialize();
    return (React.createElement("div", { className: styles.home },
        React.createElement(Switch, null,
            React.createElement(Route, { exact: true, path: "/requested", component: function (props) { return React.createElement(MyRequestTab, __assign({}, props)); } }),
            React.createElement(Route, { exact: true, path: "/assigned", component: function (props) { return React.createElement(AssignedTab, __assign({}, props)); } }),
            React.createElement(Route, { exact: true, path: "/dispatcher", component: function (props) { return React.createElement(DispatcherTab, __assign({}, props)); } }),
            React.createElement(Route, { exact: true, path: "/raise", component: function (props) { return React.createElement(RaiseRequestTab, __assign({}, props)); } }),
            React.createElement(Route, { exact: true, path: "/manager", component: function (props) { return React.createElement(ManagerTab, __assign({}, props)); } }))));
};
export default Home;
//# sourceMappingURL=Home.js.map