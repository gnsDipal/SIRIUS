//import * as React from 'react'
//import { WebPartContext } from "@microsoft/sp-webpart-base";
//import { sp, Web, PermissionKind, IItem, IFieldInfo } from '@pnp/sp/presets/all';
import { Web } from '@pnp/sp/presets/all';
//import { IItemAddResult } from "@pnp/sp/items";
//import { IList } from "@pnp/sp/lists";
//import { graph } from "@pnp/graph";
//import {UserContext} from '../webparts/birthday/components/Main/Birthday';  
//import { Dropdown, IDropdown, IDropdownOption, optionProperties, TextField, Tooltip } from 'office-ui-fabric-react';

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

      public async loadInternalDetails(): Promise<{}>{       
        let result = await this.web.lists.getByTitle('UserBirthAnniversaryDetails').items.select("*").get();
        return result;
      }

}//End of Main function