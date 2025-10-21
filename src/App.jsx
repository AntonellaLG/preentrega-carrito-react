import React, { useState } from 'react'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Navbar from './pages/Navbar'
import Productos from './pages/Productos'
import ProductoDetalle from './pages/DetalleProductos'
import Contacto from './pages/Contacto'
import Pagar from "./pages/Pagar";
import RutaProtegida from './pages/RutaProtegida'
import IniciarSesion from "./pages/IniciarSesion";
import Footer from './pages/Footer'
import { Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'

function App() {

  return (
    <AppProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/productos/:id' element={<ProductoDetalle />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />
          }
        />
        <Route path="/pagar" element={ <RutaProtegida >
              <Pagar />
            </RutaProtegida>
          }
        />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <Footer />
    </AppProvider>
  )
}

export default App;