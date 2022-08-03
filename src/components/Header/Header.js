import React from "react";

const Header = ({ metamaskConnected, accountAddress, connectToMetamask }) => {
  const handleButton = () => {
    window.location.href = "/dashboard";
  };

  return (
    <header id="header">
      {/* Navbar */}
      <nav
        data-aos="zoom-out"
        data-aos-delay={800}
        className="navbar navbar-expand"
      >
        <div className="container header">
          {/* Navbar Brand*/}
          <a className="navbar-brand" href="/">
            <img
              className="navbar-brand-sticky"
              src="img/logo_white.png"
              alt="sticky brand-logo"
            />
          </a>
          <div className="ml-auto" />
          {/* Navbar */}
          <ul className="navbar-nav items mx-auto">
            <li className="nav-item dropdown">
              <a className="nav-link smooth-anchor" href="#banner">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link smooth-anchor" href="#about_area">
                Dapp
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link smooth-anchor" href="#faq_area">
                FAQ
              </a>
            </li>
          </ul>
          {/* Navbar Icons */}
          {/* <ul className="navbar-nav icons">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                data-toggle="modal"
                data-target="#search"
              >
                <i className="fas fa-search" />
              </a>
            </li>
          </ul> */}
          {/* Navbar Toggler */}
          <ul className="navbar-nav toggle">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                data-toggle="modal"
                data-target="#menu"
              >
                <i className="fas fa-bars toggle-icon m-0" />
              </a>
            </li>
          </ul>
          {/* Navbar Action Button */}
          <ul className="navbar-nav action">
            <li className="nav-item ml-3">
              <button
                className="btn ml-lg-auto blue text-black"
                onClick={() => handleButton()}
              > Launch App
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
