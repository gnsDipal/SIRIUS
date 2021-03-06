import { setSectors } from "./setSectorActions";
//import { getAppData } from "./getAppData";
import { AppData } from '../../operations/types';
import { updateAppData } from './updateAppData';


debugger;
function callUpdateAppData(selectedId) {
    return function CB(dispatch: Function, getStore:any ) {      
        updateAppData(dispatch, getStore, selectedId).then(res=>{           
            const appData:AppData = res;
            dispatch(setSectors(appData));
        });
    }
}

export default callUpdateAppData;