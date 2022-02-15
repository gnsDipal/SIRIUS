import { WebPartContext } from '@microsoft/sp-webpart-base';
// import type { Sector } from '../store/operations/types';

export interface IObjectiveAndGoalProps {
  webPartContext:WebPartContext;
  // Sectors: Sector[]; 
  // setSPContext(context:WebPartContext): Function;
  // setSectors(sector: Sector[]): Function;
}

export interface IObjectivesGoalsState { 
  isSettingsPanelOpen:boolean;
}
