import React from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <section className="inicio-hero">
      <div className="inicio-imagen">
        <img src={'https://www.pastasramos.com.ar/themes/vox/assets/images/pasta.jpg'} alt="Plato de pasta" />
      </div>
      <div className="inicio-texto">
        <h1>Bienvenidos a <span className="nombre-local">Pasta e Passione</span></h1>
        <p className="inicio-subtitulo">
          Productos naturales de excelencia, elaborados con materia prima de primera calidad.
        </p>
        <p>
          La esencia del trabajo artesanal, con entusiasmo, dedicación y amor por cada plato que preparamos, compartiendo la pasión por la pasta artesanal en cada bocado.
        </p>
        <Link to="/productos"><button className='btn-inicio'>Descubrí nuestras pastas</button></Link>
      </div>
    </section>
  );
}

export default Inicio;
