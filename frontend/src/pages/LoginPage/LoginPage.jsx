import React from 'react';
import styles from './LoginPage.module.css';
import Login from '../../components/Login/Login';

const LoginPage = ({ setToken }) => {
  return (
    <div className={styles.formContainer}>
      <Login setToken={setToken} /> {/* <-- Corregido */}
    </div>
  );
};

export default LoginPage;
