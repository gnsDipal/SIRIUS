import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IBirthday } from "../../../Models/IBirthday";
import { IAnniversary } from "../../../Models/IAnniversary";

export interface IBirthdayProps {
  description: string;
  webPartContext: WebPartContext;  
  dropdown: string;
  BirthPeople: IBirthday[];
  AnniPeople: IAnniversary[];
  externalAPI: string;
  IsTeamsIcon: boolean;
  dataSource: string;
}