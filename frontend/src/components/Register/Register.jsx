import { useState } from 'react';
import axios from 'axios';
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
      }, {
        withCredentials: true
      });
    
      alert('Usuario registrado exitosamente');
      navigate('/RegisterExitoso');
    } catch (error) {
      alert(error.response?.data?.message || 'Error en el registro');
    }    
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow rounded-4 p-4">
            <div className="text-center mb-4">
              <img src="/images/logo.png" alt="Logo del sitio" style={{ width: '60px' }} />
            </div>
            <h1 className="text-center fs-5 fw-semibold mb-3">Ingresa tus datos</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Rut"
                  value={rut}
                  onChange={(e) => setRut(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirma tu contraseña"
                  value={confirmarContraseña}
                  onChange={(e) => setConfirmarContraseña(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-warning fw-semibold text-dark w-100">
                  Registrarse
                </button>
                <button type="button" onClick={handleRedirectLogin} className="btn btn-outline-secondary w-100">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;