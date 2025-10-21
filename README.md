# 🍝 Pasta e Passione

**Pasta e Passione** es un proyecto desarrollado como **preentrega del curso de React de Talento Tech**.  
Consiste en una **aplicación de ecommerce** que permite a los usuarios navegar por un catálogo de productos, iniciar sesión, agregar artículos a un carrito y simular el proceso de compra.

---

## 🚀 Funcionalidades principales

- 🛍️ Visualización de productos con sus imágenes y precios.  
- 🧺 Carrito de compras interactivo (agregar, eliminar, vaciar).  
- 👤 Sistema de inicio y cierre de sesión de usuario.  
- 💳 Página de pago con resumen de compra.  
- 🔒 Rutas protegidas para páginas restringidas (solo visibles al iniciar sesión).  
- 📱 Diseño responsive adaptable a distintos tamaños de pantalla.

---

## 🧰 Tecnologías utilizadas

- ⚛️ **React** – Librería principal para el desarrollo del frontend.  
- 🧩 **React Router DOM** – Para la navegación entre páginas y rutas protegidas.  
- 🎨 **CSS3** – Estilos personalizados y diseño responsive con media queries.  
- 🪣 **Context API** – Manejo global del estado (usuario, carrito, etc.).  
- ⚡ **Vite** – Entorno de desarrollo rápido y moderno para React.  
- 🧠 **Hooks de React** – Uso de `useState`, `useContext`, `useEffect`, `useNavigate`, entre otros.

---

## 🌐 Deploy

El proyecto está desplegado en Vercel para su visualización:  
https://preentrega-carrito-react.vercel.app/

---

## 🧭 Estructura del proyecto

src/

├── context/ → Manejo global del estado con Context API

├── pages/ → Componentes principales (Navbar, Carrito, Pagar, etc.)

├── assets/ → Imágenes y recursos estáticos

├── App.jsx → Enrutamiento principal y layout general

├── main.jsx → Punto de entrada del proyecto

└── index.css → Estilos globales
