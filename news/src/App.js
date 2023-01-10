import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './Component/Navbar'
import Business from './pages/Business';
import Sports from './pages/Sports';
import Science from './pages/Science';
import startup from './pages/Startup';
import Technology from './pages/Technology';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Business" element={<Business />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/Science" element={<Science/>} />
          <Route path="/Sports" element={<Sports/>} />
          <Route path="/Startup" element={<Startup/>} />
          <Route path="/Technology" element={<Technology/>} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
