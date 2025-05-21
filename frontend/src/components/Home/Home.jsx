import styles from './Home.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const handleRedirectForward = () => {
    navigate('/HistoryPage');
  };

  return (
    <>
      {/* Franja horizontal con el título */}
      <div className={styles.franjaTitulo}>
        <h1 className={styles.tituloPrincipal}>Categoría</h1>
      </div>

      {/* Contenido principal */}
      <div className={styles.cuerpoContainer}>
        <div className={styles.portada}>
          <img
            src="/images/Foto1.jpg"
            alt="Foto de portada"
            className={styles.fotoPortada}
          />
          <div>
            <h2 className={styles.tituloSecundario}>Bienvenido a tu biblioteca</h2>
            <h3 className={styles.tituloTerciario}>
              Tu espacio donde encontrarás tus libros preferidos y ¡mucho más!
            </h3>
          </div>
        </div>

        <div className={styles.containerHijo}>
          <div className={styles.containerNieto}>
            <img className={styles.fotoOpciones} src="/images/Foto2.png" alt="icono 1" />
            <button
              className={styles.botonesHome}
            >
              Solicitar libro
            </button>
          </div>

          <div className={styles.containerNieto}>
            <img className={styles.fotoOpciones} src="/images/Foto2.png" alt="icono 2" />
            <button className={styles.botonesHome}>Ver catálogo</button>
          </div>

          <div className={styles.containerNieto}>
            <img className={styles.fotoOpciones} src="/images/Foto2.png" alt="icono 3" />
            <button onClick={handleRedirectForward} 
            className={styles.botonesHome}>Historial</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
