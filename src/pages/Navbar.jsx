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
            <li><Link to="/contacto">Contacto</Link></li>
            <li className='navbar-carrito'>
          {isAuthenticated ? (
            <div>
              <img src="/img/carrito-de-compras.png" alt="Carrito" /> <span id='carrito-length'> ({carrito.reduce((total, item) => total + item.cantidad, 0)})</span>
              <button
                onClick={cerrarSesion}
              >
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <Link to="/iniciar-sesion">Iniciar Sesión</Link>
          )}
        </li>
        </ul>
    </nav>
  )
}

export default Navbar;