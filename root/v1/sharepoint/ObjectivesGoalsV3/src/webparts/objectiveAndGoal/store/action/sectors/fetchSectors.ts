import setSectorFetchStart from "./setSectorFetchStart";
import setSectorFetchComplete from "./setSectorFetchComplete";
import setSectorFetchError from "./setSectorFetchError";

import setSectors from "./setSectors";

// import { useContext } from 'react';
import SPService from "../../../../../services/SPService";
// import { UserContext } from "../../../components/Home";

// import initialPayloadData from '../../../../../services/initPayload';

import type { Sector } from '../../operations/types';

function fetchSectors() {
    return function CB(dispatch: Function, getStore:any) {
        debugger;
        
        const store = getStore();
        dispatch(setSectorFetchStart());
        let sectors: Sector[] = [];
        debugger;
        const mainContext = store.SPContext; 
        let spService: SPService = null;
        spService = new SPService(mainContext);
        spService.getSectorData()
        .then(r=>{
            r.map(res=>{
                sectors.push({
                Title: res.Title,
                Id: res.ID,
                IsSelected: false,
                Data: {}
            });
            });
            debugger;
            dispatch(setSectors(sectors));
            dispatch(setSectorFetchComplete());
        }, error => {
            console.error('onRejected function called: ' + error.message);
            dispatch(setSectorFetchError(error));
        });
    }
}

export default fetchSectors;
