import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import { CompoundButton } from '@fluentui/react/lib/Button';
import styles from '../Home.module.scss';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Icon } from '@fluentui/react/lib/Icon';
import {BrowserRouter as Router,Link } from "react-router-dom";
import SPDepartmentalServiceData from '../../../../../services/SPDepartmentalServiceData';
import { UserContext } from '../../Main/Main';
import { _UserCustomAction } from '@pnp/sp/user-custom-actions/types';
import SettingsPanel from '../SettingsPanel/SettingsPanel';
// debugger;
let spPermissionDataService:SPDepartmentalServiceData = null;
const Navbar = () => {
    const mainContext = useContext(UserContext);
    //state variable
    const [dispatcherPermit, setDispatcherPermit] = useState<boolean>(false);// check dispatcher permission
    const [assignedPermit, setAssignedPermit] = useState<boolean>(false);// check Assigned Issues permission
    const [managerPermit, setManagerPermit] = useState<boolean>(false);// check manager permission
    const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState<boolean>(false);
    const [isAdminCheck, setIsAdminCheck] = useState<boolean>(false); //Admin check
    useEffect(() => { 
      init();              
    },[]);
    //initialization
    const init = async()=>{
      spPermissionDataService = new SPDepartmentalServiceData(mainContext);
      // await spPermissionDataService.getAdminLoginCheck()
      // .then(r=>{
      //   setIsAdminCheck(r);
      // });
      // let adminInTeams =  mainContext.sdks.microsoftTeams.legacyPageContext.isSiteAdmin;
      // alert('adminInTeams = ' + adminInTeams);
      setIsAdminCheck(mainContext.pageContext.legacyPageContext.isSiteAdmin);
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
    const panelOpenHandle=()=>{setIsSettingsPanelOpen(true)}
    const panelCloseHandle=()=>{setIsSettingsPanelOpen(false)}
    return (
        <div className={styles.home}>
        {
          <div>
            <div className="ms-Grid" dir="ltr"> 
            <div className={styles.topHead}>
              <div className={styles.msGridColSize10}>
                <h1>{strings.WelcomeLabel}</h1>
              </div>
              { (mainContext.sdks.microsoftTeams) && (isAdminCheck) &&
              <div className={styles.msGridColSize2}>
                <div className={styles.gearIcon}>
                    <Icon className={styles.teamsSettings} iconName={strings.SettingsLabel} onClick={()=> panelOpenHandle()} ></Icon>                  
                </div>
              </div>
              }
            </div>
            <div>
              {
                (isSettingsPanelOpen) && 
                <SettingsPanel onClosePanel = {()=> panelCloseHandle()} />
              }
            </div>
              <div className={styles.msGridRowWithMargin50}> 
                  <div className={(dispatcherPermit === true)?((assignedPermit=== true)?styles.upperAllThree:styles.upperTwo):(assignedPermit=== true?styles.upperTwo:styles.upperOnlyOne)}>
                  <Link to="/requested">
                  <CompoundButton className={styles.myIssuesButton}>{strings.RequestedIssuesLabel}</CompoundButton>
                  </Link>
                  </div>
                { assignedPermit && 
                  <div className={(dispatcherPermit === true)?styles.upperAllThree:styles.upperTwo}>
                    <Link to="/assigned">
                      <CompoundButton className={styles.assignedIssuesButton}>{strings.AssignedIssuesLabel}</CompoundButton>
                    </Link>
                  </div>
                }
                { dispatcherPermit &&
                  <div className={(assignedPermit === true)?styles.upperAllThree:styles.upperTwo}>
                    <Link to="/dispatcher">
                      <CompoundButton className={styles.dispatcherViewButton}>{strings.DispatcherViewLabel}</CompoundButton>
                    </Link>
                  </div>
                }
              </div>
                
              <div className={styles.msGridRowWithMargin40}>
                <div className={managerPermit === true? styles.gridCallOut:styles.gridCompleteCallOut}>
                <Link to="/raise">
                  <CompoundButton className={styles.raisedRequestButton}>{strings.NewTicketLabel}
                  <Icon iconName={strings.TicketLabel} className={styles.raiseRequestIconClass} 
                  />
                  </CompoundButton>
                  </Link>
                </div>
                { managerPermit &&
                <div className={styles.gridCallOut}>
                  <Link to="/manager">
                   <CompoundButton className={styles.managerViewButton}>{strings.ManagerViewLabel}
                    <Icon iconName={strings.ReminderPersonLabel} className={styles.managerIconClass} 
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


