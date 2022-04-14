import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { getApiResource, changeHTTP } from '@utils/network';
import { withErrorApi } from '@hoc/withErrorApi';
import s from './SearchPage.module.scss';
import { API_SEARCH_PERSONS } from '../../constants/api';
import { getImgPerson, getPersonId } from '../../service/getPeopleData';
import SearchPersons from './SearchPersons';
import { useDispatch, useSelector } from 'react-redux';
import { setTextSearchAc, SET_TEXT_SEARCH } from '../../store/action';
import UiLoading from '../Ui/UiLoading/UiLoading';



const SearchPage = ({ setError }) => {

    const text = useSelector(state => state.SearchReducer.text);
    const dispatch = useDispatch()
    let [persons, setPersons] = useState(null);
    let [loading , setLoading] = useState(false);


    useEffect(()=> {
        timeOut(text)
    },[])


    const getPersons = async (value) => {
        const persons = await getApiResource(API_SEARCH_PERSONS + value);


        if (persons.results) {
            setError(false)

            let resPersons = persons.results.map(({ name, url }) => {

                let id = getPersonId(url);
                let img = getImgPerson(id);

                return {
                    name,
                    id,
                    img
                }
            })

            setPersons(resPersons);
            setLoading(false)
        } else {
            setError(true)
        }

    }


    
    
    
    const debounce = (callback, wait) => {
        let timeoutId = null;
        return (...args) => {
            window.clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => {
                callback.apply(null, args);
            }, wait);
        };
    }
    
    
    const timeOut = useCallback(
        debounce((text) => getPersons(text) , 500)
    , [])


    const handleChangeInput = (e) => {
        let text = e.target.value;
        dispatch(setTextSearchAc(text))
        // setText(text);
        setLoading(true);
        timeOut(text)
    }

    return (
        <>
            <h1 className='header__title'>Search page</h1>

            <div className={s.box}>
                <input type="text"
                    value={text}
                    onChange={handleChangeInput}
                    placeholder="Print person name"
                />
                {(loading)&& (
                    <UiLoading initClass={s.loading}/>
                )}
            </div>



            <SearchPersons
                persons={persons}
            />

        </>
    );
}


export default withErrorApi(SearchPage);