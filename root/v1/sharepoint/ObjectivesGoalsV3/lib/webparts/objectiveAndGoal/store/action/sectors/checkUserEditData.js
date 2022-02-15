import SPService from "../../../../../services/SPService";
debugger;
export var checkUserEditData = function (dispatch, getStore, selectedId) {
    var store = getStore();
    //dispatch(setSectorFetchStart());
    var mainContext = store.SPContext;
    var spService = null;
    spService = new SPService(mainContext);
    var orgAdminData = spService.getOrganizationAdminData();
    var deptAdminData = spService.getDepartmentOptionsData();
    var appData = { Sectors: [] };
    var newAppData = { Sectors: [] };
    appData = store.AppData;
    var i = selectedId - 1;
    if (i !== -1) {
        appData.Sectors.map(function (sector, index) {
            if (index === i && i !== -1) { // for selected Tab                         
                newAppData.Sectors[index] = {
                    Id: sector.Id,
                    Title: sector.Title,
                    Data: sector.Data,
                    IsSelected: true,
                    IsEditable: sector.IsEditable
                };
            }
            else if (index !== i && i !== -1) {
                newAppData.Sectors[index] = {
                    Id: sector.Id,
                    Title: sector.Title,
                    Data: sector.Data,
                    IsSelected: false,
                    IsEditable: sector.IsEditable,
                };
            }
        });
    }
    //    return appData
    if (appData.Sectors.length !== 0 && newAppData.Sectors.length === 0)
        return Promise.resolve(appData);
    if (newAppData.Sectors.length !== 0)
        return Promise.resolve(newAppData);
};
//# sourceMappingURL=checkUserEditData.js.map