import { IBirthday } from "../../../../../Models/IBirthday";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IBirthdayUsersProps {
    webPartContext: WebPartContext;    
    externalAPI: string;
    IsTeamsIcon: boolean;
    dataSource: string;
    BUsers: IBirthday[];
}