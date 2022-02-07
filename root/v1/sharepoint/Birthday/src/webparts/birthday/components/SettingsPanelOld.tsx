import * as React from 'react';
import { Panel } from '@fluentui/react/lib/Panel';
import { Dropdown } from '@fluentui/react/lib/Dropdown';
import { TextField } from '@fluentui/react/lib/TextField';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import { DialogFooter } from '@fluentui/react/lib/Dialog';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { ISettingsPanelProps } from './ISettingsPanelPropsOld';
import { Toggle } from '@fluentui/react/lib/Toggle';
import styles from './Birthday.module.scss';
import { Link } from '@fluentui/react/lib/Link';
import { MSGraphClient } from '@microsoft/sp-http';

export interface ISettingsPanelstate {
  dropdown: string;
  externalAPI: string;
  IsTeamsIcon: boolean;
  errorMessage: string;
  webURL: string;
}

let teamExist: boolean = false;
const headers: HeadersInit = new Headers();
headers.append("accept", "application/json;odata.metadata=none");

export default class SettingsPanel extends React.Component<ISettingsPanelProps, ISettingsPanelstate> {
 
  public constructor(props: ISettingsPanelProps) {
    super(props);
    this.state = ({
      dropdown: '',
      externalAPI: '',
      IsTeamsIcon: false ,
      errorMessage:'',
      webURL: ''           
    });
  }

  componentDidMount()
  {
    this.checkIfTeamExist();
    this.GetupdateDataSource();
  }

  //create team tab for admin to do the initial level settings
  checkIfTeamExist = async() =>
  {
    await this.props.webPartContext.msGraphClientFactory
      .getClient()
      .then((client: MSGraphClient): void => {        
        client
          .api(`me/joinedTeams`)
          .version("beta")
          .get().then((res)=>{
            
            for(let i:number =0; i<res.value.length; ++i)
            {
              if(res.value[i].displayName === "Birthday/Anniversary Admin")
              {
                teamExist = true;
              }
            }
            if(teamExist === false)
              this.createTeam();
            else
              this.GetTeams();
          });
      });  
  }

  createTeam = async() =>
  {
    let body: any = {      
        "template@odata.bind": "https://graph.microsoft.com/v1.0/teamsTemplates('standard')",
        "displayName": "Birthday/Anniversary Admin",
        "description": "The team for those in architecture design."       
    };
    
    await this.props.webPartContext.msGraphClientFactory
      .getClient()
      .then((client: MSGraphClient): void => {        
        client
          .api(`teams`)
          .version("v1.0")
          .post(body).then(()=>{
            this.GetTeams();
          });
      });
  }

  GetTeams = async() =>
  {
    await this.props.webPartContext.msGraphClientFactory
      .getClient()
      .then((client: MSGraphClient): void => {        
        client
          .api(`me/joinedTeams`)
          .version("beta")
          .get().then((res)=>{
            let teamId: string = "";
            for(let i:number =0; i<res.value.length; ++i)
            {
              if(res.value[i].displayName === "Birthday/Anniversary Admin")
              {
                teamId = res.value[i].id;
              }
            }
            if(teamId !== "")
              this.GetChannelId(teamId);
          });
      }); 
  }

  GetChannelId = async(teamId: string) =>
  {
    await this.props.webPartContext.msGraphClientFactory
      .getClient()
      .then((client: MSGraphClient): void => {        
        client
          .api(`teams/${teamId}/channels`)
          .version("beta")
          .get().then((res)=>{
            this.setState({
              webURL:res.value[0].webUrl
            });            
            //console.log("web url: " + webURL);
            let channelId = res.value[0].id; 
            if(teamExist === false)
            {
              this.createImagesTab(teamId,channelId);
              this.createUsersTab(teamId,channelId);
            }
          });
      });
  }

  private createImagesTab(teamId: string, channelId: string)
  {
    let contentURL = `${this.props.webPartContext.pageContext.web.absoluteUrl}/BirthdayAnniversaryImages/Forms/Thumbnails.aspx`
    let body: any = {      
      "displayName": "BirthdayAnniversaryImages",
      "teamsAppId": null,
      "teamsApp@odata.bind": "https://graph.microsoft.com/beta/appCatalogs/teamsApps/2a527703-1f6f-4559-a332-d8a7d288cd88",
      "configuration": {
          "entityId": null,
          "contentUrl": contentURL,
          "removeUrl": null,
          "websiteUrl": null
        }       
    };
    this.createTab(teamId, channelId, body);
  }

  private createUsersTab(teamId: string, channelId: string)
  {
    let contentURL = `${this.props.webPartContext.pageContext.web.absoluteUrl}/Lists/UserBirthAnniversaryDetails/AllItems.aspx`
    let body: any = {      
      "displayName": "UserBirthAnniversaryDetails",
      "teamsAppId": null,
      "teamsApp@odata.bind": "https://graph.microsoft.com/beta/appCatalogs/teamsApps/2a527703-1f6f-4559-a332-d8a7d288cd88",
      "configuration": {
          "entityId": null,
          "contentUrl": contentURL,
          "removeUrl": null,
          "websiteUrl": null
        }       
    }; 
    this.createTab(teamId, channelId, body);
  }

  createTab = async(teamId: string, channelId: string, body: string) =>
  {
    await this.props.webPartContext.msGraphClientFactory
    .getClient()
      .then((client: MSGraphClient): void => {        
        client
          .api(`teams/${teamId}/channels/${channelId}/tabs`)
          .version("beta")
          .post(body).then(()=>{            
          });
      });
  }

  GetupdateDataSource()
  {
    this.props.webPartContext.spHttpClient        
    .get(`${this.props.webPartContext.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('ConfigurationSettings')/items?$filter=Key eq 'Birthday'`, SPHttpClient.configurations.v1, {
      headers: headers
    })
    .then((result: SPHttpClientResponse) => {          
      return result.json();
    })
    .then((jsonresult): void => {
      console.log(jsonresult);
      if(jsonresult.value.length > 0)
      {
        let start: number = jsonresult.value[0].Settings.indexOf(":");        
        let end: number = jsonresult.value[0].Settings.indexOf("}");
        let teamsDataSource = jsonresult.value[0].Settings.substring(start + 2, end - 1);
        this.setState({
          dropdown:teamsDataSource,
          externalAPI: jsonresult.value[0].ExternalAPI,
          IsTeamsIcon: jsonresult.value[0].IsTeamsIcon
        });
      }         
    }, (error: any): void => {      
      console.log(error);
    })
    .catch((error: any): void => {    
      console.log(error);
    }); 
  }

  private save()
  {
    this.props.webPartContext.spHttpClient       
    .get(`${this.props.webPartContext.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('ConfigurationSettings')/items?$filter=Key eq 'Birthday'`, SPHttpClient.configurations.v1, {
      headers: headers
    })
    .then((result: SPHttpClientResponse) => {          
      return result.json();
    })
    .then((jsonresult): void => {
      console.log(jsonresult);      
      if(jsonresult.value.length > 0)
      {
        this.updateItemInList(jsonresult.value[0].ID);
        if(this.state.errorMessage === "")
          this.props.onClosePanel();
      } 
      else      
      {
        this.createItemInList();
        if(this.state.errorMessage === "")
          this.props.onClosePanel();
      }
    }, (error: any): void => {      
      console.log(error);
    })
    .catch((error: any): void => {    
      console.log(error);
    });    
  }

  private updateItemInList(ItemID)
  {
    if(this.state.dropdown === "API" && (this.state.externalAPI === undefined || this.state.externalAPI === ""))
    {
      this.setState({
        errorMessage: 'Provide an external API URL.'
      })
    }
    else
    {
      let settings: string = '{"DataSource":"' + this.state.dropdown + '"}';
      let JsonData: string;
      if(this.state.dropdown === "API")
      {
        JsonData = JSON.stringify({      
          'Settings': settings,
          'ExternalAPI': this.state.externalAPI,
          'IsTeamsIcon': this.state.IsTeamsIcon  
        });
      }
      else
      {
        JsonData = JSON.stringify({      
          'Settings': settings,
          'ExternalAPI': "",
          'IsTeamsIcon': false 
        });
      }
      this.props.webPartContext.spHttpClient.post(`${this.props.webPartContext.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('ConfigurationSettings')/items(${ItemID})`, SPHttpClient.configurations.v1,  
      {  
        headers: {  
        'Accept': 'application/json;odata=nometadata',  
        'Content-type': 'application/json;odata=nometadata',  
        'odata-version': '',
        'IF-MATCH': '*',
        'X-HTTP-Method': 'MERGE' 
        },  
        body: JsonData  
      }) 
      .then((response: SPHttpClientResponse): Promise<void> => {  
          return response.json();  
      })  
      .then((item: any): void => {  
          console.log('Item has been updated.');
          //this.props.onClosePanel();
      }, (error: any): void => {  
          console.log('Error while updating an item: ' + error);
      });
    } 
  }

  private createItemInList()
  {
    if(this.state.dropdown === "API" && (this.state.externalAPI === undefined || this.state.externalAPI === ""))
    {
      this.setState({
        errorMessage: 'Provide an external API URL.'
      })
    }
    else
    {
      let settings: string = '{"DataSource":"' + this.state.dropdown + '"}';
      const JsonData: string = JSON.stringify({
        'Title': 'Birthday webpart settings',
        'Key': 'Birthday',
        'Settings': settings,
        'ExternalAPI': this.state.externalAPI,
        'IsTeamsIcon': this.state.IsTeamsIcon     
        });
      this.props.webPartContext.spHttpClient.post(`${this.props.webPartContext.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('ConfigurationSettings')/items`, SPHttpClient.configurations.v1,  
      {  
        headers: {  
        'Accept': 'application/json;odata=nometadata',  
        'Content-type': 'application/json;odata=nometadata',  
        'odata-version': ''  
        },  
        body: JsonData  
      }) 
      .then((response: SPHttpClientResponse): Promise<void> => {  
          return response.json();  
      })  
      .then((item: any): void => {  
          console.log('Item has been created.');
          //this.props.onClosePanel();
      }, (error: any): void => {  
          console.log('Error while creating the item: ' + error);
      }); 
    }
  }

  private cancel()
  {
    this.props.onClosePanel();
  }

  private setDataSource(datasource)
  {
    this.setState({
      dropdown: datasource
    });
  }

  private downloadCsv()
  {   
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
  }

  private UploadCSV(file)
  {
    let uploadedFileName = file.name;
    let fileExtension = uploadedFileName.split('.').pop();
    if(uploadedFileName === "UserBirthAnniversaryDetails.csv")
    {
      this.setState({
        errorMessage: ''
      })
      if(file)
      {
        const reader = new FileReader();        
        reader.onload = async (e) => {           
          const text = reader.result;
          const dataArray = this.csvToArray(text);
          
          this.exportDataToList(dataArray);
        }
        reader.readAsText(file);               
      }
    }
    else
    {
      this.setState({
        errorMessage: 'Wrong file uploaded. Please select UserBirthAnniversaryDetails.csv file.'
      })
    }
  }

  private csvToArray(str, delimiter = ",")
  {
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
  }

  private exportDataToList(UserList: any)
  {
    for(let i:number = 0; i<UserList.length; ++i)
    {
      if(UserList[i] !== undefined)
      {
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
          this.addListItems(requestlistItem);
      }  
    }
  }

  private addListItems(JsonData: string)
  {
    this.props.webPartContext.spHttpClient.post(`${this.props.webPartContext.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('UserBirthAnniversaryDetails')/items`, SPHttpClient.configurations.v1,  
    {  
      headers: {  
      'Accept': 'application/json;odata=nometadata',  
      'Content-type': 'application/json;odata=nometadata',  
      'odata-version': ''  
      },  
      body: JsonData  
    }) 
    .then((response: SPHttpClientResponse): Promise<void> => {  
        return response.json();  
    })  
    .then((item: any): void => {  
        console.log('Item has been created.');        
    }, (error: any): void => {  
        console.log('Error while creating the item: ' + error);
    }); 

  }

  handleChange = async(URL: string) =>
  {
    await this.setState({
      externalAPI: URL,
      errorMessage: ""
    })  
  }

  _onChange = async(ev: React.MouseEvent<HTMLElement>, checked?: boolean) =>
  {
    await this.setState({
      IsTeamsIcon: checked
    })
  }

  public render(): React.ReactElement<ISettingsPanelProps> {
    return (        
        <Panel
        headerText="Birthday"
        isOpen={true}
        onDismiss={() => this.cancel()}        
        >  
        <br></br>
          <label style={{fontSize:"16px"}}>Birthday/Anniversary Web Part Settings</label>
          <br></br>
          <br></br>
          <Dropdown 
            label="Select the source from where data to be fetched for users"
            options={[
            { key: 'Azure', text: 'From Azure active directory' },
            { key: 'Internal', text: 'Internal list from SharePoint' },
            { key: 'API', text: 'APIs OR Webservice' }
            ]}
            defaultSelectedKey= {this.state.dropdown ? this.state.dropdown : 'Azure'}
            onChange={(e, v) => {this.setDataSource(v.key);}} 
          />
          <br></br>
          { this.state.dropdown === 'Internal' && (
            <div>
              <div>
                <PrimaryButton
                  onClick={this.downloadCsv}
                  text="Download csv template"            
                />
              </div>
              <br></br>
              <div>
                <input
                  type="file"
                  name="Upload Csv file"
                  onChange={(e) => this.UploadCSV(e.target.files[0])}
                />
              </div>
              <div style={{color:'#d9534f'}}>{this.state.errorMessage}</div>
            </div>
          )}
          { this.state.dropdown === 'API' && (
            <div>
              <div>
                <TextField label="Enter API/Webservice URL" onChange={e => this.handleChange(e.currentTarget.value)} value={this.state.externalAPI}></TextField>
              </div>
              <br></br>
              <div>
                <Toggle label="Show Teams Icon" onText="On" offText="Off" onChange={this._onChange} defaultChecked={this.state.IsTeamsIcon}/>
              </div>
              <div style={{color:'#d9534f'}}>{this.state.errorMessage}</div>
            </div>
          )}
  
          <DialogFooter>
            <PrimaryButton
              onClick={() => this.save()}
              text="Save"            
            />
            <DefaultButton 
              onClick={() => this.cancel()} 
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
              
                <Link href={this.state.webURL} target="_blank" underline>
                  Go to admin settings
                </Link>          
              
            </div>
          </div>
        </Panel>      
    );  
  }
}