import { useState } from 'react';
import axios from 'axios';
import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [rut, setRut] = useState('');
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');

  const navigate = useNavigate();

  const handleRedirectLogin = () => {
    navigate('/Login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!rut || !nombre || !correo || !contraseña || !confirmarContraseña) {
      alert('Por favor, completa todos los campos');
      return;
    }

    if (contraseña !== confirmarContraseña) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/registro`, {
        rut,
        nombre,
        correo,
        contraseña,
        confirmarContraseña,
      });

      alert('Usuario registrado exitosamente');
      navigate('/RegisterExitoso');
    } catch (error) {
      alert(error.response?.data?.message || 'Error en el registro');
    }
  };

  return (
    <div className={styles.containerGeneral}>
      <div className={styles.containerHijo}>
        <img className={styles.logo} src="/images/logo.png" alt="Logo del sitio" />
        <div className={styles.containerLogin}>
          <h1 className={styles.tituloPrincipal}>Ingresa tus datos</h1>
          <form onSubmit={handleSubmit} className={styles.formulario}>
            <input type="text" placeholder="Rut" value={rut} onChange={(e) => setRut(e.target.value)} />
            <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input type="email" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
            <input type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
            <input type="password" placeholder="Confirma tu contraseña" value={confirmarContraseña} onChange={(e) => setConfirmarContraseña(e.target.value)} />
            <button type="submit">Registrarse</button>
            <button type="button" onClick={handleRedirectLogin}>Cancelar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
