import { Web } from '@pnp/sp/presets/all';
import { UserContext } from '../webparts/objectiveAndGoal/components/Main';
debugger;
export default class SPService{
    private webContext = null;
    private web = null;
    private webUrl = null;
    private loggedInUserId = null;
    constructor(private mainProp){
      this.webContext = this.mainProp.webPartContext;
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
}