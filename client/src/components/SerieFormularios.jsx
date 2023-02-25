import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export const SerieFormularios = () => {
    const [title, setTitle] = useState('');
    const [creador, setCreador] = useState('');
    const [rating, setRating] = useState('');
    const [genero, setGenero] = useState('');
    const [year, setYear] = useState('');
    const [portada, setPortada] = useState('');

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const submitHandler = ( event ) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/crearseries', 
        {
            title,
            creador,
            rating,
            genero,
            year,
            portada
        }, { withCredentials: true })
        .then ( (res) => {
            console.log(res, "Llega por then");
            navigate('/todasseries');
        })
        .catch( (err) => {
            console.log(err, "Llega por catch");
            setErrors(err.response.data.errors);
        });
    }


  return (
    <div className="col-6 mx-auto">
        <h1> Formulario para crear una serie </h1>
        <form onSubmit= {submitHandler }>
            
            <label htmlFor="" className="form-label">Titulo Serie</label>
            <input type="text" className="form-control"onChange={event => setTitle(event.target.value)}/>
            {errors.title ? <span className='text-danger'> {errors.title.message} </span> : null} <br />
            
            
            <label htmlFor="" className="form-label">Creador</label>
            <input type="text" className="form-control"onChange={event => setCreador(event.target.value)}/>
            {errors.creador ? <span className='text-danger'> {errors.creador.message} </span> : null} <br />
            

            
            <label htmlFor="" className="form-label">Rating</label>

            <select className="form-control"  onChange={ ( event )=>setRating(event.target.value)}>
                <option>Select A Rating</option>
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="R">R</option>
                <option value="NC-17">NC-17</option>
            </select>
            {errors.rating ? <span className='text-danger'> {errors.rating.message} </span> : null} <br />
            

            
            <label htmlFor="" className="form-label">Genero</label>
            

            <select className="form-control"  onChange={ ( event )=>setGenero(event.target.value)}>
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
            {errors.genero ? <span className='text-danger'> {errors.genero.message} </span> : null} <br />

        


            <label htmlFor="" className="form-label">Year</label>
            <input type="number" className="form-control"onChange={event => setYear(event.target.value)}/>


            <label htmlFor="" className="form-label">Portada</label>
            <input type="text" className="form-control"onChange={event => setPortada(event.target.value)}/>


            <button className="btn btn-success mt-3">Crear Serie</button>
        </form>
    </div>
  )
}
