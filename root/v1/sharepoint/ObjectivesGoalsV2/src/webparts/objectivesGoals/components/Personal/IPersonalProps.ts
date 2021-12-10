import { SPHttpClient } from "@microsoft/sp-http";
import { IDropdownOption } from "office-ui-fabric-react";

export interface IPersonalProps {
  description: string;
  context:any;
  siteurl: string;
  spHttpClient: SPHttpClient;
  webUrl: string;
  isAddPersonalGoalButtonDisplay : boolean;
  isIntervalDataDisplay:boolean;
  loggedInUserName: string;
  loggedInUserEmail: string;
  currentUserId:number;
  RequireGoalStatusId:number;
  openAddEditForm:number;
}

export interface IPersonalState {  
  monthlyTargetData:[{
      Id: any;
      Title: any;
      Goal: any;
      Interval: any;
      StatusPercentage:any;    
      }];
  quarterlyObjectivesData:[{
        Id: any;
        Title: any;
        Goal: any;
        Interval: any;
        StatusPercentage:any;       
        }];
  yearlyGoalsData:[{
          Id: any;
          Title: any;
          Goal: any;
          Interval: any;
          StatusPercentage:any;        
          }];
  editStatusIdData:[{
            Id: any;
            Title: any;
            Goal: any;
            Interval: any;
            StatusPercentage:any;         
            }];
  count:number,
  isPersonalGoalFormDisplay: boolean,
  isIntervalDataDisplay:boolean,
  GoalStatusId:number;
  openAddEditForm:any;
}
