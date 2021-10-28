import { WebPartContext } from "@microsoft/sp-webpart-base";
export interface  IEventRecurrenceInfoMonthlyProps {
  display:boolean;
  recurrenceData: string;
  startDate:Date;
  context: WebPartContext;
  siteUrl:string;
  returnRecurrenceData: (startDate:Date,recurrenceData:string) => void;
}
