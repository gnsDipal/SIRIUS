import SPService from "../../../../../services/SPService";

interface organization {
    Id:number;
    Title: string;
    Data: {}
};

export const getOrganizationData = (dispatch: Function, getStore:any) => {
    const store = getStore();
    const organization:organization[] = [];
    const mainContext = store.SPContext; 
    let spService: SPService = null;
    spService = new SPService(mainContext);
    return spService.getOrganizationData()
        .then(r=>{
            debugger;
            r.map(res=>{
                organization.push({
                    Id: res.Id,
                    Title: res.Title,
                    Data: {}
                });
            });
        return organization;
    }, error => {
        console.error('onRejected function called: ' + error.message);
    });
}
