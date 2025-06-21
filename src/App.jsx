import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Films from './pages/Films';
import Starships from './pages/Starships';
import Planets from './pages/Planets';
import Species from './pages/Species';
import ResourceDetail from './components/ResourceDetail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/films" element={<Films />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/species" element={<Species />} />
          <Route path="/:resource/:id" element={<ResourceDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;