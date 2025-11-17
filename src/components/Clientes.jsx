export default function Clientes() {
  const clientes = [
    {
      nombre: "TechStart Solutions",
      proyecto: "Plataforma E-Learning",
      descripcion: "Desarrollo de plataforma educativa con sistema de cursos online, pagos y certificaciones.",
      resultado: "500+ estudiantes activos en los primeros 3 meses"
    },
    {
      nombre: "Green Energy Co.",
      proyecto: "Dashboard IoT",
      descripcion: "Sistema de monitoreo en tiempo real para paneles solares con alertas y reportes automatizados.",
      resultado: "Reducción del 40% en tiempos de respuesta ante fallas"
    },
    {
      nombre: "Style Commerce",
      proyecto: "Tienda Online",
      descripcion: "E-commerce completo con carrito de compras, pasarela de pagos y panel de administración.",
      resultado: "Incremento del 250% en ventas online"
    },
    {
      nombre: "Local Business Hub",
      proyecto: "Sitio Web Corporativo",
      descripcion: "Rediseño completo de sitio web con enfoque en conversión y experiencia de usuario.",
      resultado: "80% más de consultas mensuales desde el lanzamiento"
    }
  ];

  return (
    <section id="clientes" className="clientes-seccion">
      <h2>Clientes y Proyectos</h2>
      
      <p className="clientes-intro">
        He tenido el privilegio de trabajar con empresas y emprendedores que confían en 
        mi experiencia para llevar sus proyectos al siguiente nivel. Aquí algunos casos de éxito:
      </p>

      <div className="clientes-grid">
        {clientes.map((cliente, index) => (
          <article key={index} className="cliente-card">
            <div className="cliente-icono">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </div>
            <h3>{cliente.nombre}</h3>
            <h4 className="proyecto-nombre">{cliente.proyecto}</h4>
            <p className="proyecto-descripcion">{cliente.descripcion}</p>
            <p className="proyecto-resultado">
              <strong>Resultado:</strong> {cliente.resultado}
            </p>
          </article>
        ))}
      </div>

      <div className="clientes-cta">
        <p>¿Quieres ser mi próximo caso de éxito?</p>
        <a href="#contacto" className="boton">Iniciar Proyecto</a>
      </div>
    </section>
  );
}
