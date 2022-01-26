import SPService from "../../../../../services/SPService";
//import { loggedInUserId } from "../../../../../services/SPService";
import type { 
    AppData, 
} from '../../operations/types';

debugger;
export const checkUserEditData = (dispatch: Function, getStore:any, selectedId:any) => {
    const store = getStore();
    //dispatch(setSectorFetchStart());
    const mainContext = store.SPContext; 
    let spService: SPService = null;
    spService = new SPService(mainContext);
    let orgAdminData = spService.getOrganizationAdminData();
    let deptAdminData = spService.getDepartmentOptionsData();
    

    let appData:AppData = {Sectors:[]=[]};
    let newAppData:AppData = {Sectors:[]=[]};
    appData=store.AppData;
	let i=selectedId-1;
    if(i !== -1){
    appData.Sectors.map((sector, index)=>{
            if(index === i && i !== -1) { // for selected Tab                         
                newAppData.Sectors[index] = {
                    Id: sector.Id,
                    Title: sector.Title,
                    Data: sector.Data,
                    IsSelected: true,
                    IsEditable: sector.IsEditable
                   }      
            } else if(index !== i && i !== -1) {               
                newAppData.Sectors[index] = {
                    Id: sector.Id,
                    Title: sector.Title,
                    Data: sector.Data,
                    IsSelected: false,
                    IsEditable: sector.IsEditable,
                } 
            }  
       });
    }
     
    //    return appData
    if(appData.Sectors.length !== 0 && newAppData.Sectors.length === 0)
        return Promise.resolve(appData);
    if(newAppData.Sectors.length !== 0 )
       return Promise.resolve(newAppData);
    
}