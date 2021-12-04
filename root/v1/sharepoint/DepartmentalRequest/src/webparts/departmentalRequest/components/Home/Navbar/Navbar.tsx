import * as React from 'react'
import { DefaultButton, PrimaryButton, CompoundButton, IButtonStyles } from '@fluentui/react/lib/Button';
import styles from '../Home.module.scss';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Icon } from '@fluentui/react/lib/Icon';
import {BrowserRouter as Router,Switch,Route,HashRouter,Link,NavLink,PrivateRoute,useHistory, useLocation,useParams } from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.home}>
        {
          <div>
            <div className="ms-Grid" dir="ltr"> 
            <div className="ms-Grid-row">
              <div className="ms-Grid-col" ms-lg8 ms-md8 ms-sm8>
                <h1>{strings.WelcomeLabel}</h1>
              </div>
              {
                // (props.webPartContext.sdks.microsoftTeams) &&
              <div className="ms-Grid-col" ms-lg2 ms-md2 ms-sm2>
                <div style={{margin:'0', float:'right'}}>
                    <Icon className={styles.teamsSettings} iconName="Settings"></Icon>                  
                </div>
              </div>
              }
            </div>
              <div className="ms-Grid-row">
                <div className="ms-Grid-col">
                  <div className="ms-u-sm12 ms-u-md4 ms-u-lg4 block">
                  <Link to="/requested">
                  <CompoundButton className={styles.myIssuesButton}>{strings.RequestedIssuesLabel}</CompoundButton>
                  </Link>
                  </div>
                </div>
                <div className="ms-Grid-col">
                  <div className="ms-u-sm12 ms-u-md4 ms-u-lg4 block">
                  <Link to="/assigned">
                  <CompoundButton className={styles.myIssuesButton}>{strings.AssignedIssuesLabel}</CompoundButton>
                  </Link>
                  </div>
                </div>
                <div className="ms-Grid-col">
                  <div className="ms-u-sm12 ms-u-md4 ms-u-lg4 block">
                  <Link to="/dispatcher">
                    <CompoundButton className={styles.myIssuesButton}>{strings.DispatcherViewLabel}</CompoundButton>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-u-sm6 block">
                <Link to="/raise">
                  <CompoundButton className={styles.raisedRequestButton}>{strings.NewTicketLabel}
                  <Icon iconName="Ticket" className={styles.lowerImagesIconClass} style={{fontSize:'100px', textAlign:'center'}}
                  />
                  </CompoundButton>
                  </Link>
                </div>
                <div className="ms-Grid-col ms-u-sm6 block">
                  <Link to="/manager">
                   <CompoundButton className={styles.managerViewButton}>{strings.ManagerViewLabel}
                    <Icon iconName='ReminderPerson' className={styles.lowerImagesIconClass} style={{fontSize:'100px', textAlign:'center'}}
                    /> 
                   </CompoundButton>
                   </Link>
                </div>
              </div>
            </div>
          </div>
          }

        </div>
    )
}

export default Navbar
