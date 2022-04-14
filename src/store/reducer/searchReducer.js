import { SET_TEXT_SEARCH } from "../action";



const initState = {
    text:''
}

const SearchReducer = (state = initState ,action) => {
    switch(action.type) {
        case SET_TEXT_SEARCH: 
            return {
                ...state,
                text:action.text
            }
        default: return state
    }
}


export default SearchReducer;