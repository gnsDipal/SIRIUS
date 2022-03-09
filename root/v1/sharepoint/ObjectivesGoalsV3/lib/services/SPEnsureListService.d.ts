import { WebPartContext } from "@microsoft/sp-webpart-base";
export default class SPEnsureListService {
    private context;
    constructor(context: WebPartContext);
    private onInit;
    ensureGoalDepartmentOptionsList(GoalDeptOptionsListName: string): Promise<string>;
    ensureGoalDepartmentList(GoalDeptListName: string): Promise<string>;
    ensureGoalOrganizationList(GoalOrgListName: string): Promise<string>;
    ensureGoalSecurityAddGoalList(GoalOrgSecurityListName: string): Promise<string>;
    ensureGoalPersonalList(GoalPersnlListName: string): Promise<string>;
}
//# sourceMappingURL=SPEnsureListService.d.ts.map