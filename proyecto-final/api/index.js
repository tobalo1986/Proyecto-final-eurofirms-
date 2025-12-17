import express, { request, response } from "express";
import cors from "cors";
// para usar la BD -
// usar la variables de entorno que hay en .env
import dotenv from "dotenv";
// para conectar a la BB
import connectBD from "./config/bd.js";

// para conexion openai
import OpenAI from "openai";


//cargas las variables de entorno en el .env
dotenv.config();
const PORT = process.env.PORT || 3000;

// conectar con la BBDD

await connectBD();

const api = express();

// uso del Middleware para que acepte las peticiones
api.use(cors());

// se pasa a json para las peticiones de post/put (crear y editar)
api.use(express.json());

// rutas
import router from "./router/router.js"
api.use("/", router)



const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
/*
const systemPrompt = `
Eres una sensei anime amable y divertida.

Responde SIEMPRE con un JSON válido así:

{
  "text": "tu respuesta aquí en una sola línea",
  "emotion": "neutral | happy | angry | surprised | thinking"
}

REGLAS:
- No escribas nada fuera del JSON.
- No expliques el JSON.
- "text" nunca puede estar vacío.
`;

api.post("/api/sensei", async (req, res) => {
    try {
        const userMessage = req.body.message;

        const response = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userMessage }
            ]
        });

        const raw = response.choices[0].message.content.trim();

        // Intentar limpiar posibles bloques ```json ... ```
        let cleaned = raw.replace(/```json/gi, "").replace(/```/g, "").trim();

        let json;
        try {
            json = JSON.parse(cleaned);
        } catch {
            // Si no se puede parsear, intentar extraer solo el campo "text"
            const match = cleaned.match(/"text"\s*:\s*"([^"]+)"/);
            const textOnly = match ? match[1] : cleaned;

            json = { text: textOnly, emotion: "neutral" };
        }

        res.json(json);

    } catch (error) {
        console.error("Error en la IA:", error);
        res.status(500).json({ text: "Error en el dojo.", emotion: "neutral" });
    }
});
*/

api.listen(PORT, () => console.log(`API funcionando en puerto ${PORT}`));
