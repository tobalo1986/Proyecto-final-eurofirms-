import express from 'express'
const router = express.Router()

import routeGame from "./games.routes.js"
import routeAnime from "./animes.routes.js"


// usar las rutas 
router.use("/animes", routeAnime)
router.use("/games", routeGame)


export default router