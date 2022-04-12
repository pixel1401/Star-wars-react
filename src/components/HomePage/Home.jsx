import { NavLink, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types';
import s from './Home.module.scss';
import { THEME_DARK, THEME_LIGHT, THEME_NEUTRAL, useTheme } from '../../context/ThemeProvider';


const Home = () => {

    const isTheme = useTheme();


    return (
        <>  
            <h2 className={`header__title`}>Home Page</h2>


            <div>
                <button onClick={()=> isTheme.change(THEME_LIGHT)} >Light</button>
                <button onClick={()=> isTheme.change(THEME_DARK)} >Dark</button>
                <button onClick={()=> isTheme.change(THEME_NEUTRAL)} >Neutral</button>
            </div>

        </>
    );
}


export default Home;