import axios from 'axios';

const API = import.meta.env.VITE_API_URL

export const obtenerLibros = () => axios.get(`${API}/libros`);
export const solicitarLibro = (data) => axios.post(`${API}/solicitudes`, data);
export const login = (data) => axios.post(`${API}/login`, data);
export const registrarUsuario = (data) => axios.post(`${API}/registro`, data);
export const obtenerHistorial = () => axios.get(`${API}/historial`);
