import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRedirectRegister = () => {
    navigate("/RegisterPage");
  };
  const handleRedirectHome = () => {
    navigate("/HomePage");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
        email,
        password,
      });
      setToken(response.data.token);
      navigate("/HomePage");
    } catch (error) {
      alert("Error en login");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <form onSubmit={handleSubmit} className={`p-4 rounded shadow bg-light w-100 ${styles.containerGeneral}`} style={{ maxWidth: "500px" }}>
        <div className="text-center mb-4">
          <img className="mb-3" src="/images/logo.png" alt="Logo del sitio" style={{ width: "72px", height: "69px" }} />
          <h1 className={`mb-3 fs-1 fs-md-2 fs-lg-3 ${styles.tituloPrincipal}`}>Bienvenido a la Biblioteca Digital</h1>
        </div>

        <div className="mb-3">
          <input
            className="form-control text-center"
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control text-center"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-warning w-100 mb-3">
          Iniciar sesión
        </button>

        <hr />

        <div className="text-center mb-3">
          <h2 className={`mb-3 fs-5 ${styles.tituloSecundario}`} >¿No tienes cuenta?</h2>
          <h2 className={`mb-3 fs-5 ${styles.tituloSecundario}`}>Regístrate acá</h2>
          <button type="button" onClick={handleRedirectRegister} className="btn btn-outline-secondary custom-hover w-100 mt-6">
            Crear cuenta
          </button>
        </div>

        <hr />

        <div className="text-center">
          <h2 className={`mb-3 fs-5 ${styles.tituloSecundario}`}>Ingresar como invitado</h2>
          <button type="button" onClick={handleRedirectHome} className="btn btn-outline-secondary w-100 mt-2">
            Ingresar como invitado
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

// Código previo sin bootstrap

// import { Link } from "react-router-dom";
// import React from 'react';
// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import styles from './Login.module.css';


// const Login = ({ setToken }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const navigate = useNavigate();

//   const handleRedirectRegister = () => {
//     navigate('/RegisterPage');
//   };
//   const handleRedirectHome = () => {
//     navigate('/HomePage');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, { email, password });
//       setToken(response.data.token);
//       navigate('/HomePage');
//     } catch (error) {
//       alert('Error en login');
//     }
//   };

//   return (
    
//     <form onSubmit={handleSubmit} className={styles.containerGeneral}>
//       <div className={styles.containerHijo}>
//         <img className={styles.logo} src="/images/logo.png" alt="Logo del sitio"/>
//         <div className={styles.containerLogin}>
//           {/* iniciar sesión */}
//           <h1 className={styles.tituloPrincipal}>Bienvenido a la Biblioteca Digital</h1>
//           <input className={styles.inputDatos} type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
//           <input className={styles.inputDatos} type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
//           <button className={styles.buttonIniciarSesion} type="submit">Iniciar sesión</button>
//         </div>
//         <hr className={styles.separator} />
//         <div className={styles.containerLogin}>
//           {/* Registrarse */}
//           <h2 className={styles.tituloSecundario}>No tienes cuenta</h2>
//           <h2 className={styles.tituloSecundario}>Regístrate acá</h2>
//           <div className={styles.containerLogin}>
//               <button type="button" className={styles.buttonCrearCuenta} onClick={handleRedirectRegister}>Crear cuenta</button>
//           </div>
//         </div>
//         <hr className={styles.separator} />
//         {/* Iniciar como invitado */}
//         <div className={styles.containerLogin}>
//           <h2 className={styles.tituloSecundario}>Ingresar como invitado</h2>
//           <div className={styles.containerLogin}>
//               <button className={styles.buttonIngresarInvitado} onClick={handleRedirectHome} type="button">Ingresar como invitado</button>
//           </div>
//       </div>
//       </div>
//     </form>
    
    
//   );
// };

// export default Login;