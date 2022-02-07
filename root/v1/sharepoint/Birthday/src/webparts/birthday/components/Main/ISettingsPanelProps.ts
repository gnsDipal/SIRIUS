import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface ISettingsPanelProps {
    webPartContext: WebPartContext;
    ConfigListName: string;
    ImagesListName: string;
    UsersListName: string;
    EmailListName: string;
    onClosePanel: () => void;
  }