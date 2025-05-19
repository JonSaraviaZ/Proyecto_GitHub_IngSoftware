import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage/LoginPage';
import HomePage from './pages/homepage/homepage';
import HistoryPage from './pages/homepage/homepage';  // O la ruta correcta para HistoryPage
import Register from './pages/Register/Register';
import RegisterExitoso from './pages/RegisterExitoso/RegisterExitoso';
import PrivateRoute from './components/PrivateRoute';  // <-- Importa PrivateRoute

function App() {
  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  );
}

export default App;
