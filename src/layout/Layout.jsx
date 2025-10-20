import Header from '../components/Header/Header'
import Menu from '../components/Menu/Menu'
import { useState } from 'react';
import './Layout.css'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  let [toggleTheme , setToggleTheme] = useState(true);
  let [togglebar , setTogglebar] = useState(true);
  let [showbar , setShowbar] = useState(false);
  let [media , setMedia] = useState(false);

  return (
    <div id='main-wrapper' className={`site-layout ${media ? "show-sidebar" : ""}`}>
      <aside className="index-menu">
        <Menu toggleTheme={toggleTheme} togglebar={togglebar} setMedia={setMedia} />
      </aside>
      <main className="layout-content">
        <Header toggleTheme={toggleTheme} setToggleTheme={setToggleTheme}
        setTogglebar={setTogglebar} setShowbar={setShowbar} setMedia={setMedia} />
        <Outlet />
      </main>
    </div>
  )
}

export default Layout