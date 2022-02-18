import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp, Web, PermissionKind, IFieldInfo } from '@pnp/sp/presets/all';
import { Logger, LogLevel} from "@pnp/logging";
import { IListInfo } from '../models/IListInfo';
import { IListEnsureResult, IList, IListAddResult,  IListUpdateResult  } from "@pnp/sp/lists";
import { Fields, IFields, IFieldAddResult } from "@pnp/sp/fields";
import { UrlFieldFormatType } from "@pnp/sp/fields/types";
import { sizeBoolean } from "@microsoft/office-ui-fabric-react-bundle";
// debugger;
export default class spAssetServiceEnsureLists {
    private webContext:any = null;
    private departmentListId?:string = null;
    private webUrl:any = null;
    constructor(private context: WebPartContext) {
      // Setup Context to PnPjs and MSGraph
      sp.setup({
        spfxContext: this.context
      });
      this.webContext = this.context
      // Init
      this.onInit();
    }
 
    // OnInit Function
    private async onInit() {
      this.webUrl = this.webContext.pageContext.web.absoluteUrl;
      Logger.write("spServices init()", LogLevel.Info);
    }

      /**
   *
   * @param {string} siteUrl
   * @returns
   * @memberof spservices
   */

/* -------------------------------------------------- */

/* Creation of all the lists one after the other */

public createAllLists(locationListName, areaListName, categoryListName, masterListName, calendarListName){
    this.createLocationList(locationListName, areaListName, categoryListName, masterListName, calendarListName);  
}
public async createLocationList(locationListName, areaListName, categoryListName, masterListName, calendarListName){
    const listEnsureResult = await sp.web.lists.ensure(locationListName, " Asset location details list", 100); 
  if (listEnsureResult.created){
    const batch = sp.web.createBatch(); 
        listEnsureResult.list.fields.inBatch(batch).addBoolean('IsActive');
        await batch.execute();
        await sp.web.lists.getByTitle(locationListName).defaultView.fields.add('IsActive');
        const r = await listEnsureResult.list.select("Id")();
        this.departmentListId = await r.Id;
        if(this.departmentListId){
            this.createAreaList(areaListName,this.departmentListId, categoryListName, masterListName, calendarListName)
        }
  }    
} // end of function

public async createAreaList(areaListName,previousId ,categoryListName, masterListName, calendarListName){
    const listEnsureResult = await sp.web.lists.ensure(areaListName, "Area details list", 100); 
    if (listEnsureResult.created){
        const batch = sp.web.createBatch();
        listEnsureResult.list.fields.inBatch(batch).addBoolean('IsActive');
        listEnsureResult.list.fields.inBatch(batch).addLookup("AssetLocation",previousId,"Title");
        await batch.execute();
        await sp.web.lists.getByTitle(areaListName).defaultView.fields.add('IsActive');
        await sp.web.lists.getByTitle(areaListName).defaultView.fields.add('AssetLocation');
        const r = await listEnsureResult.list.select("Id")();
        this.departmentListId = await r.Id;
        if(this.departmentListId){
            this.createAssetbuildingFloorList(categoryListName,this.departmentListId,  masterListName, calendarListName)
        }
    }
} // end of function

public async createAssetbuildingFloorList(categoryListName, previousId, masterListName, calendarListName){
    const listEnsureResult = await sp.web.lists.ensure(categoryListName, "Room building floor details list", 100);
    if (listEnsureResult.created){
        const batch = sp.web.createBatch();   
        listEnsureResult.list.fields.inBatch(batch).addBoolean('IsActive');
        listEnsureResult.list.fields.inBatch(batch).addLookup("AssetArea",previousId, "Title");
        await batch.execute();    
        await sp.web.lists.getByTitle(categoryListName).defaultView.fields.add('IsActive');
        await sp.web.lists.getByTitle(categoryListName).defaultView.fields.add('AssetArea');
        const r = await listEnsureResult.list.select("Id")();
        this.departmentListId = await r.Id;
        if(this.departmentListId){
            this.createAssetSizeList(masterListName,this.departmentListId, calendarListName)
        }
    }
} // end of function

    public async createAssetSizeList(masterListName, previousId, calendarListName){
        const listEnsureResult = await sp.web.lists.ensure(masterListName, "Room building size details list", 100);
        if (listEnsureResult.created){
            const batch = sp.web.createBatch();   
            listEnsureResult.list.fields.inBatch(batch).addBoolean('IsActive');
            listEnsureResult.list.fields.inBatch(batch).addLookup("BuildingFloor",previousId, "Title");
            listEnsureResult.list.fields.inBatch(batch).addNumber('Capacity');
            listEnsureResult.list.fields.inBatch(batch).addUrl('Image',UrlFieldFormatType.Hyperlink);
            listEnsureResult.list.fields.inBatch(batch).addNumber('Count');
            listEnsureResult.list.fields.inBatch(batch).addText('HexColor');
            await batch.execute();    
            await sp.web.lists.getByTitle(masterListName).defaultView.fields.add('IsActive');
            await sp.web.lists.getByTitle(masterListName).defaultView.fields.add('BuildingFloor');
            await sp.web.lists.getByTitle(masterListName).defaultView.fields.add('Capacity');
            await sp.web.lists.getByTitle(masterListName).defaultView.fields.add('Image');
            await sp.web.lists.getByTitle(masterListName).defaultView.fields.add('Count');
            await sp.web.lists.getByTitle(masterListName).defaultView.fields.add('HexColor');
            const r = await listEnsureResult.list.select("Id")();
            this.departmentListId = await r.Id;
            if(this.departmentListId){
                this.createAssetCalendarListFields(calendarListName);
            }
        }
    }// end of function

    public async createAssetCalendarListFields(calendarListName){
        const listEnsureResult = await sp.web.lists.ensure(calendarListName, "Room building size details list", 106);
        if (listEnsureResult.created){
            const batch = sp.web.createBatch();   
            listEnsureResult.list.fields.inBatch(batch).addBoolean('IsActive');
            await batch.execute();
            await sp.web.lists.getByTitle(calendarListName).defaultView.fields.add('IsActive');
            const r = await listEnsureResult.list.select("Id")();
            this.departmentListId = await r.Id;
            if(this.departmentListId){
                this.createUpdateCalendarChoiceFieldOptions(calendarListName,'Category',[]);
            }    
        }
    } // end of function

   public async createUpdateCalendarChoiceFieldOptions(calendarListName:string,fieldInternalName:string,options:string[]){
        const web = Web(this.webUrl);
        await web.lists.getByTitle(calendarListName)
        .fields
        .getByInternalNameOrTitle(fieldInternalName)
        .update({
          Choices: {
            results: options
          }
        });
   }

/* End of creation of all lists */


/* -------------------------------------------------- */

}