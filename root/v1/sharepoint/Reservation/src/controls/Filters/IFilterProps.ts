import { FilterType } from './filterType';

export interface IFilterProps {
    context:any;
    siteUrl: string;
    locationListName: string;
    areaListName: string;
    categoryListName:string;
    masterListName: string;
    calendarListName:string;
    filterType: FilterType;
    EventKeySelection(locationId: number, areaId: number, buildingId:number, sizeId:number) : void;
} 