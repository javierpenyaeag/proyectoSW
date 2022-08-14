import React from "react";
import { useFilms } from "../hooks/useFilms";
import { FinalComponent } from "./FinalComponent";

const VisualComponent = () => {
  const { films } = useFilms();

  console.log('peliculas==>', films);

  return (
    <>
      <h1>PELÍCULAS DE LA SAGA START WARS:</h1>
      <div className="row rows-cols-1 row-cols-md-3 g-3">
        {/* 

            <ul>
                {
                    films.map(user => (
                        <li key = {user.title}>
                            {user.title}
                            {user.episode_id}
                        </li>

                    ))
                }
            </ul> */}

        {films.map((film) => (
          <FinalComponent
            key={film.title} //el key siempre hay que mandarlo
            {...film} //para mandar el resto de propiedades desestructuro el hero, así me evito el pasarlas de una en una
          />
        ))}
      </div>
    </>
  );
};

export default VisualComponent;
