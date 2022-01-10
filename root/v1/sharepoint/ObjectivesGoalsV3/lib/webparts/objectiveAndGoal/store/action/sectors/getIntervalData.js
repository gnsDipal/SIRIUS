import SPService from "../../../../../services/SPService";
;
export var getIntervalData = function (dispatch, getStore) {
    var store = getStore();
    var intervals = [];
    var mainContext = store.SPContext;
    var spService = null;
    spService = new SPService(mainContext);
    return spService.getIntervalsData()
        .then(function (r) {
        debugger;
        r.map(function (res) {
            intervals.push({
                Id: res.Id,
                Title: res.Title,
                Data: {}
            });
        });
        return intervals;
    }, function (error) {
        console.error('onRejected function called: ' + error.message);
    });
};
//# sourceMappingURL=getIntervalData.js.map