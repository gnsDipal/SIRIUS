import * as React from 'react'
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';
import styles from './Home.module.scss';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Icon } from '@fluentui/react/lib/Icon';
import {BrowserRouter as Router,Switch,Route,HashRouter,Link,NavLink,PrivateRoute,useHistory, useLocation,useParams } from "react-router-dom";

import MyRequestTab from './MyRequestTab/MyRequestTab';
import AssignedTab from './AssignedTab/AssignedTab';
import DispatcherTab from './DispatcherTab/DispatcherTab';
import RaiseRequestTab from './RaiseRequestTab/RaiseRequestTab';
import ManagerTab from './ManagerTab/ManagerTab';
import Main from '../Main/Main'
import Navbar from './Navbar/Navbar';
import * as microsoftTeams from '@microsoft/teams-js';

// debugger;
const Home = ()=> {
    
   //Initialize Microsoft Teams SDK
   microsoftTeams.initialize();

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




