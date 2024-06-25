import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Lesson from './components/Lesson';
import Challenge from './components/Challenge';
import LessonState from './pages/LessonState';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
      <nav className="sidebar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/lesson">Composants Fonctionnels</Link></li>
            <li><Link to="/lesson-state">États dans React</Link></li>
          </ul>
        </nav>
        <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/lesson-state" element={<LessonState />}/>
      </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
