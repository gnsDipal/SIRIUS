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
      Sectors: Sector[];
  };

  export type Sector = {
    Id:number,
    Title:string,
    IsSelected:boolean,
    IntervalData: {}
  };

  export type Organization = {
    Id:number,
    Title:string,
    IsSelected:boolean,
    Goals: string;
    Interval: string;
    StatusPercentage: number;
    Data: {}
  };

  export type Department = {
    Id:number,
    Title:string,
    IsSelected:boolean,
    Goals: string;
    Interval: string;
    StatusPercentage: number;
    DepartmentId:number;
    Data: {}
  };

  export type Personal = {
    Id:number,
    Title:string,
    IsSelected:boolean,
    Goals: string;
    Interval: string;
    StatusPercentage: number;
    Data: {}
  };

  export type SetSPContext = {
    type: 'SET_SPCONTEXT',
    payload: {}
  };

  export type SPContext = {};

  export type GetOrganizationData = {
    type: 'GET_ORGANIZATION',
    payload: Object[]
  };

  export type SetOrganization = {
    type: 'SET_ORGANIZATION',
    //payload: Sector[]
    payload: Organization[]
  };

  export type GetDepartmentData = {
    type: 'GET_DEPARTMENT',
    payload: Object[]
  };

  export type SetDepartment = {
    type: 'SET_DEPARTMENT',
    payload: Personal[]
  };

  export type GetPersonalData = {
    type: 'GET_PERSONAL',
    payload: Object[]
  };

  export type SetPersonal = {
    type: 'SET_PERSONAL',
    payload: Personal[]
  };


  export type Actions =
  | GetSectors
  | SetSectors
  | SetSectorFetchStart
  | SetSectorFetchComplete
  | SetSectorFetchError
  | SetSPContext
  | GetOrganizationData
  | SetOrganization
  | GetDepartmentData
  | SetDepartment
  | GetPersonalData
  | SetPersonal
 
