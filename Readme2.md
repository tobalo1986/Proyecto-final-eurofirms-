# Guía de Instalación y Ejecución

Este documento explica paso a paso cómo descargar el repositorio, instalar dependencias y ejecutar el proyecto tanto del frontend como del backend en tu entorno local.

---

## 1. Clonar el repositorio

Abre una terminal y ejecuta el siguiente comando:

```bash
git clone https://github.com/TU_USUARIO/TU_REPO.git
```

---

## 2. Instalar dependencias

El proyecto tiene dos partes diferenciadas:

- `/app` → Frontend en React + Vite  
- `/backend` → Servidor de IA con Node.js + Express

Debes instalar las dependencias en cada carpeta por separado:

🔹 **Instalar dependencias del frontend**

```bash
cd app
npm install
```

🔹 **Instalar dependencias del backend**

```bash
cd ../backend
npm install
```

---

### 3. Archivo `.env` (NO incluido en Git)

El archivo `.env` no está subido al repositorio por seguridad, ya que contiene la API Key privada necesaria para comunicarse con la IA.

> Nota: Te pasaré la API Key por Discord de forma privada.

Cuando la tengas, debes crear un archivo en la carpeta `/backend` llamado `.env`:

- **Ruta:** `backend/.env`

Y dentro escribir lo siguiente:

```env
OPENAI_API_KEY= aqui la clave
```

>  **Importante:** Sin este archivo el backend NO funcionará.

---

## 4. Ejecutar el proyecto

Necesitarás dos terminales abiertas simultáneamente.

🔹 **Iniciar el backend (servidor de IA)**  
En la primera terminal:

```bash
cd backend
npm start
```

El servidor debería quedar escuchando en:  
**http://localhost:3001**

 **Iniciar el frontend (React + Vite)**  
En la segunda terminal:

```bash
cd app
npm run dev
```

Prueba y dame feedback por discord esta tarde no podre estar espero que te parezca bien lo que he hecho. 