import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function IniciarSesion() {
  const navigate = useNavigate();
  const ubicacion = useLocation();
 
const { setIsAuthenticated, setUsuario } = useAppContext();

  const [formulario, setFormulario] = useState({ nombre: '', email: '' });


  const manejarEnvio = (e) => {
    e.preventDefault();
    if (formulario.nombre && formulario.email) {
      setIsAuthenticated(true);
      setUsuario(formulario);
     
      // Si venía del carrito, redirige a pagar
      if (ubicacion.state?.carrito) {
        navigate('/pagar', { state: { carrito: ubicacion.state.carrito } });
      } else {
        navigate('/productos');
      }
    } else {
      alert('Completa todos los datos');
    }
  };

  return (
    <div id='container-sesion'>
      <form className="form-sesion" onSubmit={manejarEnvio}>
        <h1><span className='nombre-local'>Inicia sesión</span> para continuar</h1>
        <input
          type="text"
          placeholder="Nombre completo"
          value={formulario.nombre}
          onChange={(e) => setFormulario({...formulario, nombre: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formulario.email}
          onChange={(e) => setFormulario({...formulario, email: e.target.value})}
          required
        />
        <button type="submit" className='btn-sesion iniciar'>Iniciar Sesión</button>
        <button type="button" className='btn-sesion cancelar' onClick={() => navigate('/productos')}>
          Cancelar
        </button>
      </form>
    </div>
  );
}