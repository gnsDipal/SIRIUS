import {SetAppData} from '../action/Action'
debugger;
const initialState = {
    objectiveAndGoalData: [],
    AppData:[]
 }
 
 const RootReducer = (state= initialState, action)=>{
     if (action.type === "LOAD_CONTENT") {
         return {
             ...state,
             objectiveAndGoalData: action.val,
         };
     }
     else if(action.type === "SET_APP_DATA"){
         return{
             ...state,
             AppData: action.val,
         }
     }
     return state;
 }

 export default RootReducer;