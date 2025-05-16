import { useNavigate } from 'react-router-dom';

const RegisterExitoso = () => {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/Login');
    };

    return (
        <div>
            <h1>Registro exitoso</h1>
            {/* Solo se incluyó un texto y un bóton para verificar la conexión con el backend.
            Después se desarrollará el sitio completo */}
            <button onClick={handleRedirect}>Volver al Home</button>
        </div>
    );
};

export default RegisterExitoso;