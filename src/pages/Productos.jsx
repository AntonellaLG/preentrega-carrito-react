import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CarritoCompras from "./Carrito";
import { useAppContext } from "../context/AppContext";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  //Contexto para el carrito
  const { agregarAlCarrito } = useAppContext();

  useEffect(() => {
    fetch("https://68dadf3a23ebc87faa317c19.mockapi.io/api/productos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        {console.error("Error!,", error)}
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    <h1 className="title-productos">Nuestras pastas</h1>
    <ul id="lista-productos">
      {productos.map((producto) => (
        <li key={producto.id}>
        <h2>{producto.nombre}</h2>
          <br />
          {producto.descripcion}
          <br />
          Precio: ${producto.precio}
          <br />
          <img src={producto.avatar} alt={producto.nombre} width="100%" />
          <Link to={`/productos/${producto.id}`} state={{producto}}><button id="btn-producto">Más detalles</button></Link>
          <button id="btn-producto" onClick= {() => agregarAlCarrito(producto)}>Comprar</button>
        </li>
      ))}
    </ul>
    <CarritoCompras />
    </>
  );
}

//El state en el último Link es la memoria interna de la componente
//Con ${producto.id} establezco el valor dinamico de la ruta, y con state={{producto} establezco el valor que va a almacenar el componente