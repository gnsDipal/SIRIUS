import * as React from 'react'
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp, Web, PermissionKind, IItem, IFieldInfo } from '@pnp/sp/presets/all';
// import { siteUsers } from '@pnp/sp/site-users/web'
import { graph } from "@pnp/graph";
import * as moment from 'moment';
import { Logger, LogLevel} from "@pnp/logging";
import {UserContext} from '../webparts/departmentalRequest/components/Main/Main';
import SPDepartmentalService from './SPDepartmentalService';
import SPDispatcherService from './SPDispatcherService';
import {MyRequestedEachPlateData} from '../modal/MyRequestedEachPlateData';
import {AssignedTicketData} from '../modal/MyRequestedEachPlateData';
import { Dropdown, IDropdown, IDropdownOption, optionProperties, TextField, Tooltip } from 'office-ui-fabric-react';
import { IOptionWithKey, IDepartmentList } from '../modal/RaiseRequest';

  debugger;
  let uniqueDeptList = [];
  
  export default class SPDepartmentalServiceData{ 
      private departmentalService: SPDepartmentalService = null;
      private dispatcherService: SPDispatcherService = null;
      constructor(private context){
            this.departmentalService = new SPDepartmentalService(this.context);
            this.dispatcherService = new SPDispatcherService(this.context);
            this.onInit();
      }
    private async onInit(){
        
        }
        /* Assigned Ticket data service calls */
      getAssignedViewCountData():Promise<MyRequestedEachPlateData[]>{
        return this.departmentalService.getAssignedViewCount();
      }
      getAssignToListData(inProcess,deptName):Promise<AssignedTicketData[]>{
        return this.departmentalService.loadAssignToListInfo(inProcess,deptName);
      }
      getDeptOptionsByGrpName(department):Promise<IDropdownOption[]>{
        return this.departmentalService.loadDepartmentOptionsByGroupName(department);
      }
      getEmailId(assignedToUserId):Promise<string>{
        return this.departmentalService.emailIdMethod(assignedToUserId)
      }
      addReAssignedToData(newReAssignedToUser:any,idRequest:number,commentData:string, ticketNumber:string):Promise<{}>{
        return this.departmentalService.getAddReAssignedToData(newReAssignedToUser,idRequest,commentData, ticketNumber);
      }
      getCompletedWithStatusUpdate(idRequest,commentData):Promise<{}>{
        return this.departmentalService.loadCompletedWithStatusUpdate(idRequest,commentData);
      }

      //Raise a request data service calls

      getDepartmentOptions():Promise<IOptionWithKey[]>{
        return this.departmentalService.loadDepartmentOptions();
      }

      getDepartmentDetailForPost():Promise<IDepartmentList[]>{
        return this.departmentalService.loadDepartmentDetailForPost();
      }

      getDeptCategorySelect(selectedDept):Promise<IDropdownOption[]>{
        return this.departmentalService.deptCategorySelect(selectedDept);
      }

      getSelectedDispatcherGroupPeople(selectedDept):Promise<[]>{
        return this.departmentalService.loadSelectedDispatcherGroupPeople(selectedDept);
      }

      getEmployeeRequestAdded(issueDescription, selectedDept, selectedDeptCategory,fileAddition,deptListCoreInfo):Promise<{}>{
       return this.departmentalService.loadEmployeeRequest(issueDescription, selectedDept, selectedDeptCategory,fileAddition,deptListCoreInfo);
      }

      /* Dispatcher view service calls */
      getDispatcherPlates():Promise<{}>{
       return this.dispatcherService.getDepartmentsDetails();
      }
    }
      
  
