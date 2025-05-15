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
      alert('Error en login');
    }
  };

  return (
    <body >
        <form onSubmit={handleSubmit} className={styles.containerGeneral}>
            <div className={styles.containerHijo}>
                <img className={styles.logo} src="/images/logo.png" alt="Logo del sitio"/>
                <div className={styles.containerLogin}>
                    <h1>Bienvenido a la Biblioteca Digital</h1>
                    <input type="email" placeholder="Ingresa tu correo" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Ingresa tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Iniciar sesión</button>
                </div>
            </div>
            <div className={styles.containerHijo}>
                <h2>No tienes cuenta</h2>
                <h2>Regístrate acá</h2>
                <div className={styles.containerLogin}>
                    <button type="submit">Crear cuente</button>
                </div>
            </div>
            <div className={styles.containerHijo}>
                <h2>No tienes cuenta</h2>
                <div className={styles.containerLogin}>
                    <button type="submit">Ingresar como invitado</button>
                </div>
            </div>
        </form>
    </body>
  );
};

export default LoginPage;