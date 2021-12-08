import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import { CompoundButton } from '@fluentui/react/lib/Button';
import styles from '../Home.module.scss';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Icon } from '@fluentui/react/lib/Icon';
import { Link } from "react-router-dom";
import SPDepartmentalServiceData from '../../../../../services/SPDepartmentalServiceData';
import { UserContext } from '../../Main/Main';
debugger;
var spPermissionDataService = null;
var Navbar = function () {
    var mainContext = useContext(UserContext);
    //state variable
    var _a = useState(false), dispatcherPermit = _a[0], setDispatcherPermit = _a[1];
    useEffect(function () {
        init();
    }, []);
    //initialization
    var init = function () {
        spPermissionDataService = new SPDepartmentalServiceData(mainContext);
        spPermissionDataService.getDispatcherPermissionHandle()
            .then(function (r) {
            setDispatcherPermit(r);
            console.log("dispatcherPermit = " + dispatcherPermit);
        });
    };
    return (React.createElement("div", { className: styles.home }, React.createElement("div", null,
        React.createElement("div", { className: "ms-Grid", dir: "ltr" },
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col", "ms-lg8": true, "ms-md8": true, "ms-sm8": true },
                    React.createElement("h1", null, strings.WelcomeLabel)),
                // (props.webPartContext.sdks.microsoftTeams) &&
                React.createElement("div", { className: "ms-Grid-col", "ms-lg2": true, "ms-md2": true, "ms-sm2": true },
                    React.createElement("div", { style: { margin: '0', float: 'right' } },
                        React.createElement(Icon, { className: styles.teamsSettings, iconName: "Settings" })))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col" },
                    React.createElement("div", { className: "ms-u-sm12 ms-u-md4 ms-u-lg4 block" },
                        React.createElement(Link, { to: "/requested" },
                            React.createElement(CompoundButton, { className: styles.myIssuesButton }, strings.RequestedIssuesLabel)))),
                React.createElement("div", { className: "ms-Grid-col" },
                    React.createElement("div", { className: "ms-u-sm12 ms-u-md4 ms-u-lg4 block" },
                        React.createElement(Link, { to: "/assigned" },
                            React.createElement(CompoundButton, { className: styles.myIssuesButton }, strings.AssignedIssuesLabel)))),
                React.createElement("div", { className: "ms-Grid-col" },
                    React.createElement("div", { className: "ms-u-sm12 ms-u-md4 ms-u-lg4 block" },
                        React.createElement(Link, { to: "/dispatcher" },
                            React.createElement(CompoundButton, { className: styles.myIssuesButton }, strings.DispatcherViewLabel))))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-u-sm6 block" },
                    React.createElement(Link, { to: "/raise" },
                        React.createElement(CompoundButton, { className: styles.raisedRequestButton },
                            strings.NewTicketLabel,
                            React.createElement(Icon, { iconName: "Ticket", className: styles.lowerImagesIconClass, style: { fontSize: '100px', textAlign: 'center' } })))),
                React.createElement("div", { className: "ms-Grid-col ms-u-sm6 block" },
                    React.createElement(Link, { to: "/manager" },
                        React.createElement(CompoundButton, { className: styles.managerViewButton },
                            strings.ManagerViewLabel,
                            React.createElement(Icon, { iconName: 'ReminderPerson', className: styles.lowerImagesIconClass, style: { fontSize: '100px', textAlign: 'center' } })))))))));
};
export default Navbar;
//# sourceMappingURL=Navbar.js.map