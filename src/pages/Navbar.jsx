import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';

function Navbar() {

  const { isAuthenticated, usuario, carrito, cerrarSesion } = useAppContext();

  return (
    <nav>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li >
            {isAuthenticated ? (
            <>
               <li>
                   <span>Hola, {usuario.nombre}</span>
               </li>
               <li>
                   <span>Carrito: ({carrito.length})</span>
               </li>
               <li>
                   <button
                      onClick={cerrarSesion}
                   >
                      Cerrar Sesión
                   </button>
                </li>
            </>
          ) : (
            <Link to="/iniciar-sesion">Iniciar Sesión</Link>
          )}
        </li>

        </ul>
    </nav>
  )
} export default Navbar