import  { useEffect, useState } from 'react'
import { getFilms } from '../helpers/getFilms';
import { usePeople } from './usePeople';





export const useIdFilms = (date) => {

    const id = date;

    const [film, setFilms] = useState([]);

    const [actores, setActores] = useState([]);


    useEffect(() => {
      getDatas();
    }, [])
    


    const getDatas = async () =>{

        const resp = await getFilms.get(`https://swapi.dev/api/films/${id}`)
        setFilms(resp.data);
        setActores(resp.data.characters);

    }


  return {
      film,
      actores
  } 
  


}