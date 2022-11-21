import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './views/pages/Home';
// import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import Leaderboard from './pages/Leaderboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
