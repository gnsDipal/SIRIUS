import { Web } from '@pnp/sp/presets/all';
//import pnp from 'sp-pnp-js';

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

    // var email=this.context.pageContext.user.email;
    //     this. getUserId (email);

    // public getUserId(email: string): Promise<number> {
    //     return pnp.sp.site.rootWeb.ensureUser(email).then(result => {   
    //     return result.data.Id;      
    //     });        
    // }

    public async getSectorData():Promise<any>{
        let result = await this.web.lists.getByTitle('Sectors').items.select("Title","ID","IsActive").orderBy("ID",false).get();
       return await Promise.resolve(result);
    }
    public getIntervalsData() {
        return this.web.lists.getByTitle('Intervals').items.select("Title", "ID").filter("IsActive eq '1'").orderBy("ID",false).get();
    }
    public getGoalsData() {
        return this.web.lists.getByTitle('AllGoalsData').items.select("*").orderBy("ID",false).get();
    }

    public getOrganizationData() {
        return this.web.lists.getByTitle('GoalOrganization').items.select("Title","ID","IsActive","Goal","Interval","StatusPercentage").filter("IsActive eq '1'").orderBy("ID",false).get();
    }

    public getDepartmentData() {
        return this.web.lists.getByTitle('GoalDepartment').items.select("Title","ID","IsActive","Goal","Interval","StatusPercentage","DepartmentId","Department/Id","Department/Title").expand("Department").filter("IsActive eq '1'").orderBy("ID",false).get();
    }

    public getDepartmentOptionsData() {
        return this.web.lists.getByTitle('GoalDepartmentOptions').items.select("Title","ID","Department","Members/Id","Members/Title","DeptAdmin/Id","DeptAdmin/Title").expand("Members","DeptAdmin").orderBy("ID",false).get();
    }

    public getPersonalData() {
        return this.web.lists.getByTitle('GoalPersonal').items.select("Title","ID","IsActive","Goal","Interval","StatusPercentage").filter("IsActive eq '1'").orderBy("ID",false).get();
    }

    public getOrganizationAdminData() {
        return this.web.lists.getByTitle('GoalSecurityAddGoal').items.select("Title","ID","Members/Id","Members/Title").expand("Members").orderBy("ID",false).get();
    }
}