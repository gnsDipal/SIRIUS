import { Web, sp, ISearchQuery, SearchResults, ISearchResult } from '@pnp/sp/presets/all';
import { SPHttpClient, SPHttpClientResponse, HttpClient } from '@microsoft/sp-http';
import { ICell } from '../Models/IBirthAnniResults';
import { IBirthday } from '../Models/IBirthday';
import { IAnniversary } from '../Models/IAnniversary';

const headers: HeadersInit = new Headers();
headers.append("accept", "application/json;odata.metadata=none");
let birthdayUsers: IBirthday[] = [];

debugger;

export default class SPBirthdayAnniversaryService{
    private webContext = null;
    private webUrl:string = null;
    private web = null;   

    constructor(private context) {
        //Setup Context to PnPjs and MSGraph
        this.webContext = this.context;
        sp.setup(context);
        this.onInit();
    }

    private async onInit() {
        this.webUrl = this.webContext.pageContext.web.absoluteUrl;
        this.web = Web(this.webUrl);      
    }
    
    public async loadSettingsForTeams():Promise<{}>{        
        let result = await this.web.lists.getByTitle('ConfigurationSettings').items.select("ID", "Settings", "Key", "ExternalAPI", "IsTeamsIcon").filter(`Key eq 'Birthday'`).get();
        return result;
    }

    public async loadBirthdayImages():Promise<{}>{
        let result = await this.web.lists.getByTitle('BirthdayAnniversaryImages').items.select("ID", "Title", "FileLeafRef", "ImageWidth", "ImageHeight", "AuthorId").filter(`Category eq 'Birthday'`).get();
        return result;
    }

    public async loadAnniversaryImages():Promise<{}>{
        let result = await this.web.lists.getByTitle('BirthdayAnniversaryImages').items.select("ID", "Title", "FileLeafRef", "ImageWidth", "ImageHeight", "AuthorId").filter(`Category eq 'Anniversary'`).get();
        return result;
    }

    public async loadInternalBirthdayDetails(Month: number):Promise<{}>{ 
        const resultCAML = await sp.web.lists.getByTitle("UserBirthAnniversaryDetails").getItemsByCAMLQuery({
            ViewXml: `<View><Query><Where><Eq><FieldRef Name="birthdayMonth" /><Value Type="Number">${Month}</Value></Eq></Where></Query></View>`,
        });      
        return resultCAML;        
    }

    public async loadInternalAnniversaryDetails(Month: number):Promise<{}>{
        const resultCAML = await sp.web.lists.getByTitle("UserBirthAnniversaryDetails").getItemsByCAMLQuery({
            ViewXml: `<View><Query><Where><Eq><FieldRef Name="hireDayMonth" /><Value Type="Number">${Month}</Value></Eq></Where></Query></View>`,
        });       
        return resultCAML;
    }

    public async loadIntUserDepartment(intUserEmail: string):Promise<string>{
        let result = await this.web.lists.getByTitle('UserBirthAnniversaryDetails').items.select("department").filter(`email eq '${intUserEmail}'`).get();        
        return result;
    }

    public async loadAzureUserDepartment(azureUserEmail: string):Promise<string>{
        let department;
        for(let i:number = 0; i<birthdayUsers.length; ++i){
            if(birthdayUsers[i].email === azureUserEmail)
                department = birthdayUsers[i].department;
        }
        return await Promise.resolve(department);
    }

    public async loadBirthdayFromAzure(startDate: string, endDate: string): Promise<IBirthday[]>{               
        const results: SearchResults = await sp.search(<ISearchQuery>{
            Querytext: "*",
            RowLimit: 500,
            SourceId: 'b09a7990-05ea-4af9-81ef-edfab16c4e31',
            SelectProperties: ['FirstName','LastName','PreferredName','WorkEmail','PictureURL','Department','RefinableDate00'],
            RefinementFilters: [`RefinableDate00:range(datetime(${startDate}), datetime(${endDate}))`]
        });

        let userphotourl: string = this.loadUserphotoURL();            
        birthdayUsers = results.RawSearchResults.PrimaryQueryResult.RelevantResults.Table.Rows.map(r => {    
            return{
                name: this.GetValueFromSearchResult('PreferredName', r.Cells),                    
                firstName: this.GetValueFromSearchResult('FirstName', r.Cells),
                lastName: this.GetValueFromSearchResult('LastName', r.Cells),
                email: this.GetValueFromSearchResult('WorkEmail', r.Cells), 
                photoUrl: `${userphotourl}${"/_layouts/15/userphoto.aspx?size=S&accountname=" + this.GetValueFromSearchResult('WorkEmail', r.Cells)}`,
                birthDate: this.GetValueFromSearchResult('RefinableDate00', r.Cells),
                department:  this.GetValueFromSearchResult('Department', r.Cells)                  
            };
        });        
        return await Promise.resolve(birthdayUsers);
    }

    public async loadAnniversaryFromAzure(): Promise<IAnniversary[]>{
        let anniversaryUsers: IAnniversary[] = [];              
        const results: SearchResults = await sp.search(<ISearchQuery>{
            Querytext: "*",
            RowLimit: 500,
            SourceId: 'b09a7990-05ea-4af9-81ef-edfab16c4e31',
            SelectProperties: ['FirstName','LastName','PreferredName','WorkEmail','PictureURL','Department','RefinableDate01']
        });        
        
        let userphotourl: string = this.loadUserphotoURL();
        anniversaryUsers = results.RawSearchResults.PrimaryQueryResult.RelevantResults.Table.Rows.map(r => {    
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
        return await Promise.resolve(anniversaryUsers);
    }  
    
    public loadUserphotoURL(): string {
        let siteURL: string = this.webUrl;
        let userphotourl: string;
        let MainSiteURL: number = siteURL.search("/sites");
        if(MainSiteURL !== -1)
            userphotourl = siteURL.substring(0, MainSiteURL);
        else
            userphotourl = siteURL;
        return userphotourl;
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
        const result = await fetch(`${query}`);        
        const jsonData = await result.json();         
        return await Promise.resolve(jsonData);
    }

    public async insertUserDataToList(JsonData: string){
        await this.webContext.spHttpClient.post(`${this.webUrl}/_api/web/lists/getbytitle('UserBirthAnniversaryDetails')/items`, SPHttpClient.configurations.v1,  
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

    public async insertEmailDataToList(JsonData: string){
        await this.webContext.spHttpClient.post(`${this.webUrl}/_api/web/lists/getbytitle('EmailSender')/items`, SPHttpClient.configurations.v1,  
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
        });        
    }
}//End of Main function