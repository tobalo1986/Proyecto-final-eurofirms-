import Game from "../models/games.model.js";

// Helper para limpiar el objeto de Mongoose (_id -> id)
const formatGame = (game) => {
    // Si es un array de objetos (find().lean())
    if (Array.isArray(game)) {
        return game.map(item => {
            const { _id, ...rest } = item;
            return { id: _id.toString(), ...rest };
        });
    }
    // Si es un objeto individual (findById(), save())
    const { _id, ...rest } = game.toObject ? game.toObject() : game;
    return { id: _id.toString(), ...rest };
};

// 1. OBTENER TODOS
const getAllGames = async (request, response) => {
    try {
        const games = await Game.find().lean();
        const formattedGames = formatGame(games);
        response.json(formattedGames);
    } catch (error) {
        console.error("Error en GET /games: ", error);
        response.status(500).json({ error: "DB_ERROR" });
    }
};

// 2. CREAR NUEVO
const createGame = async (request, response) => {
    try {
        const postData = request.body;
        const newGame = new Game(postData);
        const savedGame = await newGame.save();
        
        // Devolvemos el objeto guardado y formateado
        response.status(201).json(formatGame(savedGame));
    } catch (error) {
        console.error("Error en POST /games: ", error.message);
        response.status(500).json({ error: "DB_Error", message: error.message });
    }
};

// 3. ACTUALIZAR
const updateGame = async (request, response) => {
    try {
        const gameId = request.params.id;
        const gameData = request.body;

        // Opción más limpia: findByIdAndUpdate con runValidators: true
        const game = await Game.findByIdAndUpdate(gameId, gameData, { 
            new: true, 
            runValidators: true 
        });

        if (!game) {
            return response.status(404).json({ error: 'Game not found' });
        }

        response.json(formatGame(game));

    } catch (error) {
        console.error("Error en PUT /games: ", error.message);
        response.status(500).json({ error: error.message });
    }
};

// 4. ELIMINAR
const deleteGame = async (request, response) => {
    try {
        const gameId = request.params.id;
        const deleteGame = await Game.findByIdAndDelete(gameId);

        if (!deleteGame) {
            return response.status(404).json({ error: "Game not found" });
        }
        response.json({ message: "Game deleted" });

    } catch (error) {
        console.error("Error en DELETE /games: ", error.message);
        response.status(500).json({ error: error.message });
    }
};


export default {
    getAllGames,
    createGame,
    updateGame,
    deleteGame,
};