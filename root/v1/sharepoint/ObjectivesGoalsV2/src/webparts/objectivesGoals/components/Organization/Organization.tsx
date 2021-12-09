import * as React from 'react';
import styles from '../Organization/Organization.module.scss';
import { IOrganizationProps, IOrganizationState } from '../Organization/IOrganizationProps';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import {
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneLabel,
  PropertyPaneLink,
  PropertyPaneSlider,
  PropertyPaneToggle,
  PropertyPaneDropdown
} from '@microsoft/sp-property-pane';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import AddEditOrgnizationGoal from './AddEditOrganizationGoal';

const stackTokens = { childrenGap: 50  };

//let ExpandableOptionsData: any = [];
let GoalSecurityData: any = [];
let MonthlyTargetData: any = [];
let QuarterlyObjectivesData: any = [];
let YearlyGoalsData: any = [];
let EditStatusIdData: any =[];
let OrganizationGroupMembersData: any =[];
var SPGroupList = new Array();

const expandableOptions: IDropdownOption[] = [
  // { key: 'ExpandableOptions', text: 'Selet an Option ', itemType: DropdownMenuItemType.Header },
  // { key: 'ExpandableOptions', text: 'Organization' },
  // { key: 'ExpandableOptions', text: 'Department' },
  // { key: 'ExpandableOptions', text: 'Personal' } 
];

export default class Organization extends React.Component<IOrganizationProps, IOrganizationState, {}> {

  constructor(props: IOrganizationProps, state:IOrganizationState) {
    super(props); 
    this.state = {
      goalSecurityData: [{
        Id:"",
        Title:"",
        //IsButtonDisplay:true,
        Members:"",
        MembersId:0,       
      }],
      monthlyTargetData: [{
        Id:"",
        Title:"",
        Goal:"",
        Interval:"", 
        StatusPercentage:0,          
      }],
      quarterlyObjectivesData: [{
        Id:"",
        Title:"",
        Goal:"",
        Interval:"", 
        StatusPercentage:0,          
      }],
      yearlyGoalsData: [{
        Id:"",
        Title:"",
        Goal:"",
        Interval:"", 
        StatusPercentage:0,           
      }],
      editStatusIdData: [{
        Id:"",
        Title:"",
        Goal:"",
        Interval:"",
        StatusPercentage:0,    
      }],
      organizationGroupMembersData:[{
        Id:"",
        Email:"", 
      }],
      organizationGroupId:0,
      organizationGroup:"",
      expandableOptionsData:[],
      count:0,     
      isOrgnizationGoalFormDisplay: false,     
      isIntervalDataDisplay:true,
      GoalStatusId:0,
      openAddEditForm:0,
      AddGoalButtonDisplay:false,    
    };          
  }

  handleCallback = (childData) =>{
    this.setState({isOrgnizationGoalFormDisplay: childData})
}

  componentDidMount()
  { 
    //this._getExpandableOptionsData();
    this._getGoalSecurityData();
    //this._getOrganizationGroupMembersData();
    this._monthlyTargetData();
    this._quarterlyObjectivesData();
    this._yearlyGoalsData();
    //this.editStatus();
    //this.displayEditStatusIdData();
  }   

  MonthlyTargetClicked = () =>{
    this.setState({
      count: 1,        
    })
    this._monthlyTargetData();
  }

  QuarterlyObjectivesClicked = () =>{
    this.setState({
      count: 2,  
    })
  }

  YearlyGoalsClicked = () =>{
    this.setState({
      count: 3,   
    })
  }

  AddOrganizationGoalClicked = () =>{
    this.setState({
      isOrgnizationGoalFormDisplay: true,    
      isIntervalDataDisplay: false,
      openAddEditForm:1,  
    })
  }

  _getGoalSecurityData = async () =>
  {    
    const headers: HeadersInit = new Headers();
    headers.append("accept", "application/json;odata.metadata=none");

        await this.props.spHttpClient
        .get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalSecurityAddGoal')/items?$select=ID,Title,Members/Id,Members/Title&$expand=Members`, 
          SPHttpClient.configurations.v1, {
          headers: headers
        })
        .then((result: SPHttpClientResponse) => {          
          return result.json();
        })
        .then((jsonresult) => {
          GoalSecurityData = [];         
          for(let i=0; i<jsonresult.value.length; ++i)
          {
            GoalSecurityData.push({             
              Id:jsonresult.value[i].Id,
              Title:jsonresult.value[i].Title,
              //IsButtonDisplay:jsonresult.value[i].IsButtonDisplay,
              Members:jsonresult.value[i].Members.Title,
              MembersId:jsonresult.value[i].Members.Id,                 
            });           
                    
          }
          console.log("Organization Data=>" + GoalSecurityData);
          this.setState({
            goalSecurityData: GoalSecurityData,
            organizationGroupId: GoalSecurityData[0].MembersId,
            organizationGroup: GoalSecurityData[0].Members, 
            },()=>console.log("Organization Data =>" + this.state.goalSecurityData + this.state.organizationGroupId)
          )
          if (this.state.organizationGroupId != 0)          
          {
            this._getOrganizationGroupMembersData();
          }
          
        })      
  } 

  _getOrganizationGroupMembersData = async () =>
  {    
    const headers: HeadersInit = new Headers();
    headers.append("accept", "application/json;odata.metadata=none");

        await this.props.spHttpClient
        .get(`${this.props.siteurl}/_api/Web/SiteGroups/GetById(${this.state.organizationGroupId})/users?$select=Email,Id`, 
          SPHttpClient.configurations.v1, {
          headers: headers
        })
        .then((result: SPHttpClientResponse) => {          
          return result.json();
        })
        .then((jsonresult) => {
          OrganizationGroupMembersData = [];         
          for(let i=0; i<jsonresult.value.length; ++i)
          {
            OrganizationGroupMembersData.push({             
              Id:jsonresult.value[i].Id,
              Email:jsonresult.value[i].Email,                            
            });
            if(jsonresult.value[i].Id === this.props.currentUserId)
            {
                 this.AddOrganizationGoalButtonDisplay();
                // this.setState({
                //   //isOrgnizationGoalFormDisplay: true,
                //   AddGoalButtonDisplay:true,                  
                //   },()=>console.log("AddGoal Button Display =>" + this.state.AddGoalButtonDisplay)
                // )
             }
          }
          console.log("OrganizationGroupMembersData=>" + OrganizationGroupMembersData);

          // this.setState({
          //   goalSecurityData: GoalSecurityData
          // },()=>console.log("Organization Data =>" + this.state.goalSecurityData)
          // )
        })      
  } 

  AddOrganizationGoalButtonDisplay = () =>{
    console.log("AddGoal Button Display =>" + this.state.AddGoalButtonDisplay)
    this.setState({
      AddGoalButtonDisplay:true, 
    })
  }

  editStatus= (SelectedId) =>{
    alert( "Button clicked for Status change. Id For Goal =>" + SelectedId)
    this.setState({
      GoalStatusId: SelectedId,   
      isOrgnizationGoalFormDisplay: true,
      isIntervalDataDisplay: false,  
      openAddEditForm:2,
    })
  }

  async onChangeStatusHandle(selectedId:any){
    this.setState({
      //selectedGoal:await selectedGoal.currentTarget.value,
      GoalStatusId:await selectedId,
        })
      console.log("GoalStatusId ==> ", this.state.GoalStatusId);
   }

   displayEditStatusIdData =  async () =>
   {    
      const headers: HeadersInit = new Headers();
      headers.append("accept", "application/json;odata.metadata=none");

        await this.props.spHttpClient
        .get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalOrganization')/items?$select=ID,Title,Goal,Interval,StatusPercentage&$filter=Id eq '${this.state.GoalStatusId}'`, 
          SPHttpClient.configurations.v1, {
          headers: headers
        })
        .then((result: SPHttpClientResponse) => {          
          return result.json();
        })
        .then((jsonresult) => {
          EditStatusIdData = [];         
          for(let i=0; i<jsonresult.value.length; ++i)
          {
            EditStatusIdData.push({           
              Id:jsonresult.value[i].Id,
              Title:jsonresult.value[i].Title,
              Goal:jsonresult.value[i].Goal,
              Interval:jsonresult.value[i].Interval,
              StatusPercentage:jsonresult.value[i].StatusPercentage,             
            });
          }
          console.log("EditStatusId Data=>" + EditStatusIdData);
          this.setState({
            editStatusIdData: EditStatusIdData
          },()=>console.log("EditStatusId Data  =>" + this.state.editStatusIdData)
          )
        })      
      } 
      
  _monthlyTargetData = async () =>
  {    
    const headers: HeadersInit = new Headers();
    headers.append("accept", "application/json;odata.metadata=none");

        await this.props.spHttpClient
        .get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalOrganization')/items?$select=ID,Title,Goal,Interval,StatusPercentage&$filter=Interval eq 'Monthly Target'`, 
          SPHttpClient.configurations.v1, {
          headers: headers
        })
        .then((result: SPHttpClientResponse) => {          
          return result.json();
        })
        .then((jsonresult) => {
          MonthlyTargetData = [];         
          for(let i=0; i<jsonresult.value.length; ++i)
          {
            MonthlyTargetData.push({            
              Id:jsonresult.value[i].Id,
              Title:jsonresult.value[i].Title,
              Goal:jsonresult.value[i].Goal,
              Interval:jsonresult.value[i].Interval,
              StatusPercentage:jsonresult.value[i].StatusPercentage,            
            });
          }
          console.log("Monthly Target Data Array=>" + MonthlyTargetData);
          this.setState({
            monthlyTargetData: MonthlyTargetData,           
          },()=>console.log("Monthly Target Data =>" + this.state.monthlyTargetData)
          )
        })      
  }  

  _quarterlyObjectivesData = async () =>
  {    
    const headers: HeadersInit = new Headers();
    headers.append("accept", "application/json;odata.metadata=none");

        await this.props.spHttpClient   
        .get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalOrganization')/items?$select=ID,Title,Goal,Interval,StatusPercentage&$filter=Interval eq 'Quarterly Objectives'`, 
          SPHttpClient.configurations.v1, {
          headers: headers
        })
        .then((result: SPHttpClientResponse) => {          
          return result.json();
        })
        .then((jsonresult) => {         
          QuarterlyObjectivesData = [];         
          for(let i=0; i<jsonresult.value.length; ++i)
          {
            QuarterlyObjectivesData.push({        
              Id:jsonresult.value[i].Id,
              Title:jsonresult.value[i].Title,
              Goal:jsonresult.value[i].Goal,
              Interval:jsonresult.value[i].Interval,
              StatusPercentage:jsonresult.value[i].StatusPercentage,            
            });
          }
          console.log("Quarterly Objectives Data Array=>" + QuarterlyObjectivesData);
          this.setState({
            quarterlyObjectivesData: QuarterlyObjectivesData,           
          },()=>console.log("Quarterly Objectives Data =>" + this.state.quarterlyObjectivesData)
          )
        })      
  }  
   
  _yearlyGoalsData = async () =>
  {    
    const headers: HeadersInit = new Headers();
    headers.append("accept", "application/json;odata.metadata=none");

        await this.props.spHttpClient     
        .get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalOrganization')/items?$select=ID,Title,Goal,Interval,StatusPercentage&$filter=Interval eq 'Yearly Goals'`, 
          SPHttpClient.configurations.v1, {
          headers: headers
        })
        .then((result: SPHttpClientResponse) => {          
          return result.json();
        })
        .then((jsonresult) => {
          YearlyGoalsData = [];         
          for(let i=0; i<jsonresult.value.length; ++i)
          {
            YearlyGoalsData.push({           
              Id:jsonresult.value[i].Id,
              Title:jsonresult.value[i].Title,
              Goal:jsonresult.value[i].Goal,
              Interval:jsonresult.value[i].Interval,
              StatusPercentage:jsonresult.value[i].StatusPercentage,             
            });
          }
          console.log("Yearly Goals Data Array=>" + YearlyGoalsData);
          this.setState({
            yearlyGoalsData: YearlyGoalsData,            
          },()=>console.log("Yearly Goals Data =>" + this.state.yearlyGoalsData)
          )
        })      
  }  


  public render(): React.ReactElement<IOrganizationProps> {   
    return (
      <div className={ styles.organization }>
        {/* <div className={ styles.container }>                            */}
          { (this.state.isIntervalDataDisplay === true) &&         
            <div className={styles.SetDisplay}>   
              <div className={styles.IntervalButtonDiv}><DefaultButton className={styles.IntervalButtons} ><h3>Monthly Target</h3></DefaultButton></div>                                                         
              <div className={styles.DataDisplay}>
                {/* <h3>Monthly Taget of Organization</h3> */}
                <ul>                  
                    {this.state.monthlyTargetData.map( (MonthlyTarget, index)=> {
                    // return(
                    // //<li key={MonthlyTarget.Id} style={{color:MonthlyTarget.Color}}>{MonthlyTarget.Color} {MonthlyTarget.Goal}
                    // <li key={MonthlyTarget.Id}> {MonthlyTarget.Goal}
                    // <progress id="file" value="75" max="100"></progress>75%
                    // </li>            
                    // )
                    return(
                      <li key={MonthlyTarget.Id} >
                        <table> 
                            <tr><td>{MonthlyTarget.Goal}</td></tr>                            
                            <tr>
                                <td><progress id="file" value={MonthlyTarget.StatusPercentage} max="100"> </progress>{MonthlyTarget.StatusPercentage}%</td>
                                { ((this.props.isAddOrganizationGoalButtonDisplay) && (this.state.AddGoalButtonDisplay) ) &&
                                <td> <button onClick={()=>this.editStatus(MonthlyTarget.Id)} onChange={(selectedId)=>this.onChangeStatusHandle(selectedId)}> Edit </button> </td>
                                }
                             </tr>
                        </table>                                               
                      </li>            
                      )
                    })}             
                </ul>              
              </div>                                                          
            </div> 
          }
          { (this.state.isIntervalDataDisplay === true) &&
            <div className={styles.SetDisplay}>   
              <div className={styles.IntervalButtonDiv}><DefaultButton className={styles.IntervalButtons} ><h3>Quaterly Objectives</h3></DefaultButton></div>                                                         
              <div className={styles.DataDisplay}>
                {/* <h3>Quaterly Objectives of Organization</h3> */}
                <ul>                  
                      {this.state.quarterlyObjectivesData.map( (QuarterlyObjectives, index)=> {
                      // return(
                      // <li key={QuarterlyObjectives.Id} > {QuarterlyObjectives.Goal}
                      // <progress id="file" value="50" max="100"></progress>50%
                      // <button onClick={this.editStatus} onChange={(selectedId)=>this.onChangeStatusHandle(selectedId)}> Edit </button>
                      // </li>            
                      // )
                      return(
                        <li key={QuarterlyObjectives.Id} >
                          <table> 
                              <tr><td>{QuarterlyObjectives.Goal}</td></tr>                            
                              <tr>
                                  <td><progress id="file" value={QuarterlyObjectives.StatusPercentage} max="100"> </progress>{QuarterlyObjectives.StatusPercentage}%</td>
                                  { ((this.props.isAddOrganizationGoalButtonDisplay) && (this.state.AddGoalButtonDisplay) ) &&
                                  <td> <button onClick={()=>this.editStatus(QuarterlyObjectives.Id)} onChange={(selectedId)=>this.onChangeStatusHandle(selectedId)}> Edit </button> </td>
                                  }
                               </tr>
                          </table>                                               
                        </li>            
                        )
                      })}             
                </ul>
              </div>                                                          
            </div>
          }
          { (this.state.isIntervalDataDisplay === true) &&
            <div className={styles.SetDisplay}>   
              <div className={styles.IntervalButtonDiv}><DefaultButton className={styles.IntervalButtons} ><h3>Yearly Target</h3></DefaultButton></div>                                                         
              <div className={styles.DataDisplay}>
                {/* <h3>Yearly Taget of Organization</h3> */}
                <ul>                  
                      {this.state.yearlyGoalsData.map( (YearlyGoals, index)=> {
                      // return(
                      // <li key={YearlyGoals.Id} >{YearlyGoals.Goal}
                      // <progress id="file" value="25" max="100"></progress>25%
                      // <button onClick={this.editStatus}> Edit </button>
                      // </li>            
                      // )
                      return(
                        <li key={YearlyGoals.Id} >
                          <table> 
                              <tr><td>{YearlyGoals.Goal}</td></tr>                            
                              <tr>
                                  <td><progress id="file" value={(YearlyGoals.StatusPercentage)} max="100"> </progress>{YearlyGoals.StatusPercentage}%</td>
                                  { ((this.props.isAddOrganizationGoalButtonDisplay) && (this.state.AddGoalButtonDisplay) ) &&
                                  <td> <button onClick={()=>this.editStatus(YearlyGoals.Id)} onChange={(selectedId)=>this.onChangeStatusHandle(selectedId)}> Edit </button> </td>
                                  }
                               </tr>
                          </table>                                               
                        </li>            
                        )

                      })}             
                </ul>
              </div>                                                          
            </div>
            }
                            
            { ((this.props.isAddOrganizationGoalButtonDisplay) && (this.state.AddGoalButtonDisplay) && (this.state.isIntervalDataDisplay === true) )&& 
            <DefaultButton className={ styles.AddOrganizationGoalButton} onClick={this.AddOrganizationGoalClicked}><h3>Add Organization Goal</h3></DefaultButton>
            }             
                       
             { (this.state.isOrgnizationGoalFormDisplay === true) &&                            
                <AddEditOrgnizationGoal description={this.props.description}
                  context={this.props.context}
                  siteurl={this.props.siteurl}
                  spHttpClient={this.props.spHttpClient}
                  webUrl={this.props.webUrl}
                  loggedInUserName= {this.props.loggedInUserName}
                  loggedInUserEmail= {this.props.loggedInUserEmail}
                  currentUserId={this.props.currentUserId}
                  isAddOrganizationGoalButtonDisplay={this.props.isAddOrganizationGoalButtonDisplay}
                  isIntervalDataDisplay={this.props.isIntervalDataDisplay}
                  RequireGoalStatusId={this.state.GoalStatusId}
                  //openOrganizationForm={this.state.openAddEditForm}
                  openAddEditForm={this.state.openAddEditForm}
                  //isOrgnizationGoalFormDisplay={this.handleCallback}
                  OrganizationTabDisplay={this.props.OrganizationTabDisplay}>
                  </AddEditOrgnizationGoal>               
             }                                 
        {/* </div> */}
      </div>
    );
  }
}
