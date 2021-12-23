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
import * as microsoftTeams from "@microsoft/teams-js";


export const UserContext = React.createContext(null);
const Main = (props:any) => {
  const [teamContext, setTeamContext] = React.useState(null);
  const [isTeamAccess,setTeamAccess] = React.useState(false);
  const [teamPath, setTeamPath] = React.useState('');
  React.useEffect(() => {
     //Initialize Microsoft teams sdk
  microsoftTeams.initialize(() => {
    microsoftTeams.getContext((c) => {
      setTeamContext(c);
      alert("mainContext.sdks.microsoftTeams.context.subEntityId = " + c.subEntityId);
      if(c != null) {
        setTeamAccess(true);
        if(c.teamSitePath === 'assigned'){
          setTeamPath('/assigned');
          alert("Inside setting assinged in teamSitePath");
        }
          alert("c.teamSitePath = " + c.teamSitePath);
      }
      if(c === null){
        alert("c.teamSitePath is null = " + c.teamSitePath);
      }
    });
  }); 
  }, []);
  let path: string = window.location.href;
    return (
        <div>
            <HashRouter>
                <UserContext.Provider value={props.webPartContext}>
                <Switch>
                  <Route exact path="/requested" component={()=><MyRequestTab />}/>
                  <Route exact path="/requested/:myReqStatus/:dept" component={()=><MyRequestTicketsView/>}/>
                  <Route exact path="/assigned" component={()=><AssignedTab/>}/>                
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
                    </div>
                  </Route>
              </Switch>
             </UserContext.Provider>
            </HashRouter>
        </div>    
    );
};

export default Main;