import PropTypes from 'prop-types';
import s from './NotFoundPage.module.scss';
import img from './img/not-found.jpg';
import { useLocation } from 'react-router';

const NotFoundPage = () => {
    let location = useLocation();
    return (
        <div className={s.box}>
            <h3 className={`header__title  ${s.title}`}>Not found</h3>
            <img  src={img} className={s.img} alt="aw" />
            <div className={s.path}>No math for <u>{location.pathname}</u></div>
        </div>
    );
}



export default NotFoundPage;