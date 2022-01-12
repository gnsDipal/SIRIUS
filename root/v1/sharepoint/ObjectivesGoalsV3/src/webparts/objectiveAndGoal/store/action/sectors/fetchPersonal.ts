import setSectors from "./setSectors";
import { getPersonalData } from "./getPersonalData";
import { getAppData } from "./getAppData";

// function fetchPersonal() {
//     return function CB(dispatch: Function, getStore:any) {
//         getAppData(dispatch, getStore).then(res=>{
//             const appData = res;
//             dispatch(setSectors(appData));
//         });
//     }
// }

function fetchPersonal() {
    return function CB(dispatch: Function, getStore:any) {
        getPersonalData(dispatch, getStore).then(res=>{
            const personalData = res;
            const store = getStore();
            const appData = store.AppData;
            const appDataDummy = JSON.parse(JSON.stringify(appData));
            appDataDummy.Sectors.map((sec, index) => {
                sec.Data = personalData;
            });
            dispatch(setSectors(appDataDummy));
        });
    }
}

export default fetchPersonal;