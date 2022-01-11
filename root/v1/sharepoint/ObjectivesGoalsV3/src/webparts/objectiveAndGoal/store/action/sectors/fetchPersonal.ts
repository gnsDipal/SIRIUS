import setSectors from "./setSectors";
import { getAppData } from "./getAppData";

function fetchPersonal() {
    return function CB(dispatch: Function, getStore:any) {
        getAppData(dispatch, getStore).then(res=>{
            const appData = res;
            dispatch(setSectors(appData));
        });
    }
}

export default fetchPersonal;