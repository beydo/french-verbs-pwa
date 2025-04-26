import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/index';
import Browser from './pages/Browser';
import Trainer from './pages/Trainer';
import Train from './pages/Train';
import VerbDetails from './pages/VerbDetails';

export default function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', display: 'flex', gap: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/browse">Browse</Link>
        <Link to="/train">Train</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browser />} />
        <Route path="/train" element={<Train />} />
        <Route path="/train/:verb" element={<VerbDetails />} />
        <Route path="/train-quiz" element={<Trainer />} />
      </Routes>
    </Router>
  );
}
