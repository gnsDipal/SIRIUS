import { setSectors } from "./setSectorActions";
import { updateAppData } from './updateAppData';
debugger;
function callUpdateAppData(selectedId) {
    return function CB(dispatch, getStore) {
        updateAppData(dispatch, getStore, selectedId).then(function (res) {
            var appData = res;
            dispatch(setSectors(appData));
        });
    };
}
export default callUpdateAppData;
//# sourceMappingURL=callUpdateAppData.js.map