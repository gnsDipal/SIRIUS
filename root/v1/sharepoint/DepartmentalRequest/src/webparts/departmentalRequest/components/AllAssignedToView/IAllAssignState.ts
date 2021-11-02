import { IPersonaProps } from '@fluentui/react/lib/Persona';
// import {IExampleExtendedPersonaProps} from './PeoplePickerTestExample';
import {IDepartmentList, IDispacherList} from '../DepartmentalRequest/IDepartmentList'
import { IDropdown, IDropdownOption } from 'office-ui-fabric-react';
import {IAssignedList} from '../DepartmentalRequest/IDepartmentList'
export interface passUser{
    id:number;
    text:string;
}

export interface IAllAssignState {
    loading:false;
    errorMessage:string; 
    homeButton:number;
    allDetails:IDispacherList[];
}