import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './UiBack.module.scss';



const UiBack = () => {

    const back = useNavigate()
    const handleBack = (e)=> {
        e.preventDefault();
        back(-1)
    }

    return (
        <a href='#' onClick={handleBack} className={s.href} >
            <span className={s.text}>Go Back</span>
        </a>
    );
}


export default UiBack;