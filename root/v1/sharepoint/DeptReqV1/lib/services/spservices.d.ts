import { WebPartContext } from "@microsoft/sp-webpart-base";
import { Context } from "@microsoft/teams-js";
export interface spProps {
    context: Context;
}
export default class spservices {
    private context;
    private webContext;
    constructor(context: WebPartContext);
    private onInit;
    checkLoggedInUserAsAdmin(): void;
}
//# sourceMappingURL=spservices.d.ts.map