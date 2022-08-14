import { useLocation, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useIdFilms } from "../hooks/useIdFilm";
import { FinalComponentPeople } from "./FinalComponentPeople";
import { usePeople } from "../hooks/usePeople";

export const VerPersonajes = () => {
  const { pelicula } = useParams();

  const { film, actores } = useIdFilms(pelicula);

  console.log("a ver que es", actores);

  let contador = 0;

  // const actoresMapeados = actores.map((actor) => {
  //   return { direccion: actor, key: contador++ };
  // });

  const actoresMapeados = actores.map((actor) =>(
    {direccion: actor, key: contador++}
  ));

  console.log({actoresMapeados});

  return (
    <>
      <h1>PROTAGONISTAS DE LA PELICULA <strong>{film.title}</strong>:</h1>
      <div className="row rows-cols-1 row-cols-md-3 g-3">

      {/* <ul>
        {
          actores.map((actor) => (
            <li>{actor}</li>
          ))
        }
      </ul> */}

      {actoresMapeados.map((actor) => (
        <FinalComponentPeople
         key={{ contador }}
         {...actor} />
      ))}
      </div>

    </>
  );
};
