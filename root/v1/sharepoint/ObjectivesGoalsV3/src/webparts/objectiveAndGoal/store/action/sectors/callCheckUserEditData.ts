import { setSectors } from "./setSectorActions";
//import { getAppData } from "./getAppData";
import { AppData } from '../../operations/types';
//import { updateAppData } from './updateAppData';
import { checkUserEditData } from './checkUserEditData';

debugger;
function callCheckUserEditData(selectedId) {
    return function CB(dispatch: Function, getStore:any ) {      
        checkUserEditData(dispatch, getStore, selectedId).then(res=>{           
            const appData:AppData = res;
            dispatch(setSectors(appData));
        });
    }
}

export default callCheckUserEditData;