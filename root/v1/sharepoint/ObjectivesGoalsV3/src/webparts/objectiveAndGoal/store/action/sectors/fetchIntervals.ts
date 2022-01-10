import setSectors from "./setSectors";
import { getIntervalData } from "./getIntervalData";
import { AppData, Sector } from "../../operations/types";
debugger;
function fetchIntervals() {
    return function CB(dispatch: Function, getStore:any) {
        getIntervalData(dispatch, getStore).then(res=>{
            const intervalData = res;
            const store = getStore();
            const appData = store.AppData;
            const appDataDummy = JSON.parse(JSON.stringify(appData));
            appDataDummy.Sectors.map((sec, index) => {
                sec.Data = intervalData;
            });
            dispatch(setSectors(appDataDummy));
        });
    }
}

export default fetchIntervals;
