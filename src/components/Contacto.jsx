import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  });
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensaje({ tipo: '', texto: '' });

    try {
      const response = await fetch('http://localhost:5001/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje({
          tipo: 'success',
          texto: '¡Mensaje enviado con éxito! Te contactaré pronto.'
        });
        // Limpiar formulario
        setFormData({
          nombre: '',
          telefono: '',
          email: '',
          mensaje: ''
        });
      } else {
        setMensaje({
          tipo: 'error',
          texto: data.error || 'Error al enviar el mensaje. Intenta nuevamente.'
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setMensaje({
        tipo: 'error',
        texto: 'Error de conexión. Verifica que el servidor esté activo.'
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contacto">
      <h2>Contacto</h2>

      {mensaje.texto && (
        <div className={`mensaje-alerta ${mensaje.tipo}`}>
          {mensaje.texto}
        </div>
      )}

      <form className="formulario" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Contactános llenando todos los campos</legend>

          <div className="contenedor-campos">
            <div className="campo">
              <label>Nombre</label>
              <input 
                className="input-text" 
                type="text" 
                name="nombre"
                placeholder="Tu Nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="campo">
              <label>Teléfono</label>
              <input 
                className="input-text" 
                type="tel" 
                name="telefono"
                placeholder="Tu Teléfono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>

            <div className="campo">
              <label>Correo</label>
              <input 
                className="input-text" 
                type="email" 
                name="email"
                placeholder="Tu Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="campo">
              <label>Mensaje</label>
              <textarea 
                className="input-text"
                name="mensaje"
                placeholder="Tu mensaje..."
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          <div className="alinear-derecha flex">
            <input 
              className="boton w-sm-100" 
              type="submit" 
              value={enviando ? 'Enviando...' : 'Enviar'}
              disabled={enviando}
            />
          </div>
        </fieldset>
      </form>
    </section>
  );
}
