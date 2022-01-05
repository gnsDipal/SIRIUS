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
const MyObjectivesGoalsIcon = () => <Icon iconName="GroupObject" className = {styles.objectivesGoalsIcon} />;

// debugger;

const Main = (props) => {
    let store:Store;
    useEffect(() => { 
        init();              
   },[]);
   const init=()=>{
        store = createStore(RootReducer, applyMiddleware(thunk));
        props.setAppData();
        };
   
    return (
        <div className={styles.objectiveAndGoal}>
                 <Provider store={store}>
                    <TabHeader/>
                    <TabItem/>
                </Provider>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        appDataStruct: state.appData
    }
}

const mapDispatcherToProps = (dispatcher) => {
    return{
        setAppData: () => dispatcher(SetAppData())
    }
}
export default connect(mapStateToProps, mapDispatcherToProps) (Main)

