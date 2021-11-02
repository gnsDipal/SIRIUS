
import {IBirthday} from "../../../Models/IBirthday";
import {IAnniversary} from "../../../Models/IAnniversary"

export interface IBirthdayState {
    BUsers : IBirthday[], 
    AUsers : IAnniversary[],
    count:number,
    bgColorBirthday:string,
    bgColorAnniversary:string,
    
    colorBirthday:string,
    colorAnniversary:string,
    
    loading:boolean,
    /**
     * Contains the error message that occurred while loading the data.
     * If no error message occurred, null.
     */
     errorMessage: string;
     StartDate: string;
     EndDate: string;
     isSettingsPanelOpen:boolean;
     datasource: string;
     selectedCategory: string;
     IsTeamsIcon: boolean;
     ExternalAPI: string;
}