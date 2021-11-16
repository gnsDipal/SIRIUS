import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp, Web, PermissionKind, IItem, IFieldInfo } from '@pnp/sp/presets/all';
// import { siteUsers } from '@pnp/sp/site-users/web'
import { graph } from "@pnp/graph";
import { Logger, LogLevel} from "@pnp/logging";
import { Context } from "@microsoft/teams-js";
import { SPHttpClient, ISPHttpClientOptions, SPHttpClientResponse } from '@microsoft/sp-http';

export interface spProps {
  context:Context
}
debugger;
export default class spservices {
    private webContext:WebPartContext;
    constructor(private context: WebPartContext) {    
        // Setup Context to PnPjs and MSGraph
        sp.setup({
          spfxContext: this.context
        });
    
        graph.setup({
         spfxContext: this.context
        });
        // Init
        this.onInit();
        

      }
       // OnInit Function
  private async onInit() {
    Logger.write("spServices init()", LogLevel.Info);
    // this.checkLoggedInUserAsAdmin();
  }
    checkLoggedInUserAsAdmin() {
      const headers: HeadersInit = new Headers();
      // suppress metadata to minimize the amount of data loaded from SharePoint
      headers.append("accept", "application/json;odata.metadata=none");
      this.webContext.spHttpClient
        .get(`${this.webContext.pageContext.web.absoluteUrl}/_api/web/currentuser/issiteadmin`,
        SPHttpClient.configurations.v1, {
          headers: headers
        })
        .then((res: SPHttpClientResponse): Promise<any> => {
          return res.json();
        })
        .then((res: any): void => {
            if(res){
              console.log('res = ' + res);
            }
            else{
              console.log('res = ' + res);
            }
            // return res.value;
          })        
    }
}