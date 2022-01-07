import setSectorFetchStart from "./setSectorFetchStart";
import setSectorFetchComplete from "./setSectorFetchComplete";
import setSectorFetchError from "./setSectorFetchError";
import setSectors from "./setSectors";
// import { useContext } from 'react';
import SPService from "../../../../../services/SPService";
debugger;
function fetchSectors() {
    return function CB(dispatch, getStore) {
        debugger;
        var store = getStore();
        dispatch(setSectorFetchStart());
        var sectors = [];
        debugger;
        var mainContext = store.SPContext;
        var spService = null;
        spService = new SPService(mainContext);
        spService.getSectorData()
            .then(function (r) {
            r.map(function (res) {
                sectors.push({
                    Title: res.Title,
                    Id: res.ID,
                    IsSelected: false,
                    Data: {}
                });
            });
            debugger;
            dispatch(setSectors(sectors));
            dispatch(setSectorFetchComplete());
        }, function (error) {
            console.error('onRejected function called: ' + error.message);
            dispatch(setSectorFetchError(error));
        });
    };
}
export default fetchSectors;
//# sourceMappingURL=fetchSectors.js.map