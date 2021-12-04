import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';
import styles from './AssignedTab.module.scss';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Icon } from '@fluentui/react/lib/Icon';
import {BrowserRouter as Router,Switch,Route,HashRouter,Link, useParams, useLocation} from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import Home from '../Home'
import SPDepartmentalService from '../../../../../services/SPDepartmentalService';
import Main from '../../Main/Main';
import { UserContext } from '../../Main/Main';
import AssignedTicketsView from './AssignedTicketsView/AssignedTicketsView';
import { MyRequestedEachPlateData } from '../../../../../model/MyRequestedEachPlateData';
import SPDepartmentalServiceData from '../../../../../services/SPDepartmentalServiceData';
import AssignedClosedTicketsView from './AssignedClosedTicketsView/AssignedClosedTicketsView';

// debugger;
let myRequestedEachPlateData = [];   
const InProcess:string = "In Process";    
const Completed:string = "Completed";    
let DepartmentalCountData:MyRequestedEachPlateData[] = [];
let spAssignedService: SPDepartmentalService = null;
let spAssignedServiceData: SPDepartmentalServiceData = null;

const AssignedTab = () => {     
    let loc = useLocation()
    const {Inprocess,dept,Closed} = useParams();
    const [deptPlate,SetdeptPlate] = useState(null);
    const [TotalRaisedData, SetTotalRaisedData] = useState(0); 
    const [InProcessData, SetInProcessData] = useState(0); 
    const [ClosedData, SetClosedData] = useState(0); 

    const mainContext = useContext(UserContext);
    useEffect(() => {
         myRequestedEachPlateData = [];  
         init();              
    },[]);

    const init = () => {
      {(mainContext.sdks.microsoftTeams) &&
        alert("Location" + loc.pathname);
         }
      spAssignedServiceData = new SPDepartmentalServiceData(mainContext);
      spAssignedServiceData.getAssignedViewCountData()
     .then((res)=>{
      SetdeptPlate(res);
        SetTotalRaisedData(res.length);
     })
    }


    return (
        <div className={styles.assignedTab}>
         <div className="ms-Grid" dir="ltr"> 
         <div className="ms-Grid-row">
           <div className="ms-Grid-col ms-lg2 ms-md2 ms-sm2">
               <Link to="/nav"><Icon iconName='Home' style={{fontSize:'25px', cursor:'pointer'}}></Icon></Link>
           </div>
           <div className="ms-Grid-col ms-lg8 ms-md8 ms-sm8">
               <h2>{strings.AssignedIssuesLabel}</h2>
           </div>
         </div>
         <div className="ms-Grid">
         <div className="ms-Grid-row ms-lg12 ms-sm12">               
         <h4>{strings.DepartmentBasedCardLabel}</h4>
        {   
          (TotalRaisedData !== 0) &&
          deptPlate.map((res,index)=>{
            return(
          <div className="ms-Grid-col ms-lg4 ms-sm4">
          <div className={`${styles.smallBox} ${styles.setMainBox}`} >
          <div className={styles.SetMainTitle}>
              <h4>{res.DepartmentName}</h4>
            </div>
            <ul className={styles.nav}>
              <li><Link to={`/assigned/${InProcess}/${res.DepartmentName}`}>
                <a>{strings.InProcessLabel}
                  <span className={`${styles['bg-orange']} ${styles['pull-right']} ${styles.badge}`}>{res.InProcess}</span>
                </a></Link>
              </li>
              <li><Link to={`/assigned/set/${Completed}/${res.DepartmentName}`} ><a>{strings.ClosedLabel}
                  <span className={`${styles['bg-green']} ${styles['pull-right']} ${styles.badge}`}>{res.Closed}</span>
                </a></Link>
              </li>
              <li>
                <a>{strings.TotalLabel}
                  <span className={`${styles['bg-blue']} ${styles['pull-right']} ${styles.badge}`}>{res.InProcess + res.Closed}</span>
                </a>  
              </li>
            </ul>
         </div>
         </div>
          )
         })
        }
        </div>
      </div>
            </div>
                <Switch>
                <Route exact path={`/assigned/:Inprocess/:dept`} component={(props)=><AssignedTicketsView {...props}/>}>
                </Route>
                <Route exact path={`/assigned/set/:Closed/:dept`} component={()=><AssignedClosedTicketsView />}>
                </Route>
                <Route exact path="/nav">
                    <div>
                        {/* <Navbar {...props}/>
                        <Home {...props}/> */}
                    </div>
                </Route>
            </Switch>
        </div>
    )
}
export default AssignedTab
