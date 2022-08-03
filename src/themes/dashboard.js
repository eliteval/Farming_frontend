import React, { Component } from "react";

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
import Claim from "../components/Farming/Claim";

import Web3 from "web3";
import FarmingData from "../contract/Farming.json";
import ERC20Data from "../contract/ERC20.json";

import { BigNumber } from "ethers";
import { formatUnits, parseUnits, commify } from "@ethersproject/units";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: null,
      accountAddress: "",
      accountBalance: "",
      networkId: 0,
      metamaskConnected: false,
      contractDetected: false,
      farmingContract: null,
      contract_address: null,
      stable_coin_address: "",
      erc20Contract: null,
      token_allowance: 0,
      token_balance: 0,
      node_count_total: 0,
      node_count_types: [0, 0, 0],
      yield_total: 0,
      yield_types: [0, 0, 0],
      total_users: 0,
      total_deposited: 0,
      total_withdraw: 0,
      loading: true,
    };
  }

  componentWillMount = async () => {
    await this.loadWeb3();
    await this.loadBlockchainData();
  };

  loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
    this.setState({ web3: window.web3 });

    window.ethereum.on("chainChanged", (_chainId) => this.loadBlockchainData());
    // window.ethereum.on("accountsChanged", (array) => window.location.reload());
  };
  loadBlockchainData = async () => {
    const web3 = this.state.web3;

    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      this.setState({ metamaskConnected: false });
    } else {
      this.setState({ metamaskConnected: true });
      this.setState({ loading: true });
      this.setState({ accountAddress: accounts[0] });
      let accountBalance = await web3.eth.getBalance(accounts[0]);
      accountBalance = web3.utils.fromWei(accountBalance, "Ether");
      this.setState({ accountBalance });
      this.setState({ loading: false });
      const networkId = await web3.eth.net.getId();
      this.setState({ networkId });

      console.log(networkId, this.state.accountAddress, accountBalance);

      const networkData = FarmingData.networks[networkId];
      console.log(networkData);
      if (networkData) {
        this.setState({ loading: true });
        this.setState({ contract_address: networkData.address });
        const farmingContract = new web3.eth.Contract(
          FarmingData.abi,
          networkData.address
        );
        this.setState({ farmingContract });
        this.setState({ contractDetected: true });

        await this.loadData();

        this.setState({ loading: false });
      } else {
        this.setState({ contractDetected: false });
      }
    }
  };

  loadData = async () => {
    console.log("loading");
    const total_deposited = await this.state.farmingContract.methods
      .total_deposited()
      .call();
    this.setState({ total_deposited });
    const total_users = await this.state.farmingContract.methods
      .total_users()
      .call();
    this.setState({ total_users });

    var { total_numbers, number_of_each_type } =
      await this.state.farmingContract.methods
        .getNodesCount(this.state.accountAddress)
        .call();
    this.setState({ node_count_total: total_numbers });
    this.setState({ node_count_types: number_of_each_type });

    var { total_yield, yield_of_each_type } =
      await this.state.farmingContract.methods
        .getAvailableYields(this.state.accountAddress)
        .call();
    this.setState({ yield_total: total_yield });
    this.setState({ yield_types: yield_of_each_type });
    console.log(total_yield, yield_of_each_type);

    const total_withdraw = await this.state.farmingContract.methods
      .total_withdraw()
      .call();
    this.setState({ total_withdraw });

    const stable_coin_address = await this.state.farmingContract.methods
      .stable_coin_address()
      .call();
    this.setState({ stable_coin_address });

    //Stable Coin
    const erc20Contract = new this.state.web3.eth.Contract(
      ERC20Data.abi,
      stable_coin_address
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

  approveToken = async () => {
    this.setState({ loading: true });
    await this.state.erc20Contract.methods
      .approve(
        this.state.contract_address,
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      )
      .send({
        from: this.state.accountAddress,
        gas: 3000000,
        value: 0,
      })
      .on("confirmation", (confirmationNumber) => {
        return;
      });
  };

  createNode = async (node_type) => {
    this.setState({ loading: true });
    if (this.state.token_allowance < parseUnits("1000", 18)) {
      await this.approveToken();
    }
    await this.state.farmingContract.methods
      .createNode(node_type, "0x0000000000000000000000000000000000000000")
      .send({
        from: this.state.accountAddress,
        gas: 3000000,
        value: 0,
      })
      .on("confirmation", (confirmationNumber) => {
        this.setState({ loading: false });
        this.loadData();
      });
  };

  claimNodesAll = async () => {
    this.setState({ loading: true });
    await this.state.farmingContract.methods
      .claimNodesAll()
      .send({
        from: this.state.accountAddress,
        gas: 3000000,
        value: 0,
      })
      .on("confirmation", (confirmationNumber) => {
        this.setState({ loading: false });
        this.loadData();
      });
  };

  claimNodesForType = async (node_type) => {
    this.setState({ loading: true });
    await this.state.farmingContract.methods
      .claimNodesForType(node_type)
      .send({
        from: this.state.accountAddress,
        gas: 3000000,
        value: 0,
      })
      .on("confirmation", (confirmationNumber) => {
        this.setState({ loading: false });
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
          />
          {!this.state.metamaskConnected ? (
            <section className="author-area bg-white">
              <div
                className="container"
                style={{ minHeight: "450px", padding: "50px 5% 0px" }}
              >
                <div className="row justify-content-center">
                  <div className="col-12 col-md-8 col-lg-7">
                    <div className="intro text-center">
                      <h4 className="mt-3 mb-0  text-black">
                        Please connect your wallet.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <Claim
              createNode={this.createNode}
              claimNodesAll={this.claimNodesAll}
              claimNodesForType={this.claimNodesForType}
              node_count_total={this.state.node_count_total}
              node_count_types={this.state.node_count_types}
              yield_total={this.state.yield_total}
              yield_types={this.state.yield_types}
            />
          )}
          <div className="bg-white" style={{display:"none"}}>
            <p>networkId: {this.state.networkId}</p>
            <p>contract_address: {this.state.contract_address}</p>
            <p>total_deposited: {this.state.total_deposited / 1e18}$</p>
            <p>total_withdraw: {this.state.total_withdraw / 1e18}$</p>
            <p>total_users: {this.state.total_users}</p>
            <p>stable_coin_address: {this.state.stable_coin_address}</p>
            <p>token_allowance: {this.state.token_allowance}</p>
            <p>token_balance: {this.state.token_balance}</p>
          </div>
          <Footer />
          <ModalMenu
            disconnect={this.disconnect}
            createNode={this.createNode}
          />
          <Scrollup />
        </div>
      </>
    );
  }
}

export default Dashboard;
