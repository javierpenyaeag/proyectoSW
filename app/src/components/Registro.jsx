import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const endPoint = `http://localhost:8000/api/register`;

export const Registro = () => {

  const [nombre, setNombre] = useState('');

  const [email, setEmail] = useState('');
  // const [descripcionDegreso, setDescripcionDegreso] = useState('');

  const [password, setPasword] = useState('');
  // const [descripcionDegreso, setDescripcionDegreso] = useState('');


  const navigate = useNavigate();

  const store = async(event) =>{
      event.preventDefault();
      await axios.post(endPoint, {name: nombre , email: email, password: password});
      navigate('/');
      // console.log("hola mundo");
  }

  // const storeDegreso= async(event) =>{
  //   event.preventDefault();
  //   await axios.post(endPoint2, {cantidad: cantidadDegreso, descripcion: descripcionDegreso})
  //   navigate('/');
  // }


  return (
    <div>
              <h3>Regístrese:</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={nombre}
                    onChange={ (e) => setNombre(e.target.value)}
                    type="text"
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>E-mail</label>
                <input 
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                    type="email"
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Contraseña</label>
                <input 
                    value={password}
                    onChange={ (e) => setPasword(e.target.value)}
                    type="password"
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Añadir</button>
        </form>
    </div>
  )
}
