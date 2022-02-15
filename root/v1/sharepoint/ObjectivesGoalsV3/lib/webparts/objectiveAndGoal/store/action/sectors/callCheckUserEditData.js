import { setSectors } from "./setSectorActions";
//import { updateAppData } from './updateAppData';
import { checkUserEditData } from './checkUserEditData';
debugger;
function callCheckUserEditData(selectedId) {
    return function CB(dispatch, getStore) {
        checkUserEditData(dispatch, getStore, selectedId).then(function (res) {
            var appData = res;
            dispatch(setSectors(appData));
        });
    };
}
export default callCheckUserEditData;
//# sourceMappingURL=callCheckUserEditData.js.map