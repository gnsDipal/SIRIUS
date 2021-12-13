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

public async checkTeamCreatedBefore(){
    await this.webContext.msGraphClientFactory
     .getClient()
     .then((client: MSGraphClient): void => {        
       client
         .api(`me/joinedTeams`)
         .version("beta")
         .get().then((res)=>{
           let teamPresent:Boolean = false;
           for(let i:number =0; i<res.value.length; ++i)
           {
             if(res.value[i].displayName === "TestDepartmentalRequestAdmin")
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
}
}