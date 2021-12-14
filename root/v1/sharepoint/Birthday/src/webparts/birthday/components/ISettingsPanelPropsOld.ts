import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface ISettingsPanelProps {
    webPartContext: WebPartContext;
    onClosePanel: () => void;
  }