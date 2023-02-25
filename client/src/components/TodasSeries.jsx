import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export const TodasSeries = () => {


  const [lista,setLista] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:8000/api/obtenerseries', { withCredentials: true } )
    .then ( (res) =>{
      console.log(res);
      setLista(res.data);
    })
    .catch( (err) => {
      console.log(err);
    })
  },[])

  return (
    <div className="d-flex flex-wrap mt-5">
      {
        lista.map( (serie, indice) => (
          <div>
            <div key={indice}></div>
            <h2>{ serie.title }</h2>
            <Link to={ `/unaserie/${serie._id}` } className="d-block"> Mas Informacion </Link>
            <img  className="col col-4" src={serie.portada} alt="" />
          </div>
        ))

      }
    </div>
  )
}
