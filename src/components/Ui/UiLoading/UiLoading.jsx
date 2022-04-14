import PropTypes from 'prop-types';
import cn from "classnames"
import s from './UiLoading.module.scss';


const UiLoading = ({initClass}) => { 
    return (
        <>
            <div className={cn(s.loader, initClass)}></div>
        </>
    );
}



export default UiLoading;