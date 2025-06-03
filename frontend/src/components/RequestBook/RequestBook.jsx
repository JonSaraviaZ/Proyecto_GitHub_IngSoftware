import style from './RequestBook.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Componente que despliega el formulario para la solicitud de libros

const RequestBook = () => {

    //Se crearon  los estados para manejar los datos a agregar 
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [fechaRetiro, setFechaRetiro] = useState('');
    const [fechaDevolucion, setFechaDevolucion] = useState('');
    const [error, setError] = useState('');

    //Constante que habilita campos para calcular los días hábiles por préstamos. Son máximo 7 días.
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

    //Maneja el envío de los datos al Backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!titulo || !autor || !fechaRetiro || !fechaDevolucion) {
            setError('Por favor completa todos los campos.');
            return;
        }

        const diasHabiles = calcularDiasHabiles(fechaRetiro, fechaDevolucion);
        if (diasHabiles > 7) {
            setError('La fecha de devolución no puede superar los 7 días hábiles desde la fecha de retiro.');
            return;
        }

        const solicitud = {
            titulo,
            autor,
            fechaRetiro,
            fechaDevolucion
        };

        try {
            const response = await fetch('https://tu-backend.com/api/solicitudes', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(solicitud),
            });

            if (!response.ok) throw new Error('Error al enviar la solicitud.');

            alert('Solicitud enviada correctamente.');
            navigate('/HomePage');

        } catch (err) {
            setError('Hubo un problema al enviar la solicitud.');
            console.error(err);
        }
    };

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
                        <label>Fecha deseada de retiro:</label>
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

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <button type="submit">Enviar solicitud</button>
                </form>

                <button className={style.botonVolver} onClick={() => navigate('/HomePage')}>
                    Volver
                </button>
            </div>
        </div>
    );
};

export default RequestBook;
