import axios from 'axios';
import  { useEffect, useState } from 'react'
// import { getFilms } from '../helpers/getFilms';


const endPonint = "http://localhost:8000/api";

export const usePersonajesFavoritos = () => {

    const [characters, setCharacters] = useState([]);

  
    useEffect(() => {
        getCharacters();
      }, [])
  
    const getCharacters = async () => {
      let token = localStorage.getItem("token");
      const config = {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
      };
      const responseCharacters = await axios.get(`${endPonint}/personajes`, config);
      setCharacters(responseCharacters.data.data); //IMPORTANTE EL .data QUE SI NO NO LE METEMOS LOS DATOS!!!!!!

    };
  


    


  return {
      characters,
      setCharacters
  }
  


}