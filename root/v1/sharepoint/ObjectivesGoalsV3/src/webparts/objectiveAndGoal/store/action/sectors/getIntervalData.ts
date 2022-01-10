import SPService from "../../../../../services/SPService";

interface interval {
    Id:number;
    Title: string;
    Data: {}
};

export const getIntervalData = (dispatch: Function, getStore:any) => {
    const store = getStore();
    const intervals:interval[] = [];
    const mainContext = store.SPContext; 
    let spService: SPService = null;
    spService = new SPService(mainContext);
    return spService.getIntervalsData()
        .then(r=>{
            debugger;
            r.map(res=>{
                intervals.push({
                    Id: res.Id,
                    Title: res.Title,
                    Data: {}
                });
            });
        return intervals;
    }, error => {
        console.error('onRejected function called: ' + error.message);
    });
}
