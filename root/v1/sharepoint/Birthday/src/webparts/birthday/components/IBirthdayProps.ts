import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IBirthdayProps {
  description: string;
  webPartContext: WebPartContext;  
  dropdown: string;  
  externalAPI: string;
  IsTeamsIcon: boolean;
}