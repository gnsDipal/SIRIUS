import { MyRequestedEachPlateData, IMyRequestList } from '../model/MyRequestedEachPlateData';
export default class SPManagerService {
    private context;
    private webContext;
    private webUrl;
    private loggedInUserId?;
    private web;
    constructor(context: any);
    private onInit;
    loadManagerCount(): Promise<MyRequestedEachPlateData[]>;
    getRequestedCountByPara(web: any, deptName: any, status: any, currentUserId: any): Promise<any>;
    loadDeptListInfo(selectedStatus: any, dept: any): Promise<IMyRequestList[]>;
}
//# sourceMappingURL=SPManagerService.d.ts.map