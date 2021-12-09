import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IPanelSettingsProps {
    webPartContext: WebPartContext;
    onClosePanel: () => void;
  }