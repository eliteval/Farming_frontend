import React, { Component } from "react";

const initData = {
  pre_heading: "Dashboard",
  heading: "abcdef",
};

class Bar extends Component {
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
      <div className="bg-gray" style={{ padding: "10px 20% 25px" }}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-4">
          <div className="text-center">
            <h3 className="mt-3 mb-0">
              <span style={{ fontSize: "50px" }}>80%</span> APR
            </h3>
            <h4 className="mt-1 mb-3 text-red">1st YEAR</h4>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="text-center">
            <h3 className="mt-3 mb-0">
              <span style={{ fontSize: "50px" }}>90%</span> APR
            </h3>
            <h6 className="mt-1 mb-3 text-red">2nd YEAR</h6>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="text-center">
            <h3 className="mt-3 mb-0">
              <span style={{ fontSize: "50px" }}>100%</span> APR
            </h3>
            <h6 className="mt-1 mb-3 text-red">3rd YEAR</h6>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Bar;
