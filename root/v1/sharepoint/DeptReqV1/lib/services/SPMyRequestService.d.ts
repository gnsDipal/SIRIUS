import { MyRequestedEachPlateData, IMyRequestList } from '../model/MyRequestedEachPlateData';
export default class SPMyRequestService {
    private context;
    private webContext;
    private webUrl;
    private loggedInUserId?;
    private loggedInUserEmail?;
    private loggedInUserName?;
    private web;
    constructor(context: any);
    private onInit;
    loadMyRequestsViewCount(): Promise<MyRequestedEachPlateData[]>;
    getRequestedCountByPara(web: any, deptName: any, status: any, currentUserId: any): Promise<any>;
    loadDeptListInfo(selectedStatus: any, dept: any): Promise<IMyRequestList[]>;
}
//# sourceMappingURL=SPMyRequestService.d.ts.map