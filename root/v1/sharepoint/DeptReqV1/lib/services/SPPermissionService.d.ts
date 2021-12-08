export default class SPPermissionService {
    private context;
    private webContext;
    private webUrl;
    private loggedInUserId?;
    private loggedInUserEmail?;
    private loggedInUserName?;
    private web;
    constructor(context: any);
    private onInit;
    loadDispatcherPermissionHandle(): Promise<boolean>;
    checkForDepts(result: any, loggedInUserGrps: any): Promise<boolean>;
}
//# sourceMappingURL=SPPermissionService.d.ts.map