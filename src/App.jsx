import React, { useEffect } from 'react';
import { Link, useNavigate, Routes, Route } from 'react-router-dom';
import Kerela from './components/Kerela';
import Maharashtra from './components/Maharashtra';
import Karnataka from './components/Karnataka';
import TamilNadu from './components/TamilNadu';
import Assam from './components/Assam'; // Assuming you have an Assam component

const App = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    const handleNavigation = (event) => {
      if (event.data && event.data.type === 'NAVIGATE') {
        navigate(event.data.route);
      }
    };

    window.addEventListener('message', handleNavigation);

    return () => {
      window.removeEventListener('message', handleNavigation);
    };
  }, [navigate]);

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/karnataka">Karnataka</Link></li>
          <li><Link to="/maharashtra">Maharashtra</Link></li>
          <li><Link to="/tamilnadu">Tamil Nadu</Link></li>
          <li><Link to="/kerala">Kerala</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/karnataka" element={<Karnataka />} />
        <Route path="/maharashtra" element={<Maharashtra />} />
        <Route path="/tamilnadu" element={<TamilNadu />} />
        <Route path="/kerala" element={<Kerela />} />
        <Route path="/" element={<Assam />} />
      </Routes>
    </div>
  );
};

export default App;