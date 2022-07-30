import React, { Component } from "react";

const initData = {
  pre_heading: "",
  heading: "FAQ",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
};

const data = [
  {
    id: "3",
    btnClass: "btn d-block text-left w-100 collapsed py-4 gray",
    target: "#collapseThree",
    quote: "By purchasing a node hosted at a TurkNodes data center ?",
    contentId: "collapseThree",
    contentClass: "collapse ",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    id: "4",
    btnClass: "btn d-block text-left w-100 collapsed py-4 gray",
    target: "#collapseFour",
    quote: "By purchasing a node hosted at a TurkNodes data center ?",
    contentId: "collapseFour",
    contentClass: "collapse",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    id: "5",
    btnClass: "btn d-block text-left w-100 collapsed py-4 gray",
    target: "#collapseFive",
    quote: "By purchasing a node hosted at a TurkNodes data center ?",
    contentId: "collapseFive",
    contentClass: "collapse",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    id: "6",
    btnClass: "btn d-block text-left w-100 collapsed py-4 gray",
    target: "#collapseSix",
    quote: "By purchasing a node hosted at a TurkNodes data center ?",
    contentId: "collapseSix",
    contentClass: "collapse",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
];

class Faq extends Component {
  state = {
    initData: {},
    data: [],
  };
  componentDidMount() {
    this.setState({
      initData: initData,
      data: data,
    });
  }
  render() {
    return (
      <section className="faq-area pt-0 bg-red" id="faq_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-7">
              {/* Intro */}
              <div className="intro text-center">
                <span>{this.state.initData.pre_heading}</span>
                <h2 className="mt-3 mb-0">{this.state.initData.heading}</h2>
                {/* <p>{this.state.initData.content}</p> */}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              {/* FAQ Content */}
              <div className="faq-content">
                {/* Netstorm Accordion */}
                <div className="accordion" id="netstorm-accordion">
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-10">
                      {/* Single Accordion Item */}
                      {this.state.data.map((item, idx) => {
                        return (
                          <div
                            key={`fd_${idx}`}
                            className="single-accordion-item p-3"
                          >
                            {/* Card Header */}
                            <div className="card-header bg-inherit border-0 p-0">
                              <h2 className="m-0">
                                <button
                                  className={item.btnClass}
                                  type="button"
                                  data-toggle="collapse"
                                  data-target={item.target}
                                >
                                  {item.quote}
                                </button>
                              </h2>
                            </div>
                            <div
                              id={item.contentId}
                              className={item.contentClass}
                              data-parent="#netstorm-accordion"
                            >
                              {/* Card Body */}
                              <div className="card-body py-3 text-white">
                                {item.content}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Faq;
