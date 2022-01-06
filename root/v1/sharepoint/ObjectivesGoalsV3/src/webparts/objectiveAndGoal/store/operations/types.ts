  export type GetSectors = {
    type: 'GET_SECTORES',
    payload: Object[]
  };

  export type SetSectors = {
    type: 'SET_SECTORS',
    payload: Sector[]
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

  export type AppData = {
      sectors: Sector[];
  };

  export type Sector = {
    Id:number,
    Title:string,
    IsSelected:boolean,
    Data: {}
  };

  export type SetSPContext = {
    type: 'SET_SPCONTEXT',
    payload: object
  };

  export type SPContext = {};

  export type Actions =
  | GetSectors
  | SetSectors
  | SetSectorFetchStart
  | SetSectorFetchComplete
  | SetSectorFetchError
  | SetSPContext
