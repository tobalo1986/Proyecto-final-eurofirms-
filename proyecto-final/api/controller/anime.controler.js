import Anime from "../models/animes.model.js";

// Helper para limpiar el objeto de Mongoose (_id -> id)
const formatAnime = (anime) => {
    if (Array.isArray(anime)) {
        return anime.map(item => {
            const { _id, ...rest } = item;
            return { id: _id.toString(), ...rest };
        });
    }
    const { _id, ...rest } = anime.toObject ? anime.toObject() : anime;
    return { id: _id.toString(), ...rest };
};

// 1. OBTENER TODOS
const getAllAnimes = async (request, response) => {
    try {
        const animes = await Anime.find().lean();
        const formattedAnimes = formatAnime(animes);
        response.json(formattedAnimes);
    } catch (error) {
        console.error("Error en GET /animes: ", error);
        response.status(500).json({ error: "DB_ERROR" });
    }
};

// 2. CREAR NUEVO
const createAnime = async (request, response) => {
    try {
        const postData = request.body;
        const newAnime = new Anime(postData);
        const savedAnime = await newAnime.save();

        response.status(201).json(formatAnime(savedAnime));
    } catch (error) {
        console.error("Error en POST /animes: ", error.message);
        response.status(500).json({ error: "DB_Error", message: error.message });
    }
};

// 3. ACTUALIZAR
const updateAnime = async (request, response) => {
    try {
        const animeId = request.params.id;
        const animeData = request.body;

        const anime = await Anime.findByIdAndUpdate(animeId, animeData, { 
            new: true, 
            runValidators: true 
        });

        if (!anime) {
            return response.status(404).json({ error: 'Anime not found' });
        }

        response.json(formatAnime(anime));

    } catch (error) {
        console.error("Error en PUT /animes: ", error.message);
        response.status(500).json({ error: error.message });
    }
};

// 4. ELIMINAR
const deleteAnime = async (request, response) => {
    try {
        const animeId = request.params.id;
        const deleteAnime = await Anime.findByIdAndDelete(animeId);

        if (!deleteAnime) {
            return response.status(404).json({ error: "Anime not found" });
        }
        response.json({ message: "Anime deleted" });

    } catch (error) {
        console.error("Error en DELETE /animes: ", error.message);
        response.status(500).json({ error: error.message });
    }
};


export default {
    getAllAnimes,
    createAnime,
    updateAnime,
    deleteAnime,
};