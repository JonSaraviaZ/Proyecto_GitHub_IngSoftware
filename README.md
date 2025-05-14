# Proyecto_GitHub_IngSoftware
Este repositorio corresponderá al repositorio para la asignatura GitHub e Ingeniería de Software

# 📚 Proyecto SIBU - Sistema de Gestión Bibliotecaria

Este proyecto busca modernizar el sistema de gestión de una biblioteca universitaria, mejorando la eficiencia en los procesos de préstamo, devolución y consulta de libros. Implementa un enfoque full-stack con arquitectura MVC.

## 🧱 Arquitectura del Proyecto

- **Frontend (Vista)**: React.js
- **Backend (Modelo + Controlador)**: Node.js + Express
- **Base de Datos**: MySQL (Workbench)
- **Patrón**: MVC (Modelo-Vista-Controlador)

- 
---

## 🚀 Instalación y Ejecución

# Instrucciones rápidas para colaborar

Crea una nueva rama para trabajar (Reemplaza nombre-de-tu-rama por un nombre descriptivo, por ejemplo: feature-login o fix-bug-usuario):
```bash
git checkout -b nombre-de-tu-rama
```

Realiza cambios y guardarlos con:

```bash
git add .
git commit -m "Descripción breve de los cambios realizados"
```

Sube tu rama al repositorio:

```bash
git push origin nombre-de-tu-rama
```

Crea un Pull Request (PR)

Ingresa a Repositorio en GitHub.

Haz clic en "Compare & pull request".

Agrega una breve descripción de tus cambios y envía el PR para revisión.

---

Estructura y configuración

#1. Configuración FrontEnd (React)

```bash
cd frontend

npm install

npm run dev
```
#2. Backend (Node.js)

```bash
cd backend

npm install

cp .env.example .env  # Luego edita tus credenciales MySQL y clave JWT

npm run dev
```

## 📁 Estructura del Repositorio

```bash
/Proyecto_GitHub_IngSoftware
│
├── /frontend                 # V (Vista) - Interfaz de usuario en React
│   ├── /public
│   ├── /src
│   │   ├── /components       # Componentes reutilizables
│   │   ├── /pages            # Páginas según rutas
│   │   ├── /services         # Servicios de conexión con la API
│   │   └── App.jsx
│   └── package.json
│
├── /backend                  # M + C (Modelo + Controlador) - API y lógica
│   ├── /controllers          # Lógica del negocio (Controladores)
│   ├── /models               # Representación de datos (Modelos)
│   ├── /routes               # Rutas API agrupadas
│   ├── /config               # Conexión a la base de datos, dotenv
│   ├── /middleware           # Validaciones, autenticación, etc.
│   ├── server.js             # Punto de entrada principal
│   └── package.json
│
├── /database                 # Scripts y documentación de la base de datos
│   ├── schema.sql            # Script de creación de tablas
│   └── seed.sql              # Datos de prueba opcionales
│
├── .gitignore
├── README.md
└── LICENSE (opcional)
```

