import React from 'react';
import styles from './LoginPage.module.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

const LoginPage = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      setToken(response.data.token);
    } catch (error) {
      alert('Error en login.');
    }
  };

  return (
      <div className={styles.formContainer}> 
        <form onSubmit={handleSubmit} className={styles.containerGeneral}>
            <div className={styles.containerHijo}>
                <img className={styles.logo} src="/images/logo.png" alt="Logo del sitio"/>
                <div className={styles.containerLogin}>
                    <h1>Bienvenido a la Biblioteca Digital</h1>
                    <input type="email" placeholder="Ingresa tu correo" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Ingresa tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className={styles.buttonIniciarSesion} type="submit">Iniciar sesión</button>
                </div>
            </div>
            <hr className={styles.separator} />
            <div className={styles.containerHijo}>
                <h2>No tienes cuenta</h2>
                <h2>Regístrate acá</h2>
                <div className={styles.containerLogin}>
                    <button className={styles.buttonCrearCuenta} type="submit">Crear cuente</button>
                </div>
            </div>
            <hr className={styles.separator} />
            <div className={styles.containerHijo}>
                <h2>No tienes cuenta</h2>
                <div className={styles.containerLogin}>
                    <button className={styles.buttonIngresarInvitado} type="submit">Ingresar como invitado</button>
                </div>
            </div>
        </form>
      </div>
        
    
  );
};

export default LoginPage;