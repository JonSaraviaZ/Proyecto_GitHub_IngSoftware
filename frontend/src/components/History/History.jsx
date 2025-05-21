import React, { useEffect, useState } from "react";
import { obtenerLibros } from "../../services/api";
import style from './History.module.css';

const History = () => {
  const [libros, setLibros] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const cargarLibros = async () => {
      const data = await obtenerLibros();
      if (data) {
        setLibros(data);
        setError(false);
      } else {
        setError(true);
      }
    };

    cargarLibros();
  }, []);

  return (
    <div className={style.container}>
      <h2 className={style.title}>Historial / Libros en Biblioteca</h2>
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
    </div>
  );
};

export default History;

