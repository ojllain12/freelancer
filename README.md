# Freelancer - Sitio Web React

Proyecto migrado de HTML/CSS estático a React + Vite.

## 🚀 Descripción

Sitio web profesional de un freelancer diseñador y desarrollador web. Incluye:
- Header con nombre y título
- Navegación responsiva
- Hero section con ubicación
- Sección de servicios (Diseño Web, Aplicaciones Web, E-Commerce)
- Formulario de contacto
- Footer

## 🛠️ Tecnologías

- **React 18.3.1** - Biblioteca de UI
- **Vite 5.4.2** - Build tool y dev server
- **CSS personalizado** - Estilos con variables CSS y diseño responsivo

## 📦 Instalación

```powershell
# Instalar dependencias
npm install
```

## 🏃‍♂️ Desarrollo

```powershell
# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en: `http://localhost:5173/`

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
├── public/              # Assets estáticos
│   └── hero.jpg        # Imagen de hero
├── src/
│   ├── components/     # Componentes React
│   │   ├── Header.jsx
│   │   ├── Navegacion.jsx
│   │   ├── Hero.jsx
│   │   ├── Servicios.jsx
│   │   ├── Contacto.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Punto de entrada
│   ├── normalize.css   # Reset CSS
│   └── styles.css      # Estilos personalizados
├── index.html          # Template HTML
├── package.json
└── vite.config.js      # Configuración de Vite
```

## 🎨 Características

- ✅ Diseño responsivo (mobile-first)
- ✅ Variables CSS para fácil personalización
- ✅ Componentes React modulares
- ✅ Hot Module Replacement (HMR)
- ✅ SVG icons inline
- ✅ Google Fonts (Krub)

## 📝 Notas

- Los archivos originales `css/` e `img/` se conservan en el proyecto
- La imagen de hero se sirve desde `/public/hero.jpg`
- Los estilos están en `src/` e importados directamente en `App.jsx`

## 👤 Autor

Juan De la Torre - Freelancer

---

**Desarrollado con ❤️ usando React y Vite**
