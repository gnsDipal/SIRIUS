import { WebPartContext } from "@microsoft/sp-webpart-base";
import { graph } from "@pnp/graph";
import { sp, Web} from '@pnp/sp/presets/all';
import { IAssetInfo } from '../models/IAssetInfo';

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

    public async getRoomLocation(siteUrl, listName) : Promise<{ key: string, text: string }[]> {
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

    public async getRoomAreaByLocation(siteUrl: string, listName:string, location:string) : Promise<{ key: string, text: string }[]> {
        let listData: { key: string, text: string }[] = [];
        listData.push({
            key: "0",
            text: "Select Area"
          });
        try {
          const web = Web(siteUrl);
          const results = await web.lists.getByTitle(listName).items.filter("ID eq " + location)
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

    public async getRoomBuildingByArea(siteUrl: string, listName:string, area:string) : Promise<{ key: string, text: string }[]> {
        let listData: { key: string, text: string }[] = [];
        listData.push({
            key: "0",
            text: "Select Building"
          });
        try {
          const web = Web(siteUrl);
          const results = await web.lists.getByTitle('RoomBuildingFloor').items.filter("ID eq " + area)
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

    public async getRoomSizeByBuilding(siteUrl: string, listName:string, building:string) : Promise<{ key: string, text: string }[]> {
        let listData: { key: string, text: string }[] = [];
        listData.push({
            key: "0",
            text: "Select Building"
          });
        try {
          const web = Web(siteUrl);
          const results = await web.lists.getByTitle(listName).items.filter("ID eq " + building)
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

    public async getRoomImagesBySize(siteUrl, roomSize) :Promise<string[]> {
        let imagePathes : string[] = [];
        // imagePathes.push(siteUrl + "/RoomPicture/MeetingRoom1.jpg");
        imagePathes.push(siteUrl + "/RoomPicture/MR13.jpg");
        /*try {
            const web = Web(siteUrl);
            const results = await web.lists.getByTitle('RoomPicture').items.filter("ID eq " + roomSize)
              .select("ID","Title")
              .getAll();
              if(results.length > 0) {
                  for (const option of results) {
                    // imagePathes.push({
                    //     text: option.Title
                    //   });
                  }
              }
        } catch (error) {
            return Promise.reject(error);
        }*/
        return imagePathes;
    }

    public async getAssetInfo(siteUrl) : Promise<IAssetInfo[]> {
      let listData: IAssetInfo[] = [];
      try {
        const web = Web(siteUrl);
        const results = await web.lists.getByTitle('AssetType').items
          .select("ID","Title", "AssetCount", "AssetImage")
          .get();
          if(results.length > 0) {
              for (const option of results) {
                  listData.push({
                    Id: option.ID,
                    Title: option.Title,
                    AssetImage: option.AssetImage,
                    AssetCount: option.AssetCount
                  });
              }
          }
      } catch (error) {
        return Promise.reject(error);
      }
      return listData;
  }
}