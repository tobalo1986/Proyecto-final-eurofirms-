import express from 'express';
import animeController from '../controllers/anime.controller.js';

const router = express.Router();

// Rutas CRUD para Animes (GET / POST / PUT / DELETE)
router.get('/', animeController.getAllAnimes);
router.post('/', animeController.createAnime);
router.put('/:id', animeController.updateAnime);
router.delete('/:id', animeController.deleteAnime);

export default router;