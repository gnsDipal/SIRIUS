import type { 
    AppData, 
} from '../../operations/types';

debugger;
export const updateAppData = (dispatch: Function, getStore:any, selectedId:any) => {
    const store = getStore();
    //dispatch(setSectorFetchStart());
    let appData:AppData = {Sectors:[]=[]};
    appData=store.AppData;
	let i=selectedId-1;
    if(appData.Sectors[0].Id != undefined){
    appData.Sectors.map((sector, index)=>{
            if(index === i && i !== -1) { // for selected Tab         
                sector[index].IsSelected =true;        
            } else if(index !== i && i !== -1) {
                sector[index].IsSelected =false;
            }  
       });
    }
    //    return appData
       return Promise.resolve(appData);
    
}