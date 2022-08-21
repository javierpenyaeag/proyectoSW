import React, { useState } from 'react'
import { usePeliculasFavoritas } from '../hooks/usePeliculasFavoritas';
import { FinalPeliculasFavoritas } from './FinalPeliculasFavoritas';

export const PeliculasFavoritas = () => {

  
  const {films, setFilms} = usePeliculasFavoritas();

  const [filmsArray, setFilmsArray ] = useState(films);
  console.log("nos llega",filmsArray);

  const callback = (id) =>{
      setFilms(
        films.filter(film => film.id !== id)
      );
  }

  return (
    <>
    <h1>MIS PELÍCULAS FAVORITAS DE LA SAGA START WARS:</h1>
    <div className="row rows-cols-1 row-cols-md-3 g-3">

      {films.map((film, index) => (
        <FinalPeliculasFavoritas
          // filmsArray
          // setFilmsArray
          films
          key={`${film.nombre}-${index}`} //el key siempre hay que mandarlo
          {...film} //para mandar el resto de propiedades desestructuro el hero, así me evito el pasarlas de una en una
          callback = {callback}
        />
      ))}
    </div>
  </>
  )
}
