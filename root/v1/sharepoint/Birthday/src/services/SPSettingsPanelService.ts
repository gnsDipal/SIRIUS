import * as React from 'react';
import { SPHttpClient, SPHttpClientResponse, MSGraphClient } from '@microsoft/sp-http';
import * as strings from 'BirthdayWebPartStrings';

export default class SPSettingsPanelService{
    private mainProps = null;
    private webUrl:string = null;

    constructor(private mainProp) {        
        this.mainProps = this.mainProp;
        this.onInit();
    }

    private async onInit() 
    {
        this.webUrl = this.mainProps.webPartContext.pageContext.web.absoluteUrl;        
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
        await this.mainProps.webPartContext.msGraphClientFactory.getClient()
            .then(async(client: MSGraphClient) => {        
            await client.api(`me/joinedTeams`).version("beta").get()
                .then(async(res)=>{
                for(let i:number =0; i<res.value.length; ++i){
                if(res.value[i].displayName === strings.teamName)
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
                "displayName": strings.teamName,
                "description": "The team for admin to do the initial settings for Birthday/Anniversary webpart."       
            };

            await this.mainProps.webPartContext.msGraphClientFactory.getClient()
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
            await this.mainProps.webPartContext.msGraphClientFactory.getClient()
                .then(async(client: MSGraphClient) => {        
                await client.api(`me/joinedTeams`).version("beta").get()
                    .then((res)=>{
                        for(let i:number =0; i<res.value.length; ++i){
                            if(res.value[i].displayName === strings.teamName)
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
    public async getChannelId(teamId: string):Promise<string>
    {
        let webURL:string = '';
        await this.mainProps.webPartContext.msGraphClientFactory.getClient()
            .then(async(client: MSGraphClient) => {        
            await client.api(`teams/${teamId}/channels`).version("v1.0").get()
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
    public async getwebLink(teamId: string):Promise<string>
    {
        let webURL:string='';
        await this.mainProps.webPartContext.msGraphClientFactory.getClient()
            .then(async(client: MSGraphClient) => {        
                 await client.api(`teams/${teamId}/channels`).version("v1.0").get()
                .then(async(res)=>{
                    webURL = await res.value[0].webUrl;
                });
            });
            return await Promise.resolve(webURL);
    }   

    //create the tab for birthday and anniversary images list
    public async createImagesTab(teamId: string, channelId: string)
    {
        let contentURL = `${this.webUrl}/${this.mainProps.ImagesListName}/Forms/Thumbnails.aspx`
        let body: any = {      
            "displayName": this.mainProps.ImagesListName,
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
        let contentURL = `${this.webUrl}/Lists/${this.mainProps.UsersListName}/AllItems.aspx`
        let body: any = {      
        "displayName": this.mainProps.UsersListName,
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
        await this.mainProps.webPartContext.msGraphClientFactory.getClient()
            .then(async(client: MSGraphClient) => {        
            await client.api(`teams/${teamId}/channels/${channelId}/tabs`).version("beta").post(body)
                .then(()=>{  
                });
            });
    } 
    
    public async updateTeamsConfigurationToList(JsonData: string, ItemID: number)
    {
        this.mainProps.webPartContext.spHttpClient.post(`${this.webUrl}/_api/web/lists/getbytitle('${this.mainProps.ConfigListName}')/items(${ItemID})`, SPHttpClient.configurations.v1,  
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
        }, (error: any): void => {  
            console.log('Error while updating an item: ' + error);
        });
        
    }

    public async insertTeamsConfigurationToList(JsonData: string)
    {
        this.mainProps.webPartContext.spHttpClient.post(`${this.webUrl}/_api/web/lists/getbytitle('${this.mainProps.ConfigListName}')/items`, SPHttpClient.configurations.v1,  
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
}//End Of Main Function