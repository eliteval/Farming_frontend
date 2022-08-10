import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import {
  readableDuration,
  getNodeName,
  convertToDate,
  getValue,
} from "../../utils/utils";

class Referral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //own
      system_info: {},
      top_referrers: [],
      search_address: "",
      search_result: {},
    };
  }

  componentWillMount = async () => {
    await this.loadData();
  };

  loadData = async () => {
    var system_info = await this.props.referralContract.methods
      .getReferralSystemInfo()
      .call();
    this.setState({ system_info });

    var top_referrers = await this.props.referralContract.methods
      .getTopReferres(10)
      .call();
    this.setState({ top_referrers });
    console.log(top_referrers, top_referrers[0]);
  };

  searchReferrer = async () => {
    var search_result = await this.props.referralContract.methods
      .getReferrerInfo(this.state.search_address)
      .call();
    this.setState({ search_result });
    console.log(123);
  };

  render() {
    return (
      <section className="author-area  pancil">
        <div
          className="container"
          style={{ minHeight: "450px", padding: "0px 5% 0px" }}
        >
          {/* Global  */}
          <div className="row">
            <div className="col-sm-12">
              <h4 className="text-red mb-1">Global Metrics</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-4">
              <div className="claim-box bg-gray box1">
                <span style={{ fontSize: "19px" }}>Referrers</span>
                <span className="float-right">
                  {this.state.system_info.total_referrers}
                </span>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="claim-box bg-gray">
                <span style={{ fontSize: "19px" }}>Referrals</span>
                <span className="float-right">
                  {this.state.system_info.total_referrals}
                </span>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="claim-box bg-gray">
                <span style={{ fontSize: "19px" }}>Affilate Rewards</span>
                <span className="float-right">
                  {getValue(this.state.system_info.total_affilate_rewards)}
                </span>
              </div>
            </div>
          </div>
          {/* table - top 10 */}
          <div className="row justify-content-center mt-2">
            <div className="col-12">
              <h4 className="text-red">Top 10 Referrers</h4>
              <table
                style={{ borderCollapse: "collapse", fontSize: "12px" }}
                className="responsive referrer-table mt-2"
              >
                <thead>
                  <tr>
                    <th className="col-md-4">Referrer</th>
                    <th className="col-md-4">Referrals</th>
                    <th className="col-md-4">Volume</th>
                    <th className="col-md-4">Reward</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.top_referrers.map((item) => {
                    return (
                      <tr style={{ background: "#ffffff" }}>
                        <td>{item.referrer_address}</td>
                        <td>{item.referrals}</td>
                        <td>{getValue(item.volume)}</td>
                        <td>{getValue(item.affilate_rewards)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {/* search */}
          <div className="row mt-3">
            <div className="col-sm-12">
              <h4 className="text-red mb-1">Referrer Search</h4>
            </div>
          </div>
          <div className="row">
            <Form.Group
              className="col-8 col-sm-9 col-md-10"
              controlId="formBasicEmail"
            >
              <Form.Control
                className="my-1"
                type="text"
                placeholder="Enter referrer address"
                style={{ height: "47px" }}
                onChange={(event) =>
                  this.setState({ search_address: event.target.value })
                }
                value={this.state.search_address}
              />
            </Form.Group>
            <div className="col-4 col-sm-3 col-md-2 text-center px-1">
              <button
                className="btn red myshadow mx-1 my-1"
                onClick={() => this.searchReferrer()}
              >
                Search
              </button>
            </div>
          </div>
          {/* Search Result */}
          {this.state.search_result && this.state.search_result.referrals ? (
            <>
              <div className="row justify-content-center mt-3">
                <div className="col-sm-12 col-md-4">
                  <div className="claim-box-small bg-gray">
                    <span>Referrals</span>
                    <span className="float-right">
                      {this.state.search_result.referrals}
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="claim-box-small bg-gray">
                    <span>Volume</span>
                    <span className="float-right">
                      {getValue(this.state.search_result.volume)}
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="claim-box-small bg-gray">
                    <span>Affilate Rewards</span>
                    <span className="float-right">
                      {getValue(this.state.search_result.affilate_rewards)}
                    </span>
                  </div>
                </div>
              </div>
              {/* table - search result */}
              <div className="row justify-content-center mt-2">
                <div className="col-12">
                  <table
                    style={{ borderCollapse: "collapse" }}
                    className="responsive referrer-table mt-2"
                  >
                    <thead>
                      <tr>
                        <th className="col-md-4">Referral</th>
                        <th className="col-md-4 ">Deposits</th>
                        <th className="col-md-4 ">Reward</th>
                        <th className="col-md-4 ">Created</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.search_result.actions.map((action) => {
                        return (
                          <tr style={{ background: "#ffffff" }}>
                            <td>{action[1]}</td>
                            <td>{getValue(action[2])}</td>
                            <td>{getValue(action[3])}</td>
                            <td>{convertToDate(action[4] * 1000)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </section>
    );
  }
}

export default Referral;
