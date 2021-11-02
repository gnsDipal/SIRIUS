import { IPersonaProps } from '@fluentui/react/lib/Persona';
// import {IExampleExtendedPersonaProps} from './PeoplePickerTestExample';
import {IDispatcherList} from './IDispatcherList'
import { IDropdown, IDropdownOption } from 'office-ui-fabric-react';
import { IMSGraphInterface } from "../../../../services/msGraphProvider";

export interface passUser{
    id:number;
    text:string;
}

export interface IDispatcherViewState {
    loading:false;
    errorMessage:string;
    mostRecentlyUsed:IPersonaProps[];
    peopleList:IPersonaProps[];
    ticketCount:number;
    newPeoplePickerUser:string;
    deptDetails:IDispatcherList[];
    indexSelect:number;
    homeButton:number;
    idSelect:number;
    deptListDropDown:IDropdownOption[];
    passAssignedToUser:passUser;
    deleteSelectedTicket:string;
    dispatcherFileAddition:File[];
    requesterFileCheck:number;
    dispatchNotification:number;
    msGraphProvider: IMSGraphInterface;
    eMailId:string;
}