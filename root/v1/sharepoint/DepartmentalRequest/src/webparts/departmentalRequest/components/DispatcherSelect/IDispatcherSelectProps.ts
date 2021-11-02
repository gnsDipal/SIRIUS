import { SPHttpClient } from "@microsoft/sp-http";
import { IPersonaProps } from '@fluentui/react/lib/Persona';
import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IDispatcherSelectProps {
    description: string;
    emailType:number;
    // deptBelongingNames:IPersonaProps[];
    webUrl: string;
    /**
     * Instance of the SPHttpClient. Used to retrieve information about
     * people.
     */
    spHttpClient: SPHttpClient;

    loggedInUserName: string;
    loggedInUserEmail: string;
    currentUserId:number;
    msGraphClientFactory:any;
    webPartContext:WebPartContext;

}