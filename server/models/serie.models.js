const mongoose = require('mongoose');

// Schema
const SerieSchema = mongoose.Schema({
    title:{
        type:String,
        required: [true, "Por favor agrega un titulo" ],
        minLength:[3, "Titulo no puede ser menor a 3 caracteres"]
    },
    creador:{
        type:String,
        required: [true, "Por favor agrega un creador" ],
    },
    rating:{
        type:String,
        enum: ['G','PG','PG-13','R','NC-17'],
        required: [true, "Por favor selecciona una opcion" ],
    },
    genero:{
        type:String,
        enum: [
            'Comedia',
            'Drama',
            'Horror',
            'Sci-Fi',
            'Fantasy',
            'Action',
            'Shonen',
            'Family',],
            required: [true, "Por favor selecciona una opcion" ],
    },
    year:{
        type:Number
    },
    portada:{
        type:String
    }
},{timestamps:true})

const Series = mongoose.model('Series', SerieSchema);
module.exports = Series;