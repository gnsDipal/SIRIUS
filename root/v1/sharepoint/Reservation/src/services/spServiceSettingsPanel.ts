import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp, Web, PermissionKind, IItem, IFieldInfo } from '@pnp/sp/presets/all';
import { Logger, LogLevel} from "@pnp/logging";
import { MSGraphClient } from '@microsoft/sp-http';
debugger;
// Class Services
export default class spServiceSettingsPanel {
    private webContext = null;
    private webUrl:string = null;
    private web = null;
    private locationListName = null;
    private areaListName = null;
    private categoryListName = null;
    private masterListName = null;
    private calendarListName = null;
    constructor(private context: any, private locationList: string,
       private areaList: string,
       private categoryList:string,
       private masterList: string,
       private calendarList:string,) { 
        this.webContext = this.context;
        this.locationListName =this.locationList;
        this.areaListName = this.areaList; 
        this.categoryListName = this.categoryList;
        this.masterListName = this.masterList;
        this.calendarListName = this.calendarList
      // Setup Context to PnPjs and MSGraph
      sp.setup({
        spfxContext: this.context
      });
      // Init
      this.onInit();
    }
    // OnInit Function
    private async onInit() {
      Logger.write("spServices init()", LogLevel.Info);
      this.webUrl = this.webContext.pageContext.web.absoluteUrl;
      this.web = Web(this.webUrl);
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
        await this.webContext.msGraphClientFactory
        .getClient()
        .then(async(client: MSGraphClient) => {        
         await client
          .api(`me/joinedTeams`)
          .version("beta")
          .get().then(async(res)=>{
            for(let i:number =0; i<res.value.length; ++i)
            {
              if(res.value[i].displayName === "Sirius_RoomReservationAdmin")
              {
                teamPresentCheck = true;
              }
            }
        });
      });  
      return await Promise.resolve(teamPresentCheck);

     };
   
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
              if(res.value[i].displayName === "Sirius_RoomReservationAdmin")
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
         "displayName": "Sirius_RoomReservationAdmin",
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
    };

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
                  if(res.value[i].displayName === "Sirius_RoomReservationAdmin")
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
    };
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
                await this.createTab4(teamId,channelId);
                await this.createTab5(teamId,channelId);
              });
          });
          return Promise.resolve(webURL)
    };

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
    };
      public async createTab1 (teamId,channelId){
        let contentURL = `${this.webContext.pageContext.web.absoluteUrl}/Lists/${this.locationListName}/AllItems.aspx`;
        let body: any = {      
          "displayName": this.locationListName,
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
        let contentURL = `${this.webContext.pageContext.web.absoluteUrl}/Lists/${this.areaListName}/AllItems.aspx`;
        let body: any = {      
          "displayName": this.areaListName,
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
        let contentURL = `${this.webContext.pageContext.web.absoluteUrl}/Lists/${this.categoryListName}/AllItems.aspx`;
        let body: any = {      
          "displayName": this.categoryListName,
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
        let contentURL = `${this.webContext.pageContext.web.absoluteUrl}/Lists/${this.masterListName}/AllItems.aspx`;
        let body: any = {      
          "displayName": this.masterListName,
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
        let contentURL = `${this.webContext.pageContext.web.absoluteUrl}/Lists/${this.calendarListName}/calendar.aspx`;
        let body: any = {      
          "displayName": this.calendarListName,
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
        await this.webContext.msGraphClientFactory
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