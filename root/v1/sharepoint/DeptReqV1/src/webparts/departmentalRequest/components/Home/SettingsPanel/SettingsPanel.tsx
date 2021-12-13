import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import { CompoundButton } from '@fluentui/react/lib/Button';
import { Panel } from '@fluentui/react/lib/Panel';
import { Link } from '@fluentui/react/lib/Link';
debugger;
const SettingsPanel = (props) => {
    useEffect(() => {
        
        return () => {
            
        };
    }, []);
    const cancel = () =>{
            props.onClosePanel();
    };
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
    );
};

export default SettingsPanel;
