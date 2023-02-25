const Series = require('../models/serie.models')



const obtenerSeries = (req, res)=>{
    Series.find(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const obtenerUnaSerie = (req, res) => {
    Series.findById(req.params.id)
    .then( (resultado) => {
        console.log(resultado);
        res.json(resultado);
    })
    .catch ( (error) => {
        console.log(error);
        res.json(error);
    });
}


const crearSeries =  (req, res)=>{
    Series.create(req.body)
    .then((resultado)=>{
        console.log(req.body);
        res.json(resultado)
    }).catch((error)=>{
        console.log(error);
        res.status(400).json(error);
    })
}

const editarSeries = (req, res)=>{
    Series.updateOne({_id: req.params.id}, req.body, {runValidators:true})
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error);
        res.status(400).json();
    })
}


const eliminarSeries = (req, res)=>{
    Series.deleteOne({_id: req.params.id})
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = {
    obtenerSeries,
    obtenerUnaSerie,
    crearSeries,
    editarSeries,
    eliminarSeries
}