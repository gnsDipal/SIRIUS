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
// DEFAULT IMPORT
import * as React from 'react';
import styles from './ObjectiveAndGoal.module.scss';
import { Provider } from "react-redux";
import Main from './Main';
import { store } from '../store/mainStore/mainStore';
// const MyObjectivesGoalsIcon = () => <Icon iconName="GroupObject" className = {styles.objectivesGoalsIcon} />;
// export const UserContext = React.createContext(null);
debugger;
var Home = function (props) {
    return (React.createElement("div", { className: styles.objectiveAndGoal },
        React.createElement(Provider, { store: store },
            React.createElement(Main, __assign({}, props))),
        React.createElement("h1", null, "In Home file")));
};
export default Home;
//# sourceMappingURL=Home.js.map