exports.getHomeData = async (req, res) => {
    try {
        const data = {
            mensaje: 'Bienvenido a tu biblioteca. Tu espacio donde encontrarás tus libros preferidos y mucho más!',
            accesosRapidos: [
                { nombre: 'Solicitar libro', ruta: '/api/loans' },
                { nombre: 'Ver catálogo', ruta: '/api/books' },
                { nombre: 'Historial', ruta: '/api/loans/user/:id' }
            ],
            imagenPortada: 'https://url.de.imagen/o/puede-estar-en-public' // opcional
        };
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error al cargar datos del home', error });
    }
};
