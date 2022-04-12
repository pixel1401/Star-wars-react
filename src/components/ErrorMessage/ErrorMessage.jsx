import s from './ErrorMessage.module.scss';


import videoPath from './han-solo.mp4';




const ErrorMessage = () => {
    return (
        <>
            <h3 className={`header__title ${s.text}`} >The dark side of the force has won.<br/>We cannot display data.<br/>Come back when we fix everything</h3>
            <video src={videoPath}
                autoPlay
                loop
                className={s.video}
            ></video>
        </>
    );
}

export default ErrorMessage;