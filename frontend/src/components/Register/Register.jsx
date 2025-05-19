import { useState } from 'react';
import axios from 'axios';
import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [rut, setRut] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');

   //Variables constantes para derivar a las otras páginas

   const navigate = useNavigate();

   const handleRedirectRegister = () => {
     navigate('/RegisterExitoso');
   };
 
   const handleRedirectLogin = () => {
     navigate('/Login');
   };
 
   //Confirma si el usuario está registrado o no
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/registro`, {
        rut,
        name,
        email,
        password,
        confirmPassword,
      });
      alert('Usuario registrado');
      navigate('/RegisterExitoso');
    } catch (error) {
      alert('Error en el registro');
    }
  };

  return (
    <div className={styles.containerGeneral}>
      <div className={styles.containerHijo}>
      <img className={styles.logo} src="/images/logo.png" alt="Logo del sitio"/>
      <div className={styles.containerLogin}>
        <h1 className={styles.tituloPrincipal}>Ingresa tus datos</h1>
        <form onSubmit={handleSubmit} className={styles.formulario}>
          <input type="text" placeholder="Rut" value={rut} onChange={(e) => setRut(e.target.value)} />
          <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="Confirma tu contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> 
          <button type="submit">Registrarse</button>
          <button type="button" onClick={handleRedirectLogin}>Cancelar</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Register;
