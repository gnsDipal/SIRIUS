import * as React from 'react';
import { IPanelSettingsProps } from './IPanelSettingsProps';
export interface IPanelSettingsState {
    webURL: string;
}
export default class PanelSettings extends React.Component<IPanelSettingsProps, IPanelSettingsState> {
    constructor(props: IPanelSettingsProps);
    componentDidMount(): void;
    checkTeamCreatedBefore: () => Promise<void>;
    createTeam: () => Promise<void>;
    GetTeams: () => Promise<void>;
    GetChannelId: (teamId: any) => Promise<void>;
    createTabGeneralPost: (teamId: any, channelId: any, body: any) => Promise<void>;
    createTab1: (teamId: any, channelId: any) => Promise<void>;
    createTab2: (teamId: any, channelId: any) => Promise<void>;
    createTab3: (teamId: any, channelId: any) => Promise<void>;
    cancel: () => void;
    render(): React.ReactElement<{}>;
}
//# sourceMappingURL=PanelSettings.d.ts.map