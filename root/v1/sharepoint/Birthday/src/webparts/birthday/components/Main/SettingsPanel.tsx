import * as React from 'react';
import { Panel, Dropdown, TextField, PrimaryButton, DefaultButton, DialogFooter, Toggle, Link } from '@fluentui/react';
import SPBirthdayAnniversaryServiceData from '../../../../services/SPBirthdayAnniversaryServiceData';
import * as strings from 'BirthdayWebPartStrings';

let spPanelSettingsServiceData:SPBirthdayAnniversaryServiceData = undefined;
debugger;

const SettingsPanel = (props)=> {
    const[ dropdown, setDropdown ] = React.useState<string>("");
    const[ externalAPI, setExternalAPI ] = React.useState<string>("");
    const[ IsTeamsIcon, setIsTeamsIcon ] = React.useState<boolean>(false);
    const[ errorMessage, setErrorMessage ] = React.useState<string>("");
    const[ webURL, setWebURL ] = React.useState<string>("");
    React.useEffect(() => {
        init();
    },[]);

    const init = async() => {
        spPanelSettingsServiceData = new SPBirthdayAnniversaryServiceData(props.webPartContext);

        //create team tab for admin to do the initial level settings
        let webURL = await spPanelSettingsServiceData.createNewTeam(); 
        setWebURL(webURL);       
    };

    const cancel = async() => {
        props.onClosePanel();
    };

    const setDataSource = async(datasource) => {
        setDropdown(datasource);
    };

    const downloadCsv = async() => {

    };    
    
    const UploadCSV = async(file) => {

    };

    const handleChange = async(URL: string) => {

    };

    const onChange = async() => {

    };

    const save = async() => {

    };

    return(
        <Panel
            headerText={strings.settingsPanelHeading}
            isOpen={true}
            onDismiss={() => cancel()}        
        > 
            <br></br>
            <label style={{fontSize:"16px"}}>{strings.settingsPanelDescription}</label>
            <br></br>
            <br></br>
            <Dropdown 
                label={strings.settingsPanelDropdownLabel}
                options={[
                    { key: 'Azure', text: 'From Azure active directory' },
                    { key: 'Internal', text: 'Internal list from SharePoint' },
                    { key: 'API', text: 'APIs OR Webservice' }
                ]}
                defaultSelectedKey= {dropdown ? dropdown : 'Azure'}
                onChange={(e, v) => setDataSource(v.key)} 
            />
            <br></br>
            { dropdown === 'Internal' && (
                <div>
                    <div>
                        <PrimaryButton
                          onClick={downloadCsv}
                          text="Download csv template"            
                        />
                    </div>
                    <br></br>
                    <div>
                        <input
                          type="file"
                          name="Upload Csv file"
                          onChange={(e) => UploadCSV(e.target.files[0])}
                        />
                    </div>
                    <div style={{color:'#d9534f'}}>{errorMessage}</div>
                </div>
            )}

            { dropdown === 'API' && (
                <div>
                    <div>
                        <TextField label="Enter API/Webservice URL" onChange={(e) => handleChange(e.currentTarget.value)} value={externalAPI}></TextField>
                    </div>
                    <br></br>
                    <div>
                        <Toggle label="Show Teams Icon" onText="On" offText="Off" onChange={onChange} defaultChecked={IsTeamsIcon}/>
                    </div>
                    <div style={{color:'#d9534f'}}>{errorMessage}</div>
                </div>                     
            )}
            <DialogFooter>
                <PrimaryButton
                    onClick={() => save()}
                    text="Save"            
                />
                <DefaultButton 
                    onClick={() => cancel()} 
                    text="Cancel" 
                />
            </DialogFooter>
            <br></br>
            <br></br>
            <div>
                <div>
                    <label style={{fontSize:"16px"}}>Admin Settings</label>
                </div> 
                <div>                
                    <Link href={webURL} target="_blank" underline>
                        Go to admin settings
                    </Link>               
                </div>
            </div>
        </Panel>

    ) 
}
export default SettingsPanel