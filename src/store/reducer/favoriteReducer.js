import { getStateLocalStorage } from "../../utils/localStorage";
import { addFavoritesAc, ADD_FAVORITES, DEL_FAVORITES } from "../action"


let localState =  getStateLocalStorage('favoriteReducer');
console.log(localState);
let defState = (localState) ? localState : (
    {
        persons:[]
    }
)
    
    

export const favoriteReducer = (state = defState, action) => {
    switch (action.type) {
        case ADD_FAVORITES:
            return {
                ...state,
                persons:[ ...state.persons ,action.info]
            }

        case DEL_FAVORITES : 
            let res = state.persons.filter( (el) => { 
                return el.name !== action.info.name
            });
            return {
                ...state,
                persons: [...res]
            }

        default: return state;
    }
}
