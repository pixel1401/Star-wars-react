import PropTypes from 'prop-types';
import s from './UiButton.module.scss';


const UiButton = ({
    text,
    click,
    disabled,

}) => {
    return (
        <>
         <button 
            onClick={click}
            disabled={disabled}
         >{text}</button>   
        </>
    );
}

// UiButton.propTypes = {
//     props: PropTypes.array,
// }

export default UiButton;