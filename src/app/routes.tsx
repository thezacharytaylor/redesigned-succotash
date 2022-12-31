import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/pages/Home';
// import { HomePage } from './pages/HomePage/Loadable';
// import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import Leaderboard from './views/pages/Leaderboard';
// import Dashboard from './layouts/dashboard';
// import DashboardDefaultContent from './views/dashboard/dashboard-default-content-new';
// import SettingsAndPrivacy from './views/dashboard/settings-and-privacy';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="leaderboard" element={<Leaderboard />} />
      {/* <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<DashboardDefaultContent />} />
        <Route
          path="settings-and-privacy"
          element={<SettingsAndPrivacy />}
          children
        />
      </Route> */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default AppRoutes;
