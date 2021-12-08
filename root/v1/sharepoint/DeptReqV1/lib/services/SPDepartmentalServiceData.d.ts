import { MyAssignedEachPlateData, MyRequestedEachPlateData, IMyRequestList } from '../model/MyRequestedEachPlateData';
import { AssignedTicketData } from '../model/MyRequestedEachPlateData';
import { IDropdownOption } from 'office-ui-fabric-react';
import { IOptionWithKey, IDepartmentList } from '../model/RaiseRequest';
import { IDispatcherList } from '../model/IDispatcher';
export default class SPDepartmentalServiceData {
    private context;
    private departmentalService;
    private dispatcherService;
    private myRequestService;
    private managerService;
    private permissionService;
    constructor(context: any);
    private onInit;
    getAssignedViewCountData(): Promise<MyAssignedEachPlateData[]>;
    getAssignToListData(inProcess: any, deptName: any): Promise<AssignedTicketData[]>;
    getDeptOptionsByGrpName(department: any): Promise<IDropdownOption[]>;
    getEmailId(assignedToUserId: any): Promise<string>;
    addReAssignedToData(newReAssignedToUser: any, idRequest: number, commentData: string, ticketNumber: string): Promise<{}>;
    getCompletedWithStatusUpdate(idRequest: any, commentData: any): Promise<{}>;
    getDepartmentOptions(): Promise<IOptionWithKey[]>;
    getDepartmentDetailForPost(): Promise<IDepartmentList[]>;
    getDeptCategorySelect(selectedDept: any): Promise<IDropdownOption[]>;
    getSelectedDispatcherGroupPeople(selectedDept: any): Promise<[]>;
    getEmployeeRequestAdded(issueDescription: any, selectedDept: any, selectedDeptCategory: any, fileAddition: any, deptListCoreInfo: any): Promise<{}>;
    getDispatcherPlates(): Promise<{}>;
    getDispatcherTicketData(passedDeptName: any): Promise<IDispatcherList[]>;
    getDepartmentOptionsByGroupName(department: any): Promise<IDropdownOption[]>;
    addMultipleDispatcherAttachmentLoop(requestedId: any, dispatcherFileAddition: any): Promise<{}>;
    addDispatcherReAssign(assignedToUser: any, idRequest: any, raisedBy: any): Promise<{}>;
    getMyRequestsViewCount(): Promise<MyRequestedEachPlateData[]>;
    getDeptListInfo(selectedStatus: any, dept: any): Promise<IMyRequestList[]>;
    getManagerViewCount(): Promise<MyRequestedEachPlateData[]>;
    getDispatcherPermissionHandle(): Promise<boolean>;
}
//# sourceMappingURL=SPDepartmentalServiceData.d.ts.map