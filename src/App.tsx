import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/index';
import Browser from './pages/Browser';
import Trainer from './pages/Trainer';

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
        <Route path="/train" element={<Trainer />} />
      </Routes>
    </Router>
  );
}
