import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectBD from "./config/bd.js";

// Importamos los routers refactorizados
import gamesRouter from "./routes/games.routes.js";
import animesRouter from "./routes/animes.routes.js";
import aiRouter from "./routes/ai.routes.js";

// Cargas las variables de entorno en el .env
dotenv.config();

const PORT = process.env.PORT || 3000;

// Conectar con la BBDD
await connectBD();

const api = express();

// --- MIDDLEWARES GLOBALES ---
api.use(cors()); // Uso del Middleware para que acepte las peticiones
api.use(express.json()); // Se pasa a json para las peticiones de post/put

// --- RUTAS API ---
// La ruta base se define aquí, el router solo define las subrutas.
api.use("/games", gamesRouter);      // Gestiona /games y /games/:id
api.use("/animes", animesRouter);    // Gestiona /animes y /animes/:id
api.use("/api/sensei", aiRouter);    // Gestiona /api/sensei

// --- INICIO DEL SERVIDOR ---
api.listen(PORT,
    () => console.log(`API funcionando en puerto ${PORT}`)
);