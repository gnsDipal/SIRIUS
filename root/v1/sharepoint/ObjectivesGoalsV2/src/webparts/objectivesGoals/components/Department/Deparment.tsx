import * as React from 'react';
import styles from '../Department/Department.module.scss';
import { IDepartmentProps, IDepartmentState } from '../Department/IDepartmentProps';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import AddEditDepartmentGoal from './AddEditDepartmentGoal';

let DepartmentData: any = [];
let DepartmentAdminData: any = [];
let DepartmentGroupMembersData: any = [];
let CurrentUserDepartmentData: any =[];
let MonthlyTargetData: any = [];
let QuarterlyObjectivesData: any = [];
let YearlyGoalsData: any = [];

debugger;
export default class Department extends React.Component<IDepartmentProps, IDepartmentState, {}> {
constructor(props: IDepartmentProps, state:IDepartmentState) {
    super(props);
    this.state = {
      departmentData: [{
        Id:"",
        Title:"",
        Department:"",
        Members:"",
        MembersId:0,
      }],
      DepartmentAdminData:[{
        DeptAdmin:"",
        DeptAdminId:null,
      }],
      departmentGroupMembersData:[{
        Id:"",
        Email:"",
      }],
      currentUserDepartmentData:[{
        CurrentUserDepartment:"",
        CurrentUserDepartmentId:null,
        }],
      monthlyTargetData: [{
        Id:"",
        Title:"",
        Goal:"",
        Interval:"",
        StatusPercentage:0,
        Department:"",
        DepartmentId:0,
      }],
      quarterlyObjectivesData: [{
        Id:"",
        Title:"",
        Goal:"",
        Interval:"",
        StatusPercentage:0,
        Department:"",
        DepartmentId:0,
      }],
      yearlyGoalsData: [{
        Id:"",
        Title:"",
        Goal:"",
        Interval:"",
        StatusPercentage:0,
        Department:"",
        DepartmentId:0,
      }],
      expandableOptionsData:[],
      count:0,
      isDepartmentGoalFormDisplay: false,
      isIntervalDataDisplay:true,
      CurrentUserDepartment:"",
      CurrentUserDepartmentId:null,
      GoalStatusId:0,
      openAddEditForm:0,
      AddGoalButtonDisplay:false,
    };
  }

componentDidMount()
  {
    CurrentUserDepartmentData=[];
    this._getDepartmentData();
    // this._monthlyTargetData();
    // this._quarterlyObjectivesData();
    // this._yearlyGoalsData();
  }

_getDepartmentData = async () =>
{
  const headers: HeadersInit = new Headers();
  headers.append("accept", "application/json;odata.metadata=none");
    await this.props.spHttpClient
    .get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalDepartmentOptions')/items?$select=*,Title,Department,Members/Id,Members/Title,DeptAdmin/Id,DeptAdmin/Title&$expand=Members,DeptAdmin`,
          SPHttpClient.configurations.v1, {
          headers: headers
        })
    .then((result: SPHttpClientResponse) => {
          return result.json();
        })
    .then(async(jsonresult) => {
        DepartmentData = [];
        for(let i=0; i<jsonresult.value.length; ++i)
        {
          DepartmentData.push({
                  Id:jsonresult.value[i].Id,
                  Title:jsonresult.value[i].Title,
                  Department:jsonresult.value[i].Department,
                  Members:jsonresult.value[i].Members.Title,
                  MembersId:jsonresult.value[i].Members.Id,
                });
            var departmentGroupId = jsonresult.value[i].Members.Id;
            var departmenTitle = jsonresult.value[i].Department;
            var departmentId = jsonresult.value[i].Id;
           await this._getDepartmentGroupMembersData(departmentGroupId, departmenTitle, departmentId);

            //Display "Add Department Goal" Button to DeptAdmin
           DepartmentAdminData = [];    
           for(let j=0; j<jsonresult.value[i].DeptAdmin.length; ++j)
            {
                  // DepartmentAdminData.push({
                  //   DeptAdmin:jsonresult.value[i].DeptAdmin[j].Title,
                  //   DeptAdminId:jsonresult.value[i].DeptAdmin[j].Id,
                  //  });
              if(jsonresult.value[i].DeptAdmin[j].Id === this.props.currentUserId)
                {
                  this.AddDepartmentGoalButtonDisplay();
                }
            }
          }
          this.setState({
            departmentData: DepartmentData,
          }) 

           await this._monthlyTargetData();
           await this._quarterlyObjectivesData();
           await this._yearlyGoalsData();          
        })
  }

AddDepartmentGoalButtonDisplay = () =>{
    this.setState({
      AddGoalButtonDisplay:true,
    })
  }

_getDepartmentGroupMembersData = async (departmentGroupId, departmentTitle, departmentId) =>
  {
    const headers: HeadersInit = new Headers();
    headers.append("accept", "application/json;odata.metadata=none");
        await this.props.spHttpClient
        .get(`${this.props.siteurl}/_api/Web/SiteGroups/GetById(${departmentGroupId})/users?$select=Email,Id`,
          SPHttpClient.configurations.v1, {
          headers: headers
        })
        .then(async(result: SPHttpClientResponse) => {
          return await result.json();
        })
        .then((jsonresult) => {
          for(let i=0; i<jsonresult.value.length; ++i)
          {            
            if(jsonresult.value[i].Id === this.props.currentUserId)
            {
              CurrentUserDepartmentData.push ({
                CurrentUserDepartment: departmentTitle,
                CurrentUserDepartmentId: departmentId,
              });
             }
          }
          this.setState({
            currentUserDepartmentData : CurrentUserDepartmentData,
          },()=>console.log("currentUserDepartmentData =>" + this.state.currentUserDepartmentData)
          )
        })
  }

MonthlyTargetClicked = () =>{
    this.setState({
      count: 1,
    })
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

AddDepartmentGoalClicked = () =>{
    this.setState({
      isDepartmentGoalFormDisplay: true,
      isIntervalDataDisplay: false,
      openAddEditForm:1,
    })
  }

editStatus= (SelectedId) =>{
    alert( "Button clicked for Status change. Id For Goal =>" + SelectedId)
    this.setState({
      GoalStatusId: SelectedId,
      isDepartmentGoalFormDisplay: true,
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

_monthlyTargetData = async () =>
  {
    const headers: HeadersInit = new Headers();
    headers.append("accept", "application/json;odata.metadata=none");
    MonthlyTargetData = [];
    for ( let i=0; i<this.state.currentUserDepartmentData.length; ++i){
        await this.props.spHttpClient
        .get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalDepartment')/items?$select=ID,Title,Goal,Interval,StatusPercentage,DepartmentId,Department/Id,Department/Title&$expand=Department&$filter=((Interval eq 'Monthly Target') and (DepartmentId eq ${this.state.currentUserDepartmentData[i].CurrentUserDepartmentId}))`,
        //.get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalDepartment')/items?$select=ID,Title,Goal,Interval,StatusPercentage,DepartmentId&$filter=((Interval eq 'Monthly Target') and (DepartmentId eq ${this.state.CurrentUserDepartmentId}))`,
          SPHttpClient.configurations.v1, {
          headers: headers
        })
        .then((result: SPHttpClientResponse) => {
          return result.json();
        })
        .then((jsonresult) => {
          //MonthlyTargetData = [];
          for(let i=0; i<jsonresult.value.length; ++i)
          {
            MonthlyTargetData.push({
              Id:jsonresult.value[i].Id,
              Title:jsonresult.value[i].Title,
              Goal:jsonresult.value[i].Goal,
              Interval:jsonresult.value[i].Interval,
              StatusPercentage:jsonresult.value[i].StatusPercentage,
              Department:jsonresult.value[i].Department.Title,
              DepartmentId:jsonresult.value[i].DepartmentId,
            });
          }
          console.log("Monthly Target Data Array=>" + MonthlyTargetData);
          this.setState({
            monthlyTargetData: MonthlyTargetData,
          },()=>console.log("Monthly Target Data =>" + this.state.monthlyTargetData)
          )
        })
      }// for loop closed
  }

_quarterlyObjectivesData = async () =>
  {
    const headers: HeadersInit = new Headers();
    headers.append("accept", "application/json;odata.metadata=none");
    QuarterlyObjectivesData = [];
      for ( let i=0; i<this.state.currentUserDepartmentData.length; ++i){
        await this.props.spHttpClient
        .get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalDepartment')/items?$select=ID,Title,Goal,Interval,StatusPercentage,DepartmentId,Department/Id,Department/Title&$expand=Department&$filter=((Interval eq 'Quarterly Objectives') and (DepartmentId eq ${this.state.currentUserDepartmentData[i].CurrentUserDepartmentId}))`,
        //.get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalDepartment')/items?$select=ID,Title,Goal,Interval,StatusPercentage,DepartmentId&$filter=((Interval eq 'Quarterly Objectives') and (DepartmentId eq ${this.state.CurrentUserDepartmentId}))`,
          SPHttpClient.configurations.v1, {
          headers: headers
        })
        .then((result: SPHttpClientResponse) => {
          return result.json();
        })
        .then((jsonresult) => {
          //QuarterlyObjectivesData = [];
          for(let i=0; i<jsonresult.value.length; ++i)
          {
            QuarterlyObjectivesData.push({
              Id:jsonresult.value[i].Id,
              Title:jsonresult.value[i].Title,
              Goal:jsonresult.value[i].Goal,
              Interval:jsonresult.value[i].Interval,
              StatusPercentage:jsonresult.value[i].StatusPercentage,
              Department:jsonresult.value[i].Department.Title,
              DepartmentId:jsonresult.value[i].DepartmentId,
            });
          }
          console.log("Quarterly Objectives Data Array=>" + QuarterlyObjectivesData);
          this.setState({
            quarterlyObjectivesData: QuarterlyObjectivesData,
          },()=>console.log("Quarterly Objectives Data =>" + this.state.quarterlyObjectivesData)
          )
        })
    }// for loop closed
  }

_yearlyGoalsData = async () =>
  {
    const headers: HeadersInit = new Headers();
    headers.append("accept", "application/json;odata.metadata=none");
    YearlyGoalsData = [];
      for ( let i=0; i<this.state.currentUserDepartmentData.length; ++i){
        await this.props.spHttpClient
        .get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalDepartment')/items?$select=ID,Title,Goal,Interval,StatusPercentage,DepartmentId,Department/Id,Department/Title&$expand=Department&$filter=((Interval eq 'Yearly Goals') and (DepartmentId eq ${this.state.currentUserDepartmentData[i].CurrentUserDepartmentId}))`,
        //.get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalDepartment')/items?$select=ID,Title,Goal,Interval,StatusPercentage,DepartmentId&$filter=((Interval eq 'Yearly Goals') and (DepartmentId eq ${this.state.CurrentUserDepartmentId}))`,
          SPHttpClient.configurations.v1, {
          headers: headers
        })
        .then((result: SPHttpClientResponse) => {
          return result.json();
        })
        .then((jsonresult) => {
          //YearlyGoalsData = [];
          for(let i=0; i<jsonresult.value.length; ++i)
          {
            YearlyGoalsData.push({
              Id:jsonresult.value[i].Id,
              Title:jsonresult.value[i].Title,
              Goal:jsonresult.value[i].Goal,
              Interval:jsonresult.value[i].Interval,
              StatusPercentage:jsonresult.value[i].StatusPercentage,
              Department:jsonresult.value[i].Department.Title,
              DepartmentId:jsonresult.value[i].DepartmentId,
            });
          }
          console.log("Yearly Goals Data Array=>" + YearlyGoalsData);
          this.setState({
            yearlyGoalsData: YearlyGoalsData,
          },()=>console.log("Yearly Goals Data =>" + this.state.yearlyGoalsData)
          )
        })
    }// for loop closed
  }

public render(): React.ReactElement<IDepartmentProps> {
  return (
    <div className={ styles.department }>
    {/* <div className={ styles.container }>  */}
    {/* <h3> Monthly Target of Department</h3> */}
      { (this.state.isIntervalDataDisplay === true) &&
      <div className={styles.SetDisplay}>
        <div className={styles.IntervalButtonDiv}><DefaultButton className={styles.IntervalButtons} ><h3>Monthly Target</h3></DefaultButton></div>
        <div className={styles.DataDisplay}>
          {this.state.currentUserDepartmentData.map( (CurrentUserDept, index)=> {
            return(
              <ul>
              <h3> {CurrentUserDept.CurrentUserDepartment} Department </h3>
                {this.state.monthlyTargetData.map( (MonthlyTarget, index)=> {
                    if(CurrentUserDept.CurrentUserDepartment === MonthlyTarget.Department ){
                    return(
                      <li key={MonthlyTarget.Id} >
                        <table><tr><td>{MonthlyTarget.Goal}</td></tr>
                               <tr><td><progress id="file" value={MonthlyTarget.StatusPercentage} max="100"> </progress>{MonthlyTarget.StatusPercentage}%
                                { ((this.props.isAddDepartmentGoalButtonDisplay) && (this.state.AddGoalButtonDisplay) ) &&
                                <button className={styles.EditButton} onClick={()=>this.editStatus(MonthlyTarget.Id)} onChange={(selectedId)=>this.onChangeStatusHandle(selectedId)}> Edit </button>
                                }</td></tr>
                        </table>
                      </li>
                      )
                    }
                  })}
                </ul>
                )
               })}
               {/* CurrentUserDepartmentData Map closed */}
              </div>
            </div>
          }
          {/* <h3>Quaterly Objectives of Department</h3> */}
          { (this.state.isIntervalDataDisplay === true) &&
            <div className={styles.SetDisplay}>
              <div className={styles.IntervalButtonDiv}><DefaultButton className={styles.IntervalButtons} ><h3>Quaterly Objectives</h3></DefaultButton></div>
              <div className={styles.DataDisplay}>
              {this.state.currentUserDepartmentData.map( (CurrentUserDept, index)=> {
               return(
                 <ul>
                    <h3> {CurrentUserDept.CurrentUserDepartment} Department </h3>
                    {this.state.quarterlyObjectivesData.map( (QuarterlyObjectives, index)=> {
                       if(CurrentUserDept.CurrentUserDepartment === QuarterlyObjectives.Department ){
                      return(
                        <li key={QuarterlyObjectives.Id} >
                          <table><tr><td>{QuarterlyObjectives.Goal}</td></tr>
                                <tr><td><progress id="file" value={QuarterlyObjectives.StatusPercentage} max="100"> </progress>{QuarterlyObjectives.StatusPercentage}%
                                  { ((this.props.isAddDepartmentGoalButtonDisplay) && (this.state.AddGoalButtonDisplay) ) &&
                                   <button className={styles.EditButton} onClick={()=>this.editStatus(QuarterlyObjectives.Id)} onChange={(selectedId)=>this.onChangeStatusHandle(selectedId)} > Edit </button>
                                  }</td></tr>
                          </table>
                        </li>
                        )
                       }
                      })}
                </ul>
                 )
                })}
                {/* CurrentUserDepartmentData Map closed */}
              </div>
            </div>
           }
           {/* <h3>Yearly Taget of Department</h3> */}
           { (this.state.isIntervalDataDisplay === true) &&
            <div className={styles.SetDisplay}>
              <div className={styles.IntervalButtonDiv}><DefaultButton className={styles.IntervalButtons} ><h3>Yearly Target</h3></DefaultButton></div>
              <div className={styles.DataDisplay}>
              {this.state.currentUserDepartmentData.map( (CurrentUserDept, index)=> {
                return(
                  <ul>
                    <h3> {CurrentUserDept.CurrentUserDepartment} Department </h3>
                    {this.state.yearlyGoalsData.map( (YearlyGoals, index)=> {
                      if(CurrentUserDept.CurrentUserDepartment === YearlyGoals.Department ){
                       return(
                        <li key={YearlyGoals.Id} >
                          <table><tr><td>{YearlyGoals.Goal}</td></tr>
                                 <tr><td><progress id="file" value={YearlyGoals.StatusPercentage} max="100"> </progress>{YearlyGoals.StatusPercentage}%
                                  { ((this.props.isAddDepartmentGoalButtonDisplay) && (this.state.AddGoalButtonDisplay) ) &&
                                   <button className={styles.EditButton} onClick={()=>this.editStatus(YearlyGoals.Id)} onChange={(selectedId)=>this.onChangeStatusHandle(selectedId)} > Edit </button>
                                  }</td></tr>
                          </table>
                        </li>
                        )
                      }
                    })}
                </ul>
                )
               })}
               {/* CurrentUserDepartmentData Map closed */}
              </div>
            </div>
            }

            { ((this.props.isAddDepartmentGoalButtonDisplay) && (this.state.AddGoalButtonDisplay) &&  (this.state.isIntervalDataDisplay === true) ) &&
            <DefaultButton className={ styles.AddDepartmentGoalButton} onClick={this.AddDepartmentGoalClicked}><h3>Add Department Goal</h3></DefaultButton>
            }

             { (this.state.isDepartmentGoalFormDisplay === true) &&
                <AddEditDepartmentGoal description={this.props.description}
                  context={this.props.context}
                  siteurl={this.props.siteurl}
                  spHttpClient={this.props.spHttpClient}
                  webUrl={this.props.webUrl}
                  isAddDepartmentGoalButtonDisplay={this.props.isAddDepartmentGoalButtonDisplay}
                  isIntervalDataDisplay={this.props.isIntervalDataDisplay}
                  loggedInUserName= {this.props.loggedInUserName}
                  loggedInUserEmail= {this.props.loggedInUserEmail}
                  currentUserId={this.props.currentUserId}
                  RequireGoalStatusId={this.state.GoalStatusId}
                  openAddEditForm={this.state.openAddEditForm}>
                  </AddEditDepartmentGoal>
             }
        {/* </div>  */}
      </div>
    );
  }
}
