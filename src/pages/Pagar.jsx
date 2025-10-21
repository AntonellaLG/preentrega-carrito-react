import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export default function Pagar() {
  const { usuario, cerrarSesion, carrito } = useAppContext();
  const navigate = useNavigate();

  const total = carrito.reduce(
    (suma, producto) => suma + Number(producto.precio),
    0
  );

  const comprar = () => {
    alert("¡Compra realizada con éxito!");
    navigate("/productos");
  };

  return (
    <div className="pagar">
      <div className="pagar-usuario">
        <h2>{usuario.nombre}</h2>
        <p>Email: {usuario.email}</p>
        <button onClick={cerrarSesion}>Cerrar sesión</button>
      </div>

      <div className="pagar-productos">
        <h2>Tu compra:</h2>

        {carrito.map((producto) => (
          <div key={producto.id} className="pagar-producto">
            <img src={producto.avatar} alt={producto.nombre} width="60" />
            <span>{producto.nombre}</span>
            <strong>${producto.precio}</strong>
          </div>
        ))}

        <h3>Total a pagar: ${total}</h3>

        <div className="pagar-botones">
          <button
            id="btn-cancelar"
            className="btn-pagar"
            onClick={() => navigate("/productos")}
          >
            Cancelar
          </button>
          <button
            id="btn-confirmar"
            className="btn-pagar"
            onClick={comprar}
          >
            Confirmar y Pagar
          </button>
        </div>
      </div>
    </div>
  );
}
