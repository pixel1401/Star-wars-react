import { combineReducers } from "redux";
import { favoriteReducer } from "./favoriteReducer";
import peopleReducer from "./peopleReducer";

export default combineReducers({
    favoriteReducer,
    peopleReducer
    
});

