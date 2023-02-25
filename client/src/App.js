//import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { SerieFormularios } from './components/SerieFormularios';
import { TodasSeries } from './components/TodasSeries';
import { BarraNavegacion } from './components/BarraNavegacion';
import { UnaSerie } from './components/UnaSerie';
import { EditarSerie } from './components/EditarSerie';
import Registro from './components/Registro';
import Login from './components/Login';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <BarraNavegacion />
          <Routes>
            <Route path='/nuevaserie' element={ <SerieFormularios /> }></Route>
            <Route path='/todasseries' element={ <TodasSeries /> }></Route>
            <Route path='/unaserie/:id' element={ <UnaSerie /> }></Route>
            <Route path='/editarserie/:id' element={ <EditarSerie/> }>  </Route>
            <Route path='/registro' element={ <Registro/> }>  </Route>
            <Route path='/login'element={<Login/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
