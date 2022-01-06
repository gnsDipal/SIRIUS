// import {SetAppData} from '../action/Action'
import type { Actions, Sector } from '../operations/types';

type State = {
    AppData: {};
    isSectorFetchStart: boolean;
    isSectorFetchComplete:boolean;
    sectorFetchError:any;
    SPContext:any;
}

const INIT_STATE = {
    AppData: {},
    isSectorFetchStart:false,
    isSectorFetchComplete:false,
    sectorFetchError:'',
    SPContext: {}
}

debugger;
 
 const RootReducer = (state: State = INIT_STATE, action: Actions)=>{     
    switch (action.type) {
        case 'SET_SPCONTEXT':
            return {
                ...state,
                SPContext: [...action.payload as any]
            };
        case 'SET_SECTOR_FETCH_START':
            return {
                ...state,
                isSectorFetchStart: true
            };
        case 'SET_SECTOR_FETCH_COMPLETE':
            return {
                ...state,
                isSectorFetchComplete: true
            };
        case 'SET_SECTOR_FETCH_ERROR':
            return {
                ...state,
                sectorFetchError: [...action.payload as any]
            };
        case 'SET_SECTORS':
            return {
                ...state,
                AppData: [...action.payload]
            }
        default:
            return state;
    }
 }

 export default RootReducer;