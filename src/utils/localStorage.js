

export const getStateLocalStorage = (reducerName)=> {
    return JSON.parse(localStorage.getItem(reducerName));
}

export const setStateToLocalStorage = (reducerName ,state)=> {
    localStorage.setItem(reducerName, JSON.stringify(state))
}