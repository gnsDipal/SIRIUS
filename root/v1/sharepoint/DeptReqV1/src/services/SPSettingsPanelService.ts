import * as React from 'react';
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp, Web } from '@pnp/sp/presets/all';
import { Logger, LogLevel} from "@pnp/logging";
import {UserContext} from '../webparts/departmentalRequest/components/Main/Main';
import { MSGraphClient } from '@microsoft/sp-http';

export default class SPSettingsPanelService{
    private webContext = null;
    private webUrl:string = null;
    private loggedInUserId?:string = null;
    private loggedInUserEmail?:string = "";
    private loggedInUserName?:string = "";
    private web = null;
    constructor(private context) {  
        this.webContext = context; 
      this.onInit();
    }
    private async onInit() {
        Logger.write("SPDepartmentalService init()", LogLevel.Info);
        this.webUrl = this.webContext.pageContext.web.absoluteUrl;
        this.loggedInUserId = this.webContext.pageContext.legacyPageContext["userId"];
        this.loggedInUserEmail = this.webContext.pageContext.user.email;
        this.loggedInUserName = this.webContext.pageContext.user.displayName;
        this.web = Web(this.webUrl);
      }

      public async newTeam():Promise<string>{
          let checkTeamCreated = await this.checkTeamCreatedBefore();
          if(checkTeamCreated === false){
           let creatingTeamOnSuccess = await this.createTeam();    
           let teamsId = await this.getTeams();
           let webLink = await this.getChannelId(teamsId);
            return Promise.resolve(webLink);
          }
          if(checkTeamCreated === true){
              return Promise.resolve('');
          }

      }

public async checkTeamCreatedBefore():Promise<Boolean>{
    let teamPresentCheck:Boolean = false;
    await this.webContext.msGraphClientFactory
     .getClient()
     .then((client: MSGraphClient): void => {        
       client
         .api(`me/joinedTeams`)
         .version("beta")
         .get().then((res)=>{
           for(let i:number =0; i<res.value.length; ++i)
           {
             if(res.value[i].displayName === "TestDepartmentalRequestAdmin")
             {
                teamPresentCheck = true;
             }
           }
         });
     }); 
     return Promise.resolve(teamPresentCheck);
 }

 public async createTeam():Promise<Boolean>{ 
 try{
 let body: any = {      
     "template@odata.bind": "https://graph.microsoft.com/v1.0/teamsTemplates('standard')",
     "displayName": "TestDepartmentalRequestAdmin",
     "description": "The team for those in architecture design."       
 };
 
await this.webContext.msGraphClientFactory
   .getClient()
   .then((client: MSGraphClient): void => {        
     client
       .api(`teams`)
       .version("v1.0")
       .post(body).then(()=>{
        //  this.GetTeams();
       });
   });
   return Promise.resolve(true);
}catch(error){
    Promise.reject(false);
}
}

public async getTeams():Promise<string>{
   let teamId = '';
   try{
   await this.webContext.msGraphClientFactory
      .getClient()
      .then((client: MSGraphClient): void => {        
        client
          .api(`me/joinedTeams`)
          .version("beta")
          .get().then((res)=>{
            for(let i:number =0; i<res.value.length; ++i)
            {
              if(res.value[i].displayName === "DepartmentalRequestAdmin")
              {
                teamId = res.value[i].id;
              }
            }
            // if(teamId != ''){
            // this.GetChannelId(teamId);
            // }
        });
    }); 
     return Promise.resolve(teamId);
     }catch(error){
     return Promise.reject(teamId);
     }
}
public async getChannelId(teamId):Promise<string>{
    let webURL:string='';
   await this.webContext.msGraphClientFactory
      .getClient()
      .then((client: MSGraphClient): void => {        
        client
          .api(`teams/${teamId}/channels`)
          .version("beta")
          .get().then((res)=>{
            let channelId = res.value[0].id;
            webURL = res.value[0].webUrl;
            // this.setState({
            //     webURL:res.value[0].webUrl
            // })
            // tabLinkUrl = res.value[0].webUrl;
            this.createTab1(teamId,channelId);
            this.createTab2(teamId,channelId);
            this.createTab3(teamId,channelId);
          });
      });
      return Promise.resolve(webURL)
  }
  public async createTab1 (teamId,channelId){
    let contentURL = `${this.webContext.pageContext.web.absoluteUrl}/_layouts/15/groups.aspx`
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
    await this.createTabGeneralPost(teamId,channelId,body);
  } 

  public async createTab2(teamId,channelId){
    let contentURL = `${this.webContext.pageContext.web.absoluteUrl}/Lists/Dept/AllItems.aspx`
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
    await this.createTabGeneralPost(teamId,channelId,body);
  } 


  public async createTab3(teamId,channelId){
    let contentURL = `${this.webContext.pageContext.web.absoluteUrl}/Lists/DeptCateg/AllItems.aspx`
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
    await this.createTabGeneralPost(teamId,channelId,body); 
  }

  public async createTabGeneralPost(teamId,channelId,body){
    await this.webContext.msGraphClientFactory
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

}// End of Main Class