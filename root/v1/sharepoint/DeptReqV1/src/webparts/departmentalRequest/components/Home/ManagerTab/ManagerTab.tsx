import * as React from 'react'
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Icon } from '@fluentui/react/lib/Icon';
import {BrowserRouter as Router,Switch,Route,HashRouter,Link} from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import Home from '../Home'

const ManagerTab = (props) => {
    return (
        <div>
            <div className="ms-Grid"> 
              <div className="ms-Grid-row">
               <div className="ms-Grid-col ms-lg2 ms-md2 ms-sm2">
                    <Link to="/nav"><button>Home</button></Link>
               </div>
               <div className="ms-Grid-col ms-lg8 ms-md8 ms-sm8">
                    <h2>In Manager tab</h2>   
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

export default ManagerTab
