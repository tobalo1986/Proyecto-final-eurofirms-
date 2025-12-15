import express from 'express';
import aiController from '../controllers/ai.controller.js';

const router = express.Router();

// Ruta de la Sensei IA
router.post('/', aiController.handleSenseiRequest);

export default router;