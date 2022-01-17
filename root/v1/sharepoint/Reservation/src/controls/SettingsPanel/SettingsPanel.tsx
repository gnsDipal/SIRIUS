import * as React from 'react';
import * as strings from 'RoomReservationPlatinumWebPartStrings';
import spServiceSettingsPanel from '../../services/spServiceSettingsPanel';
import {ISettingsPanelProps } from './ISettingsPanelProps';
import {ISettingsPanelState} from './ISettingsPanelState';
import { Panel } from '@fluentui/react/lib/Panel';
import {Spinner,SpinnerSize} from 'office-ui-fabric-react/lib/Spinner';
import { Link } from '@fluentui/react/lib/Link';

debugger;
export default class RoomReservationPlatinum extends React.Component<ISettingsPanelProps, ISettingsPanelState> {
    public spSettingsPanelService:spServiceSettingsPanel = null;
    constructor(props:ISettingsPanelProps, state:ISettingsPanelState) { 
        super(props);
        this.state = {
            webUrl:''
        }
        this.init();
    }
    public init = async() =>{
        this.spSettingsPanelService = new spServiceSettingsPanel(this.props.context,this.props.locationListName,this.props.areaListName,this.props.categoryListName,this.props.masterListName,this.props.calendarListName);
        this.spSettingsPanelService.newTeam()
        .then((res:any) =>{
            this.setState({webUrl:res});
        });
    };

    public cancel(){
        this.props.onClosePanel();
};

    public render(): React.ReactElement<ISettingsPanelProps> {
        return (
            <Panel
            headerText="Departmental Request Web Part Settings"
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