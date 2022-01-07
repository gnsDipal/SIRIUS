import { Web } from '@pnp/sp/presets/all';
export default class SPService{
    private webContext = null;
    private web = null;
    private webUrl = null;
    private loggedInUserId = null;
    constructor(private context){
      this.webContext = this.context;
      this.onInit();
    } 
    onInit(){
        this.webUrl = this.webContext.pageContext.web.absoluteUrl;
        this.loggedInUserId = this.webContext.pageContext.legacyPageContext["userId"];
        this.web = Web(this.webUrl);
    }
    public async getSectorData():Promise<any>{
        let result = await this.web.lists.getByTitle('Sectors').items.select("Title","ID","IsActive").orderBy("ID",false).get();
       return await Promise.resolve(result);
    }
    public getIntervalsData() {
        return this.web.lists.getByTitle('Intervals').items.select("Title", "ID").filter("IsActive eq '1'").orderBy("ID",false).get();
    }
}