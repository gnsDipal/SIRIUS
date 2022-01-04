import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp, Web, PermissionKind, IFieldInfo } from '@pnp/sp/presets/all';
import { Logger, LogLevel} from "@pnp/logging";
import { IListInfo } from '../models/IListInfo';
import { IListEnsureResult, IList, IListAddResult,  IListUpdateResult  } from "@pnp/sp/lists";
import { Fields, IFields, IFieldAddResult } from "@pnp/sp/fields";
import { UrlFieldFormatType } from "@pnp/sp/fields/types";
import { sizeBoolean } from "@microsoft/office-ui-fabric-react-bundle";
// Class Services
debugger;
export default class spServiceEnsureLists {
    constructor(private context: WebPartContext) {
      // Setup Context to PnPjs and MSGraph
      sp.setup({
        spfxContext: this.context
      });

      // Init
      this.onInit();
    }
 
    // OnInit Function
    private async onInit() {
      Logger.write("spServices init()", LogLevel.Info);
    }

      /**
   *
   * @param {string} siteUrl
   * @returns
   * @memberof spservices
   */
//   public async getSiteListOfTemplate100(siteUrl: string) {
//     let results: any[] = [];
//     if (!siteUrl) {
//       return [];
//     }

//     try {
//       const web = Web(siteUrl);
//       results = await web.lists.select("Title", "ID").filter('BaseTemplate eq 100').get();
//    } catch (error) {
//       return Promise.reject(error);
//     }
//     return results;
//   }


    /* 
    *  Ensure the lists are present prior to access
    */
    public async isListExistsByListInfo(siteUrl: string, listName:string): Promise<boolean> {
        let isListPresent: boolean = false;
        try {
            const web = Web(siteUrl);
            let list:IList = await web.lists.getByTitle(listName);
            if(list.contentTypes === null) {
                alert(listName + ' Not found');
            } else {
                isListPresent = true;
            }
            return Promise.resolve(isListPresent);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    /* 
    *  Ensure the lists are present prior to access
    */
    public async ensureListByListInfo(siteUrl: string, listInfo:IListInfo): Promise<IListInfo> {
        try {
            const web = Web(siteUrl);
            let listRes: IListEnsureResult = await web.lists.ensure(listInfo.ListName, listInfo.ListDescription, listInfo.ListType, true, { OnQuickLaunch: false });
            listInfo.IsListCreated = listRes.created;
            return Promise.resolve(listInfo);
        } catch (error) {
            listInfo.ListError = error;
            return Promise.reject(error);
        }
    }

    public async ensureLocationListFields(siteUrl: string, listInfo:IListInfo): Promise<boolean> {
        let isFieldCreated :boolean = false;
        try {
            const web = Web(siteUrl);
            await web.lists.getByTitle(listInfo.ListName).fields.addBoolean("IsActive");
            isFieldCreated = true;
        } catch (error) {
            listInfo.ListError = error;
            return Promise.reject(error);
        }
        return isFieldCreated;
    }

    /* 
    * Fields to be created for Calender list
    * Fields are: 
    * IsActive - Boolean 
    * AssetLocation - Lookup list from AssetLocation
    */
    public async ensureAreaListFields(siteUrl: string, listInfo:IListInfo, lookUpList:IListInfo): Promise<boolean> {
        let isFieldCreated :boolean = false;
        try{
            const web = Web(siteUrl);
            await web.lists.getByTitle(listInfo.ListName).fields.addBoolean("IsActive");
            const list = await sp.web.lists.getByTitle(lookUpList.ListName)();
            if(list != null && list.Id != null) {
                alert("list.Id and it is inside if() = " + list.Id);
                await web.lists.getByTitle(listInfo.ListName).fields.addLookup("AssetLocation", list.Id, "Title");
            } else {
                alert("Lookup list not found");
            }
        } catch (error) {
            listInfo.ListError = error;
            return Promise.reject(error);
        }
        return isFieldCreated;
    }

       /* 
    * Fields to be created for Calender list
    * Fields are: 
    * IsActive - Boolean 
    * AssetLocation - Lookup list from AssetLocation
    */
       public async ensureRoomAreaListFields(siteUrl: string, listInfo:IListInfo, lookUpList:IListInfo): Promise<boolean> {
        let isFieldCreated :boolean = false;
        try{
            const web = Web(siteUrl);
            await web.lists.getByTitle(listInfo.ListName).fields.addBoolean("IsActive");
            const list = await sp.web.lists.getByTitle(lookUpList.ListName)();
            await web.lists.getByTitle(listInfo.ListName).fields.addLookup("RoomLocation",list.Id, "Title");
        } catch (error) {
            listInfo.ListError = error;
            return Promise.reject(error);
        }
        return isFieldCreated;
    }

    /* 
    * Fields to be created for Calender list
    * Fields are: 
    * IsActive - Boolean 
    * AssetArea - Lookup list from AssetArea
    */
    public async ensureCategoryListFields(siteUrl: string, listInfo:IListInfo, lookUpList:IListInfo): Promise<boolean> {
        let isFieldCreated :boolean = false;
        try{
            const web = Web(siteUrl);
            await web.lists.getByTitle(listInfo.ListName).fields.addBoolean("IsActive");
            const list = await sp.web.lists.getByTitle(lookUpList.ListName)();
            await web.lists.getByTitle(listInfo.ListName).fields.addLookup("AssetArea", list.Id, "Title");
        } catch (error) {
            listInfo.ListError = error;
            return Promise.reject(error);
        }
        return isFieldCreated;
    }

     /* 
    * Fields to be created for Calender list
    * Fields are: 
    * IsActive - Boolean 
    * AssetArea - Lookup list from AssetArea
    */
     public async ensureRoombuildingFloorListFields(siteUrl: string, listInfo:IListInfo, lookUpList:IListInfo): Promise<boolean> {
        let isFieldCreated :boolean = false;
        try{
            const web = Web(siteUrl);
            await web.lists.getByTitle(listInfo.ListName).fields.addBoolean("IsActive");
            const list = await sp.web.lists.getByTitle(lookUpList.ListName)();
            await web.lists.getByTitle(listInfo.ListName).fields.addLookup("RoomArea",list.Id, "Title");
        } catch (error) {
            listInfo.ListError = error;
            return Promise.reject(error);
        }
        return isFieldCreated;
    }

    /* 
    * Fields to be created for Calender list
    * Fields are: 
    * IsActive - Boolean 
    * AssetCategory - Lookup list from AssetCategory
    * Count - Number to hold number of available assets
    * Image - hold Image of the resource
    */
    public async ensureMasterListFields(siteUrl: string, listInfo:IListInfo, lookUpList:IListInfo): Promise<boolean> {
        let isFieldCreated :boolean = false;
        try{
            const web = Web(siteUrl);
            await web.lists.getByTitle(listInfo.ListName).fields.addBoolean("IsActive");
            const list = await sp.web.lists.getByTitle(lookUpList.ListName)();
            await web.lists.getByTitle(listInfo.ListName).fields.addLookup("AssetCategory",list.Id, "Title");
            await web.lists.getByTitle(listInfo.ListName).fields.addNumber("Count");
            await web.lists.getByTitle(listInfo.ListName).fields.addUrl("Image", UrlFieldFormatType.Hyperlink);
            await web.lists.getByTitle(listInfo.ListName).fields.addText("HexColor");
        } catch (error) {
            listInfo.ListError = error;
            return Promise.reject(error);
        }
        return isFieldCreated;
    }

    /* 
    * Fields to be created for Calender list
    * Fields are: 
    * IsActive - Boolean 
    * AssetCategory - Lookup list from AssetCategory
    * Count - Number to hold number of available assets
    * Image - hold Image of the resource
    */
    public async ensureRoomSizeListFields(siteUrl: string, listInfo:IListInfo, lookUpList:IListInfo): Promise<boolean> {
        let isFieldCreated :boolean = false;
        try{
            const web = Web(siteUrl);
            await web.lists.getByTitle(listInfo.ListName).fields.addBoolean("IsActive");
            const list = await sp.web.lists.getByTitle(lookUpList.ListName)();
            await web.lists.getByTitle(listInfo.ListName).fields.addLookup("BuildingFloor",list.Id, "Title");
            await web.lists.getByTitle(listInfo.ListName).fields.addNumber("Capacity");
            await web.lists.getByTitle(listInfo.ListName).fields.addUrl("Image", UrlFieldFormatType.Hyperlink);
            await web.lists.getByTitle(listInfo.ListName).fields.addText("HexColor");
        } catch (error) {
            listInfo.ListError = error;
            return Promise.reject(error);
        }
        return isFieldCreated;
    }

    /* 
    * Fields to be created for Calender list
    * Fields are: 
    * IsActive - Boolean 
    * AssetMaster - Lookup list from AssetMaster
    */
    public async ensureCalendarListFields(siteUrl: string, listInfo:IListInfo): Promise<boolean> {
        let isFieldCreated :boolean = false;
        try{
            const web = Web(siteUrl);
            await web.lists.getByTitle(listInfo.ListName).fields.addBoolean("IsActive");
            // TODO: DIPAL - CLEAR the CHOICE FIELD
            await this.updateCalendarChoiceFieldOptions(siteUrl, listInfo.ListName, 'Category', []);
        } catch (error) {
            listInfo.ListError = error;
            return Promise.reject(error);
        }
        return isFieldCreated;
    }

    /* 
    * Fields to be created for Calender list
    * Fields are: 
    * IsActive - Boolean 
    * AssetMaster - Lookup list from AssetMaster
    */
    public async ensureRoomCalendarListFields(siteUrl: string, listInfo:IListInfo): Promise<boolean> {
        let isFieldCreated :boolean = false;
        try{
            const web = Web(siteUrl);
            await web.lists.getByTitle(listInfo.ListName).fields.addBoolean("IsActive");
            // TODO: DIPAL - CLEAR ALL CHOICE FIELDS
            await this.updateCalendarChoiceFieldOptions(siteUrl, listInfo.ListName, 'Category', []);
        } catch (error) {
            listInfo.ListError = error;
            return Promise.reject(error);
        }
        return isFieldCreated;
    }

    /**
   * @param {string} siteUrl
   * @param {string} listId
   * @param {string} fieldInternalName
   * @returns {Promise<boolean>}
   * @memberof spservices
   */
   public async updateCalendarChoiceFieldOptions(siteUrl: string, listId: string, fieldInternalName: string, options: string[]): Promise<boolean> {
    try {
      const web = Web(siteUrl);
      await web.lists.getByTitle(listId)
      .fields
      .getByInternalNameOrTitle(fieldInternalName)
      .update({
        Choices: {
          results: options
        }
      });
    } catch (error) {
      return Promise.reject(error);
    }
    return true;
  }

    /* 
    *  Create the list by listInfo
    */
    public async createListByListInfo(siteUrl: string, listInfo:IListInfo): Promise<IListInfo> {
        try {
            const web = Web(siteUrl);
            await web.lists.add(listInfo.ListName, listInfo.ListDescription, listInfo.ListType, true, { OnQuickLaunch: false });            
            return await this.ensureListByListInfo(siteUrl, listInfo);
        } catch (error) {
            listInfo.ListError = error;
            return Promise.reject(error);
        }
    }
}