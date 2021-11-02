import { IPersonaProps } from '@fluentui/react/lib/Persona';
// import {IExampleExtendedPersonaProps} from './PeoplePickerTestExample';
import {IDepartmentList, IDispacherList} from '../DepartmentalRequest/IDepartmentList'
import { IDropdown, IDropdownOption } from 'office-ui-fabric-react';
import {IAssignedList} from '../DepartmentalRequest/IDepartmentList';
import { IMSGraphInterface } from "../../../../services/msGraphProvider";

export interface passUser{
    id:number;
    text:string;
}

export interface IAssignState {
    loading:false;
    errorMessage:string;
    mostRecentlyUsed:IPersonaProps[];
    peopleList:IPersonaProps[];
    ticketCount:number;
    newPeoplePickerUser:string;
    // deptDetails:IDispacherList[];
    deptDetails:IAssignedList[];
    indexSelect:number;
    homeButton:number;
    idSelect:number;
    deptListDropDown:IDropdownOption[];
    passAssignedToUser:passUser;
    deleteSelectedTicket:string;
    statusOptions:IDropdownOption[];
    statusCompletedCheck:number;
    assignedIssuesButton:number;
    allIssuesButton:number;
    allDetails:IDispacherList[];
    commentData:string;
    noDataUnlock:number;
    noAllDataUnlock:number;
    assignedNotification:number;
    eMailId:string;
    msGraphProvider: IMSGraphInterface;

}