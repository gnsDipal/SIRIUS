import { SPHttpClient } from "@microsoft/sp-http";
import { IDropdownOption } from "office-ui-fabric-react";

export interface IDepartmentProps {
  description: string;
  context:any;
  siteurl: string;
  spHttpClient: SPHttpClient;
  webUrl: string;
  isAddDepartmentGoalButtonDisplay : boolean;
  isIntervalDataDisplay:boolean;
  loggedInUserName: string;
  loggedInUserEmail: string;
  currentUserId:number;
  RequireGoalStatusId:number;
  //openOrganizationForm:number;
  openAddEditForm:number;
}

export interface IDepartmentState {   
  departmentData:[{
        Id: any;
        Title: any;
        Department:any;
        Members: any;
        MembersId:any;
        }];
  DepartmentAdminData :[{
        DeptAdmin:any;
        DeptAdminId:any;        
        }],
  departmentGroupMembersData:[{
            Id:any;
            Email:any;
          }],
  currentUserDepartmentData:[{
        CurrentUserDepartment:any;
        CurrentUserDepartmentId:any;
        }],
  monthlyTargetData:[{
      Id: any;
      Title: any;
      Goal: any;
      Interval: any;
      StatusPercentage:any;
      Department:any; 
      DepartmentId:any;       
      }];
  quarterlyObjectivesData:[{
        Id: any;
        Title: any;
        Goal: any;
        Interval: any;
        StatusPercentage:any; 
        Department:any; 
        DepartmentId:any;         
        }];
  yearlyGoalsData:[{
          Id: any;
          Title: any;
          Goal: any;
          Interval: any;
          StatusPercentage:any;
          Department:any; 
          DepartmentId:any;  
          }];
  // editStatusIdData:[{
  //           Id: any;
  //           Title: any;
  //           Goal: any;
  //           Interval: any;
  //           StatusPercentage:any;
  //           }];
  expandableOptionsData:IDropdownOption[];
  count:number,
  //bulletPointColor:string,
  isDepartmentGoalFormDisplay: boolean,
  isIntervalDataDisplay:boolean,
  CurrentUserDepartment:string;
  CurrentUserDepartmentId:number;
  GoalStatusId:number;
  openAddEditForm:any;
  AddGoalButtonDisplay:boolean;
}
