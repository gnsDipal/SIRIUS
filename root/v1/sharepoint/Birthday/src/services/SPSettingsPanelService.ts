import * as React from 'react';
import { MSGraphClient } from '@microsoft/sp-http';

debugger;
export default class SPBirthdayAnniversaryService{
    private webContext = null;
    private webUrl:string = null;

    constructor(private context) {        
        this.webContext = context;       
        this.onInit();
    }

    private async onInit() 
    {
        this.webUrl = this.webContext.pageContext.web.absoluteUrl;        
    }

    public async newTeam():Promise<string>
    {
        let checkTeamCreated:any = await this.checkTeamCreatedBefore();
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
    }

    //Check if the team we are creating is already exist
    public async checkTeamCreatedBefore():Promise<Boolean>
    {
        let teamPresentCheck:Boolean = false;
        await this.webContext.msGraphClientFactory.getClient()
            .then(async(client: MSGraphClient) => {        
            await client.api(`me/joinedTeams`).version("beta").get()
                .then(async(res)=>{
                for(let i:number =0; i<res.value.length; ++i){
                if(res.value[i].displayName === "DeptReqAdmin")
                    teamPresentCheck = true;
                }
            });
        });  
        return await Promise.resolve(teamPresentCheck);    
    }
    
    //Create team for admin settings
    public async createTeam():Promise<Boolean>
    {
        try{
            let body: any = {      
                "template@odata.bind": "https://graph.microsoft.com/v1.0/teamsTemplates('standard')",
                "displayName": "Birthday/Anniversary Admin",
                "description": "The team for admin to do the initial settings for Birthday/Anniversary webpart."       
            };

            await this.webContext.msGraphClientFactory.getClient()
                .then(async(client: MSGraphClient) => {        
                await client.api(`teams`).version("v1.0").post(body)
                    .then(()=>{
                    });
                });
                return await Promise.resolve(true);
        }catch(error){
            return await Promise.reject(false);
        }        
    }

    //Get the created team Id for further process
    public async getTeams():Promise<string>
    {
        let teamId = '';
        try{
            await this.webContext.msGraphClientFactory.getClient()
                .then(async(client: MSGraphClient) => {        
                await client.api(`me/joinedTeams`).version("beta").get()
                    .then((res)=>{
                        for(let i:number =0; i<res.value.length; ++i){
                            if(res.value[i].displayName === "Birthday/Anniversary Admin")
                                teamId = res.value[i].id;
                        }
                    });
                }); 
                return await Promise.resolve(teamId);
        }catch(error){
            return await Promise.reject(error);
        }
    }

    //Get the channel Id required to create the tabs
    public async getChannelId(teamId):Promise<string>
    {
        let webURL:string='';
        await this.webContext.msGraphClientFactory.getClient()
            .then(async(client: MSGraphClient) => {        
            await client.api(`teams/${teamId}/channels`).version("beta").get()
                .then(async(res)=>{
                    let channelId = await res.value[0].id;
                    webURL = await res.value[0].webUrl;
                    await this.createImagesTab(teamId,channelId);
                    await this.createUsersTab(teamId,channelId);
                });
            });
            return Promise.resolve(webURL)
    }
     
    //Get the link for the team to redirect admin for settings
    public async getwebLink(teamId):Promise<string>
    {
        let webURL:string='';
        await this.webContext.msGraphClientFactory.getClient()
            .then(async(client: MSGraphClient) => {        
            await client.api(`teams/${teamId}/channels`).version("beta").get()
                .then(async(res)=>{
                    webURL = await res.value[0].webUrl;
                });
            });
            return await Promise.resolve(webURL);
    }   

    //create the tab for birthday and anniversary images list
    public async createImagesTab(teamId: string, channelId: string)
    {
        let contentURL = `${this.webUrl}/BirthdayAnniversaryImages/Forms/Thumbnails.aspx`
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
        await this.createTab(teamId, channelId, body);
    }

    //create the tab for birthday and anniversary user list
    public async createUsersTab(teamId: string, channelId: string)
    {
        let contentURL = `${this.webUrl}/Lists/UserBirthAnniversaryDetails/AllItems.aspx`
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
        await this.createTab(teamId, channelId, body);
    }

    public async createTab(teamId: string, channelId: string, body: string)
    {            
        await this.webContext.msGraphClientFactory.getClient()
            .then(async(client: MSGraphClient) => {        
            await client.api(`teams/${teamId}/channels/${channelId}/tabs`).version("beta").post(body)
                .then(()=>{  
                });
            });
    }    
}//End Of Main Class