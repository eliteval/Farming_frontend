import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {
  readableDuration,
  getNodeName,
  convertToDate,
  getValue,
} from "../../utils/utils";

function BuyNewNodeModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <img
            style={{ width: "75%" }}
            className=" fix_logo omgggg navbar-brand-sticky"
            src="img/logo_white.png"
            alt="sticky brand-logo"
          />
        </Modal.Title>
        <span onClick={() => props.onHide()} className="close_btn">
          x
        </span>
      </Modal.Header>
      <Modal.Body>
        {/* Referral System - not using for now */}
        <div className="main_flex mb-2">
          <Form className="row">
            <Form.Group
              className="col-sm-12 col-md-12 mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label>Referrer address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter referrer address if you have"
                style={{ height: "47px" }}
                onChange={(event) => props.onReferrerChange(event.target.value)}
                value={props.referrer_address}
              />
              {props.referrer_address == props.accountAddress ? (
                <span className="text-red">
                  Referrer address can not be your self.
                </span>
              ) : (
                <></>
              )}
            </Form.Group>
            {/* <div className="col-sm-12 col-md-4 text-center">
              <button className="btn red myshadow mx-2 mb-2">
                Support Project
              </button>
            </div> */}
          </Form>
        </div>

        <div className="main_flex">
          <div className="apr__main">APR: 80%</div>
        </div>
        <table
          style={{ borderCollapse: "collapse", maxWidth: "745px" }}
          className="responsive claim-table "
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid beige",
                  borderRadius: "20px 0px 0px 4px",
                }}
                className="col-md-4"
              >
                Node Type
              </th>
              <th
                style={{
                  border: "1px solid beige",
                  borderRadius: "0px 20px 0px 4px",
                }}
                className="col-md-4"
              >
                Cost
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: "#ffffff" }}>
              <td>Starter</td>
              <td>$100</td>
              <td className="relative_div">
                <div className="text-center absole absole2 lastone">
                  <button
                    className="btn red claim-button-sm myshadow mx-2 mb-2 mainclass"
                    onClick={() => {
                      props.onHide();
                      props.handleCreateNodeButton(0);
                    }}
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
                <div className="text-center absole absole2 lastone">
                  <button
                    className="btn red claim-button-sm myshadow mx-2 mb-2 mainclass"
                    onClick={() => {
                      props.onHide();
                      props.handleCreateNodeButton(1);
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </td>
            </tr>

            <tr style={{ background: "#ffffff" }}>
              <td
                style={{
                  border: "1px solid beige",
                  borderRadius: "0px 0px 0px 20px",
                }}
              >
                Whale
              </td>
              <td>$1000</td>
              <td
                style={{
                  border: "1px solid beige",
                  borderRadius: "0px 0px 20px 0px",
                }}
                className="relative_div"
              >
                <div className="text-center absole absole2 lastone">
                  <button
                    className="btn red claim-button-sm myshadow mx-2 mb-2 mainclass"
                    onClick={() => {
                      props.onHide();
                      props.handleCreateNodeButton(2);
                    }}
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

function RenewModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <img
            style={{ width: "75%" }}
            className=" fix_logo omgggg navbar-brand-sticky"
            src="img/logo_white.png"
            alt="sticky brand-logo"
          />
        </Modal.Title>
        <span onClick={() => props.onHide()} className="close_btn">
          x
        </span>
      </Modal.Header>
      <Modal.Body>
        <div className="main_flex">
          <div className="apr__main">You have no node to renew</div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      renewmodalShow: false,
      referrer_address: "",
    };
  }

  handleCreateNodeButton = (node_type) => {
    this.props.createNode(node_type, this.state.referrer_address);
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
                  <div className="claim-box bg-gray box1">
                    <span style={{ fontSize: "19px" }}>Your Nodes</span>
                    <span className="float-right">
                      {this.props.userStatus.nodes}
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="claim-box bg-gray">
                    <span style={{ fontSize: "19px" }}>Rewards</span>
                    <span className="float-right">
                      {getValue(this.props.userStatus.yield, 3)}
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  {this.props.userStatus.yield == 0 ? (
                    <button className="btn claim-button" disabled>
                      Claim All
                    </button>
                  ) : (
                    <button
                      className="btn claim-button"
                      onClick={() => this.props.claimNodesAll()}
                    >
                      Claim All
                    </button>
                  )}
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
                    <div style={{ marginTop: "21px" }} className="main_flex">
                      <div className="apr__main">APR: 80%</div>
                    </div>
                    <table
                      style={{ borderCollapse: "collapse" }}
                      className="responsive claim-table mt-2"
                    >
                      <thead>
                        <tr>
                          <th
                            style={{
                              border: "1px solid beige",
                              borderRadius: "20px 0px 0px 4px",
                            }}
                            className="col-md-4"
                          >
                            Node Type
                          </th>
                          <th className="col-md-4 hide_767">Quantity</th>
                          <th
                            style={{
                              border: "1px solid beige",
                              borderRadius: "0px 20px 0px 4px",
                            }}
                            className="col-md-4"
                          >
                            Rewards
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[0, 1, 2].map((index) => {
                          return (
                            <tr style={{ background: "#ffffff" }} key={index}>
                              <td>
                                {getNodeName(index)}
                                <span
                                  className="show_767"
                                  style={{ display: "none" }}
                                >
                                  &nbsp;(
                                  {this.props.userStatus.nodes_per_type[index]})
                                </span>
                              </td>
                              <td className="hide_767">
                                {this.props.userStatus.nodes_per_type[index]}
                              </td>
                              <td className="relative_div">
                                {getValue(
                                  this.props.userStatus.yield_per_type[index],
                                  3
                                )}
                                <div className="text-center absole">
                                  {Number(
                                    this.props.userStatus.yield_per_type[index]
                                  ) == 0 ? (
                                    <button
                                      className="btn red claim-button-sm myshadow mx-2 mb-2 mainclass"
                                      disabled
                                    >
                                      Claim
                                    </button>
                                  ) : (
                                    <button
                                      className="btn red claim-button-sm myshadow mx-2 mb-2 mainclass"
                                      onClick={() =>
                                        this.props.claimNodesForType(index)
                                      }
                                    >
                                      Claim
                                    </button>
                                  )}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-content-center mt-4">
            <div className="row" style={{ padding: "0px 10%" }}>
              <div className="col-xs-12 col-sm-6  ">
                <button
                  style={{ borderRadius: "48px", padding: "12px" }}
                  className="btn gray claim-button myshadow mx-2 mb-2"
                  onClick={() => this.setState({ modalShow: true })}
                >
                  Buy New Node
                </button>
              </div>
              <div className="col-xs-12 col-sm-6  ">
                <button
                  style={{ borderRadius: "48px", padding: "12px" }}
                  className="btn gray claim-button myshadow mx-2 mb-2"
                  onClick={() => this.setState({ renewmodalShow: true })}
                >
                  Renew Node
                </button>
              </div>
            </div>
          </div>

          <div
            style={{ display: "flex", justifyContent: "end" }}
            className="row justify-content-center mt-5"
          >
            <div className="col-sm-12 col-md-4">
              <div
                className="claim-box bg-red box1"
                style={{ fontSize: "20px" }}
              >
                <span>Total Nodes</span>
                <span className="float-right">
                  {this.props.contractStatus._total_nodes}
                </span>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div
                className="claim-box bg-red box1"
                style={{ fontSize: "20px" }}
              >
                <span>Total Rewards</span>
                <span className="float-right">
                  {getValue(this.props.contractStatus._total_withdrawed)}
                </span>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div
                className="claim-box bg-red box1"
                style={{ fontSize: "20px" }}
              >
                <span>Total Volume</span>
                <span className="float-right">
                  {getValue(this.props.contractStatus._total_deposited)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <BuyNewNodeModal
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          handleCreateNodeButton={this.handleCreateNodeButton}
          referrer_address={this.state.referrer_address}
          accountAddress={this.props.accountAddress}
          onReferrerChange={(val) => this.setState({ referrer_address: val })}
        />
        <RenewModal
          show={this.state.renewmodalShow}
          onHide={() => this.setState({ renewmodalShow: false })}
        />
      </section>
    );
  }
}

export default Dashboard;
