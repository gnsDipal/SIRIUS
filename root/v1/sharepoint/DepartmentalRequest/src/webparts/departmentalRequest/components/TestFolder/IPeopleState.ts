import { IPersonaProps } from '@fluentui/react/lib/Persona';
import {IExampleExtendedPersonaProps} from './PeoplePickerTestExample';
import {IDepartmentList, IDispacherList} from '../DepartmentalRequest/IDepartmentList'
import { IDropdown, IDropdownOption } from 'office-ui-fabric-react';

export interface passUser{
    id:number;
    text:string;
}

export interface IPeopleState {
    loading:false;
    errorMessage:string;
    mostRecentlyUsed:IPersonaProps[];
    peopleList:IPersonaProps[];
    ticketCount:number;
    newPeoplePickerUser:string;
    deptDetails:IDispacherList[];
    indexSelect:number;
    homeButton:number;
    idSelect:number;
    deptListDropDown:IDropdownOption[];
    passAssignedToUser:passUser;
    deleteSelectedTicket:string;
}