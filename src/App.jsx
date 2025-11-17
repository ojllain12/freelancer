import Header from './components/Header'
import Navegacion from './components/Navegacion'
import Hero from './components/Hero'
import SobreMi from './components/SobreMi'
import Clientes from './components/Clientes'
import Servicios from './components/Servicios'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import './normalize.css'
import './styles.css'

function App() {
  return (
    <>
      <div id="inicio">
        <Header />
        <Navegacion />
        <Hero />
      </div>
      <main className="contenedor sombra">
        <SobreMi />
        <Clientes />
        <Servicios />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
