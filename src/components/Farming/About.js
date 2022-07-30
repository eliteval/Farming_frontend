import React, { Component } from "react";

const initData = {
  preHeading: "About",
  heading: "Lore",
  content: `By purchasing a node hosted at a TurkNodes data center,
  you earn passive income from revenue generated by our
  node infrastructure. Turknodes infrastructure is used to
  support the transactions on 4 different blockchains, earning
  profit from every transaction on these networks. By
  purchasing a TurkNode you can access the revenue from
  every transaction and our proprietary node infrastructure
  strategy to achieve returns of up to 80% APR earned on
  the USD value of the initial investment.`,
};

class About extends Component {
  state = {
    data: {},
  };
  componentDidMount() {
    this.setState({
      data: initData,
    });
  }

  handleButton = () => {
    window.location.href = "dashboard";
  };

  render() {
    return (
      <section className="section bg-white" id="about_area">
        <div className="container">
          <div className="justify-content-center">
            <div className="intro text-center">
              <img
                className="card-img-top"
                src="/img/logo_red.png"
                alt=""
                style={{ width: "600px" }}
              />
              <h3 className="mt-3 mb-0 text-black">
                represents a revolution in passive income
              </h3>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12 col-md-6">
              <p style={{ fontSize: "16px" }} className="text-black mb-5">
                {this.state.data.content}
              </p>
            </div>
            <div className="col-12 col-md-6 text-center">
              <img
                className="card-img-top"
                src="/img/chart.png"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="justify-content-center mt-5">
            <div className="intro text-center">
              <button
                className="btn red myshadow"
                style={{ fontSize: "20px" }}
                onClick={() => this.handleButton()}
              >
                Buy New Nodes
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;