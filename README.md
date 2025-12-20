# Mundo Otaku - Full Stack Application

> **Plataforma de gestión de contenido multimedia (Anime, Manga y Videojuegos) integrada con un asistente virtual basado en Inteligencia Artificial.**

---

## Descripción del Proyecto

**Mundo Otaku** es una aplicación web integral diseñada para administrar y visualizar colecciones de entretenimiento japonés y videojuegos. 

El proyecto implementa una arquitectura **Full Stack** separando el frontend del backend, garantizando escalabilidad y mantenimiento.

La característica distintiva es la **"Sensei IA"**, un chatbot interactivo impulsado por OpenAI que analiza emociones en tiempo real y modifica la interfaz visual (Avatar) según el contexto de la conversación.

---

##  Tecnologías Utilizadas

### Backend (API RESTful)

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/) - Gestión de rutas y middlewares.
- **Base de Datos:** [MongoDB](https://www.mongodb.com/) (Atlas) - Persistencia de datos NoSQL.
- **ODM:** [Mongoose](https://mongoosejs.com/) - Modelado de datos y validaciones estrictas.
- **IA:** [OpenAI SDK](https://platform.openai.com/) - Procesamiento de lenguaje natural.
- **Utilidades:** `dotenv`, `cors`

### Frontend (SPA)

- **Librería Principal:** [React.js](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Enrutamiento:** `react-router-dom`
- **Estilos:** CSS3 con diseño **Responsive** (Grid/Flexbox) y variables CSS.
- **Gestión de Estado:** Hooks (`useState`, `useEffect`)
- **Arquitectura:** Componentes y Servicios diferenciados

---

## Arquitectura del Proyecto

El código sigue el patrón **MVC (Modelo-Vista-Controlador)** en el backend y una estructura modular en el frontend.

### Backend Structure

| Componente       | Descripción Técnica |
|------------------|---------------------|
| `bd.js`          | Conexión a MongoDB con manejo de errores (`process.exit`) |
| **Models**       | Esquemas con validaciones personalizadas (`games.model.js`, `animes.model.js`) |
| **Controllers**  | Lógica de negocio y optimización con `.lean()`, incluye `ai.controller.js` |
| **Routes**       | Endpoints REST (`GET`, `POST`, `PUT`, `DELETE`) por recurso |

### Frontend Structure

| Directorio        | Finalidad |
|-------------------|----------|
| `pages/`          | Vistas principales (`Home`, `Anime`, `VideojuegoPage`, `Chat`) |
| `components/`     | Componentes reutilizables (`AnimeCard`, `Header`, `Avatar`) |
| `logic/`          | Servicios (`fetch`) desacoplados de la vista |
| `router/`         | Rutas anidadas y Layout principal (`App.jsx`) |

---

## Funcionalidades Clave

1. **Gestión CRUD Completa**
   - Crear, leer, actualizar y eliminar videojuegos y animes
   - Formularios controlados y modales para mejor UX

2. **Validación de Datos**
   - Backend: Validadores en Mongoose
   - Frontend: Control de inputs y tipos

3. **Sensei IA (Chatbot Emocional)**
   - Integración con GPT-4o-mini
   - Respuestas en JSON estructurado `{ text, emotion }`
   - Avatar cambia según emoción (neutral, feliz, enfadado, pensando)

4. **Diseño Responsivo**
   - Adaptación móvil/tablet/escritorio con CSS flex

---

## Instalación y Configuración

### 1. Clonar el repositorio

```bash
** git clone <url-del-repositorio>
** cd api
** npm install
** cd ../app
** npm install

# Crear Archivos .env en raiz de proyectos App y Api

## Estructura .env Api 

```
MONGO_URI= tu BD
MONGO_DB= Tu Colección
OPENAI_API_KEY= tu api key "Gastate los cuartos"
PORT= Tu puerto Favorito

## Estructura .env app

VITE_API_URL= El localhost escuchando en tu puerto favorito 

# Backend
** npm start

# Frontend
** npm run dev 

## Documentación de la API
```
### Videojuegos `/games`


- `GET /` - Obtener todos los juegos
- `POST /` - Crear un nuevo juego
- `PUT /:id` - Actualizar juego
- `DELETE /:id` - Eliminar juego

### Animes `/animes`

- `GET /` - Obtener lista de animes
- `POST /` - Registrar nuevo anime
- `PUT /:id` - Editar anime
- `DELETE /:id` - Borrar anime

### Inteligencia Artificial `/api/sensei`

- `POST /` - Envía mensaje y recibe `{ text, emotion }`
```
---

## Autores

** Cristóbal y Natalia **

## Mención especial a nuestros compañeros

** Victor y Daniel Que empezaron el proyecto con nosotros **

## Trabajos realizados Natalia 

** Sección de Videojuegos completa y Gestión de BBDD **

## Trabajos realizados Cristóbal 

** Sección de Anime completa e implementación chat IA

## Resto de Trabajos en conjunto

** css, postman, diseño de imágenes y creación del documento que leen en este momento **

## Creditos y herramientas  especiales

** chat gpt y gemini : Debugging y Diseño de imagenes **
** canva: Edición de imagenes
** Postman: Pruenbas de BBDD
** Inspeccionador de elementos: Diseño directo y debugging
** Herramientas de Desarrollador Lighthouse: Inspección de Accesibilidad, seo, rendimiento y practicas recomendadas

## Futuras mejoras

- Autenticación de usuarios
- Validaciones más avanzadas
- Despliegue en producción(Semiterminada)
- Filtros de Búsqueda
- Implementacion de carrito y tienda

## Conocimientos Adquiridos 

- Creación de una API REST con Express
- Conexión entre React y backend
- Modelado de datos con Mongoose
- Manejo de estados y efectos en React
- Estilos responsives con CSS flex
- Etiquetas Smanticas de html para mejora de Seo
- Js Básico y manejo del DOM
- Uso de Git y GitHUB
- Y muchas cosas mas...

## Agradecimientos especiales 

- Guy Aloni : Por su paciencia diaria
- Manuel David devpro : Por su ayuda y explicaciones 
- Alba : Por su seguimiento y comprensión