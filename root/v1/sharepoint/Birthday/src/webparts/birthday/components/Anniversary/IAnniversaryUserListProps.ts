import { IAnniversary } from "../../../../Models/IAnniversary";
import { IMSGraphInterface } from "../../../../services/msGraphProvider";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IAnniversaryUserListProps {
    people: IAnniversary[];    
    webPartContext: WebPartContext;
    dataSource: string;
    IsTeamsIcon: boolean;
}

export interface IAnniversaryUserListState {
    showCallOut: boolean;
    showCallOutTeams: boolean;
    calloutElement: number;
    person: IAnniversary;
    currentMessage: string;
    msGraphProvider: IMSGraphInterface;
    errorMessage: string;
    selectedImage: string;
    message: string;
    images: string[];
}