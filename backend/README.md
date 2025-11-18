# Backend Freelancer - MongoDB

## Instalación

```powershell
cd backend
npm install
```

## Configuración

1. Instalar MongoDB:
   - **Local**: Descargar desde https://www.mongodb.com/try/download/community
   - **MongoDB Atlas (Cloud)**: Crear cuenta gratis en https://www.mongodb.com/cloud/atlas

2. Configurar `.env`:
   - Copiar el archivo `.env` y ajustar `MONGODB_URI`
   - Para MongoDB local: `mongodb://localhost:27017/freelancer_db`
   - Para MongoDB Atlas: Usar el connection string proporcionado

3. (Opcional) Configurar email en `.env`:
   - `EMAIL_USER`: Tu email de Gmail
   - `EMAIL_PASS`: Contraseña de aplicación de Gmail

## Ejecutar

```powershell
# Modo desarrollo (con nodemon)
npm run dev

# Modo producción
npm start
```

El servidor estará disponible en: http://localhost:5000

## Endpoints API

### POST /api/contacto
Crear nuevo contacto desde el formulario

**Body:**
```json
{
  "nombre": "Juan Pérez",
  "telefono": "+52 123 456 7890",
  "email": "juan@example.com",
  "mensaje": "Hola, estoy interesado en sus servicios..."
}
```

### GET /api/contacto
Obtener todos los contactos (admin)

### GET /api/contacto/:id
Obtener contacto específico

### PUT /api/contacto/:id/leido
Marcar contacto como leído

### DELETE /api/contacto/:id
Eliminar contacto

## Tecnologías

- Express.js
- MongoDB + Mongoose
- Nodemailer (notificaciones por email)
- CORS
