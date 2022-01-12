import { WebPartContext } from "@microsoft/sp-webpart-base";
import { graph } from "@pnp/graph";
import { sp, Web} from '@pnp/sp/presets/all';
debugger;
export default class spRoomService {
    constructor(private context: WebPartContext) {
      // Setup Context to PnPjs and MSGraph
      sp.setup({
        spfxContext: this.context
      });
  
      graph.setup({
       spfxContext: this.context
      });
    }

    public async getLocations(siteUrl, listName) : Promise<{ key: string, text: string }[]> {
        let listData: { key: string, text: string }[] = [];
        listData.push({
            key: "0",
            text: "Select Location"
          });
        try {
          const web = Web(siteUrl);
          const results = await web.lists.getByTitle(listName).items
            .select("ID","Title")
            .get();
            if(results.length > 0) {
                for (const option of results) {
                    listData.push({
                      key: option.ID,
                      text: option.Title
                    });
                }
            }
        } catch (error) {
          return Promise.reject(error);
        }
        return listData;
    }

    public async getAreaBySelectedLocation(siteUrl: string, listName:string, lookupList:string, locationId:string) : Promise<{ key: string, text: string }[]> {
        let listData: { key: string, text: string }[] = [];
        listData.push({
            key: "0",
            text: "Select Area"
          });
        try {
          const web = Web(siteUrl);
          const results = await web.lists.getByTitle(listName).items.filter(lookupList + "/ID eq " + locationId)
            .select("ID","Title")
            .getAll();
            if(results.length > 0) {
                for (const option of results) {
                    listData.push({
                      key: option.ID,
                      text: option.Title
                    });
                }
            }
        } catch (error) {
          return Promise.reject(error);
        }
        return listData;
    }

    public async getDataBySelectedArea(siteUrl: string, listName:string, lookupList:string, areaId:string) : Promise<{ key: string, text: string }[]> {
        let listData: { key: string, text: string }[] = [];
        listData.push({
            key: "0",
            text: "Select Building"
          });
        try {
          const web = Web(siteUrl);
          const results = await web.lists.getByTitle(listName).items.filter(lookupList + "/ID eq " + areaId)
            .select("ID","Title")
            .getAll();
            if(results.length > 0) {
                for (const option of results) {
                    listData.push({
                      key: option.ID,
                      text: option.Title
                    });
                }
            }
        } catch (error) {
          return Promise.reject(error);
        }
        return listData;
    }

    public async getMasterDataBySelectedCategory(siteUrl: string, listName:string, lookupList:string, categoryId:string) : Promise<{ key: string, text: string }[]> {
        let listData: { key: string, text: string }[] = [];
        listData.push({
            key: "0",
            text: "Select Building"
          });
        try {
          const web = Web(siteUrl);
          const results = await web.lists.getByTitle(listName).items.filter(lookupList + "/ID eq " + categoryId)
            .select("ID","Title")
            .getAll();
            if(results.length > 0) {
                for (const option of results) {
                    listData.push({
                      key: option.ID,
                      text: option.Title
                    });
                }
            }
        } catch (error) {
          return Promise.reject(error);
        }
        return listData;
    }

    public async getImageBySelectedMaster(siteUrl:string, listName:string, id?:number) :Promise<string> {
        let imagePath : string = "https://gns11.sharepoint.com/sites/SiriusTeams/My%20Library%2FImageNotFound.png";
        // let imagePath = 'https://gns11.sharepoint.com/sites/SiriusTeams/RoomPicture/Forms/Thumbnails.aspx?id=%2Fsites%2FSiriusTeams%2FRoomPicture%2FMeetingRoom1%20%281%29%2Ejpg&parent=%2Fsites%2FSiriusTeams%2FRoomPicture'
        try {
          const web = Web(siteUrl);
          const results = await web.lists.getByTitle(listName).items.filter("ID eq " + id)
              .select("Image")
              .getAll();
              if(results.length > 0) {
                imagePath = results[0].Image.Url;
              }

        }
        catch (error){
          return Promise.reject(error);
        }
        return imagePath;
    }
}