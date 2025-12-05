import VidegameCard from "../components/VideogameCard";
import VideogameFormulario from "../components/VideogameFormulario";
import VideogameUpdateFormulario from "../components/VideogameUpdateFormulario";
import games from "../data/videogameData";
import { useState } from "react";

function VideojuegoPage() {
  const [gamesState, setGamesState] = useState(games);
  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  // guarda un solo videojuego (editar)
  const [editGame, setEditGame] = useState(null);
//  console.log(editGame);

  //console.log(gamesState);

  /**
   * Función que elimina el último item.
   * Primero se crea una copia del estado del array de objetos de juegos.
   * y a la copia se le hace la función pop()
   */
  function deleteOne() {
    const copy = [...gamesState];
    copy.pop();
    setGamesState(copy);
  }

  /**
   * función que recupera el juego a agregar
   * se crea una copia del gameState
   * se saca la id mayor
   * a gameAdd se agrega la id
   * en la copy de agrega el objeto al copy y se cambia el estado.
   *
   */
  function addGame(gameAdd) {
    const copy = [...gamesState];
    const maxId =
      gamesState.length > 0 ? Math.max(...gamesState.map((g) => g.id)) : 0;
    //console.log(maxId);
    gameAdd.id = maxId + 1;
    copy.push(gameAdd);
    setGamesState(copy);
  }

  /**
   *
   * Función que recibe una id y se filtra para se eliminada ese item.
   */
  function onDelete(id) {
    //  console.log("funcion onDelete");
    //   console.log(id);

    let copy = gamesState.filter((game) => game.id !== id);
    //console.log(copy);
    //console.log("despues de filtar ondelete");
    setGamesState(copy);
  }
  /**
   * las funciones mostrarUpdate() y CerrarFormulario()
   * abre al pulsar el botón editar y lo cierra si se pulsa el botón modificar.
   * DUDA: pero no se si se llegaría a pasar los datos para poder modificar.
   */
  function mostrarUpdate() {
    //setShowUpdate(!showUpdate)
    setShowUpdate(true);
  }

  // cerrar formulario de editar
  function cerrarFormulario() {
    setShowUpdate(false);
  }

  /** funcion para actualizar un item */

  function handleUpdate(gameToUpdate) {
   // console.log("El mensaje llega al padre")
    // console.log(gameToUpdate);
    setEditGame(gameToUpdate);
    mostrarUpdate();
  }


  // función para actualizar el juego
  function actualizarJuego(gameUpdate){
    console.log("La info del juego actualizado al padre.")
    console.log(gameUpdate)
    const copy = [...gamesState];
    const index = copy.findIndex(game => game.id === gameUpdate.id)
    copy.splice(index, 1, gameUpdate);
    setGamesState(copy)
  }

  /**
   * La función hace que aparezca un formulario para agregar un nuevo juego.
   * El botón tiene un evento "onClick" que llama a está función
   * Esta función cambia el valor de estado a verdadero o falso (si se pulsa más
   * de una vez)
   */
  function agregar() {
    setShow(!show);
  }

  return (
    <>
      <h1 className="videojuego-h1">Página videojuego</h1>
      <div className="videogame-list">
        {/*     se lista los video juegos usando para ello la función map. 
        recibe el valor de cada item y recibe la función para eliminar un item.*/}
        {gamesState.map((game) => {
          return (
            <VidegameCard
              key={game.id}
              propsVideogame={game}
              onDelete={onDelete}
              onUpdate={handleUpdate}
            />
          );
        })}
      </div>
      {/* muestra el formulario solo si show = true
        gameToUpdate={editGame} : con ello se pasa el item a editar al formulario. 
        onUpdateGame={onUpdate} : actualiza el item
        onClose={cerrarFormulario} : cierra formulario. */}
      {showUpdate && (
        <VideogameUpdateFormulario
          gameToUpdate={editGame}
          onClose={cerrarFormulario}
          onUpdateGame={actualizarJuego}

        />
      )}
      <div className="botonesVG">
        <button onClick={() => deleteOne()}>Delete the last one</button>
        <button onClick={() => agregar()}>
          {show ? "Cerrar formulario" : "Agregar nuevo"}
        </button>
      </div>

      {/* muestra el formulario solo si show = true */}
      {show && <VideogameFormulario onAddGame={addGame} />}
    </>
  );
}
export default VideojuegoPage;
