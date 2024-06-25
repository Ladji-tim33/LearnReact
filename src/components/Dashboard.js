import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Tableau de bord</h1>
      <Link to="/lesson">Leçons</Link>
      <br />
      <Link to="/challenge">Défis</Link>
    </div>
  );
}

export default Dashboard;
