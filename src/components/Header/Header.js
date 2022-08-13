import React from "react";
import "./Header.css";

const Header = ({
  metamaskConnected,
  accountAddress,
  connectToMetamask,
  handleToggle,
}) => {
  const handleButton = () => {
    window.location.href = "/farming?page=dashboard";
  };

  return (
    <header id="header">
      {/* Navbar */}
      <nav
        data-aos="zoom-out"
        data-aos-delay={800}
        className="navbar navbar-expand customHeader"
        style={{ height: "10vw", maxHeight: "125px" }}
      >
        <div className="container header">
          {/* Navbar Brand*/}
          <a className="navbar-brand" href="/">
            <img
              className="navbar-brand-sticky logo"
              src="img/logo_red.svg"
              alt="sticky brand-logo"
            />
          </a>
          <div className="ml-auto" />
          {/* Navbar */}
          <ul className="navbar-nav items customUl">
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
            <li className="nav-item dropdown">
              <a className="nav-link smooth-anchor" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          {/* Navbar Toggler */}
          <ul className="navbar-nav toggle">
            <li className="nav-item" onClick={() => handleToggle()}>
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
                className="btn ml-lg-auto red text-white customHeaderButton"
                onClick={() => handleButton()}
              >
                Buy Nodes
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
