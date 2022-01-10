import SPService from "../../../../../services/SPService";

interface goal {
    Id:number;
    Title: string;
    Data: {}
};

export const getGoalsData = (dispatch: Function, getStore:any) => {
    const store = getStore();
    const goals:goal[] = [];
    const mainContext = store.SPContext; 
    let spService: SPService = null;
    spService = new SPService(mainContext);
    return spService.getGoalsData()
        .then(r=>{
            debugger;
            r.map(res=>{
                goals.push({
                    Id: res.Id,
                    Title: res.goal,
                    Data: {}
                });
            });
        return goals;
    }, error => {
        console.error('onRejected function called: ' + error.message);
    });
}
