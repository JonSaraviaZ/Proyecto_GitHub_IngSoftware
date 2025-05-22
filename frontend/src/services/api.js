import axios from "axios";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Función para hacer login y guardar token en localStorage
export const login = async (data) => {
    try {
        const response = await axios.post(`${API}/login`, data);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token); // Guardar token
        }
        return response.data;
    } catch (error) {
        console.error('Error en login:', error);
        return null;
    }
};

export const obtenerLibros = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API}/books`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error al obtener libros:', error);
        return null;
    }
};

// Otros endpoints que no requieren token o que tú uses...
export const solicitarLibro = (data) => axios.post(`${API}/solicitudes`, data);
export const registrarUsuario = (data) => axios.post(`${API}/registro`, data);
export const obtenerHistorial = () => axios.get(`${API}/historial`);
