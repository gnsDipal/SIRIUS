import * as React from 'react'
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Icon } from '@fluentui/react/lib/Icon';
import {BrowserRouter as Router,Switch,Route,HashRouter,Link,useLocation} from "react-router-dom";
import DispatcherTab from '../DispatcherTab/DispatcherTab';
import Home from '../Home';
import Main from '../../Main/Main'
import Navbar from '../Navbar/Navbar';

const MyRequestTab = (props) => {
    const location = useLocation();
    return (
        <div>
            <div className="ms-Grid" dir="ltr"> 
              <div className="ms-Grid-row">
               <div className="ms-Grid-col ms-lg2 ms-md2 ms-sm2">
                    <Link to="/nav"><button>Home</button></Link>
               </div>
               <div className="ms-Grid-col ms-lg8 ms-md8 ms-sm8">
                    <h2>In Requested Issues Page</h2>
               </div>
              </div>
            </div>
            <Switch>
                <Route exact path="/nav">
                    <div>
                        <Navbar {...props}/>
                        <Home {...props}/>
                    </div>
                </Route>
            </Switch>
         
        </div>
    )
}

export default MyRequestTab
