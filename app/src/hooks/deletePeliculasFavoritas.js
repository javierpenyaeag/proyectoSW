import axios from 'axios';
import React, { useEffect } from 'react'

const endPonint = "http://localhost:8000/api";

export const deletePeliculasFavoritas = (id) => {

    // useEffect(() => {
    //     deletePersonaje();
    //   }, [])

    deletePersonaje();


    const deletePersonaje = async () => {
        //para borrar un producto necesitamos pasarle el id del producto
    
        await axios.delete(`${endPonint}/pelicula/${id}`);
      };

//   return (
//     <div>deletePersonajesFavoritos</div>
//   )
}