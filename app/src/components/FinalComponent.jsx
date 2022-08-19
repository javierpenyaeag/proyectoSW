import axios from "axios";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { addPeliculasFavoritas } from "../hooks/addPeliculasFavoritas";


const endPoint = "http://localhost:8000/api/pelicula";



export const FinalComponent = ({
  title,
  episode_id,
  release_date,
  characters,
}) => {
  console.log(title);
  
  const navigate = useNavigate();

  const store = async(title, image, event) =>{
    event.preventDefault();
    console.log("entra en store de peliculas");
    let token = localStorage.getItem("token");
    const config = {
      headers: {
          "Content-type": "application/json",
           "Authorization": `Bearer ${token}`,
      },
    }; 
    await axios.post(endPoint, {nombre: title, foto: image}, config)
    navigate('/peliculasFavoritas');
  
  }

  // let image = `../../assets/film${episode_id}`;
  let image = require(`../../assets/fotos/film${episode_id}.jpg`);

  console.log("voy a enviar==>", characters);

  console.log("voy a enviar personajes==>", episode_id);

  return (
    // <div>FinalComponent</div>

    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4 ">
            <img
              src={image}
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
              <Link to={`/verPersonajes/${episode_id}`} >
                Protagonistas
              </Link>

              <button
                className="btn btn-outline-primary"
                onClick={(event) => store(title, image, event)}
              >
                Añadir a favorito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
