import React, { useState } from 'react'
import { usePeliculasFavoritas } from '../hooks/usePeliculasFavoritas';
import { FinalPeliculasFavoritas } from './FinalPeliculasFavoritas';

export const PeliculasFavoritas = () => {

  
  const {films} = usePeliculasFavoritas();

  const [filmsArray, setFilmsArray ] = useState(films);
  console.log("nos llega",filmsArray);

  return (
    <>
    <h1>MIS PELÍCULAS FAVORITAS DE LA SAGA START WARS:</h1>
    <div className="row rows-cols-1 row-cols-md-3 g-3">

      {films.map((film) => (
        <FinalPeliculasFavoritas
          // filmsArray
          // setFilmsArray
          films
          key={film.nombre} //el key siempre hay que mandarlo
          {...film} //para mandar el resto de propiedades desestructuro el hero, así me evito el pasarlas de una en una
        />
      ))}
    </div>
  </>
  )
}
