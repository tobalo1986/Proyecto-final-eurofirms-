import express, { request, response } from "express";
import cors from "cors";
// para usar la BD -
// usar la variables de entorno que hay en .env
import dotenv from "dotenv";
// para conectar a la BB
import connectBD from "./config/bd.js";
import Game from "./models/games.model.js";
import Anime from "./models/animes.model.js"
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

// ruta para devolver los datoos que hay en la bbdd y colección games.

api.get("/games", async (request, response) => {
  try {
    // lean -> limpia la información que viene de la BBDD
    const games = await Game.find().lean();
    // cambiar _id a id
    games.forEach((game) => {
      game.id = game._id.toString()
      delete game._id
    })
    response.json(games);
  } catch (error) {
    console.error("error, en el Get de games: ", error);
    response.json({ error: "DB_ERROR" });
  }
});

/**
 * por ahora solo funciona el crud en postman - queda conectarlo con el 
 * app ... 
 * continuara .....
 */


// para agregar un nuevo juego.
api.post("/games", async (request, response) => {
  try {
    // se recupera datos
    const postData = request.body;
    // se crea un nuevo item de Games en la BBDD
    const newGame = new Game(postData);
    // se guarda en la BBDD
    const savedGame = await newGame.save();
    // devolver estado de que se creo el item en la BBDD - 201
    response.status(201).json(savedGame);
  } catch (error) {
    console.error("Error: en POST - game: ", error);
    response.status(500).json({ error: "DB_Error" });
  }
});
// eliminar un juego.
// no iba por la ruta ... le faltaba la dichosa s - no era game/:id sino gameS/:id.
api.delete("/games/:id", async (request, response) => {
  try {
    // se recupera la id y se busca y elimina de la BBDD
    const gameId = request.params.id;
    const deleteGame = await Game.findByIdAndDelete(gameId);

    // Comprobamos si existe un documento con la ID que se ha enviado
    if (!deleteGame) {
      return response.status(404).json({ error: "Game not found" });
    }
    response.json({ message: "Game deleted" });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

// actualizar

api.put("/games/:id", async (request, response) => {
    try {
        const gameId = request.params.id
        const gameData = request.body

        // Extraer el post por la ID
        const game = await Game.findById(gameId)

        // Comprobamos si existe un documento con la ID que se ha enviado
        if (!game) {
            return response.status(404).json({error: 'Post not found'})
        }

        // Usamos set y save para asegurarnos que se aplica la validación
        // Otra opción sería usar 'runValidators':
        // const post = await Post.findByIdAndUpdate({ _id: postId }, postData, {new: true, runValidators: true})
        game.set(gameData)
        await game.save()

        response.json(game)

    } catch(error) {
        response.status(500).json({error: error.message})
    }
});

/**
 * Método de get.
 */

// ruta para devolver los datoos que hay en la bbdd y colección games.

api.get("/animes", async (request, response) => {
  try {
    // lean -> limpia la información que viene de la BBDD
    const animes = await Anime.find().lean();
    // cambiar _id a id
    animes.forEach((anime) => {
      anime.id = anime._id.toString()
      delete anime._id
    })
    response.json(animes);
  } catch (error) {
    console.error("error, en el Get de Animes: ", error);
    response.json({ error: "DB_ERROR" });
  }
});

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

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

        const response = await client.responses.create({
            model: "gpt-4.1-mini",
            input: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userMessage }
            ]
        });

        const raw = response.output_text.trim();

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


api.listen(PORT, () => console.log(`API funcionando en puerto ${PORT}`));
