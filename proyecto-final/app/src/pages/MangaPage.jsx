import MangaCard from "../components/MangaCard";
import mangas from "../data/mangData";

function MangaPage() {
    return (
        <section className="page">
            <h1 className="section-title">Página Manga</h1>
            <p className="section-subtitle">Explora tomos y series imprescindibles del mundo manga.</p>

            <div className="manga-grid">
                {mangas.map((manga) => (
                    <MangaCard key={manga.id} propsManga={manga} />
                ))}
            </div>
        </section>
    );
}

export default MangaPage;

// TODO: si la BBDD crece, se puede paginar o filtrar por género