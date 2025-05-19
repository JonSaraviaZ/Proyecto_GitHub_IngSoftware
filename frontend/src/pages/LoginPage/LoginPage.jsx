import React from 'react';
import styles from './LoginPage.module.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from '../../components/Login/Login';

const LoginPage = ({ setToken }) => {

  return (
      <div className={styles.formContainer}> 
        <Login></Login>
      </div>
        
    
  );
};

export default LoginPage;