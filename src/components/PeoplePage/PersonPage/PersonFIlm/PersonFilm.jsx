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
        <ul>
            {personFilms
                .sort((a, b) => a.episode_id - b.episode_id)
                .map((e)=> {
                    return (<li key={e.title}>
                        <div>{e.title}</div>
                        <div>{e.episode_id}</div>
                    </li>)
                })    
            }
        </ul>
    );
}


export default PersonFilm;