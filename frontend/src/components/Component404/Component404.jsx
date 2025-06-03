import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Component404.module.css';

const Component404 = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/HomePage');
    };

    return(
    <div className={style.cuerpoContainer}>
        <div className={style.containerHijo}> 
            <img className={style.imageNoFound} src='/images/Image404.png'/>
            <div className={style.containerText}>
                <h1 className={style.tituloPrincipal}>404</h1>
                <h2>Has buscado en los estantes equivocados. Prueba en otro pasillo.</h2>
            </div>
            
        </div>
        <div>
            <button onClick={handleBack} className={style.backButton}>Volver al Home</button>
        </div>
    </div>
    )
}

export default Component404;