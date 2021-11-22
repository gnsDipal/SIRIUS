import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';
import styles from './AssignedTab.module.scss';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Icon } from '@fluentui/react/lib/Icon';
import {BrowserRouter as Router,Switch,Route,HashRouter,Link, useParams} from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import Home from '../Home'
import SPDepartmentalService from '../../../../../services/SPDepartmentalService';
import Main from '../../Main/Main';
import { UserContext } from '../../Main/Main';
import AssignedTicketsView from './AssignedTicketsView/AssignedTicketsView';
import { MyRequestedEachPlateData } from '../../../../../modal/MyRequestedEachPlateData';
import SPDepartmentalServiceData from '../../../../../services/SPDepartmentalServiceData';

debugger;
let myRequestedEachPlateData = [];   
const InProcess:string = "In Process";    
const Completed:string = "Completed";    
let DepartmentalCountData:MyRequestedEachPlateData[] = [];
let spAssignedService: SPDepartmentalService = null;
let spAssignedServiceData: SPDepartmentalServiceData = null;

const AssignedTab = (props) => {
    const {Inprocess,dept} = useParams();
    const [test,SetTest] = useState(null);
    const [TotalRaisedData, SetTotalRaisedData] = useState(0); 
    const [InProcessData, SetInProcessData] = useState(0); 
    const [ClosedData, SetClosedData] = useState(0); 

    const mainContext = useContext(UserContext);
    console.log('value = ' + mainContext);
    useEffect(() => {
         myRequestedEachPlateData = [];  
         init();              
    },[]);

    const init = () => {
      spAssignedServiceData = new SPDepartmentalServiceData(mainContext);
      spAssignedServiceData.getAssignedViewCountData(mainContext)
     .then((res)=>{
        SetTest(res);
        SetTotalRaisedData(res.length);
     })
    //   SpAssignedServices.initialDeptGetMethod()
    //   .then((res)=>{
    //      if(res.length>0){
    //         for(let j=0;j<res.length;++j){
    //           myRequestedEachPlateData.push({
    //             department:res[j],
    //             inProcessCount:0,
    //             closedCount:0,
    //             totalCount:0
    //           });
    //         }
    //         SetTotalRaisedData(res.length);
    //         allRequestsLoop(res);
    //       }
    //  })
    // }
   // Code for summary card view
  //  function allRequestsLoop (raisedReqDepts){
  //        let promiseInProcessRequestCount = []; 
  //        let promiseClosedRequestsCount = []; 

  //        for(let i=0;i<raisedReqDepts.length;++i){

  //           promiseInProcessRequestCount.push(SpAssignedServices.getInProcessRequestsCount(raisedReqDepts[i], mainContext.pageContext.web.absoluteUrl,mainContext.pageContext.legacyPageContext["userId"]));

  //           promiseClosedRequestsCount.push(SpAssignedServices.getclosedRequestsCount(raisedReqDepts[i],mainContext.pageContext.web.absoluteUrl,mainContext.pageContext.legacyPageContext["userId"]));
  //       }
    
  //       Promise.all(promiseInProcessRequestCount)
  //       .then(result=>{
  //         result.map((r,index)=>{
  //          myRequestedEachPlateData[index].inProcessCount = r;
  //               SetInProcessData(index + 1);
  //         });
  //       });

  //       Promise.all(promiseClosedRequestsCount)
  //       .then(result=>{
  //         result.map((r,index)=>{
  //          myRequestedEachPlateData[index].closedCount = r;
  //          SetClosedData(index + 1);
  //         });
  //       });
  //   }
    }


    return (
        <div className={styles.assignedTab}>
         <div className="ms-Grid" dir="ltr"> 
         <div className="ms-Grid-row">
           <div className="ms-Grid-col ms-lg2 ms-md2 ms-sm2">
               <Link to="/nav"><button>Home</button></Link>
           </div>
           <div className="ms-Grid-col ms-lg8 ms-md8 ms-sm8">
               <h2>In Assigned Issues Tab</h2>
           </div>
         </div>
         <div className="ms-Grid">
         <div className="ms-Grid-row ms-lg12 ms-sm12">               
         <h4>My Assigned view page</h4>
        {   
          (TotalRaisedData !== 0) &&
          myRequestedEachPlateData.map((res,index)=>{
            return(
          <div className="ms-Grid-col ms-lg4 ms-sm4">
          <div className={`${styles.smallBox} ${styles.setMainBox}`} >
          <div className={styles.SetMainTitle}>
              <h4>{res.department}</h4>
            </div>
            <ul className={styles.nav}>
              <li><Link to={`/assigned/${InProcess}/${res.department}`}>
                <a>In Process
                  <span className={`${styles['bg-orange']} ${styles['pull-right']} ${styles.badge}`}>{res.inProcessCount}</span>
                </a></Link>
              </li>
              <li>
                <a>Closed
                  <span className={`${styles['bg-green']} ${styles['pull-right']} ${styles.badge}`}>{res.closedCount}</span>
                </a>
              </li>
              <li>
                <a>Total
                  <span className={`${styles['bg-blue']} ${styles['pull-right']} ${styles.badge}`}>{res.inProcessCount + res.closedCount}</span>
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

export default AssignedTab
