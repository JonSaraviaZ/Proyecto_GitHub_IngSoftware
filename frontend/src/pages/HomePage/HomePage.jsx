import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
      <div>
        <Header/>
        <div className={styles.cuerpoContainer}>
          <h1 className={styles.tituloPrincipal}>Categoría</h1>
          <div className={styles.portada}>
            <img src='/images/Foto1.jpg' alt="Foto de portada" className={styles.fotoPortada}/>
            <div>
              <h2 className={styles.tituloSecundario}>Bienvenido  a tu biblioteca</h2>
              <h3 className={styles.tituloTerciario}>Tu espacio donde encontrarás 
              tus libros preferidos y ¡mucho mas!</h3>
            </div>
          </div>
          <div className={styles.containerHijo}>
            <div>
              <img src='/images/Foto2.png'></img>
              <button className={styles.botonesHome}>Solicitar libro</button>
            </div>
            <div>
              <img src='/images/Foto2.png'></img>
              <button className={styles.botonesHome}>Ver catálogo</button>
            </div>
            <div>
              <img src='/images/Foto2.png'></img>
              <button className={styles.botonesHome}>Historial</button>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  };
  
  export default HomePage;