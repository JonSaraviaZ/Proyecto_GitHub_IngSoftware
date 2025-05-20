import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setToken }) => {
<<<<<<< Updated upstream
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const handleRedirectRegister = () => {
    navigate('/Register');
  };

  const handleRedirectHome = () => {
    navigate('/homepage');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de campos vacíos
    if (!email || !password) {
      setErrorMsg('Por favor completa todos los campos');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        console.log('Login exitoso:', data);
        localStorage.setItem('token', data.token);
        setToken(data.token);
        navigate('/homepage');
      } else {
        setErrorMsg(data.message || 'Error al iniciar sesión');
      }
    } catch (err) {
      console.error('Error en login:', err);
      setErrorMsg('Error del servidor');
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.containerGeneral}>
        <div className={styles.containerHijo}>
          <img className={styles.logo} src="/images/logo.png" alt="Logo del sitio" />
          <div className={styles.containerLogin}>
            <h1 className={styles.tituloPrincipal}>Bienvenido a la Biblioteca Digital</h1>

            {errorMsg && <p className={styles.errorMsg}>{errorMsg}</p>}

            <label htmlFor="email" className={styles.label}>Correo electrónico</label>
            <input
              id="email"
              className={styles.inputDatos}
              type="email"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password" className={styles.label}>Contraseña</label>
            <input
              id="password"
              className={styles.inputDatos}
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className={styles.buttonIniciarSesion} type="submit">
              Iniciar sesión
            </button>
          </div>
        </div>

        <hr className={styles.separator} />

        <div className={styles.containerHijo}>
          <h2 className={styles.tituloSecundario}>No tienes cuenta</h2>
          <h2 className={styles.tituloSecundario}>Regístrate acá</h2>
          <div className={styles.containerLogin}>
            <button
              type="button"
              className={styles.buttonCrearCuenta}
              onClick={handleRedirectRegister}
            >
              Crear cuenta
            </button>
          </div>
        </div>

        <hr className={styles.separator} />

        <div className={styles.containerHijo}>
          <div className={styles.containerLogin}>
            <button
              className={styles.buttonIngresarInvitado}
              onClick={handleRedirectHome}
              type="button"
            >
              Ingresar como invitado
            </button>
          </div>
        </div>
      </form>
=======
  return (
    <div className={styles.formContainer}>
      <Login setToken={setToken} /> {/* <-- Corregido */}
>>>>>>> Stashed changes
    </div>
  );
};

export default LoginPage;
