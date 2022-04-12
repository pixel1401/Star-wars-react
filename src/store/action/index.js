export const ADD_FAVORITES = 'add-favorites';
export const DEL_FAVORITES = 'delate-favorites';


export const addFavoritesAc = (personInfo) => ({type:ADD_FAVORITES , info:personInfo});
export const delFavoritesAc = (personName) => ({ type: DEL_FAVORITES, info: personName});



// PEOPLE
export const PEOPLE_LIST = 'people-list';
export const CURRENT_PAGE = 'current-page';

export const getPeople = (people)=> ({type:PEOPLE_LIST , list:people});
export const setCurrentPage = (page)=> ({type:CURRENT_PAGE , page:page});

