import type { 
    AppData, 
} from '../../operations/types';

debugger;
export const updateAppData = async(dispatch: Function, getStore:any, selectedId:any) => {
    const store =  getStore();
    //dispatch(setSectorFetchStart());
    let appData:AppData = {Sectors:[]=[]};
	let i=selectedId-1;
    
     appData.Sectors.map((sector, index)=>{

            if(index == i) { // for selected Tab         
                sector[index].IsSelected =true;
            } else if(index!= i) {
                sector[index].IsSelected =false;
            }  
       });
       return Promise.resolve(appData)
    
}