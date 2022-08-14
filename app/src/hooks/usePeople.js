import  { useEffect, useState } from 'react'
import { getFilms } from '../helpers/getFilms';



export const usePeople = (url) => {

    const [actorDate, setActorDate] = useState([]);


    useEffect(() => {
      getDatas();
    }, [])
    


    const getDatas = async () =>{

        const resp = await getFilms.get(`${url}`)
        setActorDate(resp.data);
        // setActorDate(resp);

    }


  return {
      actorDate
  } 
  


}