import React from "react";
import { Link } from "react-router-dom";

export const FinalComponent = ({
  title,
  episode_id,
  release_date,
  characters,
}) => {
  console.log(title);

  let image = `../../assets/film${episode_id}`;
  // let image = `../../assets/film${episode_id}.jpg`;

  console.log("voy a enviar==>", characters);

  console.log("voy a enviar personajes==>", episode_id);

  return (
    // <div>FinalComponent</div>

    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4 ">
            <img
              src={`../../assets/fotos/film${episode_id}.jpg`}
              alt={title}
              className="card-img"
            />
            {/* <img src={`../../assets/fotos/film1.jpg`} alt={title} className='card-img' /> */}
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text"> {release_date} </p>

              {/* <Link to={``}>
                        Ver Personajes...
                    </Link> */}
              <Link to={`/verPersonajes/${episode_id}`} target="_blank">
                Protagonistas
              </Link>

              {/* <button
                className="btn btn-outline-primary"
                onClick={onNavigateBack}
              >
                Personajes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
