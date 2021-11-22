import * as React from 'react'
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';
import styles from '../Home/Home.module.scss';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Icon } from '@fluentui/react/lib/Icon';
import {BrowserRouter as Router,Switch,Route,HashRouter,Link, useParams} from "react-router-dom";

import Home from '../Home/Home';
import Navbar from '../Home/Navbar/Navbar';
import MyRequestTab from '../Home/MyRequestTab/MyRequestTab';
import AssignedTab from '../Home/AssignedTab/AssignedTab';
import DispatcherTab from '../Home/DispatcherTab/DispatcherTab';
import RaiseRequestTab from '../Home/RaiseRequestTab/RaiseRequestTab';
import ManagerTab from '../Home/ManagerTab/ManagerTab';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import AssignedTicketsView from '../Home/AssignedTab/AssignedTicketsView/AssignedTicketsView';

export const UserContext = React.createContext(null);
// debugger;
const Main = (props) => {
  // let {dept} = useParams();
  console.log('props = ' + props.currentUserId);
  console.log('props = ' + props.webUrl);
    return (
        <div>
            <Router>
                <UserContext.Provider value={props.webPartContext}>
              <Switch>
                <Route exact path="/requested" component={(props)=><MyRequestTab {...props}/>}/>
                <Route exact path="/assigned">
                    <Route exact path="/assigned" component={(props)=><AssignedTab {...props}/>}/> 
                </Route>
                <Route exact path = "/assigned/:Inprocess/:dept" component={(props)=><AssignedTicketsView {...props}/>}/>
                <Route exact path="/dispatcher" component={(props)=><DispatcherTab {...props}/>}/>
                <Route exact path="/raise" component={(props)=><RaiseRequestTab {...props}/>}/>
                <Route exact path="/manager" component={(props)=><ManagerTab {...props}/>}/>
                <Route exact path="">
                  <div>
                    <Navbar {...props}/>
                    <Home {...props}/>
                  </div>
                </Route>
              </Switch>
              </UserContext.Provider>
            </Router>
        </div>    
    )
}

export default Main