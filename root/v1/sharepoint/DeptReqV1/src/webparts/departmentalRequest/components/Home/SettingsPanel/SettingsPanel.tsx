import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { CompoundButton } from '@fluentui/react/lib/Button';
import { Panel } from '@fluentui/react/lib/Panel';
import { Link } from '@fluentui/react/lib/Link';
import SPDepartmentalServiceData from '../../../../../services/SPDepartmentalServiceData';
import { UserContext } from '../../Main/Main';
import {Spinner,SpinnerSize} from 'office-ui-fabric-react/lib/Spinner';

const SettingsPanel = (props) => {
    let spSettingsPanelService:SPDepartmentalServiceData = null;
    const mainContext = useContext(UserContext);
    const [webLink, setWebLink] = useState(''); // link for admin settings
    useEffect(() => {
        init();
    }, []);

    const init = async() =>{
        spSettingsPanelService = new SPDepartmentalServiceData(mainContext);
        spSettingsPanelService.createTeamTabTest()
        .then((res:any) =>{
            setWebLink(res);
        });
    };

    const cancel = () =>{
            props.onClosePanel();
    };
    return (
        <Panel
            headerText="Departmental Request Web Part Settings"
            isOpen={true}
            onDismiss={() => cancel()}>  
                {
                    (webLink === '') &&
                    <Spinner size={SpinnerSize.large} label={strings.LoadingLabel}/>
                }
                {   (webLink !== '') &&
                    <Link href={webLink} target="_blank" underline> 
                        Link to admin settings
                    </Link> 
                }             
        </Panel>
    );
};
export default SettingsPanel;
