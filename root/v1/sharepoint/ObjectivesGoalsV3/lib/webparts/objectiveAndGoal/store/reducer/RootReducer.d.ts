declare const RootReducer: (state: {
    objectiveAndGoalData: any[];
    AppData: any[];
}, action: any) => {
    objectiveAndGoalData: any;
    AppData: any[];
} | {
    AppData: any;
    objectiveAndGoalData: any[];
} | {
    AppData: {
        Key: number;
        Value: string;
        IsSelected: string;
    }[];
};
export default RootReducer;
//# sourceMappingURL=RootReducer.d.ts.map