import * as React from 'react'
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
          let checkTeamCreated:any = await this.checkTeamCreatedBefore();
          // setTimeout(async()=>{
            if(checkTeamCreated === false){
              let creatingTeamOnSuccess = await this.createTeam();    
              let teamsId = await this.getTeams();
              let webLink = await this.getChannelId(teamsId);
               return await Promise.resolve(webLink);
             }
             if(checkTeamCreated === true){
               let teamsId = await this.getTeams();
               let webLink = await this.getwebLink(teamsId);
               return await Promise.resolve(webLink);
             }
          // },5000);
          // return await Promise.resolve('');
      }

public async checkTeamCreatedBefore():Promise<Boolean>{
    let teamPresentCheck:Boolean = false;
    await this.webContext.msGraphClientFactory
    .getClient()
    .then(async(client: MSGraphClient) => {        
     await client
      .api(`me/joinedTeams`)
      .version("beta")
      .get().then(async(res)=>{
        for(let i:number =0; i<res.value.length; ++i)
        {
          if(res.value[i].displayName === "DeptReqAdmin")
          {
            teamPresentCheck = true;
          }
        }
      //  return (teamPresentCheck);
    });
  });  
  return await Promise.resolve(teamPresentCheck);
    
 }

 public async checkTeamHandle(){
  await this.webContext.msGraphClientFactory
  .getClient()
  .then((client: MSGraphClient): void => {        
    client
      .api(`me/joinedTeams`)
      .version("beta")
      .get().then(async(res)=>{
        let teamPresentCheck:boolean = false;
        for(let i:number =0; i<res.value.length; ++i)
        {
          if(res.value[i].displayName === "DeptReqAdmin")
          {
            teamPresentCheck = true;
          }
        }
       return (teamPresentCheck);
       });
     }); 
 }

//  public async checkTeamCreatedBeforeBackUp():Promise<Boolean>{
//   let teamPresentCheck:Boolean = false;
//   await this.webContext.msGraphClientFactory
//    .getClient()
//    .then((client: MSGraphClient): void => {        
//      client
//        .api(`me/joinedTeams`)
//        .version("beta")
//        .get().then(async(res)=>{
//          for(let i:number =0; i<res.value.length; ++i)
//          {
//            if(res.value[i].displayName === "Test1DeptReqAdmin")
//            {
//               teamPresentCheck = true;
//            }
//          }
//         return await Promise.resolve(teamPresentCheck);
//         // res.map((r)=>{
//         //   if(r.value === "Test1DeptReqAdmin"){
//         //     teamPresentCheck = true;
//         //   }
//         // })
//         // return teamPresentCheck;
//         });
//       }); 
//       return await Promise.resolve(teamPresentCheck);
// }

 public async createTeam():Promise<Boolean>{ 
 try{
 let body: any = {      
     "template@odata.bind": "https://graph.microsoft.com/v1.0/teamsTemplates('standard')",
     "displayName": "DeptReqAdmin",
     "description": "The team for those in architecture design."       
 };
 
await this.webContext.msGraphClientFactory
   .getClient()
   .then(async(client: MSGraphClient) => {        
     await client
       .api(`teams`)
       .version("v1.0")
       .post(body).then(()=>{
        //  this.GetTeams();
       });
   });
   return await Promise.resolve(true);
}catch(error){
   return await Promise.reject(false);
}
}

public async getTeams():Promise<string>{
   let teamId = '';
   try{
   await this.webContext.msGraphClientFactory
      .getClient()
      .then(async(client: MSGraphClient) => {        
       await client
          .api(`me/joinedTeams`)
          .version("beta") 
          .get().then((res)=>{
            for(let i:number =0; i<res.value.length; ++i)
            {
              if(res.value[i].displayName === "DeptReqAdmin")
              {
                teamId = res.value[i].id;
              }
            }
            // if(teamId != ''){
            // this.GetChannelId(teamId);
            // }
        });
    }); 
     return await Promise.resolve(teamId);
     }catch(error){
     return await Promise.reject(error);
     }
}
public async getChannelId(teamId):Promise<string>{
    let webURL:string='';
   await this.webContext.msGraphClientFactory
      .getClient()
      .then(async(client: MSGraphClient) => {        
        await client
          .api(`teams/${teamId}/channels`)
          .version("beta")
          .get().then(async(res)=>{
            let channelId = await res.value[0].id;
            webURL = await res.value[0].webUrl;
            // this.setState({
            //     webURL:res.value[0].webUrl
            // })
            // tabLinkUrl = res.value[0].webUrl;
            await this.createTab1(teamId,channelId);
            await this.createTab2(teamId,channelId);
            await this.createTab3(teamId,channelId);
          });
      });
      return Promise.resolve(webURL)
}

public async getwebLink(teamId):Promise<string>{
  let webURL:string='';
 await this.webContext.msGraphClientFactory
    .getClient()
    .then(async(client: MSGraphClient) => {        
      await client
        .api(`teams/${teamId}/channels`)
        .version("beta")
        .get().then(async(res)=>{
          webURL = await res.value[0].webUrl;
        });
    });
    return await Promise.resolve(webURL)
}
  public async createTab1 (teamId,channelId){
    let contentURL = `${this.webContext.pageContext.web.absoluteUrl}/_layouts/15/groups.aspx`;
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
    let contentURL = `${this.webContext.pageContext.web.absoluteUrl}/Lists/Dept/AllItems.aspx`;
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
    let contentURL = `${this.webContext.pageContext.web.absoluteUrl}/Lists/DeptCateg/AllItems.aspx`;
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
      .then(async(client: MSGraphClient) => {        
        await client
          .api(`teams/${teamId}/channels/${channelId}/tabs`)
          .version("beta")
          .post(body).then(()=>{
            // console.log("Inside create tab");  
          });
      });
  }

}// End of Main Class