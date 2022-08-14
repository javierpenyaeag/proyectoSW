import  { useEffect, useState } from 'react'
import { getFilms } from '../helpers/getFilms';



export const useFilms = () => {

    const [films, setFilms] = useState([]);


    useEffect(() => {
      getDatas();
    }, [])
    


    const getDatas = async () =>{

        const resp = await getFilms.get('https://swapi.dev/api/films/')
        setFilms(resp.data.results);
    }


  return {
      films

  }
  


}
