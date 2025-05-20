import React, { useEffect, useState } from 'react'; //useEffect nos ayuda a hacer la llamada al backend y useState nos guarda y muestra los resultados
import { useNavigate } from 'react-router-dom';
import { obtenerHistorial } from '../../../src/services/api';
import styles from './History.module.css';

const History = () => {
    const [historial, setHistorial] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHistorial = async () => {
          try {
            const response = await obtenerHistorial();
            setHistorial(response.data);
          } catch (err) {
            setError('No se pudo cargar el historial');
          } finally {
            setLoading(false);
          }
        };
    
        fetchHistorial();
      }, []);

  return (
    <div className={styles.cuerpoContainer}>
      <div className={styles.containerHijo}>
        <h1>Historial del préstamo</h1>
        {/* Acá renderizamos los datos extraidos desde el backend */}
        {loading && <p>Cargando historial...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!loading && !error && (
          <ul>
            {historial.map((item, index) => (
              <li key={index}>
                <strong>ID del libro:</strong> {item.bookId} — 
                <strong>Fecha del préstamo:</strong> {new Date(item.fechaPrestamo).toLocaleDateString()} — 
                <strong>Estado:</strong> {item.estado}
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => navigate('/HomePage')}>Volver</button>
      </div>
    </div>
  );
};

export default History;
