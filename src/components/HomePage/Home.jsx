import { NavLink, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types';
import s from './Home.module.scss';
import { THEME_DARK, THEME_LIGHT, THEME_NEUTRAL, useTheme } from '../../context/ThemeProvider';

import lightImg from "./img/light-side.jpg";
import darkImg from "./img/dark-side.jpg";
import neutralImg from "./img/falcon.jpg";

const Home = () => {

    const isTheme = useTheme();


    return (
        <>  
            <h2 className={`header__title`}>Home Page</h2>


            <div className={s.box}>
                <button onClick={()=> isTheme.change(THEME_LIGHT)} className={s.btn} >
                    <img src={lightImg} alt="Logo" />
                    <span>Light</span>                    
                </button>
                <button onClick={() => isTheme.change(THEME_DARK)} className={s.btn} >
                    <img src={darkImg} alt="Logo" />
                    <span>Dark</span>  
                    
                </button>
                <button onClick={() => isTheme.change(THEME_NEUTRAL)} className={s.btn} >
                    <img src={neutralImg} alt="Logo" />
                    <span>Neutral</span>  
                </button>
            </div>

        </>
    );
}


export default Home;