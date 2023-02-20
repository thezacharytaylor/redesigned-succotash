import { Routes, Route } from 'react-router-dom';
import Brackets from './views/pages/Brackets';
import Home from './views/pages/Home';
import Leaderboard from './views/pages/Leaderboard';
// import DashboardDefaultContent from './views/dashboard/dashboard-default-content-new';
// import SettingsAndPrivacy from './views/dashboard/settings-and-privacy';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="leaderboard" element={<Leaderboard />} />
      <Route path="brackets" element={<Brackets />} />
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
