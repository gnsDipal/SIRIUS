import { SPHttpClient } from "@microsoft/sp-http";
import { IDropdownOption } from "office-ui-fabric-react";

export interface IAddEditDepartmentGoalProps {
  description: string;
  context:any;
  siteurl: string;
  /**
   * Instance of the SPHttpClient. Used to retrieve information about
   * people.
   */
  spHttpClient: SPHttpClient;
  /**
   * Absolute URL of the current site
   */
  webUrl: string;
  isAddDepartmentGoalButtonDisplay:boolean;
  isIntervalDataDisplay:boolean;  
  loggedInUserName: string;
  loggedInUserEmail: string;
  currentUserId:number;
  RequireGoalStatusId:number;
  //openOrganizationForm:any;
  openAddEditForm:number;
}

export interface IAddEditDepartmentGoalState {
departmentData: [{
      Id:"",
      Title:"",
      Department:"",
      Members:"",
      MembersId:0,       
    }],
editStatusIdData:[{
      Id: any;
      Title: any;
      Goal: any;
      Interval: any;
      Department: any;
      DepartmentId:any;
      StatusPercentage:any;      
      }];
currentUserDepartmentData:IDropdownOption[];
departmentOptionsData:IDropdownOption[];
departmentOptions:string;
AddEditGoalsFormDisplay:boolean,
IntervalDataDisplay:boolean,
selectedTitle:string;
selectedGoal:string;
selectedInterval:string;
selectedDepartmentOption:string;
selectedDepartmentOptionId:any;
//selectedDepartmentOptionId:[];
selectedStatusPercentage:number;
selectedEditTitle:string;
selectedEditGoal:string;
selectedEditInterval:string;
selectedEditDepartmentOption:string;
selectedEditDepartmentOptionId:any;
selectedEditStatusPercentage:any;
GoalStatusId:number;
}

