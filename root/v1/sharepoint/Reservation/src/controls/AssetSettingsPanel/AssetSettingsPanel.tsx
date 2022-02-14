import * as React from 'react';
import * as strings from 'AssetReservationWebPartStrings';
import spAssetServiceSettingsPanel from '../../services/spAssetServiceSettingsPanel';
import {IAssetSettingsPanelProps } from './IAssetSettingsPanelProps';
import {IAssetSettingsPanelState} from './IAssetSettingsPanelState';
import { Panel, Link } from '@fluentui/react/lib';
import {Spinner,SpinnerSize} from 'office-ui-fabric-react/lib/Spinner';

debugger;
export default class AssetReservation extends React.Component<IAssetSettingsPanelProps, IAssetSettingsPanelState> {
    public spAssetSettingsPanelService:spAssetServiceSettingsPanel = null;
    constructor(props:IAssetSettingsPanelProps, state:IAssetSettingsPanelState) { 
        super(props);
        this.state = {
            webUrl:''
        }
        this.init();
    }
    public init = async() =>{
        this.spAssetSettingsPanelService = new spAssetServiceSettingsPanel(this.props);
        this.spAssetSettingsPanelService.newTeam()
        .then((res:any) =>{
            this.setState({webUrl:res});
        });
    };

    public cancel(){
        this.props.onClosePanel();
};

    public render(): React.ReactElement<IAssetSettingsPanelProps> {
        return (
            <Panel
            headerText="Room Reservation Settings"
            isOpen={true}
            onDismiss={() => this.cancel()}>  
                {
                    (this.state.webUrl === '') &&
                    <Spinner size={SpinnerSize.large} label={strings.LoadingLabel}/>
                }
                {   (this.state.webUrl !== '') &&
                    <Link href={this.state.webUrl} target="_blank" underline> 
                        Link to admin settings
                    </Link> 
                }             
            </Panel>
        )
    }

} //End of class