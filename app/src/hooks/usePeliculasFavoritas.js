import axios from 'axios';
import  { useEffect, useState } from 'react'
// import { getFilms } from '../helpers/getFilms';


const endPonint = "http://localhost:8000/api";

export const usePeliculasFavoritas = () => {

    const [films, setFilms] = useState([]);

  
    useEffect(() => {
        getFilms();
      }, [])
  
    const getFilms = async () => {
          let token = localStorage.getItem("token");
      const config = {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
      }; 

      const responseFilms = await axios.get(`${endPonint}/peliculas`, config);
      setFilms(responseFilms.data.data); //IMPORTANTE EL .data QUE SI NO NO LE METEMOS LOS DATOS!!!!!!

    };
  


    


  return {
      films,
      setFilms

  }
}