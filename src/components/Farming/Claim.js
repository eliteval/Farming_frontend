import React, { Component } from "react";

const initData = {
  pre_heading: "Dashboard",
  heading: "abcdef",
};

class Claim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({
      initData: initData,
    });
  }

  handleCreateNodeButton = (node_type) => {
    this.props.createNode(node_type);
  };

  handleClaimNodesAllButton = () => {
    this.props.claimNodesAll();
  };

  handleClaimNodesForTypeButton = (node_type) => {
    this.props.claimNodesForType(node_type);
  };

  render() {
    return (
      <section className="author-area bg-white">
        <div
          className="container"
          style={{ minHeight: "450px", padding: "50px 5% 0px" }}
        >
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <div className="claim-box bg-gray">
                    <span>Your Nodes</span>
                    <span className="float-right">
                      {this.props.node_count_total}
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="claim-box bg-gray">
                    <span>Rewards</span>
                    <span className="float-right">
                      $ {(this.props.yield_total / 1e18).toFixed(4)}
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <button
                    className="btn claim-button myshadow"
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
                  <table className="responsive claim-table mt-5">
                    <thead>
                      <tr>
                        <th>Node Types</th>
                        <th>Quantity</th>
                        <th>Rewards</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Stater</td>
                        <td>{this.props.node_count_types[0]}</td>
                        <td>
                          {(this.props.yield_types[0] / 1e18).toFixed(4)}$
                        </td>
                        <td className="text-center">
                          <button
                            className="btn gray claim-button-sm myshadow mx-2 mb-2"
                            onClick={() => this.handleCreateNodeButton(0)}
                          >
                            Buy New
                          </button>
                          <button
                            className="btn red claim-button-sm myshadow mx-2 mb-2"
                            onClick={() =>
                              this.handleClaimNodesForTypeButton(0)
                            }
                          >
                            Claim
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Pro</td>
                        <td>{this.props.node_count_types[1]}</td>
                        <td>
                          {(this.props.yield_types[1] / 1e18).toFixed(4)}$
                        </td>
                        <td className="text-center">
                          <button
                            className="btn gray claim-button-sm myshadow mx-2 mb-2"
                            onClick={() => this.handleCreateNodeButton(1)}
                          >
                            Buy New
                          </button>
                          <button
                            className="btn red claim-button-sm myshadow mx-2 mb-2"
                            onClick={() =>
                              this.handleClaimNodesForTypeButton(1)
                            }
                          >
                            Claim
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Whale</td>
                        <td>{this.props.node_count_types[2]}</td>
                        <td>
                          {(this.props.yield_types[2] / 1e18).toFixed(4)}$
                        </td>
                        <td className="text-center">
                          <button
                            className="btn gray claim-button-sm myshadow mx-2 mb-2"
                            onClick={() => this.handleCreateNodeButton(2)}
                          >
                            Buy New
                          </button>
                          <button
                            className="btn red claim-button-sm myshadow mx-2 mb-2"
                            onClick={() =>
                              this.handleClaimNodesForTypeButton(2)
                            }
                          >
                            Claim
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Claim;
