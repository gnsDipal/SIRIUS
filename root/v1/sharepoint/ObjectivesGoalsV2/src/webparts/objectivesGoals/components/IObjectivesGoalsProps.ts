import { SPHttpClient } from "@microsoft/sp-http";
import { IDropdownOption } from "office-ui-fabric-react";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IObjectivesGoalsProps {
  description: string;
  context:any;
  siteurl: string;
  spHttpClient: SPHttpClient;
  webUrl: string;
  //isAddOrganizationGoalButtonDisplay:boolean;
  isAddDepartmentGoalButtonDisplay : boolean;
  isAddPersonalGoalButtonDisplay : boolean;
  isIntervalDataDisplay: boolean;
  loggedInUserName: string;
  loggedInUserEmail: string;
  currentUserId:number;
  RequireGoalStatusId:number;
  openAddEditForm:number;
  OrganizationTabDisplay:any;
  webPartContext: WebPartContext;   
}

export interface IObjectivesGoalsState { 
  goalsOptions:string;
  bulletPointColor:string,
  bgColorOrganization:string,
  bgColorDepartment: string,
  bgColorPersonal: string, 
  colorOrganization:string,
  colorDepartment:string,
  colorPersonal:string,
  isSettingsPanelOpen:boolean;
}