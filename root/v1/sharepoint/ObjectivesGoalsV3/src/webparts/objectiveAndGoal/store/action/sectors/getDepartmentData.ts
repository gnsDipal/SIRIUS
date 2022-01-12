import SPService from "../../../../../services/SPService";

interface department {
    Id:number;
    Title: string;
    Goals: string;
    Interval: string;
    StatusPercentage: number;
    DepartmentId:number;
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
                    Goals: res.Goal,
                    Interval: res.Interval,
                    StatusPercentage:res.StatusPercentage,
                    DepartmentId:res.DepartmentId,
                    Data: {}
                });
            });
        return department;
    }, error => {
        console.error('onRejected function called: ' + error.message);
    });
}
