import style from './RequestBook.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Componente que despliega el formulario para la solicitud de libros
const RequestBook = () => {

    const navigate = useNavigate();

    // Estados para manejar los datos del formulario
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [fechaRetiro, setFechaRetiro] = useState('');
    const [fechaDevolucion, setFechaDevolucion] = useState('');
    const [error, setError] = useState('');

    // Calcula la cantidad de días hábiles entre dos fechas
    const calcularDiasHabiles = (inicio, fin) => {
        let count = 0;
        const current = new Date(inicio);
        const end = new Date(fin);

        while (current <= end) {
            const day = current.getDay();
            if (day !== 0 && day !== 6) count++; // Excluye domingos (0) y sábados (6)
            current.setDate(current.getDate() + 1);
        }

        return count;
    };

    // Maneja el envío del formulario al backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validación de campos vacíos
        if (!titulo || !autor || !fechaRetiro || !fechaDevolucion) {
            setError('Por favor completa todos los campos.');
            return;
        }

        // Validación de días hábiles (máximo 7)
        const diasHabiles = calcularDiasHabiles(fechaRetiro, fechaDevolucion);
        if (diasHabiles > 7) {
            setError('La fecha de devolución no puede superar los 7 días hábiles desde la fecha de retiro.');
            return;
        }

        try {
            // Obtiene token y userId desde localStorage
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');

            if (!token || !userId) {
                setError('Usuario no autenticado. Inicia sesión nuevamente.');
                return;
            }

            // Envío de la solicitud al backend
            const response = await fetch('http://localhost:5000/api/loans', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    userId,
                    titulo,
                    autor,
                    fechaRetiro,
                    fechaDevolucion
                }),
            });

            if (!response.ok) throw new Error('Error al enviar la solicitud.');

            alert('Solicitud enviada correctamente.');
            navigate('/HomePage');

        } catch (err) {
            setError('Hubo un problema al enviar la solicitud.');
            console.error(err);
        }
    };

    // Renderiza el formulario
    return (
        <div className={style.cuerpoContainer}>
            <div className={style.containerHijo}>
                <h2 className={style.tituloPrincipal}>Datos del libro solicitado</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Título del libro:</label>
                        <input
                            type="text"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label>Autor del libro:</label>
                        <input
                            type="text"
                            value={autor}
                            onChange={(e) => setAutor(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label>Fecha de retiro:</label>
                        <input
                            type="date"
                            value={fechaRetiro}
                            onChange={(e) => setFechaRetiro(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label>Fecha de devolución:</label>
                        <input
                            type="date"
                            value={fechaDevolucion}
                            onChange={(e) => setFechaDevolucion(e.target.value)}
                            required
                        />
                    </div>

                    {/* Muestra mensaje de error si lo hay */}
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <button type="submit">Enviar solicitud</button>
                </form>

                {/* Botón para volver a la página principal */}
                <button className={style.botonVolver} onClick={() => navigate('/HomePage')}>
                    Volver
                </button>
            </div>
        </div>
    );
};

export default RequestBook;
