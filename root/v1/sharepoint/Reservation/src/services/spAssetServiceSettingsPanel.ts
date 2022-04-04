import { MSGraphClient } from '@microsoft/sp-http';
// debugger;

// Class Services
export default class spAssetServiceSettingsPanel {
    private mainprop = null;
    private webUrl:string = null;
    
    constructor(private props) { 
        this.mainprop = this.props;
        this.onInit();
    }

    private async onInit() {
      this.webUrl = this.mainprop.WebPartContext.pageContext.web.absoluteUrl;
    }

    public async newTeam():Promise<string>{
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
    };

    public async checkTeamCreatedBefore():Promise<Boolean>{
        let teamPresentCheck:Boolean = false;
        await this.mainprop.WebPartContext.msGraphClientFactory
        .getClient()
        .then(async(client: MSGraphClient) => {        
         await client
          .api(`me/joinedTeams`)
          .version("beta")
          .get().then(async(res)=>{
            for(let i:number =0; i<res.value.length; ++i)
            {
              if(res.value[i].displayName === "Sirius_AssetReservationAdmin")
              {
                teamPresentCheck = true;
              }
            }
        });
      });  
      return await Promise.resolve(teamPresentCheck);
     };
   
     public async checkTeamHandle(){
      await this.mainprop.WebPartContext.msGraphClientFactory
      .getClient()
      .then((client: MSGraphClient): void => {        
        client
          .api(`me/joinedTeams`)
          .version("beta")
          .get().then(async(res)=>{
            let teamPresentCheck:boolean = false;
            for(let i:number =0; i<res.value.length; ++i)
            {
              if(res.value[i].displayName === "Sirius_AssetReservationAdmin")
              {
                teamPresentCheck = true;
              }
            }
           return (teamPresentCheck);
           });
         }); 
     };
   
     public async createTeam():Promise<Boolean>{ 
     try{
     let body: any = {      
         "template@odata.bind": "https://graph.microsoft.com/v1.0/teamsTemplates('standard')",
         "displayName": "Sirius_AssetReservationAdmin",
         "description": "The team for admin to do the initial settings for Asset Reservation webpart."       
     };

    await this.mainprop.WebPartContext.msGraphClientFactory
       .getClient()
       .then(async(client: MSGraphClient) => {        
         await client
           .api(`teams`)
           .version("v1.0")
           .post(body).then(()=>{
           });
       });
       return await Promise.resolve(true);
    }catch(error){
       return await Promise.reject(false);
    }
    };

    public async getTeams():Promise<string>{
       let teamId = '';
       try{
       await this.mainprop.WebPartContext.msGraphClientFactory
          .getClient()
          .then(async(client: MSGraphClient) => {        
           await client
              .api(`me/joinedTeams`)
              .version("beta") 
              .get().then((res)=>{
                for(let i:number =0; i<res.value.length; ++i)
                {
                  if(res.value[i].displayName === "Sirius_AssetReservationAdmin")
                  {
                    teamId = res.value[i].id;
                  }
                }
            });
        }); 
         return await Promise.resolve(teamId);
         }catch(error){
         return await Promise.reject(error);
         }
    };
    public async getChannelId(teamId):Promise<string>{
        let webURL:string='';
       await this.mainprop.WebPartContext.msGraphClientFactory
          .getClient()
          .then(async(client: MSGraphClient) => {        
            await client
              .api(`teams/${teamId}/channels`)
              .version("beta")
              .get().then(async(res)=>{
                let channelId = await res.value[0].id;
                webURL = await res.value[0].webUrl;
                await this.createTab1(teamId,channelId);
                await this.createTab2(teamId,channelId);
                await this.createTab3(teamId,channelId);
                await this.createTab4(teamId,channelId);
                await this.createTab5(teamId,channelId);
              });
          });
          return Promise.resolve(webURL)
    };

    public async getwebLink(teamId):Promise<string>{
      let webURL:string='';
     await this.mainprop.WebPartContext.msGraphClientFactory
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
    };
      public async createTab1 (teamId,channelId){
        let contentURL = `${this.mainprop.WebPartContext.pageContext.web.absoluteUrl}/Lists/${this.mainprop.locationListName}/AllItems.aspx`;
        let body: any = {      
          "displayName": this.mainprop.locationListName,
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
      }; 
    
      public async createTab2(teamId,channelId){
        let contentURL = `${this.mainprop.WebPartContext.pageContext.web.absoluteUrl}/Lists/${this.mainprop.areaListName}/AllItems.aspx`;
        let body: any = {      
          "displayName": this.mainprop.areaListName,
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
      };
         
      public async createTab3(teamId,channelId){
        let contentURL = `${this.mainprop.WebPartContext.pageContext.web.absoluteUrl}/Lists/${this.mainprop.categoryListName}/AllItems.aspx`;
        let body: any = {      
          "displayName": this.mainprop.categoryListName,
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
      };
    
      public async createTab4(teamId,channelId){
        let contentURL = `${this.mainprop.WebPartContext.pageContext.web.absoluteUrl}/Lists/${this.mainprop.masterListName}/AllItems.aspx`;
        let body: any = {      
          "displayName": this.mainprop.masterListName,
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
      };

      public async createTab5(teamId,channelId){
        let contentURL = `${this.mainprop.WebPartContext.pageContext.web.absoluteUrl}/Lists/${this.mainprop.calendarListName}/calendar.aspx`;
        let body: any = {      
          "displayName": this.mainprop.calendarListName,
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
      };
    
      public async createTabGeneralPost(teamId,channelId,body){
        await this.mainprop.WebPartContext.msGraphClientFactory
        .getClient()
          .then(async(client: MSGraphClient) => {        
            await client
              .api(`teams/${teamId}/channels/${channelId}/tabs`)
              .version("beta")
              .post(body).then(()=>{ 
              });
          });
      };
} // End of class