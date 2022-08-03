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
      <div className="bg-gray customBar">
      <div className="row justify-content-center" style={{width: "60vw", margin: "auto"}}>
        <div className="col-12 col-md-4">
          <div className="text-center">
            <h3 className="mt-3 mb-0" style={{fontSize: "27px", fontFamily: "inherit", }}>
              <span style={{fontSize: "37px"}}>80%</span> APR
            </h3>
            <h6 className="mt-3 mb-2 text-red customDate">1st YEAR</h6>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="text-center">
            <h3 className="mt-3 mb-0" style={{fontSize: "27px", fontFamily: "inherit"}}>
              <span style={{fontSize: "37px"}}>90%</span> APR
            </h3>
            <h6 className="mt-3 mb-2 text-red customDate">2nd YEAR</h6>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="text-center">
            <h3 className="mt-3 mb-0" style={{fontSize: "27px", fontFamily: "inherit"}}>
              <span style={{fontSize: "37px"}}>100%</span> APR
            </h3>
            <h6 className="mt-3 mb-2 text-red customDate">3rd YEAR</h6>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Bar;
