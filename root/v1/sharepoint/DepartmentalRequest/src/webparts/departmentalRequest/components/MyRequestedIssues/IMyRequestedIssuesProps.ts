import { SPHttpClient } from "@microsoft/sp-http";
import { DisplayMode } from "@microsoft/sp-core-library";
import { Attachment } from "sp-pnp-js/lib/graph/attachments";
import { WebPartContext } from "@microsoft/sp-webpart-base";


export interface IMyRequestedIssuesProps {
  description: string;
  emailType:number;
   /**
   * Absolute URL of the current site
   */
    webUrl: string;
    /**
     * Instance of the SPHttpClient. Used to retrieve information about
     * people.
     */
    spHttpClient: SPHttpClient;

    loggedInUserName: string;
    loggedInUserEmail: string;
    // issueDataList:IMyIssueList[];
    currentUserId:number;
    // archiveIssueDataList:IMyIssueList[];
    msGraphClientFactory:any;
    passedDept:string;
    passedStatus:string;
    webPartContext:WebPartContext;

}

export interface IMyIssueList {
  created:string,
  description:string,
  category:string,
  department:string,
  assignedTo:string,
  comment:string,
  status:string,
  attachments:File,
}
