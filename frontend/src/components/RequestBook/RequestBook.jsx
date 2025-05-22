import style from './RequestBook.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Componente que despliega el formulario para la solicitud de libros

const RequestBook = () =>{

    const navigate = useNavigate();

    return (
        <div className={style.cuerpoContainer}>
            <div className={style.containerHijo}>
                <h2 className={style.tituloPrincipal}>Datos del libro solicitado -- En proceso de desarrollo</h2>
{/* 
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
                )} */}

                <button className={style.botonVolver} onClick={() => navigate('/HomePage')}>
                Volver
                </button>
            </div>
        </div>
    );
};

export default RequestBook;