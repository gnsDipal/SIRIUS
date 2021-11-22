import * as React from 'react';
import styles from '../AssignedTab.module.scss';
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';
import {BrowserRouter as Router,Switch,Route,HashRouter,Link, useParams} from "react-router-dom";
import AssignedTab from '../AssignedTab';

const AssignedTicketsView = (props) => {
    const {Inprocess,dept} = useParams();
    return (
         <div className={styles.assignedTab}>
            <div className="ms-Grid" dir="ltr"> 
              <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-lg12 ms-md12 ms-sm12">
                  <Link to="/assigned"><button>Back</button></Link>
               </div>
               <div className="ms-Grid-col ms-lg12 ms-md12 ms-sm12">
                    <h2>In Assigned Tickets View with {Inprocess} and department  {dept}</h2>
               </div>
              </div>
            </div>
            <Switch>
                <Route exact path="/assigned" component={(props)=><AssignedTab {...props}/>}></Route>
            </Switch>
         </div>
    )
}

export default AssignedTicketsView
