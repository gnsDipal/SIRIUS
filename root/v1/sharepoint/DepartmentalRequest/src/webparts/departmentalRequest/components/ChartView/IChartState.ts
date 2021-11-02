import { IPersonaProps } from '@fluentui/react/lib/Persona';
// import {IExampleExtendedPersonaProps} from './PeoplePickerTestExample';
import {IDepartmentList, IDispacherList} from '../DepartmentalRequest/IDepartmentList'
import {IChartList} from './IChartList'
import { IDropdown, IDropdownOption } from 'office-ui-fabric-react';

export interface passUser{
    id:number;
    text:string;
}

export interface pieChartDataValue {
    labels:string[],
    datasets:[
       {
        label:string,
        data:number[]
       }
    ]
}



export interface IChartState {
    loading:false;
    errorMessage:string;
    mostRecentlyUsed:IPersonaProps[];
    peopleList:IPersonaProps[];
    ticketCount:number;
    newPeoplePickerUser:string;
    deptDetails:IChartList[];
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
    pieChartData:[];
    departmentDeptList:IDepartmentList[];
    data: pieChartDataValue;
    pieChartResult:number[];
    pieDepLists:string[];
}

// set the data
//   data= {
//   labels:
//     [
//       'January', 'February', 'March', 'April', 'May', 'June', 'July'
//     ],
//   datasets: [
//     {
//       label: 'My First Dataset',
//       data:
//         [
//           10, 50, 20, 60, 30, 70, 40
//         ]
//     }
//   ]
// };

// var options = {
//     legend: {
//       display: true,
//       position: "left"
//     },
//     title: {
//       display: true,
//       text: "Ticket Request by departments"
//     }
//   };
