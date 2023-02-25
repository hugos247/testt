const ControladorSeries = require('../controllers/serie.controllers')
const { authenticate } = require('../config/jwt.config');

module.exports = (app) =>{
    app.get('/api/obtenerseries', authenticate ,ControladorSeries.obtenerSeries)
    app.get('/api/unaserie/:id',authenticate ,ControladorSeries.obtenerUnaSerie) 
    app.post('/api/crearseries', authenticate ,ControladorSeries.crearSeries) 
    app.put('/api/editarseries/:id',authenticate ,ControladorSeries.editarSeries)
    app.delete('/api/borrarseries/:id',authenticate ,ControladorSeries.eliminarSeries)
}
