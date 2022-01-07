import SPService from "../../../../../services/SPService";

export const getIntervalData = (dispatch: Function, getStore:any) => {
    debugger;
    const store = getStore();
    const intervals:string[] =[];
    const mainContext = store.SPContext; 
    let spService: SPService = null;
    spService = new SPService(mainContext);
    return spService.getIntervalsData()
        .then(r=>{
            debugger;
            r.map(res=>{
                intervals.push(
                    res.Title
                );
            });
        return intervals;
    }, error => {
        console.error('onRejected function called: ' + error.message);
    });
}
