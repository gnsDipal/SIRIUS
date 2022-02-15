import type { AppData } from './types';
export declare type SetSPContext = {
    type: 'SET_SPCONTEXT';
    payload: {};
};
export declare type SetSectors = {
    type: 'SET_SECTORS';
    payload: AppData;
};
export declare type SetSectorFetchStart = {
    type: 'SET_SECTOR_FETCH_START';
    payload: true;
};
export declare type SetSectorFetchComplete = {
    type: 'SET_SECTOR_FETCH_COMPLETE';
    payload: true;
};
export declare type SetSectorFetchError = {
    type: 'SET_SECTOR_FETCH_ERROR';
    payload: string;
};
export declare type SetSelectedSector = {
    type: 'SET_SELECTED_SECTOR';
    payload: boolean;
};
export declare type Actions = SetSPContext | SetSectors | SetSectorFetchStart | SetSectorFetchComplete | SetSectorFetchError | SetSelectedSector;
//# sourceMappingURL=actionTypes.d.ts.map