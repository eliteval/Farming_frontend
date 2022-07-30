import React, { Component } from "react";

const initData = {
  pre_heading: "Mint",
  heading: "Mint Your TurkNodes",
};

class Mint extends Component {
  state = {
    initData: {},
    mintAmount: 0,
  };

  componentDidMount() {
    this.setState({
      initData: initData,
    });
  }

  callMintMyNFTFromApp = (e) => {
    e.preventDefault();
    if (this.state.mintAmount > 0) this.props.mint(this.state.mintAmount);
  };

  render() {
    return (
      <section className="author-area" id="mint_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-7">
              {/* Intro */}
              <div className="intro text-center">
                <span>{this.state.initData.pre_heading}</span>
                <h2 className="mt-3 mb-0">{this.state.initData.heading}</h2>
                <h4>
                  Total minted: {this.props.totalSupply} /{" "}
                  {this.props.MAX_SUPPLY}
                </h4>
              </div>
              {/* Item Form */}
              <div className="row">
                <div className="col-12 text-center">
                  {this.props.stage == "presale" ? <h3>PRESALE</h3> : <></>}
                  {this.props.stage == "publicsale" ? (
                    <h3>PUBLIC SALE</h3>
                  ) : (
                    <></>
                  )}
                  <h4>Quantity</h4>
                  <button
                    className="flex btn btn-smaller mr-3"
                    style={{ marginTop: "-15px" }}
                    onClick={() =>
                      this.setState({
                        mintAmount: Math.max(this.state.mintAmount - 1, 0),
                      })
                    }
                  >
                    -
                  </button>
                  <span
                    style={{
                      fontSize: "35px",
                      fontWeight: "700",
                      color: "white",
                      marginTop: "20px",
                    }}
                  >
                    [ {this.state.mintAmount} ]
                  </span>
                  <button
                    className="flex btn btn-smaller ml-3"
                    style={{ marginTop: "-15px" }}
                    onClick={() =>
                      this.setState({ mintAmount: this.state.mintAmount + 1 })
                    }
                  >
                    +
                  </button>
                </div>
                <div className="col-12 text-center mt-3">
                  <button
                    className="btn mt-3 mt-sm-4"
                    onClick={(e) => this.callMintMyNFTFromApp(e)}
                  >
                    <i className="icon-cloud-upload mr-2" />
                    Mint
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Mint;
