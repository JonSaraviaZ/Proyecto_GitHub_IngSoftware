<<<<<<< Updated upstream
=======
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export default API_URL; // ✅ Esto es lo que espera Register.jsx

export const obtenerLibros = () => axios.get(`${API_URL}/libros`);
export const solicitarLibro = (data) => axios.post(`${API_URL}/solicitudes`, data);
export const login = (data) => axios.post(`${API_URL}/login`, data);
export const registrarUsuario = (data) => axios.post(`${API_URL}/registro`, data);
export const obtenerHistorial = () => axios.get(`${API_URL}/historial`);
>>>>>>> Stashed changes
