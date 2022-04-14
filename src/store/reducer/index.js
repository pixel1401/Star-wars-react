import { combineReducers } from "redux";
import { favoriteReducer } from "./favoriteReducer";
import peopleReducer from "./peopleReducer";
import SearchReducer from "./searchReducer";

export default combineReducers({
    favoriteReducer,
    peopleReducer,
    SearchReducer
    
});

