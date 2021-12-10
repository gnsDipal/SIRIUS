import * as React from 'react';
import styles from './ManagerTab.module.scss';
import { useEffect, useContext, useState } from 'react';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Icon } from '@fluentui/react/lib/Icon';
import {BrowserRouter as Router,Switch,Route,Link,useParams} from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import Home from '../Home'
import SPDepartmentalServiceData from '../../../../../services/SPDepartmentalServiceData';
import {UserContext} from '../../Main/Main';
import {Spinner,SpinnerSize} from 'office-ui-fabric-react/lib/Spinner';
let spManagerServiceData:SPDepartmentalServiceData = undefined
const ManagerTab = (props) => {
    const mainContext = useContext(UserContext);
    const {managerStatus,dept} = useParams(); 
    const [managerCountPlate, setManagerCountPlate] = useState([]);
    const [unlockPlate, setUnlockPlate] = useState(false);
    useEffect(() => {  
        init();              
   },[]);
  
   const init = () => {
    spManagerServiceData = new SPDepartmentalServiceData(mainContext);
    spManagerServiceData.getManagerViewCount()
      .then(res=>{
        setManagerCountPlate(res);
        setUnlockPlate(true);
      })
   }
    return (
        <div className={styles.managerTab}>
             <div className="ms-Grid" dir="ltr"> 
              <div className="ms-Grid-row">
               <div className="ms-Grid-col ms-lg2 ms-md2 ms-sm2">
               <Link to="/nav"><Icon iconName={strings.HomeLabel} className={styles.iconSize}></Icon></Link>
               </div>
               <div className="ms-Grid-col ms-lg8 ms-md8 ms-sm8">
                    <h2>{strings.ManagerViewLabel}</h2>
               </div>
              </div>
              <div>{(unlockPlate === false) && <Spinner size={SpinnerSize.large} label={strings.LoadingLabel}/>}
              </div>
              <div className="ms-Grid-row ms-lg12 ms-md12 ms-sm12">
              { unlockPlate &&  
                managerCountPlate.map((res,index)=>{
                  return(
                    <div className="ms-Grid-col ms-lg4 ms-sm4">
                <div className={`${styles.smallBox} ${styles.setMainBox}`} >
                <div className={styles.SetMainTitle}>
                    <h4>{res.DepartmentName}</h4>
                  </div>
                  <ul className={styles.nav}>
                    <li><Link to={`/manager/${strings.PendingLabel}/${res.DepartmentName}`}>
                     <a>{strings.OpenRequestsLabel}
                      <span className={`${styles['bg-red']} ${styles['pull-right']} ${styles.badge}`}>{res.Open}</span>
                     </a></Link>
                    </li>
                    <li><Link to={`/manager/${strings.InProcessLabel}/${res.DepartmentName}`}>
                     <a>{strings.InProcessLabel}
                       <span className={`${styles['bg-orange']} ${styles['pull-right']} ${styles.badge}`}>{res.InProcess}</span>
                      </a></Link>
                    </li>
                    <li><Link to={`/manager/${strings.CompletedLabel}/${res.DepartmentName}`} ><a>{strings.ClosedLabel}
                      <span className={`${styles['bg-green']} ${styles['pull-right']} ${styles.badge}`}>{res.Closed}</span>
                      </a></Link>
                    </li>
                    <li>
                      <a>{strings.TotalLabel}
                        <span className={`${styles['bg-blue']} ${styles['pull-right']} ${styles.badge}`}>{res.Open + res.InProcess + res.Closed}</span>
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
