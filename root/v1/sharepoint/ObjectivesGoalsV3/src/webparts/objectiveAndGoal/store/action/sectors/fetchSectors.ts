import setSectorFetchStart from "./setSectorFetchStart";
import setSectorFetchComplete from "./setSectorFetchComplete";
import setSectorFetchError from "./setSectorFetchError";

import setSectors from "./setSectors";

// import { useContext } from 'react';
// import SPService from "../../../../../services/SPService";
// import { UserContext } from "../../../components/Home";

import type { Sector } from '../../operations/types';

function fetchSectors() {
    return function CB(dispatch: Function, getStore:any) {
        debugger;
        const store = getStore();
        dispatch(setSectorFetchStart());
        let sectors: Sector[] = [];
        sectors.push({
            Title: "This is for testing",
            Id: 1,
            IsSelected: false,
            Data: {}
        });
        sectors.push({
            Title: "This is another testing",
            Id: 2,
            IsSelected: false,
            Data: {}
        });
        dispatch(setSectors(sectors));
        dispatch(setSectorFetchComplete());
        // const mainContext = store.SPContext; //useContext(UserContext);
        // let spService: SPService = null;
        // spService = new SPService(mainContext);
        // return spService.getSectorData()
        // .then(r=>{
        //     debugger;
        //      r.map(res=>{
        //          sectors.push({
        //           Title: res.Title,
        //           Id: res.ID,
        //           IsSelected: false,
        //           Data: {}
        //       });
        //     });
        //     debugger;
        //     dispatch(setSectors(sectors));
        //     dispatch(setSectorFetchComplete());
        // }, error => {
        //     console.error('onRejected function called: ' + error.message);
        //     dispatch(setSectorFetchError(error));
        //   });
        // dispatch(setSectorFetchError(error));
    }
}

export default fetchSectors;
