import * as React from 'react';
import styles from './ObjectivesGoals.module.scss';
import { IObjectivesGoalsProps, IObjectivesGoalsState } from './IObjectivesGoalsProps';
import { Icon } from '@fluentui/react/lib/Icon';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import Organization from '../components/Organization/Organization';
import Department from '../components/Department/Deparment';
import Personal from '../components/Personal/Personal';
import PanelSettings from './PanelSettings/PanelSettings';
import { TooltipHost } from '@fluentui/react/lib/Tooltip';

const MyObjectivesGoalsIcon = () => <Icon iconName="GroupObject" className = {styles.objectivesGoals} />;
const TeamsSettingsIcon = () => <Icon iconName="Settings" />
initializeIcons();

debugger;
export default class ObjectivesGoals extends React.Component<IObjectivesGoalsProps, IObjectivesGoalsState, {}> {

  constructor(props: IObjectivesGoalsProps, state:IObjectivesGoalsState) {
    super(props); 
    this.state = {  
      goalsOptions:"Organization",   
      bulletPointColor:"Red",
      bgColorOrganization:"#04ef00",
      bgColorDepartment: "white",
      bgColorPersonal: "white", 
      colorOrganization:"black",
      colorDepartment:"black",
      colorPersonal:"black",
      isSettingsPanelOpen:false,
    };          
  }

  componentDidMount()
  {    //this._getGoalSecurityData();   
  } 

  OrganizationButtonClicked = () =>{  
    this.setState({
      goalsOptions: "Organization", 
      bgColorOrganization:"#04ef00",
      bgColorDepartment:"white",
      bgColorPersonal:"white",
      colorOrganization:"white",
      colorDepartment:"black", 
      colorPersonal:"black",    
    })
  }

  DepartmentButtonClicked = () =>{
    this.setState({
      goalsOptions: "Department",
      bgColorOrganization:"white",
      bgColorDepartment:"#04ef00",
      bgColorPersonal:"white",
      colorOrganization:"black",
      colorDepartment:"white",
      colorPersonal:"black",        
    })
  }

  PersonalButtonClicked = () =>{  
    this.setState({
      goalsOptions: "Personal", 
      bgColorOrganization:"white",
      bgColorDepartment:"white",
      bgColorPersonal:"#04ef00",
      colorOrganization:"black",
      colorDepartment:"black",
      colorPersonal:"white",           
    })
  }

  private setIsSettingsPanelOpen()
  {  this.setState({
      isSettingsPanelOpen: !this.state.isSettingsPanelOpen
    });
  }

  public render(): React.ReactElement<IObjectivesGoalsProps> {  
    return (
      <div className={ styles.objectivesGoals }>
        {/* <div className={ styles.container }> */}
            <div className={styles.description}>                        
              <h1 style={{margin:'0', float:'left'}}><MyObjectivesGoalsIcon/> Objectives and Goals </h1>
              <div onClick={() => { this.setIsSettingsPanelOpen(); }} className={styles.teamsSettings}>
                <TooltipHost content="Configure properties"><TeamsSettingsIcon /></TooltipHost>
              </div > 
              {(this.props.webPartContext.sdks.microsoftTeams) && 
                <h1>Configuration Settings</h1> 
               }             
              {(this.props.webPartContext.sdks.microsoftTeams) && 
                <div  className={styles.teamsSettings}>
                <TooltipHost content="Configure properties"><Icon iconName="Settings" onClick={() => { this.setIsSettingsPanelOpen() }} /></TooltipHost>
                </div >
               }
              {this.state.isSettingsPanelOpen &&
              <PanelSettings webPartContext={this.props.webPartContext} onClosePanel={() => { this.setIsSettingsPanelOpen();}} />
              }  
            </div>
            <br></br>
            <div className={(this.props.webPartContext.sdks.microsoftTeams) ? styles.SetDisplayTeamsApp : styles.SetDisplay}>               
              <div style={{width:'33.33%'}}><DefaultButton className={(this.props.webPartContext.sdks.microsoftTeams) ? styles.GoalsTabBtnTeamsApp : styles.GoalsTabBtn}
                    style={{backgroundColor:this.state.bgColorOrganization, color:this.state.colorOrganization}} onClick={this.OrganizationButtonClicked}><h3>Organization</h3></DefaultButton></div>                                                         
              <div style={{width:'33.33%'}}><DefaultButton className={(this.props.webPartContext.sdks.microsoftTeams) ? styles.GoalsTabBtnTeamsApp : styles.GoalsTabBtn} 
                      style={{backgroundColor:this.state.bgColorDepartment, color:this.state.colorDepartment}} onClick={this.DepartmentButtonClicked}><h3>Department</h3></DefaultButton></div>
              <div style={{width:'33.33%'}}><DefaultButton className={(this.props.webPartContext.sdks.microsoftTeams) ? styles.GoalsTabBtnTeamsApp : styles.GoalsTabBtn} 
                      style={{backgroundColor:this.state.bgColorPersonal, color:this.state.colorPersonal}} onClick={this.PersonalButtonClicked}><h3>Personal</h3></DefaultButton></div>                                                          
            </div> 
            {/* <div className={styles.SetDisplay}>   
            <div style={{width:'33.33%'}}><DefaultButton className={styles.GoalsTabBtn} style={{backgroundColor:this.state.bgColorOrganization, color:this.state.colorOrganization}} onClick={this.OrganizationButtonClicked}><h3>Organization</h3></DefaultButton></div>                                                         
            <div style={{width:'33.33%'}}><DefaultButton className={styles.GoalsTabBtn} style={{backgroundColor:this.state.bgColorDepartment, color:this.state.colorDepartment}} onClick={this.DepartmentButtonClicked}><h3>Department</h3></DefaultButton></div>
            <div style={{width:'33.33%'}}><DefaultButton className={styles.GoalsTabBtn} style={{backgroundColor:this.state.bgColorPersonal, color:this.state.colorPersonal}} onClick={this.PersonalButtonClicked}><h3>Personal</h3></DefaultButton></div>                                                          
            </div>  */}
            {  
             ((this.state.goalsOptions === "Organization") ? 
              <Organization description={this.props.description}
                  context={this.props.context}
                  siteurl={this.props.siteurl}
                  spHttpClient={this.props.spHttpClient}
                  webUrl={this.props.webUrl}
                  loggedInUserName= {this.props.loggedInUserName}
                  loggedInUserEmail= {this.props.loggedInUserEmail}
                  currentUserId={this.props.currentUserId}
                  isAddOrganizationGoalButtonDisplay={this.props.isAddOrganizationGoalButtonDisplay}
                  isIntervalDataDisplay={this.props.isIntervalDataDisplay}               
                  RequireGoalStatusId={this.props.RequireGoalStatusId}
                  openAddEditForm={this.props.openAddEditForm}                 
                  OrganizationTabDisplay={this.props.OrganizationTabDisplay}
                  ></Organization>
              :
                (this.state.goalsOptions === "Department") ?               
                <Department description={this.props.description}
                context={this.props.context}
                siteurl={this.props.siteurl}
                spHttpClient={this.props.spHttpClient}
                webUrl={this.props.webUrl}
                loggedInUserName= {this.props.loggedInUserName}
                loggedInUserEmail= {this.props.loggedInUserEmail}
                currentUserId={this.props.currentUserId}
                isAddDepartmentGoalButtonDisplay={this.props.isAddDepartmentGoalButtonDisplay}
                isIntervalDataDisplay={this.props.isIntervalDataDisplay}
                RequireGoalStatusId={this.props.RequireGoalStatusId}
                openAddEditForm={this.props.openAddEditForm}></Department>
                :
                  (this.state.goalsOptions === "Personal") ?
                  <Personal description={this.props.description}
                  context={this.props.context}
                  siteurl={this.props.siteurl}
                  spHttpClient={this.props.spHttpClient}
                  webUrl={this.props.webUrl}
                  loggedInUserName= {this.props.loggedInUserName}
                  loggedInUserEmail= {this.props.loggedInUserEmail}
                  currentUserId={this.props.currentUserId}
                  isAddPersonalGoalButtonDisplay={this.props.isAddPersonalGoalButtonDisplay}
                  isIntervalDataDisplay={this.props.isIntervalDataDisplay}
                  RequireGoalStatusId={this.props.RequireGoalStatusId}
                  openAddEditForm={this.props.openAddEditForm}></Personal>               
                  
                  :"" )}              
        {/* </div>                */}
      </div>
    );
  }
}
