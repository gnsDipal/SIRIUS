import SPService from "../../../../../services/SPService";

interface personal {
    Id:number;
    Title: string;
    Data: {}
};

export const getPersonalData = (dispatch: Function, getStore:any) => {
    const store = getStore();
    const personal:personal[] = [];
    const mainContext = store.SPContext; 
    let spService: SPService = null;
    spService = new SPService(mainContext);
    return spService.getPersonalData()
        .then(r=>{
            debugger;
            r.map(res=>{
                personal.push({
                    Id: res.Id,
                    Title: res.Title,
                    Data: {}
                });
            });
        return personal;
    }, error => {
        console.error('onRejected function called: ' + error.message);
    });
}
