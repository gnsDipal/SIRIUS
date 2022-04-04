import { IEventData } from '../../models/IEventData';
import { IPanelModelEnum} from './IPanelModeEnum';
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { FilterType } from '../../controls/Filters/filterType';
export interface IEventProps {
  events: IEventData[]; 
  event: IEventData;
  panelMode: IPanelModelEnum;
  onDissmissPanel: (refresh:boolean) => void;
  showPanel: boolean;
  startDate?: Date;
  endDate?: Date;
  context:WebPartContext;
  siteUrl: string;
  locationListName: string;
  areaListName: string;
  categoryListName:string;
  masterListName: string;
  calendarListName:string;
  filterType: FilterType;
  // myCalenderRender: Function;
}
