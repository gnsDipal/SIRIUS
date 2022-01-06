// DEFAULT IMPORT
import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
import { connect } from "react-redux";
import { SetAppData } from '../store/action/Action';
import styles from './ObjectiveAndGoal.module.scss';
import { IObjectiveAndGoalProps } from './IObjectiveAndGoalProps';
import { escape } from '@microsoft/sp-lodash-subset';

// REDUC IMPORT
import { Store, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// APPLICATION IMPORT
import { Icon } from '@fluentui/react/lib/Icon';
import Main from './Main';
import { store } from '../store/mainStore/mainStore';
// const MyObjectivesGoalsIcon = () => <Icon iconName="GroupObject" className = {styles.objectivesGoalsIcon} />;
// export const UserContext = React.createContext(null);
debugger;

const Home = (props:any) => {
    return (
        <div className={styles.objectiveAndGoal}>
            {/* <UserContext.Provider value={...props}> */}
                <Provider store={store}>
                    <Main {...props}/>
                </Provider>       
            {/* </UserContext.Provider> */}
            <h1>In Home file</h1>
        </div>
    )
};

export default Home;

