import React, { Component } from "react";
import parse from "html-react-parser";

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
    quote: "How is the yield generated?",
    contentId: "collapseThree",
    contentClass: "collapse ",
    content:
      "By purchasing a TurkNode you earn a slice of the revenue from these transactions and our proprietary node infrastructure strategy to achieve returns of up to 80% APR earned on the USD value of the initial investment.",
  },
  {
    id: "4",
    btnClass: "btn d-block text-left w-100 collapsed py-4 gray",
    target: "#collapseFour",
    quote: "Why is this opportunity given to everyone?",
    contentId: "collapseFour",
    contentClass: "collapse",
    content:
      "As Inflation devastates the global markets making food, housing and healthcare unaffordable, TurkNode’s USD linked rate of return protects investors with the perfect inflation hedge. By breaking down barriers to entry, TurkNodes empowers ANYONE to participate in the passive income revolution by purchasing a node directly from our website.",
  },
  {
    id: "5",
    btnClass: "btn d-block text-left w-100 collapsed py-4 gray",
    target: "#collapseFive",
    quote: "Is this the first protocol of this kind in Turkey?",
    contentId: "collapseFive",
    contentClass: "collapse",
    content:
      "Yes it is.",
  },
  {
    id: "6",
    btnClass: "btn d-block text-left w-100 collapsed py-4 gray",
    target: "#collapseSix",
    quote: "Where are the nodes hosted?",
    contentId: "collapseSix",
    contentClass: "collapse",
    content:
      "TurkNodes are geographically distributed around the world to bolster decentralization of the very networks it aims to secure, further expanding its global footprint.",
  },

  {
    id: "8",
    btnClass: "btn d-block text-left w-100 collapsed py-4 gray",
    target: "#collapseEight",
    quote: "How to withdraw to your Binance account?",
    contentId: "collapseEight",
    contentClass: "collapse",
    content: `1.	Claim your rewards and send them to your Binance BNB Deposit Wallet<br> 2.	Sell BNB for Lira and withdraw Lira from your Binance account to your Bank Account.`,
  },
  {
    id: "9",
    btnClass: "btn d-block text-left w-100 collapsed py-4 gray",
    target: "#collapseNine",
    quote: "Referral System",
    contentId: "collapseNine",
    contentClass: "collapse",
    content: `When you refer a friend to TurkNode you receive a $5 USD bonus (paid in BNB tokens) for the referral and your friend receives a discount of $5 USD on their  TurkNode purchases! <br>When your friends sign up to TurkNode be sure they copy and paste your entire wallet address (example 0x123abc……)`,
  },
  {
    id: "10",
    btnClass: "btn d-block text-left w-100 collapsed py-4 gray",
    target: "#collapseTen",
    quote: "Important Tips",
    contentId: "collapseTen",
    contentClass: "collapse",
    content: `Be sure to always withdraw a little more BNB tokens than you think you need.<br>
    Be sure to always keep a little bit of BNB tokens in your wallet to cover network costs`,
  },

];


const guidedata = [
  {
    id: "7",
    btnClass: "btn d-block text-left w-100 collapsed py-4 gray",
    target: "#collapseSeven",
    quote: "How to buy a Node?",
    contentId: "collapseSeven",
    contentClass: "collapse",
    link: `faq1.pdf`,
  },
  {
    id: "11",
    btnClass: "btn d-block text-left w-100 collapsed py-4 gray",
    target: "#collapseEleven",
    quote: "Connecting MetaMask to Binance Smart Chain",
    contentId: "collapseEleven",
    contentClass: "collapse",
    link: `https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain`,
  },  
]

class Faq extends Component {
  state = {
    initData: {},
    data: [],
    guidedata: [],
  };
  componentDidMount() {
    this.setState({
      initData: initData,
      data: data,
      guidedata: guidedata,
    });
  }
  render() {
    return (
      <section className="faq-area pt-0 bg-red" >
        <div className="container">
          <div className="row justify-content-center" id="guide">
            <div className="col-12 col-md-8 col-lg-7">
              {/* Intro */}
              <div className="intro text-center customFaq">
                <span>{this.state.initData.pre_heading}</span>
                <h2
                  className="mt-3 mb-0"
                  style={{ textShadow: "4px 3px 7px black" }}
                >
                  Node Setup Guides
                </h2>
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
                    <div className="col-12 col-md-10 customFaq">
                      {/* Single Accordion Item */}
                      <div
                        style={{
                          boxShadow: "7px 6px 18px black",
                          borderRadius: "17px",
                        }}
                      >
                        {this.state.guidedata.map((item, idx) => {
                          if (idx === 0) {
                            return (
                              <div
                                key={`fd_${idx}`}
                                className="single-accordion-item"
                                style={{
                                  backgroundColor: "#302e2e",
                                  borderRadius: "17px 17px 0 0",
                                  borderBottom: "1px solid white",
                                }}
                              >
                                <div className="bg-inherit p-0">
                                  <h2 className="m-0">
                                    <a href={item.link} target="_blank">
                                      <button
                                        style={{
                                          borderRadius: 0,
                                          borderRadius: "17px 17px 0 0",
                                        }}
                                        className={item.btnClass}
                                        type="button"
                                        data-toggle="collapse"
                                        data-target={item.target}
                                      >
                                        {item.quote}
                                      </button>
                                    </a>
                                  </h2>
                                </div>
                              </div>
                            );
                          }
                          if (idx === this.state.guidedata.length - 1) {
                            return (
                              <div
                                key={`fd_${idx}`}
                                className="single-accordion-item"
                                style={{
                                  backgroundColor: "#302e2e",
                                  borderRadius: "0 0 17px 17px",
                                }}
                              >
                                <div className="bg-inherit p-0">
                                  <h2 className="m-0">
                                    <a href={item.link} target="_blank">
                                      <button
                                        style={{
                                          borderRadius: 0,
                                          borderRadius: "0 0 17px 17px",
                                        }}
                                        className={item.btnClass}
                                        type="button"
                                        data-toggle="collapse"
                                        data-target={item.target}
                                      >
                                        {item.quote}
                                      </button>
                                    </a>
                                  </h2>
                                </div>
                              </div>
                            );
                          }
                          return (
                            <div
                              key={`fd_${idx}`}
                              className="single-accordion-item"
                              style={{
                                backgroundColor: "#302e2e",
                                borderBottom: "1px solid white",
                              }}
                            >
                              <div className="bg-inherit p-0">
                                <h2 className="m-0">
                                  <a href={item.link} target="_blank">
                                    <button
                                      style={{
                                        borderRadius: 0,
                                        borderRadius: "17px 17px 0 0",
                                      }}
                                      className={item.btnClass}
                                      type="button"
                                      data-toggle="collapse"
                                      data-target={item.target}
                                    >
                                      {item.quote}
                                    </button>
                                  </a>
                                </h2>
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

          {/* FAQ */}
          <div className="row justify-content-center" id="faq_area">
            <div className="col-12 col-md-8 col-lg-7">
              {/* Intro */}
              <div className="intro text-center customFaq">
                <span>{this.state.initData.pre_heading}</span>
                <h2
                  className="mt-3 mb-0"
                  style={{ textShadow: "4px 3px 7px black" }}
                >
                  {this.state.initData.heading}
                </h2>
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
                    <div className="col-12 col-md-10 customFaq">
                      {/* Single Accordion Item */}
                      <div
                        style={{
                          boxShadow: "7px 6px 18px black",
                          borderRadius: "17px",
                        }}
                      >
                        {this.state.data.map((item, idx) => {
                          if (idx === 0) {
                            return (
                              <div
                                key={`fd_${idx}`}
                                className="single-accordion-item"
                                style={{
                                  backgroundColor: "#302e2e",
                                  borderRadius: "17px 17px 0 0",
                                }}
                              >
                                {/* Card Header */}
                                <div className="card-header bg-inherit p-0">
                                  <h2 className="m-0">
                                    <button
                                      style={{
                                        borderRadius: 0,
                                        borderRadius: "17px 17px 0 0",
                                      }}
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
                                  <div
                                    className="card-body py-3 contentBody"
                                    style={{ color: "#bbb" }}
                                  >
                                    {parse(item.content)}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                          if (idx === this.state.data.length - 1) {
                            return (
                              <div
                                key={`fd_${idx}`}
                                className="single-accordion-item"
                                style={{
                                  backgroundColor: "#302e2e",
                                  borderRadius: "0 0 17px 17px",
                                }}
                              >
                                {/* Card Header */}
                                <div className="card-header bg-inherit p-0">
                                  <h2 className="m-0">
                                    <button
                                      style={{
                                        borderRadius: 0,
                                        borderRadius: "0 0 17px 17px",
                                        borderTop: "1px solid white",
                                      }}
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
                                  <div
                                    className="card-body py-3 contentBody"
                                    style={{ color: "#bbb" }}
                                  >
                                    {parse(item.content)}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                          return (
                            <div
                              key={`fd_${idx}`}
                              className="single-accordion-item"
                              style={{ backgroundColor: "#302e2e" }}
                            >
                              {/* Card Header */}
                              <div className="card-header bg-inherit p-0">
                                <h2 className="m-0">
                                  <button
                                    style={{
                                      borderRadius: 0,
                                      borderTop: "1px solid white",
                                    }}
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
                                <div
                                  className="card-body py-3 contentBody"
                                  style={{ color: "#bbb" }}
                                >
                                  {parse(item.content)}
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
        </div>
      </section>
    );
  }
}

export default Faq;
