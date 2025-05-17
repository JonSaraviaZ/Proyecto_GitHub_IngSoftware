import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage/LoginPage';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import HistoryPage from './pages/HomePage/HomePage';
import Register from './pages/Register/Register';
import RegisterExitoso from './pages/RegisterExitoso/RegisterExitoso';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/RegisterExitoso" element={<RegisterExitoso />} />
        <Route path="/HistoryPage" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;

