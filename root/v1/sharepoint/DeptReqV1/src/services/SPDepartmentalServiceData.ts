import * as React from 'react';
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp, Web, PermissionKind, IItem, IFieldInfo } from '@pnp/sp/presets/all';
import SPDepartmentalService from './SPDepartmentalService';
import SPDispatcherService from './SPDispatcherService';
import {MyAssignedEachPlateData,MyRequestedEachPlateData,IMyRequestList} from '../model/MyRequestedEachPlateData';
import {AssignedTicketData} from '../model/MyRequestedEachPlateData';
import { IDropdownOption } from 'office-ui-fabric-react';
import { IOptionWithKey, IDepartmentList } from '../model/RaiseRequest';
import { IDispatcherList } from '../model/IDispatcher';
import SPMyRequestService from './SPMyRequestService';
import SPManagerService from './SPManagerService';
import SPPermissionService from './SPPermissionService';

  let uniqueDeptList = [];
  
  export default class SPDepartmentalServiceData{ 
      private departmentalService: SPDepartmentalService = null;
      private dispatcherService: SPDispatcherService = null;
      private myRequestService: SPMyRequestService = null;
      private managerService: SPManagerService = null;
      private permissionService: SPPermissionService = null;
      constructor(private context){
            this.departmentalService = new SPDepartmentalService(this.context);
            this.dispatcherService = new SPDispatcherService(this.context);
            this.myRequestService = new SPMyRequestService(this.context);
            this.managerService = new SPManagerService(this.context);
            this.permissionService = new SPPermissionService(this.context);
            this.onInit();
      }
    private async onInit(){
        
        }
        /* Assigned Ticket data service calls */
      public getAssignedViewCountData():Promise<MyAssignedEachPlateData[]>{
        return this.departmentalService.getAssignedViewCount();
      }
      public getAssignToListData(inProcess,deptName):Promise<AssignedTicketData[]>{
        return this.departmentalService.loadAssignToListInfo(inProcess,deptName);
      }
      public getDeptOptionsByGrpName(department):Promise<IDropdownOption[]>{
        return this.departmentalService.loadDepartmentOptionsByGroupName(department);
      }
      public getEmailId(assignedToUserId):Promise<string>{
        return this.departmentalService.emailIdMethod(assignedToUserId);
      }
      public addReAssignedToData(newReAssignedToUser:any,idRequest:number,commentData:string, ticketNumber:string):Promise<{}>{
        return this.departmentalService.getAddReAssignedToData(newReAssignedToUser,idRequest,commentData, ticketNumber);
      }
      public getCompletedWithStatusUpdate(idRequest,commentData):Promise<{}>{
        return this.departmentalService.loadCompletedWithStatusUpdate(idRequest,commentData);
      }

      //Raise a request data service calls

      public getDepartmentOptions():Promise<IOptionWithKey[]>{
        return this.departmentalService.loadDepartmentOptions();
      }

      public getDepartmentDetailForPost():Promise<IDepartmentList[]>{
        return this.departmentalService.loadDepartmentDetailForPost();
      }

      public getDeptCategorySelect(selectedDept):Promise<IDropdownOption[]>{
        return this.departmentalService.deptCategorySelect(selectedDept);
      }

      public getSelectedDispatcherGroupPeople(selectedDept):Promise<[]>{
        return this.departmentalService.loadSelectedDispatcherGroupPeople(selectedDept);
      }

      public getEmployeeRequestAdded(issueDescription, selectedDept, selectedDeptCategory,fileAddition,deptListCoreInfo):Promise<{}>{
       return this.departmentalService.loadEmployeeRequest(issueDescription, selectedDept, selectedDeptCategory,fileAddition,deptListCoreInfo);
      }

      /* Dispatcher view service calls */
      public getDispatcherPlates():Promise<{}>{
       return this.dispatcherService.getDepartmentsDetails();
      }
      public getDispatcherTicketData(passedDeptName):Promise<IDispatcherList[]>{
        return this.dispatcherService.loadDispatcherListInfo(passedDeptName);
      }
      public getDepartmentOptionsByGroupName(department):Promise<IDropdownOption[]>{
        return this.dispatcherService.loadDepartmentOptionsByGroupName(department);
      }
      public async addMultipleDispatcherAttachmentLoop(requestedId,dispatcherFileAddition):Promise<{}>{
       return this.dispatcherService.loadMultipleDispatcherAttachmentLoop(requestedId,dispatcherFileAddition);
      }
      public addDispatcherReAssign(assignedToUser,idRequest,raisedBy):Promise<{}>{
        return this.dispatcherService.loadAddingReAssignedToData(assignedToUser,idRequest,raisedBy);
      }

      /* My Requested Issues Calls */

      public getMyRequestsViewCount():Promise<MyRequestedEachPlateData[]>{
      return this.myRequestService.loadMyRequestsViewCount();
      }
      public getDeptListInfo(selectedStatus,dept):Promise<IMyRequestList[]>{
        return this.myRequestService.loadDeptListInfo(selectedStatus,dept);
      }
      /* Manager View Service Calls */
      public getManagerViewCount():Promise<MyRequestedEachPlateData[]>{
        return this.managerService.loadManagerCount();
      }

      /* Permissions check */
      public getDispatcherPermissionHandle():Promise<boolean>{
        return this.permissionService.loadDispatcherPermissionHandle();
      }
      public getAssignedPermissionHandle():Promise<boolean>{
        return this.permissionService.loadAssignedPermissionHandle();
      }
      public getManagerPermissionHandle():Promise<boolean>{
        return this.permissionService.loadManagerPermissionHandle();
      }
      /*  */
    } //End of Main Class