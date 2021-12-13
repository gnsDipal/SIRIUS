import * as React from 'react';
import styles from './Home.module.scss';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import MyRequestTab from './MyRequestTab/MyRequestTab';
import AssignedTab from './AssignedTab/AssignedTab';
import DispatcherTab from './DispatcherTab/DispatcherTab';
import RaiseRequestTab from './RaiseRequestTab/RaiseRequestTab';
import ManagerTab from './ManagerTab/ManagerTab';
// import * as microsoftTeams from '@microsoft/teams-js';

const Home = ()=> { 
    return (
        <div className={styles.home}>
              <Switch>
                <Route exact path="/requested" component={()=><MyRequestTab />}/>
                <Route exact path="/assigned" component={()=><AssignedTab/>}/>
                <Route exact path="/dispatcher" component={()=><DispatcherTab/>}/>
                <Route exact path="/raise" component={()=><RaiseRequestTab />}/>
                <Route exact path="/manager" component={()=><ManagerTab />}/>
            </Switch>
        </div>
    )
}
export default Home




