import type { AppData } from './types';

export type SetSPContext = {
    type: 'SET_SPCONTEXT',
    payload: {}
  };

export type SetSectors = {
    type: 'SET_SECTORS',
    payload: AppData
  };
  
  export type SetSectorFetchStart = {
    type: 'SET_SECTOR_FETCH_START',
    payload: true;
  };

  export type SetSectorFetchComplete = {
    type: 'SET_SECTOR_FETCH_COMPLETE',
    payload: true;
  };

  export type SetSectorFetchError = {
    type: 'SET_SECTOR_FETCH_ERROR',
    payload: string
  };

export type Actions =
  | SetSPContext
  | SetSectors
  | SetSectorFetchStart
  | SetSectorFetchComplete
  | SetSectorFetchError
