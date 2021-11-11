import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Search from './pages/Search';
import Airplanes from './pages/Airplanes';
import Flights from './pages/Flights';
import Flight from './pages/Flight';
import SignUp from './pages/Users/SignUp';
import LogIn from './pages/Users/LogIn';

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
        <div>
          <Link to="/users/new">Sign up</Link>
        </div>
        <div>
          <Link to="/users">Log in</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Search/>} />
        <Route path="/airplanes" element={<Airplanes/>} />
        <Route path="/flights" element={<Flights/>} />
        <Route path="/flights/:id" element={<Flight/>} />
        <Route path="/users/new" element={<SignUp/>} />
        <Route path="/users" element={<LogIn/>} />

      </Routes>
    </Router>
  );
}

export default App;
