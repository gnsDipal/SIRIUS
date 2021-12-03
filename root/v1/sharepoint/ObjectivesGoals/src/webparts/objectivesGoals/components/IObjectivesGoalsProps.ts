import { SPHttpClient } from "@microsoft/sp-http";
import { IDropdownOption } from "office-ui-fabric-react";

export interface IObjectivesGoalsProps {
  description: string;
  context:any;
  siteurl: string;
  spHttpClient: SPHttpClient;
  webUrl: string;
  isAddOrganizationGoalButtonDisplay:boolean;
  isAddDepartmentGoalButtonDisplay : boolean;
  isAddPersonalGoalButtonDisplay : boolean;
  isIntervalDataDisplay: boolean;
  loggedInUserName: string;
  loggedInUserEmail: string;
  currentUserId:number;
  RequireGoalStatusId:number;
  openAddEditForm:number;
  //isOrgnizationGoalFormDisplay:boolean;
  OrganizationTabDisplay:any;
}

export interface IObjectivesGoalsState {
  // goalSecurityData: [{
  //   Id:any;
  //   Title:any;
  //   IsButtonDisplay:any;
  //   Members:any;
  //   MembersId:any;       
  // }],
  goalsOptions:string;
  bulletPointColor:string,
  bgColorOrganization:string,
  bgColorDepartment: string,
  bgColorPersonal: string, 
  colorOrganization:string,
  colorDepartment:string,
  colorPersonal:string,
  //AddGoalButtonDisplay:boolean;
}