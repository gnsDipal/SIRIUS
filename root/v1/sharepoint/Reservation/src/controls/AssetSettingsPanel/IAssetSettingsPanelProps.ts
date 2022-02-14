import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IAssetSettingsPanelProps {
    onClosePanel():void;
  WebPartContext: WebPartContext;
  locationListName: string;
  areaListName: string;
  categoryListName:string;
  masterListName: string;
  calendarListName:string;
}