import type { 
    SetSectors,
    SetSectorFetchComplete, 
    SetSectorFetchStart,
    SetSectorFetchError,
    SetSelectedSector
} from '../../operations/actionTypes';

import type { AppData, Sector } from '../../operations/types';

export const setSectors = (appData:AppData) : SetSectors => ({
    type: 'SET_SECTORS',
    payload: appData
});

export const setSectorFetchComplete = () : SetSectorFetchComplete => ({
    type: 'SET_SECTOR_FETCH_COMPLETE',
    payload: true
});

export const setSectorFetchStart = () : SetSectorFetchStart => ({
    type: 'SET_SECTOR_FETCH_START',
    payload: true
});

export const setSectorFetchError = (error:string) : SetSectorFetchError => ({
    type: 'SET_SECTOR_FETCH_ERROR',
    payload: error
});

export const setSelectedSector = (sectorId: number, isSelected:boolean) : SetSelectedSector => ({
    type: 'SET_SELECTED_SECTOR',
    payload: isSelected
});