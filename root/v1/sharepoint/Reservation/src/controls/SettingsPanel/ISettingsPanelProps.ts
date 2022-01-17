import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface ISettingsPanelProps {
    onClosePanel():void;
  context: WebPartContext;
  locationListName: string;
  areaListName: string;
  categoryListName:string;
  masterListName: string;
  calendarListName:string;
}