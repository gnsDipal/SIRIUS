import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import { CompoundButton } from '@fluentui/react/lib/Button';
import { Panel } from '@fluentui/react/lib/Panel';
import { Link } from '@fluentui/react/lib/Link';
import SPDepartmentalServiceData from '../../../../../services/SPDepartmentalServiceData';
import { UserContext } from '../../Main/Main';
debugger;
let spSettingsPanelService:SPDepartmentalServiceData = null;
const SettingsPanel = (props) => {
    const mainContext = useContext(UserContext);
    const [webLink, setWebLink] = useState(''); // link for admin settings
    useEffect(() => {
      init();      
    }, []);

    const init = async() =>{
        spSettingsPanelService = new SPDepartmentalServiceData(mainContext);
        spSettingsPanelService.createTeamTab()
        .then(res =>{
            setWebLink(res);
        })
    }
    const cancel = () =>{
            props.onClosePanel();
    }
    return (
        <Panel
            headerText="Departmental Request Web Part Settings"
            isOpen={true}
            onDismiss={() => cancel()}        
            >     
                <Link href="https://gns11.sharepoint.com/sites/SiriusTeams/Lists/Dept/AllItems.aspx" target="_blank" underline> 
                  Go to admin settings
                </Link>                
            </Panel>
    )
}

export default SettingsPanel
