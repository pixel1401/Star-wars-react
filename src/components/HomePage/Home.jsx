import { NavLink, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types';
import s from './Home.module.scss';


const Home = () => {
    return (
        <>  
            <h2 className={`header__title`}>Home Page</h2>
        </>
    );
}

Home.propTypes = {
    // props: PropTypes.array,
}

export default Home;