import * as React from 'react'
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
import SPSettingsPanelService from './SPSettingsPanelService';
debugger;
  let uniqueDeptList = [];
  
  export default class SPDepartmentalServiceData{ 
      private departmentalService: SPDepartmentalService = null;
      private dispatcherService: SPDispatcherService = null;
      private myRequestService: SPMyRequestService = null;
      private managerService: SPManagerService = null;
      private permissionService: SPPermissionService = null;
      private settingsPanelService:SPSettingsPanelService = null;
      constructor(private context){
            this.departmentalService = new SPDepartmentalService(this.context);
            this.dispatcherService = new SPDispatcherService(this.context);
            this.myRequestService = new SPMyRequestService(this.context);
            this.managerService = new SPManagerService(this.context);
            this.permissionService = new SPPermissionService(this.context);
            this.settingsPanelService = new SPSettingsPanelService(this.context);
            this.onInit();
      }
    private async onInit(){
        
        }
        /* Assigned Ticket data service calls */
      getAssignedViewCountData():Promise<MyAssignedEachPlateData[]>{
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
      getDispatcherTicketData(passedDeptName):Promise<IDispatcherList[]>{
        return this.dispatcherService.loadDispatcherListInfo(passedDeptName);
      }
      getDepartmentOptionsByGroupName(department):Promise<IDropdownOption[]>{
        return this.dispatcherService.loadDepartmentOptionsByGroupName(department);
      }
      async addMultipleDispatcherAttachmentLoop(requestedId,dispatcherFileAddition):Promise<{}>{
       return this.dispatcherService.loadMultipleDispatcherAttachmentLoop(requestedId,dispatcherFileAddition);
      }
      addDispatcherReAssign(assignedToUser,idRequest,raisedBy):Promise<{}>{
        return this.dispatcherService.loadAddingReAssignedToData(assignedToUser,idRequest,raisedBy);
      }

      /* My Requested Issues Calls */

      getMyRequestsViewCount():Promise<MyRequestedEachPlateData[]>{
      return this.myRequestService.loadMyRequestsViewCount();
      }
      getDeptListInfo(selectedStatus,dept):Promise<IMyRequestList[]>{
        return this.myRequestService.loadDeptListInfo(selectedStatus,dept)
      }
      /* Manager View Service Calls */
      getManagerViewCount():Promise<MyRequestedEachPlateData[]>{
        return this.managerService.loadManagerCount();
      }

      /* Permissions check */
      getDispatcherPermissionHandle():Promise<boolean>{
        return this.permissionService.loadDispatcherPermissionHandle();
      }
      getAssignedPermissionHandle():Promise<boolean>{
        return this.permissionService.loadAssignedPermissionHandle();
      }
      getManagerPermissionHandle():Promise<boolean>{
        return this.permissionService.loadManagerPermissionHandle();
      }
      /* Settings Panel service calls */
      // public createTeamTab(){
      //   return this.settingsPanelService.newTeam();
      // }

      public createTeamTabTest(){
        return this.settingsPanelService.checkTeamCreatedBefore();
      }
    } //End of Main Class  
  
