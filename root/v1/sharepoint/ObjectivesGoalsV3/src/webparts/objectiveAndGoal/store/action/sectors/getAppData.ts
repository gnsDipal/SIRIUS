import setSectorFetchStart from "./setSectorFetchStart";
import setSectorFetchComplete from "./setSectorFetchComplete";
import setSectorFetchError from "./setSectorFetchError";
import SPService from "../../../../../services/SPService";
import type { AppData, Sector } from '../../operations/types';

export const getAppData = (dispatch: Function, getStore:any) => {
    const store = getStore();
    dispatch(setSectorFetchStart());
    let appData:AppData = {Sectors:[]=[]};
    let sectors: Sector[] = [];
    const mainContext = store.SPContext; 
    let spService: SPService = null;
    spService = new SPService(mainContext);
    return spService.getSectorData()
        .then(r=>{
            r.map(res=>{
                sectors.push({
                Title: res.Title,
                Id: res.ID,
                IsSelected: false,
                Data: {}
            });
        });
        appData.Sectors = sectors;
        dispatch(setSectorFetchComplete());
        return appData;
    }, error => {
        console.error('onRejected function called: ' + error.message);
        dispatch(setSectorFetchError(error));
    });
}