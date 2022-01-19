import { setSectors } from "./setSectorActions";
import { getAppData } from "./getAppData";
import { AppData } from '../../operations/types';

// debugger;
 function fetchSectors() {
    return async function CB(dispatch: Function, getStore:any) {
       await getAppData(dispatch, getStore).then(async(res)=>{
         const appData:AppData = res;
            dispatch(setSectors(appData));
        });
    }
}

export default fetchSectors;
