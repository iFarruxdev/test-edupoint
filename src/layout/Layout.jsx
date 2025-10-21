import Header from '../components/Header/Header'
import Menu from '../components/Menu/Menu'
import { useState , useEffect } from 'react';
import './Layout.css'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  let [toggleTheme , setToggleTheme] = useState(() => {
    let saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : true;
  });

  let [togglebar , setTogglebar] = useState(true);
  let [showbar , setShowbar] = useState(false);
  let [media , setMedia] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(toggleTheme));

    let html = document.documentElement;
    if (toggleTheme) {
      html.setAttribute("data-bs-theme", "light");
    } else {
      html.setAttribute("data-bs-theme", "dark");
    }
  }, [toggleTheme]);

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