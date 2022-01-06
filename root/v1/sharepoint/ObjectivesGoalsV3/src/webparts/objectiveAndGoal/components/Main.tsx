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
import TabHeader from './TabHeader/TabHeader';
import { store } from '../store/mainStore/mainStore';
// const MyObjectivesGoalsIcon = () => <Icon iconName="GroupObject" className = {styles.objectivesGoalsIcon} />;

debugger;
export const UserContext = React.createContext(null);

const Main = (props:any) => {
    // let store:Store;
    useEffect(() => { 
        init();              
   },[]);
   const init=()=>{
        // store = createStore(RootReducer, applyMiddleware(thunk));
        };
   
    return (
        <div className={styles.objectiveAndGoal}>
                 {/* <Provider store={store}> */}
                    <UserContext.Provider value={...props}>
                        <TabHeader/>
                    </UserContext.Provider>
                {/* </Provider> */}
                <h1>In Main File</h1>
        </div>
    )
}

export default Main

