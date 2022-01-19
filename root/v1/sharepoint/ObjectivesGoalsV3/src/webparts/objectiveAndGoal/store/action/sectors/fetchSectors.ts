import { setSectors } from "./setSectorActions";
import { getAppData } from "./getAppData";
import { AppData } from '../../operations/types';

debugger;
function fetchSectors() {
    return function CB(dispatch: Function, getStore:any) {
        getAppData(dispatch, getStore).then(res=>{
            const appData:AppData = res;
            dispatch(setSectors(appData));
        });
    }
}

export default fetchSectors;
