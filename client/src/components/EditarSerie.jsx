import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate,useParams,useNavigate } from "react-router-dom";


export const EditarSerie = () => {


        const [title, setTitle] = useState('');
        const [creador, setCreador] = useState('');
        const [rating, setRating] = useState('');
        const [genero, setGenero] = useState('');
        const [year, setYear] = useState('');
        const [portada, setPortada] = useState('');

        const [errors, setErrors] = useState({});


        //Obtener ID de URL
        const { id } = useParams();
        const navigate = useNavigate();

        useEffect(() =>{
            axios.get(`http://localhost:8000/api/unaserie/${id}`)
            .then ( (res) =>{
              console.log(res);
              setTitle(res.data.title);
              setCreador(res.data.creador);
              setRating(res.data.rating);
              setGenero(res.data.genero);
              setYear(res.data.year);
              setPortada(res.data.portada);
            })
            .catch( (err) => {
              console.log(err);
            })
          },[])

    const submitHandler = ( event ) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/editarseries/${id}`, 
        {
            title,
            creador,
            rating,
            genero,
            year,
            portada
        })
        .then ( (res) => {
            console.log(res);
            navigate('/todasseries');
        })
        .catch( (err) => {
          console.log(err, "Llega por el catch");
          setErrors(err.response.data.errors);
        });
    }


  return (
    <div className="col-6 mx-auto">
    <h1> Formulario para editar una serie </h1>
    <form onSubmit= {submitHandler }>
        <label htmlFor="" className="form-label">Titulo Serie</label>
        <input type="text" value={ title } className="form-control"onChange={event => setTitle(event.target.value)}/>
        {errors.title ? <span className='text-danger'> {errors.title.message} </span> : null} <br />

        <label htmlFor="" className="form-label">Creador</label>
        <input type="text" value={ creador } className="form-control"onChange={event => setCreador(event.target.value)}/>


        <label htmlFor="" className="form-label">Rating</label>
        {/* <input type="text" value={ rating } className="form-control"onChange={event => setRating(event.target.value)}/> */}
        <select className="form-control" value={ rating } onChange={ ( event )=>setRating(event.target.value)}>
                <option>Select A Rating</option>
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="R">R</option>
                <option value="NC-17">NC-17</option>
        </select>


        <label htmlFor="" className="form-label">Genero</label>
        {/* <input type="text" value={ genero } className="form-control"onChange={event => setGenero(event.target.value)}/> */}
        <select className="form-control" value={ genero } onChange={ ( event )=>setGenero(event.target.value)}>
                <option>Select A Genre</option>
                <option value="Comedia">Comedia</option>
                <option value="Drama">Drama</option>
                <option value="Horror">Horror</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Action">Action</option>
                <option value="Shonen">Shonen</option>
                <option value="Family">Family</option>
        </select>


        <label htmlFor="" className="form-label">Year</label>
        <input type="number" value={ year } className="form-control"onChange={event => setYear(event.target.value)}/>


        <label htmlFor="" className="form-label">Portada</label>
        <input type="text" value={ portada } className="form-control"onChange={event => setPortada(event.target.value)}/>


        <button className="btn btn-success mt-3">Editar Serie</button>
    </form>
</div>
  )
}
