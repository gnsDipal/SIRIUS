import { SPHttpClient } from "@microsoft/sp-http";
import { IPersonaProps } from '@fluentui/react/lib/Persona';
import { IDispacherList } from "../DepartmentalRequest/IDepartmentList";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IAssignProps {
    description: string;
    emailType:number;
    deptBelongingNames:IPersonaProps[];
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
    passedDept:string;
    passedStatus:string;
    webPartContext:WebPartContext;

}

export interface IAllAssignProps {
    description: string;
    emailType:number;
    deptBelongingNames:IPersonaProps[];
    webUrl: string;
    /**
     * Instance of the SPHttpClient. Used to retrieve information about
     * people.
     */
    spHttpClient: SPHttpClient;

    loggedInUserName: string;
    loggedInUserEmail: string;
    currentUserId:number;

    // allDetailsProp:IDispacherList[];
}