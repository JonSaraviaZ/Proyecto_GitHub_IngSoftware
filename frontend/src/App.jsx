import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import RegisterExitoso from './pages/RegisterExitoso/RegisterExitoso';

function App() {
  const [, setToken] = useState(null); // <-- Agregado

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" replace />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage setToken={setToken} />} /> {/* <-- Corregido */}
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/RegisterExitoso" element={<RegisterExitoso />} />
        <Route path="/HistoryPage" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;