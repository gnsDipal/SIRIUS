import { IAnniversary } from "../../../../../Models/IAnniversary";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IBirthdayUsersProps {
    webPartContext: WebPartContext;    
    externalAPI: string;
    IsTeamsIcon: boolean;
    dataSource: string;
    AUsers: IAnniversary[];
}