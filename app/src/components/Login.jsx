import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const endPoint = `http://localhost:8000/api/login`;

export const Login = () => {

    const [nombre, setNombre] = useState('');

    const [email, setEmail] = useState('');
    // const [descripcionDegreso, setDescripcionDegreso] = useState('');
  
    const [password, setPasword] = useState('');
    // const [descripcionDegreso, setDescripcionDegreso] = useState('');
  
  
    const navigate = useNavigate();
  
    const login = async(event) =>{
        event.preventDefault();
        let datos = await axios.post(endPoint, {name: nombre , email: email, password: password});
        console.log("estos son los datos", datos);
        localStorage.setItem("token", datos.data.token);


        navigate('/');

        // console.log("hola mundo");
}


  return (
    <div>
      <h3>Inicie Sesión si ya está registrado como usuario:</h3>
      <form onSubmit={login}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">E-mail</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            value={password}
            onChange={(e) => setPasword(e.target.value)}
            type="password"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Iniciar
        </button>
      </form>
      <Link className="navbar-brand my-4" to="/registro">
            Aún no estoy registrado como usuario
      </Link>
    </div>
    
  );
};
