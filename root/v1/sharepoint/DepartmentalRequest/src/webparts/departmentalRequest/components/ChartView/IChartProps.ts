import { SPHttpClient } from "@microsoft/sp-http";
import { IPersonaProps } from '@fluentui/react/lib/Persona';
import { IDispacherList } from "../DepartmentalRequest/IDepartmentList";
import {IDepartmentList} from './IChartList'

export interface IChartProps {
    description: string;
    chartType:number;
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
    departmentFAQ_deptList:IDepartmentList[];
}

export interface IAllAssignProps {
    description: string;
    groupType:number;
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

    allDetailsProp:IDispacherList[];
}