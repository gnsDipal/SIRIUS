import * as React from 'react'
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp, Web, PermissionKind, IItem, IFieldInfo } from '@pnp/sp/presets/all';
import { IItemAddResult } from "@pnp/sp/items";
import { IList } from "@pnp/sp/lists";
import { IAttachmentFileInfo } from "@pnp/sp/attachments";
import { graph } from "@pnp/graph";
import * as moment from 'moment';
import { Logger, LogLevel} from "@pnp/logging";
import {UserContext} from '../webparts/departmentalRequest/components/Main/Main';
import {AssignedTicketData, MyRequestedEachPlateData} from '../model/MyRequestedEachPlateData';
import { Dropdown, IDropdown, IDropdownOption, optionProperties, TextField, Tooltip } from 'office-ui-fabric-react';
import { IDispatcherList, reAssignedUser, fileElements } from '../model/IDispatcher';
import { MSGraphClient } from '@microsoft/sp-http';

export default class SPDispatcherService{
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