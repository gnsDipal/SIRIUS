const initialState = {
    objectiveAndGoalData: [],
    AppData:[
             { TabHeader: [{key:1, value:"Organization"},
                           {key:2, value:"Department"},
                           {key:3, value:"Personal"}
                          ],
               TabHeaderSelectedId : 1, 
             },
             { TabHeader: [{key:1, value:"Department"}                            
                          ],
               TabHeaderSelectedId : 2, 
             }
            ]
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
        return {
            ...state,
            AppData : action.val,  
        }    
     }
     return state;
 }

 export default RootReducer;