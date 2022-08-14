import React from 'react'
import { usePeople } from '../hooks/usePeople';

export const FinalComponentPeople = ({direccion}) => {
    console.log("actor de final", direccion);

  let datos = usePeople(direccion)

  console.log({datos})

  let {name, height, mass, gender} = datos.actorDate;

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
            src={`../../assets/fotos/${datos}.jpg`}
            alt={name}
            className="card-img"
          />
          {/* <img src={`../../assets/fotos/film1.jpg`} alt={title} className='card-img' /> */}
        </div>

        <div className="col-8">
          <div className="card-body">
            Name: <h5 className="card-title">{name}</h5>
            Height: <p className="card-text"> {height} </p>
            Mass: <p className="card-text"> {mass} </p>
            Gender: <p className="card-text"> {gender} </p>

          </div>
        </div>
      </div>
    </div>
  </div>

  )
}
