import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Catalog.module.css';

const Catalog = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/books`);
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    const handleBack = () => {
        navigate('/HomePage');
    };

    return (
        <div className={style.cuerpoContainer}>
            <h1 className={style.tituloPrincipal}>Catálogo de Libros</h1>

            {books.length === 0 ? (
                <p className={style.mensajeVacio}>No hay libros disponibles.</p>
            ) : (
                <div className={style.booksGrid}>
                    {books.map((book) => (
                        <div key={book.id} className={style.bookCard}>
                            <img src={book.image} alt={book.title} className={style.bookImage} />
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                        </div>
                    ))}
                </div>
            )}

            <button onClick={handleBack} className={style.backButton}>
                Volver
            </button>
        </div>
    );
};

export default Catalog;
