import { Link, useParams, useLocation } from "react-router-dom";

const ProductoDetalle = () => {
 
    const { id } = useParams(); //useParams() captura el id como elto dinamico, captura lo que la ruta va a mostrar arriba
    const location = useLocation(); //useLocation() trae la info que pase con el state, se encarga de que la memo interna de un componente, al almacenar todo el objeto de un producto, lo guarde y lo reciba location
    const producto = location.state?.producto;
 
if (!producto) {
    return (
      <div>
        <p>No se pudo cargar el producto</p>
        <Link to="/carrito">
          <button>Volver a Productos</button>
        </Link>
      </div>
    );
  }
 
  return(
    <>
    <div id="container-detalle-producto">
      <div id="detalle-imagen">
        <img src={producto.avatar} alt={producto.nombre} id=""/>
        <Link to={`/productos`}><button id="btn-volver">Volver</button></Link>
      </div>
      <div id="detalle-info">
        <h2>Detalles del Producto: {producto.nombre}</h2>
        <ul>
          <li key={producto.id}>
            <p><strong>Descripción: </strong>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}; export default ProductoDetalle;