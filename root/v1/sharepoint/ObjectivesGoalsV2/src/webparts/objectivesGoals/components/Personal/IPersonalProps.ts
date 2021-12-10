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
  //openOrganizationForm:number;
  openAddEditForm:number;
}

export interface IPersonalState {
  personalData:[{
        Id: any;
        Title: any;
        Goal: any;
        Interval: any;
        StatusPercentage:any;       
        }];
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
  expandableOptionsData:IDropdownOption[];
  count:number,
  //bulletPointColor:string,
  isPersonalGoalFormDisplay: boolean,
  isIntervalDataDisplay:boolean,
  GoalStatusId:number;
  openAddEditForm:any;
}
