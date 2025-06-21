import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <h1>Bienvenido al Explorador de Star Wars</h1>
      <p>Utiliza la navegación para explorar los diferentes recursos de la API de Star Wars.</p>

      <div className="resource-links">
        <Link to="/characters" className="resource-card">
          <h2>Personajes</h2>
        </Link>
        <Link to="/films" className="resource-card">
          <h2>Películas</h2>
        </Link>
        <Link to="/starships" className="resource-card">
          <h2>Naves Espaciales</h2>
        </Link>
        <Link to="/planets" className="resource-card">
          <h2>Planetas</h2>
        </Link>
        <Link to="/species" className="resource-card">
          <h2>Especies</h2>
        </Link>
      </div>
    </div>
  )
}

export default Home