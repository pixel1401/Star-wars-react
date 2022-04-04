import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

const Header = () => {
    return (
        <div className={s.header__container}>
            <NavLink to="/people?page=1" className={s.header__item} >People</NavLink>
            <NavLink to="/" className={s.header__item} >Home</NavLink>
            <NavLink to="/not-found" className={s.header__item}>Not Found</NavLink>
        </div>
    );
}

// Header.propTypes = {
//     props: PropTypes.array,
// }

export default Header;