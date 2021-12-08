import * as React from 'react'
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp, Web, PermissionKind, IItem, IFieldInfo } from '@pnp/sp/presets/all';
import { IItemAddResult } from "@pnp/sp/items";
import { IList } from "@pnp/sp/lists";
import { IAttachmentFileInfo } from "@pnp/sp/attachments";
// import { siteUsers } from '@pnp/sp/site-users/web'
import { graph } from "@pnp/graph";
// import * as moment from 'moment';
import { Logger, LogLevel} from "@pnp/logging";
import {UserContext} from '../webparts/departmentalRequest/components/Main/Main';
import {AssignedTicketData, MyAssignedEachPlateData} from '../model/MyRequestedEachPlateData';
import { Dropdown, IDropdown, IDropdownOption, optionProperties, TextField, Tooltip } from 'office-ui-fabric-react';
import { IOptionWithKey } from '../model/RaiseRequest';
import { IDepartmentList } from '../model/RaiseRequest';
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
        public async loadDispatcherPermissionHandle():Promise<boolean>{
            let result = await this.web.lists.getByTitle('Dept').items.select("*","GroupName/Title","DepartmentGroup/Title","Manager/Title").expand("GroupName","DepartmentGroup","Manager").orderBy("Title",false).get();
            let loggedInUserGrps = await this.web.currentUser.groups(); 
            let permissionCheck = await this.checkForDepts(result,loggedInUserGrps);
            return Promise.resolve(permissionCheck);
        }

        public async checkForDepts(result,loggedInUserGrps):Promise<boolean>{
            let count:number = 0;
            for(let i=0;i<loggedInUserGrps.length;++i){
                for(let j=0;j<result.length;++j){
                    if(loggedInUserGrps[i].Title ===result[j].GroupName.Title){
                        count = count + 1;
                        break;
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
}