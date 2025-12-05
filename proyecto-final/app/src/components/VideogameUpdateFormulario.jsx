import { useState } from "react";

export default function VideogameUpdateFormulario({
  onUpdateGame,
  gameToUpdate,
  onClose,
}) {
  /**
   *
   * Función agregar un juego, se recupera los datos del formulario
   * y se guarda en gameAdd, que es un objeto.
   */

  // se crea un useState por cada input del formulario.
  const [name, setName] = useState(gameToUpdate.name);
  const [plataform, setPlataform] = useState(gameToUpdate.plataform);
  const [price, setPrice] = useState(gameToUpdate.price);
  const [year, setYear] = useState(gameToUpdate.year);
  const [image, setImage] = useState(gameToUpdate.image);
  // console.log(year)

  // coge la información de los input y los pasas a su padre.
  function actualizarJuego(event) {
    event.preventDefault();
    let gameUpdate = {
      id: gameToUpdate.id,
      name, //name:name
      plataform,
      price: price,
      year: year,
      image: image,
    };
    console.log("de la funcion actualiarJuego")
    console.log(gameUpdate);
    onUpdateGame(gameUpdate);
    onClose()
  }
  /* Para poder editar se debe de usar value (se pone el valor que viene en 
  useSTate y onChange usando el set de ese useSTate) */
  return (
    <div>
      <h2>Vamos a editar... </h2>
      <form onSubmit={actualizarJuego} action="" method="post">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="price">Precio:</label>
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Precio..."
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />

        <label htmlFor="plataform">Plataforma:</label>
        <select
          name="plataform"
          id="plataform"
          required
          value={plataform}
          onChange={(e) => setPlataform(e.target.value)}
        >
          <option value="switch">Switch</option>
          <option value="switch2">Switch 2</option>
          <option value="ps4">Playstation 4</option>
          <option value="ps5">Playstation 5</option>
          <option value="pc">PC</option>
          <option value="xboxSerie">Xbox Series X</option>
        </select>

        <label htmlFor="year">Año:</label>
        <input
          type="number"
          name="year"
          id="year"
          value={year}
          /* onChange : es para coger el valor que pones en el input para editar. */
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />

        <label htmlFor="image">Url img:</label>
        <input
          type="text"
          name="image"
          id="image"
          placeholder="url imagen..."
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <input  type="submit" value="Modificar" />
      </form>
    </div>
  );
}
