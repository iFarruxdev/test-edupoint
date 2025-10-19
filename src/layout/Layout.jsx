import Header from '../components/Header/Header'
import Menu from '../components/Menu/Menu'
import { useState } from 'react';
import './Layout.css'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  let [toggleTheme , setToggleTheme] = useState(true);

  return (
    <div className="site-layout">
      <aside className="index-menu">
        <Menu toggleTheme={toggleTheme} />
      </aside>
      <main className="layout-content">
        <Header toggleTheme={toggleTheme} setToggleTheme={setToggleTheme} />
        <Outlet />
      </main>
    </div>
  )
}

export default Layout