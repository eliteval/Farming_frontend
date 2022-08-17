import React, { Component } from "react";
import Video from "react-responsive-video";

import "./Farming.css";

const initData = {
  pre_heading: "Dashboard",
  heading: "abcdef",
};

class Banner extends Component {
  state = {
    initData: {},
    showVideo: false,
    mobileWindow: false,
  };

  componentDidMount() {
    if (window.innerWidth < 800) this.setState({ mobileWindow: true });
    this.setState({
      initData: initData,
      showVideo: true,
    });
  }

  render() {
    return this.state.showVideo ? (
      this.state.mobileWindow ? (
        <Video mp4={`img/turknode_mobile.mp4`} id="banner" />
      ) : (
        <Video mp4={`img/turknode.mp4`} id="banner" />
      )
    ) : (
      <></>
    );

    // <section className="customBanner" id="banner">
    //   <div className="container" style={{ textAlign: "center" }}>
    //     <a className="navbar-brand" href="/">
    //       <img
    //         className="navbar-brand-sticky mlogo"
    //         src="img/logo_white.svg"
    //         alt="sticky brand-logo"
    //         style={{ zIndex: 2001 }}
    //       />
    //     </a>
    //     <div className="justify-content-center">
    //       <div className="intro text-center customFont">
    //         <h1
    //           className="mb-1 text-blue"
    //           style={{ marginTop: "7vh", fontFamily: "inherit" }}
    //         >
    //           MASTER NODES
    //         </h1>
    //         <h2 className="mt-1 mb-0" style={{ fontFamily: "inherit" }}>
    //           FOR PASSIVE INCOME
    //         </h2>
    //         <h3
    //           className="mt-2 mb-0"
    //           style={{ fontFamily: "inherit", fontWeight: "normal" }}
    //         >
    //           Buy your TurkNodes & earn <br /> through the blockchain
    //         </h3>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  }
}

export default Banner;
