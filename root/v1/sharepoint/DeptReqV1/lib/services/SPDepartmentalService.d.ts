import { AssignedTicketData, MyAssignedEachPlateData } from '../model/MyRequestedEachPlateData';
import { IDropdownOption } from 'office-ui-fabric-react';
import { IOptionWithKey } from '../model/RaiseRequest';
import { IDepartmentList } from '../model/RaiseRequest';
export default class SPDepartmentalService {
    private context;
    private webContext;
    private webUrl;
    private loggedInUserId?;
    private loggedInUserEmail?;
    private loggedInUserName?;
    private web;
    constructor(context: any);
    private onInit;
    loadDepartmentOptions(): Promise<IOptionWithKey[]>;
    loadDepartmentDetailForPost(): Promise<IDepartmentList[]>;
    deptCategorySelect(selectedDept: any): Promise<IDropdownOption[]>;
    loadSelectedDispatcherGroupPeople(selectedDept: any): Promise<[]>;
    loadEmployeeRequest(issueDescription: any, selectedDept: any, selectedDeptCategory: any, fileAddition: any, deptListCoreInfo: any): Promise<{}>;
    addMultipleAttachmentLoop(responseJSON: any, fileAddition: any): Promise<void>;
    getAssignedViewCount(): Promise<MyAssignedEachPlateData[]>;
    getRequestedCountByPara(web: any, deptName: any, status: any, currentUserId: any): Promise<any>;
    loadAssignToListInfo(inProcess: any, deptName: any): Promise<AssignedTicketData[]>;
    loadDepartmentOptionsByGroupName(groupName: any): Promise<IDropdownOption[]>;
    getAddReAssignedToData(newReAssignedToUser: any, idRequest: number, commentData: string, ticketNumber: string): Promise<{}>;
    emailIdMethod(userId: any): Promise<string>;
    loadCompletedWithStatusUpdate(idRequest: any, commentData: any): Promise<{}>;
}
//# sourceMappingURL=SPDepartmentalService.d.ts.map