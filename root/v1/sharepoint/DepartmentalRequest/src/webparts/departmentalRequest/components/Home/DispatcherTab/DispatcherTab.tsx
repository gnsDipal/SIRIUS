import * as React from 'react'
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';
import styles from './DispatcherTab.module.scss';
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../Main/Main';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Icon } from '@fluentui/react/lib/Icon';
import {BrowserRouter as Router,Switch,Route,HashRouter,Link} from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import Home from '../Home'
import SPDispatcherService from '../../../../../services/SPDispatcherService';
import SPDepartmentalServiceData from '../../../../../services/SPDepartmentalServiceData';

let spDispatcherServiceData: SPDepartmentalServiceData = null;
debugger;
const DispatcherTab = (props) => {
    const mainContext = useContext(UserContext);
    const [dispatcherCountData, setDispatcherCountData] = useState(null);
    const [UnlockDispatcherCard, setUnlockDispatcherCard] = useState(0)
    useEffect(() => {  
         init();              
    },[]);

    const init = () => {
      spDispatcherServiceData = new SPDepartmentalServiceData(mainContext);
      spDispatcherServiceData.getDispatcherPlates()
      .then((res)=>{
        setDispatcherCountData(res);
        setUnlockDispatcherCard(1);
      })
    }
    // style={{fontSize:'25px', cursor:'pointer'}}
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
                <div className="ms-Grid">
                 <div className="ms-Grid-row ms-lg12 ms-sm12">               
                 <h4>{strings.DepartmentBasedCardLabel}</h4>
                {   
                  (UnlockDispatcherCard !== 0) &&
                  dispatcherCountData.map((res,index)=>{
                    return(
                  <div className="ms-Grid-col ms-lg4 ms-sm4">
                  <div className={`${styles.smallBox} ${styles.setMainBox}`} >
                  <div className={styles.SetMainTitle}>
                      <h4>{res.deptName}</h4>
                    </div>
                    <ul className={styles.nav}>
                      <li>
                        <a>{strings.InProcessLabel}
                          <span className={`${styles['bg-red']} ${styles['pull-right']} ${styles.badge}`}>{res.thisCount}</span>
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

export default DispatcherTab
