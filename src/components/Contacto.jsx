import { useState } from 'react';

export default function Contacto() {
  // Lista completa de países con sus prefijos y banderas
  const paises = [
    // América
    { codigo: 'AR', nombre: 'Argentina', prefijo: '+54', bandera: '🇦🇷' },
    { codigo: 'BO', nombre: 'Bolivia', prefijo: '+591', bandera: '🇧🇴' },
    { codigo: 'BR', nombre: 'Brasil', prefijo: '+55', bandera: '🇧🇷' },
    { codigo: 'CA', nombre: 'Canadá', prefijo: '+1', bandera: '🇨🇦' },
    { codigo: 'CL', nombre: 'Chile', prefijo: '+56', bandera: '🇨🇱' },
    { codigo: 'CO', nombre: 'Colombia', prefijo: '+57', bandera: '🇨🇴' },
    { codigo: 'CR', nombre: 'Costa Rica', prefijo: '+506', bandera: '🇨🇷' },
    { codigo: 'CU', nombre: 'Cuba', prefijo: '+53', bandera: '🇨🇺' },
    { codigo: 'DO', nombre: 'Rep. Dominicana', prefijo: '+1-809', bandera: '🇩🇴' },
    { codigo: 'EC', nombre: 'Ecuador', prefijo: '+593', bandera: '🇪🇨' },
    { codigo: 'SV', nombre: 'El Salvador', prefijo: '+503', bandera: '🇸🇻' },
    { codigo: 'US', nombre: 'Estados Unidos', prefijo: '+1', bandera: '🇺🇸' },
    { codigo: 'GT', nombre: 'Guatemala', prefijo: '+502', bandera: '🇬🇹' },
    { codigo: 'HN', nombre: 'Honduras', prefijo: '+504', bandera: '🇭🇳' },
    { codigo: 'MX', nombre: 'México', prefijo: '+52', bandera: '🇲🇽' },
    { codigo: 'NI', nombre: 'Nicaragua', prefijo: '+505', bandera: '🇳🇮' },
    { codigo: 'PA', nombre: 'Panamá', prefijo: '+507', bandera: '🇵🇦' },
    { codigo: 'PY', nombre: 'Paraguay', prefijo: '+595', bandera: '🇵🇾' },
    { codigo: 'PE', nombre: 'Perú', prefijo: '+51', bandera: '🇵🇪' },
    { codigo: 'PR', nombre: 'Puerto Rico', prefijo: '+1-787', bandera: '🇵🇷' },
    { codigo: 'UY', nombre: 'Uruguay', prefijo: '+598', bandera: '🇺🇾' },
    { codigo: 'VE', nombre: 'Venezuela', prefijo: '+58', bandera: '🇻🇪' },
    
    // Europa
    { codigo: 'DE', nombre: 'Alemania', prefijo: '+49', bandera: '🇩🇪' },
    { codigo: 'AT', nombre: 'Austria', prefijo: '+43', bandera: '🇦🇹' },
    { codigo: 'BE', nombre: 'Bélgica', prefijo: '+32', bandera: '🇧🇪' },
    { codigo: 'BG', nombre: 'Bulgaria', prefijo: '+359', bandera: '🇧🇬' },
    { codigo: 'HR', nombre: 'Croacia', prefijo: '+385', bandera: '🇭🇷' },
    { codigo: 'DK', nombre: 'Dinamarca', prefijo: '+45', bandera: '🇩🇰' },
    { codigo: 'SK', nombre: 'Eslovaquia', prefijo: '+421', bandera: '🇸🇰' },
    { codigo: 'SI', nombre: 'Eslovenia', prefijo: '+386', bandera: '🇸🇮' },
    { codigo: 'ES', nombre: 'España', prefijo: '+34', bandera: '🇪🇸' },
    { codigo: 'EE', nombre: 'Estonia', prefijo: '+372', bandera: '🇪🇪' },
    { codigo: 'FI', nombre: 'Finlandia', prefijo: '+358', bandera: '🇫🇮' },
    { codigo: 'FR', nombre: 'Francia', prefijo: '+33', bandera: '🇫🇷' },
    { codigo: 'GR', nombre: 'Grecia', prefijo: '+30', bandera: '🇬🇷' },
    { codigo: 'NL', nombre: 'Holanda', prefijo: '+31', bandera: '🇳🇱' },
    { codigo: 'HU', nombre: 'Hungría', prefijo: '+36', bandera: '🇭🇺' },
    { codigo: 'IE', nombre: 'Irlanda', prefijo: '+353', bandera: '🇮🇪' },
    { codigo: 'IS', nombre: 'Islandia', prefijo: '+354', bandera: '🇮🇸' },
    { codigo: 'IT', nombre: 'Italia', prefijo: '+39', bandera: '🇮🇹' },
    { codigo: 'LV', nombre: 'Letonia', prefijo: '+371', bandera: '🇱🇻' },
    { codigo: 'LT', nombre: 'Lituania', prefijo: '+370', bandera: '🇱🇹' },
    { codigo: 'LU', nombre: 'Luxemburgo', prefijo: '+352', bandera: '🇱🇺' },
    { codigo: 'NO', nombre: 'Noruega', prefijo: '+47', bandera: '🇳🇴' },
    { codigo: 'PL', nombre: 'Polonia', prefijo: '+48', bandera: '🇵🇱' },
    { codigo: 'PT', nombre: 'Portugal', prefijo: '+351', bandera: '🇵🇹' },
    { codigo: 'GB', nombre: 'Reino Unido', prefijo: '+44', bandera: '🇬🇧' },
    { codigo: 'CZ', nombre: 'Rep. Checa', prefijo: '+420', bandera: '🇨🇿' },
    { codigo: 'RO', nombre: 'Rumania', prefijo: '+40', bandera: '🇷🇴' },
    { codigo: 'RU', nombre: 'Rusia', prefijo: '+7', bandera: '🇷🇺' },
    { codigo: 'SE', nombre: 'Suecia', prefijo: '+46', bandera: '🇸🇪' },
    { codigo: 'CH', nombre: 'Suiza', prefijo: '+41', bandera: '🇨🇭' },
    { codigo: 'UA', nombre: 'Ucrania', prefijo: '+380', bandera: '🇺🇦' },
    
    // Asia
    { codigo: 'AF', nombre: 'Afganistán', prefijo: '+93', bandera: '🇦🇫' },
    { codigo: 'SA', nombre: 'Arabia Saudita', prefijo: '+966', bandera: '🇸🇦' },
    { codigo: 'BD', nombre: 'Bangladesh', prefijo: '+880', bandera: '🇧🇩' },
    { codigo: 'CN', nombre: 'China', prefijo: '+86', bandera: '🇨🇳' },
    { codigo: 'KR', nombre: 'Corea del Sur', prefijo: '+82', bandera: '🇰🇷' },
    { codigo: 'AE', nombre: 'Emiratos Árabes', prefijo: '+971', bandera: '🇦🇪' },
    { codigo: 'PH', nombre: 'Filipinas', prefijo: '+63', bandera: '🇵🇭' },
    { codigo: 'HK', nombre: 'Hong Kong', prefijo: '+852', bandera: '🇭🇰' },
    { codigo: 'IN', nombre: 'India', prefijo: '+91', bandera: '🇮🇳' },
    { codigo: 'ID', nombre: 'Indonesia', prefijo: '+62', bandera: '🇮🇩' },
    { codigo: 'IQ', nombre: 'Irak', prefijo: '+964', bandera: '🇮🇶' },
    { codigo: 'IR', nombre: 'Irán', prefijo: '+98', bandera: '🇮🇷' },
    { codigo: 'IL', nombre: 'Israel', prefijo: '+972', bandera: '🇮🇱' },
    { codigo: 'JP', nombre: 'Japón', prefijo: '+81', bandera: '🇯🇵' },
    { codigo: 'KZ', nombre: 'Kazajistán', prefijo: '+7', bandera: '🇰🇿' },
    { codigo: 'MY', nombre: 'Malasia', prefijo: '+60', bandera: '🇲🇾' },
    { codigo: 'PK', nombre: 'Pakistán', prefijo: '+92', bandera: '🇵🇰' },
    { codigo: 'SG', nombre: 'Singapur', prefijo: '+65', bandera: '🇸🇬' },
    { codigo: 'TH', nombre: 'Tailandia', prefijo: '+66', bandera: '🇹🇭' },
    { codigo: 'TW', nombre: 'Taiwán', prefijo: '+886', bandera: '🇹🇼' },
    { codigo: 'TR', nombre: 'Turquía', prefijo: '+90', bandera: '🇹🇷' },
    { codigo: 'VN', nombre: 'Vietnam', prefijo: '+84', bandera: '🇻🇳' },
    
    // África
    { codigo: 'DZ', nombre: 'Argelia', prefijo: '+213', bandera: '🇩🇿' },
    { codigo: 'AO', nombre: 'Angola', prefijo: '+244', bandera: '🇦🇴' },
    { codigo: 'CM', nombre: 'Camerún', prefijo: '+237', bandera: '🇨🇲' },
    { codigo: 'EG', nombre: 'Egipto', prefijo: '+20', bandera: '🇪🇬' },
    { codigo: 'ET', nombre: 'Etiopía', prefijo: '+251', bandera: '🇪🇹' },
    { codigo: 'GH', nombre: 'Ghana', prefijo: '+233', bandera: '🇬🇭' },
    { codigo: 'KE', nombre: 'Kenia', prefijo: '+254', bandera: '🇰🇪' },
    { codigo: 'MA', nombre: 'Marruecos', prefijo: '+212', bandera: '🇲🇦' },
    { codigo: 'NG', nombre: 'Nigeria', prefijo: '+234', bandera: '🇳🇬' },
    { codigo: 'ZA', nombre: 'Sudáfrica', prefijo: '+27', bandera: '🇿🇦' },
    { codigo: 'TZ', nombre: 'Tanzania', prefijo: '+255', bandera: '🇹🇿' },
    { codigo: 'TN', nombre: 'Túnez', prefijo: '+216', bandera: '🇹🇳' },
    { codigo: 'UG', nombre: 'Uganda', prefijo: '+256', bandera: '🇺🇬' },
    
    // Oceanía
    { codigo: 'AU', nombre: 'Australia', prefijo: '+61', bandera: '🇦🇺' },
    { codigo: 'NZ', nombre: 'Nueva Zelanda', prefijo: '+64', bandera: '🇳🇿' },
  ];

  const [formData, setFormData] = useState({
    nombre: '',
    prefijo: '+57',
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

    // Combinar prefijo y teléfono
    const telefonoCompleto = `${formData.prefijo} ${formData.telefono}`;
    const datosEnvio = {
      ...formData,
      telefono: telefonoCompleto
    };

    try {
      const response = await fetch('http://80.65.211.178:5001/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosEnvio)
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
          prefijo: '+57',
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
              <div className="telefono-container">
                <select 
                  className="input-text select-prefijo" 
                  name="prefijo"
                  value={formData.prefijo}
                  onChange={handleChange}
                  required
                >
                  {paises.map((pais) => (
                    <option key={pais.codigo} value={pais.prefijo}>
                      {pais.bandera} {pais.prefijo}
                    </option>
                  ))}
                </select>
                <input 
                  className="input-text input-telefono" 
                  type="tel" 
                  name="telefono"
                  placeholder="Número de teléfono"
                  value={formData.telefono}
                  onChange={handleChange}
                  pattern="[0-9]+"
                  title="Solo números"
                  required
                />
              </div>
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
