import setSectors from "./setSectors";
import { getIntervalData } from "./getIntervalData";
debugger;
function fetchIntervals() {
    return function CB(dispatch, getStore) {
        getIntervalData(dispatch, getStore).then(function (res) {
            var intervalData = res;
            var store = getStore();
            var appData = store.AppData;
            var appDataDummy = JSON.parse(JSON.stringify(appData));
            appDataDummy.Sectors.map(function (sec, index) {
                sec.Data = intervalData;
            });
            dispatch(setSectors(appDataDummy));
        });
    };
}
export default fetchIntervals;
//# sourceMappingURL=fetchIntervals.js.map