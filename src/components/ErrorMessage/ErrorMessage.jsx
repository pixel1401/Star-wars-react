import s from './ErrorMessage.module.scss';



const ErrorMessage = () => {
    return (
        <>
            <h3 className={`text ${s.text}`} >Error message 404</h3>
        </>
    );
}

export default ErrorMessage;