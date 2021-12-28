import { SPHttpClient } from "@microsoft/sp-http";

export interface IAddEditOrganizationGoalProps {
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
  loggedInUserName: string;
  loggedInUserEmail: string;
  currentUserId:number;
  RequireGoalStatusId:number;
  //openOrganizationForm:number;
  //isAddOrganizationGoalButtonDisplay:boolean;
  isIntervalDataDisplay:boolean;
  openAddEditForm:number;
  //isOrgnizationGoalFormDisplay:any;
  OrganizationTabDisplay:any;
}

export interface IAddEditOrganizationGoalState {
editStatusIdData:[{
      Id: any;
      Title: any;
      Goal: any;
      Interval: any;
      StatusPercentage:any;    
      }];
AddEditGoalsFormDisplay:boolean,
IntervalDataDisplay:boolean,
selectedTitle:string;
selectedGoal:string;
selectedInterval:string;
selectedStatusPercentage:number;
GoalStatusId:number;
selectedEditTitle:string;
selectedEditGoal:string;
selectedEditInterval:string;
selectedEditStatusPercentage:any;
OrganizationTabDisplay:any;
}
