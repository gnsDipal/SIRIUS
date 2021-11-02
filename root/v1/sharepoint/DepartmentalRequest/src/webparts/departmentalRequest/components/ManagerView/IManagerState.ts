import { IPersonaProps } from '@fluentui/react/lib/Persona';
// import {IExampleExtendedPersonaProps} from './PeoplePickerTestExample';
import {IDepartmentList, IDispacherList} from '../DepartmentalRequest/IDepartmentList'
import {IManagerList} from './IManagerList'
import { IDropdown, IDropdownOption } from 'office-ui-fabric-react';

export interface passUser{
    id:number;
    text:string;
}

export interface IManagerState {
    loading:false;
    errorMessage:string;
    mostRecentlyUsed:IPersonaProps[];
    peopleList:IPersonaProps[];
    ticketCount:number;
    newPeoplePickerUser:string;
    managerDetails:IManagerList[];
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
    requiredManagerId:number;
}