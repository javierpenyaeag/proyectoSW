import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export const FinalPersonajeFavorito = ({
  id,
  nombre,
  peso,
  altura,
  genero,
  foto,
  callback
}) => {
  console.log(nombre);

  const navigate = useNavigate();

  let buscar = 'imagen2'

  let image = require(`../../assets/fotos/${buscar}.gif`);

  const endPonint = "http://localhost:8000/api/personaje";

  const deleter = async () => {
    let token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    // const CharacterDeletedId = await axios.delete(`${endPonint}/${id}`, config);

    await axios.delete(`${endPonint}/${id}`, config);
    callback(id);
    // setFilmsArray(
    //   filmsArray.filter(film => film.id !== filmDeletedId)
    // );
    //navigate('/');
  };

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4 ">
            <img
              src={image}
              alt={nombre}
              className="card-img"
            />
            {/* <img src={`../../assets/fotos/film1.jpg`} alt={title} className='card-img' /> */}
          </div>

          <div className="col-8">
            <div className="card-body">
              Name: <h5 className="card-title">{nombre}</h5>
              Height: <p className="card-text"> {altura} </p>
              Mass: <p className="card-text"> {peso} </p>
              Gender: <p className="card-text"> {genero} </p>
            </div>
            <button
              className="btn btn-outline-primary mb-4"
              onClick={(event) => deleter()}
            >
              Eliminar Personaje Favorito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
