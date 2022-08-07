import React from "react";
import "./Farming.css";
const Header = ({
  metamaskConnected,
  accountAddress,
  connectToMetamask,
  disconnect,
  handleToggle,
}) => {
  return (
    <header id="header">
      {/* Navbar */}
      <nav
        data-aos="zoom-out"
        data-aos-delay={800}
        className="navbar navbar-expand bg-red"
      >
        <div className="container header">
          {/* Navbar Brand*/}
          <a className="navbar-brand" href="/">
            <img
              className="navbar-brand-sticky fix_logo"
              src="img/logo_white.svg"
              alt="sticky brand-logo"
            />
          </a>
          <div className="ml-auto" />
          {/* Navbar */}
          <ul className="navbar-nav items customUl2">
            <li className="nav-item dropdown">
              <a className="nav-link smooth-anchor" href="/">
                <i className="fas fa-home" />
                &nbsp;Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link smooth-anchor" href="/dashboard">
                <i className="fas fa-user" />
                &nbsp;Dashboard
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
              {metamaskConnected ? (
                <button
                  className="btn ml-lg-auto btn-bordered-white"
                  onClick={() => disconnect()}
                  style={{ padding: "9px 12px" }}
                >
                  <i className="icon-wallet mr-md-2" />
                  {accountAddress.substring(0, 6)}...
                  {accountAddress.substring(accountAddress.length - 4)}
                </button>
              ) : (
                <button
                  className="btn ml-lg-auto btn-bordered-white"
                  onClick={connectToMetamask}
                  style={{ padding: "9px 12px" }}
                >
                  <i className="icon-wallet mr-md-2" /> Connect
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
