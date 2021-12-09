import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import { CompoundButton } from '@fluentui/react/lib/Button';
import styles from '../Home.module.scss';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Icon } from '@fluentui/react/lib/Icon';
import {BrowserRouter as Router,Link } from "react-router-dom";
import SPDepartmentalServiceData from '../../../../../services/SPDepartmentalServiceData';
import { UserContext } from '../../Main/Main';
debugger;
let spPermissionDataService:SPDepartmentalServiceData = null;
const Navbar = () => {
    const mainContext = useContext(UserContext);
    //state variable
    const [dispatcherPermit, setDispatcherPermit] = useState(false);// check permission
    const [assignedPermit, setAssignedPermit] = useState(false);// check permission
    const [managerPermit, setManagerPermit] = useState(false);// check permission
    useEffect(() => { 
      init();              
    },[]);
    //initialization
    const init = async()=>{
      spPermissionDataService = new SPDepartmentalServiceData(mainContext);
      await spPermissionDataService.getDispatcherPermissionHandle()
      .then(r=>{
        setDispatcherPermit(r);
      });
      await spPermissionDataService.getAssignedPermissionHandle()
      .then(r=>{
        setAssignedPermit(r);
      });
      await spPermissionDataService.getManagerPermissionHandle()
      .then(r=>{
        setManagerPermit(r);
      })
    }
    return (
        <div className={styles.home}>
        {
          <div>
            <div className="ms-Grid" dir="ltr"> 
            <div className="ms-Grid-row">
              <div className="ms-Grid-col" ms-lg8 ms-md8 ms-sm8>
                <h1>{strings.WelcomeLabel}</h1>
              </div>
              { (mainContext.sdks.microsoftTeams) &&
              <div className="ms-Grid-col" ms-lg2 ms-md2 ms-sm2>
                <div className={styles.gearIcon}>
                    <Icon className={styles.teamsSettings} iconName={strings.SettingsLabel}></Icon>                  
                </div>
              </div>
              }
            </div>
              <div className="ms-Grid-row">
                  <div className="ms-Grid-col ms-sm12 ms-md4 ms-lg4">
                  <Link to="/requested">
                  <CompoundButton className={styles.myIssuesButton}>{strings.RequestedIssuesLabel}</CompoundButton>
                  </Link>
                  </div>
                { assignedPermit && 
                  <div className="ms-Grid-col ms-sm12 ms-md4 ms-lg4">
                  <Link to="/assigned">
                  <CompoundButton className={styles.assignedIssuesButton}>{strings.AssignedIssuesLabel}</CompoundButton>
                  </Link>
                  </div>
                }
                { dispatcherPermit &&
                  <div className="ms-Grid-col ms-sm12 ms-md4 ms-lg4">
                  <Link to="/dispatcher">
                    <CompoundButton className={styles.dispatcherViewButton}>{strings.DispatcherViewLabel}</CompoundButton>
                    </Link>
                  </div>
                }
              </div>
                
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-u-sm6 block">
                <Link to="/raise">
                  <CompoundButton className={styles.raisedRequestButton}>{strings.NewTicketLabel}
                  <Icon iconName={strings.TicketLabel} className={styles.lowerImagesIconClass} style={{fontSize:'100px', textAlign:'center'}}
                  />
                  </CompoundButton>
                  </Link>
                </div>
                { managerPermit &&
                <div className="ms-Grid-col ms-u-sm6 block">
                  <Link to="/manager">
                   <CompoundButton className={styles.managerViewButton}>{strings.ManagerViewLabel}
                    <Icon iconName={strings.ReminderPersonLabel} className={styles.lowerImagesIconClass} style={{fontSize:'100px', textAlign:'center'}}
                    /> 
                   </CompoundButton>
                   </Link>
                </div>
                }
              </div>
            </div>
          </div>
          }

        </div>
    )
}

export default Navbar
