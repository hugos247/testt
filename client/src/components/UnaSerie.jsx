import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';


export const UnaSerie = () => {
    //edicion de objeto
    const [serie, setSerie] = useState({});

    //Obtener ID de URL
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/unaserie/${id}`, { withCredentials: true } )
        .then ( (res) =>{
          console.log(res);
          setSerie(res.data);
        })
        .catch( (err) => {
          console.log(err);
        })
      },[])

      const borrarSerie = () => {
        axios.delete(`http://localhost:8000/api/borrarserie/${id}`, {withCredentials: true})
        .then ( (res) => {
          console.log(res);
          navigate('/todasseries');
        })
        .catch ( (err) => {
          console.log(err);
        })
      }


  return (
    <div>
        <img src={ serie.portada } alt="Portada de la serie" />
        <p> Titulo: {serie.title} </p>
        <p> Creador: {serie.creador} </p>
        <p> Genero: {serie.genero} </p>
        <p> Fecha en la que se guardo esto: {serie.createdAt} </p>
        <Link to={`/editarserie/${id}`} > Editar Serie </Link>
        <button className="btn btn-danger" onClick={ borrarSerie }> Borrar Serie </button>
    </div>
  )
}
