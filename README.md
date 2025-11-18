# Freelancer - Sitio Web React + Backend

Proyecto full-stack con frontend en React y backend con Node.js + MongoDB.

## 🚀 Descripción

Sitio web profesional de un freelancer diseñador y desarrollador web. Incluye:
- Header con nombre y título
- Navegación responsiva con scroll suave
- Hero section con ubicación
- Sección "Sobre Mí" personalizada
- Portafolio de clientes y proyectos
- Sección de servicios (Diseño Web, Aplicaciones Web, IoT)
- Formulario de contacto conectado a base de datos
- Footer

## 🛠️ Tecnologías

### Frontend
- **React 18.3.1** - Biblioteca de UI
- **Vite 5.4.2** - Build tool y dev server
- **CSS personalizado** - Estilos con variables CSS y diseño responsivo

### Backend
- **Node.js + Express** - Servidor API REST
- **MongoDB + Mongoose** - Base de datos NoSQL
- **Nodemailer** - Envío de emails
- **CORS** - Comunicación frontend-backend

## 📦 Instalación

### Frontend
```powershell
# Instalar dependencias del frontend
npm install
```

### Backend
```powershell
# Instalar dependencias del backend
cd backend
npm install
```

### MongoDB
Necesitas tener MongoDB instalado. Opciones:

1. **MongoDB Local**: Descargar desde https://www.mongodb.com/try/download/community
2. **MongoDB Atlas** (Cloud gratis): Crear cuenta en https://www.mongodb.com/cloud/atlas
3. **Docker**: 
   ```powershell
   docker run --name mongodb-freelancer -d -p 27017:27017 mongo
   ```

## ⚙️ Configuración

1. Configurar variables de entorno del backend:
   ```powershell
   cd backend
   # Editar .env con tu configuración
   ```

2. Variables en `.env`:
   ```env
   MONGODB_URI=mongodb://localhost:27017/freelancer_db
   PORT=5000
   EMAIL_USER=tu-email@gmail.com  # Opcional
   EMAIL_PASS=tu-contraseña-app   # Opcional
   ```

## 🏃‍♂️ Desarrollo

### Iniciar Backend
```powershell
cd backend
npm run dev
```
Servidor disponible en: `http://localhost:5000`

### Iniciar Frontend
```powershell
# En otra terminal, desde la raíz del proyecto
npm run dev
```
Aplicación disponible en: `http://localhost:5173/`

## 🏗️ Producción

```powershell
# Generar build optimizado
npm run build

# Previsualizar build de producción
npm run preview
```

El build se generará en la carpeta `dist/`.

## 📁 Estructura del Proyecto

```
freelancer_fin/
├── backend/                 # Backend API
│   ├── models/
│   │   └── Contacto.js     # Modelo MongoDB
│   ├── routes/
│   │   └── contacto.js     # Rutas API
│   ├── server.js           # Servidor Express
│   ├── .env                # Variables de entorno
│   └── package.json
├── public/                 # Assets estáticos
│   └── hero.jpg
├── src/
│   ├── components/        # Componentes React
│   │   ├── Header.jsx
│   │   ├── Navegacion.jsx
│   │   ├── Hero.jsx
│   │   ├── SobreMi.jsx
│   │   ├── Clientes.jsx
│   │   ├── Servicios.jsx
│   │   ├── Contacto.jsx   # Formulario conectado a API
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── normalize.css
│   └── styles.css
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Características

### Frontend
- ✅ Diseño responsivo (mobile-first)
- ✅ Navegación con scroll suave entre secciones
- ✅ Componentes React modulares y reutilizables
- ✅ Variables CSS para fácil personalización
- ✅ Hot Module Replacement (HMR)
- ✅ SVG icons inline
- ✅ Formulario con validación y estados de carga

### Backend
- ✅ API RESTful con Express
- ✅ Base de datos MongoDB con Mongoose
- ✅ Validación de datos
- ✅ Notificaciones por email (opcional)
- ✅ Manejo de errores robusto
- ✅ CORS configurado para desarrollo

## 📡 API Endpoints

### POST /api/contacto
Crear nuevo contacto desde el formulario
```json
{
  "nombre": "Juan Pérez",
  "telefono": "+52 123 456 7890",
  "email": "juan@example.com",
  "mensaje": "Hola, estoy interesado..."
}
```

### GET /api/contacto
Obtener todos los contactos (para panel admin)

### GET /api/contacto/:id
Obtener contacto específico

### PUT /api/contacto/:id/leido
Marcar contacto como leído

### DELETE /api/contacto/:id
Eliminar contacto

## 📝 Notas

- Los archivos originales `css/` e `img/` se conservan en el proyecto
- La imagen de hero se sirve desde `/public/hero.jpg`
- Los estilos están en `src/` e importados directamente en `App.jsx`
- El backend debe estar corriendo para que el formulario funcione
- Los datos se almacenan en MongoDB en la colección `contactos`

## 🔐 Configuración de Email (Opcional)

Para recibir notificaciones por email cuando alguien llene el formulario:

1. Usa una cuenta de Gmail
2. Habilita "Verificación en 2 pasos"
3. Genera una "Contraseña de aplicación": https://myaccount.google.com/apppasswords
4. Agrega las credenciales en `backend/.env`:
   ```env
   EMAIL_USER=tu-email@gmail.com
   EMAIL_PASS=tu-contraseña-app-generada
   ```

## 🐛 Troubleshooting

### El formulario no envía datos
- Verifica que el backend esté corriendo en `http://localhost:5000`
- Confirma que MongoDB esté activo
- Revisa la consola del navegador para errores

### Error de conexión a MongoDB
- Si usas MongoDB local, asegúrate de que el servicio esté corriendo
- Si usas MongoDB Atlas, verifica el connection string en `.env`
- Verifica que la IP esté en la whitelist de Atlas

## 👤 Autor

Oscar Llain - Desarrollador Full Stack

---

**Desarrollado con ❤️ usando React, Node.js y MongoDB**
