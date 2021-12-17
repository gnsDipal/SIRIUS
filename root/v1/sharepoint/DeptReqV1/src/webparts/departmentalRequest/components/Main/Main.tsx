import * as React from 'react';
import * as strings from 'DepartmentalRequestWebPartStrings';
import {BrowserRouter as Router,Switch,Route,HashRouter} from "react-router-dom";
import Home from '../Home/Home';
import Navbar from '../Home/Navbar/Navbar';
import MyRequestTab from '../Home/MyRequestTab/MyRequestTab';
import AssignedTab from '../Home/AssignedTab/AssignedTab';
import DispatcherTab from '../Home/DispatcherTab/DispatcherTab';
import RaiseRequestTab from '../Home/RaiseRequestTab/RaiseRequestTab';
import ManagerTab from '../Home/ManagerTab/ManagerTab';
import AssignedTicketsView from '../Home/AssignedTab/AssignedTicketsView/AssignedTicketsView';
import AssignedClosedTicketsView from '../Home/AssignedTab/AssignedClosedTicketsView/AssignedClosedTicketsView';
import DispatcherTicketsView from '../Home/DispatcherTab/DispatcherTicketsView/DispatcherTicketsView';
import MyRequestTicketsView from '../Home/MyRequestTab/MyRequestTicketsView/MyRequestTicketsView';
import ManagerTicketsView from '../Home/ManagerTab/ManagerTicketsView/ManagerTicketsView';

export const UserContext = React.createContext(null);
const Main = (props:any) => {
    return (
        <div>
            <HashRouter>
                <UserContext.Provider value={props.webPartContext}>
              <Switch>
                <Route exact path="/requested" component={()=><MyRequestTab />}/>
                <Route exact path="/requested/:myReqStatus/:dept" component={()=><MyRequestTicketsView/>}/>
                <Route exact path="/assigned" component={()=><AssignedTab />}/>                  
                <Route exact path = "/assigned/:Inprocess/:dept" component={()=><AssignedTicketsView/>}/>
                <Route exact path = "/assigned/set/:Closed/:dept" component={()=><AssignedClosedTicketsView />}/>
                <Route exact path="/dispatcher" component={()=><DispatcherTab />}/>
                <Route exact path="/dispatcher/:open/:dept" component={()=><DispatcherTicketsView />}/>
                <Route exact path="/raise" component={()=><RaiseRequestTab />}/>
                <Route exact path="/manager" component={()=><ManagerTab />}/>
                <Route exact path="/manager/:managerStatus/:dept" component={()=>< ManagerTicketsView />}/>
                <Route exact path="">
                  <div>
                    <Navbar/>
                    <Home/>
                    {/* <AssignedTab /> */}
                  </div>
                </Route>
              </Switch>
              </UserContext.Provider>
            </HashRouter>
        </div>    
    )
}

export default Main