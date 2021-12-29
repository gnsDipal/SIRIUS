import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import styles from './AssignedTab.module.scss';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Icon } from '@fluentui/react/lib/Icon';
import {BrowserRouter as Router,Switch,Route,Link, useParams, useLocation} from "react-router-dom";
import { UserContext } from '../../Main/Main';
import AssignedTicketsView from './AssignedTicketsView/AssignedTicketsView';
import SPDepartmentalServiceData from '../../../../../services/SPDepartmentalServiceData';
import AssignedClosedTicketsView from './AssignedClosedTicketsView/AssignedClosedTicketsView';
import {Spinner,SpinnerSize} from 'office-ui-fabric-react/lib/Spinner';


const AssignedTab = () => {    
    let myRequestedEachPlateData = [];       
    let spAssignedServiceData: SPDepartmentalServiceData = null;
    const {Inprocess,dept,Closed} = useParams();
    const [deptPlate,setDeptPlate] = useState(null);
    const [unlockAssignedData, setUnlockAssignedData] = useState(0); 

    const mainContext = useContext(UserContext);
    useEffect(() => {
         myRequestedEachPlateData = [];  
         init();              
    },[]);

    const init = () => {
      spAssignedServiceData = new SPDepartmentalServiceData(mainContext);
      spAssignedServiceData.getAssignedViewCountData()
     .then((res)=>{
      setDeptPlate(res);
      if(res === undefined)
      setUnlockAssignedData(1);  // set if data not present
      else
      setUnlockAssignedData(2); //set if data is present
     })
    }
    return (
        <div className={styles.assignedTab}>
         <div className="ms-Grid" dir="ltr"> 
         <div className="ms-Grid-row">
           <div className="ms-Grid-col ms-lg2 ms-md2 ms-sm2">
               <Link to="/nav"><Icon iconName={strings.HomeLabel} className={styles.iconSize}></Icon></Link>
           </div>
           <div className="ms-Grid-col ms-lg8 ms-md8 ms-sm8">
               <h2>{strings.AssignedIssuesLabel}</h2>
           </div>
         </div>
         <div>{(unlockAssignedData === 0) && <Spinner size={SpinnerSize.large} label={strings.LoadingLabel}/>}
          </div>
         <div className="ms-Grid">
         <div className="ms-Grid-row ms-lg12 ms-sm12">               
         {(unlockAssignedData === 1) &&
            <h2 className={styles.setToCenter}>{strings.NoDataPresentLabel}</h2>
          }
        {   
          (unlockAssignedData === 2) && //unlock display card
          <h4>{strings.DepartmentBasedCardLabel}</h4> &&
          deptPlate.map((res,index)=>{
            return(
          <div className="ms-Grid-col ms-lg4 ms-sm12">
          <div className={`${styles.smallBox} ${styles.setMainBox}`} >
          <div className={styles.SetMainTitle}>
              <h4>{res.DepartmentName}</h4>
            </div>
            <ul className={styles.nav}>
              <li><Link to={`/assigned/${strings.InProcessLabel}/${res.DepartmentName}`}>
                <a>{strings.InProcessLabel}
                  <span className={`${styles['bg-orange']} ${styles['pull-right']} ${styles.badge}`}>{res.InProcess}</span>
                </a></Link>
              </li>
              <li><Link to={`/assigned/set/${strings.CompletedLabel}/${res.DepartmentName}`} ><a>{strings.ClosedLabel}
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
          );
         })
        }
        </div>
      </div>
            </div>
                <Switch>
                <Route exact path={`/assigned/:Inprocess/:dept`} component={()=><AssignedTicketsView/>}>
                </Route>
                <Route exact path={`/assigned/set/:Closed/:dept`} component={()=><AssignedClosedTicketsView />}>
                </Route>
            </Switch>
        </div>
    );
};
export default AssignedTab;
