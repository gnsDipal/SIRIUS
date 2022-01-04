import {DepartmentSector, PersonalSector} from '../action/Action'
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
     else if (action.type === "SET_TAB_HEADER") {
        return {
            ...state,
            AppData : action.val,
        }    
     }
     else if (action.type === "SET_TAB_HEADER_SELECTED_ID") {
         if(action.val === '1'){
            return {
                AppData : DepartmentSector,  
            }  
         }
         else if(action.val === '2'){
             return{
                 AppData : PersonalSector
             }
         }
          
     }
     return state;
 }

 export default RootReducer;