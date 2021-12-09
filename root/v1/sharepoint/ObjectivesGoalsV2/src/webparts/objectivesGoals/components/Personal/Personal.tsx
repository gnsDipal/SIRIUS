import * as React from 'react';
import styles from '../Personal/Personal.module.scss';
import { IPersonalProps, IPersonalState } from '../Personal/IPersonalProps';
//import { escape } from '@microsoft/sp-lodash-subset';
import { Icon } from '@fluentui/react/lib/Icon';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
//import AddGoals from '../components/AddGoals/AddGoals';
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
import AddPersonalGoal from './AddEditPersonalGoal';

const stackTokens = { childrenGap: 50  };

//const MyObjectivesGoalsIcon = () => <Icon iconName="GroupObject" className = {styles.personal} />;
let ExpandableOptionsData: any = [];
let PersonalData: any = [];
let MonthlyTargetData: any = [];
let QuarterlyObjectivesData: any = [];
let YearlyGoalsData: any = [];
let EditStatusIdData: any =[];

const expandableOptions: IDropdownOption[] = [
  // { key: 'ExpandableOptions', text: 'Selet an Option ', itemType: DropdownMenuItemType.Header },
  // { key: 'ExpandableOptions', text: 'Organization' },
  // { key: 'ExpandableOptions', text: 'Department' },
  // { key: 'ExpandableOptions', text: 'Personal' } 
];

debugger;
export default class Personal extends React.Component<IPersonalProps, IPersonalState, {}> {

  constructor(props: IPersonalProps, state:IPersonalState) {
    super(props); 
    this.state = {
      personalData: [{
        Id:"",
        Title:"",
        Goal:"",
        Interval:"", 
        StatusPercentage:0,          
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
      expandableOptionsData:[],
      count:0,
      //bulletPointColor:"Red",
      isPersonalGoalFormDisplay: false,      
      isIntervalDataDisplay:true,
      GoalStatusId:0,
      openAddEditForm:0,
    };          
  }

  componentDidMount()
  { 
    //this._getExpandableOptionsData();
    //this._getPersonalData();
    this._monthlyTargetData();
    this._quarterlyObjectivesData();
    this._yearlyGoalsData();
  } 
  
  // _getExpandableOptionsData = async () =>
  // {    
  //   const headers: HeadersInit = new Headers();
  //   headers.append("accept", "application/json;odata.metadata=none");

  //       await this.props.spHttpClient
  //       .get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalExpandableOptions')/items?$select=ID,Title`, 
  //         SPHttpClient.configurations.v1, {
  //         headers: headers
  //       })
  //       .then((result: SPHttpClientResponse) => {          
  //         return result.json();
  //       })
  //       .then((jsonresult) => {
  //         ExpandableOptionsData = [];         
  //         for(let i=0; i<jsonresult.value.length; ++i)
  //         {
  //           expandableOptions.push({
  //             //this.state.ExpandableOptionsData.push({
  //             key:jsonresult.value[i].Id,
  //             text:jsonresult.value[i].Title,              
  //           });
  //         }
  //         console.log("ExpandableOptionsData Array=>" + ExpandableOptionsData);
  //         this.setState({
  //           expandableOptionsData: expandableOptions,
  //         },()=>console.log("ExpandableOptions Data =>" + this.state.expandableOptionsData)
  //         )
  //       })      
  // }

  _getPersonalData = async () =>
  {    
    const headers: HeadersInit = new Headers();
    headers.append("accept", "application/json;odata.metadata=none");

        await this.props.spHttpClient
        .get(`${this.props.siteurl}/_api/web/lists/getbytitle('ObjectivesAndGoals')/items?$select=ID,Title,Goal,Interval,ExpandableOptions/Title&$expand=ExpandableOptions/Id,ExpandableOptions/Title&$filter=ExpandableOptions eq 'Organization'`, 
          SPHttpClient.configurations.v1, {
          headers: headers
        })
        .then((result: SPHttpClientResponse) => {          
          return result.json();
        })
        .then((jsonresult) => {
          PersonalData = [];         
          for(let i=0; i<jsonresult.value.length; ++i)
          {
            PersonalData.push({
              //this.state.goalsData.push({
              Id:jsonresult.value[i].Id,
              Title:jsonresult.value[i].Title,
              Goal:jsonresult.value[i].Goal,
              Interval:jsonresult.value[i].Interval,
              //Color:jsonresult.value[i].Color
            });
          }
          console.log("Personal Data=>" + PersonalData);
          this.setState({
            personalData: PersonalData
          },()=>console.log("Personal Data =>" + this.state.personalData)
          )
        })      
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

  AddPersonalGoalClicked = () =>{
    //alert( "Opening Add Personal Goal Form");
    this.setState({
      isPersonalGoalFormDisplay: true,    
      isIntervalDataDisplay: false,   
      openAddEditForm:1, 
    })
  }

  editStatus= (SelectedId) =>{
    alert( "Button clicked for Status change. Id For Goal =>" + SelectedId)
    this.setState({
      GoalStatusId: SelectedId,
      isPersonalGoalFormDisplay: true,         
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
              //this.state.goalsData.push({
              Id:jsonresult.value[i].Id,
              Title:jsonresult.value[i].Title,
              Goal:jsonresult.value[i].Goal,
              Interval:jsonresult.value[i].Interval,
              StatusPercentage:jsonresult.value[i].StatusPercentage,
              //Color:jsonresult.value[i].Color
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
    var currentUserName = this.props.loggedInUserName;
    var currentUserEmail = this.props.loggedInUserEmail;
    var currentUserId = this.props.currentUserId;
    const headers: HeadersInit = new Headers();
    headers.append("accept", "application/json;odata.metadata=none");

        await this.props.spHttpClient
        .get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalPersonal')/items?$select=ID,Title,Goal,Interval,AssignToId,StatusPercentage&$filter=((Interval eq 'Monthly Target') and (AssignToId eq ${this.props.currentUserId}))`, 
        //.get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalPersonal')/items?$select=ID,Title,Goal,Interval,AssignTo&$filter=Interval eq 'Monthly Target'`, 
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
                //this.state.monthlyTargetData.push({
                Id:jsonresult.value[i].Id,
                Title:jsonresult.value[i].Title,
                Goal:jsonresult.value[i].Goal,
                Interval:jsonresult.value[i].Interval,
                StatusPercentage:jsonresult.value[i].StatusPercentage,
                //AssignTo:jsonresult.value[i].AssignTo,
              });
            }        
          //console.log("Monthly Target Data Array=>" + MonthlyTargetData);
          this.setState({
            monthlyTargetData: MonthlyTargetData,
            //bulletPointColor:MonthlyTargetData.Color,
          },()=>console.log("Monthly Target Data =>" + this.state.monthlyTargetData)
          )
        })      
  }  

  _quarterlyObjectivesData = async () =>
  {  
    var currentUserName = this.props.loggedInUserName;
    var currentUserEmail = this.props.loggedInUserEmail;  
    const headers: HeadersInit = new Headers();
    headers.append("accept", "application/json;odata.metadata=none");

        await this.props.spHttpClient
        .get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalPersonal')/items?$select=ID,Title,Goal,Interval,AssignToId,StatusPercentage&$filter=((Interval eq 'Quarterly Objectives') and (AssignToId eq ${this.props.currentUserId}))`,
        //.get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalPersonal')/items?$select=ID,Title,Goal,Interval,AssignTo&$filter=Interval eq 'Quarterly Objectives'`, 
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
                //this.state.quarterly Objectives.push({
                Id:jsonresult.value[i].Id,
                Title:jsonresult.value[i].Title,
                Goal:jsonresult.value[i].Goal,
                Interval:jsonresult.value[i].Interval,
                StatusPercentage:jsonresult.value[i].StatusPercentage,
                //AssignTo:jsonresult.value[i].AssignTo,
              });
            }         
          //console.log("Quarterly Objectives Data Array=>" + QuarterlyObjectivesData);
          this.setState({
            quarterlyObjectivesData: QuarterlyObjectivesData,
            //bulletPointColor:QuarterlyObjectivesData.Color,
          },()=>console.log("Quarterly Objectives Data =>" + this.state.quarterlyObjectivesData)
          )
        })      
  }  
   
  _yearlyGoalsData = async () =>
  { 
    var currentUserName = this.props.loggedInUserName;
    var currentUserEmail = this.props.loggedInUserEmail;
    const headers: HeadersInit = new Headers();
    headers.append("accept", "application/json;odata.metadata=none");

        await this.props.spHttpClient
        .get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalPersonal')/items?$select=ID,Title,Goal,Interval,AssignToId,StatusPercentage&$filter=((Interval eq 'Yearly Goals') and (AssignToId eq ${this.props.currentUserId}))`,
        //.get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalPersonal')/items?$select=ID,Title,Goal,Interval,AssignTo&$filter=Interval eq 'Yearly Goals'`, 
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
                //this.state.yearlyGoalsData.push({
                Id:jsonresult.value[i].Id,
                Title:jsonresult.value[i].Title,
                Goal:jsonresult.value[i].Goal,
                Interval:jsonresult.value[i].Interval,
                StatusPercentage:jsonresult.value[i].StatusPercentage,
                //AssignTo:jsonresult.value[i].AssignTo,
              });
            }          
          //console.log("Yearly Goals Data Array=>" + YearlyGoalsData);
          this.setState({
            yearlyGoalsData: YearlyGoalsData,
            //bulletPointColor: YearlyGoalsData.Color,
          },()=>console.log("Yearly Goals Data =>" + this.state.yearlyGoalsData)
          )
        })      
  }  

  public render(): React.ReactElement<IPersonalProps> {
    return (
      <div className={ styles.personal }>
        {/* <div className={ styles.container }>                             */}
            { (this.state.isIntervalDataDisplay === true) &&
           <div className={styles.SetDisplay}>   
              <div className={styles.IntervalButtonDiv}><DefaultButton className={styles.IntervalButtons} ><h3>Monthly Target</h3></DefaultButton></div>                                                         
              <div className={styles.DataDisplay}>
                {/* <h3>Monthly Taget of Personal</h3> */}
                <ul>                  
                    {this.state.monthlyTargetData.map( (MonthlyTarget, index)=> {
                    // return(
                    // //<li key={MonthlyTarget.Id} style={{color:MonthlyTarget.Color}}>{MonthlyTarget.Color} {MonthlyTarget.Goal}
                    // <li key={MonthlyTarget.Id}> {MonthlyTarget.Goal}
                    // </li>            
                    // )
                    return(
                      <li key={MonthlyTarget.Id} >
                        <table> 
                            <tr><td>{MonthlyTarget.Goal}</td></tr>                            
                            <tr>
                                <td><progress id="file" value={MonthlyTarget.StatusPercentage} max="100"> </progress>{MonthlyTarget.StatusPercentage}%</td>
                                { this.props.isAddPersonalGoalButtonDisplay &&
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
                {/* <h3>Quaterly Objectives of Personal</h3> */}
                <ul>                  
                      {this.state.quarterlyObjectivesData.map( (QuarterlyObjectives, index)=> {
                      // return(
                      // <li key={QuarterlyObjectives.Id} > {QuarterlyObjectives.Goal}
                      // </li>            
                      // )
                      return(
                        <li key={QuarterlyObjectives.Id} >
                          <table> 
                              <tr><td>{QuarterlyObjectives.Goal}</td></tr>                            
                              <tr>
                                  <td><progress id="file" value={QuarterlyObjectives.StatusPercentage} max="100"> </progress>{QuarterlyObjectives.StatusPercentage}%</td>
                                  { this.props.isAddPersonalGoalButtonDisplay &&
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
                {/* <h3>Yearly Taget of Personal</h3> */}
                <ul>                  
                      {this.state.yearlyGoalsData.map( (YearlyGoals, index)=> {
                      // return(
                      // <li key={YearlyGoals.Id} >{YearlyGoals.Goal}
                      // </li>            
                      // )
                      return(
                        <li key={YearlyGoals.Id} >
                          <table> 
                              <tr><td>{YearlyGoals.Goal}</td></tr>                            
                              <tr>
                                  <td><progress id="file" value={(YearlyGoals.StatusPercentage)} max="100"> </progress>{YearlyGoals.StatusPercentage}%</td>
                                  { this.props.isAddPersonalGoalButtonDisplay &&
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
          
            { ((this.props.isAddPersonalGoalButtonDisplay) && (this.state.isIntervalDataDisplay === true)) &&
            <DefaultButton className={ styles.AddPersonalGoalButton} onClick={this.AddPersonalGoalClicked}><h3>Add Personal Goal</h3></DefaultButton>
            }
            {/* <div className={styles.SetDisplay}>   
            <div><DefaultButton className={styles.GoalsTabBtn}  onClick={this.MonthlyTargetClicked}><h3>Monthly Target</h3></DefaultButton></div>                                                         
            <div><DefaultButton className={styles.GoalsTabBtn}  onClick={this.QuarterlyObjectivesClicked}><h3>Quarterly Objectives</h3></DefaultButton></div>
            <div><DefaultButton className={styles.GoalsTabBtn}  onClick={this.YearlyGoalsClicked}><h3>Yearly Goals</h3></DefaultButton></div>                                                          
            </div>
            {  
              ((this.state.count === 1) ?  
                  <div className={styles.myTable}>
                  <h3>Monthly Goal for Personal</h3>             
                  <ul>                  
                    {this.state.monthlyTargetData.map( (MonthlyTarget, index)=> {
                    return(
                    //<li key={MonthlyTarget.Id} style={{color:MonthlyTarget.Color}}>{MonthlyTarget.Color} {MonthlyTarget.Goal}
                    <li key={MonthlyTarget.Id}> {MonthlyTarget.Goal}
                    </li>            
                    )
                    })}             
                    </ul>
                  </div>                            
              : 
               (this.state.count === 2) ?                       
                    <div className={styles.myTable}> 
                    <h3>Quarterly Goal for Personal</h3>                                
                    <ul>                  
                      {this.state.quarterlyObjectivesData.map( (QuarterlyObjectives, index)=> {
                      return(
                      <li key={QuarterlyObjectives.Id} > {QuarterlyObjectives.Goal}
                      </li>            
                      )
                      })}             
                      </ul>
                    </div> 
              :  
               (this.state.count === 3) ?                     
                    <div className={styles.myTable}>
                    <h3>Yearly Goal for Personal</h3>                                
                    <ul>                  
                      {this.state.yearlyGoalsData.map( (YearlyGoals, index)=> {
                      return(
                      <li key={YearlyGoals.Id} >{YearlyGoals.Goal}
                      </li>            
                      )
                      })}             
                      </ul>
                    </div>  
              : "" )
            }    */}
              
             { (this.state.isPersonalGoalFormDisplay === true) &&               
                <AddPersonalGoal description={this.props.description}
                  context={this.props.context}
                  siteurl={this.props.siteurl}
                  spHttpClient={this.props.spHttpClient}
                  webUrl={this.props.webUrl}
                  isAddPersonalGoalButtonDisplay={this.props.isAddPersonalGoalButtonDisplay}
                  loggedInUserName= {this.props.loggedInUserName}
                  loggedInUserEmail= {this.props.loggedInUserEmail}
                  currentUserId={this.props.currentUserId}
                  RequireGoalStatusId={this.state.GoalStatusId}
                  openAddEditForm={this.state.openAddEditForm}>
                  </AddPersonalGoal>            
             }                                 
        {/* </div> */}
      </div>
    );
  }
}
