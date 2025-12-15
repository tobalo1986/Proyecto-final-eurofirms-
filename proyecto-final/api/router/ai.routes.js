import express from "express"
const routerIA = express.Router()

import IA from "../controller/ai.controller.js"


routerIA.post("/games", IA.postIA)


export default routerIA