import setSectorFetchStart from "./setSectorFetchStart";
import setSectorFetchComplete from "./setSectorFetchComplete";
import setSectorFetchError from "./setSectorFetchError";
import SPService from "../../../../../services/SPService";
export var getAppData = function (dispatch, getStore) {
    var store = getStore();
    dispatch(setSectorFetchStart());
    var appData = { Sectors: [] };
    var sectors = [];
    var mainContext = store.SPContext;
    var spService = null;
    spService = new SPService(mainContext);
    return spService.getSectorData()
        .then(function (r) {
        r.map(function (res) {
            sectors.push({
                Title: res.Title,
                Id: res.ID,
                IsSelected: false,
                Data: {}
            });
        });
        appData.Sectors = sectors;
        dispatch(setSectorFetchComplete());
        return appData;
    }, function (error) {
        console.error('onRejected function called: ' + error.message);
        dispatch(setSectorFetchError(error));
    });
};
//# sourceMappingURL=getAppData.js.map