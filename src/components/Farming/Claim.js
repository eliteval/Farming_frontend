import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const initData = {
  pre_heading: "Dashboard",
  heading: "abcdef",
};


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
        <img
        style={{    backgroundColor: "#e4001c"}}
              className="navbar-brand-sticky"
              src="img/logo_white.png"
              alt="sticky brand-logo"
            />
        </Modal.Title>
        <span class="close_btn">x</span>
      </Modal.Header>
      <Modal.Body>
     
               
                    <table style={{ borderCollapse: "collapse",maxWidth:"616px" }} className="responsive claim-table ">
                      <thead>
                        <tr>
                          <th style={{
                            border: "1px solid beige",
                            borderRadius: "20px 0px 0px 4px"
                          }} class="col-md-4">Node Type</th>
                          <th class="col-md-4" >Cost</th>
                          <th style={{
                            border: "1px solid beige",
                            borderRadius: "0px 20px 0px 4px"
                          }} class="col-md-4">APR</th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ background: "#ffffff" }}>
                          <td>Starter</td>
                          <td>$100</td>
                          <td className="relative_div">
                           80%
                           <div className="text-center absole">
                              <button

                                className="btn red claim-button-sm myshadow mx-2 mb-2 mainclass"
                                onClick={() =>
                                  this.handleClaimNodesForTypeButton(0)
                                }
                              >
                                Buy Now
                              </button>
                            </div>
                          </td>

                        </tr>

                        <tr style={{ background: "#ffffff" }}>
                          <td>Pro</td>
                          <td>$500</td>
                          <td className="relative_div">
                           90%
                           <div className="text-center absole">
                              <button

                                className="btn red claim-button-sm myshadow mx-2 mb-2 mainclass"
                                onClick={() =>
                                  this.setState({modalShow:false})
                                }
                              >
                                Buy Now
                              </button>
                            </div>
                          </td>

                        </tr>

                        <tr style={{ background: "#ffffff" }}>
                          <td style={{
                            border: "1px solid beige",
                            borderRadius: "0px 0px 0px 20px"
                          }}>Whale</td>
                          <td>$1000</td>
                          <td style={{
                            border: "1px solid beige",
                            borderRadius: "0px 0px 20px 0px"
                          }} className="relative_div">
                          1000%
                          <div className="text-center absole">
                              <button

                                className="btn red claim-button-sm myshadow mx-2 mb-2 mainclass"
                                onClick={() =>
                                  this.handleClaimNodesForTypeButton(0)
                                }
                              >
                                Buy Now
                              </button>
                            </div>
                          </td>

                        </tr>

                      </tbody>
                    </table>
             

      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Buy Now</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

class Claim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      modalShow:false
    };
  }



  componentDidMount() {
    this.setState({
      initData: initData,
    });
  }

  handleCreateNodeButton = () => {
    let node_type = prompt("Which node will you select?");
    if (node_type) this.props.createNode(node_type);
  };

  handleClaimNodesAllButton = () => {
    this.props.claimNodesAll();
  };

  handleClaimNodesForTypeButton = (node_type) => {
    this.props.claimNodesForType(node_type);
  };




  render() {
    return (
      <section className="author-area  pancil">
        <div
          className="container"
          style={{ minHeight: "450px", padding: "50px 5% 0px" }}
        >
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <div className="claim-box bg-gray">
                    <span style={{fontSize:"19px"}}>Your Nodes</span>
                    <span className="float-right">
                      {this.props.node_count_total}
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="claim-box bg-gray">
                    <span style={{fontSize:"19px"}}>Rewards</span>
                    <span className="float-right">
                      $ {(this.props.yield_total / 1e18).toFixed(3)}
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <button
                    className="btn claim-button "
                    onClick={() => this.handleClaimNodesAllButton()}
                  >
                    Claim All
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* table */}
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <div>
                    <table style={{ borderCollapse: "collapse" }} className="responsive claim-table mt-5">
                      <thead>
                        <tr>
                          <th style={{
                            border: "1px solid beige",
                            borderRadius: "20px 0px 0px 4px"
                          }} class="col-md-4">Nodes Type</th>
                          <th class="col-md-4" >Quantity</th>
                          <th style={{
                            border: "1px solid beige",
                            borderRadius: "0px 20px 0px 4px"
                          }} class="col-md-4">Rewards</th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ background: "#ffffff" }}>
                          <td>Stater</td>
                          <td>{this.props.node_count_types[0]}</td>
                          <td className="relative_div">
                            {(this.props.yield_types[0] / 1e18).toFixed(3)}$
                            <div className="text-center absole">
                              <button

                                className="btn red claim-button-sm myshadow mx-2 mb-2 mainclass"
                                onClick={() =>
                                  this.handleClaimNodesForTypeButton(0)
                                }
                              >
                                Claim
                              </button>
                            </div>
                          </td>

                        </tr>

                        <tr style={{ background: "#ffffff" }}>
                          <td>Pro</td>
                          <td>{this.props.node_count_types[1]}</td>
                          <td className="relative_div">
                            {(this.props.yield_types[1] / 1e18).toFixed(3)}$
                            <div className="text-center absole">
                              <button

                                className="btn red claim-button-sm myshadow mx-2 mb-2 mainclass"
                                onClick={() =>
                                  this.handleClaimNodesForTypeButton(1)
                                }
                              >
                                Claim
                              </button>
                            </div>
                          </td>

                        </tr>

                        <tr style={{ background: "#ffffff" }}>
                          <td style={{
                            border: "1px solid beige",
                            borderRadius: "0px 0px 0px 20px"
                          }}>Whale</td>
                          <td>{this.props.node_count_types[2]}</td>
                          <td style={{
                            border: "1px solid beige",
                            borderRadius: "0px 0px 20px 0px"
                          }} className="relative_div">
                            {(this.props.yield_types[2] / 1e18).toFixed(3)}$
                            <div className="text-center absole">
                              <button

                                className="btn red claim-button-sm myshadow mx-2 mb-2 mainclass"
                                onClick={() =>
                                  this.handleClaimNodesForTypeButton(2)
                                }
                              >
                                Claim
                              </button>
                            </div>
                          </td>

                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "end" }} className="row justify-content-right mt-4">
            <div className="col-sm-12 col-md-4  ">
              <div className="borderbtn"></div>
              <button
                style={{ borderRadius: "48px", padding: "12px" }}
                className="btn gray claim-button myshadow mx-2 mb-2"
                onClick={() =>   this.setState({modalShow : true})}
              >
                Buy New Node
              </button>
            </div>
          </div>
        </div>
  



      <MyVerticallyCenteredModal
        show={this.state.modalShow}
        onHide={() =>   this.setState({modalShow : false})}
      />

      </section>
    );
  }
}

export default Claim;
