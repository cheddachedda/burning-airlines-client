import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Airplanes from './pages/Airplanes';
import Flights from './pages/Flights';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <nav>
        <div>
          <Link to="/">Search</Link>
        </div>
        <div>
          <Link to="/airplanes">Airplanes</Link>
        </div>
        <div>
          <Link to="/flights">Flights</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Search/>} />
        <Route path="/airplanes" element={<Airplanes/>} />
        <Route path="/flights" element={<Flights/>} />
      </Routes>
    </Router>
  );
}

export default App;
