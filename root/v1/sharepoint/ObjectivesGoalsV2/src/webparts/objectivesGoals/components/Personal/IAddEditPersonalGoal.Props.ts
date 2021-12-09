import { SPHttpClient } from "@microsoft/sp-http";
import { IDropdownOption } from "office-ui-fabric-react";

export interface IAddEditPersonalGoalProps {
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
  isAddPersonalGoalButtonDisplay : boolean;
  loggedInUserName: string;
  loggedInUserEmail: string;
  currentUserId:number;
  RequireGoalStatusId:number;
  openAddEditForm:number;
}

export interface IAddEditPersonalGoalState {
goalsData:[{
    Id: any;
    Title: any;
    Goal: any;
    Interval: any;
    }];
editStatusIdData:[{
      Id: any;
      Title: any;
      Goal: any;
      Interval: any;
      StatusPercentage:any;    
      }];
AddEditGoalsFormDisplay:boolean,
IntervalDataDisplay:boolean,
assignToOptionsData:IDropdownOption[];
assignToOption:string;
selectedTitle:string;
selectedGoal:string;
selectedInterval:string;
selectedAssignTo:string;
selectedStatusPercentage:number;
selectedEditTitle:string;
selectedEditGoal:string;
selectedEditInterval:string;
selectedEditStatusPercentage:any;
GoalStatusId:number;
}

