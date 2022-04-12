import { PEOPLE_LIST, CURRENT_PAGE  } from "../action"


let defState = {
    list: [],
    currentPage: 1
}



const peopleReducer = (state = defState , action) => {
    switch(action.type) {
        case PEOPLE_LIST: 
            return {
                ...state,
                list: action.list
            }

        case CURRENT_PAGE: 
            return {
                ...state,
                currentPage:action.page
            }

        default: return state
    }
}



export default peopleReducer;