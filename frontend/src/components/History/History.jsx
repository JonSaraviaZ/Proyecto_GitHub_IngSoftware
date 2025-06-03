import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerLibros } from "../../services/api";
import style from './History.module.css';

const History = () => {
  const [libros, setLibros] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarLibros = async () => {
      const data = await obtenerLibros();
      if (data) {
        setLibros(data);
        setError(false);
      } else {
        setError(true);
      }
      setLoading(false);
    };

    cargarLibros();
  }, []);

  return (
    <div className={style.cuerpoContainer}>
      <div className={style.containerHijo}>
        <h2 className={style.tituloPrincipal}>Historial / Libros en Biblioteca</h2>

        {loading && <p className={style.loading}>Cargando historial...</p>}

        {error ? (
          <p className={style.error}>No se pudieron cargar los libros. Por favor inicia sesión.</p>
        ) : libros.length === 0 ? (
          <p className={style.empty}>No hay libros registrados.</p>
        ) : (
          <ul className={style.bookList}>
            {libros.map((libro) => (
              <li key={libro.id} className={style.bookItem}>
                <strong className={style.bookTitle}>{libro.titulo}</strong> — {libro.autor} ({libro.cantidad} disponibles)
              </li>
            ))}
          </ul>
        )}

        <button className={style.botonVolver} onClick={() => navigate('/HomePage')}>
          Volver
        </button>
      </div>
    </div>
  );
};

export default History;
