import setSectors from "./setSectors";
import { getAppData } from "./getAppData";

function fetchSectors() {
    return function CB(dispatch: Function, getStore:any) {
        getAppData(dispatch, getStore).then(res=>{
            const appData = res;
            dispatch(setSectors(appData));
        });
    }
}

export default fetchSectors;
