import { Web } from '@pnp/sp/presets/all';
import { SPHttpClient, SPHttpClientResponse, HttpClient, MSGraphClient } from '@microsoft/sp-http';
import { IBirthAnniResults, ICell } from '../Models/IBirthAnniResults';
import { IBirthday } from '../Models/IBirthday';
import { IAnniversary } from '../Models/IAnniversary';
//import { IItemAddResult } from "@pnp/sp/items";
//import { IList } from "@pnp/sp/lists";
//import { graph } from "@pnp/graph";
//import {UserContext} from '../webparts/birthday/components/Main/Birthday';  
//import { Dropdown, IDropdown, IDropdownOption, optionProperties, TextField, Tooltip } from 'office-ui-fabric-react';

const headers: HeadersInit = new Headers();
headers.append("accept", "application/json;odata.metadata=none");

export default class SPBirthdayAnniversaryService{
    private webContext = null;
    private webUrl:string = null;
    // private loggedInUserId?:string = null;
    // private loggedInUserEmail?:string = "";
    // private loggedInUserName?:string = "";
    private web = null;

    constructor(private context) {
        // Setup Context to PnPjs and MSGraph
        this.webContext = context;
        // sp.setup({
        //   spfxContext: context
        // });
    
        // graph.setup({
        //  spfxContext: context
        // });       

        // Init
        this.onInit();
    }

    private async onInit() {
        this.webUrl = this.webContext.pageContext.web.absoluteUrl;
        // this.loggedInUserId = this.webContext.pageContext.legacyPageContext["userId"];
        // this.loggedInUserEmail = this.webContext.pageContext.user.email;
        // this.loggedInUserName = this.webContext.pageContext.user.displayName;
        this.web = Web(this.webUrl);
    }

    public async loadSettingsForTeams():Promise<{}>{        
        let result = await this.web.lists.getByTitle('ConfigurationSettings').items.select("*").filter(`Key eq 'Birthday'`).get();
        return result;
    }

    public async loadBirthdayImages():Promise<{}>{
        let result = await this.web.lists.getByTitle('BirthdayAnniversaryImages').items.select("*").filter(`Category eq 'Birthday'`).get();
        return result;
    }

    public async loadAnniversaryImages():Promise<{}>{
        let result = await this.web.lists.getByTitle('BirthdayAnniversaryImages').items.select("*").filter(`Category eq 'Anniversary'`).get();
        return result;
    }

    public async loadInternalDetails():Promise<{}>{       
        let result = await this.web.lists.getByTitle('UserBirthAnniversaryDetails').items.select("*").get();        
        return result;
    }

    public async loadBirthdayFromAzure(startDate: string, endDate: string): Promise<IBirthday[]>{
        let birthdayUsers: IBirthday[] = [];
        this.context.SPHttpClient
        .get(`${this.webUrl}/_api/search/query?querytext='*'&sourceid='b09a7990-05ea-4af9-81ef-edfab16c4e31'&rowlimit=500&selectproperties='FirstName,LastName,PreferredName,WorkEmail,PictureURL,Department,RefinableDate00'&refinementfilters='RefinableDate00:range(datetime(${startDate}), datetime(${endDate}))'`, SPHttpClient.configurations.v1, {
            headers: headers
        })
        .then((res: IBirthAnniResults) => {
            let siteURL: string = this.webUrl;
            let userphotourl: string = siteURL.substring(0,siteURL.search("/sites"));
            birthdayUsers = res.PrimaryQueryResult.RelevantResults.Table.Rows.map(r => {    
                return{
                    name: this.GetValueFromSearchResult('PreferredName', r.Cells),
                    firstName: this.GetValueFromSearchResult('FirstName', r.Cells),
                    lastName: this.GetValueFromSearchResult('LastName', r.Cells),     
                    email: this.GetValueFromSearchResult('WorkEmail', r.Cells),
                    photoUrl: `${userphotourl}${"/_layouts/15/userphoto.aspx?size=S&accountname=" + this.GetValueFromSearchResult('WorkEmail', r.Cells)}`,
                    birthDate:  this.GetValueFromSearchResult('RefinableDate00', r.Cells),
                    department: this.GetValueFromSearchResult('Department', r.Cells)
                };
            });
        })
        return Promise.resolve(birthdayUsers);
    }

    public async loadAnniversaryFromAzure(): Promise<IAnniversary[]>{
        let anniversaryUsers: IAnniversary[] = [];
        this.context.SPHttpClient
        .get(`${this.webUrl}/_api/search/query?querytext='*'&sourceid='b09a7990-05ea-4af9-81ef-edfab16c4e31'&rowlimit=500&selectproperties='FirstName,LastName,PreferredName,WorkEmail,PictureURL,Department,RefinableDate01'`, SPHttpClient.configurations.v1, {
            headers: headers
        })
        .then((res: IBirthAnniResults) => {
            let siteURL: string = this.webUrl;
            let userphotourl: string = siteURL.substring(0,siteURL.search("/sites"));
            anniversaryUsers = res.PrimaryQueryResult.RelevantResults.Table.Rows.map(r => {    
                return{
                    name: this.GetValueFromSearchResult('PreferredName', r.Cells),
                    firstName: this.GetValueFromSearchResult('FirstName', r.Cells),
                    lastName: this.GetValueFromSearchResult('LastName', r.Cells),     
                    email: this.GetValueFromSearchResult('WorkEmail', r.Cells),
                    photoUrl: `${userphotourl}${"/_layouts/15/userphoto.aspx?size=S&accountname=" + this.GetValueFromSearchResult('WorkEmail', r.Cells)}`,
                    hireDate: this.GetValueFromSearchResult('RefinableDate01', r.Cells),
                    department: this.GetValueFromSearchResult('Department', r.Cells)
                };
            });
        })
        return Promise.resolve(anniversaryUsers);
    }

    private GetValueFromSearchResult(key: string, cells: ICell[]): string {
        for (let i: number = 0; i < cells.length; i++) {
            if (cells[i].Key === key) {
                return cells[i].Value;
            }
        }
        return '';
    } 
    
    public async loadDataUsingThirdPartyAPI(query: string): Promise<{}>{
        let result;
        this.context.httpClient.get(`${query}`, HttpClient.configurations.v1, {
            headers: headers
        })
        .then((res:any) => {
            result = res;
        })
        return result;
    }
    
    public async loadTocheckIfTeamExist()
    {
        await this.context.msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient): void => {        
            client
            .api(`me/joinedTeams`)
            .version("beta")
            .get().then((res:any)=>{
                let teamExist: boolean = false;
            for(let i:number =0; i<res.value.length; ++i){
              if(res.value[i].displayName === "Birthday/Anniversary Admin")
                teamExist = true;
            }
            if(teamExist === false)
              this.createTeam();
          });
      });    
    }

    public async createTeam()
    {
        let body: any = {      
            "template@odata.bind": "https://graph.microsoft.com/v1.0/teamsTemplates('standard')",
            "displayName": "Birthday/Anniversary Admin",
            "description": "The team for those in architecture design."       
        };
        
        await this.context.msGraphClientFactory
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

    public async GetTeams()
    {
        await this.context.msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient): void => {        
            client
            .api(`me/joinedTeams`)
            .version("beta")
            .get().then((res)=>{
                let teamId: string = "";
                for(let i:number =0; i<res.value.length; ++i){
                    if(res.value[i].displayName === "Birthday/Anniversary Admin")
                        teamId = res.value[i].id;
                }
                if(teamId !== "")
                    this.GetChannelId(teamId);
            });
        }); 
    }

    public async GetChannelId(teamId: string)
    {
        await this.context.msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient): void => {        
            client
            .api(`teams/${teamId}/channels`)
            .version("beta")
            .get().then((res)=>{
                let webURL: string = res.value[0].webUrl;
                console.log("web url: " + webURL);
                let channelId = res.value[0].id;           
                this.createImagesTab(teamId,channelId);
                this.createUsersTab(teamId,channelId);
            });
        });
    }

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
        this.createTab(teamId, channelId, body);
    }

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
        this.createTab(teamId, channelId, body);
    }

    createTab = async(teamId: string, channelId: string, body: string) =>
    {
        await this.context.msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient): void => {        
            client
            .api(`teams/${teamId}/channels/${channelId}/tabs`)
            .version("beta")
            .post(body).then(()=>{            
            });
        });
    }

    public async insertUserDataToList(JsonData){
        this.context.spHttpClient.post(`${this.webUrl}/_api/web/lists/getbytitle('UserBirthAnniversaryDetails')/items`, SPHttpClient.configurations.v1,  
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

}//End of Main function