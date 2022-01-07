import setSectors from "./setSectors";
import { getIntervalData } from "./getIntervalData";
import { AppData, Sector } from "../../operations/types";

function fetchIntervals() {
    return function CB(dispatch: Function, getStore:any) {
        getIntervalData(dispatch, getStore).then(res=>{
            debugger;
            const intervalData = res;

            // structuring the Sectore Data
            const store = getStore();
            const appData = store.AppData;
            const appDataDummy = JSON.parse(JSON.stringify(appData));
debugger;
            appDataDummy.Sectors.map((sec, index) => {
                sec.Data = intervalData;
            });
            debugger;
            dispatch(setSectors(appDataDummy));
        });
    }
}

export default fetchIntervals;
