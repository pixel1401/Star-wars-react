import PropTypes from 'prop-types';
import cn from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { addFavoritesAc, delFavoritesAc } from '../../../store/action';

import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import s from './PersonPage.module.scss';





const PersonInfo = ({ person, name, img, }) => {

    let favoriteState = useSelector(state => state.favoriteReducer.persons).filter(el => el?.name === name);

    let isPersonFavorite = (favoriteState.length !== 0) ? true : false


    let [isFavorite, setFavorite] = useState(isPersonFavorite);

    useEffect(() => {
        setFavorite(isPersonFavorite)
    }, [favoriteState])



    const path = useLocation().pathname;
    const dispatch = useDispatch()

    const handleFavorites = (e) => {

        let btn = document.getElementById('person_btn');
        console.log(btn);

        if (isFavorite === false) {
            dispatch(addFavoritesAc({ name, img, path }))
            setFavorite(true);
            btn.classList.add(s.btn_active);
        } else {
            dispatch(delFavoritesAc({ name }))
            setFavorite(false);
            btn.classList.remove(s.btn_active);

        }

    }



    return (
        <div className={s.box}>
            
            <h3 className={s.name}>{name}</h3>
            <div className={s.img__box}>
                <img src={img} alt={name} className={s.img} />
                <button onClick={handleFavorites} data-favorite={isPersonFavorite} id='person_btn' className={cn(s.btn , (isPersonFavorite) && s.btn_active)}  >
                    <svg width="24px" height="24px" viewBox="-5.5 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 2.089v21.912l6.546-6.26 6.545 6.26v-21.912c-.012-1.156-.952-2.089-2.109-2.089-.026 0-.051 0-.077.001h.004-8.726c-.022-.001-.047-.001-.073-.001-1.158 0-2.098.933-2.109 2.088v.001z" /></svg>
                </button>
            </div>
            <ul className={s.row}>
                {person.map(({ title, data }) => {
                    return data && (
                        <li key={data} className={s.item}  >{title} : {data}</li>
                    )
                })}
            </ul>

        </div>
    );
}



export default PersonInfo;