
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 8000;
require('dotenv').config();
const cookieParser = require('cookie-parser');


//Requerir archivo de configuracion
require('./config/mongoose.config');



//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// middleware que agregar cookies a la solicitud
app.use(cookieParser());


//CORS
app.use(cors({
    origin:'http://localhost:3000',
    credentials: true 
}));


//Importar las rutas del servidor back-end
const Rutas = require('./routes/serie.routes');
Rutas(app);
const rutasUsuarios = require('./routes/user.routes');
rutasUsuarios(app);

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});

//