import axios from 'axios';
import React from 'react'
import { Link, Navigate, NavLink } from "react-router-dom";
const endPonint = "http://localhost:8000/api";

export const BarraNavegacion = () => {

  // const cerrarSesion = document.querySelector(".cerrarSesion");

  // cerrarSesion.style.cursor = "pointer";

  const logout = async () =>{
    let token = localStorage.getItem("token");
    const config = {
      headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${token}`,
      },
    }; 

    const message = await axios.post(`${endPonint}/logout`, {}, config);
    localStorage.setItem("token", "");
    Navigate("/");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
    <div className="container-fluid ">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            to="/"
          >
            Inicio
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            to="/personajesFavoritos"
          >
            Personajes Favoritos
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            to="/peliculasFavoritas"
          >
            Películas Favoritas
          </NavLink>
        </ul>
      </div>

      <Link className="navbar-brand my-4" to="/registro">
            Registrarse
          </Link>

          <Link className="navbar-brand my-4" to="/login">
            Iniciar Sesión
          </Link>
          <div className="navbar-brand my-4 cerrarSesion" style={{cursor:'pointer'}} onClick={logout}>
            Cerrar Sesión
          </div>
    </div>
  </nav>
  )
}
