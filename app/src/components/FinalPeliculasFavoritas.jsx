import axios from "axios";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const FinalPeliculasFavoritas = ({
  id,
  nombre,
  foto,
  filmsArray,
  setFilmsArray,
  films,
}) => {
  // let navigate = useNavigate();


    // let navigate = useNavigate();
  
  const navigate = useNavigate();

  const endPonint = "http://localhost:8000/api/pelicula";

  const deleter = async () => {
    let token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.delete(`${endPonint}/${id}`, config);

    navigate('/');
    
    // const filmDeletedId = await axios.delete(`${endPonint}/${id}`, config); //extraigo la pelicula que deseo que no aparezca
    // setFilmsArray(films.filter((film) => film.id !== filmDeletedId)); //creo el array de nuevo en este caso sin la pelicula a borrar

  };

  console.log(nombre);

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4 ">
            <img src={foto} alt={nombre} className="card-img" />
            {/* <img src={`../../assets/fotos/film1.jpg`} alt={title} className='card-img' /> */}
          </div>

          <div className="col-8">
            <div className="card-body">
              <h2 className="card-title">{nombre}</h2>
            </div>
            <div>
              
            </div>
            <button
              className="btn btn-outline-primary mb-2"
              onClick={(event) => deleter()}
            >
              Eliminar Pelicula Favorita
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
