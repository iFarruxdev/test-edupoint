import "./Header.css";
import { Icon } from "@iconify/react";
import { IconDots } from '@tabler/icons-react';
import { IconAlignJustified } from '@tabler/icons-react';
import { NavLink } from "react-router-dom";

const Header = ({toggleTheme , setToggleTheme , setTogglebar , setShowbar , setMedia}) => {

  let handleToggle = () => {
    let html = document.documentElement;
    setToggleTheme(!toggleTheme);
    if (toggleTheme) {
      html.setAttribute('data-bs-theme',"dark")
    } else {
      html.setAttribute('data-bs-theme',"light")
    }
  }
  let handleBar = () => {
    let body = document.body;

    setTogglebar((prev) => {
      let newValue = !prev;

      if (newValue) {
        body.setAttribute('data-sidebartype', 'full');
      } else {
        body.setAttribute('data-sidebartype', 'mini-sidebar');
        setShowbar(true);
      }

      return newValue;
    });
  };
  let HandleMedia = () => {
    document.body.setAttribute('data-sidebartype', 'full');
    setTogglebar(true);
  }
  return (
    <header className="topbar sticky-top">
      <div className="with-vertical">
        <nav className="navbar navbar-expand-lg p-0">
          <ul className="navbar-nav">
            <li className="nav-item nav-icon-hover-bg rounded-circle">
              <a
                className="nav-link sidebartoggler"
                id="headerCollapse"
                href="javascript:void(0)"
                onClick={handleBar}
              >
                <Icon icon="solar:list-bold-duotone" className="fs-7" />
              </a>
            </li>
          </ul>

          <ul className="navbar-nav quick-links d-none d-lg-flex align-items-center">
            <li className="nav-item dropdown-hover d-none d-lg-block me-2">
              <a className="nav-link">Chat</a>
            </li>
            <li className="nav-item dropdown-hover d-none d-lg-block me-2">
              <a className="nav-link">Kalendar</a>
            </li>
            <li className="nav-item dropdown-hover d-none d-lg-block">
              <a className="nav-link">Pochta</a>
            </li>
          </ul>

          <div className="d-block d-lg-none py-3">
            <img
              src="/logo-light.svg"
              className="dark-logo"
              alt="Logo-Dark"
              style={{ display: "flex" }}
            />
            <img
              src="/logo-dark.svg"
              className="light-logo"
              alt="Logo-light"
              style={{ display: "none" }}
            />
          </div>

          <a
            className="navbar-toggler p-0 border-0"
            href="javascript:void(0)"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="p-2">
              <IconDots size={20} className="fs-7" />
            </span>
          </a>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <div className="d-flex align-items-center justify-content-between">
              <a
                href="javascript:void(0)"
                className="nav-link d-flex d-lg-none align-items-center justify-content-center"
                type="button" onClick={() => setMedia(true)}
                data-bs-toggle="offcanvas"
                data-bs-target="#mobilenavbar"
                aria-controls="offcanvasWithBothOptions"
              >
                <div onClick={HandleMedia} className="nav-icon-hover-bg rounded-circle">
                  <IconAlignJustified size={20} className="fs-7" />
                </div>
              </a>
              <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                <li className="nav-item dropdown nav-icon-hover-bg rounded-circle d-flex d-lg-none">
                  <a
                    className="nav-link position-relative"
                    href="javascript:void(0)"
                    id="drop3"
                    aria-expanded="false"
                  >
                    <Icon icon="solar:magnifer-linear" className="fs-7" />
                  </a>
                  <div
                    className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                    aria-labelledby="drop3"
                  >
                    <div className="modal-header border-bottom p-3">
                      <input
                        type="search"
                        className="form-control fs-3"
                        placeholder="Try to searching ..."
                      />
                    </div>
                    <div className="message-body p-3" data-simplebar="init">
                      <div
                        className="simplebar-wrapper"
                        style={{ margin: "-16px" }}
                      >
                        <div className="simplebar-height-auto-observer-wrapper">
                          <div className="simplebar-height-auto-observer"></div>
                        </div>
                        <div className="simplebar-mask">
                          <div
                            className="simplebar-offset"
                            style={{ right: "0px", bottom: "0px" }}
                          >
                            <div
                              className="simplebar-content-wrapper"
                              tabIndex="0"
                              role="region"
                              aria-label="scrollable content"
                              style={{ height: "auto", overflow: "hidden" }}
                            >
                              <div
                                className="simplebar-content"
                                style={{ padding: "16px" }}
                              >
                                <h5 className="mb-0 fs-5 p-1">
                                  Quick Page Links
                                </h5>
                                <ul className="list mb-0 py-2">
                                  <li className="p-1 mb-1 bg-hover-light-black rounded">
                                    <a href="javascript:void(0)">
                                      <span className="fs-3 text-dark d-block">
                                        Modern
                                      </span>
                                      <span className="fs-3 text-muted d-block">
                                        /dashboards/dashboard1
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="simplebar-placeholder"
                          style={{ width: "0px", height: "0px" }}
                        ></div>
                      </div>
                      <div
                        className="simplebar-track simplebar-horizontal"
                        style={{ visibility: "hidden" }}
                      >
                        <div
                          className="simplebar-scrollbar"
                          style={{ width: "0px", display: "none" }}
                        ></div>
                      </div>
                      <div
                        className="simplebar-track simplebar-vertical"
                        style={{ visibility: "hidden" }}
                      >
                        <div
                          className="simplebar-scrollbar"
                          style={{ height: "0px", display: "none" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown  d-none d-lg-block">
                  <a
                    className="nav-link position-relative shadow-none"
                    href="javascript:void(0)"
                    id="drop3"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <form className="nav-link position-relative shadow-none">
                      <input
                        type="text"
                        className="form-control navigation-search-input rounded-5 py-1.7 ps-5 text-dark fw-medium"
                        placeholder="Try to searching ..."
                      />
                      <Icon
                        icon="solar:magnifer-linear"
                        className="text-dark position-absolute top-50 start-0 translate-middle-y ms-3"
                      />
                    </form>
                  </a>

                  <div
                    className="dropdown-menu content-dd border-0 dropdown-menu-end dropdown-menu-animate-up p-0"
                    aria-labelledby="drop3"
                    style={{ minWidth: "300px",borderRadius:'20px'}}
                  >
                    <div className="modal-header border-bottom p-3">
                      <input
                        type="search"
                        className="form-control .navigation-search-input fs-0.2 fw-medium"
                        placeholder="Try to searching ..."
                      />
                    </div>

                    <div
                      className="message-body p-3 overflow-y-auto"
                      data-simplebar id="search-input-header-react"
                    >
                      <h5
                        style={{ fontSize: "18px", fontWeight: "600" }}
                        className="mb-0 p-1"
                      >
                        Quick Page Links
                      </h5>
                      <ul id="quick-page-links" className="list mb-0 py-2 px-0">
                        <li className="p-1 mb-1 bg-hover-light-black rounded">
                          <a href="javascript:void(0)">
                            <span
                              style={{
                                fontWeight: 500,
                                textDecoration: "none",
                              }}
                              className="fs-0.2 text-dark d-block "
                            >
                              Modern
                            </span>
                            <span className="fs-0.1 text-muted d-block">
                              /dashboards/dashboard1
                            </span>
                          </a>
                        </li>
                        <li className="p-1 mb-1 bg-hover-light-black rounded">
                          <a href="javascript:void(0)">
                            <span
                              style={{ fontWeight: 500 }}
                              className="fs-0.2 text-dark d-block "
                            >
                              Dashboard
                            </span>
                            <span className="fs-0.1 text-muted d-block">
                              /dashboards/dashboard2
                            </span>
                          </a>
                        </li>
                        <li className="p-1 mb-1 bg-hover-light-black rounded">
                          <a href="javascript:void(0)">
                            <span
                              style={{ fontWeight: 500 }}
                              className="fs-0.2 text-dark d-block"
                            >
                              Contacts
                            </span>
                            <span className="fs-0.1 text-muted d-block">
                              /apps/contacts
                            </span>
                          </a>
                        </li>
                        <li className="p-1 mb-1 bg-hover-light-black rounded">
                          <a href="javascript:void(0)">
                            <span
                              style={{ fontWeight: 500 }}
                              className="fs-0.2 text-dark d-block"
                            >
                              Posts
                            </span>
                            <span className="fs-0.1 text-muted d-block">
                              /apps/blog/posts
                            </span>
                          </a>
                        </li>
                        <li className="p-1 mb-1 bg-hover-light-black rounded">
                          <a href="javascript:void(0)">
                            <span
                              style={{ fontWeight: 500 }}
                              className="fs-0.2 text-dark d-block"
                            >
                              Detail
                            </span>
                            <span className="fs-0.1 text-muted d-block">
                              /apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow
                            </span>
                          </a>
                        </li>
                        <li className="p-1 mb-1 bg-hover-light-black rounded">
                          <a href="javascript:void(0)">
                            <span
                              style={{ fontWeight: 500 }}
                              className="fs-0.2 text-dark d-block"
                            >
                              Shop
                            </span>
                            <span className="fs-0.1 text-muted d-block">
                              /apps/ecommerce/shop
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="nav-item nav-icon-hover-bg rounded-circle">
                 {toggleTheme ?  <a
                    className="nav-link moon dark-layout"
                    href="javascript:void(0)"
                    style={{ display: "flex" }}
                  >
                    <Icon
                      icon="solar:moon-line-duotone"
                      className="moon" onClick={handleToggle}
                      style={{ display: "flex", fontSize: "22px" }}
                    />
                  </a> : <a
                    className="nav-link sun light-layout"
                    href="javascript:void(0)"
                    style={{ display: "flex" }}
                  >
                    <Icon
                      icon="solar:sun-2-line-duotone"
                      className="sun" onClick={handleToggle}
                      style={{ display: "flex", fontSize: "22px" }}
                    />
                  </a> }
                </li>

                <li className="nav-item  dropdown nav-icon-hover-bg rounded-circle">
                  <a
                    className="nav-link position-relative"
                    href="javascript:void(0)"
                    id="drop3"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Icon
                      icon="solar:chat-dots-line-duotone"
                      style={{ fontSize: "22px" }}
                    />
                    <div className="pulse">
                      <span className="heartbit border-warning"></span>
                      <span className="point text-bg-warning"></span>
                    </div>
                  </a>

                  <div
                    className="dropdown-menu border-0 content-dd dropdown-menu-end dropdown-menu-animate-up p-0"
                    aria-labelledby="drop3"
                    style={{ minWidth: "350px",borderRadius:'24px'}}
                  >
                    <div className="d-flex align-items-center py-3 px-4 border-bottom">
                      <h3 style={{ fontSize: "18px" }} className="mb-0">
                        Xabarlar
                      </h3>
                      <span
                        style={{
                          borderRadius: "10px",
                          backgroundColor: "#167EB5",
                          fontWeight: "500",
                        }}
                        className="badge ms-3"
                      >
                        5 yangi
                      </span>
                    </div>

                    <div
                      className="message-body overflow-y-auto"
                      data-simplebar id="message-header"
                      style={{ maxHeight: "320px" }}
                    >
                      <a
                        href="javascript:void(0)"
                        className="dropdown-item px-4 d-flex align-items-center py-3 border-bottom"
                      >
                        <span className="flex-shrink-0">
                          <img
                            src="/user-2.jpg"
                            alt="user"
                            width="45"
                            className="rounded-circle"
                          />
                        </span>
                        <div className="w-100 ps-3">
                          <div className="d-flex align-items-center justify-content-between">
                            <h5
                              style={{ fontSize: "15px", fontWeight: 600 }}
                              className="mb-0"
                            >
                              Roman Joined the Team!{" "}
                            </h5>
                            <span
                              style={{ fontSize: "12px" }}
                              className="text-muted"
                            >
                              9:08 AM
                            </span>
                          </div>
                          <span
                            style={{ fontSize: "12px", fontWeight: 600 }}
                            className="d-block mt-1 text-muted"
                          >
                            Congratulate him
                          </span>
                        </div>
                      </a>

                      <a
                        href="javascript:void(0)"
                        className="dropdown-item px-4 d-flex align-items-center py-3 border-bottom"
                      >
                        <span className="flex-shrink-0">
                          <img
                            src="/user-3.jpg"
                            alt="user"
                            width="45"
                            className="rounded-circle"
                          />
                        </span>
                        <div className="w-100 ps-3">
                          <div className="d-flex align-items-center justify-content-between">
                            <h5
                              style={{ fontSize: "15px", fontWeight: 600 }}
                              className="mb-0"
                            >
                              New message received
                            </h5>
                            <span
                              style={{ fontSize: "12px" }}
                              className="text-muted"
                            >
                              9:08 AM
                            </span>
                          </div>
                          <span
                            className="d-block mt-1 text-muted"
                            style={{ fontSize: "12px", fontWeight: 600 }}
                          >
                            Salma sent you new message
                          </span>
                        </div>
                      </a>

                      <a
                        href="javascript:void(0)"
                        className="dropdown-item px-4 d-flex align-items-center py-3 border-bottom"
                      >
                        <span className="flex-shrink-0">
                          <img
                            src="/user-4.jpg"
                            alt="user"
                            width="45"
                            className="rounded-circle"
                          />
                        </span>
                        <div className="w-100 ps-3">
                          <div className="d-flex align-items-center justify-content-between">
                            <h5
                              style={{ fontSize: "15px", fontWeight: 600 }}
                              className="mb-0"
                            >
                              New Payment received
                            </h5>
                            <span
                              style={{ fontSize: "12px" }}
                              className="text-muted"
                            >
                              9:08 AM
                            </span>
                          </div>
                          <span
                            className="d-block mt-1 text-muted"
                            style={{ fontSize: "12px", fontWeight: 600 }}
                          >
                            Check your earnings
                          </span>
                        </div>
                      </a>

                      <a
                        href="javascript:void(0)"
                        className="dropdown-item px-4 d-flex align-items-center py-3 border-bottom"
                      >
                        <span className="flex-shrink-0">
                          <img
                            src="/user-5.jpg"
                            alt="user"
                            width="45"
                            className="rounded-circle"
                          />
                        </span>
                        <div className="w-100 ps-3">
                          <div className="d-flex align-items-center justify-content-between">
                            <h5
                              style={{ fontSize: "15px", fontWeight: 600 }}
                              className="mb-0"
                            >
                              New message received
                            </h5>
                            <span
                              style={{ fontSize: "12px" }}
                              className="text-muted"
                            >
                              9:08 AM
                            </span>
                          </div>
                          <span
                            className="d-block mt-1 text-muted"
                            style={{ fontSize: "12px", fontWeight: 600 }}
                          >
                            Salma sent you new message
                          </span>
                        </div>
                      </a>

                      <a
                        href="javascript:void(0)"
                        className="dropdown-item px-4 d-flex align-items-center py-3"
                      >
                        <span className="flex-shrink-0">
                          <img
                            src="/user-6.jpg"
                            alt="user"
                            width="45"
                            className="rounded-circle"
                          />
                        </span>
                        <div className="w-100 ps-3">
                          <div className="d-flex align-items-center justify-content-between">
                            <h5
                              style={{ fontSize: "15px", fontWeight: 600 }}
                              className="mb-0"
                            >
                              Roman Joined the Team!
                            </h5>
                            <span
                              style={{ fontSize: "12px" }}
                              className="text-muted"
                            >
                              9:08 AM
                            </span>
                          </div>
                          <span
                            className="d-block mt-1 text-muted"
                            style={{ fontSize: "12px", fontWeight: 600 }}
                          >
                            Congratulate him
                          </span>
                        </div>
                      </a>
                    </div>

                    <div className="py-3 px-4 border-top">
                      <button style={{borderRadius:'34px',backgroundColor:'#0085DB'}} className="btn py-2 text-white w-100 log-btn">
                        Hamma xabarlarni ko'rish
                      </button>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link position-relative ms-6"
                    href="javascript:void(0)"
                    id="drop1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center flex-shrink-0">
                      <div className="user-profile me-sm-3 me-2">
                        <img
                          src="/user-1.jpg"
                          width="40"
                          className="rounded-circle"
                          alt="user-img"
                        />
                      </div>
                      <span className="d-sm-none d-block">
                        <Icon icon="solar:alt-arrow-down-line-duotone" />
                      </span>
                      <div className="d-none d-sm-block">
                        <h6 style={{fontSize:'16px',fontWeight:600,marginBottom:'2px'}} className={`profile-name ${toggleTheme ? 'text-black' : 'text-white'}`}>Mike Nielsen</h6>
                        <p style={{fontSize:"15px"}} className="lh-base mb-0 profile-subtext">
                          Admin
                        </p>
                      </div>
                    </div>
                  </a>

                  <div style={{borderRadius:'24px'}}
                    className="dropdown-menu border-0 content-dd dropdown-menu-end dropdown-menu-animate-up"
                    aria-labelledby="drop1"
                  >
                    <div
                      className="profile-dropdown position-relative"
                      data-simplebar
                    >
                      <div className="d-flex align-items-center justify-content-between pt-3 px-4">
                        <h3 style={{fontSize:'19px',fontWeight:600}} className="mb-0">Foydalanuvchi profili</h3>
                      </div>

                      <div className="d-flex align-items-center mx-4 py-4 border-bottom">
                        <img
                          src="/user-1.jpg"
                          alt="user"
                          width="90"
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <h4 style={{fontSize:'19px'}} className="mb-0 fw-medium">Mike Nielsen</h4>
                          <span style={{fontSize:'15.2px',fontWeight:500,color:'#AAAFB4'}} className="d-block">
                            Super Admin
                          </span>
                          <p style={{color:'#AAAFB4'}} className="mb-0 mt-1 d-flex align-items-center">
                            <Icon
                              icon="solar:mailbox-line-duotone"
                              className="fs-5 me-1"
                            />
                            info@gmail.com
                          </p>
                        </div>
                      </div>

                      <div className="message-body">
                        <a
                          href="../main/page-user-profile.html"
                          className="dropdown-item px-4 d-flex align-items-center py-3"
                        >
                          <span className="btn px-2 py-1 bg-info-subtle rounded-1 text-info shadow-none">
                            <Icon
                              icon="solar:wallet-2-line-duotone"
                              className="fs-7"
                            />
                          </span>
                          <NavLink to='/profile' className="w-100 ps-3 ms-1">
                            <h5 style={{fontSize:'17.5px'}} className="mb-0 mt-1 fw-medium">
                              Mening profilim
                            </h5>
                            <span style={{fontSize:'15.2px',marginTop:'2px',color:'#AAAFB4'}} className="d-block">
                              Hisob sozlamalari
                            </span>
                          </NavLink>
                        </a>

                        <a
                          href="../main/app-email.html"
                          className="dropdown-item px-4 d-flex align-items-center py-3"
                        >
                          <span className="btn px-2 py-1 bg-success-subtle rounded-1 text-success shadow-none">
                            <Icon
                              icon="solar:shield-minimalistic-line-duotone"
                              className="fs-7"
                            />
                          </span>
                          <div className="w-100 ps-3 ms-1">
                            <h5 style={{fontSize:'17.5px'}} className="mb-0 mt-1 fw-medium">
                              Xabarlar qutisi
                            </h5>
                            <span style={{fontSize:'15.2px',marginTop:'2px',color:'#AAAFB4'}} className="d-block">
                              Xabarlar & Pochta
                            </span>
                          </div>
                        </a>

                        <a
                          href="../main/app-notes.html"
                          className="dropdown-item px-4 d-flex align-items-center py-3"
                        >
                          <span className="btn px-2 py-1 bg-danger-subtle rounded-1 text-danger shadow-none">
                            <Icon
                              icon="solar:card-2-line-duotone"
                              className="fs-7"
                            />
                          </span>
                          <div className="w-100 ps-3 ms-1">
                            <h5 style={{fontSize:'17.5px'}} className="mb-0 mt-1 fw-medium">
                              Mening vazifam
                            </h5>
                            <span style={{fontSize:'15.2px',marginTop:'2px',color:'#AAAFB4'}} className="d-block">
                              Bajariladigan va kundalik vazifalar
                            </span>
                          </div>
                        </a>
                      </div>

                      <div className="py-4 px-4 border-top">
                        <a
                          href="javascript:void(0)" style={{borderRadius:'34px',backgroundColor:'#0085DB',color:'#fff'}}
                          className="btn w-100 py-2 log-btn"
                        >
                          Log Out
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
