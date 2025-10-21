import React from 'react';
import { useNavigate } from "react-router-dom";
import { useAppContext } from '../context/AppContext';

export default function CarritoCompras() {
const { carrito, agregarCantidad, quitarCantidad, borrarProducto, vaciarCarrito, isAuthenticated } = useAppContext();

  const navigate = useNavigate();

  const irAPagar = () => {
    navigate("/pagar", { state: { carrito } });
  };

  //Calcula el total del carrito
  const total = carrito.reduce((sum, item) => {
    const cantidad = item.cantidad || 1;
    return sum + Number(item.precio) * cantidad;
  }, 0);


  return (
    <div className='carrito'>
      <hr />
      <h2>🛍️ Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {carrito.map((item) => (
            <div key={item.id} style={{ marginBottom: "0.8rem" }}>
              <strong>{item.nombre}</strong> — ${Number(item.precio).toFixed(0)}
              <br />
              Cantidad: {item.cantidad || 1} &nbsp;
              <button className='btn-carrito' onClick={() => quitarCantidad(item.id)}>-</button>
              <button className='btn-carrito' onClick={() => agregarCantidad(item.id)}>+</button>
              <button className='btn-carrito' onClick={() => borrarProducto(item.id)}>Borrar</button>
            </div>
          ))}

          <hr />
          <p><strong>Total: ${Number(total).toFixed(0)}</strong></p>
          <div>
            <button id='btn-carrito-vaciar' className='btn-carrito-total' onClick={vaciarCarrito}>Vaciar Carrito</button>
            <button id='btn-carrito-pagar' className='btn-carrito-total' onClick={irAPagar}>Pagar</button>
          </div>
        </>
      )}
    </div>
  );
}
