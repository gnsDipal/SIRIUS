import setSectors from "./setSectors";
import { getDepartmentData } from "./getDepartmentData";
import { getAppData } from "./getAppData";

// function fetchDepartment() {
//     return function CB(dispatch: Function, getStore:any) {
//         getAppData(dispatch, getStore).then(res=>{
//             const appData = res;
//             dispatch(setSectors(appData));
//         });
//     }
// }

function fetchDepartment() {
    return function CB(dispatch: Function, getStore:any) {
        getDepartmentData(dispatch, getStore).then(res=>{
            const departmentData = res;
            const store = getStore();
            const appData = store.AppData;
            const appDataDummy = JSON.parse(JSON.stringify(appData));
            appDataDummy.Sectors.map((sec, index) => {
                sec.Data = departmentData;
            });
            dispatch(setSectors(appDataDummy));
        });
    }
}

export default fetchDepartment;