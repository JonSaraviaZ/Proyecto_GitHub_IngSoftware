const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Leer token desde header Authorization
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }

    // El token generalmente viene como: "Bearer <token>", así que separamos
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token mal formado' });
    }

    try {
        // Verificar el token con la clave secreta
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Guardar datos del usuario decodificados en la request para usar después
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido o expirado' });
    }
};

module.exports = authMiddleware;
