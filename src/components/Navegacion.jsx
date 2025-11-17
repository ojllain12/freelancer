export default function Navegacion() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="nav-bg">
      <nav className="navegacion-principal contenedor">
        <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')}>Inicio</a>
        <a href="#sobre-mi" onClick={(e) => scrollToSection(e, 'sobre-mi')}>Sobre Mi</a>
        <a href="#clientes" onClick={(e) => scrollToSection(e, 'clientes')}>Clientes</a>
        <a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')}>Contacto</a>
      </nav>
    </div>
  );
}
