import { SPHttpClient } from "@microsoft/sp-http";
import { DisplayMode } from "@microsoft/sp-core-library";
import { IMSGraphInterface } from "../../../../services/msGraphProvider";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { Context } from "react";
// import IConversationService from './DepartmentalRequest'

export interface IConversationService {

  createChatThread(content: string, contentType: string):
      Promise<void>;
      
}

export interface IDepartmentalRequestProps {
  description: string;
  emailType:number;
  //description: string;
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
    currentUserId:number;
    // msGraphProvider: IMSGraphInterface;
    msGraphClientFactory : any;
    webPartContext:WebPartContext;
    // conversationService: IConversationService;
}
