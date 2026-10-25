import { Outlet } from 'react-router-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

function MainLayout() {
  return (
    <>
      <Header />

      <main id="main-content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;