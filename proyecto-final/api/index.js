import express from "express"
import cors from "cors"
// para usar la BD - 
// usar la variables de entorno que hay en .env
import dotenv from "dotenv"
// para conectar a la BB
import connectBD from "./config/bd.js"
import Game from "./models/games.model.js"

//cargas las variables de entorno en el .env
dotenv.config()
const PORT = process.env.PORT || 3000

// conectar con la BBDD

await connectBD()

const api = express()

// uso del Middleware para que acepte las peticiones 
api.use(cors())

// se pasa a json para las peticiones de post/put (crear y editar)
api.use(express.json())


// ruta para devolver los datoos que hay en la bbdd y colección games. 

api.get("/games", async (request, response) =>{
    try {
        const games = await Game.find().lean()
        response.json(games)
    } catch (error) {
        console.error("error, en el Get de games: ", error)
        response.json({error: "DB_ERROR"})
        
    }
})

api.listen(PORT, () => console.log(`API funcionando en puerto ${PORT}`));