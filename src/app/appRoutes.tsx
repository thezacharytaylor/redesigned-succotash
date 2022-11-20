import React, { lazy, Suspense } from 'react';
// import { Switch, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './views/pages/Home';
// import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
