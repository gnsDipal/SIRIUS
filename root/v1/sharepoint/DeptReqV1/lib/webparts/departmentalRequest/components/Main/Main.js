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
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from '../Home/Home';
import Navbar from '../Home/Navbar/Navbar';
import MyRequestTab from '../Home/MyRequestTab/MyRequestTab';
import AssignedTab from '../Home/AssignedTab/AssignedTab';
import DispatcherTab from '../Home/DispatcherTab/DispatcherTab';
import RaiseRequestTab from '../Home/RaiseRequestTab/RaiseRequestTab';
import ManagerTab from '../Home/ManagerTab/ManagerTab';
import AssignedTicketsView from '../Home/AssignedTab/AssignedTicketsView/AssignedTicketsView';
import AssignedClosedTicketsView from '../Home/AssignedTab/AssignedClosedTicketsView/AssignedClosedTicketsView';
import DispatcherTicketsView from '../Home/DispatcherTab/DispatcherTicketsView/DispatcherTicketsView';
import MyRequestTicketsView from '../Home/MyRequestTab/MyRequestTicketsView/MyRequestTicketsView';
import ManagerTicketsView from '../Home/ManagerTab/ManagerTicketsView/ManagerTicketsView';
export var UserContext = React.createContext(null);
// debugger;
var Main = function (props) {
    return (React.createElement("div", null,
        React.createElement(HashRouter, null,
            React.createElement(UserContext.Provider, { value: props.webPartContext },
                React.createElement(Switch, null,
                    React.createElement(Route, { exact: true, path: "/requested", component: function (props) { return React.createElement(MyRequestTab, __assign({}, props)); } }),
                    React.createElement(Route, { exact: true, path: "/requested/:myReqStatus/:dept", component: function () { return React.createElement(MyRequestTicketsView, null); } }),
                    React.createElement(Route, { exact: true, path: "/assigned", component: function () { return React.createElement(AssignedTab, null); } }),
                    React.createElement(Route, { exact: true, path: "/assigned/:Inprocess/:dept", component: function (props) { return React.createElement(AssignedTicketsView, __assign({}, props)); } }),
                    React.createElement(Route, { exact: true, path: "/assigned/set/:Closed/:dept", component: function (props) { return React.createElement(AssignedClosedTicketsView, null); } }),
                    React.createElement(Route, { exact: true, path: "/dispatcher", component: function (props) { return React.createElement(DispatcherTab, __assign({}, props)); } }),
                    React.createElement(Route, { exact: true, path: "/dispatcher/:open/:dept", component: function () { return React.createElement(DispatcherTicketsView, null); } }),
                    React.createElement(Route, { exact: true, path: "/raise", component: function (props) { return React.createElement(RaiseRequestTab, __assign({}, props)); } }),
                    React.createElement(Route, { exact: true, path: "/manager", component: function (props) { return React.createElement(ManagerTab, __assign({}, props)); } }),
                    React.createElement(Route, { exact: true, path: "/manager/:myReqStatus/:dept", component: function () { return React.createElement(ManagerTicketsView, null); } }),
                    React.createElement(Route, { exact: true, path: "" },
                        React.createElement("div", null,
                            React.createElement(Navbar, __assign({}, props)),
                            React.createElement(Home, __assign({}, props)))))))));
};
export default Main;
//# sourceMappingURL=Main.js.map