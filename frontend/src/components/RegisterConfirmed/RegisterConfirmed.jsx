import axios from 'axios';
import styles from './RegisterConfirmed.module.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleRedirectLogin = () => {
    navigate('/Login');
  };

  return (
    <div className={`d-flex justify-content-center align-items-center text-center ${styles.containerGeneral}`}>
      <div className="w-100" style={{ maxWidth: '500px' }}>
        <img
          className={`img-fluid mb-3 ${styles.logo}`}
          src="/images/logo.png"
          alt="Logo del sitio"
        />
        <h1 className={`mb-3 ${styles.tituloPrincipal}`}>Registro Exitoso</h1>
        <h2 className="h5 mb-4">Vuelve al home e ingresa con tu cuenta</h2>
        <button type="button" className="btn btn-primary w-100 py-2" onClick={handleRedirectLogin}>
          Volver al home
        </button>
      </div>
    </div>
  );
};

export default Register;

