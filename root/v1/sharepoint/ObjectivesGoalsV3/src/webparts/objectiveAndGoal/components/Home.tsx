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
import { IObjectiveAndGoalState } from './IObjectiveAndGoalState';
import RootReducer from "../store/reducer/RootReducer";
import ChildComponent1 from './child/ChildComponent1';
import { Icon } from '@fluentui/react/lib/Icon';
import TabHeader from './TabHeader/TabHeader';
import TabItem from './TabHeader/TabItem/TabItem';
import SPService from '../../../services/SPService';
import Main from './Main';
const MyObjectivesGoalsIcon = () => <Icon iconName="GroupObject" className = {styles.objectivesGoalsIcon} />;
export const UserContext = React.createContext(null);
// debugger;

const Home = (props:any) => {
    return (
        <div className={styles.objectiveAndGoal}>
            <UserContext.Provider value={...props}>
                    <Main/>
            </UserContext.Provider>
        </div>
    )
};

export default Home;

