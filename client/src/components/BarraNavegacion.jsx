import { NavLink } from "react-router-dom"

export const BarraNavegacion = () => {
  return (
    <div className="bg-dark">
        <h1 className="text-info mb-3"> Series Animadas DB</h1>
        <NavLink to='/nuevaserie'className="mb-3"> Formulario Serie </NavLink>
        <NavLink to='/todasseries'className="mb-3"> Home </NavLink>
    </div>
  )
}
