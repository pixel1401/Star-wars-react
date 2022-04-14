import PropTypes from 'prop-types';
import { getPersonFilms } from '@service/getPeopleData';
import s from '../PersonPage.module.scss';
import { useEffect, useState } from 'react';


const PersonFilm = ({films}) => {

    let [personFilms , setPersonFilms]= useState([]);

    useEffect(()=> {
        (async()=> {
            let res = await getPersonFilms(films);
            setPersonFilms(res);
        })()
    },[])

    return (
        <ul className={s.film__box}>
            {personFilms
                .sort((a, b) => a.episode_id - b.episode_id)
                .map((e)=> {
                    return (<li key={e.title}>
                        <div>Episode  {e.episode_id}</div>
                        <div>{e.title}</div>
                    </li>)
                })    
            }
        </ul>
    );
}


export default PersonFilm;