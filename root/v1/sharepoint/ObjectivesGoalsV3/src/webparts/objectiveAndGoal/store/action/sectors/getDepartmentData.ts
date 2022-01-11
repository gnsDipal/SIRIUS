import SPService from "../../../../../services/SPService";

interface department {
    Id:number;
    Title: string;
    Data: {}
};

export const getDepartmentData = (dispatch: Function, getStore:any) => {
    const store = getStore();
    const department:department[] = [];
    const mainContext = store.SPContext; 
    let spService: SPService = null;
    spService = new SPService(mainContext);
    return spService.getDepartmentData()
        .then(r=>{
            debugger;
            r.map(res=>{
                department.push({
                    Id: res.Id,
                    Title: res.Title,
                    Data: {}
                });
            });
        return department;
    }, error => {
        console.error('onRejected function called: ' + error.message);
    });
}
