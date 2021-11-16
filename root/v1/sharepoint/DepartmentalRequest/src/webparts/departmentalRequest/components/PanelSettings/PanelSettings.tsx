import * as React from 'react';
import { Panel } from '@fluentui/react/lib/Panel';
import { Dropdown } from '@fluentui/react/lib/Dropdown';
import { TextField } from '@fluentui/react/lib/TextField';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import { DialogFooter } from '@fluentui/react/lib/Dialog';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { ISettingsPanelProps } from './ISettingsPanelProps';
import { MSGraphClientFactory } from "@microsoft/sp-http";
import { MSGraphClient } from '@microsoft/sp-http';
import { Link } from '@fluentui/react/lib/Link';
var tabLinkUrl:string='';

export interface ISettingsPanelState {
    webURL:string;
}

export default class SettingsPanel extends React.Component<ISettingsPanelProps,ISettingsPanelState>{
    public constructor(props:ISettingsPanelProps){
        super(props);
    }
    componentDidMount(){
        this.checkTeamCreatedBefore();
        // this.uriTest();
        this.state={
            webURL:''
        }
    }

    checkTeamCreatedBefore = async() =>{
       await this.props.webPartContext.msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient): void => {        
          client
            .api(`me/joinedTeams`)
            .version("beta")
            .get().then((res)=>{
              // console.log("Inside get teams");
              // console.log("res:" + res);
              let teamPresent:Boolean = false;
              for(let i:number =0; i<res.value.length; ++i)
              {
                if(res.value[i].displayName === "DepartmentalRequestAdmin")
                {
                  teamPresent = true;
                }
              }
              if(teamPresent === false){
                this.createTeam();
              }
              
            });
        }); 
    }

    createTeam = async() =>
  { 
    let body: any = {      
        "template@odata.bind": "https://graph.microsoft.com/v1.0/teamsTemplates('standard')",
        "displayName": "DepartmentalRequestAdmin",
        "description": "The team for those in architecture design."       
    };
    
   await this.props.webPartContext.msGraphClientFactory
      .getClient()
      .then((client: MSGraphClient): void => {        
        client
          .api(`teams`)
          .version("v1.0")
          .post(body).then(()=>{
            // console.log("Inside post");
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
            // console.log("Inside get teams");
            // console.log("res:" + res);
            let teamId = '';
            for(let i:number =0; i<res.value.length; ++i)
            {
              if(res.value[i].displayName === "DepartmentalRequestAdmin")
              {
                teamId = res.value[i].id;
              }
            }
            if(teamId != ''){
            this.GetChannelId(teamId);
            }
          });
      }); 
  }

  GetChannelId = async(teamId) =>
  {
   await this.props.webPartContext.msGraphClientFactory
      .getClient()
      .then((client: MSGraphClient): void => {        
        client
          .api(`teams/${teamId}/channels`)
          .version("beta")
          .get().then((res)=>{
            // console.log("Inside get channels");
            // console.log("res:" + res);
            let channelId = res.value[0].id;
            this.setState({
                webURL:res.value[0].webUrl
            })
            // tabLinkUrl = res.value[0].webUrl;
            this.createTab1(teamId,channelId);
            this.createTab2(teamId,channelId);
            this.createTab3(teamId,channelId);
          });
      });
  }

  createTabGeneralPost = async(teamId,channelId,body) =>{
    await this.props.webPartContext.msGraphClientFactory
    .getClient()
      .then((client: MSGraphClient): void => {        
        client
          .api(`teams/${teamId}/channels/${channelId}/tabs`)
          .version("beta")
          .post(body).then(()=>{
            // console.log("Inside create tab");  
          });
      });
  }

  createTab1 = async(teamId,channelId) =>
  {
    let contentURL = `${this.props.webPartContext.pageContext.web.absoluteUrl}/_layouts/15/groups.aspx`
    let body: any = {      
      "displayName": "PeopleAndGroup",
      "teamsAppId": null,
      "teamsApp@odata.bind": "https://graph.microsoft.com/beta/appCatalogs/teamsApps/2a527703-1f6f-4559-a332-d8a7d288cd88",
      "configuration": {
          "entityId": null,
          "contentUrl": contentURL,
          "removeUrl": null,
          "websiteUrl": null
        }       
    };

    this.createTabGeneralPost(teamId,channelId,body);
    
  } 

  createTab2 = async(teamId,channelId) =>
  {
    let contentURL = `${this.props.webPartContext.pageContext.web.absoluteUrl}/Lists/Dept/AllItems.aspx`
    let body: any = {      
      "displayName": "Dept",
      "teamsAppId": null,
      "teamsApp@odata.bind": "https://graph.microsoft.com/beta/appCatalogs/teamsApps/2a527703-1f6f-4559-a332-d8a7d288cd88",
      "configuration": {
          "entityId": null,
          "contentUrl": contentURL,
          "removeUrl": null,
          "websiteUrl": null
        }       
    };

    this.createTabGeneralPost(teamId,channelId,body);
    
  } 


  createTab3 = async(teamId,channelId) =>
  {
    let contentURL = `${this.props.webPartContext.pageContext.web.absoluteUrl}/Lists/DeptCateg/AllItems.aspx`
    let body: any = {      
      "displayName": "DeptCateg",
      "teamsAppId": null,
      "teamsApp@odata.bind": "https://graph.microsoft.com/beta/appCatalogs/teamsApps/2a527703-1f6f-4559-a332-d8a7d288cd88",
      "configuration": {
          "entityId": null,
          "contentUrl": contentURL,
          "removeUrl": null,
          "websiteUrl": null
        }       
    };

    this.createTabGeneralPost(teamId,channelId,body);
    
  }

    cancel = () =>{
        this.props.onClosePanel();
        this.props.webPartContext.sdks.microsoftTeams.context.userTeamRole
    }

    // uriTest = () => {
    //      url = encodeURI(`https://teams.microsoft.com/l/entity/9c81173a-1b57-4a3c-9b5e-0a97015460f6/${this.props.webPartContext.sdks.microsoftTeams.context.entityId}?context={"subEntityId": null,"channelId":${this.props.webPartContext.sdks.microsoftTeams.context.channelId},"groupId":${this.props.webPartContext.sdks.microsoftTeams.context.groupId},"tenantId":${this.props.webPartContext.sdks.microsoftTeams.context.teamId}}`)
    // }

    

    public render(): React.ReactElement<{}> {
        return (        
            <Panel
            headerText="Departmental Request Web Part Settings"
            isOpen={true}
            onDismiss={() => this.cancel()}        
            >  
                           
                {/* <Link href={this.state.webURL} underline>Go to admin settings
                </Link> */}
               
            </Panel>
        )
    } 

}