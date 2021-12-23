import * as React from 'react';
import styles from './DispatcherTab.module.scss';
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../Main/Main';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Icon } from '@fluentui/react/lib/Icon';
import {BrowserRouter as Router,Switch,Route,Link,useParams} from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Home from '../Home';
import SPDepartmentalServiceData from '../../../../../services/SPDepartmentalServiceData';
import DispatcherTicketsView from './DispatcherTicketsView/DispatcherTicketsView';
import {Spinner,SpinnerSize} from 'office-ui-fabric-react/lib/Spinner';
let spDispatcherServiceData: SPDepartmentalServiceData = null;
const OpenRequests:string = "Open Requests";   
// debugger; 
const DispatcherTab = () => {
    const mainContext = useContext(UserContext);
    const {open,dept} = useParams();

    const [dispatcherCountData, setDispatcherCountData] = useState(null);
    const [unlockDispatcherCard, setUnlockDispatcherCard] = useState(0);
    useEffect(() => {  
         init();              
    },[]);
    // useEffect(()=>{
    //   if (dispatcherCountData.length>0){
    //     setLoading(0);
    //   }
    // },[dispatcherCountData])

    const init = () => {
      spDispatcherServiceData = new SPDepartmentalServiceData(mainContext);
      spDispatcherServiceData.getDispatcherPlates()
      .then((res)=>{
        setDispatcherCountData(res);
        if(res === undefined || (res[0].length === 0))
          setUnlockDispatcherCard(1); // if data is not present
        else
          setUnlockDispatcherCard(2); // For rendering once the data is set
      })
    }

   
    return (
        <div className={styles.dispatcherTab}>
           <div className="ms-Grid" dir="ltr"> 
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-lg2 ms-md2 ms-sm2">
                        <Link to="/nav"><Icon iconName='Home' className={styles.iconSize}></Icon></Link>
                    </div>
                    <div className="ms-Grid-col ms-lg8 ms-md8 ms-sm8">
                        <h2>{strings.DispatcherViewLabel}</h2>
                    </div>
                </div>
                <div>{(unlockDispatcherCard === 0) && <Spinner size={SpinnerSize.large} label={strings.LoadingLabel}/>}
                </div>
                <div className="ms-Grid">
                 <div className="ms-Grid-row ms-lg12 ms-sm12">  
                 {(unlockDispatcherCard === 1) &&
                    <h2 className={styles.setToCenter}>{strings.NoDataPresentLabel}</h2>
                  }             
                {   
                  (unlockDispatcherCard === 2) &&
                  <h4>{strings.DepartmentBasedCardLabel}</h4> &&
                  dispatcherCountData.map((res,index)=>{
                    return(
                  <div className="ms-Grid-col ms-lg4 ms-sm12">
                  <div className={`${styles.smallBox} ${styles.setMainBox}`} >
                  <div className={styles.SetMainTitle}>
                      <h4>{res.deptName}</h4>
                    </div>
                    <ul className={styles.nav}>
                      <li><Link to={`/dispatcher/${strings.PendingLabel}/${res.deptName}`}>
                        <a>{strings.OpenRequestsLabel}
                          <span className={`${styles['bg-red']} ${styles['pull-right']} ${styles.badge}`}>{res.thisCount}</span>
                        </a></Link>
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
                <Route exact path={`/dispatcher/:open/:dept`} component={()=><DispatcherTicketsView />}>
                </Route>
                <Route exact path="/nav">
                    <div>
                        <Navbar />
                        <Home />
                    </div>
                </Route>
            </Switch>
        </div>
    )
}
export default DispatcherTab
