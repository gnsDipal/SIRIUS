  export type AppData = {
      Sectors: Sector[];
  };

  export type Sector = {
    Id:number,
    Title:string,
    IsSelected:boolean,
    Data: {}
  };

  export type SectorData = {
    Yearly: {},
    Quartly: {},
    Monthly: {}
  }

  export type DepartmentSector = {
    Id:number,
    Title:string,
    IsSelected:boolean,
    Data: DepartmentSectorData[]
  }

  export type DepartmentSectorData = {
    Title: string,
    DepartmentName: string,
    DepartmentId: number,
    IsSelected: boolean,
    DepartmentData: SectorData
  }

  export type SPContext = {};
