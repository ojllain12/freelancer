export default function Servicios() {
  return (
    <div>
      <h2>Mis Servicios</h2>

      <div className="servicios">
        <section className="servicio">
          <h3>Diseño Web</h3>
          <div className="iconos">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-palette"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
              <circle cx="7.5" cy="10.5" r=".5" fill="currentColor" />
              <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
              <circle cx="16.5" cy="10.5" r=".5" fill="currentColor" />
            </svg>
          </div>
          <p>
            Creamos sitios web modernos, optimizados y adaptados a cualquier dispositivo.
Nos enfocamos en ofrecer experiencias visuales atractivas, velocidad, accesibilidad y resultados reales para tu marca. Tu página web será tu mejor carta de presentación.
          </p>
        </section>

        <section className="servicio">
          <h3>Aplicaciones Web</h3>
          <div className="iconos">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-android"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="4" y1="10" x2="4" y2="16" />
              <line x1="20" y1="10" x2="20" y2="16" />
              <path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />
              <line x1="8" y1="3" x2="9" y2="5" />
              <line x1="16" y1="3" x2="15" y2="5" />
              <line x1="9" y1="18" x2="9" y2="21" />
              <line x1="15" y1="18" x2="15" y2="21" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-apple"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M9 7c-3 0-4 3-4 5.5 0 3 2 7.5 4 7.5 1.088-.046 1.679-.5 3-.5 1.312 0 1.5.5 3 .5s4-3 4-5c-.028-.01-2.472-.403-2.5-3-.019-2.17 2.416-2.954 2.5-3-1.023-1.492-2.951-1.963-3.5-2-1.433-.111-2.83 1-3.5 1-.68 0-1.9-1-3-1z" />
              <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
            </svg>
          </div>
          <p>
            Desarrollamos aplicaciones web seguras, rápidas y escalables, diseñadas para automatizar procesos y mejorar la productividad de tu negocio. Desde sistemas administrativos hasta plataformas interactivas, construimos soluciones a la medida.
          </p>
        </section>

        <section className="servicio">
          <h3>E-Commerce</h3>
          <div className="iconos">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="40" height="40" aria-hidden="false" role="img">
              <title>Antena de transmisión</title>

              {/* Ondas exteriores */}
              <path d="M8 24 A20 20 0 0 1 56 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
              {/* Ondas medias */}
              <path d="M14 28 A14 14 0 0 1 50 28" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
              {/* Ondas internas */}
              <path d="M20 32 A8 8 0 0 1 44 32" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round"/>

              {/* Círculo central (emisor) */}
              <circle cx="32" cy="20" r="3.2" fill="#111"/>

              {/* Torre / base */}
              <path d="M28 24 L24 54" stroke="#111" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <path d="M36 24 L40 54" stroke="#111" strokeWidth="2" strokeLinecap="round" fill="none"/>

              {/* Cruzamientos de la torre */}
              <line x1="26" y1="36" x2="38" y2="36" stroke="#111" strokeWidth="1.6" strokeLinecap="round"/>
              <line x1="25" y1="46" x2="39" y2="46" stroke="#111" strokeWidth="1.6" strokeLinecap="round"/>

              {/* Base de la torre */}
              <rect x="22" y="54.5" width="20" height="3.5" rx="1" fill="#111"/>
            </svg>
          </div>
          <p>
            Transformamos tus procesos con tecnologías IoT que permiten monitorear, automatizar y gestionar dispositivos en tiempo real.
Integración de sensores, control remoto, análisis de datos y sistemas inteligentes para optimizar tu empresa o proyecto.
          </p>
        </section>
      </div>
    </div>
  );
}
