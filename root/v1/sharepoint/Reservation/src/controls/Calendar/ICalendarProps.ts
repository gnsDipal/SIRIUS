import { DisplayMode } from '@microsoft/sp-core-library';
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IDateTimeFieldValue } from '@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker';
import { FilterType } from '../../controls/Filters/filterType';
export interface ICalendarProps {
  title: string;
  siteUrl: string;
  locationListName: string;
  areaListName: string;
  categoryListName:string;
  masterListName: string;
  calendarListName:string;
  displayMode: DisplayMode;
  filterType: FilterType;
  updateProperty: (value: string) => void;
  context: WebPartContext;
  eventStartDate:  IDateTimeFieldValue;
  eventEndDate: IDateTimeFieldValue;
}
