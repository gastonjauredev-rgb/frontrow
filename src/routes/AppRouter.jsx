import { Routes, Route } from 'react-router-dom';

import MainLayout from '../components/layout/MainLayout.jsx';

import Home from '../pages/Home.jsx';
import Artists from '../pages/Artists.jsx';
import Concerts from '../pages/Concerts.jsx';
import NotFound from '../pages/errors/NotFound.jsx';

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="artistas" element={<Artists />} />
        <Route path="conciertos" element={<Concerts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;