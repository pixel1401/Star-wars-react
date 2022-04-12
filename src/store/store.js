import {createStore} from 'redux';
import { setStateToLocalStorage } from '../utils/localStorage';
import reducers from './reducer';

const store = createStore(reducers);



store.subscribe(()=> {
    let favoriteState = store.getState().favoriteReducer;
    setStateToLocalStorage('favoriteReducer',favoriteState);
})


window.store = store;


export default store;