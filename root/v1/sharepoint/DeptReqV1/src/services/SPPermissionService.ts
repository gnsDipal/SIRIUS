import * as React from 'react';
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp, Web } from '@pnp/sp/presets/all';
import { graph } from "@pnp/graph";
import { Logger, LogLevel} from "@pnp/logging";
debugger;
export default class SPPermissionService{ 
    private webContext = null;
    private webUrl:string = null;
    private loggedInUserId?:string = null;
    private loggedInUserEmail?:string = "";
    private loggedInUserName?:string = "";
    private web = null;
    constructor(private context) {    
      // Setup Context to PnPjs and MSGraph
      this.webContext = context;
      sp.setup({
        spfxContext: context
      });
  
      graph.setup({
       spfxContext: context
      });
      this.onInit();
    }
        // Init  
        private async onInit() {
          Logger.write("SPDepartmentalService init()", LogLevel.Info);
          this.webUrl = this.webContext.pageContext.web.absoluteUrl;
          this.loggedInUserId = this.webContext.pageContext.legacyPageContext["userId"];
          this.loggedInUserEmail = this.webContext.pageContext.user.email;
          this.loggedInUserName = this.webContext.pageContext.user.displayName;
          this.web = Web(this.webUrl);
        }
        public async loadAdminUserCheck():Promise<boolean>{
            try{          
            // let result = await this.web.currentUser.IsSiteAdmin();
            let adminUser = await this.webContext.pageContext.legacyPageContext.isSiteAdmin;
            console.log('result = ' + adminUser);
            return await Promise.resolve(adminUser);
            }catch(error){
                return await Promise.reject(error);
            }
        }
        public async loadDispatcherPermissionHandle():Promise<boolean>{
            let result = await this.web.lists.getByTitle('Dept').items.select("*","GroupName/Title","DepartmentGroup/Title","Manager/Title").expand("GroupName","DepartmentGroup","Manager").orderBy("Title",false).get();
            let loggedInUserGrps = await this.web.currentUser.groups(); 
            let permissionCheck = await this.checkForDepts(result,loggedInUserGrps);
            return Promise.resolve(permissionCheck);
        }

        public async checkForDepts(result,loggedInUserGrps):Promise<boolean>{
            let count:number = 0;
            outer_loop:
            for(let i=0;i<loggedInUserGrps.length;++i){
                for(let j=0;j<result.length;++j){
                    if(loggedInUserGrps[i].Title ===result[j].GroupName.Title){
                        count = count + 1;
                        break outer_loop
                    }
                }
            }
            if(count>0){
                return Promise.resolve(true);
            }
            else{
                return Promise.resolve(false);
            }
        }

        public async loadAssignedPermissionHandle():Promise<boolean>{
            let result = await this.web.lists.getByTitle('Dept').items.select("*","GroupName/Title","DepartmentGroup/Title","Manager/Title").expand("GroupName","DepartmentGroup","Manager").orderBy("Title",false).get();
            let loggedInUserGrps = await this.web.currentUser.groups(); 
            let permissionCheck = await this.checkForSupportDepts(result,loggedInUserGrps);
            return Promise.resolve(permissionCheck);
        }
        public async checkForSupportDepts(result,loggedInUserGrps):Promise<boolean>{
            let count:number = 0;
            outer_loop: 
            for(let i=0;i<loggedInUserGrps.length;++i){
                for(let j=0;j<result.length;++j){
                    if(loggedInUserGrps[i].Title === result[j].DepartmentGroup.Title){
                        count = count + 1;
                        break outer_loop
                    }
                }
            }
            if(count>0)
                return Promise.resolve(true);     
            else
                return Promise.resolve(false);
        }
    
        public async loadManagerPermissionHandle():Promise<boolean>{
          try{
            let permissionCheck:boolean = false;
            let result = await this.web.lists.getByTitle('Dept').items.select("*","Manager/Title").expand("Manager").get();
            for(let i=0;i<result.length;++i){
                if(this.loggedInUserId === result[i].ManagerId){
                    permissionCheck = true;
                    break;
                }
            }
                return Promise.resolve(permissionCheck);
          }catch(error){
                return Promise.reject(error);
          }  
        }
        public async checkForManagerDepts(result,loggedInUserGrps):Promise<boolean>{
            let count:number = 0;
            outer_loop: 
            for(let i=0;i<loggedInUserGrps.length;++i){
                for(let j=0;j<result.length;++j){
                    if(loggedInUserGrps[i].Title === result[j].Manager.Title){
                        count = count + 1;
                        break outer_loop
                    }
                }
            }
            if(count>0)
                return Promise.resolve(true);     
            else
                return Promise.resolve(false);
        }
} //End of main class