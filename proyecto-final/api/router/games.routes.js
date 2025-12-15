import express from 'express';
import gameController from '../controllers/game.controller.js';

const router = express.Router();

// Rutas CRUD para Games (GET / POST / PUT / DELETE)
router.get('/', gameController.getAllGames);
router.post('/', gameController.createGame);
router.put('/:id', gameController.updateGame);
router.delete('/:id', gameController.deleteGame);

export default router;