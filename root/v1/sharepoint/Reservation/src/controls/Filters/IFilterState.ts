import { IDropdownOption } from "office-ui-fabric-react";

export interface IFilterStates {
    locations :IDropdownOption[];
    selectedLocationKey: number;
    areas :IDropdownOption[];
    selectedAreaKey : number;
    buildings:IDropdownOption[];
    selectedBuildingKey:number;
    size:IDropdownOption[];
    selectedSizeKey:number;
    errorMessage: string;
}