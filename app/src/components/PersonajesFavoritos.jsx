import React from 'react'
import { usePersonajesFavoritos } from '../hooks/usePersonajesFavoritos'
import { FinalPersonajeFavorito } from './FinalPersonajeFavorito';



export const PersonajesFavoritos = () => {

  const {characters, setCharacters} = usePersonajesFavoritos();

  let callback = (id) => {
    setCharacters(
      characters.filter(film => film.id !== id)
    );
  }

  console.log(characters);

  return (
    <>
    <h1>MIS PERSONAJES FAVORITOS DE LA SAGA START WARS:</h1>
    <div className="row rows-cols-1 row-cols-md-3 g-3 mb-4">

      {characters.map((character, index) => (
        <FinalPersonajeFavorito
          key={`${character.nombre}-${index}`} //el key siempre hay que mandarlo
          {...character} 
          callback={callback}  //para mandar el resto de propiedades desestructuro el hero, así me evito el pasarlas de una en una
        />
      ))}
    </div>
  </>
  )
}
