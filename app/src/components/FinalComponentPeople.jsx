import axios from 'axios';
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { usePeople } from '../hooks/usePeople';

const endPoint = "http://localhost:8000/api/personaje";

export const FinalComponentPeople = ({direccion}) => {
    console.log("actor de final", direccion);

    const navigate = useNavigate();

  let datos = usePeople(direccion)

  console.log("datos actordate", datos.actorDate);
  

  let {name, height, mass, gender} = datos.actorDate;

  const store = async(name, image, height, mass, gender, event) =>{
    event.preventDefault();
    console.log("entra en store de personajes");
    let token = localStorage.getItem("token");
    const config = {
      headers: {
          "Content-type": "application/json",
           "Authorization": `Bearer ${token}`,
      },
    }; 
    await axios.post(endPoint, {nombre: name, foto: image, peso:mass, altura: height, genero: gender }, config)
    navigate('/personajesFavoritos');
  
  }

  let buscar = 'imagen'

  let image = require(`../../assets/fotos/${buscar}.gif`);

  

  // console.log(datos.actorDate.name);
  // console.log(datos.actorDate.height);
  // console.log(datos.actorDate.mass);
  // console.log(datos.actorDate.gender);

  console.log(name);
  console.log(height);
  console.log(mass);
  console.log(gender);

  return (
    // <div>
    //     <h1>{direccion}</h1>
    // </div>


    <div className="col animate__animated animate__fadeIn">
    <div className="card">
      <div className="row no-gutters">
        <div className="col-4 ">
          <img
            src={`${image}`}
            alt={name}
            className="card-img"
          />
          {/* <img src={`../../assets/fotos/film1.jpg`} alt={name} className='card-img' /> */}
        </div>

        <div className="col-8">
          <div className="card-body">
            Name: <h5 className="card-title">{name}</h5>
            Height: <p className="card-text"> {height} </p>
            Mass: <p className="card-text"> {mass} </p>
            Gender: <p className="card-text"> {gender} </p>

          </div>
          <button
                className="btn btn-outline-primary mb-4"
                onClick={(event) => store(name, image,
                height, mass, gender, event)}
          >
            Añadir personaje favorito
            </button>
            
        </div>
      </div>
    </div>
  </div>

  )
}
