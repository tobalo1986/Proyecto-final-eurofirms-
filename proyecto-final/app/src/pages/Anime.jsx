import { useState } from "react";
import animes from "../data/animeData";
import AnimeCard from "../components/AnimeCard";

function Anime() {
    const [animesState, setAnimesState] = useState(animes);

    function deleteOne() {
        const copy = [...animesState];
        copy.pop();
        setAnimesState(copy);
    }

    return (
        <section className="page">
            <h1 className="section-title">Página Anime</h1>
            <p className="section-subtitle">
                Descubre openings y escenas destacadas en un formato de reproductor.
            </p>

            <div className="anime-grid">
                {animesState.map((anime) => (
                    <AnimeCard key={anime.id} propsAnimes={anime} />
                ))}
            </div>

            <div className="anime-actions">
                <button className="btn-secondary" onClick={deleteOne}>
                    Delete the last one
                </button>
            </div>
        </section>
    );
}

export default Anime;
