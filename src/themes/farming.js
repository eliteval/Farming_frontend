import React, { Component } from "react";
import ReactLoading from "react-loading";

import Header from "../components/Farming/Header";
import Hero from "../components/Hero/Hero";
import Auctions from "../components/Auctions/AuctionsOne";
import TopSeller from "../components/TopSeller/TopSellerOne";
import Collections from "../components/Collections/Collections";
import Explore from "../components/Explore/ExploreOne";
import Work from "../components/Work/Work";
import Footer from "../components/Footer/Footer";
import ModalSearch from "../components/Modal/ModalSearch";
import ModalMenu from "../components/Farming/ModalMenu";
import Scrollup from "../components/Scrollup/Scrollup";
import About from "../components/About/About";
import Faq from "../components/Faq/Faq";
import Authors from "../components/Authors/Authors";
import Dashboard from "../components/Farming/Dashboard";
import Member from "../components/Farming/Member";
import Referral from "../components/Farming/Referral";

import Web3 from "web3";
import FarmingData from "../contract/Farming.json";
import ReferralData from "../contract/Referral.json";
import ERC20Data from "../contract/ERC20.json";

import { BigNumber } from "ethers";
import { formatUnits, parseUnits, commify } from "@ethersproject/units";

class Farming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // provider
      web3: null,
      accountAddress: "",
      accountBalance: "",
      networkId: 0,
      metamaskConnected: false,
      currentBlockTimestamp: 0,
      //contracts
      contract_address: null,
      farmingContract: null,
      referralContract: null,
      erc20Contract: null,
      //contract- setting
      stable_coin_address: "",
      referral_system_address: "",
      no_claim_period: 0,
      expiration_period: 0,
      node_type_deposit: [0, 0, 0], //deposit amounts for 3 types
      //contract- status
      contractStatus: {},
      //contract- user side
      userStatus: {},
      userNodes: [],
      expiredNodeTimestamps: [],
      expiringDuration: 30 * 24 * 60 * 60 * 1000, // 30 days
      expiringDates: [], //after 30 days, will expire
      //token data
      token_allowance: 0,
      token_balance: 0,
      //page
      loading: true,
      showSidebarMenu: false,
      page: "dashboard",
    };
  }

  /*
  --contractStatus--
    _total_deposited: "1000000000000000000"
    _total_nodes: "1"
    _total_nodes_per_type: (3) ['1', '0', '0']
    _total_withdrawed: "0"

  --userStatus --
    deposited: "1000000000000000000"
    nodes: "1"
    nodes_per_type: (3) ['1', '0', '0']
    nodes_timestamps: ['1660070738']
    withdrawed: "0"
    yield: "2036349536960026"
    yield_per_type: (3) ['2036349536960026', '0', '0']

  --userNodes-- Array
    can_free_claim: true
    created_time: "1660070738"
    deposits: "1000000000000000000"
    is_expired: false
    last_claim_time: "1660070738"
    node_type: "0"
    payouts: "0"
    remaining_time: "0"   (seconds)
    renewed: "0"
    upline: "0xed2d267b642730a958B7B90A3a9Bb68511Af1AF7"
    yiled_calculated: "2104030092513022"

    remaining_for_noclaim: 12300  (milliseconds)
    remaining_for_expiration: 12300  (milliseconds)
  */

  componentWillMount = async () => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let page = params.get("page");
    this.setState({ page });

    this.setState({ loading: true });
    await this.loadWeb3();
    await this.loadBlockchainData();
    this.setState({ loading: false });
  };

  loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      // window.alert(
      //   "Non-Ethereum browser detected. You should consider trying MetaMask!"
      // );
    }
    if (window.web3) {
      this.setState({ web3: window.web3 });

      window.ethereum.on("chainChanged", (_chainId) =>
        this.loadBlockchainData()
      );
    }
  };

  loadBlockchainData = async () => {
    const web3 = this.state.web3;
    if (!web3) {
      this.setState({ metamaskConnected: false });
      return;
    }

    var blockNumber = await web3.eth.getBlockNumber();
    var block = await web3.eth.getBlock(blockNumber);
    var timestamp = block.timestamp;
    this.setState({ currentBlockTimestamp: timestamp });

    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      this.setState({ metamaskConnected: false });
    } else {
      this.setState({ metamaskConnected: true });
      this.setState({ accountAddress: accounts[0] });
      let accountBalance = await web3.eth.getBalance(accounts[0]);
      accountBalance = web3.utils.fromWei(accountBalance, "Ether");
      this.setState({ accountBalance });
      const networkId = await web3.eth.net.getId();
      this.setState({ networkId });

      console.log(networkId, this.state.accountAddress, accountBalance);

      const networkData = FarmingData.networks[networkId];
      if (networkData) {
        this.setState({ contract_address: networkData.address });
        const farmingContract = new web3.eth.Contract(
          FarmingData.abi,
          networkData.address
        );
        this.setState({ farmingContract });

        await this.loadData();
        setInterval(async () => {
          await this.loadData();
        }, 15 * 1000);
      } else {
      }
    }
  };

  loadData = async () => {
    // Contract
    var contractStatus = await this.state.farmingContract.methods
      .contractStatus()
      .call();
    this.setState({ contractStatus });

    const {
      _no_claim_period,
      _expiration_period,
      _referral_system_address,
      _stable_coin_address,
    } = await this.state.farmingContract.methods.contractSetting().call();
    this.setState({ stable_coin_address: _stable_coin_address });
    this.setState({ referral_system_address: _referral_system_address });
    this.setState({ no_claim_period: _no_claim_period });
    this.setState({ expiration_period: _expiration_period });

    var node_type1 = await this.state.farmingContract.methods
      .node_types(0)
      .call();
    var node_type2 = await this.state.farmingContract.methods
      .node_types(1)
      .call();
    var node_type3 = await this.state.farmingContract.methods
      .node_types(2)
      .call();
    this.setState({
      node_type_deposit: [
        node_type1.deposit_amount,
        node_type2.deposit_amount,
        node_type3.deposit_amount,
      ],
    });

    // User side
    var userStatus = await this.state.farmingContract.methods
      .userStatus(this.state.accountAddress)
      .call();
    this.setState({ userStatus });

    var userNodes = [];
    var expiredNodeTimestamps = [];
    var expiringDates = [];
    await userStatus.nodes_timestamps.reduce(async (accum, timestamp, key) => {
      // don't progress further until the last iteration has finished:
      await accum;

      var userNodeStatus = await this.state.farmingContract.methods
        .userNodeStatus(this.state.accountAddress, timestamp)
        .call();
      userNodeStatus.remaining_for_noclaim = Math.max(
        (Number(userNodeStatus.created_time) +
          Number(_no_claim_period) -
          this.state.currentBlockTimestamp) *
          1000,
        0
      );

      // var _expiration_period = 60 * 60 * 24 * 40; //40 days
      userNodeStatus.remaining_for_expiration = Math.max(
        (Number(userNodeStatus.created_time) +
          Number(_expiration_period) -
          this.state.currentBlockTimestamp) *
          1000,
        0
      );
      userNodes.push(userNodeStatus);

      if (userNodeStatus.remaining_for_expiration == 0)
        expiredNodeTimestamps.push(userNodeStatus.created_time);
      else if (
        userNodeStatus.remaining_for_expiration < this.state.expiringDuration
      )
        expiringDates.push(
          (Number(userNodeStatus.created_time) + Number(_expiration_period)) *
            1000
        );

      return 1;
    }, Promise.resolve(""));
    this.setState({ userNodes });
    this.setState({ expiredNodeTimestamps });
    this.setState({ expiringDates });

    // Referral
    const referralContract = new this.state.web3.eth.Contract(
      ReferralData.abi,
      _referral_system_address
    );
    this.setState({ referralContract });

    //Stable Coin
    const erc20Contract = new this.state.web3.eth.Contract(
      ERC20Data.abi,
      _stable_coin_address
    );
    this.setState({ erc20Contract });

    const token_allowance = await this.state.erc20Contract.methods
      .allowance(this.state.accountAddress, this.state.contract_address)
      .call();
    this.setState({ token_allowance });

    const token_balance = await this.state.erc20Contract.methods
      .balanceOf(this.state.accountAddress)
      .call();
    this.setState({ token_balance });
  };

  handleToggle = async () => {
    console.log(this.state.showSidebarMenu);
    this.setState({ showSidebarMenu: true });
  };

  connectToMetamask = async () => {
    await window.ethereum.enable();
    this.setState({ metamaskConnected: true });
    window.location.reload();
  };

  disconnect = async () => {
    console.log("disconnecting");
    this.setState({ metamaskConnected: false });
    this.setState({ accountAddress: "" });
  };

  approveToken = async (node_type) => {
    await this.state.erc20Contract.methods
      .approve(
        this.state.contract_address,
        this.state.node_type_deposit[node_type]
      )
      .send({
        from: this.state.accountAddress,
      })
      .on("confirmation", (confirmationNumber) => {
        return;
      });
  };

  createNode = async (node_type, referrer_address) => {
    try {
      if (this.state.token_allowance < this.state.node_type_deposit[node_type])
        await this.approveToken(node_type);
      // console.log(
      //   referrer_address
      //     ? referrer_address
      //     : "0x0000000000000000000000000000000000000000"
      // );
      await this.state.farmingContract.methods
        .createNode(
          node_type,
          referrer_address
            ? referrer_address
            : "0x0000000000000000000000000000000000000000"
        )
        .send({
          from: this.state.accountAddress,
        })
        .on("confirmation", (confirmationNumber) => {
          this.setState({ loading: false });
          this.loadData();
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  renewNode = async (timestamp) => {
    var current_node = this.state.userNodes.find(
      (item) => item.created_time == timestamp
    );

    if (
      this.state.token_allowance <
      this.state.node_type_deposit[current_node.node_type]
    )
      await this.approveToken(current_node.node_type);
    await this.state.farmingContract.methods
      .renew(timestamp)
      .send({
        from: this.state.accountAddress,
      })
      .on("confirmation", (confirmationNumber) => {
        this.loadData();
      });
  };

  claimOne = async (timestamp, amount) => {
    await this.state.farmingContract.methods
      .claimOne(timestamp, amount)
      .send({
        from: this.state.accountAddress,
      })
      .on("confirmation", (confirmationNumber) => {
        this.loadData();
      });
  };

  claimNodesAll = async () => {
    await this.state.farmingContract.methods
      .claimNodesAll()
      .send({
        from: this.state.accountAddress,
      })
      .on("confirmation", (confirmationNumber) => {
        this.loadData();
      });
  };

  claimNodesForType = async (node_type) => {
    await this.state.farmingContract.methods
      .claimNodesForType(node_type)
      .send({
        from: this.state.accountAddress,
      })
      .on("confirmation", (confirmationNumber) => {
        this.loadData();
      });
  };

  render() {
    return (
      <>
        <div className="main">
          <Header
            metamaskConnected={this.state.metamaskConnected}
            accountAddress={this.state.accountAddress}
            connectToMetamask={this.connectToMetamask}
            disconnect={this.disconnect}
            handleToggle={this.handleToggle}
          />
          {this.state.loading ? (
            <section className="author-area bg-white">
              <div
                className="container"
                style={{ minHeight: "450px", padding: "50px 5% 0px" }}
              >
                <div className="row justify-content-center">
                  <div className="col-12">
                    <div className="intro text-center">
                      <ReactLoading
                        type={"spinningBubbles"}
                        color={"red"}
                        height={50}
                        width={50}
                        className="bg-white text-center loading_spin"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : !this.state.metamaskConnected ? (
            <section className="author-area bg-white">
              <div
                className="container"
                style={{ minHeight: "450px", padding: "50px 5% 0px" }}
              >
                <div className="row justify-content-center">
                  <div className="col-12 col-md-8 col-lg-7">
                    <div className="intro text-center">
                      <h4 className="mt-3 mb-0  text-black">
                        Please connect your Metamask.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : this.state.networkId != 56 ? (
            <section className="author-area bg-white">
              <div
                className="container"
                style={{ minHeight: "450px", padding: "50px 5% 0px" }}
              >
                <div className="row justify-content-center">
                  <div className="col-12 col-md-8 col-lg-7">
                    <div className="intro text-center">
                      <h4 className="mt-3 mb-0  text-black">
                        <a
                          href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"
                          target="blank"
                        >
                          Please change network to Binance Smart Chain.
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : this.state.page == "member" ? (
            <Member
              userStatus={this.state.userStatus}
              no_claim_period={this.state.no_claim_period}
              userNodes={this.state.userNodes}
              renewNode={this.renewNode}
              claimOne={this.claimOne}
            />
          ) : this.state.page == "referral" ? (
            <Referral referralContract={this.state.referralContract} />
          ) : (
            <Dashboard
              createNode={this.createNode}
              claimNodesAll={this.claimNodesAll}
              claimNodesForType={this.claimNodesForType}
              accountAddress={this.state.accountAddress}
              userStatus={this.state.userStatus}
              contractStatus={this.state.contractStatus}
              node_type_deposit={this.state.node_type_deposit}
              expiringDates={this.state.expiringDates}
              expiredNodeTimestamps={this.state.expiredNodeTimestamps}
            />
          )}

          {window.location.hostname === "localhost" ||
          window.location.hostname === "127.0.0.1" ? (
            <div className="bg-white">
              <p>page: {this.state.page}</p>
              <p>networkId: {this.state.networkId}</p>
              <p>contract_address: {this.state.contract_address}</p>
              <p>expiringDates: {JSON.stringify(this.state.expiringDates)}</p>
              <p>expiredNodeTimestamps: {this.state.expiredNodeTimestamps}</p>
              <p>stable_coin_address: {this.state.stable_coin_address}</p>
              <p>token_allowance: {this.state.token_allowance}</p>
              <p>token_balance: {this.state.token_balance}</p>
              <p>userStatus: {JSON.stringify(this.state.userStatus)}</p>
            </div>
          ) : (
            <></>
          )}

          <Footer />
          <ModalMenu
            page="dashboard"
            metamaskConnected={this.state.metamaskConnected}
            connectToMetamask={this.connectToMetamask}
            disconnect={this.disconnect}
            // createNode={this.createNode}
            showSidebarMenu={this.state.showSidebarMenu}
          />
          <Scrollup />
        </div>
      </>
    );
  }
}

export default Farming;
