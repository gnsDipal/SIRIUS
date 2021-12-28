import { SPHttpClient } from "@microsoft/sp-http";
import { IDropdownOption } from "office-ui-fabric-react";

export interface IOrganizationProps {
  description: string;
  context:any;
  siteurl: string;
  spHttpClient: SPHttpClient;
  webUrl: string;
  loggedInUserName: string;
  loggedInUserEmail: string;
  currentUserId:number;
  //isAddOrganizationGoalButtonDisplay : boolean;
  isIntervalDataDisplay:boolean;
  //isOrgnizationGoalFormDisplay:boolean;
  //openOrganizationForm:number;
  openAddEditForm:number;
  RequireGoalStatusId: number;
  OrganizationTabDisplay:any;
}

export interface IOrganizationState {
    
  goalSecurityData: [{
          Id:any;
          Title:any;
          //IsButtonDisplay:any;
          Members:any;
          MembersId:any;       
        }],
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
  organizationGroupMembersData:[{
      Id:any;
      Email:any;
    }],
  organizationGroupId:any;
  organizationGroup:any;
  isOrgnizationGoalFormDisplay:boolean,
  isIntervalDataDisplay:boolean,
  GoalStatusId:number;
  openAddEditForm:any;
  AddGoalButtonDisplay:boolean,
}