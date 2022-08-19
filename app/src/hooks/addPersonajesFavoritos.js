import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const endPoint = "http://localhost:8000/api/personaje";

export const addPersonajesFavoritos = ({nombre, foto, peso, altura, genero}) => {


    store();

    const store = async(event) =>{
        event.preventDefault();
        await axios.post(endPoint, {nombre: nombre, altura: altura, genero: genero, foto: foto, peso: peso})
        Navigate('/');
    }

//   return (
    

//   )

}
