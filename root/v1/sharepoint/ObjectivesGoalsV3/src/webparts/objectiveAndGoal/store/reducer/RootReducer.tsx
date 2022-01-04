const initialState = {
    objectiveAndGoalData: []
 }
 
 const RootReducer = (state= initialState, action)=>{
     if (action.type === "LOAD_CONTENT") {
         return {
             ...state,
             objectiveAndGoalData: action.val,
         };
     }
     return state;
 }

 export default RootReducer;