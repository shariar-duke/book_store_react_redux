import { combineReducers } from "redux";
import bookReducer from "./books/reducer";
import filterReducer from "./searchAndFilter/reducer";

const rootReducer = combineReducers({
    books : bookReducer,
    filters : filterReducer
})


export default rootReducer