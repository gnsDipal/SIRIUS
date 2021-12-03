import * as React from 'react';
import styles from './ObjectivesGoals.module.scss';
import { IObjectivesGoalsProps, IObjectivesGoalsState } from './IObjectivesGoalsProps';
import { Icon } from '@fluentui/react/lib/Icon';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import Organization from '../components/Organization/Organization';
import Department from '../components/Department/Deparment';
import Personal from '../components/Personal/Personal';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';

let GoalSecurityData: any = [];

const stackTokens = { childrenGap: 50  };

const MyObjectivesGoalsIcon = () => <Icon iconName="GroupObject" className = {styles.objectivesGoals} />;

export default class ObjectivesGoals extends React.Component<IObjectivesGoalsProps, IObjectivesGoalsState, {}> {

  constructor(props: IObjectivesGoalsProps, state:IObjectivesGoalsState) {
    super(props); 
    this.state = {  
      // goalSecurityData: [{
      //   Id:"",
      //   Title:"",
      //   IsButtonDisplay:true,
      //   Members:"",
      //   MembersId:0,       
      // }],
      goalsOptions:"Organization",   
      bulletPointColor:"Red",
      bgColorOrganization:"#04ef00",
      bgColorDepartment: "white",
      bgColorPersonal: "white", 
      colorOrganization:"black",
      colorDepartment:"black",
      colorPersonal:"black",
      //AddGoalButtonDisplay:true,
    };          
  }

  componentDidMount()
  { 
    //this._getGoalSecurityData();   
  } 

  // _getGoalSecurityData = async () =>
  // {    
  //   const headers: HeadersInit = new Headers();
  //   headers.append("accept", "application/json;odata.metadata=none");

  //       await this.props.spHttpClient
  //       .get(`${this.props.siteurl}_api/web/lists/getbytitle('GoalSecurityAddGoal')/items?$select=ID,Title,IsButtonDisplay,Members/Id,Members/Title&$expand=Members`, 
  //         SPHttpClient.configurations.v1, {
  //         headers: headers
  //       })
  //       .then((result: SPHttpClientResponse) => {          
  //         return result.json();
  //       })
  //       .then((jsonresult) => {
  //         GoalSecurityData = [];         
  //         for(let i=0; i<jsonresult.value.length; ++i)
  //         {
  //           GoalSecurityData.push({             
  //             Id:jsonresult.value[i].Id,
  //             Title:jsonresult.value[i].Title,
  //             IsButtonDisplay:jsonresult.value[i].IsButtonDisplay,
  //             Members:jsonresult.value[i].Members.Title,
  //             MembersId:jsonresult.value[i].Members.Id,                 
  //           });
  //           if(jsonresult.value[i].IsButtonDisplay === true){
  //               this.setState({
  //                 AddGoalButtonDisplay: false,
  //                 },()=>console.log("Organization Data =>" + this.state.goalSecurityData)
  //               )
  //            }
  //         }
  //         console.log("Organization Data=>" + GoalSecurityData);

  //         this.setState({
  //           goalSecurityData: GoalSecurityData
  //         },()=>console.log("Organization Data =>" + this.state.goalSecurityData)
  //         )
  //       })      
  // } 
  
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

  public render(): React.ReactElement<IObjectivesGoalsProps> {
    //alert("isAddOrganizationGoalButtonDisplay"+this.props.isAddOrganizationGoalButtonDisplay );
    return (
      <div className={ styles.objectivesGoals }>
        {/* <div className={ styles.container }> */}
            <div className={styles.description}>                        
              <h1 style={{margin:'0'}}><MyObjectivesGoalsIcon/> Objectives and Goals </h1>
            </div>
            <br></br>
            {/* { (this.props.OrganizationTabDisplay === true) &&  ""  }           */}
            <div className={styles.SetDisplay}>   
            <div><DefaultButton className={styles.GoalsTabBtn} style={{backgroundColor:this.state.bgColorOrganization, color:this.state.colorOrganization}} onClick={this.OrganizationButtonClicked}><h3>Organization</h3></DefaultButton></div>                                                         
            <div><DefaultButton className={styles.GoalsTabBtn} style={{backgroundColor:this.state.bgColorDepartment, color:this.state.colorDepartment}} onClick={this.DepartmentButtonClicked}><h3>Department</h3></DefaultButton></div>
            <div><DefaultButton className={styles.GoalsTabBtn} style={{backgroundColor:this.state.bgColorPersonal, color:this.state.colorPersonal}} onClick={this.PersonalButtonClicked}><h3>Personal</h3></DefaultButton></div>                                                          
            </div> 
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
                  //isAddOrganizationGoalButtonDisplay={this.state.AddGoalButtonDisplay}
                  RequireGoalStatusId={this.props.RequireGoalStatusId}
                  openAddEditForm={this.props.openAddEditForm}
                  //isOrgnizationGoalFormDisplay={this.props.isOrgnizationGoalFormDisplay}
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
