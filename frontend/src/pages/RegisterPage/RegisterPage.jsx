import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Register from '../../components/Register/Register';
import styles from './RegisterPage.module.css';



const RegisterPage = () => {

  return (  
    <div className={styles.formContainer}>
      <Register/>
    </div>
    
  );
};

export default RegisterPage;