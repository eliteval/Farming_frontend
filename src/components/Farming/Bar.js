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
        <div className="row justify-content-center">
          <h4 className="mt-5 text-red ">
            Annual Returns
          </h4>
        </div>
        <div
          className="row justify-content-center"
          style={{ width: "60vw", margin: "auto" }}
        >
          <div className="col-12 col-md-4">
            <div className="text-center relative_">
              <img src="/img/chart-01.png" width={"50%"} />
              <h6 className="mt-2 mb-3 text-red customDate">1st YEAR</h6>
            </div>
          </div>
          <div className="col-12 col-md-4">       
            <div className="text-center relative_">
              <img src="/img/chart-02.png" width={"50%"} />
              <h6 className="mt-2 mb-3 text-red customDate">2nd YEAR</h6>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="text-center">
              <img src="/img/chart-03.png" width={"50%"} />
              <h6 className="mt-2 mb-3 text-red customDate">3rd YEAR</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bar;
