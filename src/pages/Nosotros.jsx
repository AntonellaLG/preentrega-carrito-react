import React from 'react'

function Nosotros() {
return (
    <div className="nosotros-container">
      <div className="nosotros-texto">
        <h1>Acerca de <span className='nombre-local'>nosotros</span></h1>
        <p className="nosotros-intro">
          Productos naturales de excelencia, elaborados con materia prima de primera calidad.
        </p>
        <p>
          Nuestra historia comienza hace más de dos décadas en un pequeño taller familiar del sur
          de Buenos Aires. Inspirados por las tradiciones italianas de nuestros abuelos, decidimos
          mantener viva la esencia del trabajo artesanal: amasar, cortar y rellenar cada pasta con
          entusiasmo, dedicación y amor por la buena comida.
        </p>
        <p>
          Hoy seguimos creciendo, pero sin perder el alma de nuestros inicios. En cada plato que
          preparamos buscamos compartir esa pasión que nos une a lo simple, lo auténtico y lo hecho
          con las manos. Porque en <strong><span className="nombre-local">Pasta e Passione</span></strong>, cada bocado cuenta una historia.
        </p>
      </div>

      <div className="nosotros-imagen">
        <img
          src="https://www.pastasramos.com.ar/themes/vox/assets/images/bloque-excelencia.jpg"
          alt="Elaboración artesanal de pasta"
        />
      </div>
    </div>
  );
}

export default Nosotros;