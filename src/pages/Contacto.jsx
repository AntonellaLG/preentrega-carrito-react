import { useState } from "react";

function Contacto() {
  // Estados para los campos
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });
  const [enviado, setEnviado] = useState(false)

  //
  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,  // operador de propagación o spread operator | Mantiene los valores existentes
      [e.target.name]: e.target.value  // Actualiza sólo el campo que cambió | Clave: Valor
    });
  };

  // Ejecuta al enviar
    const manejarEnvio = (e) => {
      e.preventDefault(); // evita que se recargue la página
      console.log("Datos enviados:", formulario);
      setEnviado(true);

    //Limpio el form
      setFormulario({
        nombre: '',
        correo: '',
        mensaje: '',
      })
      //setEnviado(false) no tiene que ir, porque sino cancelo el msj que salta al enviar

    // Oculta la alerta después de 7 segundos
    setTimeout(() => setEnviado(false), 7000);
    };

  return (
    <>
    <h1 id="contacto-titulo">Contacto</h1>
    <div id="contacto-container">
      <div id='contacto-tarjeta'>
        <h2>Enviá tu mensaje</h2>
        <form onSubmit={manejarEnvio}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formulario.nombre}
              onChange={manejarCambio}
              placeholder="Escribe tu nombre"
              required
            />
          </div>

          <div>
            <label>Correo:</label>
            <input
              type="email"
              name="correo"
              value={formulario.correo}
              onChange={manejarCambio}
              placeholder="ejemplo@email.com"
              required
            />
          </div>
  
          <div>
            <label>Mensaje:</label>
            <textarea
              value={formulario.mensaje}
              name="mensaje"
              onChange={manejarCambio}
              placeholder="Escribe tu mensaje"
              required
            />
          </div>

          <button type="submit" className="btn-form">Enviar</button>
        </form>
      
          {/* ✅ Alerta de éxito */}
          {enviado && (
            <div className="alerta-exito">
              <span>✅ ¡Gracias! Tu mensaje fue enviado con éxito.</span>
            </div>
          )}
      </div>

      <div id="contacto-info">
        <div className="wrap-contacto">
          <img src="https://www.pastasramos.com.ar/themes/vox/assets/images/telefono.png" alt="telefono Pasta e Passione" className="contacto-icono"/>
          <div className="contacto-item">
            <h3>Llamanos</h3>
            <span className="contacto-datos">
              <a href="tel: 01142083818">(011) 4567-8901</a>
              <span className="small"> - <i>Líneas Rotativas</i></span>
            </span>
          </div>
        </div>
        <div className="wrap-contacto">
          <img src="https://www.pastasramos.com.ar/themes/vox/assets/images/mail.png" alt="mail Pasta e Passione" className="contacto-icono"/>
          <div className="contacto-item">
            <h3>Escribinos</h3>
            <span className="contacto-datos">
              <a href="mailto:info@pastasramos.com.ar">info@pastaepassione.com.ar</a>
            </span>
          </div>
        </div>
        <div className="wrap-contacto">
          <h3 id="contacto-redes">Seguinos</h3>
          <div className="redes-sociales">
            <a href="https://www.facebook.com/Pastas-e-Passione" target="_blank">
              <img src="https://www.pastasramos.com.ar/themes/vox/assets/images/ico-facebook.png" className="icono-redes icono-facebook" alt="Pasta e Passione Facebook"/>
            </a>
            <a href="https://www.instagram.com/Pasta-e-Passione/" target="_blank">
              <img src="https://www.pastasramos.com.ar/themes/vox/assets/images/ico-instagram.png" className="icono-redes icono-instagram" alt="Pasta e Passione Instagram"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
  )
};

export default Contacto;
