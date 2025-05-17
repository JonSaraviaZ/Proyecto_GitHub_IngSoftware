
import axios from 'axios';
import styles from './RegisterConfirmed.module.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {

   //Variables constantes para derivar a las otras páginas

   const navigate = useNavigate();
 
   const handleRedirectLogin = () => {
     navigate('/Login');
   };

  return (
    <div className={styles.containerGeneral}>
        <img className={styles.logo} src="/images/logo.png" alt="Logo del sitio"/>
        <h1 className={styles.tituloPrincipal}>Registro Exitoso</h1>
        <h2>Vuelve al home e ingresa con tu cuenta</h2>
        <button type="button" onClick={handleRedirectLogin}>Volver al home</button>
      </div>
  );
};

export default Register;
