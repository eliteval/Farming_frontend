import React, { Component } from "react";

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
        className="author-area"
        id="banner"
        style={{ height: "700px", backgroundImage: 'url("img/banner.jpg")' }}
      >
        <div className="container">
          <div className="justify-content-center">
            <div className="intro text-center">
              <h1 className="mb-0 text-blue" style={{ marginTop: "100px" }}>
                MASTER NODES
              </h1>
              <h2 className="mt-3 mb-0">FOR PASSIVE INCOME</h2>
              <h3 className="mt-3 mb-0">
                Buy your TurkNodes & earn <br /> thorugh the blockchain
              </h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
