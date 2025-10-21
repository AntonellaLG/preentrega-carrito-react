import React, { createContext, useContext, useState } from "react";

// Crear el contexto
export const AppContext = createContext();

// Proveedor del contexto, se encarga de distribuir las funciones globales
export function AppProvider({ children }) {
  // Estado de autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuario, setUsuario] = useState({ nombre: "", email: "" });

  // Estado del carrito
  const [carrito, setCarrito] = useState([]);

  // Funciones para el carrito
  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find((p) => p.id === producto.id);

    if (productoExistente) {
      // Si ya está en el carrito, aumenta la cantidad
      setCarrito(
        carrito.map((p) =>
          p.id === producto.id? { ...p, cantidad: (p.cantidad || 1) + 1 } : p
        )
      );
    } else {
      // Si no está, lo agrega con cantidad inicial = 1
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
    
    alert(`Producto ${producto.nombre} agregado al carrito`);
  };

    //Vacía todo el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // Aumenta la cantidad de un producto existente
  const agregarCantidad = (idProducto) => {
    const productoExistente = carrito.find(p => p.id === idProducto);

    if (productoExistente) {
      setCarrito(
        carrito.map(p =>
          p.id === idProducto ? { ...p, cantidad: (p.cantidad || 1) + 1 } : p
        )
      );
    }
  };

  //Reduce la cantidad o elimina el producto
  const quitarCantidad = (idProducto) => {
    const productoExistente = carrito.find(p => p.id === idProducto);

    if (!productoExistente) return;

    if ((productoExistente.cantidad || 1) > 1) {
      // Resta una unidad
      setCarrito(
        carrito.map(p =>
          p.id === idProducto
            ? { ...p, cantidad: p.cantidad - 1 }
            : p
        )
      );
    } else {
      // Si llega a 0, se elimina del carrito
      setCarrito(carrito.filter(p => p.id !== idProducto));
    }
  };

  const borrarProducto = (idProducto => {
      setCarrito(carrito.filter(p => p.id !== idProducto));
    }
  );

  // Función para cerrar sesión
  const cerrarSesion = () => {
    setIsAuthenticated(false);
    setUsuario({ nombre: "", email: "" });
    vaciarCarrito(); 
  };

  // Valor que se provee a todos los componentes
  const value = {
    // Autenticación
    isAuthenticated,
    setIsAuthenticated,
    usuario,
    setUsuario,
    cerrarSesion,
   
    // Carrito
    carrito,
    agregarAlCarrito,
    vaciarCarrito,
    agregarCantidad,
    quitarCantidad,
    borrarProducto
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe usarse dentro de AppProvider");
  }
  return context;
}