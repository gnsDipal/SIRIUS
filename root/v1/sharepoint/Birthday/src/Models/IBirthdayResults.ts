export interface IBirthdayResults {

    PrimaryQueryResult: {
      RelevantResults: {
        RowCount: number;
        Table: {
          Rows: {
            Cells: ICell[];
          }[];
        };
        TotalRows: number;
      };
    };
    error?: {
      code: string;
      message: string;
    };
}
  
  export interface ICell {
    Key: string;
    Value: string;
    ValueType: string;
  }