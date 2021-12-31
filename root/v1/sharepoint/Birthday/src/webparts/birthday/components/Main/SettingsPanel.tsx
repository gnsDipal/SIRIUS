import * as React from 'react';
import { Spinner,SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { Panel, Dropdown, TextField, PrimaryButton, DefaultButton, DialogFooter, Toggle, Link } from '@fluentui/react';
import SPBirthdayAnniversaryServiceData from '../../../../services/SPBirthdayAnniversaryServiceData';
import * as strings from 'BirthdayWebPartStrings';

debugger;
const SettingsPanel = (props)=> {
    let spPanelSettingsServiceData:SPBirthdayAnniversaryServiceData = undefined;
    const[ dropdown, setDropdown ] = React.useState<string>("");
    const[ externalAPI, setExternalAPI ] = React.useState<string>("");
    const[ IsTeamsIcon, setIsTeamsIcon ] = React.useState<boolean>(false);
    const[ errorMessage, setErrorMessage ] = React.useState<string>("");
    const[ webURL, setWebURL ] = React.useState<string>("");
    spPanelSettingsServiceData = new SPBirthdayAnniversaryServiceData(props.webPartContext);
    React.useEffect(() => {
        init();
    },[]);    

    const init = async() => {
        //create team tab for admin to do the initial level settings
        spPanelSettingsServiceData.createNewTeam()
        .then((res:any) => {
            alert("Web URL: " + res);
            setWebURL(res);
        });        
        GetUpdatedDataSource();               
    };
    
    //Get configuration from config list and update in panel
    const GetUpdatedDataSource = () => {
        spPanelSettingsServiceData.getTeamsSettingData()
        .then((res:any) => {
            if(res.length > 0){
                let start: number = res[0].Settings.indexOf(":");        
                let end: number = res[0].Settings.indexOf("}");
                let teamsDataSource = res[0].Settings.substring(start + 2, end - 1);
                setDropdown(teamsDataSource);
                setExternalAPI(res[0].ExternalAPI);
                setIsTeamsIcon(res[0].IsTeamsIcon);                
            }
        }, (error: any): void => {      
            console.log(error); 
        });
    }; 

    const cancel = async() => {
        props.onClosePanel();
    };

    const setDataSource = async(datasource) => {
        setDropdown(datasource);
    };

    //download the template to add the user details
    const downloadCsv = async() => {
        const linkSource = `data:application/csv;base64,${"TmFtZSxGaXJzdE5hbWUsTGFzdE5hbWUsRW1haWwsQmlydGhEYXRlLEhpcmVEYXRlLERlcGFydG1lbnQ="}`;
        const downloadLink = document.createElement('a');

        // Append to html link element page
        document.body.appendChild(downloadLink);

        downloadLink.href = linkSource;
        downloadLink.target = '_self';
        downloadLink.download = "UserBirthAnniversaryDetails.csv";

        // Start download
        downloadLink.click();

        // Clean up and remove the link
        setTimeout(function(){ downloadLink.parentNode.removeChild(downloadLink); }, 500);
    };    
    
    //upload the csv format data to SharePoint list
    const UploadCSV = async(file) => {
        let uploadedFileName = file.name;
        let fileExtension = uploadedFileName.split('.').pop();
        if(uploadedFileName === "UserBirthAnniversaryDetails.csv"){
            setErrorMessage("");
            if(file){
                const reader = new FileReader();        
                reader.onload = async (e) => {           
                    const text = reader.result;
                    const dataArray = csvToArray(text);                
                    exportDataToList(dataArray);
                }
                reader.readAsText(file);               
            }
        }
        else
            setErrorMessage("Wrong file uploaded. Please select UserBirthAnniversaryDetails.csv file.");        
    };

    const csvToArray = async(str, delimiter = ",") => {
        const headers = str.slice(0, str.indexOf("\r\n")).split(delimiter);
        const rows = str.slice(str.indexOf("\n") + 1).split("\r\n");
        
        const arr = rows.map((row) => {
            if(row.length !== 0){
                const values = row.split(delimiter);    
                const el = headers.reduce(function (object, header, index) {          
                object[header] = values[index];
                return object;                
                }, {});
                return el;
            }        
        });
        //return an array
        return arr;
    };

    const exportDataToList = async(UserList: any) => {
        for(let i:number = 0; i<UserList.length; ++i){
            if(UserList[i] !== undefined){
                let birthDate = new Date(UserList[i].BirthDate);
                let birthDateFinal = new Date(birthDate.getTime() - (birthDate.getTimezoneOffset() * 60000));
                let hireDate = new Date(UserList[i].HireDate);
                let hireDateFinal = new Date(hireDate.getTime() - (hireDate.getTimezoneOffset() * 60000));
                const requestlistItem: string = JSON.stringify({
                'name': UserList[i].Name,
                'firstName': UserList[i].FirstName,
                'lastName': UserList[i].LastName,
                'email': UserList[i].Email,
                'birthDate': birthDateFinal, 
                'hireDate': hireDateFinal,                           
                'department': UserList[i].Department          
                });
                await spPanelSettingsServiceData.putUserDataToList(requestlistItem);
            }  
        }
    };

    const handleChange = async(URL: string) => {
        setExternalAPI(URL);
        setErrorMessage("");
    };

    const showHideTeamsIcon = async(ev: React.MouseEvent<HTMLElement>, checked?: boolean) => {
        setIsTeamsIcon(checked);
    };

    //Save updated data if item already present else create new item in configuration list
    const save = async() => {
        await spPanelSettingsServiceData.getTeamsSettingData()
        .then((res:any) => {
            if(res.length > 0){
                updateItemInList(res[0].ID);
                if(errorMessage === "")
                    props.onClosePanel();
            }
            else{
                createItemInList();
                if(errorMessage === "")
                    props.onClosePanel();
            }
        }, (error: any): void => {      
            console.log(error); 
        });
    };

    const updateItemInList = async(ItemID: number) => {
        if(dropdown === "API" && (externalAPI === undefined || externalAPI === "")){
            setErrorMessage("Provide an external API URL.");
        }
        else{
            let settings: string = '{"DataSource":"' + dropdown + '"}';
            let JsonData: string;
            if(dropdown === "API"){
                JsonData = JSON.stringify({      
                    'Settings': settings,
                    'ExternalAPI': externalAPI,
                    'IsTeamsIcon': IsTeamsIcon  
                });
            }
            else{
                JsonData = JSON.stringify({      
                    'Settings': settings,
                    'ExternalAPI': "",
                    'IsTeamsIcon': false 
                });
            }
            await spPanelSettingsServiceData.putTeamsConfigurationToList(JsonData, ItemID);
        }           
    }; 

    const createItemInList = async() => {
        if(dropdown === "API" && (externalAPI === undefined || externalAPI === ""))
            setErrorMessage("Provide an external API URL.");
        else{
            let settings: string = '{"DataSource":"' + dropdown + '"}';
            const JsonData: string = JSON.stringify({
                'Title': 'Birthday webpart settings',
                'Key': 'Birthday',
                'Settings': settings,
                'ExternalAPI': externalAPI,
                'IsTeamsIcon': IsTeamsIcon     
            });
            await spPanelSettingsServiceData.addTeamsConfigurationToList(JsonData);         
        }
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
                defaultSelectedKey= {(dropdown !== "") ? dropdown : 'Azure'}
                onChange={(e, selectedDataSource) => setDataSource(selectedDataSource.key)} 
            />
            <br></br>
            { dropdown === 'Internal' && (
                <div>
                    <div>
                        <PrimaryButton
                          onClick={downloadCsv}
                          text={strings.CSVtemplateText}            
                        />
                    </div>
                    <br></br>
                    <div>
                        <input
                          type="file"
                          name={strings.UploadCSVlabel}
                          onChange={(e) => UploadCSV(e.target.files[0])}
                        />
                    </div>
                    <div style={{color:'#d9534f'}}>{errorMessage}</div>
                </div>
            )}

            { dropdown === 'API' && (
                <div>
                    <div>
                        <TextField label={strings.ExternalAPIlabel} onChange={(e) => handleChange(e.currentTarget.value)} value={externalAPI}></TextField>
                    </div>
                    <br></br>
                    <div>
                        <Toggle label={strings.TeamsIconlabel} onText="On" offText="Off" onChange={showHideTeamsIcon} checked={IsTeamsIcon}/>
                    </div>
                    <div style={{color:'#d9534f'}}>{errorMessage}</div>
                </div>                     
            )}
            <DialogFooter>
                <PrimaryButton
                    onClick={() => save()}
                    text={strings.saveText}           
                />
                <DefaultButton 
                    onClick={() => cancel()} 
                    text={strings.cancelText} 
                />
            </DialogFooter>
            <br></br>
            <br></br>
            <div>
                <div>
                    <label style={{fontSize:"16px"}}>Admin Settings</label>
                </div> 
                <div> 
                    {
                        (webURL === '') &&
                        <Spinner size={SpinnerSize.large} label="Loading"/>
                    }
                    {   (webURL !== '') &&
                        <div><Link href={webURL} target="_blank" underline> 
                            Go to admin settings
                        </Link>
                        <h3>{webURL}</h3></div>
                    }                                 
                </div>
            </div>
        </Panel>
    ) 
}
export default SettingsPanel