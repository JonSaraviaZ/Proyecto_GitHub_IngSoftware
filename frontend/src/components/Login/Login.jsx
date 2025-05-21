import { Link } from "react-router-dom";
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';


const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRedirectRegister = () => {
    navigate('/RegisterPage');
  };
  const handleRedirectHome = () => {
    navigate('/HomePage');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, { email, password });
      setToken(response.data.token);
      navigate('/HomePage');
    } catch (error) {
      alert('Error en login');
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className={styles.containerGeneral}>
      <div className={styles.containerHijo}>
        <img className={styles.logo} src="/images/logo.png" alt="Logo del sitio"/>
        <div className={styles.containerLogin}>
          {/* iniciar sesión */}
          <h1 className={styles.tituloPrincipal}>Bienvenido a la Biblioteca Digital</h1>
          <input className={styles.inputDatos} type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className={styles.inputDatos} type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className={styles.buttonIniciarSesion} type="submit">Iniciar sesión</button>
        </div>
        <hr className={styles.separator} />
        <div className={styles.containerLogin}>
          {/* Registrarse */}
          <h2 className={styles.tituloSecundario}>No tienes cuenta</h2>
          <h2 className={styles.tituloSecundario}>Regístrate acá</h2>
          <div className={styles.containerLogin}>
              <button type="button" className={styles.buttonCrearCuenta} onClick={handleRedirectRegister}>Crear cuenta</button>
          </div>
        </div>
        <hr className={styles.separator} />
        {/* Iniciar como invitado */}
        <div className={styles.containerLogin}>
          <h2 className={styles.tituloSecundario}>Ingresar como invitado</h2>
          <div className={styles.containerLogin}>
              <button className={styles.buttonIngresarInvitado} onClick={handleRedirectHome} type="button">Ingresar como invitado</button>
          </div>
      </div>
      </div>
    </form>
    
    
  );
};

export default Login;
