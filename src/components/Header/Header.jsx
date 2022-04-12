import cn from "classnames";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';


import lightImg from './img/icon/lightsaber.svg';
import darkImg from './img/icon/droid.svg';
import neutralImg from './img/icon/space-station.svg';
import { THEME_DARK, THEME_LIGHT, THEME_NEUTRAL, useTheme } from "../../context/ThemeProvider";
import { useEffect, useState } from "react";






const Header = () => {
    let page = useSelector(state => state.peopleReducer.currentPage)
    let favoriteCount = useSelector(state => state.favoriteReducer.persons).length

    let [icon, setIcon] = useState(THEME_LIGHT);
    const isTheme = useTheme();


    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT: setIcon(lightImg); break
            case THEME_DARK: setIcon(darkImg); break
            case THEME_NEUTRAL: setIcon(neutralImg); break

            default: setIcon(lightImg);
        }
    } , [isTheme])


    return (
        <div className={s.header__container}>
            <img src={icon} alt="icon" width={55} height={55} />
            <NavLink to="/" className={s.header__item} >Home</NavLink>
            <NavLink to={`/people?page=${page}`} className={s.header__item} >People</NavLink>
            <NavLink to="/search" className={s.header__item}>Search</NavLink>
            <NavLink to="/not-found" className={s.header__item}>Not Found</NavLink>
            <NavLink to="/fail" className={s.header__item}>Fail</NavLink>
            <div className={s.header__favorite}>
                <NavLink to="/favorite" >
                    <svg width="24px" height="24px" viewBox="-5.5 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 2.089v21.912l6.546-6.26 6.545 6.26v-21.912c-.012-1.156-.952-2.089-2.109-2.089-.026 0-.051 0-.077.001h.004-8.726c-.022-.001-.047-.001-.073-.001-1.158 0-2.098.933-2.109 2.088v.001z" /></svg>
                    <span className={s.header__favorite_count}>{favoriteCount}</span>
                </NavLink>
            </div>

        </div>
    );
}



export default Header;