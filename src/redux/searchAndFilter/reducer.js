
import { FILTERBOOK, SEARCHBOOK } from "./actionTypes";
import initialState from "./initialState";

const reducer =(state = initialState , action) => 
{
    switch(action.type) 
    {
        case SEARCHBOOK : 
           return {
            ...state, 
            searchText : action.payload
           }

        
        case FILTERBOOK : 
          return {
            ...state,
            featured : action.payload
          }
         
        default: 
          return state
    }
}
export default reducer;