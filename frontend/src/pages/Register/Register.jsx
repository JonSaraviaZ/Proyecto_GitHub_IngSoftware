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

  const handleRedirectHome = () => {
    navigate('/HomePage');
  };

  const handleRedirectLogin = () => {
    navigate('/Login');
  };

  //Confirma si el usuario está registrado o no
  const handleSubmit = async (e) => { 
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/registro', { name, email, password });
      alert('Usuario registrado');
    } catch (error) {
      alert('Error en el registro');
    }
  };

  return (  
    <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.containerGeneral}>
        <input type="text" placeholder="Rut" value={rut} onChange={(e) => setRut(e.target.value)} />
            <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Confirma tu contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> 
            <button type="submit" onClick={handleRedirectRegister}>Registrarse</button>
            <button type="button" onClick={handleRedirectLogin}>Cancelar</button>
        </form>
    </div>
  );
};

export default Register;