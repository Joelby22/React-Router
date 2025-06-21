import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Star Wars API Explorer</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/characters">Personajes</Link></li>
        <li><Link to="/films">Películas</Link></li>
        <li><Link to="/starships">Naves</Link></li>
        <li><Link to="/planets">Planetas</Link></li>
        <li><Link to="/species">Especies</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar