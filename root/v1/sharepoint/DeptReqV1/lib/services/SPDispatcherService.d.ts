import { IDropdownOption } from 'office-ui-fabric-react';
import { IDispatcherList } from '../model/IDispatcher';
export default class SPDispatcherService {
    private context;
    private webContext;
    private webUrl;
    private loggedInUserId?;
    private loggedInUserEmail?;
    private loggedInUserName?;
    private web;
    constructor(context: any);
    private onInit;
    getDepartmentsDetails(): Promise<{}>;
    getLoggedInUserIdSPGroups(departmentDetailsArray: any): Promise<void>;
    getLoggedInUserIdSPGroupsSuccess(res: any, departmentDetailsArray: any): Promise<any[]>;
    loadAssignedTask(SPGroupList: any): Promise<any[]>;
    loadDispatcherListInfo(passedDeptName: any): Promise<IDispatcherList[]>;
    loadDepartmentOptionsByGroupName(groupName: any): Promise<IDropdownOption[]>;
    loadMultipleDispatcherAttachmentLoop(requestedId: any, dispatcherFileAddition: any): Promise<{}>;
    loadAddingReAssignedToData(newUser: any, idRequest: number, raisedBy: any): Promise<{}>;
}
//# sourceMappingURL=SPDispatcherService.d.ts.map