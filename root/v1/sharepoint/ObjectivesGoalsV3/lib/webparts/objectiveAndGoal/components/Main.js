// DEFAULT IMPORT
import * as React from 'react';
import { useEffect } from 'react';
import styles from './ObjectiveAndGoal.module.scss';
import TabHeader from './TabHeader/TabHeader';
// const MyObjectivesGoalsIcon = () => <Icon iconName="GroupObject" className = {styles.objectivesGoalsIcon} />;
debugger;
export var UserContext = React.createContext(null);
var Main = function (props) {
    // let store:Store;
    useEffect(function () {
        init();
    }, []);
    var init = function () {
        // store = createStore(RootReducer, applyMiddleware(thunk));
    };
    return (React.createElement("div", { className: styles.objectiveAndGoal },
        React.createElement(UserContext.Provider, { value: props },
            React.createElement(TabHeader, null)),
        React.createElement("h1", null, "In Main File")));
};
export default Main;
//# sourceMappingURL=Main.js.map