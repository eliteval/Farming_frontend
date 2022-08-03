import React, { Component } from "react";
import "./Farming.css";

const initData = {
  pre_heading: "Dashboard",
  heading: "abcdef",
};

class Banner extends Component {
  state = {
    initData: {},
    mintAmount: 0,
  };

  componentDidMount() {
    this.setState({
      initData: initData,
    });
  }

  render() {
    return (
      <section
        className="author-area customBanner"
        id="banner"
        style={{ backgroundImage: 'url("img/banner1.jpg")' }}
      >
        <div className="container" style={{textAlign: "center"}}>
          <a className="navbar-brand" href="/">
            <img
              className="navbar-brand-sticky mlogo"
              src="img/logo_white.png"
              alt="sticky brand-logo"
              style={{zIndex: 2000}}
            />
          </a>
          <div className="justify-content-center">
            <div className="intro text-center customFont">
              <h1 className="mb-1 text-blue" style={{ marginTop: "7vh", fontFamily: "inherit" }}>
                MASTER NODES
              </h1>
              <h2 className="mt-1 mb-0" style={{fontFamily: "inherit", fontSize: "46.4px" }}>FOR PASSIVE INCOME</h2>
              <h3 className="mt-4 mb-0" style={{fontFamily: "inherit", fontWeight: "normal" }}>
                Buy your TurkNodes & earn <br /> through the blockchain
              </h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
