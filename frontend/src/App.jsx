<<<<<<< Updated upstream
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage/LoginPage';
import HomePage from './pages/homepage/homepage';
import HistoryPage from './pages/homepage/homepage';  // O la ruta correcta para HistoryPage
import Register from './pages/Register/Register';
=======
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
>>>>>>> Stashed changes
import RegisterExitoso from './pages/RegisterExitoso/RegisterExitoso';
import PrivateRoute from './components/PrivateRoute';  // <-- Importa PrivateRoute

function App() {
  const [, setToken] = useState(null); // <-- Agregado

  return (
    <Router>
      <Routes>
<<<<<<< Updated upstream
        <Route path="/login" element={<Login />} />
        <Route 
          path="/homepage" 
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          } 
        />
        <Route path="/register" element={<Register />} />
        <Route path="/registerexitoso" element={<RegisterExitoso />} />
        <Route path="/historypage" element={<HistoryPage />} />
=======
        <Route path="/" element={<Navigate to="/Login" replace />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage setToken={setToken} />} /> {/* <-- Corregido */}
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/RegisterExitoso" element={<RegisterExitoso />} />
        <Route path="/HistoryPage" element={<HistoryPage />} />
>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
}

export default App;
